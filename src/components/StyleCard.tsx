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
    <Card className="group hover:shadow-[0_8px_30px_hsl(var(--primary)/0.15)] transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] border-2 hover:border-primary/30 cursor-pointer">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          <Button
            size="sm"
            variant="ghost"
            onClick={handleCopy}
            className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary/10 hover:scale-110"
          >
            {copied ? (
              <Check className="h-4 w-4 text-primary animate-scale-in" />
            ) : (
              <Copy className="h-4 w-4 group-hover:text-primary transition-colors" />
            )}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-lg break-all select-all group-hover:text-foreground transition-colors">{text || originalText}</p>
      </CardContent>
    </Card>
  );
};
