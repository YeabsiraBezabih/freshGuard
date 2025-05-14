import { 
  Mail, 
  Instagram, 
  Twitter, 
  Youtube, 
  MapPin, 
  Phone 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const contactInfo = {
  email: "freshguard@aastu.edu.et",
  phone: "+251 11 434 9222",
  address: "AASTU, Addis Ababa, Ethiopia",
  social: {
    instagram: "https://instagram.com/freshguard",
    twitter: "https://twitter.com/freshguard",
    youtube: "https://youtube.com/freshguard",
  }
};

export default function Footer() {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-primary-950 text-primary-50 pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div 
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
            <div className="flex items-start space-x-3">
              <Mail className="h-5 w-5 text-primary-400 mt-0.5" />
              <span>{contactInfo.email}</span>
            </div>
            <div className="flex items-start space-x-3">
              <Phone className="h-5 w-5 text-primary-400 mt-0.5" />
              <span>{contactInfo.phone}</span>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-primary-400 mt-0.5" />
              <span>{contactInfo.address}</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary-300 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary-300 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-primary-300 transition-colors">Our Team</Link>
              </li>
              <li>
                <Link to="/reports" className="hover:text-primary-300 transition-colors">Weekly Reports</Link>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div 
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-4 text-white">Stay Updated</h3>
            <p className="text-primary-100">Subscribe to our newsletter for the latest updates on our research and innovations.</p>
            <div className="flex mt-4 space-x-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-lg bg-primary-900 text-primary-50 border border-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-400 flex-grow"
              />
              <Button variant="default" className="bg-primary hover:bg-primary-600">
                Subscribe
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a href={contactInfo.social.instagram} className="hover:text-primary-300 transition-colors" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
              <a href={contactInfo.social.twitter} className="hover:text-primary-300 transition-colors" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
              </a>
              <a href={contactInfo.social.youtube} className="hover:text-primary-300 transition-colors" aria-label="YouTube">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
        </div>
        
        <div className="border-t border-primary-800 mt-12 pt-8 text-center text-sm text-primary-300">
          <p>© {new Date().getFullYear()} FreshGuard IST Project. All rights reserved.</p>
          <p className="mt-2">A student initiative from Addis Ababa Science & Technology University</p>
        </div>
      </div>
    </footer>
  );
}