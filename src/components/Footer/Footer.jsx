import React from "react";
import {
  Heart,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
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
  Copyright,
  SocialLink,
} from "./Footer.styles";

function FooterComponent() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>About Us</FooterTitle>
          <FooterList>
            <FooterListItem>
              <FooterLink href="#">Our Story</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="#">Team</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink href="#">Careers</FooterLink>
            </FooterListItem>
          </FooterList>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Contact</FooterTitle>
          <FooterList>
            <FooterListItem>
              <IconWrapper>
                <Mail size={16} />
              </IconWrapper>
              <FooterLink href="mailto:GourmetOn@contact.com">
                GourmetOn@contact.com
              </FooterLink>
            </FooterListItem>
            <FooterListItem>
              <IconWrapper>
                <Phone size={16} />
              </IconWrapper>
              <FooterLink href="tel:+123456789101">
                +12 (34) 56789-1011
              </FooterLink>
            </FooterListItem>
            <FooterListItem>
              <IconWrapper>
                <MapPin size={16} />
              </IconWrapper>
              <FooterLink href="#">GourmetOn Street</FooterLink>
            </FooterListItem>
          </FooterList>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Social Media</FooterTitle>
          <SocialIcons>
            <SocialLink href="#">
              <Facebook size={24} />
            </SocialLink>
            <SocialLink href="#">
              <Twitter size={24} />
            </SocialLink>
            <SocialLink href="#">
              <Instagram size={24} />
            </SocialLink>
          </SocialIcons>
        </FooterSection>
      </FooterContent>

      <Copyright>
        © {new Date().getFullYear()} GourmetOn. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
}

export default FooterComponent;
