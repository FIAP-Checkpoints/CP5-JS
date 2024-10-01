import React from "react";
import { BenefitsContainer, BenefitsTitle, BenefitsGrid, BenefitTitle, BenefitIcon, BenefitDescription, BenefitCard } from "./Benefits.styles";
import { Truck, ChefHat, CreditCard } from "lucide-react";


const Benefits = () => {
    const benefits = [
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
        <BenefitsContainer id="benefits">
            <BenefitsTitle>Por que escolher o GourmetOn?</BenefitsTitle>
            <BenefitsGrid>
                {benefits.map((benefit, index) => (
                    <BenefitCard key={index}>
                        <BenefitIcon>{benefit.icon}</BenefitIcon>
                        <BenefitTitle>{benefit.title}</BenefitTitle>
                        <BenefitDescription>{benefit.description}</BenefitDescription>
                    </BenefitCard>
                ))}
            </BenefitsGrid>
        </BenefitsContainer>
    )
};

export default Benefits;