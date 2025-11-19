import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StyleCard } from "@/components/StyleCard";
import { Textarea } from "@/components/ui/textarea";
import { textStyles } from "@/utils/textTransformers";

const Index = () => {
  const [inputText, setInputText] = useState("");

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-16 animate-fade-in-up">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent-foreground to-primary-glow rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <Textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="✨ Type or paste your text here to see the magic..."
              className="relative min-h-[180px] text-lg sm:text-xl resize-none border-2 bg-card focus:border-primary transition-all duration-300 focus:shadow-[0_0_32px_hsl(var(--primary)/0.25)] hover:border-primary/50 placeholder:text-muted-foreground/60 font-medium rounded-2xl px-6 py-5"
            />
          </div>
        </div>

        {inputText && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {textStyles.map((style, index) => (
              <div
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s`, animationFillMode: "backwards" }}
              >
                <StyleCard
                  title={style.name}
                  text={style.transform(inputText)}
                  originalText={inputText}
                />
              </div>
            ))}
          </div>
        )}

        {!inputText && (
          <div className="text-center py-20 animate-fade-in">
            <div className="inline-block p-8 rounded-3xl bg-gradient-to-br from-primary/5 via-accent-foreground/5 to-primary-glow/5 backdrop-blur-sm">
              <p className="text-3xl font-semibold bg-gradient-to-r from-primary via-accent-foreground to-primary-glow bg-clip-text text-transparent mb-3">
                Start typing to see the magic
              </p>
              <p className="text-lg text-muted-foreground">Transform your text instantly ✨</p>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
