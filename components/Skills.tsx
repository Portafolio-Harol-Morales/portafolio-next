import { Code } from "lucide-react";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const SkillBar = ({ name, level }: { name: string; level: number }) => (
  <div className="group">
    <div className="flex justify-between items-center mb-1.5">
      <span className="text-sm font-medium text-foreground/90 group-hover:text-foreground transition-colors">
        {name}
      </span>
      <span className="text-xs text-muted-foreground font-semibold">
        {level}%
      </span>
    </div>
    <div className="w-full h-2 bg-muted/50 rounded-full overflow-hidden">
      <div
        className="bg-gradient-to-r from-primary to-primary/80 h-full rounded-full transition-all duration-500 ease-out group-hover:shadow-[0_0_8px_rgba(var(--primary),0.5)]"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

export const Skills = () => {
  const skillCategories = [
    {
      title: "Lenguajes",
      icon: "💻",
      skills: [
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "C#", level: 75 },
        { name: "Visual Basic", level: 75 },
        { name: "Java", level: 65 },
        { name: "C++", level: 50 },
        { name: "PHP", level: 50 },
      ],
    },
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        { name: "Bootstrap", level: 95 },
        { name: "HTML/CSS", level: 90 },
        { name: "React", level: 90 },
        { name: "Next.js", level: 90 },
        { name: "Ant Design", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Ionic Framework", level: 85 },
        { name: "Angular", level: 70 },
        { name: "React Native", level: 70 },
        { name: "DevExpress", level: 40 },
      ],
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Express", level: 95 },
        { name: "Firebase", level: 90 },
        { name: "Node.js", level: 80 },
        { name: "TypeScript", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "MySQL", level: 75 },
        { name: "Supabase", level: 70 },
        { name: "MongoDB", level: 70 },
        { name: "Azure", level: 65 },
        { name: ".NET", level: 50 },
      ],
    },
    {
      title: "Herramientas",
      icon: "🛠️",
      skills: [
        { name: "VS Code", level: 90 },
        { name: "Git", level: 85 },
        { name: "Figma", level: 70 },
        { name: "Docker", level: 60 },
      ],
    },
  ];

  return (
    <section id="habilidades" className="relative py-20 bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">       
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Habilidades
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tecnologías y herramientas con las que trabajo para crear soluciones digitales
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <Card
              key={idx}
              className="group hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 border-muted/50 hover:border-primary/30 bg-card/50 backdrop-blur-sm"
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl">
                {/*  <span className="text-2xl">{category.icon}</span>*/}
                  <span className="group-hover:text-primary transition-colors">
                    {category.title}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <SkillBar
                    key={skillIdx}
                    name={skill.name}
                    level={skill.level}
                  />
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};