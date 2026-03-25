import logo from "@/assets/chicago-amp-logo.png";
import { triggerPrompt } from "@/lib/promptBridge";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="section-padding border-t border-white/10 py-16">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="flex items-center gap-4">
            <img src={logo} alt="Chicago AMP" className="h-12 w-auto" />
            <div>
              <p className="text-[10px] uppercase tracking-[0.42em] text-muted-foreground">
                Chicago AMP
              </p>
              <p className="mt-1 text-sm text-foreground/75">
                Motion-first presence for live rooms, education stories, and global
                campaign moments.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() =>
              triggerPrompt({
                prompt:
                  "Start a conversation with Andrew at Chicago AMP about a project that needs live energy, cinematic motion, and a stronger digital presence.",
                services: ["Live Event Direction", "Campaign Capture"],
              })
            }
            className="mt-6 inline-flex rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.26em] text-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            Start a conversation
          </button>
        </div>

        <div className="flex flex-col gap-6 lg:items-end">
          <div className="flex flex-wrap items-center gap-6">
            {[
              ["Work", "#work"],
              ["Approach", "#about"],
              ["Services", "#services"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-xs uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-primary"
              >
                {label}
              </a>
            ))}
          </div>
          <p className="text-xs tracking-[0.22em] text-muted-foreground">
            © {year} Chicago AMP. Built to move.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
