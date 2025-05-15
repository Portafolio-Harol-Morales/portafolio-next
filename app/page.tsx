import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Proyectos } from "@/components/Proyectos";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
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
                <Button>
                  <Link href="#proyectos">Proyectos</Link>{" "}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline">Contactar</Button>
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
                  src="/placeholder.svg?height=256&width=256"
                  alt="Tu Nombre"
                />
                <AvatarFallback>TN</AvatarFallback>
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

        {/* Testimonials Section */}

        {/* Skills Section */}
        <section id="habilidades" className="bg-muted/40 py-16">
          <div className="container space-y-8">
            <div className="flex items-center gap-2">
              <Code className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">Habilidades</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Frontend</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span>HTML/CSS</span>
                    <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[90%]"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>JavaScript</span>
                    <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[85%]"></div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span>React</span>
                    <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[90%]"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Angular</span>
                    <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[70%]"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Bootstrap</span>
                    <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[95%]"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Ant Desing</span>
                    <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[90%]"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Tailwind CSS</span>
                    <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[85%]"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Backend</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span>Node.js</span>
                    <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[80%]"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>TypeScript</span>
                    <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[80%]"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Express</span>
                    <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[95%]"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>PostgreSQL</span>
                    <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[75%]"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>MySQL</span>
                    <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[75%]"></div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span>Firebase</span>
                    <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[90%]"></div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span>Supabase</span>
                    <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[70%]"></div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span>MongoDB</span>
                    <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[70%]"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Herramientas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span>Git</span>
                    <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[85%]"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Docker</span>
                    <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[60%]"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Figma</span>
                    <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[70%]"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>VS Code</span>
                    <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[90%]"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experiencia" className="py-16 container space-y-8">
          <div className="flex items-center gap-2">
            <Briefcase className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Experiencia</h2>
          </div>
          <div className="space-y-8">
            {[
              {
                role: "Desarrollador Frontend Senior",
                company: "Empresa Tecnológica",
                period: "2022 - Presente",
                description:
                  "Desarrollo de aplicaciones web utilizando React, Next.js y Tailwind CSS. Implementación de nuevas características y mejora de la experiencia de usuario.",
              },
              {
                role: "Desarrollador Full Stack",
                company: "Agencia Digital",
                period: "2020 - 2022",
                description:
                  "Desarrollo de sitios web y aplicaciones para diversos clientes. Trabajo con tecnologías como React, Node.js y bases de datos SQL y NoSQL.",
              },
              {
                role: "Desarrollador Web Junior",
                company: "Startup Tecnológica",
                period: "2018 - 2020",
                description:
                  "Desarrollo de componentes frontend y mantenimiento de aplicaciones web existentes. Colaboración en proyectos de equipo y aprendizaje de nuevas tecnologías.",
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
                    <Badge>{job.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>{job.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="bg-muted/40 py-16">
          <div className="container space-y-8">
            <div className="flex items-center gap-2">
              <Mail className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">Contacto</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Envíame un mensaje</CardTitle>
                  <CardDescription>
                    Completa el formulario y me pondré en contacto contigo lo
                    antes posible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Nombre
                        </label>
                        <input
                          id="name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Tu nombre"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Asunto
                      </label>
                      <input
                        id="subject"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Asunto del mensaje"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Mensaje
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Tu mensaje..."
                      />
                    </div>
                    <Button className="w-full">Enviar mensaje</Button>
                  </form>
                </CardContent>
              </Card>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Información de contacto</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground">harol.kock34@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Linkedin className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">LinkedIn</p>
                        <p className="text-muted-foreground">
                          linkedin.com/in/harol-morales-762b17114/
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Github className="h-5 w-5 text-primary" />
                      <div>
                        <p className="font-medium">GitHub</p>
                        <p className="text-muted-foreground">
                          github.com/HaroruDa3
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>¿Listo para trabajar juntos?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Estoy disponible para proyectos freelance y oportunidades
                      de tiempo completo. ¡Contáctame para discutir cómo puedo
                      ayudar en tu próximo proyecto!
                    </p>
                    <Button className="w-full">Descargar CV</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} DevSLS. Todos los derechos
              reservados.
            </p>
          </div>
          <div className="flex gap-4">
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
      </footer>
    </div>
  );
}
