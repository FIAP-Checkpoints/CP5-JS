import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { BenefitsContainer, BenefitsTitle } from '../Benefits/Benefits.styles';
import { 
  Description,
  SubTitle, 
  FlexDiv, 
  FeedbackContainer, 
  CardContainer, 
  Card, 
  Avatar, 
  StarRating,
  SliderButton,
  UserInfo,
  UserName,
  UserRole,
  QuoteIcon,
  RatingInfo,
  RatingCount,
  VerifiedBadge
} from './Feedbacks.styles';

const feedbackData = [
  { 
    id: 1, 
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3', 
    description: "The recipe recommendations are spot on! I've discovered so many new dishes that have become family favorites. The meal planning feature has made my weekly cooking so much easier.", 
    rating: 5, 
    name: 'Rachel Thompson',
    role: 'Food Enthusiast',
    verified: true,
    date: '2024-01-15'
  },
  { 
    id: 2, 
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3', 
    description: "As a busy professional, this app has transformed how I approach cooking. The ingredient substitution suggestions are particularly helpful when I'm missing something.", 
    rating: 4, 
    name: 'Matthew Chen',
    role: 'Software Developer',
    verified: true,
    date: '2024-02-01'
  },
  { 
    id: 3, 
    avatar: 'https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3', 
    description: "The international cuisine section opened up a whole new world of cooking for me. However, some recipes could use more detailed instructions for beginners.", 
    rating: 4, 
    name: 'James Wilson',
    role: 'Home Chef',
    verified: true,
    date: '2024-02-15'
  },
  { 
    id: 4, 
    avatar: 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3', 
    description: "Outstanding customer support! They helped me customize meal plans for my dietary restrictions. The recipe scaling feature is a game-changer for hosting dinner parties.", 
    rating: 5, 
    name: 'Ryan Connor',
    role: 'Restaurant Owner',
    verified: true,
    date: '2024-02-28'
  },
  { 
    id: 5, 
    avatar: 'https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3', 
    description: "The seasonal recipe collections are fantastic, and I love how the app suggests recipes based on ingredients I already have. The cooking timer integration is very useful.", 
    rating: 5, 
    name: 'Isabella Martinez',
    role: 'Culinary Student',
    verified: true,
    date: '2024-03-10'
  },
];

const FeedbackSlider = () => {
  const [startIndex, setStartIndex] = useState(0);
  const cardsToShow = window.innerWidth >= 1200 ? 3 : window.innerWidth >= 768 ? 2 : 1;

  const handlePrev = () => {
    setStartIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex(prev => Math.min(feedbackData.length - cardsToShow, prev + 1));
  };

  const averageRating = (feedbackData.reduce((acc, curr) => acc + curr.rating, 0) / feedbackData.length).toFixed(1);

  return (
    <BenefitsContainer id='feedbacks'>
      <BenefitsTitle>Customer Feedbacks</BenefitsTitle>
      <SubTitle>
        Trusted by thousands of home chefs worldwide
        <RatingInfo>
          <StarRating>
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={20}
                fill={index < Math.floor(averageRating) ? "#FFD700" : "none"}
                stroke={index < Math.floor(averageRating) ? "#FFD700" : "#D3D3D3"}
              />
            ))}
          </StarRating>
          <RatingCount>{averageRating} out of 5</RatingCount>
        </RatingInfo>
      </SubTitle>

      <FeedbackContainer>
        <CardContainer translateX={-startIndex * (320 + 20)}> 
          {feedbackData.map(feedback => (
            <Card key={feedback.id}>
              <QuoteIcon>
                <Quote size={24} />
              </QuoteIcon>
              
              <Description>{feedback.description}</Description>
              
              <FlexDiv>
                <Avatar src={feedback.avatar} alt={`${feedback.name}'s avatar`} />
                <UserInfo>
                  <UserName>
                    {feedback.name}
                    {feedback.verified && <VerifiedBadge>✓</VerifiedBadge>}
                  </UserName>
                  <UserRole>{feedback.role}</UserRole>
                </UserInfo>
              </FlexDiv>

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
        
        <SliderButton direction="right" onClick={handleNext} disabled={startIndex >= feedbackData.length - cardsToShow}>
          <ChevronRight size={24} />
        </SliderButton>

      </FeedbackContainer>
    </BenefitsContainer>
  );
};

export default FeedbackSlider;