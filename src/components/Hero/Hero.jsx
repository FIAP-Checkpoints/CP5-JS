import React from "react";
import { HeroContainer, HeroContent, HeroDescription, HeroTitle, DownloadButton } from "./Hero.styles";

const Hero = () => {
    return(
        <HeroContainer id="home">
            <HeroContent>
                <HeroTitle>Descubra Sabores Incríveis</HeroTitle>
                <HeroDescription>
                Explore uma variedade de pratos deliciosos e encontre os melhores restaurantes da sua região com o GourmetOn.
                </HeroDescription>
                <DownloadButton>Baixe Agora</DownloadButton>
            </HeroContent>
        </HeroContainer>
    );
};

export default Hero;
