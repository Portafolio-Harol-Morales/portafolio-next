"use client";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Sun, Moon, Menu, X, Download, Code2 } from "lucide-react";
import { useTheme } from "next-themes";

export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [openMenu, setOpenMenu] = React.useState(false);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const navItems = [
    { href: "#sobre-mi", label: "Sobre mí" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#habilidades", label: "Habilidades" },
    { href: "#experiencia", label: "Experiencia" },
    { href: "#contacto", label: "Contacto" },
  ];

  const handleNavClick = () => {
    setOpenMenu(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <Code2 className="h-5 w-5 text-primary" />
          </div>
          <span className="font-bold text-xl">
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Dev
            </span>
            <span className="text-foreground">SLS</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-all"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Cambiar tema"
            className="hover:bg-primary/10 hover:text-primary transition-colors"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          <a href="/curriculum-harol-morales.pdf" download>
            <Button className="group">
              <Download className="h-4 w-4 mr-2 group-hover:translate-y-0.5 transition-transform" />
              Descargar CV
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden hover:bg-primary/10"
          onClick={() => setOpenMenu(!openMenu)}
          aria-label={openMenu ? "Cerrar menú" : "Abrir menú"}
        >
          {openMenu ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {openMenu && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur-xl animate-in slide-in-from-top-5 duration-200">
          <nav className="container py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-all"
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 pt-4 mt-2 border-t">
              <Button
                variant="outline"
                size="icon"
                onClick={toggleTheme}
                aria-label="Cambiar tema"
                className="hover:bg-primary/10 hover:text-primary flex-shrink-0"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
              <a href="/curriculum-harol-morales.pdf" download className="flex-1">
                <Button className="w-full group">
                  <Download className="h-4 w-4 mr-2 group-hover:translate-y-0.5 transition-transform" />
                  Descargar CV
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};