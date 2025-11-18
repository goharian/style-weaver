import { Sparkles } from "lucide-react";

export const Header = () => {
  return (
    <header className="w-full py-8 px-4 text-center">
      <div className="flex items-center justify-center gap-2 mb-2">
        <Sparkles className="w-8 h-8 text-primary" />
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
          TextStyler
        </h1>
      </div>
      <p className="text-muted-foreground text-lg">
        Transform your text into beautiful, unique styles ✨
      </p>
    </header>
  );
};
