"use client";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Stay Facilities", href: "#rooms" },
  { name: "Book Now", href: "#booking" },
  { name: "Amenities", href: "#amenities" },
  { name: "Gallery", href: "#gallery" },
  { name: "Events", href: "#events" },
  { name: "Packages", href: "#packages" },
  { name: "Corporate Outings", href: "#corporate" },
  { name: "Blogs", href: "#blogs" },
  { name: "Contact Us", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1
              className={`text-2xl font-playfair font-bold transition-colors duration-300 ${
                isScrolled ? "text-forest-900" : "text-white"
              }`}
            >
              Forest Resort
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-gold-400 ${
                  isScrolled
                    ? "text-forest-700 hover:text-gold-500"
                    : "text-white hover:text-gold-300"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={`transition-colors duration-300 ${
                    isScrolled
                      ? "text-forest-900 hover:bg-forest-100"
                      : "text-white hover:bg-white/20"
                  }`}
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full px-6 bg-white"
                aria-describedby={undefined}
              >
                <VisuallyHidden>
                  <SheetHeader>
                    <SheetTitle>test</SheetTitle>
                    <SheetDescription>
                        test 
                    </SheetDescription>
                  </SheetHeader>
                </VisuallyHidden>
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-playfair font-bold text-forest-900">
                      Forest Resort
                    </h2>
                  </div>

                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-forest-700 hover:text-gold-500 font-medium py-2 px-4 rounded-lg hover:bg-forest-50 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  ))}

                  <div className="pt-4 mt-4 border-t border-forest-200">
                    <Button
                      className="w-full bg-gold-400 hover:bg-gold-500 text-forest-900 font-semibold"
                      onClick={() => setIsOpen(false)}
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
