"use client";
import { useState } from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, LoaderCircle, Send, MapPin, Download, ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

function ToastSimple({
  message,
  type = "success",
  onClose,
}: {
  message: string;
  type?: "success" | "error";
  onClose: () => void;
}) {
  setTimeout(() => onClose(), 3000);

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 px-6 py-4 rounded-lg shadow-lg text-white transition-all duration-300 transform animate-in slide-in-from-right
      ${type === "success" ? "bg-green-600" : "bg-red-600"}`}
    >
      <div className="flex items-center gap-2">
        {type === "success" ? "✓" : "✕"}
        <span className="font-medium">{message}</span>
      </div>
    </div>
  );
}

export const Contactame = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [toastMsg, setToastMsg] = useState("");
  const [toastType, setToastType] = useState<"success" | "error">("success");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let newErrors = { name: "", email: "", subject: "", message: "" };
    let hasError = false;

    if (!form.name) {
      newErrors.name = "El nombre es obligatorio.";
      hasError = true;
    }

    if (!form.email) {
      newErrors.email = "El correo es obligatorio.";
      hasError = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Correo no válido.";
      hasError = true;
    }

    if (!form.subject) {
      newErrors.subject = "El asunto es obligatorio.";
      hasError = true;
    }

    if (!form.message) {
      newErrors.message = "El mensaje es obligatorio.";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setToastMsg(data.error || "Ocurrió un error. Intenta de nuevo.");
        setToastType("error");
        return;
      }

      setToastMsg("Mensaje enviado con éxito. Te contactaré pronto.");
      setToastType("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setErrors({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error en el envío:", error);
      setToastMsg("Ocurrió un error al enviar el mensaje.");
      setToastType("error");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "harol.kock34@gmail.com",
      href: "mailto:harol.kock34@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "harol-morales-762b17114",
      href: "https://www.linkedin.com/in/harol-morales-762b17114/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "HaroruDa3",
      href: "https://github.com/HaroruDa3",
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "San José Pinula, Guatemala",
      href: null,
    },
  ];

  return (
    <section id="contacto" className="relative py-20 bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Contacto
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Estoy disponible para colaborar en tu próxima gran idea
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 border-muted/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Envíame un mensaje
              </CardTitle>
              <CardDescription>
                Completa el formulario y me pondré en contacto contigo lo antes posible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre</Label>
                    <Input
                      id="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className={errors.name ? "border-red-500" : ""}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <span className="text-xs">●</span>
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <span className="text-xs">●</span>
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Asunto</Label>
                  <Input
                    id="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Asunto del mensaje"
                    className={errors.subject ? "border-red-500" : ""}
                  />
                  {errors.subject && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      <span className="text-xs">●</span>
                      {errors.subject}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea
                    id="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Cuéntame sobre tu proyecto..."
                    className={`min-h-[140px] ${errors.message ? "border-red-500" : ""}`}
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      <span className="text-xs">●</span>
                      {errors.message}
                    </p>
                  )}
                </div>
                <Button 
                  type="submit" 
                  className="w-full group" 
                  disabled={loading}
                  size="lg"
                >
                  {loading ? (
                    <LoaderCircle className="h-5 w-5 animate-spin" />
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      Enviar mensaje
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 border-muted/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Información de contacto</CardTitle>
                <CardDescription>
                  Encuentra otras formas de conectar conmigo
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors group cursor-pointer">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm text-muted-foreground">
                          {info.label}
                        </p>
                        <p className="text-sm font-medium truncate group-hover:text-primary transition-colors">
                          {info.value}
                        </p>
                      </div>
                      {info.href && (
                        <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </div>
                  );

                  return info.href ? (
                    <Link
                      key={index}
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {content}
                    </Link>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 border-muted/50 bg-gradient-to-br from-primary/5 to-primary/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>¿Listo para trabajar juntos?</CardTitle>
                <CardDescription>
                  Disponible para proyectos freelance y oportunidades de tiempo completo
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Descarga mi currículum para conocer más sobre mi experiencia y habilidades técnicas.
                </p>
                <a href="/curriculum-harol-morales.pdf" download>
                  <Button className="w-full group" size="lg">
                    <Download className="h-4 w-4 mr-2 group-hover:translate-y-1 transition-transform" />
                    Descargar CV
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {toastMsg && (
        <ToastSimple
          message={toastMsg}
          type={toastType}
          onClose={() => setToastMsg("")}
        />
      )}
    </section>
  );
};