import { Briefcase, Calendar, Building2 } from "lucide-react";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    role: "Ejecutivo Analista Programador",
    company: "Televicentro",
    period: "2025 - Presente",
    type: "Tiempo Completo",
    description:
      "Administración de bases de datos SQL Server, mantenimiento y mejoras a APIs desarrolladas en C# y Visual Basic, así como soporte y actualización de aplicaciones web para asegurar el correcto funcionamiento de los sistemas internos.",
    tags: ["SQL Server", "C#", "Visual Basic", "APIs"],
  },
  {
    role: "Practicante Profesional",
    company: "Ideaworks International",
    period: "2024",
    type: "Práctica",
    description:
      "Desarrollé un sistema de gestión de registros para USAID utilizando React, TypeScript y Firebase. Además, diseñé e implementé la plataforma web corporativa de la empresa utilizando WordPress.",
    tags: ["React", "TypeScript", "Firebase", "WordPress"],
  },
  {
    role: "Operador de Máster",
    company: "CORPOCENTRO",
    period: "2021 - 2025",
    type: "Tiempo Completo",
    description:
      "Encargado de la supervisión y emisión de contenido televisivo. Manejo de equipos técnicos, monitoreo de señales y coordinación de transmisiones en vivo, garantizando la continuidad de la programación.",
    tags: ["Broadcasting", "Transmisión en Vivo", "Equipos Técnicos"],
  },
  {
    role: "Desarrollador Freelance",
    company: "Proyectos Independientes",
    period: "2022 - Presente",
    type: "Freelance",
    description:
      "Creación de landing pages, paneles administrativos y sistemas interactivos usando tecnologías como React, Node.js, Firebase, Tailwind CSS. Trabajo directo con clientes desde la planificación hasta la entrega del proyecto.",
    tags: ["React", "Node.js", "Firebase", "Tailwind CSS"],
  },
];

export const Experiencia = () => {
  return (
    <section id="experiencia" className="relative py-20 bg-gradient-to-b from-muted/20 via-background to-muted/20 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container relative z-10 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">     
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Experiencia Relevante
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mi recorrido profesional en desarrollo de software y tecnología
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/30 to-transparent" />

          <div className="space-y-12">
            {experiences.map((job, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background shadow-lg shadow-primary/20" />

                {/* Spacer for desktop */}
                <div className="hidden md:block md:w-1/2" />

                {/* Content */}
                <div className="md:w-1/2 pl-16 md:pl-0">
                  <Card className="group hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 border-muted/50 hover:border-primary/30 bg-card/50 backdrop-blur-sm">
                    <CardHeader className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                        <div className="space-y-2 flex-1">
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">
                            {job.role}
                          </CardTitle>
                          <CardDescription className="flex items-center gap-2 text-base">
                            <Building2 className="h-4 w-4" />
                            {job.company}
                          </CardDescription>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Badge variant="outline" className="w-fit">
                            <Calendar className="h-3 w-3 mr-1" />
                            {job.period}
                          </Badge>
                          <Badge 
                            className="w-fit"
                            variant={
                              job.type === "Tiempo Completo" ? "default" : 
                              job.type === "Freelance" ? "secondary" : 
                              "outline"
                            }
                          >
                            {job.type}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {job.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {job.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="secondary"
                            className="text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};