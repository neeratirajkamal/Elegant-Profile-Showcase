import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema } from "@shared/schema";
import type { MessageInput } from "@shared/routes";
import { useCreateMessage } from "@/hooks/use-messages";
import { useToast } from "@/hooks/use-toast";
import { AnimatedSection } from "../AnimatedSection";
import { Send, Mail, MapPin } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { trackFormStart, trackFormSubmission, trackEmailClick, trackSectionView } from "@/lib/analytics";
import { useEffect } from "react";

export function Contact() {
  const { toast } = useToast();
  const mutation = useCreateMessage();

  useEffect(() => {
    trackSectionView("contact");
  }, []);

  const form = useForm<MessageInput>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = (data: MessageInput) => {
    mutation.mutate(data, {
      onSuccess: () => {
        trackFormSubmission(true);
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        form.reset();
      },
      onError: (error) => {
        trackFormSubmission(false);
        toast({
          title: "Error",
          description: error.message || "Failed to send message. Please try again.",
          variant: "destructive",
        });
      },
    });
  };

  return (
    <AnimatedSection id="contact" className="bg-secondary/30 relative" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left — contact info */}
          <div>
            {/* H2 — Part 2 */}
            <h2 id="contact-heading" className="text-4xl md:text-6xl font-bold mb-6">
              Hire an AI Developer —{" "}
              <span className="text-primary">let's build together.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-md">
              Whether you're a recruiter looking for an AI Automation Developer in Hyderabad, a startup founder needing intelligent workflows, or a client with a project — reach out directly.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0" aria-hidden="true">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:neeratirajkamal0505@gmail.com"
                    className="font-medium text-lg hover:text-primary transition-colors"
                    data-testid="link-email"
                    aria-label="Email Raj Kamal Neerati"
                    onClick={trackEmailClick}
                  >
                    neeratirajkamal0505@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0" aria-hidden="true">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium text-lg">Hyderabad, Telangana, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — contact form */}
          <div className="glass-card p-8 md:p-10 rounded-3xl">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
                onFocus={trackFormStart}
                aria-label="Contact form"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your Name"
                          {...field}
                          className="bg-background/50 border-white/10 focus-visible:ring-primary h-12"
                          data-testid="input-name"
                          aria-label="Your name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="your@email.com"
                          type="email"
                          {...field}
                          className="bg-background/50 border-white/10 focus-visible:ring-primary h-12"
                          data-testid="input-email"
                          aria-label="Your email address"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell me about your project or opportunity..."
                          className="min-h-[150px] resize-none bg-background/50 border-white/10 focus-visible:ring-primary"
                          {...field}
                          data-testid="textarea-message"
                          aria-label="Your message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full h-14 rounded-xl text-base font-semibold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-transform"
                  disabled={mutation.isPending}
                  data-testid="button-submit-message"
                  aria-label="Send message to Raj Kamal Neerati"
                >
                  {mutation.isPending ? "Sending..." : "Send Message"}
                  {!mutation.isPending && <Send className="w-5 h-5 ml-2" aria-hidden="true" />}
                </Button>
              </form>
            </Form>
          </div>

        </div>
      </div>
    </AnimatedSection>
  );
}
