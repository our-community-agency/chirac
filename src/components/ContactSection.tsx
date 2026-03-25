import { motion } from "framer-motion";
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { Send } from "lucide-react";

import { toast } from "@/components/ui/use-toast";
import { serviceOptions } from "@/content/siteContent";
import { triggerPrompt, subscribeToPromptBridge } from "@/lib/promptBridge";

type BriefState = {
  name: string;
  email: string;
  organization: string;
  project: string;
  message: string;
};

const initialBrief: BriefState = {
  name: "",
  email: "",
  organization: "",
  project: "",
  message: "",
};

const buildCreativeBrief = (brief: BriefState, selectedServices: string[]) =>
  [
    "Help me continue the conversation with Andrew at Chicago AMP.",
    brief.organization ? `Organization: ${brief.organization}` : null,
    brief.name ? `Contact name: ${brief.name}` : null,
    brief.email ? `Contact email: ${brief.email}` : null,
    brief.project ? `Project focus: ${brief.project}` : null,
    selectedServices.length ? `Services: ${selectedServices.join(", ")}` : null,
    brief.message ? `Project notes: ${brief.message}` : null,
    "Follow up with thoughtful questions about creative direction, pacing, production approach, and the kind of footage or atmosphere that would make this land.",
  ]
    .filter(Boolean)
    .join("\n");

const ContactSection = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [brief, setBrief] = useState<BriefState>(initialBrief);
  const [generatedBrief, setGeneratedBrief] = useState("");

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const updateField =
    (field: keyof BriefState) =>
    (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
      const { value } = event.target;
      setBrief((current) => ({ ...current, [field]: value }));
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const compiledBrief = buildCreativeBrief(brief, selectedServices);
    setGeneratedBrief(compiledBrief);

    const mode = triggerPrompt({
      prompt: compiledBrief,
      title: brief.project,
      services: selectedServices,
    });

    toast({
      title: mode === "local" ? "Creative brief ready" : "Follow-up started",
      description:
        mode === "local"
          ? "The brief is staged below and the project details stay in the form for review."
          : "A deeper follow-up was triggered from this project brief.",
    });
  };

  useEffect(() => {
    return subscribeToPromptBridge((payload) => {
      setSelectedServices(payload.services?.length ? payload.services : []);
      setBrief((current) => ({
        ...current,
        project: payload.title ?? current.project,
        message: payload.prompt,
      }));
    });
  }, []);

  return (
    <section id="contact" className="section-padding py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 gap-8 lg:grid-cols-[0.78fr_1.22fr]"
      >
        <div className="surface-panel p-8 md:p-10">
          <p className="eyebrow mb-4">Contact</p>
          <h2 className="heading-section text-foreground">
            Shape the next brief while the momentum is still there.
          </h2>
          <p className="mt-6 text-base leading-8 text-muted-foreground">
            The project cards above feed into this form automatically. Use it to
            build a stronger prompt, gather the essentials, and keep the next
            conversation moving.
          </p>

          <div className="mt-8 space-y-4">
            <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-5">
              <p className="text-[11px] uppercase tracking-[0.32em] text-primary">
                Best for
              </p>
              <p className="mt-3 text-lg leading-8 text-foreground/85">
                Live launches, education storytelling, recap films, motion systems,
                and global shoots that need a calm production spine.
              </p>
            </div>
            <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-5">
              <p className="text-[11px] uppercase tracking-[0.32em] text-primary">
                Workflow
              </p>
              <p className="mt-3 text-lg leading-8 text-foreground/85">
                Pick a focus, add context, and the page turns it into a follow-up
                prompt plus a reusable creative brief.
              </p>
            </div>
          </div>
        </div>

        <div className="surface-panel p-8 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="mb-4 block text-sm font-medium uppercase tracking-[0.28em] text-foreground">
                What do you need?
              </label>
              <div className="flex flex-wrap gap-2">
                {serviceOptions.map((service) => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => toggleService(service)}
                    className={`rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.2em] transition-all duration-300 ${
                      selectedServices.includes(service)
                        ? "border border-primary/40 bg-primary/15 text-primary"
                        : "border border-white/10 bg-white/[0.03] text-muted-foreground hover:border-white/20 hover:text-foreground"
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Name
                </label>
                <input
                  type="text"
                  value={brief.name}
                  onChange={updateField("name")}
                  className="w-full rounded-[1rem] border border-white/10 bg-white/[0.03] px-4 py-3 text-foreground outline-none transition-colors focus:border-primary/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Email
                </label>
                <input
                  type="email"
                  value={brief.email}
                  onChange={updateField("email")}
                  className="w-full rounded-[1rem] border border-white/10 bg-white/[0.03] px-4 py-3 text-foreground outline-none transition-colors focus:border-primary/50"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Organization
                </label>
                <input
                  type="text"
                  value={brief.organization}
                  onChange={updateField("organization")}
                  className="w-full rounded-[1rem] border border-white/10 bg-white/[0.03] px-4 py-3 text-foreground outline-none transition-colors focus:border-primary/50"
                  placeholder="Brand, school, venue, or team"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Project focus
                </label>
                <input
                  type="text"
                  value={brief.project}
                  onChange={updateField("project")}
                  className="w-full rounded-[1rem] border border-white/10 bg-white/[0.03] px-4 py-3 text-foreground outline-none transition-colors focus:border-primary/50"
                  placeholder="What are we building?"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Project notes
              </label>
              <textarea
                rows={6}
                value={brief.message}
                onChange={updateField("message")}
                className="w-full rounded-[1.2rem] border border-white/10 bg-white/[0.03] px-4 py-4 text-foreground outline-none transition-colors focus:border-primary/50"
                placeholder="What should the room feel like? What footage or atmosphere matters most? Any timeline pressure?"
              />
            </div>

            <button
              type="submit"
              className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-[0.26em] text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
            >
              Build the Creative Brief
              <Send
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </form>

          {generatedBrief ? (
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 rounded-[1.4rem] border border-white/10 bg-black/25 p-5"
            >
              <p className="text-[11px] uppercase tracking-[0.32em] text-primary">
                Creative brief
              </p>
              <pre className="mt-4 whitespace-pre-wrap font-sans text-sm leading-7 text-foreground/80">
                {generatedBrief}
              </pre>
            </motion.div>
          ) : null}
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
