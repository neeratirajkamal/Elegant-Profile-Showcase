import { useMutation } from "@tanstack/react-query";
import { api, type MessageInput, type MessageResponse } from "@shared/routes";

export function useCreateMessage() {
  return useMutation({
    mutationFn: async (data: MessageInput): Promise<MessageResponse> => {
      const validated = api.messages.create.input.parse(data);
      
      const res = await fetch(api.messages.create.path, {
        method: api.messages.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        let errorMessage = 'Failed to send message';
        try {
          const errorData = await res.json();
          if (res.status === 400) {
            const error = api.messages.create.responses[400].parse(errorData);
            errorMessage = error.message;
          } else if (errorData.message) {
            errorMessage = errorData.message;
          }
        } catch (e) {
          // Fallback to default error message if JSON parsing fails
        }
        throw new Error(errorMessage);
      }

      return api.messages.create.responses[201].parse(await res.json());
    }
  });
}
