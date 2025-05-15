"use client";
import { Code, ExternalLink, Github, Loader } from "lucide-react";
import { Badge } from "./ui/badge";
import React, { useEffect, useState } from "react";
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
import { getCollectionData } from "@/services/firebaseServices";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "./ui/dialog";

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
  const [selectedProject, setSelectedProject] = useState<Proyecto | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataList = await getCollectionData("InfoProyectos");
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
        setData(proyectos);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Reset carousel index when opening a new project
  React.useEffect(() => {
    setCarouselIndex(0);
  }, [selectedProject]);

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
              <img
                src={project.imgProjects[3]}
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
            <CardFooter className="flex flex-wrap gap-2 justify-between">
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
              {project.url && (
                <Button size="sm" asChild>
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver
                    <ExternalLink className="mr-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
              <Button
                size="sm"
                variant="secondary"
                onClick={() => setSelectedProject(project)}
              >
                Más información
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Modal usando Dialog de la carpeta ui */}
    <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
  <DialogContent
    className="max-w-lg"
    style={{
      maxHeight: "95vh",
      overflowY: "auto",
    }}
  >
    {selectedProject && (
      <>
        <DialogHeader>
          <DialogTitle className="mb-5">{selectedProject.title}</DialogTitle>
          <DialogDescription>
            {selectedProject.info}
          </DialogDescription>
        </DialogHeader>
        {/* Carrusel de imágenes */}
        {selectedProject.imgProjects.length > 0 && (
          <div className="mb-4">
            <div className="relative w-full flex items-center justify-center">
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-0 top-1/2 -translate-y-1/2"
                onClick={() =>
                  setCarouselIndex((prev) =>
                    prev === 0
                      ? selectedProject.imgProjects.length - 1
                      : prev - 1
                  )
                }
                disabled={selectedProject.imgProjects.length < 2}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Button>
              <img
                src={selectedProject.imgProjects[carouselIndex]}
                alt={`Imagen ${carouselIndex + 1}`}
                className="w-full h-56 object-cover rounded"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-1/2 -translate-y-1/2"
                onClick={() =>
                  setCarouselIndex((prev) =>
                    prev === selectedProject.imgProjects.length - 1
                      ? 0
                      : prev + 1
                  )
                }
                disabled={selectedProject.imgProjects.length < 2}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </div>
            <div className="text-center text-xs text-gray-500 mt-1">
              {carouselIndex + 1} / {selectedProject.imgProjects.length}
            </div>
          </div>
        )}
        <div className="mb-4">
          <strong>Tecnologías:</strong>
          <div className="flex flex-wrap gap-2 mt-2">
            {selectedProject.tecnologias.map((tec, i) => (
              <Badge key={i} variant="secondary">{tec}</Badge>
            ))}
          </div>
        </div>
        <DialogFooter className="flex gap-2">
          {selectedProject.github && (
            <Button variant="outline" size="sm" asChild>
              <Link
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                Código
              </Link>
            </Button>
          )}
          {selectedProject.url && (
            <Button size="sm" asChild>
              <Link
                href={selectedProject.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver
                <ExternalLink className="mr-2 h-4 w-4" />
              </Link>
            </Button>
          )}
          <DialogClose asChild>
            <Button size="sm" variant="destructive" onClick={() => setSelectedProject(null)}>
              Cerrar
            </Button>
          </DialogClose>
        </DialogFooter>
      </>
    )}
  </DialogContent>
</Dialog>
    </section>
  );
};