"use client";
import { Code, ExternalLink, Github, Loader } from "lucide-react";
import { Badge } from "./ui/badge";
import React, { use } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getCollectionData } from "@/services/firebaseServices"; // Ajusta la ruta según tu proyecto

type Proyecto = {
  id: string;
  title: string;
  info: string;
  imgProjects: string[];
  logos: string[];
  url: string;
  github?: string;
  tecnologias: string[];
};

export const Proyectos = () => {
  const [data, setData] = useState<Proyecto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataList = await getCollectionData("InfoProyectos");
        // Map dataList to ensure each item matches the Proyecto type
        const proyectos: Proyecto[] = dataList.map((item: any) => ({
          id: item.id,
          title: item.title ?? "",
          info: item.info ?? "",
          imgProjects: item.imgProjects ?? [],
          logos: item.logos ?? [],
          url: item.url ?? "",
          github: item.github ?? undefined,
          tecnologias: item.tecnologias ?? [],
        }));
        console.log(proyectos);
        setData(proyectos);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
   return (
    <div className="flex justify-center items-center py-10">
      <Loader className="animate-spin h-8 w-8 text-primary" />
    </div>
  );
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-500">
        Error: {error.message}
      </div>
    );
  }

  return (
    <section id="proyectos" className="py-16 container space-y-8">
      <div className="flex items-center gap-2">
        <Code className="h-6 w-6 text-primary" />
        <h2 className="text-3xl font-bold">Proyectos destacados</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((project) => (
          <Card key={project.id} className="overflow-hidden">
            <div className="aspect-video bg-muted relative flex items-center justify-center">
              {/* Si hay varias imágenes, muestra solo la primera */}
              <img
                src={project.imgProjects[0]}
                alt={project.title}
                className="object-cover w-full h-full"
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>
                <p className="line-clamp-4">{project.info.trim()}</p>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tecnologias.map((tecnologia, i) => (
                  <Badge key={i} variant="secondary">
                    {tecnologia}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              {project.github && (
                <Button variant="outline" size="sm" asChild>
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Código
                  </Link>
                </Button>
              )}
              <Button size="sm" asChild>
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    
    </section>
  );
};
