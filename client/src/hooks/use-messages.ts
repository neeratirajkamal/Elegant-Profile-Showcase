import { useMutation } from "@tanstack/react-query";
import { api, type MessageInput, type MessageResponse } from "@shared/routes";

async function parseJsonSafe(res: Response): Promise<unknown> {
  const text = await res.text();
  if (!text || !text.trim()) {
    throw new Error("Server returned an empty response. Please try again.");
  }
  try {
    return JSON.parse(text);
  } catch {
    throw new Error("Server error. Please try again or email neeratirajkamal0505@gmail.com directly.");
  }
}

export function useCreateMessage() {
  return useMutation({
    mutationFn: async (data: MessageInput): Promise<MessageResponse> => {
      const validated = api.messages.create.input.parse(data);

      const res = await fetch(api.messages.create.path, {
        method: api.messages.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      const json = await parseJsonSafe(res);

      if (!res.ok) {
        let errorMessage = "Failed to send message. Please try again.";
        try {
          const err = json as any;
          if (err?.message) errorMessage = err.message;
        } catch {
          // use default
        }
        throw new Error(errorMessage);
      }

      return json as MessageResponse;
    },
  });
}
