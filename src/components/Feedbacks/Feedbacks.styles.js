import styled from "styled-components";

export const FlexDiv = styled.div`
    display: flex;
    gap: 1rem;
`

export const FeedbackContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  padding: 20px 0;
  overflow: hidden;
`;

export const CardContainer = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  transform: translateX(${props => props.translateX}px);
`;

export const Card = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 24px;
  margin: 0 10px;
  width: 300px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
`;

export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 16px;
  object-fit: cover;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #333;
  line-height: 1.5;
  margin-bottom: 16px;
`;

export const StarRating = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const DescriptionRates = styled.h3`
    text-align: center;
    color: #afafaf;
`

export const SliderButton = styled.button`
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