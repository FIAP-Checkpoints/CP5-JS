import React from 'react';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import {
    FooterContainer,
    FooterContent,
    FooterSection,
    FooterTitle,
    FooterList,
    FooterListItem,
    FooterLink,
    SocialIcons,
    IconWrapper,
    Copyright
  } from './FooterStyles';



function FooterComponent() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Sobre nós</FooterTitle>
          <FooterList>
            <FooterListItem>
              <FooterLink href="#">Nossa História</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="#">Time</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="#">Careers</FooterLink>
            </FooterListItem>
          </FooterList>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Contato</FooterTitle>
          <FooterList>
            <FooterListItem>
              <IconWrapper><Mail size={16} /></IconWrapper>
              GourmetOn@contact.com
            </FooterListItem>
            <FooterListItem>
              <IconWrapper><Phone size={16} /></IconWrapper>
              +12 (34) 56789-1011
            </FooterListItem>
            <FooterListItem>
              <IconWrapper><MapPin size={16} /></IconWrapper>
              Rua do GourmetOn
            </FooterListItem>
          </FooterList>
        </FooterSection>
        <FooterSection>
          <FooterTitle>Redes Sociais</FooterTitle>
          <SocialIcons>
            <FooterLink href="#" aria-label="Facebook">
              <Facebook size={24} />
            </FooterLink>
            <FooterLink href="#" aria-label="Twitter">
              <Twitter size={24} />
            </FooterLink>
            <FooterLink href="#" aria-label="Instagram">
              <Instagram size={24} />
            </FooterLink>
          </SocialIcons>
        </FooterSection>
      </FooterContent>
      <Copyright>
        © {new Date().getFullYear()} GourmetOn. Todos os direitos reservados. 
        <IconWrapper><Heart size={16} color="#fff" fill="#fff" /></IconWrapper>
      </Copyright>
    </FooterContainer>
  );
};

export default FooterComponent;