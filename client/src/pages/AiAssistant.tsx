import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User, Sparkles, X, ChevronRight, MessageSquare, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { museumData } from "@/lib/data";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const SUGGESTED_QUESTIONS = [
  "Raconte-moi l'histoire du Tonkin",
  "Quelles sont les traditions du régiment ?",
  "Que s'est-il passé en Algérie ?",
  "Parle-moi de l'opération Harpie en Guyane",
];

export default function AiAssistant() {
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isConnected]);

  const handleConnect = () => {
    setIsConnecting(true);
    // Simulate connection delay
    setTimeout(() => {
      setIsConnecting(false);
      setIsConnected(true);
      setMessages([
        {
          id: "welcome",
          role: "assistant",
          content: "Bonjour. Je suis l'assistant virtuel du musée. Je peux répondre à vos questions sur l'histoire du régiment, ses campagnes et ses traditions. Comment puis-je vous aider aujourd'hui ?",
          timestamp: new Date(),
        },
      ]);
    }, 1500);
  };

  const handleSendMessage = (text: string = inputValue) => {
    if (!text.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");

    // Simulate AI response
    setTimeout(() => {
      const response = generateResponse(text);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: response,
          timestamp: new Date(),
        },
      ]);
    }, 1000 + Math.random() * 1000);
  };

  const generateResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes("tonkin")) {
      return "La période du Tonkin (1890-1946) marque les débuts du régiment en Indochine. C'était une époque d'exploration et de pacification, mais aussi de vie en garnison dans des postes isolés. Voulez-vous en savoir plus sur une bataille spécifique ?";
    }
    if (lowerQuery.includes("algérie") || lowerQuery.includes("algerie")) {
      return "La guerre d'Algérie (1956-1962) a été une période complexe de maintien de l'ordre et de contre-insurrection. Le régiment a opéré principalement dans le secteur de Palestro et a participé aux opérations 'Commandos de Chasse'.";
    }
    if (lowerQuery.includes("guyane")) {
      return "Depuis 1976, le régiment est installé en Guyane. Ses missions principales sont la protection du Centre Spatial Guyanais (opération Titan) et la lutte contre l'orpaillage illégal (opération Harpie) en forêt équatoriale.";
    }
    if (lowerQuery.includes("tradition") || lowerQuery.includes("esprit")) {
      return "L'Esprit du 9 est forgé par plus d'un siècle d'histoire. Il se manifeste à travers nos chants, notre drapeau décoré, et nos traditions comme la fête de la Pagode qui commémore nos origines indochinoises.";
    }
    
    return "C'est une excellente question. Je n'ai pas la réponse exacte dans ma base de connaissances immédiate, mais je vous invite à explorer la section correspondante du musée pour découvrir tous les détails.";
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-foreground flex flex-col relative overflow-hidden font-sans">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-white/10 bg-zinc-900/50 backdrop-blur-md p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-primary/20 p-2 rounded-lg">
            <Bot className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="font-bold text-lg text-white">Assistant Musée</h1>
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${isConnected ? "bg-green-500" : "bg-yellow-500"}`} />
              <span className="text-xs text-muted-foreground">
                {isConnected ? "En ligne" : "En attente"}
              </span>
            </div>
          </div>
        </div>
        <Button variant="ghost" size="icon" onClick={() => window.history.back()}>
          <X className="h-5 w-5" />
        </Button>
      </header>

      {/* Main Content */}
      <main className="flex-1 relative z-10 flex flex-col max-w-3xl mx-auto w-full h-[calc(100vh-80px)]">
        <AnimatePresence mode="wait">
          {!isConnected ? (
            <motion.div
              key="connect"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex-1 flex flex-col items-center justify-center p-6 text-center"
            >
              <div className="w-24 h-24 bg-zinc-800 rounded-full flex items-center justify-center mb-8 relative">
                <div className="absolute inset-0 rounded-full border border-white/10 animate-ping opacity-20" />
                <Bot className="h-10 w-10 text-white" />
              </div>
              
              <h2 className="text-3xl font-serif font-bold text-white mb-4">
                Bonjour, visiteur
              </h2>
              <p className="text-muted-foreground max-w-md mb-8 leading-relaxed">
                Je suis votre guide virtuel personnel. Connectez-vous pour explorer l'histoire du régiment, poser des questions et découvrir des anecdotes fascinantes.
              </p>

              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full text-lg shadow-xl shadow-primary/20 transition-all hover:scale-105"
                onClick={handleConnect}
                disabled={isConnecting}
              >
                {isConnecting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Connexion en cours...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-5 w-5" />
                    Se connecter à l'assistant
                  </>
                )}
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex-1 flex flex-col h-full"
            >
              <div 
                ref={scrollRef}
                className="flex-1 overflow-y-auto p-4 space-y-6 scroll-smooth"
              >
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div 
                      className={`
                        max-w-[80%] rounded-2xl p-4 shadow-sm
                        ${msg.role === "user" 
                          ? "bg-primary text-primary-foreground rounded-tr-sm" 
                          : "bg-zinc-800 text-zinc-100 rounded-tl-sm border border-white/5"}
                      `}
                    >
                      <p className="leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                      <span className="text-[10px] opacity-50 mt-2 block text-right">
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Suggestions (only if few messages) */}
              {messages.length < 3 && (
                <div className="px-4 pb-2">
                  <p className="text-xs text-muted-foreground mb-2 ml-1">Questions suggérées :</p>
                  <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                    {SUGGESTED_QUESTIONS.map((q, i) => (
                      <button
                        key={i}
                        onClick={() => handleSendMessage(q)}
                        className="whitespace-nowrap bg-zinc-800 hover:bg-zinc-700 border border-white/10 rounded-full px-4 py-2 text-sm text-zinc-300 transition-colors flex-shrink-0"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input Area */}
              <div className="p-4 bg-zinc-900/80 backdrop-blur border-t border-white/10">
                <form 
                  onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
                  className="relative flex items-center gap-2 max-w-3xl mx-auto"
                >
                  <Input
                    ref={inputRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Posez une question sur le musée..."
                    className="flex-1 bg-zinc-800/50 border-white/10 focus:border-primary/50 text-white placeholder:text-zinc-500 rounded-full py-6 pl-6 pr-12"
                  />
                  <Button 
                    type="submit" 
                    size="icon" 
                    className="absolute right-2 rounded-full h-10 w-10 bg-primary hover:bg-primary/90"
                    disabled={!inputValue.trim()}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
