import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { artworks } from "@/lib/data";

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");

  if (!authed) {
    return (
        <div className="flex flex-col items-center justify-center h-[60vh] gap-4 max-w-sm mx-auto">
            <h1 className="text-2xl font-serif">Administration</h1>
            <Input 
                type="password" 
                placeholder="Mot de passe" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={() => password === "admin" ? setAuthed(true) : alert("Wrong password")}>
                Connexion
            </Button>
        </div>
    );
  }

  return (
    <div className="space-y-6">
        <h1 className="text-3xl font-serif font-bold">Gestion des Œuvres</h1>
        <p className="text-muted-foreground">Modifier le contenu de l'application.</p>
        
        <div className="grid gap-4">
            {artworks.map(art => (
                <Card key={art.id}>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <div className="flex items-center gap-4">
                            <img src={art.image} className="w-12 h-12 object-cover rounded" />
                            <div>
                                <CardTitle>{art.title}</CardTitle>
                                <div className="text-sm text-muted-foreground">{art.artist}</div>
                            </div>
                        </div>
                        <Button variant="outline">Modifier</Button>
                    </CardHeader>
                </Card>
            ))}
            
            <Button className="w-full border-dashed" variant="outline">+ Ajouter une œuvre</Button>
        </div>
    </div>
  );
}
