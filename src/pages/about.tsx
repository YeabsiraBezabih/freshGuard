import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MotionSection, StaggeredChildren } from "@/components/animations/motion-section";
import { Calendar, FlaskConical, ScalingIcon as SeedlingIcon, DropletIcon, PackageCheck, TrendingUp } from "lucide-react";
import { ParallaxLayer } from "@/components/animations/parallax-layer";
import { AnimeText } from "@/components/animations/anime-text";

const processSteps = [
  {
    icon: FlaskConical,
    title: "Research & Development",
    description: "Our team researches natural materials and develops formulations specific to Ethiopian produce.",
  },
  {
    icon: SeedlingIcon,
    title: "Sustainable Materials",
    description: "We use only biodegradable, food-safe ingredients sourced sustainably.",
  },
  {
    icon: DropletIcon,
    title: "Application Method",
    description: "The coating is applied as a thin layer through dipping or spraying, creating a protective barrier.",
  },
  {
    icon: PackageCheck,
    title: "Quality Testing",
    description: "Rigorous testing ensures effectiveness, safety, and compatibility with different produce types.",
  },
  {
    icon: TrendingUp,
    title: "Impact Assessment",
    description: "We measure the real-world impact on shelf life, food waste reduction, and economic benefits.",
  },
];

export default function About() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/10 dark:bg-primary/5 blur-3xl" />
          <div className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-secondary/10 dark:bg-secondary/5 blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About FreshGuard</h1>
              <p className="text-xl mb-8 text-muted-foreground">
                Innovative edible coatings to extend the shelf life of fruits and vegetables, 
                reducing waste and improving food security in Ethiopia.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <MotionSection 
        className="py-16 bg-primary-50/50 dark:bg-primary-950/50" 
        direction="up"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg mb-6">
                At FreshGuard, we are dedicated to addressing one of Ethiopia's most pressing challenges: 
                food waste due to limited preservation methods for fresh produce.
              </p>
              <p className="text-lg mb-6">
                Our edible coating technology is designed to be:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                    <Calendar className="h-4 w-4 text-primary" />
                  </span>
                  <span><strong>Effective:</strong> Extending shelf life by up to 3 times</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                    <SeedlingIcon className="h-4 w-4 text-primary" />
                  </span>
                  <span><strong>Sustainable:</strong> Made from natural, biodegradable materials</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                    <FlaskConical className="h-4 w-4 text-primary" />
                  </span>
                  <span><strong>Safe:</strong> Food-grade and tasteless with no harmful chemicals</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-primary/10 p-1 rounded-full mr-3 mt-1">
                    <TrendingUp className="h-4 w-4 text-primary" />
                  </span>
                  <span><strong>Accessible:</strong> Affordable and adaptable to local conditions</span>
                </li>
              </ul>
            </div>
            
            <div className="relative overflow-hidden rounded-2xl h-80">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
              <img 
                src="https://images.pexels.com/photos/2284170/pexels-photo-2284170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Fresh produce in a market" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </MotionSection>

      {/* Our Approach Section */}
      <MotionSection 
        className="py-16 relative overflow-hidden" 
        direction="up"
      >
        <div ref={targetRef} className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            style={{ opacity, scale }}
          >
            <AnimeText
              text="Our Approach"
              animation="fadeIn"
              tag="h2"
              className="text-3xl font-bold mb-6"
            />
            <p className="text-lg text-muted-foreground">
              FreshGuard's approach combines scientific innovation with practical application, 
              focusing on solutions tailored for Ethiopian produce and climate conditions.
            </p>
          </motion.div>
          
          <StaggeredChildren className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className="backdrop-blur-sm bg-white/30 dark:bg-black/20 rounded-2xl p-6 border border-white/20 dark:border-white/10 shadow-md relative overflow-hidden group"
              >
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/10 dark:bg-primary/5 rounded-full blur-xl group-hover:bg-primary/20 transition-all duration-700" />
                
                <div className="relative z-10">
                  <div className="bg-primary/10 h-12 w-12 rounded-full flex items-center justify-center mb-4">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </StaggeredChildren>
        </div>
      </MotionSection>

      {/* Impact Section */}
      <MotionSection 
        className="py-16 bg-primary-50/30 dark:bg-primary-950/30" 
        direction="up"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
            
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <img 
                    src="https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Farmer with fresh produce" 
                    className="rounded-xl shadow-lg object-cover h-60 w-full"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold mb-2">Food Security</h3>
                  <p className="text-muted-foreground">
                    By extending the shelf life of fruits and vegetables, FreshGuard helps ensure 
                    food availability throughout the year, reducing seasonal scarcity and helping 
                    stabilize prices in local markets.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                <div className="md:w-1/3">
                  <img 
                    src="https://images.pexels.com/photos/1084542/pexels-photo-1084542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Economic impact" 
                    className="rounded-xl shadow-lg object-cover h-60 w-full"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold mb-2">Economic Benefits</h3>
                  <p className="text-muted-foreground">
                    Farmers can transport their produce over longer distances without spoilage, 
                    accessing more markets and improving their income. Reduced waste means more 
                    sellable produce from the same harvest.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <img 
                    src="https://images.pexels.com/photos/886521/pexels-photo-886521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Environmental sustainability" 
                    className="rounded-xl shadow-lg object-cover h-60 w-full"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold mb-2">Environmental Sustainability</h3>
                  <p className="text-muted-foreground">
                    By reducing food waste, FreshGuard helps decrease the environmental impact of 
                    agriculture, including land and water use. Our coatings are 100% biodegradable, 
                    leaving no harmful residues in the environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* Scientific Foundation */}
      <MotionSection className="py-16" direction="up">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Scientific Foundation</h2>
            <p className="text-lg mb-8 text-muted-foreground">
              FreshGuard's technology is based on rigorous scientific research. Our team combines 
              expertise in food technology, biotechnology, chemistry, and agricultural science to 
              develop effective and safe solutions.
            </p>
            <div className="bg-gradient-radial from-primary/5 to-transparent p-8 rounded-2xl">
              <blockquote className="italic text-lg">
                "Our research focuses on creating a thin, invisible barrier that slows down the ripening 
                process and prevents moisture loss while allowing the fruit or vegetable to 'breathe.' 
                This balance is crucial for maintaining freshness without affecting taste or nutritional value."
              </blockquote>
              <p className="mt-4 font-semibold">— Dr. Amanuel Tessema, Team Lead</p>
            </div>
          </div>
        </div>
      </MotionSection>
    </div>
  );
}