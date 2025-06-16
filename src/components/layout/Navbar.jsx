import { useState } from "react";
import { Menu, ShoppingBag, User, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-white text-black py-3 px-4 md:px-10 z-50">
      <div className="flex items-center justify-between">
        {/* Left side - Logo and Mobile Menu Button */}
        <div className="flex items-center">
          {/* Hamburger menu for mobile */}
          <button
            className="mr-4 block md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <h1 className="text-3xl md:text-5xl tracking-tight font-bold font-[Helvetica_Neue]">
            tenplus
          </h1>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden text-xl font-semibold md:flex items-center gap-x-5">
          <h2 className="hover:underline cursor-pointer">Buy now</h2>
          <h2 className="hover:underline cursor-pointer">
            Ingredients & Benefits
          </h2>
        </div>

        {/* Right side - Language and Icons */}
        <div className="flex items-center gap-x-3 md:gap-x-5">
          <h2>ID | EN</h2>
          <User className="h-5 w-5 cursor-pointer" />
          <ShoppingBag className="h-5 w-5 cursor-pointer" />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`absolute left-0 right-0 top-full bg-gray-300 px-4 py-3 shadow-md transition-all duration-300 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col space-y-3">
          <h2 className="hover:underline cursor-pointer">Buy now</h2>
          <h2 className="hover:underline cursor-pointer">
            Ingredients & Benefits
          </h2>
        </div>
      </div>
    </nav>
  );
}
