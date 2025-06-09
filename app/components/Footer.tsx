import Link from "next/link";
import { Facebook, Twitter, Linkedin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary w-full text-muted-foreground py-10 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left section */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <p className="text-xs uppercase mb-6 tracking-widest">A MORE MEANINGFUL HOME FOR PHOTOGRAPHY</p>
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-2xl font-light text-foreground">LET'S</span>
                <div className="bg-accent rounded-full w-8 h-8 flex items-center justify-center text-accent-foreground">
                  <ArrowUpRight size={18} />
                </div>
              </div>
              <p className="text-2xl font-light text-foreground">WORK TOGETHER</p>
            </div>
          </div>

          {/* Navigation columns */}
          <div className="md:col-span-8 w-full">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center sm:text-left">
              {/* Column 1 */}
              <div className="space-y-2">
                <Link href="#" className="block text-xs hover:text-accent transition-colors">
                  HOME
                </Link>
                <Link href="#" className="block text-xs hover:text-accent transition-colors">
                  ABOUT ME
                </Link>
                <Link href="#" className="block text-xs hover:text-accent transition-colors">
                  MY IMAGES
                </Link>
                <Link href="#" className="block text-xs hover:text-accent transition-colors">
                  TESTIMONIALS
                </Link>
              </div>

              {/* Column 2 */}
              <div className="space-y-2">
                <Link href="#" className="block text-xs hover:text-accent transition-colors">
                  CLIENTS
                </Link>
                <Link href="#" className="block text-xs hover:text-accent transition-colors">
                  KIJKDUIN
                </Link>
                <Link href="#" className="block text-xs hover:text-accent transition-colors">
                  NUNSPEET
                </Link>
                <Link href="#" className="block text-xs hover:text-accent transition-colors">
                  GIJSBERTS
                </Link>
                <Link href="#" className="block text-xs hover:text-accent transition-colors">
                  MEDIA
                </Link>
              </div>

              {/* Column 3 */}
              <div className="space-y-2">
                <Link href="#" className="block text-xs hover:text-accent transition-colors">
                  PORTFOLIO
                </Link>
                <Link href="#" className="block text-xs hover:text-accent transition-colors">
                  EVENTS
                </Link>
                <Link href="#" className="block text-xs hover:text-accent transition-colors">
                  PORTRAIT
                </Link>
                <Link href="#" className="block text-xs hover:text-accent transition-colors">
                  BRANDING
                </Link>
                <Link href="#" className="block text-xs hover:text-accent transition-colors">
                  WEDDING
                </Link>
              </div>

              {/* Column 4 */}
              <div className="space-y-2">
                <Link href="#" className="block text-xs hover:text-accent transition-colors">
                  SERVICES
                </Link>
                <Link href="#" className="block text-xs hover:text-accent transition-colors">
                  PORTRAITS
                </Link>
                <Link href="#" className="block text-xs hover:text-accent transition-colors">
                  EVENTS
                </Link>
                <Link href="#" className="block text-xs hover:text-accent transition-colors">
                  COMMERCIAL
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-4 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 text-center">
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mb-2 md:mb-0 items-center justify-center">
            <Link href="#" className="text-xs text-muted-foreground hover:text-accent transition-colors">
              Terms & Conditions
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-accent transition-colors">
              Privacy Policy
            </Link>
          </div>

          <div className="flex space-x-4 mb-2 md:mb-0 items-center justify-center">
            <Link href="#" aria-label="Facebook" className="hover:text-accent transition-colors">
              <Facebook size={18} className="text-muted-foreground" />
            </Link>
            <Link href="#" aria-label="Twitter" className="hover:text-accent transition-colors">
              <Twitter size={18} className="text-muted-foreground" />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="hover:text-accent transition-colors">
              <Linkedin size={18} className="text-muted-foreground" />
            </Link>
          </div>

          <div className="text-xs text-muted-foreground">© 2024 Darian Blom Photography. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
} 