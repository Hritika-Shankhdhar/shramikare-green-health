import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const links = [
    { href: "/login", label: "Login" },
    { href: "/doctor-details", label: "Doctor Details" },
    { href: "/aadhaar-capture", label: "Aadhaar Capture" },
    { href: "/digital-id", label: "Digital ID" },
  ];

  return (
    <header className="bg-card shadow-soft border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-gradient-primary rounded-lg shadow-button group-hover:shadow-lg transition-all duration-200">
              <Heart className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">Shramikare</h1>
              <p className="text-xs text-muted-foreground -mt-1">Caring for Workers' Health</p>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                  "hover:bg-secondary hover:text-secondary-foreground",
                  location.pathname === link.href
                    ? "bg-primary text-primary-foreground shadow-button"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <select
              value={location.pathname}
              onChange={(e) => window.location.href = e.target.value}
              className="bg-secondary text-secondary-foreground px-3 py-2 rounded-lg border border-border text-sm"
            >
              <option value="/">Menu</option>
              {links.map((link) => (
                <option key={link.href} value={link.href}>
                  {link.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;