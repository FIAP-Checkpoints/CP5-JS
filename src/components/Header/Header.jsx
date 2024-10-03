import { useState, useEffect } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { HamburgerMenu, HeaderContainer, Nav, NavItem, Logo } from "./Header.styles";
import { Menu, X } from 'lucide-react'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);   
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
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
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isMenuOpen]);

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <HeaderContainer isScrolled={isScrolled}>
            <Logo onClick={scrollToTop} isScrolled={isScrolled}>GourmetOn</Logo>
            <HamburgerMenu 
                onClick={toggleMenu} 
                aria-label="Toggle menu" 
                aria-expanded={isMenuOpen} 
                isScrolled={isScrolled}
                isOpen={isMenuOpen}
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </HamburgerMenu>
            <Nav isOpen={isMenuOpen}>
                <NavItem>
                    <ScrollLink to="home" smooth={true} duration={0} onClick={closeMenu}>Home</ScrollLink>
                </NavItem>
                <NavItem>
                    <ScrollLink to="benefits" smooth={true} duration={0} onClick={closeMenu}>Benefits</ScrollLink>
                </NavItem>
                <NavItem>
                    <ScrollLink to="features" smooth={true} duration={0} onClick={closeMenu}>Recipes</ScrollLink>
                </NavItem>
                <NavItem>
                    <ScrollLink to="feedbacks" smooth={true} duration={0} onClick={closeMenu}>Feedbacks</ScrollLink>
                </NavItem>
                <NavItem>
                    <ScrollLink to="contact" smooth={true} duration={0} onClick={closeMenu}>Contact</ScrollLink>
                </NavItem>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;