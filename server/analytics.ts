import { google } from "googleapis";

const GA4_PROPERTY_ID = process.env.GA4_PROPERTY_ID || "";
const SEARCH_CONSOLE_SITE = "https://elegant-profile-showcase.onrender.com/";

function getOAuth2Client(accessToken: string) {
  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    `${process.env.SITE_URL || "https://elegant-profile-showcase.onrender.com"}/auth/google/callback`
  );
  oauth2Client.setCredentials({ access_token: accessToken });
  return oauth2Client;
}

export async function getGA4Stats(accessToken: string) {
  try {
    if (!GA4_PROPERTY_ID) return getMockStats();

    const auth = getOAuth2Client(accessToken);
    const analyticsData = google.analyticsdata({ version: "v1beta", auth });

    const [realtimeRes, reportRes] = await Promise.all([
      analyticsData.properties.runRealtimeReport({
        property: `properties/${GA4_PROPERTY_ID}`,
        requestBody: {
          metrics: [{ name: "activeUsers" }],
        },
      }),
      analyticsData.properties.runReport({
        property: `properties/${GA4_PROPERTY_ID}`,
        requestBody: {
          dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
          metrics: [
            { name: "sessions" },
            { name: "totalUsers" },
            { name: "screenPageViews" },
            { name: "averageSessionDuration" },
            { name: "bounceRate" },
          ],
          dimensions: [{ name: "date" }],
          orderBys: [{ dimension: { dimensionName: "date" }, desc: false }],
        },
      }),
    ]);

    const activeUsers = parseInt(
      realtimeRes.data.rows?.[0]?.metricValues?.[0]?.value || "0"
    );
    const totals = reportRes.data.totals?.[0]?.metricValues || [];
    const dailyData = (reportRes.data.rows || []).map((row) => ({
      date: row.dimensionValues?.[0]?.value || "",
      sessions: parseInt(row.metricValues?.[0]?.value || "0"),
      users: parseInt(row.metricValues?.[1]?.value || "0"),
      pageViews: parseInt(row.metricValues?.[2]?.value || "0"),
    }));

    return {
      activeUsers,
      sessions: parseInt(totals[0]?.value || "0"),
      totalUsers: parseInt(totals[1]?.value || "0"),
      pageViews: parseInt(totals[2]?.value || "0"),
      avgSessionDuration: Math.round(parseFloat(totals[3]?.value || "0")),
      bounceRate: Math.round(parseFloat(totals[4]?.value || "0") * 100) / 100,
      dailyData,
      source: "live" as const,
    };
  } catch (err) {
    console.error("GA4 API error:", err);
    return getMockStats();
  }
}

export async function getSearchConsoleStats(accessToken: string) {
  try {
    const auth = getOAuth2Client(accessToken);
    const searchconsole = google.searchconsole({ version: "v1", auth });

    const today = new Date().toISOString().split("T")[0];
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0];

    const [queryRes, pageRes] = await Promise.all([
      searchconsole.searchanalytics.query({
        siteUrl: SEARCH_CONSOLE_SITE,
        requestBody: {
          startDate: thirtyDaysAgo,
          endDate: today,
          dimensions: ["query"],
          rowLimit: 10,
        },
      }),
      searchconsole.searchanalytics.query({
        siteUrl: SEARCH_CONSOLE_SITE,
        requestBody: {
          startDate: thirtyDaysAgo,
          endDate: today,
          dimensions: ["page"],
          rowLimit: 5,
        },
      }),
    ]);

    const topQueries = (queryRes.data.rows || []).map((row) => ({
      query: row.keys?.[0] || "",
      clicks: row.clicks || 0,
      impressions: row.impressions || 0,
      ctr: Math.round((row.ctr || 0) * 10000) / 100,
      position: Math.round((row.position || 0) * 10) / 10,
    }));

    const topPages = (pageRes.data.rows || []).map((row) => ({
      page: (row.keys?.[0] || "").replace(SEARCH_CONSOLE_SITE, "/"),
      clicks: row.clicks || 0,
      impressions: row.impressions || 0,
      ctr: Math.round((row.ctr || 0) * 10000) / 100,
    }));

    return {
      topQueries,
      topPages,
      totals: {
        clicks: topQueries.reduce((s, r) => s + r.clicks, 0),
        impressions: topQueries.reduce((s, r) => s + r.impressions, 0),
      },
      source: "live" as const,
    };
  } catch (err) {
    console.error("Search Console API error:", err);
    return getMockSearchStats();
  }
}

function getMockStats() {
  return {
    activeUsers: 0,
    sessions: 0,
    totalUsers: 0,
    pageViews: 0,
    avgSessionDuration: 0,
    bounceRate: 0,
    dailyData: [] as { date: string; sessions: number; users: number; pageViews: number }[],
    source: "mock" as const,
  };
}

function getMockSearchStats() {
  return {
    topQueries: [] as { query: string; clicks: number; impressions: number; ctr: number; position: number }[],
    topPages: [] as { page: string; clicks: number; impressions: number; ctr: number }[],
    totals: { clicks: 0, impressions: 0 },
    source: "mock" as const,
  };
}
