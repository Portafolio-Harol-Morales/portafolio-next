import {  Briefcase } from "lucide-react";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "@/components/ui/badge";
export const Experiencia = () => {
  return (
    <section id="experiencia" className="py-16 container space-y-8">
      <div className="flex items-center gap-2">
        <Briefcase className="h-6 w-6 text-primary" />
        <h2 className="text-3xl font-bold">Experiencia Relevante</h2>
      </div>
      <div className="space-y-8">
        {[
          {
            role: "Ejecutivo Analista Programador",
            company: "Televicentro",
            period: "2025 - Presente",
            description:
              "Administracion de bases de datos SQL Server, mantenimiento y mejores a APIs desarrolladas en C# y visual basic, así como soporte y actualización de aplicaciones web para asegurar el correcto funcionamiento de los sistemas internos.",
          },
          {
            role: "Practicante Profesional",
            company: "Ideaworks International",
            period: "2024",
            description:
              "Desarrollé un sistema de gestión de registros para USAID utilizando React, TypeScript y Firebase. Además, diseñé e implementé la plataforma web corporativa de la empresa utilizando WordPress.",
          },
          {
            role: "Operador de Máster",
            company: "CORPOCENTRO",
            period: "2021 - 2025",
            description:
              "Encargado de la supervisión y emisión de contenido televisivo. Manejo de equipos técnicos, monitoreo de señales y coordinación de transmisiones en vivo, garantizando la continuidad de la programación.",
          },
          {
            role: "Desarrollador Freelance",
            company: "Proyectos Independientes",
            period: "2022 - Presente",
            description:
              "Creación de landing pages, paneles administrativos y sistemas interactivos usando tecnologías como React, Node.js, Firebase, Tailwind CSS. Trabajo directo con clientes desde la planificación hasta la entrega del proyecto.",
          },
        ].map((job, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{job.role}</CardTitle>
                  <CardDescription className="text-base mt-1">
                    {job.company}
                  </CardDescription>
                </div>
                <Badge className="text-center">{job.period}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p>{job.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
