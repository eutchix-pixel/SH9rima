import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Settings, Type, Sun, Moon, Eye, Languages, Baby } from "lucide-react";
import { useSettings } from "@/lib/context";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export function AccessibilityMenu() {
  const {
    language,
    setLanguage,
    theme,
    setTheme,
    fontSize,
    setFontSize,
    dyslexiaMode,
    toggleDyslexiaMode,
    kidsMode,
    toggleKidsMode,
  } = useSettings();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="text-foreground">
          <Settings className="h-6 w-6" />
          <span className="sr-only">Settings</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="font-serif text-2xl">Paramètres / Settings</SheetTitle>
        </SheetHeader>
        <div className="py-6 space-y-6">
          
          {/* Language */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium flex items-center gap-2">
              <Languages className="h-4 w-4" /> Langue / Language
            </h4>
            <div className="flex gap-2">
              <Button 
                variant={language === "fr" ? "default" : "outline"} 
                onClick={() => setLanguage("fr")}
                className="flex-1"
              >
                Français
              </Button>
              <Button 
                variant={language === "en" ? "default" : "outline"} 
                onClick={() => setLanguage("en")}
                className="flex-1"
              >
                English
              </Button>
            </div>
          </div>

          <Separator />

          {/* Theme */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium flex items-center gap-2">
              <Sun className="h-4 w-4" /> Apparence
            </h4>
            <div className="grid grid-cols-3 gap-2">
              <Button 
                variant={theme === "light" ? "default" : "outline"} 
                onClick={() => setTheme("light")}
                size="sm"
              >
                <Sun className="h-4 w-4 mr-1" /> Light
              </Button>
              <Button 
                variant={theme === "dark" ? "default" : "outline"} 
                onClick={() => setTheme("dark")}
                size="sm"
              >
                <Moon className="h-4 w-4 mr-1" /> Dark
              </Button>
              <Button 
                variant={theme === "high-contrast" ? "default" : "outline"} 
                onClick={() => setTheme("high-contrast")}
                size="sm"
              >
                <Eye className="h-4 w-4 mr-1" /> Contrast
              </Button>
            </div>
          </div>

          <Separator />

          {/* Typography */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium flex items-center gap-2">
              <Type className="h-4 w-4" /> Typography
            </h4>
            <div className="flex gap-2 items-center">
              <span className="text-sm">Size:</span>
              <Button 
                variant={fontSize === "normal" ? "default" : "outline"} 
                onClick={() => setFontSize("normal")}
                size="sm"
              >
                A
              </Button>
              <Button 
                variant={fontSize === "large" ? "default" : "outline"} 
                onClick={() => setFontSize("large")}
                size="sm"
              >
                A+
              </Button>
              <Button 
                variant={fontSize === "xl" ? "default" : "outline"} 
                onClick={() => setFontSize("xl")}
                size="sm"
              >
                A++
              </Button>
            </div>
            
            <div className="flex items-center justify-between pt-2">
              <Label htmlFor="dyslexia-mode">Dyslexia Font</Label>
              <Switch 
                id="dyslexia-mode" 
                checked={dyslexiaMode} 
                onCheckedChange={toggleDyslexiaMode} 
              />
            </div>
          </div>

          <Separator />

          {/* Kids Mode */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium flex items-center gap-2 text-accent-foreground bg-accent p-2 rounded-md">
              <Baby className="h-4 w-4" /> Mode Enfants / Kids Mode
            </h4>
            <div className="flex items-center justify-between">
              <Label htmlFor="kids-mode">Activer / Enable</Label>
              <Switch 
                id="kids-mode" 
                checked={kidsMode} 
                onCheckedChange={toggleKidsMode} 
              />
            </div>
          </div>

        </div>
      </SheetContent>
    </Sheet>
  );
}
