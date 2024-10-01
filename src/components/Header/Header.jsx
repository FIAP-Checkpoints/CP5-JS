import React, { useState, useEffect } from "react";
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

    return (
        <HeaderContainer isScrolled={isScrolled}>
            <Logo>GourmetOn</Logo>
            <HamburgerMenu onClick={toggleMenu} aria-label="Toggle menu">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </HamburgerMenu>
            <Nav isOpen={isMenuOpen}>
                <NavItem href="#inicio" onClick={closeMenu}>Início</NavItem>
                <NavItem href="#cardapio" onClick={closeMenu}>Cardápio</NavItem>
                <NavItem href="#sobre" onClick={closeMenu}>Sobre</NavItem>
                <NavItem href="#contato" onClick={closeMenu}>Contato</NavItem>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;