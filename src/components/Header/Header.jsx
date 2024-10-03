import { useState, useEffect } from "react";
import {
  HamburgerMenu,
  HeaderContainer,
  Nav,
  NavItem,
  Logo,
} from "./Header.styles";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <Logo href="#home" isScrolled={isScrolled}>
        GourmetOn
      </Logo>
      <HamburgerMenu
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
        isScrolled={isScrolled}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </HamburgerMenu>
      <Nav isOpen={isMenuOpen}>
        <NavItem href="#home" onClick={closeMenu}>
          Home
        </NavItem>
        <NavItem href="#benefits" onClick={closeMenu}>
          Benefits
        </NavItem>
        <NavItem href="#features" onClick={closeMenu}>
          Recipes
        </NavItem>
        <NavItem href="#feedbacks" onClick={closeMenu}>
          Feedbacks
        </NavItem>
        <NavItem href="#contact" onClick={closeMenu}>
          Contact
        </NavItem>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
