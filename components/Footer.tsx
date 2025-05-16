import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { Github, Linkedin, Mail } from 'lucide-react'

export const Footer = () => {
  return (
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
  )
}
