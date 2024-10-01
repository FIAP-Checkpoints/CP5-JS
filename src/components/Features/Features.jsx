import React from "react";
import { FeatureCard, FeatureDescription, FeatureIcon, FeatureTitle, FeaturesContainer, FeaturesGrid, FeaturesTitle } from "./Features.styles";
import { Truck, ChefHat, CreditCard } from "lucide-react";


const Features = () => {
    const features = [
        {
            icon : <Truck />,
            title : 'Entrega Rápida',
            description : 'Receba sua comida em tempo recorde com nossa rede de entregadores eficientes.'
        },
        { 
            icon : <ChefHat />,
            title: 'Variedade de Restaurantes',
            description: 'Escolha entre uma ampla seleção de restaurantes locais e cozinhas internacionais.'
        },
        {
            icon : <CreditCard />,
            title : 'Pagamento Fácil',
            description : 'Diversas opções de pagamento seguras e convenientes para sua comodidade.'
        }
    ];

    return (
        <FeaturesContainer>
            <FeaturesTitle>Por que escolher o GourmetOn?</FeaturesTitle>
            <FeaturesGrid>
                {features.map((feature, index) => (
                    <FeatureCard key={index}>
                        <FeatureIcon>{feature.icon}</FeatureIcon>
                        <FeatureTitle>{feature.title}</FeatureTitle>
                        <FeatureDescription>{feature.description}</FeatureDescription>
                    </FeatureCard>
                ))}
            </FeaturesGrid>
        </FeaturesContainer>
    )
};

export default Features;