import { Sparkles } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
export const Header = () => {
  return <header className="w-full py-8 px-4">
      <div className="max-w-6xl mx-auto relative">
        <div className="absolute right-0 top-0 md:top-0 animate-slide-in-right z-10">
          <ThemeToggle />
        </div>
        <div className="text-center pt-12 md:pt-0">
          <div className="flex items-center justify-center gap-3 mb-3 animate-fade-in-up">
            <Sparkles className="w-9 h-9 text-primary animate-pulse-glow drop-shadow-[0_0_12px_hsl(var(--primary)/0.5)]" />
            <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-primary via-accent-foreground to-primary-glow bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 tracking-tight py-[6px]">
              TextStyler
            </h1>
          </div>
          <p className="text-muted-foreground text-xl font-medium animate-fade-in max-w-2xl mx-auto" style={{
          animationDelay: "0.2s",
          animationFillMode: "backwards"
        }}>
            Transform your text into beautiful, unique styles with one click ✨
          </p>
        </div>
      </div>
    </header>;
};