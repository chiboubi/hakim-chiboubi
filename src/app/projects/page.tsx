"use client"

import { useState } from "react";
import { MainNavigation } from "@/components/MainNavigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { generateProjectIdeas } from "@/ai/flows/generate-project-ideas";
import { GraduationCap, Plus, Search, Sparkles, Loader2, BookOpen, ExternalLink, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const initialProjects = [
  { id: "1", title: "Quantum Computing Algorithms", author: "Dr. Elena Vance", date: "2023-11-15", status: "Published", tags: ["Physics", "Computing"] },
  { id: "2", title: "Sustainability in Urban Planning", author: "Mark Thompson", date: "2023-12-01", status: "Review", tags: ["Environmental", "Architecture"] },
  { id: "3", title: "AI-Driven Healthcare Diagnostics", author: "Sarah Jenkins", date: "2024-01-10", status: "Published", tags: ["AI", "Medicine"] },
  { id: "4", title: "Blockchain for Supply Chain", author: "Dr. Elena Vance", date: "2024-02-14", status: "Draft", tags: ["Fintech", "Security"] },
];

export default function ProjectsPage() {
  const [projects, setProjects] = useState(initialProjects);
  const [searchTerm, setSearchTerm] = useState("");
  const [topic, setTopic] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedIdeas, setGeneratedIdeas] = useState<string[]>([]);
  const { toast } = useToast();

  const isAdmin = true; // Simulated admin check

  const filteredProjects = projects.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleGenerateIdeas = async () => {
    if (!topic) return;
    setIsGenerating(true);
    try {
      const result = await generateProjectIdeas({ topic });
      setGeneratedIdeas(result.ideas);
    } catch (error) {
      console.error("Failed to generate ideas", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const addProjectFromIdea = (idea: string) => {
    const newProject = {
      id: Math.random().toString(36).substr(2, 9),
      title: idea,
      author: "Admin System",
      date: new Date().toISOString().split('T')[0],
      status: "Draft",
      tags: ["AI-Generated", topic]
    };
    setProjects([newProject, ...projects]);
    toast({
      title: "Project Added",
      description: "Successfully added new academic project draft.",
    });
  };

  const removeProject = (id: string) => {
    if (!isAdmin) return;
    setProjects(projects.filter(p => p.id !== id));
    toast({
      title: "Project Removed",
      description: "The project has been deleted from the repository.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <MainNavigation />
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight font-headline">Academic Repository</h1>
            <p className="text-muted-foreground">Public read-access to academic projects and management tools.</p>
          </div>
          
          <div className="flex items-center gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  AI Idea Generator
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Research Idea Generator</DialogTitle>
                  <DialogDescription>
                    Enter a research topic and let AI suggest relevant academic projects.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="topic">Topic</Label>
                    <div className="flex gap-2">
                      <Input 
                        id="topic" 
                        placeholder="e.g., Renewable Energy, Quantum Cryptography" 
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                      />
                      <Button onClick={handleGenerateIdeas} disabled={isGenerating}>
                        {isGenerating ? <Loader2 className="h-4 w-4 animate-spin" /> : "Generate"}
                      </Button>
                    </div>
                  </div>
                  
                  {generatedIdeas.length > 0 && (
                    <div className="space-y-3 mt-4">
                      <h4 className="text-sm font-medium border-b pb-2">Suggestions</h4>
                      {generatedIdeas.map((idea, idx) => (
                        <div key={idx} className="flex items-center justify-between gap-4 group p-2 rounded-md hover:bg-secondary/50 transition-colors">
                          <p className="text-sm">{idea}</p>
                          <Button size="sm" variant="ghost" onClick={() => addProjectFromIdea(idea)}>
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </DialogContent>
            </Dialog>

            {isAdmin && (
              <Button variant="outline" className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                New Project
              </Button>
            )}
          </div>
        </div>

        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search projects, authors, or topics..." 
            className="pl-10 h-12 bg-card border-border shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group overflow-hidden hover:border-primary transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant={project.status === "Published" ? "default" : "secondary"}>
                    {project.status}
                  </Badge>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    {isAdmin && (
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 text-destructive opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => removeProject(project.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
                <CardTitle className="text-xl line-clamp-2 min-h-[3.5rem] group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <BookOpen className="h-3 w-3" />
                  {project.author}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider bg-secondary px-2 py-0.5 rounded font-semibold text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="text-xs text-muted-foreground pt-4 border-t">
                Uploaded on {project.date}
              </CardFooter>
            </Card>
          ))}
          {filteredProjects.length === 0 && (
            <div className="col-span-full py-20 text-center border-2 border-dashed rounded-xl">
              <GraduationCap className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium">No projects found</h3>
              <p className="text-muted-foreground">Try a different search term or add a new project.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}