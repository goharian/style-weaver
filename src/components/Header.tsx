import { Sparkles } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  return (
    <header className="w-full py-8 px-4">
      <div className="max-w-6xl mx-auto relative">
        <div className="absolute right-0 top-0 animate-slide-in-right">
          <ThemeToggle />
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2 animate-fade-in-up">
            <Sparkles className="w-8 h-8 text-primary animate-pulse-glow" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
              TextStyler
            </h1>
          </div>
          <p className="text-muted-foreground text-lg animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "backwards" }}>
            Transform your text into beautiful, unique styles ✨
          </p>
        </div>
      </div>
    </header>
  );
};
