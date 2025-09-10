import { Twitter, Linkedin, Facebook } from 'lucide-react';
import { Logo } from '@/components/logo';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Logo />
            <p className="max-w-xs text-sm text-foreground/80">
              Advancing healthcare through innovative research and development.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 md:col-span-2 md:grid-cols-3">
            <div>
              <h4 className="font-headline font-semibold">Company</h4>
              <ul className="mt-4 space-y-2">
                <li><a href="#about" className="text-sm text-foreground/80 hover:text-primary">About Us</a></li>
                <li><a href="#services" className="text-sm text-foreground/80 hover:text-primary">Services</a></li>
                <li><a href="#products" className="text-sm text-foreground/80 hover:text-primary">Products</a></li>
                <li><a href="#contact" className="text-sm text-foreground/80 hover:text-primary">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-headline font-semibold">Contact</h4>
              <ul className="mt-4 space-y-2">
                <li><a href="mailto:bdlifelinelifesciences@gmail.com" className="text-sm text-foreground/80 hover:text-primary">bdlifelinelifesciences@gmail.com</a></li>
                <li><a href="tel:+919639383552" className="text-sm text-foreground/80 hover:text-primary">+91 96393 83552</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-headline font-semibold">Follow Us</h4>
              <div className="mt-4 flex space-x-4">
                <a href="#" aria-label="Twitter" className="text-foreground/80 hover:text-primary"><Twitter className="h-5 w-5" /></a>
                <a href="#" aria-label="LinkedIn" className="text-foreground/80 hover:text-primary"><Linkedin className="h-5 w-5" /></a>
                <a href="#" aria-label="Facebook" className="text-foreground/80 hover:text-primary"><Facebook className="h-5 w-5" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-foreground/60">
          <p>&copy; {year} Lifeline Life Sciences. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
