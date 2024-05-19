import React from 'react';
import styled from 'styled-components';
import {
  Container,
  Header,
  SubHeader,
  SummaryContainer,
  StatBox,
  MapContainer,
  InsightsContainer,
  RadarChart,
  LineChart,
  Statsname,
} from '../styles/StatsStyles';

import img1 from './images/p1.png';
import img9 from './images/p2.png';
import img10 from './images/p3.png';
import img11 from './images/p4.png';
import img2 from './images/map.png';
import img3 from './images/stat1.png';
import img4 from './images/stat2.png';
import img5 from './images/stat3.png';
import img6 from './images/stat4.png';
import img7 from './images/graph1.png';
import img8 from './images/graph2.png';

const Stats = () => {
  return (
    <Container>
      <Header>My Stats</Header>
      <SubHeader>
        With real-time data insights, we empower athletes, coaches, and organizations to unlock their full potential and achieve peak performance.
        Watch out your insights from the past workout below:
      </SubHeader>
      <InsightsContainer>
        <SummaryContainer>
          <StatBox>
            <h2>8:12</h2>
            <Statsname>
              <img src={img1} alt="Duration" />
            </Statsname>
          </StatBox>
          <StatBox>
            <h2>7101</h2>
            <Statsname>
              <img src={img9} alt="Calories" />
            </Statsname>
          </StatBox>
          <StatBox>
            <h2>6</h2>
            <Statsname>
              <img src={img10} alt="Total Workouts" />
            </Statsname>
          </StatBox>
          <StatBox>
            <h2>68.2</h2>
            <Statsname>
              <img src={img11} alt="Total Distance" />
            </Statsname>
          </StatBox>
        </SummaryContainer>
        <MapContainer>
          <img src={img2} alt="Workout Map" />
        </MapContainer>
      </InsightsContainer>
      <SubHeader>
        Insights based on your recent match/training session:
      </SubHeader>
      <InsightsContainer>
        <RadarChart>
          <img src={img3} alt="Radar Chart" />
          <p>Basic Statistics</p>
        </RadarChart>
        <RadarChart>
          <img src={img4} alt="Basic Stats" />
          <p>Defense Statistics</p>
        </RadarChart>
        <RadarChart>
          <img src={img5} alt="Defense Stats" />
          <p>Aggressive Statistics</p>
        </RadarChart>
        <RadarChart>
          <img src={img6} alt="Aggressive Stats" />
          <p>Shooting</p>
        </RadarChart>
      </InsightsContainer>
      <InsightsContainer>
        <LineChart>
          <img src={img7} alt="Performance Index" />
          <p>Performance Index</p>
        </LineChart>
        <LineChart>
          <img src={img8} alt="Player Stamina" />
          <p>Player Stamina</p>
        </LineChart>
      </InsightsContainer>
    </Container>
  );
};

export default Stats;