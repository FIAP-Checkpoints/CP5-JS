import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { BenefitsContainer, BenefitsTitle } from '../Benefits/Benefits.styles';
import { 
  Description,
  DescriptionRates, 
  FlexDiv, 
  FeedbackContainer, 
  CardContainer, 
  Card, 
  Avatar, 
  StarRating, 
  SliderButton 
} from './Feedbacks.styles';

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