import logo from "@/assets/chicago-amp-logo.png";

const Footer = () => (
  <footer className="py-16 section-padding border-t border-border">
    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Chicago AMP" className="h-12 w-auto" />
      </div>
      <div className="flex items-center gap-8">
        {["Work", "Services", "About", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors"
          >
            {item}
          </a>
        ))}
      </div>
      <p className="text-muted-foreground text-xs tracking-wider">
        © 2025 Chicago AMP. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
