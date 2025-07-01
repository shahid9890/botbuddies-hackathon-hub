
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Moon, Sun, Zap } from "lucide-react";

interface NavbarProps {
  toggleTheme: () => void;
  isDark: boolean;
}

const Navbar = ({ toggleTheme, isDark }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Events" },
    { href: "/calendar", label: "Calendar" },
    { href: "/school-hackathons", label: "School" },
    { href: "/college-hackathons", label: "College" },
    { href: "/past-events", label: "Past Events" },
    { href: "/about", label: "About" },
    { href: "/dashboard", label: "Dashboard" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 neon-border">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-all duration-300 hover:scale-105">
          <div className="relative">
            <img 
              src="/lovable-uploads/2d921375-9aac-4166-bac9-4c649e7cc37a.png" 
              alt="BotBuddies Logo" 
              className="h-10 w-10 animate-glow rounded-lg shadow-lg shadow-purple-500/25 border-2 border-purple-500/30"
            />
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20 animate-pulse-slow"></div>
          </div>
          <span className="text-xl font-bold text-gradient holographic hidden sm:block">
            BotBuddies
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-accent hover:text-accent-foreground cyber-button ${
                isActive(item.href)
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 neon-border"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="hover:bg-accent hover:text-accent-foreground cyber-button"
          >
            {isDark ? (
              <Sun className="h-4 w-4 animate-glow" />
            ) : (
              <Moon className="h-4 w-4 animate-glow" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
          
          <Link to="/join-team">
            <Button className="hidden sm:flex cyber-button text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              <Zap className="h-4 w-4 mr-2 animate-pulse" />
              Join Team
            </Button>
          </Link>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden cyber-button">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] neon-border matrix-bg">
              <div className="flex flex-col space-y-4 mt-8">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="relative">
                    <img 
                      src="/lovable-uploads/2d921375-9aac-4166-bac9-4c649e7cc37a.png" 
                      alt="BotBuddies Logo" 
                      className="h-8 w-8 rounded-lg shadow-lg shadow-purple-500/25 border border-purple-500/30"
                    />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20 animate-pulse-slow"></div>
                  </div>
                  <span className="text-lg font-bold text-gradient holographic">BotBuddies</span>
                </div>
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-lg text-left transition-all duration-200 hover:bg-accent hover:text-accent-foreground cyber-button ${
                      isActive(item.href)
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 neon-border"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 border-t border-purple-500/30">
                  <Link to="/join-team" onClick={() => setIsOpen(false)}>
                    <Button className="w-full cyber-button text-white bg-gradient-to-r from-purple-600 to-blue-600">
                      <Zap className="h-4 w-4 mr-2 animate-pulse" />
                      Join Team
                    </Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
