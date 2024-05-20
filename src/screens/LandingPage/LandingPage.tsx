import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <div className="div">
        <div className="frame">
          <div className="copy">
            <p className="track-analyse">
              <span className="text-wrapper">&#34;Track, </span>
              <span className="span">Analyse</span>
              <span className="text-wrapper">, Dominate&#34;</span>
            </p>
            <p className="p">
              Elevate Your Game with Personal and Team Analytics
            </p>
            <button className="button">
              <Link to="/ExploreMore">
                <div className="text-wrapper-2">Explore More</div>
              </Link>
            </button>
          </div>
        </div>
        <div className="group">
          <p className="welcome-to-athlete">
            Welcome to Athlete Insight Hub, where staying ahead of the game
            isn&#39;t just a goal—it&#39;s a promise. Our platform offers
            real-time insights for both players and teams, revolutionizing the
            way you track and analyze performance.
            <br />
            Gone are the days of relying solely on intuition and post-game
            analysis. With our cutting-edge technology powered by IoT and
            sensors, you can monitor every move, every play, and every heartbeat
            in real-time. Whether you&#39;re a coach strategizing for the next
            big match or a player looking to fine-tune your skills, our platform
            provides the data-driven edge you need to succeed.
            <br />
            Join us as we redefine the game with unparalleled precision and
            depth. Welcome to the future of sports performance tracking.
          </p>
          <p className="text-wrapper-3">
            Stay Ahead of the Game: Real-Time Insights for Players and Teams
          </p>
        </div>
        <div className="navigation">
          <div className="navbar">
            <Link to="/">
              <button className="button">
                <div className="text-wrapper-2">Home</div>
              </button>
            </Link>
            <Link to="/MyProfile">
              <div className="text-wrapper-4">My Profile</div>
            </Link>
            <Link to="/TeamStats">
              <div className="text-wrapper-4">My Team</div>
            </Link>
            <Link to="/ExploreMore">
              <div className="text-wrapper-4">Contact Us</div>
            </Link>
            <Link to="/Login">
              <div className="text-wrapper-4">Register</div>
            </Link>
            <Link to="/Login">
              <div className="text-wrapper-4">Log In</div>
            </Link>
          </div>
          <div className="group-2">
            <div className="text-wrapper-5">Athlete Insight Hub</div>
            <img
              className="image"
              alt="Image"
              src="/static/LandingPage/img/image-1.png"
            />
          </div>
        </div>
        <div className="navigation-footer">
          <div className="items">
            <div className="text-wrapper-6">Useful links</div>
            <div className="text-wrapper-7">Introduction</div>
            <div className="text-wrapper-7">About Us</div>
            <div className="text-wrapper-7">Terms &amp; Conditions</div>
            <div className="text-wrapper-7">Privacy Policy</div>
            <div className="text-wrapper-7">Support Center</div>
          </div>
          <p className="contact-us">
            <span className="text-wrapper-8">
              Contact Us:
              <br />
            </span>
            <span className="text-wrapper-9">
              atheleteinsighthub@gmail.com
              <br />
              +62-xxx-xxxx
            </span>
          </p>
          <div className="group-3">
            <div className="icon">
              <img className="img" alt="Icon" src="/static/LandingPage/img/icon.svg" />
            </div>
            <div className="icon-wrapper">
              <img
                className="icon-2"
                alt="Icon"
                src="/static/LandingPage/img/icon-1.svg"
              />
            </div>
            <div className="img-wrapper">
              <img
                className="icon-3"
                alt="Icon"
                src="/static/LandingPage/img/icon-2.svg"
              />
            </div>
            <div className="icon-4">
              <img
                className="img"
                alt="Icon"
                src="/static/LandingPage/img/icon-3.svg"
              />
            </div>
          </div>
          <img
            className="divider"
            alt="Divider"
            src="/static/LandingPage/img/divider.svg"
          />
          <div className="text-wrapper-10">Follow Us:</div>
          <p className="text-wrapper-11">
            ©2024 Athlete Insight Hub || All rights reserved || Designed by
            Harshita
          </p>
        </div>
        <img
          className="alonso-reyes"
          alt="Alonso reyes"
          src="/static/LandingPage/img/alonso-reyes-0hli76m4jxu-unsplash-1.png"
        />
        <img
          className="karsten-winegeart"
          alt="Karsten winegeart"
          src="/static/LandingPage/img/karsten-winegeart-0wra5yyvqje-unsplash-1.png"
        />
        <img
          className="pexels-pixabay"
          alt="Pexels pixabay"
          src="/static/LandingPage/img/pexels-pixabay-262524-1.png"
        />
        <img
          className="pexels-football-wife"
          alt="Pexels football wife"
          src="/static/LandingPage/img/pexels-football-wife-577822-1428984-1.png"
        />
        <div className="text-wrapper-12">
          https://unsplash.com/photos/man-in-black-shorts-and-black-tank-top-doing-push-up-0HlI76m4jxU
        </div>
        <div className="text-wrapper-13">
          https://www.pexels.com/photo/group-of-sports-player-kneeling-on-field-262524/
        </div>
        <div className="text-wrapper-14">
          https://unsplash.com/photos/woman-in-black-tank-top-sitting-on-brown-wooden-bench-0Wra5YYVQJE
        </div>
        <div className="text-wrapper-15">
          https://www.pexels.com/photo/football-gameplay-1428984/
        </div>
      </div>
    </div>
  );
};