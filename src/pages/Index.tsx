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

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-8">
        <div className="mb-12 animate-scale-in">
          <Textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type or paste your text here..."
            className="min-h-[150px] text-lg resize-none border-2 focus:border-primary transition-colors"
          />
        </div>

        {inputText && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {textStyles.map((style, index) => (
              <StyleCard
                key={index}
                title={style.name}
                text={style.transform(inputText)}
                originalText={inputText}
              />
            ))}
          </div>
        )}

        {!inputText && (
          <div className="text-center py-16 animate-fade-in">
            <p className="text-2xl text-muted-foreground">
              Start typing to see the magic ✨
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
