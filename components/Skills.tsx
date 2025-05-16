import { Code } from 'lucide-react'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

export const Skills = () => {
  return (
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
  )
}
