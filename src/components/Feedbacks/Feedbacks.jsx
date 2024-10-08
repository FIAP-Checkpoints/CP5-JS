import { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { BenefitsContainer, BenefitsTitle } from "../Benefits/Benefits.styles";
import {
  Description,
  SubTitle,
  FlexDiv,
  FeedbackContainer,
  CardContainer,
  Card,
  Avatar,
  StarRating,
  UserInfo,
  UserName,
  UserRole,
  QuoteIcon,
  RatingInfo,
  RatingCount,
  VerifiedBadge,
  PaginationContainer,
  PaginationDots,
  DotButton,
  MobileNavButton,
} from "./Feedbacks.styles";

const feedbackData = [
  {
    id: 1,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    description:
      "The recipe recommendations are spot on! I've discovered so many new dishes that have become family favorites. The meal planning feature has made my weekly cooking so much easier.",
    rating: 5,
    name: "Rachel Thompson",
    role: "Food Enthusiast",
    verified: true,
    date: "2024-01-15",
  },
  {
    id: 2,
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3",
    description:
      "As a busy professional, this app has transformed how I approach cooking. The ingredient substitution suggestions are particularly helpful when I'm missing something.",
    rating: 4,
    name: "Matthew Chen",
    role: "Software Developer",
    verified: true,
    date: "2024-02-01",
  },
  {
    id: 3,
    avatar:
      "https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3",
    description:
      "The international cuisine section opened up a whole new world of cooking for me. However, some recipes could use more detailed instructions for beginners.",
    rating: 4,
    name: "James Wilson",
    role: "Home Chef",
    verified: true,
    date: "2024-02-15",
  },
  {
    id: 4,
    avatar:
      "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3",
    description:
      "Outstanding customer support! They helped me customize meal plans for my dietary restrictions. The recipe scaling feature is a game-changer for hosting dinner parties.",
    rating: 5,
    name: "Ryan Connor",
    role: "Restaurant Owner",
    verified: true,
    date: "2024-02-28",
  },
  {
    id: 5,
    avatar:
      "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3",
    description:
      "The seasonal recipe collections are fantastic, and I love how the app suggests recipes based on ingredients I already have. The cooking timer integration is very useful.",
    rating: 5,
    name: "Isabella Martinez",
    role: "Culinary Student",
    verified: true,
    date: "2024-03-10",
  },
];

const FeedbackSlider = () => {
  const [cardsToShow, setCardsToShow] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const dragStartX = useRef(0);
  const animationRef = useRef(null);
  const containerRef = useRef(null);

  const cardWidth = 320;
  const cardGap = 20;
  const containerWidth = cardsToShow * cardWidth + (cardsToShow - 1) * cardGap;
  const maxTranslate = -(
    feedbackData.length * (cardWidth + cardGap) -
    containerWidth
  );
  const totalPages = Math.max(feedbackData.length - (cardsToShow - 1), 1);

  const averageRating = (
    feedbackData.reduce((acc, curr) => acc + curr.rating, 0) /
    feedbackData.length
  ).toFixed(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) setCardsToShow(3);
      else if (window.innerWidth >= 768) setCardsToShow(2);
      else setCardsToShow(1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const animation = () => {
    if (isDragging) {
      setContainerPosition();
      animationRef.current = requestAnimationFrame(animation);
    }
  };

  const setContainerPosition = () => {
    containerRef.current.style.transform = `translateX(${currentTranslate}px)`;
  };

  const handleDragStart = (e) => {
    const clientX = e.type.includes("mouse") ? e.clientX : e.touches[0].clientX;
    dragStartX.current = clientX;
    setStartX(clientX);
    setIsDragging(true);
    animationRef.current = requestAnimationFrame(animation);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    const clientX = e.type.includes("mouse") ? e.clientX : e.touches[0].clientX;
    const currentPosition = clientX;
    const diff = currentPosition - startX;
    const newTranslate = prevTranslate + diff;

    if (newTranslate > 0) {
      setCurrentTranslate(newTranslate * 0.3);
    } else if (newTranslate < maxTranslate) {
      const overflowTranslate =
        maxTranslate + (newTranslate - maxTranslate) * 0.3;
      setCurrentTranslate(overflowTranslate);
    } else {
      setCurrentTranslate(newTranslate);
    }

    const newIndex = Math.round(Math.abs(newTranslate) / (cardWidth + cardGap));
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  };

  const handleDragEnd = () => {
    cancelAnimationFrame(animationRef.current);
    setIsDragging(false);

    const movedBy = currentTranslate - prevTranslate;

    if (Math.abs(movedBy) > (cardWidth + cardGap) / 4) {
      const direction = movedBy > 0 ? 1 : -1;
      const newIndex = Math.max(
        0,
        Math.min(currentIndex - direction, totalPages - 1)
      );
      const newTranslate = -newIndex * (cardWidth + cardGap);

      containerRef.current.style.transition = "transform 0.3s ease-out";
      setCurrentTranslate(newTranslate);
      setPrevTranslate(newTranslate);
      setCurrentIndex(newIndex);
    } else {
      containerRef.current.style.transition = "transform 0.3s ease-out";
      setCurrentTranslate(prevTranslate);
    }

    setTimeout(() => {
      containerRef.current.style.transition = "none";
    }, 300);
  };

  const handleDotClick = (index) => {
    const newTranslate = -index * (cardWidth + cardGap);
    const boundedTranslate = Math.max(maxTranslate, Math.min(0, newTranslate));

    containerRef.current.style.transition = "transform 0.3s ease-out";
    setCurrentTranslate(boundedTranslate);
    setPrevTranslate(boundedTranslate);
    setCurrentIndex(index);

    setTimeout(() => {
      containerRef.current.style.transition = "none";
    }, 300);
  };

  const handlePrevClick = () => {
    const newIndex = Math.max(0, currentIndex - 1);
    handleDotClick(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = Math.min(totalPages - 1, currentIndex + 1);
    handleDotClick(newIndex);
  };

  return (
    <BenefitsContainer id="feedbacks">
      <BenefitsTitle>Customer Feedbacks</BenefitsTitle>
      <SubTitle>
        Trusted by thousands of home chefs worldwide
        <RatingInfo>
          <StarRating>
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={16}
                fill={index < Math.floor(averageRating) ? "#FFD700" : "none"}
                stroke={
                  index < Math.floor(averageRating) ? "#FFD700" : "#D3D3D3"
                }
              />
            ))}
          </StarRating>
          <RatingCount>{averageRating} out of 5</RatingCount>
        </RatingInfo>
      </SubTitle>

      <FeedbackContainer>
        <CardContainer
          ref={containerRef}
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
          style={{
            cursor: isDragging ? "grabbing" : "grab",
            transform: `translateX(${currentTranslate}px)`,
            userSelect: "none",
          }}
        >
          {feedbackData.map((feedback) => (
            <Card key={feedback.id}>
              <QuoteIcon>
                <Quote size={24} />
              </QuoteIcon>

              <Description>{feedback.description}</Description>

              <FlexDiv>
                <Avatar
                  src={feedback.avatar}
                  alt={`${feedback.name}'s avatar`}
                />
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

        <PaginationContainer>
          <MobileNavButton
            onClick={handlePrevClick}
            disabled={currentIndex === 0}
            aria-label="Previous feedback"
          >
            <ChevronLeft size={24} />
          </MobileNavButton>

          <PaginationDots>
            {Array.from({ length: totalPages }).map((_, index) => (
              <DotButton
                key={index}
                isActive={currentIndex === index}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </PaginationDots>

          <MobileNavButton
            onClick={handleNextClick}
            disabled={currentIndex === totalPages - 1}
            aria-label="Next feedback"
          >
            <ChevronRight size={24} />
          </MobileNavButton>
        </PaginationContainer>
      </FeedbackContainer>
    </BenefitsContainer>
  );
};

export default FeedbackSlider;
