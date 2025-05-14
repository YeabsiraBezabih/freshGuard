import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MotionSection } from "@/components/animations/motion-section";
import { weeklyReports } from "@/data/weekly-reports";
import { formatDate } from "@/lib/utils";
import { Calendar, CheckSquare, XSquare, ArrowRight } from "lucide-react";

export default function Reports() {
  const [view, setView] = useState<"timeline" | "accordion">("timeline");

  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Reports Intro Section */}
      <MotionSection 
        className="py-20" 
        direction="up"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Weekly Reports</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Track our progress as we develop FreshGuard's edible coating technology. These weekly
                reports document our research findings, challenges, and next steps.
              </p>
            </motion.div>
            
            <div className="mb-8">
              <Tabs defaultValue="timeline" onValueChange={(value) => setView(value as "timeline" | "accordion")}>
                <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
                  <TabsTrigger value="timeline">Timeline View</TabsTrigger>
                  <TabsTrigger value="accordion">Accordion View</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* Timeline View */}
      {view === "timeline" && (
        <MotionSection 
          className="py-8 pb-20" 
          direction="up"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:translate-x-px" />
                
                {weeklyReports.map((report, index) => (
                  <motion.div 
                    key={report.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative mb-12 md:mb-16 ${
                      index % 2 === 0 ? 'md:text-right md:pr-8 md:mr-1/2' : 'md:ml-1/2 md:pl-8'
                    }`}
                  >
                    {/* Timeline Node */}
                    <div 
                      className={`absolute top-0 bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg 
                        ${index % 2 === 0 ? 'left-0 md:right-0 md:left-auto md:-mr-5' : 'left-0 md:-ml-5'}`}
                    >
                      {report.week}
                    </div>
                    
                    {/* Content Card */}
                    <Card 
                      variant="neomorphic" 
                      className={`ml-12 md:ml-0 ${index % 2 === 0 ? '' : ''}`}
                    >
                      <CardHeader>
                        <div className="flex items-center mb-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-2" />
                          {formatDate(new Date(report.date))}
                        </div>
                        <CardTitle>{report.title}</CardTitle>
                        <CardDescription>{report.summary}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {/* Achievements */}
                        <div>
                          <h4 className="font-semibold text-primary mb-2">Achievements</h4>
                          <ul className="space-y-1">
                            {report.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start">
                                <CheckSquare className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                                <span className="text-sm">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Challenges */}
                        <div>
                          <h4 className="font-semibold text-primary mb-2">Challenges</h4>
                          <ul className="space-y-1">
                            {report.challenges.map((challenge, i) => (
                              <li key={i} className="flex items-start">
                                <XSquare className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                                <span className="text-sm">{challenge}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Next Steps */}
                        <div>
                          <h4 className="font-semibold text-primary mb-2">Next Steps</h4>
                          <ul className="space-y-1">
                            {report.nextSteps.map((step, i) => (
                              <li key={i} className="flex items-start">
                                <ArrowRight className="h-4 w-4 text-accent mr-2 mt-1 flex-shrink-0" />
                                <span className="text-sm">{step}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </MotionSection>
      )}

      {/* Accordion View */}
      {view === "accordion" && (
        <MotionSection 
          className="py-8 pb-20" 
          direction="up"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {weeklyReports.map((report) => (
                  <motion.div
                    key={report.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: report.id * 0.05 }}
                  >
                    <AccordionItem value={`item-${report.id}`} className="border-b border-primary/20">
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex flex-col items-start md:flex-row md:items-center text-left gap-2">
                          <span className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm">
                            Week {report.week}
                          </span>
                          <span className="font-medium">{report.title}</span>
                          <span className="text-sm text-muted-foreground md:ml-auto flex items-center">
                            <Calendar className="h-3 w-3 mr-1 inline" />
                            {formatDate(new Date(report.date))}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="p-4 space-y-4">
                          <p className="text-muted-foreground">{report.summary}</p>
                          
                          {/* Achievements */}
                          <div>
                            <h4 className="font-semibold text-primary mb-2">Achievements</h4>
                            <ul className="space-y-1">
                              {report.achievements.map((achievement, i) => (
                                <li key={i} className="flex items-start">
                                  <CheckSquare className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                                  <span className="text-sm">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          {/* Challenges */}
                          <div>
                            <h4 className="font-semibold text-primary mb-2">Challenges</h4>
                            <ul className="space-y-1">
                              {report.challenges.map((challenge, i) => (
                                <li key={i} className="flex items-start">
                                  <XSquare className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                                  <span className="text-sm">{challenge}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          {/* Next Steps */}
                          <div>
                            <h4 className="font-semibold text-primary mb-2">Next Steps</h4>
                            <ul className="space-y-1">
                              {report.nextSteps.map((step, i) => (
                                <li key={i} className="flex items-start">
                                  <ArrowRight className="h-4 w-4 text-accent mr-2 mt-1 flex-shrink-0" />
                                  <span className="text-sm">{step}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </div>
        </MotionSection>
      )}
      
      {/* Download Reports */}
      <MotionSection 
        className="py-16 bg-primary-50/30 dark:bg-primary-950/30" 
        direction="up"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Download Complete Reports</h2>
            <p className="text-muted-foreground mb-8">
              Need more detailed information? Download our complete research reports and 
              presentations for in-depth analysis and findings.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button>
                Research Report PDF
              </Button>
              <Button variant="outline">
                Presentation Slides
              </Button>
              <Button variant="secondary">
                Data & Charts
              </Button>
            </div>
          </div>
        </div>
      </MotionSection>
    </div>
  );
}