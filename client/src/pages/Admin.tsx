import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { artworks, themes } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [selectedTheme, setSelectedTheme] = useState(themes[0].id);

  if (!authed) {
    return (
        <div className="flex flex-col items-center justify-center h-[60vh] gap-6 max-w-sm mx-auto px-4">
            <div className="text-center">
                <h1 className="text-3xl font-serif font-bold mb-2">Musée Admin</h1>
                <p className="text-muted-foreground">Accès réservé au personnel</p>
            </div>
            <div className="w-full space-y-2">
                <Input 
                    type="password" 
                    placeholder="Mot de passe" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-12 text-center text-lg"
                />
                <Button 
                    onClick={() => password === "admin" ? setAuthed(true) : alert("Wrong password")}
                    className="w-full h-12"
                >
                    Connexion
                </Button>
            </div>
        </div>
    );
  }

  const filteredArtworks = artworks.filter(a => a.themeId === selectedTheme);

  return (
    <div className="space-y-8 pb-20">
        <div className="flex items-center justify-between">
            <h1 className="text-3xl font-serif font-bold">Gestion des Collections</h1>
            <Button variant="ghost" onClick={() => setAuthed(false)}>Déconnexion</Button>
        </div>
        
        <Tabs value={selectedTheme} onValueChange={setSelectedTheme} className="w-full">
            <TabsList className="w-full justify-start h-auto flex-wrap p-2 gap-2 bg-secondary/50">
                {themes.map(t => (
                    <TabsTrigger key={t.id} value={t.id} className="text-xs uppercase tracking-wide">
                        {t.title}
                    </TabsTrigger>
                ))}
            </TabsList>
            
            <div className="mt-6 space-y-4">
                <div className="flex justify-between items-center">
                   <h2 className="text-xl font-bold">{themes.find(t => t.id === selectedTheme)?.title}</h2>
                   <Button size="sm">+ Ajouter objet</Button>
                </div>

                <div className="grid gap-4">
                    {filteredArtworks.map(art => (
                        <Card key={art.id} className="overflow-hidden">
                            <div className="flex items-center gap-0">
                                <img src={art.image} className="w-24 h-24 object-cover" />
                                <div className="p-4 flex-1">
                                    <div className="flex justify-between items-start mb-1">
                                        <CardTitle className="text-base font-serif">{art.title}</CardTitle>
                                        {art.isEssential && <Star className="h-4 w-4 text-accent fill-accent" />}
                                    </div>
                                    <div className="text-sm text-muted-foreground mb-2">{art.artist}</div>
                                    <div className="flex gap-2">
                                        {art.tags.map(tag => (
                                            <Badge key={tag} variant="secondary" className="text-[10px]">{tag}</Badge>
                                        ))}
                                    </div>
                                </div>
                                <div className="pr-4 flex flex-col gap-2">
                                    <Button variant="outline" size="sm">Éditer</Button>
                                    <Button variant="ghost" size="sm" className="text-destructive hover:bg-destructive/10">Suppr.</Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                    
                    {filteredArtworks.length === 0 && (
                        <div className="text-center py-12 text-muted-foreground border-2 border-dashed rounded-xl">
                            Aucun objet dans ce thème pour le moment.
                        </div>
                    )}
                </div>
            </div>
        </Tabs>
    </div>
  );
}
