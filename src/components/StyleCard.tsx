import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

interface StyleCardProps {
  title: string;
  text: string;
  originalText: string;
}

export const StyleCard = ({ title, text, originalText }: StyleCardProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast.success("Copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy text");
    }
  };

  return (
    <Card className="group relative overflow-hidden hover:shadow-[0_12px_40px_hsl(var(--primary)/0.2)] transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/40 cursor-pointer bg-gradient-to-br from-card to-card/80 backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <CardHeader className="pb-3 relative z-10">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-semibold text-muted-foreground group-hover:text-primary transition-colors tracking-wide uppercase">
            {title}
          </CardTitle>
          <Button
            size="sm"
            variant="ghost"
            onClick={handleCopy}
            className="h-9 w-9 p-0 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary/15 hover:scale-110 rounded-xl"
          >
            {copied ? (
              <Check className="h-4 w-4 text-primary animate-scale-in drop-shadow-[0_0_8px_hsl(var(--primary)/0.6)]" />
            ) : (
              <Copy className="h-4 w-4 group-hover:text-primary transition-colors" />
            )}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="relative z-10">
        <p className="text-xl font-medium break-all select-all text-foreground/90 group-hover:text-foreground transition-colors leading-relaxed">{text || originalText}</p>
      </CardContent>
    </Card>
  );
};
