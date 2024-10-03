import React from "react";
import { 
    HeroContainer,
    HeroContent, 
    HeroDescription, 
    HeroTitle, 
    DownloadButton 
} from "./Hero.styles";


const Hero = () => {
    return(
        <HeroContainer id="home">
            <HeroContent>
                <HeroTitle>Discover Amazing Flavors</HeroTitle>
                <HeroDescription>
                    Explore a variety of delicious dishes and find the best restaurants in your area with GourmetOn.
                </HeroDescription>
                <DownloadButton>Download Now</DownloadButton>
            </HeroContent>
        </HeroContainer>
    );
};

export default Hero;