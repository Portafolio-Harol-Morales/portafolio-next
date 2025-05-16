"use client";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Sun, Moon, Menu } from "lucide-react";
import { useTheme } from "next-themes";

export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [openMenu, setOpenMenu] = React.useState(false);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="font-bold text-xl">
          <Link href="/">
            <span className="text-primary">Dev</span>SLS
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link
            href="#sobre-mi"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Sobre mí
          </Link>
          <Link
            href="#proyectos"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Proyectos
          </Link>
          <Link
            href="#habilidades"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Habilidades
          </Link>
          <Link
            href="#experiencia"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Experiencia
          </Link>
          <Link
            href="#contacto"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contacto
          </Link>
        </nav>
        {/* Botones de acciones solo en desktop */}
        <div className="hidden md:flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            aria-label="Cambiar tema"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
          <a href="/curriculum-harol-morales.pdf" download>
            <Button>Descargar CV</Button>
          </a>
        </div>
        {/* Menú hamburguesa en móvil */}
        <Button
          variant="outline"
          size="icon"
          className="md:hidden"
          onClick={() => setOpenMenu(!openMenu)}
          aria-label="Abrir menú"
        >
          <Menu size={20} />
        </Button>
      </div>
      {/* Menú móvil */}
      {openMenu && (
        <nav className="md:hidden bg-background border-t px-4 py-2 flex flex-col gap-4 items-end text-right">
          <Link href="#sobre-mi" onClick={() => setOpenMenu(false)}>
            Sobre mí
          </Link>
          <Link href="#proyectos" onClick={() => setOpenMenu(false)}>
            Proyectos
          </Link>
          <Link href="#habilidades" onClick={() => setOpenMenu(false)}>
            Habilidades
          </Link>
          <Link href="#experiencia" onClick={() => setOpenMenu(false)}>
            Experiencia
          </Link>
          <Link href="#contacto" onClick={() => setOpenMenu(false)}>
            Contacto
          </Link>
          <div className="flex flex-row gap-2 pt-2">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              aria-label="Cambiar tema"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
            <a href="/curriculum-harol-morales.pdf" download>
            <Button>Descargar CV</Button>
          </a>
          </div>
        </nav>
      )}
    </header>
  );
};
