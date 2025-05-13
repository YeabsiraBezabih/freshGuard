import { motion } from "framer-motion";
import { MotionSection, StaggeredChildren } from "@/components/animations/motion-section";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { GraduationCap, User, Mail } from "lucide-react";
import { teamMembers } from "@/data/team-members";

export default function Team() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Team Intro Section */}
      <MotionSection
        className="py-20 relative"
        direction="up"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/3 w-64 h-64 rounded-full bg-primary/10 dark:bg-primary/5 blur-3xl" />
          <div className="absolute bottom-1/3 left-1/4 w-72 h-72 rounded-full bg-secondary/10 dark:bg-secondary/5 blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Team</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Meet the passionate researchers and innovators behind FreshGuard's edible coating technology. 
                Our interdisciplinary team combines expertise in biotechnology, chemistry, food science, 
                and engineering.
              </p>
            </motion.div>
          </div>
        </div>
      </MotionSection>

      {/* Team Leadership */}
      <MotionSection 
        className="py-16 bg-primary-50/30 dark:bg-primary-950/30" 
        direction="up"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Team Leadership</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div 
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card variant="neomorphic" className="h-full overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <Avatar className="w-24 h-24 border-2 border-primary">
                      <AvatarImage src={teamMembers[0].imageUrl} alt={teamMembers[0].name} />
                      <AvatarFallback>{teamMembers[0].name.slice(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-2xl font-bold">{teamMembers[0].name}</h3>
                      <p className="text-muted-foreground">{teamMembers[0].role}</p>
                      <div className="flex items-center mt-2 text-sm">
                        <GraduationCap className="mr-2 h-4 w-4 text-primary" />
                        <span>{teamMembers[0].field}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <p className="text-muted-foreground">{teamMembers[0].bio}</p>
                  </div>
                  
                  <div className="mt-6 flex justify-end">
                    <Button variant="ghost" size="icon">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card variant="neomorphic" className="h-full overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <Avatar className="w-24 h-24 border-2 border-primary">
                      <AvatarImage src={teamMembers[2].imageUrl} alt={teamMembers[2].name} />
                      <AvatarFallback>{teamMembers[2].name.slice(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-2xl font-bold">{teamMembers[2].name}</h3>
                      <p className="text-muted-foreground">{teamMembers[2].role}</p>
                      <div className="flex items-center mt-2 text-sm">
                        <GraduationCap className="mr-2 h-4 w-4 text-primary" />
                        <span>{teamMembers[2].field}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <p className="text-muted-foreground">{teamMembers[2].bio}</p>
                  </div>
                  
                  <div className="mt-6 flex justify-end">
                    <Button variant="ghost" size="icon">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </MotionSection>

      {/* Team Carousel Section */}
      <MotionSection className="py-16" direction="up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Research Team</h2>
          
          <div className="max-w-5xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {teamMembers.slice(1).filter(member => member.id !== 3).map((member) => (
                  <CarouselItem key={member.id} className="md:basis-1/2 lg:basis-1/3">
                    <motion.div 
                      whileHover={{ y: -8 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="h-full"
                    >
                      <Card variant="glass" className="h-full">
                        <CardHeader className="pb-2">
                          <div className="flex justify-center mb-4">
                            <Avatar className="w-20 h-20 border-2 border-white/50 dark:border-white/20">
                              <AvatarImage src={member.imageUrl} alt={member.name} />
                              <AvatarFallback>{member.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                            </Avatar>
                          </div>
                          <CardTitle className="text-center">{member.name}</CardTitle>
                          <CardDescription className="text-center">{member.role}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-center gap-2 text-sm mb-4">
                            <GraduationCap className="h-4 w-4 text-primary" />
                            <span>{member.field}</span>
                          </div>
                          <p className="text-sm text-center text-muted-foreground">
                            {member.bio}
                          </p>
                        </CardContent>
                        <CardFooter className="justify-center">
                          <Button variant="ghost" size="sm">
                            <Mail className="mr-2 h-4 w-4" />
                            Contact
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="mt-6 flex justify-center gap-2">
                <CarouselPrevious className="relative static" />
                <CarouselNext className="relative static" />
              </div>
            </Carousel>
          </div>
        </div>
      </MotionSection>

      {/* Team Values */}
      <MotionSection 
        className="py-16 bg-gradient-to-b from-transparent to-primary-50/50 dark:to-primary-950/50" 
        direction="up"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Values</h2>
            
            <StaggeredChildren className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card variant="neomorphic">
                <CardHeader>
                  <CardTitle className="text-center">Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground">
                    We strive to develop creative, effective solutions that address
                    real challenges in food preservation.
                  </p>
                </CardContent>
              </Card>
              
              <Card variant="neomorphic">
                <CardHeader>
                  <CardTitle className="text-center">Sustainability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground">
                    Our solutions are environmentally friendly and designed to
                    support sustainable food systems.
                  </p>
                </CardContent>
              </Card>
              
              <Card variant="neomorphic">
                <CardHeader>
                  <CardTitle className="text-center">Accessibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground">
                    We develop technologies that are affordable and accessible
                    to those who need them most.
                  </p>
                </CardContent>
              </Card>
            </StaggeredChildren>
          </div>
        </div>
      </MotionSection>

      {/* Join Us Section */}
      <MotionSection className="py-16" direction="up">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Interested in contributing to our mission? We're always looking for passionate
              researchers, engineers, and innovators to join our team. 
            </p>
            <Button size="lg" asChild>
              <a href="/contact">
                <User className="mr-2 h-5 w-5" />
                Contact Us
              </a>
            </Button>
          </div>
        </div>
      </MotionSection>
    </div>
  );
}