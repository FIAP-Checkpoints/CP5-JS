import { useState } from 'react';
import styled from 'styled-components';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { BenefitsContainer, BenefitsTitle } from '../Benefits/Benefits.styles';

const FlexDiv = styled.div`
    display: flex;
    gap: 1rem;
`

const FeedbackContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  padding: 20px 0;
  overflow: hidden;
`;

const CardContainer = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  transform: translateX(${props => props.translateX}px);
`;

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 24px;
  margin: 0 10px;
  width: 300px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
`;

const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 16px;
  object-fit: cover;
`;

const Description = styled.p`
  font-size: 14px;
  color: #333;
  line-height: 1.5;
  margin-bottom: 16px;
`;

const StarRating = styled.div`
  display: flex;
  margin-top: 10px;
`;

const DescriptionRates = styled.h3`
    text-align: center;
    color: #afafaf;
`

const SliderButton = styled.button`
  background: #f0f0f0;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
  z-index: 10;

  &:hover {
    background-color: #e0e0e0;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${props => props.direction === 'left' ? 'left: 0;' : 'right: 0;'}

`;

DescriptionRates

const feedbackData = [
  { id: 1, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: "Great product! Highly recommended.", rating: 5, name: 'Raquel' },
  { id: 2, avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: "Good value for money. It does the job well.", rating: 4, name: 'Matheus' },
  { id: 3, avatar: 'https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: "Decent, but could be improved.", rating: 3, name: 'TuxUser6927' },
  { id: 4, avatar: 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: "Excellent customer service!", rating: 5, name: 'Ryan' },
  { id: 5, avatar: 'https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: "Not bad, but not great either.", rating: 3, name: 'Isabella' },
];

const FeedbackSlider = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex(prev => Math.min(feedbackData.length - 3, prev + 1));
  };

  return (
    <BenefitsContainer>
    <BenefitsTitle>Feedbacks</BenefitsTitle>
    <DescriptionRates>Veja alguns de nossos Feedbacks dos nossos clientes.</DescriptionRates>
    <FeedbackContainer id="feedbacks">
      <CardContainer translateX={-startIndex * 320}> 
        {feedbackData.map(feedback => (
          <Card key={feedback.id}>
                <FlexDiv>
                    <Avatar src={feedback.avatar} alt="User avatar" />
                    <p>{feedback.name}</p>
                </FlexDiv>
            <Description>{feedback.description}</Description>
            <StarRating>
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  size={16}
                  fill={index < feedback.rating ? "#FFD700" : "none"}
                  stroke={index < feedback.rating ? "#FFD700" : "#D3D3D3"}
                />
              ))}
            </StarRating>
          </Card>
        ))}
      </CardContainer>
      <SliderButton direction="left" onClick={handlePrev} disabled={startIndex === 0}>
        <ChevronLeft size={24} />
      </SliderButton>
      <SliderButton direction="right" onClick={handleNext} disabled={startIndex >= feedbackData.length - 3}>
        <ChevronRight size={24} />
      </SliderButton>
    </FeedbackContainer>
    </BenefitsContainer>
  );
};

export default FeedbackSlider;