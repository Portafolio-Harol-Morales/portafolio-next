import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Proyectos } from "@/components/Proyectos";
import { Skills } from "@/components/Skills";
import { Footer } from "@/components/Footer";
import { Experiencia } from "@/components/Experiencia";
import { Contactame } from "@/components/Contactame";
import { LoaderCircle } from "lucide-react";
import {
  Github,
  Linkedin,
  Mail,
  Briefcase,
  User,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar></Navbar>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-24 md:py-32 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold">
                Hola, soy <span className="text-primary">Harol</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Desarrollador web full-stack especializado en crear experiencias
                digitales excepcionales.
              </p>
              <div className="flex gap-4">
                <Link href="#proyectos">
                  <Button>
                    Proyectos
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>

                <Link href="#contacto">
                  <Button variant="outline">Contactar</Button>
                </Link>
              </div>
              <div className="flex gap-4 pt-4">
                <Link
                  href="https://github.com/HaroruDa3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="icon">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link
                  href="www.linkedin.com/in/harol-morales-762b17114"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="icon">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="mailto:harol.kock34@gmail.com">
                  <Button variant="ghost" size="icon">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <Avatar className="h-64 w-64">
                <AvatarImage
                  src="/img-hero.png"
                  alt="Harol Morales"
                />
                <AvatarFallback>
                   <LoaderCircle className="h-8 w-8 animate-spin text-primary" />
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="sobre-mi" className="bg-muted/40 py-16">
          <div className="container space-y-8">
            <div className="flex items-center gap-2">
              <User className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">Sobre mí</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-lg">
                  Soy un desarrollador web apasionado con experiencia en la
                  creación de aplicaciones web modernas y responsivas. Me
                  especializo en tecnologías front-end, back-end y aplicaciones
                  moviles hibridas, con un enfoque en crear soluciones elegantes
                  para problemas complejos.
                </p>
                <p className="text-lg">
                  Mi objetivo es combinar diseño atractivo con funcionalidad
                  robusta para crear experiencias digitales que destaquen.
                  Siempre estoy aprendiendo nuevas tecnologías y mejorando mis
                  habilidades.
                </p>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium">Ubicación</h3>
                    <p className="text-muted-foreground">
                      Tegucigalpa, Honduras
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">
                      harol.kock34@gmail.com
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium">Disponibilidad</h3>
                    <p className="text-muted-foreground">
                      Freelance / Tiempo completo
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium">Educación</h3>
                    <p className="text-muted-foreground">CEUTEC / TUDAW</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <Proyectos />

        {/* Skills Section */}
        <Skills />

        {/* Experience Section */}
        <Experiencia />

        {/* Contact Section */}
        <Contactame />
      </main>
      <Footer></Footer>
    </div>
  );
}
