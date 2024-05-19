import React from "react";
import Navbar from "../Navbar/Navbar"; // Updated import path
import { Link } from "react-router-dom";
import "./style.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="div-2">
        <div className="overlap-7">
          <div className="text-wrapper-17">Football</div>
          <p className="text-wrapper-18">
            Player tracking technology in football optimizes tactics, player performance, injury prevention, and
            scouting. It aids coaching decisions, improves player development, and enhances team competitiveness.
          </p>
        </div>
        <p className="player-TRACKING-2">
          <span className="text-wrapper-19">Player </span>
          <span className="text-wrapper-20">TRACKING</span>
        </p>
        <p className="player-TRACKING-3">
          <span className="text-wrapper-19">Player </span>
          <span className="text-wrapper-20">TRACKING</span>
        </p>
    <nav className="navbar">
      <div className="navbar-container">
        <p className="player-TRACKING-2">
          <span className="text-wrapper-19">Player </span>
          <span className="text-wrapper-20">TRACKING</span>
        </p>
        <div className="overlap-8">
        <Link to="/home-page" className="nav-link text-wrapper-24">Home</Link></div>
        <Link to="" className="text-wrapper-22">Team Stats</Link>
        {/* <div className="text-wrapper-22">Team Stats</div> */}
        <Link to="" className="text-wrapper-23">Player Stats</Link>
        {/* <div className="text-wrapper-23">Player Stats</div> */}
        <Link to="/my-data" className="nav-link text-wrapper-21">My Data</Link>
        <Link to="/sign-up-page" className="nav-link text-wrapper-25">Sign Up</Link>
      </div>
    </nav>
        {/* <div className="text-wrapper-21">My Data</div>
        <div className="text-wrapper-22">Team Stats</div>
        <div className="text-wrapper-23">Player Stats</div>
        <div className="overlap-8">
          <div className="text-wrapper-24">Home</div>
        </div>
        <div className="text-wrapper-25">Sign up</div> */}
        <div className="overlap-9">
          <div className="overlap-10">
            <p className="text-wrapper-26">Unlock Precision Performance with Us!</p>
            <div className="flexcontainer">
              <p className="text">
                <span className="text-wrapper-27">
                  Experience the pinnacle of sports GPS tracking: intuitive, <br />
                </span>
              </p>
              <p className="text">
                <span className="text-wrapper-27">insightful, and accessible to all levels of play.</span>
              </p>
            </div>
          </div>
          <div className="overlap-11">
            <p className="AVAILABLE-FOR-TEAMS">AVAILABLE FOR TEAMS &amp; INDIVIDUALS</p>
            <img
              className="undraw-shared-goals"
              alt="Undraw shared goals"
              src="/img/undraw-shared-goals-re-jvqd-1.svg"
            />
          </div>
        </div>
        <img className="undraw-basketball-re" alt="Undraw basketball re" src="/img/undraw-basketball-re-7701-1.svg" />
        <div className="text-wrapper-28">Player Performance Analysis</div>
        <div className="text-wrapper-29">Team Performance Metrics</div>
        <div className="text-wrapper-30">Real-Time Updates</div>
        <p className="text-wrapper-31">
          Users can access detailed metrics such as distance covered, speed, acceleration, and defensive actions for
          each player. This helps in assessing individual player contributions and identifying areas for improvement.
          Coaches and analysts can generate customized reports and visualizations tailored to specific player
          performance objectives or match scenarios.
        </p>
        <p className="team-performance">
          Team performance metrics such as goal difference, shot difference, and conversion rate provide a holistic view
          of the team&#39;s offensive and defensive capabilities. By monitoring team performance metrics over time,
          users can identify trends and patterns in the team&#39;s performance. This facilitates strategic planning and
          enables adjustments to training regimes, tactics, and player roles to optimize long-term performance.
        </p>
        <p className="users-receive-real">
          Users receive real-time updates and analysis during matches, providing instant access to key performance
          metrics and insights. This enables coaches and analysts to make informed decisions and adjustments on the fly,
          maximizing the team&#39;s competitive edge.
          <br />
          Real-time updates empower coaches to adapt their strategies and tactics in response to changing game dynamics,
          opponent strategies, and player conditions.
        </p>
        <img className="undraw-team-spirit" alt="Undraw team spirit" src="/img/undraw-team-spirit-re-yl1v-1.svg" />
        <img className="undraw-team-page-re" alt="Undraw team page re" src="/img/undraw-team-page-re-cffb-1.svg" />
        <p className="uncover-the-game-s">Uncover the game&#39;s hidden gems with every stat, swipe, and sprint</p>
        <div className="overlap-12">
          <img className="line-2" alt="Line" src="/img/line-1-1.svg" />
          <img className="line-3" alt="Line" src="/img/line-2.svg" />
          <img className="line-4" alt="Line" src="/img/line-3.svg" />
        </div>
        <img className="line-5" alt="Line" src="/img/line-4-1.svg" />
        <div className="overlap-13">
          <div className="text-wrapper-32">Cricket</div>
          <p className="text-wrapper-33">
            Player tracking technology in cricket optimizes bowling, batting, fielding, and injury prevention. It aids
            coaching, enhances scouting, and improves player performance for greater team success.
          </p>
        </div>
        <div className="overlap-14">
          <div className="text-wrapper-34">Badminton</div>
          <p className="player-tracking">
            Player tracking technology in badminton offers insights into shot accuracy, court coverage, stroke dynamics,
            fitness, and match analysis. Coaches use this data to refine training, optimize strategies, and enhance
            players&#39; performance on the court.
          </p>
        </div>
        <div className="overlap-group-3">
          <img className="image" alt="Image" src="/img/image-3.png" />
          <img className="ellipse" alt="Ellipse" src="/img/ellipse-220.png" />
        </div>
        <p className="TRANSFORM-YOUR-GAME">
          TRANSFORM YOUR GAME
          <br />
          <br />
          <br />
          WITH PRECISION INSIGHTS
        </p>
        <p className="it-allows-coaches">
          It allows coaches, players, and essential staff to instantly access
          <br />
          performance data from any location.
        </p>
        <img className="microsoftteams-image-3" alt="Microsoftteams image" src="/img/microsoftteams-image-4.png" />
        <img className="microsoftteams-image-4" alt="Microsoftteams image" src="/img/microsoftteams-image-4.png" />
        <div className="email-fake-email-com-2">
          Email:
          <br />
          fake@email.com
        </div>
        <div className="phone-XXXX-XXX-XXX-2">
          Phone:
          <br />
          XXXX-XXX-XXX
        </div>
      </div>
    </div>
  );
}

export default HomePage;
