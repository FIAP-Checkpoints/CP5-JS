import React, { useState } from "react";
import { Utensils, Send, ChefHat, Mail, Book } from "lucide-react";
import {
  Container,
  FormTitle,
  FormSubtitle,
  FormCard,
  Form,
  InputGrid,
  InputGroup,
  Input,
  Textarea,
  SubmitButton,
  SuccessMessage
} from "./Contact.styles";

const ContactForm = () => {
    const initialFormState = {
        name: "",
        email: "",
        subject: "",
        message: "",
      };
    
      const [formState, setFormState] = useState(initialFormState);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormState(initialFormState)
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container id="contact">
      <FormTitle>
        Let's Cook Up a Conversation <span>🍳</span>
      </FormTitle>
      <FormSubtitle>
        Share your thoughts, recipes, or suggestions with us!
      </FormSubtitle>
      <FormCard>
        <Form onSubmit={handleSubmit}>
          <InputGrid>
            <InputGroup>
              <ChefHat size={20} />
              <Input
                type="text"
                name="name"
                placeholder="Your name"
                value={formState.name}
                onChange={handleChange}
                required
              />
            </InputGroup>
            <InputGroup>
              <Mail size={20} />
              <Input
                type="email"
                name="email"
                placeholder="Your email"
                value={formState.email}
                onChange={handleChange}
                required
              />
            </InputGroup>
          </InputGrid>
          <InputGroup>
            <Book size={20} />
            <Input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formState.subject}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <InputGroup>
            <Textarea
              name="message"
              placeholder="Tell us what's cooking in your mind... 🥘"
              value={formState.message}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <SubmitButton type="submit">
            Send Message <Send size={20} />
          </SubmitButton>
        </Form>
        {submitted && (
          <SuccessMessage>
            <Utensils size={20} />
            Thanks for reaching out! We'll get back to you faster than a pressure cooker! 🚀
          </SuccessMessage>
        )}
      </FormCard>
    </Container>
  );
};

export default ContactForm;