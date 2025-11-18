import { Github, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full py-8 px-4 mt-16 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          Made with <Heart className="w-4 h-4 text-primary fill-primary" /> by TextStyler
        </div>
        <a
          href="https://github.com/goharian/style-weaver"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-foreground transition-colors"
        >
          <Github className="w-4 h-4" />
          View on GitHub
        </a>
      </div>
    </footer>
  );
};
