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
  User,
  ChevronRight,
  Download,
  Sparkles,
  MapPin,
  GraduationCap,
  Clock,
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative container py-24 md:py-32 overflow-hidden">
          {/* Decorative background */}
          <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:40px_40px] pointer-events-none" />
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
                  Disponible para nuevos proyectos
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Hola, soy{" "}
                  <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    Harol
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  Desarrollador Full Stack especializado en transformar ideas en{" "}
                  <span className="text-foreground font-semibold">
                    experiencias digitales excepcionales
                  </span>
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="#proyectos">
                  <Button size="lg" className="group">
                    Ver Proyectos
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>

                <Link href="#contacto">
                  <Button variant="outline" size="lg">
                    Contactar
                  </Button>
                </Link>

                <a href="/curriculum-harol-morales.pdf" download>
                  <Button variant="outline" size="lg" className="group">
                    <Download className="mr-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                    Descargar CV
                  </Button>
                </a>
              </div>

              <div className="flex gap-3 pt-4">
                <Link
                  href="https://github.com/HaroruDa3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/harol-morales-762b17114"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="mailto:harol.kock34@gmail.com">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/5 rounded-full blur-3xl" />
                <Avatar className="relative h-72 w-72 md:h-80 md:w-80 border-4 border-primary/10 shadow-2xl">
                  <AvatarImage
                    src="/img-hero.png"
                    alt="Harol Morales"
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-muted">
                    <LoaderCircle className="h-8 w-8 animate-spin text-primary" />
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="sobre-mi" className="relative py-20 bg-gradient-to-b from-muted/20 via-background to-muted/20 overflow-hidden">
          {/* Decorative background */}
          <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:40px_40px] pointer-events-none" />
          <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          <div className="container relative z-10 space-y-12">
            {/* Header */}
            <div className="text-center space-y-4"> 
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Sobre mí
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Description */}
              <div className="space-y-6">
                <Card className="border-muted/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6 space-y-4">
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      Soy un{" "}
                      <span className="text-foreground font-semibold">
                        desarrollador Full Stack
                      </span>{" "}
                      apasionado por crear soluciones tecnológicas que marcan
                      la diferencia. Con experiencia en el desarrollo de
                      aplicaciones web modernas, sistemas empresariales y
                      aplicaciones móviles híbridas, me especializo en
                      transformar ideas complejas en productos digitales
                      intuitivos y escalables.
                    </p>
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      Mi enfoque combina{" "}
                      <span className="text-foreground font-semibold">
                        diseño elegante con arquitectura robusta
                      </span>
                      , priorizando siempre la experiencia del usuario y el
                      rendimiento óptimo. Cada proyecto es una oportunidad para
                      aprender, innovar y superar expectativas.
                    </p>
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      Comprometido con el{" "}
                      <span className="text-foreground font-semibold">
                        aprendizaje continuo
                      </span>{" "}
                      y las mejores prácticas de desarrollo, trabajo con las
                      tecnologías más recientes para entregar soluciones que
                      realmente impacten en el negocio y los usuarios finales.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="border-muted/50 bg-card/50 backdrop-blur-sm hover:shadow-lg hover:border-primary/30 transition-all group">
                  <CardContent className="pt-6">
                    <div className="space-y-3">
                      <div className="p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">
                          Ubicación
                        </h3>
                        <p className="text-muted-foreground">
                          Tegucigalpa, Honduras
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-muted/50 bg-card/50 backdrop-blur-sm hover:shadow-lg hover:border-primary/30 transition-all group">
                  <CardContent className="pt-6">
                    <div className="space-y-3">
                      <div className="p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Email</h3>
                        <p className="text-muted-foreground text-sm break-all">
                          harol.kock34@gmail.com
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-muted/50 bg-card/50 backdrop-blur-sm hover:shadow-lg hover:border-primary/30 transition-all group">
                  <CardContent className="pt-6">
                    <div className="space-y-3">
                      <div className="p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">
                          Disponibilidad
                        </h3>
                        <p className="text-muted-foreground">
                          Freelance / Tiempo completo
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-muted/50 bg-card/50 backdrop-blur-sm hover:shadow-lg hover:border-primary/30 transition-all group">
                  <CardContent className="pt-6">
                    <div className="space-y-3">
                      <div className="p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">
                          Educación
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          CEUTEC / Tecnólogo en Desarrollo de Aplicaciones Web
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
      <Footer />
    </div>
  );
}