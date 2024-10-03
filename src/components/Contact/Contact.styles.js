import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

export const Container = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  animation: ${fadeIn} 0.6s ease-out;
`;

export const FormTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 1rem;
  
  span {
    animation: ${float} 3s ease-in-out infinite;
    display: inline-block;
    margin: 0 0.5rem;
  }
`;

export const FormSubtitle = styled.p`
  text-align: center;
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 2rem;
`;

export const FormCard = styled.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(90deg, #FF4D8D, #FF8FB1);
  }
`;

export const Form = styled.form`
  display: grid;
  gap: 1.5rem;
`;

export const InputGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const InputGroup = styled.div`
  position: relative;
  
  svg {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: #FF4D8D;
    opacity: 0.7;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 3rem;
  border: 2px solid transparent;
  border-radius: 12px;
  background: #f8f9fa;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
    border-color: #FF4D8D;
    background: white;
    box-shadow: 0 0 0 4px rgba(255, 77, 141, 0.1);
  }
  
  &::placeholder {
    color: #adb5bd;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 1rem 1rem 1rem;
  border: 2px solid transparent;
  border-radius: 12px;
  background: #f8f9fa;
  font-size: 1rem;
  min-height: 120px;
  transition: all 0.3s ease;
  resize: vertical;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
    border-color: #FF4D8D;
    background: white;
    box-shadow: 0 0 0 4px rgba(255, 77, 141, 0.1);
  }
  
  &::placeholder {
    color: #adb5bd;
  }
`;

export const SubmitButton = styled.button`
  background: #FF4D8D;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: fit-content;
  margin-left: auto;
  
  &:hover {
    background: #ff3377;
    transform: translateY(-2px);
  }
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(5px);
  }
`;

export const SuccessMessage = styled.div`
  background: #d4edda;
  color: #155724;
  padding: 1rem;
  border-radius: 12px;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  animation: ${fadeIn} 0.3s ease-out;
`;