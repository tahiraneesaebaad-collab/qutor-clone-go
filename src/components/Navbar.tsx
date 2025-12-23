import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/courses", label: "Our Courses", hasDropdown: true },
    { path: "/pricing", label: "Pricing" },
    { path: "/contact", label: "Contact" },
  ];

  const courseLinks = [
    { path: "/courses/norani-qaida", label: "Noorani Qaida" },
    { path: "/courses/recitation", label: "Quran Recitation" },
    { path: "/courses/arabic", label: "Arabic Language" },
    { path: "/courses/hifz", label: "Hifz (Memorization)" },
    { path: "/courses/tajweed", label: "Tajweed Rules" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 p-0.5 shadow-sm">
              <img 
                src="/logo.png" 
                alt="QuranAcademy Logo" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className="font-heading font-bold text-xl text-primary hidden sm:block">QuranAcademy</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.path} className="relative group">
                {link.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setCoursesOpen(true)}
                    onMouseLeave={() => setCoursesOpen(false)}
                  >
                    <Link
                      to={link.path}
                      className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                        isActive(link.path)
                          ? "text-primary bg-primary/10"
                          : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      {link.label}
                      <ChevronDown className="w-4 h-4" />
                    </Link>
                    {coursesOpen && (
                      <div className="absolute top-full left-0 pt-2 w-48">
                        <div className="bg-background rounded-lg shadow-card border border-border py-2">
                          {courseLinks.map((course) => (
                            <Link
                              key={course.path}
                              to={course.path}
                              className="block px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-primary/5"
                            >
                              {course.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      isActive(link.path)
                        ? "text-primary bg-primary/10"
                        : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <a href="https://wa.me/923334136071" target="_blank" rel="noopener noreferrer">
                Free Trial
              </a>
            </Button>
            <Button size="sm" asChild>
              <a href="https://wa.me/923334136071" target="_blank" rel="noopener noreferrer">
                Get Started
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <div key={link.path}>
                  <Link
                    to={link.path}
                    className={`block px-4 py-2 rounded-lg font-medium ${
                      isActive(link.path)
                        ? "text-primary bg-primary/10"
                        : "text-foreground/80"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.hasDropdown && (
                    <div className="ml-4 mt-1 space-y-1">
                      {courseLinks.map((course) => (
                        <Link
                          key={course.path}
                          to={course.path}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary"
                          onClick={() => setIsOpen(false)}
                        >
                          {course.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex flex-col gap-2 mt-4 px-4">
                <Button variant="outline" asChild>
                  <a href="https://wa.me/923334136071" target="_blank" rel="noopener noreferrer">
                    Free Trial
                  </a>
                </Button>
                <Button asChild>
                  <a href="https://wa.me/923334136071" target="_blank" rel="noopener noreferrer">
                    Get Started
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
