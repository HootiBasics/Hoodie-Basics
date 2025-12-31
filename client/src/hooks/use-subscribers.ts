import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type InsertSubscriber } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useSubscribe() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: InsertSubscriber) => {
      // Validate with Zod before sending
      const validated = api.subscribers.subscribe.input.parse(data);
      
      const res = await fetch(api.subscribers.subscribe.path, {
        method: api.subscribers.subscribe.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.subscribers.subscribe.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error("Failed to subscribe");
      }

      return api.subscribers.subscribe.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "¡Bienvenido a la familia!",
        description: "Estás suscrito a nuestras noticias exclusivas.",
        variant: "default",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
