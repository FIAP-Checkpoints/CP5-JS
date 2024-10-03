import styled from "styled-components";

export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;
`;

export const FeedbackContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  position: relative;
  padding: 40px 20px;
  overflow: hidden;

  @media (min-width: 768px) {
    max-width: 90%;
  }

  @media (min-width: 1200px) {
    max-width: 1350px;
    padding: 40px 0;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px 0;
  will-change: transform;
  touch-action: pan-y pinch-zoom;
`;

export const Card = styled.div`
  background-color: #ffffff;
  border-radius: 16px;
  padding: 24px;
  margin: 0;
  min-width: 280px;
  width: 280px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  flex-shrink: 0;
  position: relative;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
  }

  @media (min-width: 480px) {
    min-width: 320px;
    width: 320px;
    padding: 32px;
  }
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  @media (min-width: 480px) {
    width: 56px;
    height: 56px;
  }
`;

export const Description = styled.p`
  font-size: 14px;
  color: #4a5568;
  line-height: 1.6;
  margin: 16px 0;
  font-style: italic;

  @media (min-width: 480px) {
    font-size: 15px;
    margin: 20px 0;
  }
`;

export const StarRating = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 12px;
`;

export const SubTitle = styled.div`
  text-align: center;
  color: #4a5568;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  @media (min-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    gap: 1rem;
  }
`;

export const SliderButton = styled.button`
  background: #ffffff;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  z-index: 100;
  
  &:hover:not(:disabled) {
    background-color: #f8f9fa;
    transform: translateY(-50%) scale(1.1);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  ${props => props.direction === 'left' ? 'left: 10px;' : 'right: 10px;'}
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.span`
  font-weight: 600;
  color: #2d3748;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const UserRole = styled.span`
  font-size: 0.875rem;
  color: #718096;
`;

export const QuoteIcon = styled.div`
  position: absolute;
  top: -12px;
  left: 32px;
  background: #ff4081;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const RatingInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 8px;
`;

export const RatingCount = styled.span`
  color: #4a5568;
  font-weight: 500;
`;

export const VerifiedBadge = styled.span`
  background-color: #48bb78;
  color: white;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  margin-left: 4px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
`;

export const PaginationDots = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const DotButton = styled.button`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background-color: ${props => props.isActive ? '#FF4081' : '#E0E0E0'};
  cursor: pointer;
  padding: 0;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.2);
    background-color: ${props => props.isActive ? '#FF4081' : '#BDBDBD'};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(255, 64, 129, 0.3);
  }

  @media (min-width: 768px) {
    width: 10px;
    height: 10px;
  }
`;

export const MobileNavButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  color: #4a5568;
  transition: color 0.3s ease;

  &:hover:not(:disabled) {
    color: #2d3748;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 767px) {
    display: block;
  }
`;