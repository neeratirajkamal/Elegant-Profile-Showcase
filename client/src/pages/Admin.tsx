import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import {
  Users, Eye, MousePointer, Search, Mail, LogOut,
  TrendingUp, Activity, Globe, RefreshCw, Lock
} from "lucide-react";

interface AuthUser {
  user: { email: string; name: string } | null;
}

interface AnalyticsStats {
  activeUsers: number;
  sessions: number;
  totalUsers: number;
  pageViews: number;
  avgSessionDuration: number;
  bounceRate: number;
  dailyData: { date: string; sessions: number; users: number; pageViews: number }[];
  source: "live" | "mock";
}

interface SearchStats {
  topQueries: { query: string; clicks: number; impressions: number; ctr: number; position: number }[];
  topPages: { page: string; clicks: number; impressions: number; ctr: number }[];
  totals: { clicks: number; impressions: number };
  source: "live" | "mock";
}

interface Message {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

function StatCard({ icon: Icon, label, value, sub }: {
  icon: any; label: string; value: string | number; sub?: string
}) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col gap-2">
      <div className="flex items-center gap-2 text-primary">
        <Icon className="w-5 h-5" />
        <span className="text-sm text-muted-foreground">{label}</span>
      </div>
      <p className="text-3xl font-bold text-foreground">{value}</p>
      {sub && <p className="text-xs text-muted-foreground">{sub}</p>}
    </div>
  );
}

function LoginScreen() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="bg-white/5 border border-white/10 rounded-3xl p-10 max-w-sm w-full mx-4 text-center">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <Lock className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-2xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground mb-8 text-sm">
          Sign in with your Google account to access portfolio analytics.
        </p>
        <a
          href="/auth/google"
          className="w-full flex items-center justify-center gap-3 bg-primary text-primary-foreground font-semibold py-3 px-6 rounded-full hover:bg-primary/90 transition-all"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Sign in with Google
        </a>
      </div>
    </div>
  );
}

