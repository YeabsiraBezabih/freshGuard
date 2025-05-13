import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Leaf, Droplet, BarChart3, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimeText } from "@/components/animations/anime-text";
import { MotionSection, StaggeredChildren } from "@/components/animations/motion-section";
import { ParallaxLayer } from "@/components/animations/parallax-layer";
import { Counter } from "@/components/animations/counter";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    title: "100% Natural",
    description: "Made from completely natural and biodegradable materials that are safe for consumption and the environment.",
    icon: Leaf,
  },
  {
    title: "Water-Based",
    description: "Our coating is water-based, making it easy to apply and environmentally friendly with no harmful chemicals.",
    icon: Droplet,
  },
  {
    title: "Proven Results",
    description: "Extends shelf life of fruits and vegetables by up to 3x, reducing food waste significantly.",
    icon: BarChart3,
  },
  {
    title: "Locally Focused",
    description: "Developed specifically for Ethiopian produce and climate conditions to address local food security needs.",
    icon: Target,
  },
];

export default function Home() {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-hero-pattern bg-cover bg-center"
          style={{ 
            filter: "brightness(0.6)",
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-950/40 to-background" />
        
        <ParallaxLayer className="absolute inset-0" speed={0.2} direction="up">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />
        </ParallaxLayer>
        
        <div className="container mx-auto px-4 relative z-10 mt-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              <AnimeText 
                text="Preserving Nature's Freshness" 
                animation="wave" 
                className="text-4xl md:text-6xl font-bold text-white"
                delay={300}
              />
            </h1>
            <p className="text-lg md:text-xl text-primary-50 max-w-2xl mx-auto mb-8">
              FreshGuard is developing innovative edible coatings to extend the shelf life of fruits and vegetables, reducing waste and improving food security in Ethiopia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group" asChild>
                <a href="/about">
                  Learn More 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button size="lg" variant="glass" asChild>
                <a href="/team">Meet Our Team</a>
              </Button>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/60 flex justify-center">
            <motion.div 
              className="w-1.5 h-3 bg-white/60 rounded-full mt-2"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <MotionSection 
        className="py-16 bg-gradient-to-b from-background to-primary-50/50 dark:to-primary-950/50" 
        direction="up"
      >
        <div ref={statsRef} className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Making A Difference</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="p-6 text-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">
                <Counter from={0} to={30} duration={2500} formatter={(value) => `${value}%`} />
              </div>
              <p className="text-muted-foreground">Food waste reduction</p>
            </motion.div>
            
            <motion.div 
              className="p-6 text-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">
                <Counter from={0} to={3} duration={2500} formatter={(value) => `${value}x`} />
              </div>
              <p className="text-muted-foreground">Shelf life extension</p>
            </motion.div>
            
            <motion.div 
              className="p-6 text-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">
                <Counter from={0} to={100} duration={2500} formatter={(value) => `${value}%`} />
              </div>
              <p className="text-muted-foreground">Biodegradable materials</p>
            </motion.div>
            
            <motion.div 
              className="p-6 text-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">
                <Counter from={0} to={5} duration={2500} formatter={(value) => `${value}`} />
              </div>
              <p className="text-muted-foreground">Types of produce tested</p>
            </motion.div>
          </div>
        </div>
      </MotionSection>

      {/* Features Section */}
      <MotionSection 
        className="py-16 bg-primary-50/30 dark:bg-primary-950/30" 
        direction="up"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why FreshGuard?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our innovative edible coating technology offers multiple benefits for producers, 
              consumers, and the environment.
            </p>
          </div>
          
          <StaggeredChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} variant="neomorphic" className="overflow-hidden h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </StaggeredChildren>
        </div>
      </MotionSection>

      {/* Mission Statement */}
      <MotionSection className="py-16 bg-gradient-radial from-primary/5 to-transparent" direction="up">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <blockquote className="text-xl italic border-l-4 border-primary pl-4 py-2 mb-8">
              "To reduce food waste and improve food security in Ethiopia through innovative, 
              affordable, and sustainable preservation technology that extends the shelf life 
              of fruits and vegetables."
            </blockquote>
            <p className="text-muted-foreground mb-8">
              FreshGuard is committed to developing solutions that address the specific needs 
              of Ethiopian farmers and markets. By extending the shelf life of produce, we help 
              reduce post-harvest losses, increase farmer incomes, and improve food availability.
            </p>
            <Button size="lg" asChild>
              <a href="/about">Learn About Our Approach</a>
            </Button>
          </div>
        </div>
      </MotionSection>
    </div>
  );
}