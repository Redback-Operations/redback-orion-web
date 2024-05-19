import React from 'react';
import {
  Container,
  Header,
  Section,
  SubHeader,
  Card,
  CardImage,
  CardContent,
  CardTitle,
  CardDescription,
  Quote,
  QuoteText,
  QuoteAuthor,
  ImagePlaceholder
} from '../styles/TrainStyles';

import img1 from './images/strength.png';
import img2 from './images/cardio.png';
import img3 from './images/yoga.png';

const Train = () => {
  return (
    <Container>
      <Header>Training Suggestions</Header>

      <Section>
        <SubHeader>Workout Plans</SubHeader>
        <Card>
          <CardImage>
            <ImagePlaceholder>
              <img src={img1} alt="Duration" />
            </ImagePlaceholder>
          </CardImage>
          <CardContent>
            <CardTitle>Strength Training</CardTitle>
            <CardDescription>
              Strength training helps improve muscle mass and endurance. Include exercises like squats, deadlifts, and bench presses in your routine.
            </CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardImage>
            <ImagePlaceholder>
              <img src={img2} alt="Duration" />
            </ImagePlaceholder>
          </CardImage>
          <CardContent>
            <CardTitle>Cardio Workouts</CardTitle>
            <CardDescription>
              Cardio workouts are essential for heart health and endurance. Try running, cycling, or high-intensity interval training (HIIT).
            </CardDescription>
          </CardContent>
        </Card>
        <Card>
          <CardImage>
            <ImagePlaceholder>
              <img src={img3} alt="Duration" />
            </ImagePlaceholder>
          </CardImage>
          <CardContent>
            <CardTitle>Yoga</CardTitle>
            <CardDescription>
              Yoga enhances flexibility and mental well-being. Incorporate different asanas and breathing exercises into your routine.
            </CardDescription>
          </CardContent>
        </Card>
      </Section>

      <Section>
        <SubHeader>Motivational Quotes</SubHeader>
        <Quote>
          <QuoteText>"The only way to achieve the impossible is to believe it is possible."</QuoteText>
          <QuoteAuthor>- Charles Kingsleigh</QuoteAuthor>
        </Quote>
        <Quote>
          <QuoteText>"Strength does not come from physical capacity. It comes from an indomitable will."</QuoteText>
          <QuoteAuthor>- Mahatma Gandhi</QuoteAuthor>
        </Quote>
        <Quote>
          <QuoteText>"Don't watch the clock; do what it does. Keep going."</QuoteText>
          <QuoteAuthor>- Sam Levenson</QuoteAuthor>
        </Quote>
      </Section>
    </Container>
  );
};

export default Train;