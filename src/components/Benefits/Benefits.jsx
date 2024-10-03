import React from "react";
import { Truck, ChefHat, CreditCard } from "lucide-react";
import { 
    BenefitsContainer, 
    BenefitsTitle, 
    BenefitsGrid, 
    BenefitTitle, 
    BenefitIcon,
    BenefitDescription,
    BenefitCard 
} from "./Benefits.styles";


const Benefits = () => {
    const benefits = [
        {
            icon: <Truck />,
            title: 'Fast Delivery',
            description: 'Get your food in record time with our efficient delivery network.'
        },
        {
            icon: <ChefHat />,
            title: 'Restaurant Variety',
            description: 'Choose from a wide selection of local restaurants and international cuisines.'
        },
        {
            icon: <CreditCard />,
            title: 'Easy Payment',
            description: 'Multiple secure and convenient payment options for your comfort.'
        }
    ];

    return (
        <BenefitsContainer id="benefits">
            <BenefitsTitle>Why choose GourmetOn?</BenefitsTitle>
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