"use client";
import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

function ToastSimple({
  message,
  type = "success",
  onClose,
}: {
  message: string;
  type?: "success" | "error";
  onClose: () => void;
}) {
  // Auto cerrar a los 3 segundos
  setTimeout(() => onClose(), 3000);

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 px-4 py-3 rounded-md shadow-md text-white transition-all duration-300
      ${type === "success" ? "bg-green-600" : "bg-red-600"}`}
    >
      {message}
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

      setToastMsg(" Mensaje enviado con éxito. Te contactaré pronto.");
      setToastType("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setErrors({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error en el envío:", error);
      setToastMsg("❌ Ocurrió un error al enviar el mensaje.");
      setToastType("error");
    } finally {
      setLoading(false);
    }
  };

  return (
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
                Completa el formulario y me pondré en contacto contigo lo antes
                posible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nombre
                    </label>
                    <input
                      id="name"
                      value={form.name}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      placeholder="Tu nombre"
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      placeholder="tu@email.com"
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Asunto
                  </label>
                  <input
                    id="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    placeholder="Asunto del mensaje"
                  />
                  {errors.subject && (
                    <p className="text-sm text-red-500">{errors.subject}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    value={form.message}
                    onChange={handleChange}
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    placeholder="Tu mensaje..."
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500">{errors.message}</p>
                  )}
                </div>
                <Button className="w-full" disabled={loading}>
                  {loading ? "Enviando..." : "Enviar mensaje"}
                </Button>
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
                    <p className="text-muted-foreground">
                      harol.kock34@gmail.com
                    </p>
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
                  Estoy disponible para proyectos freelance y oportunidades de
                  tiempo completo. ¡Contáctame para discutir cómo puedo ayudar
                  en tu próximo proyecto!
                </p>
                <a href="/curriculum-harol-morales.pdf" download>
                  <Button>Descargar CV</Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Renderiza el Toast flotante si hay mensaje */}
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
