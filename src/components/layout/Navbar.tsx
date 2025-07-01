
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Moon, Sun, Zap } from "lucide-react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

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
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-all duration-300 hover:scale-105">
          <div className="relative">
            <img 
              src="/lovable-uploads/2d921375-9aac-4166-bac9-4c649e7cc37a.png" 
              alt="BotBuddies Logo" 
              className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl animate-glow shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-primary/20 to-blue-500/20 animate-pulse"></div>
          </div>
          <span className="text-xl sm:text-2xl font-bold text-gradient holographic hidden sm:block">
            BotBuddies
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-accent hover:text-accent-foreground relative ${
                isActive(item.href)
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
              {isActive(item.href) && (
                <div className="absolute inset-0 rounded-md bg-gradient-to-r from-primary to-blue-500 opacity-10 animate-pulse"></div>
              )}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="hover:bg-accent hover:text-accent-foreground transition-all duration-200 hover:scale-105"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          
          <Link to="/join-team">
            <Button className="hidden sm:flex cyber-button text-white hover:scale-105 transition-all duration-200">
              <Zap className="h-4 w-4 mr-2" />
              Join Team
            </Button>
          </Link>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="lg:hidden hover:bg-accent hover:text-accent-foreground">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] neon-border bg-background/95 backdrop-blur">
              <div className="flex flex-col space-y-4 mt-8">
                <div className="flex items-center space-x-3 mb-8 pb-4 border-b border-border/50">
                  <div className="relative">
                    <img 
                      src="/lovable-uploads/2d921375-9aac-4166-bac9-4c649e7cc37a.png" 
                      alt="BotBuddies Logo" 
                      className="h-10 w-10 rounded-lg shadow-lg shadow-primary/25"
                    />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-primary/20 to-blue-500/20"></div>
                  </div>
                  <span className="text-lg font-bold text-gradient holographic">BotBuddies</span>
                </div>
                
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-lg text-left transition-all duration-200 hover:bg-accent hover:text-accent-foreground relative ${
                      isActive(item.href)
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                    {isActive(item.href) && (
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary to-blue-500 opacity-10"></div>
                    )}
                  </Link>
                ))}
                
                <div className="pt-4 border-t border-border/50">
                  <Link to="/join-team" onClick={() => setIsOpen(false)}>
                    <Button className="w-full cyber-button text-white">
                      <Zap className="h-4 w-4 mr-2" />
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
