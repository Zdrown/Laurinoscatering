"use client"; // Necessary for Next.js 13 App Router to enable client-side features
import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";

export default function CateringPage() {
  return (
    <CateringSection>
      <SectionHeader>
        <h2>Catering for Every Occasion</h2>
        <p>
          Let Laurino's Tavern bring the perfect touch to your special event with our personalized catering services. From intimate gatherings to grand celebrations, we provide fresh, locally sourced cuisine paired with impeccable service.
        </p>
      </SectionHeader>

      <EventTypes>
        <EventCard>
          <img src="/weddingpic.jpg" alt="Wedding Catering" />
          <h3>Weddings</h3>
          <p>
            Whether you’re planning a cozy beachside ceremony or a grand ballroom reception, our wedding catering service offers a memorable dining experience for your guests.
          </p>
        </EventCard>

        <EventCard>
          <img src="/Pizza.jpg" alt="Corporate Events" />
          <h3>Corporate Events</h3>
          <p>
            From business luncheons to conferences, Laurino's Tavern provides customized catering to fit your company's needs, ensuring your event is both professional and enjoyable.
          </p>
        </EventCard>

        <EventCard>
          <img src="/FamilyEvent2.jpg" alt="Family Gatherings" />
          <h3>Family Gatherings</h3>
          <p>
            Celebrate with your loved ones while we take care of the food. Our family-style menus and homey atmosphere make every family event feel special.
          </p>
        </EventCard>
      </EventTypes>

      <AdditionalServices>
        <h3>Additional Services</h3>
        <p>
          We also offer various setups, from casual buffet-style arrangements to elegant plated dinners. All our menus are customizable to fit your theme and dietary preferences. Let us know your vision, and we'll make it a reality!
        </p>
      </AdditionalServices>

      <CateringForm />


    </CateringSection>
  );
}

// New CateringForm component
const CateringForm = () => {
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_v7gv9lu", "template_miq4jlj", e.target, "4_FoCKXK1P_QJueGi")
      .then(
        (result) => {
          console.log(result.text);
          setShowNotification(true);
        },
        (error) => {
          console.log(error.text);
          // Optionally, add error handling for the user here
        }
      );
  };

  return (
    <FormContainer>
      <h3>Contact Us</h3>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" name="name" placeholder="Your Name" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" placeholder="Your Email" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="phone">Phone Number</Label>
          <Input type="tel" id="phone" name="phone" placeholder="Your Phone Number" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="eventType">Event Type</Label>
          <Select id="eventType" name="eventType" required>
            <option value="">Select an event type</option>
            <option value="Wedding">Wedding</option>
            <option value="Corporate Event">Corporate Event</option>
            <option value="Family Gathering">Family Gathering</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="eventDate">Event Date</Label>
          <Input type="date" id="eventDate" name="eventDate" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="guests">Number of Guests</Label>
          <Input type="number" id="guests" name="guests" min="1" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="requests">Special Requests or Dietary Preferences</Label>
          <Textarea id="requests" name="requests" rows="4" placeholder="Any special requests or dietary preferences" />
        </FormGroup>
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
      {showNotification && (
        <Notification>
          We've recorded your event. You should hear back from us shortly.
        </Notification>
      )}
    </FormContainer>
  );
};

// Styled components for the form
const FormContainer = styled.div`
  background: ${({ theme }) => theme.colors.light};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: 3rem;

  h3 {
    font-family: "Aloja", sans-serif;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primaryDark};
    margin-bottom: 1rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.secondaryDark};
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.secondaryDark};
  border-radius: 4px;
  font-size: 1rem;
`;

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.secondaryDark};
  border-radius: 4px;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.secondaryDark};
  border-radius: 4px;
  font-size: 1rem;
`;

const SubmitButton = styled.button`
  align-self: center;
  background: ${({ theme }) => theme.colors.primaryDark};
  color: #fff;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.secondaryDark};
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 0.75rem 1rem;
  }
`;

const Notification = styled.p`
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.primaryDark};
  padding: 1rem;
  border-radius: 4px;
  margin-top: 1rem;
  text-align: center;
`;

// Existing styled components (unchanged)
const CateringSection = styled.section`
  background: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.primaryDark};
  padding: 4rem 2rem;
  text-align: center;
`;

const SectionHeader = styled.div`
  margin-bottom: 3rem;

  h2 {
    font-family: "Aloja", sans-serif;
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.primaryDark};
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.secondaryDark};
  }
`;

const EventTypes = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
`;

const EventCard = styled.div`
  background: ${({ theme }) => theme.colors.accent};
  padding: 1rem;
  border-radius: 8px;
  max-width: 350px;
  width: 100%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  h3 {
    font-size: 1.5rem;
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.primaryDark};
  }

  p {
    color: ${({ theme }) => theme.colors.secondaryDark};
    font-size: 1rem;
    margin-top: 0.5rem;
  }
`;

const AdditionalServices = styled.div`
  margin-top: 3rem;

  h3 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primaryDark};
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.secondaryDark};
  }
`;

const CTAButton = styled.div`
  margin-top: 3rem;
  text-align: center;

  a {
    display: inline-block;
    background: ${({ theme }) => theme.colors.primaryDark};
    color: #fff;
    padding: 1rem 2rem;
    font-size: 1.1rem;
    border-radius: 4px;
    text-decoration: none;
    font-weight: 600;
    white-space: nowrap;

    &:hover {
      background: ${({ theme }) => theme.colors.secondaryDark};
    }
  }

  @media (max-width: 480px) {
    a {
      font-size: 1rem;
      padding: 0.75rem 1rem;
    }
  }
`;