export default function Admin() {
  const [activeTab, setActiveTab] = useState<"analytics" | "search" | "messages">("analytics");

  const { data: auth, isLoading: authLoading } = useQuery<AuthUser>({
    queryKey: ["/auth/me"],
  });

  const { data: analytics, isLoading: analyticsLoading, refetch: refetchAnalytics } = useQuery<AnalyticsStats>({
    queryKey: ["/api/admin/analytics"],
    enabled: !!auth?.user,
  });

  const { data: searchData, isLoading: searchLoading, refetch: refetchSearch } = useQuery<SearchStats>({
    queryKey: ["/api/admin/search-console"],
    enabled: !!auth?.user,
  });

  const { data: messages, isLoading: messagesLoading, refetch: refetchMessages } = useQuery<Message[]>({
    queryKey: ["/api/admin/messages"],
    enabled: !!auth?.user,
  });

  const logoutMutation = useMutation({
    mutationFn: () => apiRequest("POST", "/auth/logout"),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/auth/me"] });
    },
  });

  if (authLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!auth?.user) return <LoginScreen />;

  const tabs = [
    { id: "analytics", label: "Analytics", icon: Activity },
    { id: "search", label: "Search Console", icon: Search },
    { id: "messages", label: "Messages", icon: Mail },
  ] as const;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold">Portfolio Admin</h1>
          <p className="text-sm text-muted-foreground">{auth.user.email}</p>
        </div>
        <button
          onClick={() => logoutMutation.mutate()}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors px-4 py-2 rounded-full border border-white/10 hover:border-white/20"
        >
          <LogOut className="w-4 h-4" />
          Sign out
        </button>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-2 mb-8 bg-white/5 rounded-2xl p-1 w-fit">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeTab === id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>

        {activeTab === "analytics" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Google Analytics — Last 30 Days</h2>
              <button
                onClick={() => refetchAnalytics()}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <RefreshCw className="w-4 h-4" /> Refresh
              </button>
            </div>

            {analyticsLoading ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 h-28 animate-pulse" />
                ))}
              </div>
            ) : (
              <>
                {analytics?.source === "mock" && (
                  <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl px-4 py-3 text-sm text-yellow-400">
                    Connect your GA4 Property ID to see live data. Set <code>GA4_PROPERTY_ID</code> environment variable.
                  </div>
                )}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  <StatCard icon={Activity} label="Active Now" value={analytics?.activeUsers ?? 0} />
                  <StatCard icon={Users} label="Total Users" value={analytics?.totalUsers ?? 0} sub="Last 30 days" />
                  <StatCard icon={TrendingUp} label="Sessions" value={analytics?.sessions ?? 0} sub="Last 30 days" />
                  <StatCard icon={Eye} label="Page Views" value={analytics?.pageViews ?? 0} />
                  <StatCard icon={MousePointer} label="Bounce Rate" value={`${analytics?.bounceRate ?? 0}%`} />
                  <StatCard icon={Globe} label="Avg Duration" value={`${analytics?.avgSessionDuration ?? 0}s`} />
                </div>

                {analytics?.dailyData && analytics.dailyData.length > 0 && (
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <h3 className="text-sm font-medium text-muted-foreground mb-4">Daily Sessions (30d)</h3>
                    <ResponsiveContainer width="100%" height={200}>
                      <BarChart data={analytics.dailyData}>
                        <XAxis dataKey="date" tick={{ fontSize: 10 }} />
                        <YAxis tick={{ fontSize: 10 }} />
                        <Tooltip />
                        <Bar dataKey="sessions" fill="hsl(var(--primary))" radius={4} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                )}
              </>
            )}
          </div>
        )}

        {activeTab === "search" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Google Search Console</h2>
              <button
                onClick={() => refetchSearch()}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <RefreshCw className="w-4 h-4" /> Refresh
              </button>
            </div>

            {searchLoading ? (
              <div className="h-48 bg-white/5 border border-white/10 rounded-2xl animate-pulse" />
            ) : (
              <>
                <div className="grid grid-cols-2 gap-4">
                  <StatCard icon={MousePointer} label="Total Clicks" value={searchData?.totals.clicks ?? 0} sub="Apr–May 2026" />
                  <StatCard icon={Eye} label="Impressions" value={searchData?.totals.impressions ?? 0} sub="Apr–May 2026" />
                </div>

                {searchData?.topQueries && searchData.topQueries.length > 0 ? (
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <h3 className="text-sm font-medium text-muted-foreground mb-4">Top Search Queries</h3>
                    <div className="space-y-2">
                      {searchData.topQueries.map((q, i) => (
                        <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                          <span className="text-sm text-foreground truncate max-w-xs">{q.query}</span>
                          <div className="flex gap-6 text-xs text-muted-foreground shrink-0">
                            <span>{q.clicks} clicks</span>
                            <span>{q.impressions} impr.</span>
                            <span>#{q.position}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center text-muted-foreground text-sm">
                    No search data yet — Google needs a few days to accumulate data after verification.
                  </div>
                )}
              </>
            )}
          </div>
        )}

        {activeTab === "messages" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Contact Form Messages</h2>
              <button
                onClick={() => refetchMessages()}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <RefreshCw className="w-4 h-4" /> Refresh
              </button>
            </div>

            {messagesLoading ? (
              <div className="space-y-3">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-24 bg-white/5 border border-white/10 rounded-2xl animate-pulse" />
                ))}
              </div>
            ) : messages && messages.length > 0 ? (
              <div className="space-y-3">
                {messages.map((msg) => (
                  <div key={msg.id} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="font-semibold text-foreground">{msg.name}</span>
                        <span className="text-muted-foreground text-sm ml-2">— {msg.email}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {new Date(msg.createdAt).toLocaleDateString("en-IN", {
                          day: "numeric", month: "short", year: "numeric"
                        })}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{msg.message}</p>
                    <a
                      href={`mailto:${msg.email}`}
                      className="mt-3 inline-flex items-center gap-1.5 text-xs text-primary hover:underline"
                    >
                      <Mail className="w-3 h-3" /> Reply
                    </a>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center text-muted-foreground text-sm">
                No messages yet. They'll appear here when someone submits the contact form.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
