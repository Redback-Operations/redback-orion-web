import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export const TeamStats = () => {
  return (
    <div className="team-stats">
      <div className="div">
        <div className="copy">
          <div className="text-wrapper">Team Stats</div>
          <p className="our-platform-offers">
            Our platform offers a sophisticated analysis of team dynamics,
            strengths, and areas for improvement, empowering coaches, managers,
            and players alike to make data-driven decisions that drive success.
            <br />
            Watch out team statistics from the matches and training sessions
            below:
          </p>
        </div>
        <p className="p">
          Based upon the above stats, below are the recommended changes to the
          team player positions on field:
        </p>
        <div className="text-wrapper-2">Current Positions</div>
        <div className="text-wrapper-3">New Positions</div>
        <div className="navigation">
          <div className="navbar">
            <Link to="/">
              <div className="text-wrapper-4">Home</div>
            </Link>
            <Link to="/MyProfile">
              <div className="text-wrapper-4">My Profile</div>
            </Link>
            <Link to="/TeamStats">
              <button className="button">
                <div className="text-wrapper-5">My Team</div>
              </button>
            </Link>
            <Link to="/ExploreMore">
              <div className="text-wrapper-4">Contact Us</div>
            </Link>
            <Link to="/Login">
              <div className="text-wrapper-4">Log Out</div>
            </Link>
            <div className="frame">
              <div className="frame-2">
                <div className="notif" />
                <div className="img">
                  <div className="group">
                    <div className="overlap-group">
                      <img
                        className="pexels-pixabay"
                        alt="Pexels pixabay"
                        src="/static/TeamStats/img/pexels-pixabay-264411-2.png"
                      />
                      <div className="ellipse" />
                    </div>
                  </div>
                </div>
                <img
                  className="iconly-light-outline"
                  alt="Iconly light outline"
                  src="/static/TeamStats/img/iconly-light-outline-arrow-down-3.svg"
                />
              </div>
            </div>
          </div>
          <div className="group-2">
            <div className="text-wrapper-6">Athlete Insight Hub</div>
            <img
              className="image"
              alt="Image"
              src="/static/TeamStats/img/image-1.png"
            />
          </div>
        </div>
        <img className="image-2" alt="Image" src="/static/TeamStats/img/image-2.png" />
        <img
          className="football-position"
          alt="Football position"
          src="/static/TeamStats/img/football-position-chart-infographic-23-2149528870-1.png"
        />
        <img
          className="football-position-2"
          alt="Football position"
          src="/static/TeamStats/img/football-position-chart-infographic-23-2149528870-2.png"
        />
        <img className="arrow" alt="Arrow" src="/static/TeamStats/img/arrow-1.svg" />
        <div className="element-tab-list">
          <div className="div-wrapper">
            <div className="text-wrapper-7">Player 1</div>
          </div>
          <div className="frame-3">
            <div className="text-wrapper-8">Player 2</div>
          </div>
          <div className="frame-3">
            <div className="text-wrapper-8">Player 3</div>
          </div>
          <div className="frame-3">
            <div className="text-wrapper-8">Player 4</div>
          </div>
          <div className="frame-3">
            <div className="text-wrapper-8">Player 5</div>
          </div>
          <div className="frame-3">
            <div className="text-wrapper-8">Player 6</div>
          </div>
          <div className="frame-3">
            <div className="text-wrapper-8">Player 7</div>
          </div>
          <div className="frame-3">
            <div className="text-wrapper-8">Player 8</div>
          </div>
          <div className="frame-3">
            <div className="text-wrapper-8">Player 9</div>
          </div>
          <div className="frame-3">
            <div className="text-wrapper-8">Player 10</div>
          </div>
          <div className="frame-3">
            <div className="text-wrapper-8">Player 11</div>
          </div>
        </div>
        <div className="navigation-footer">
          <div className="items">
            <div className="text-wrapper-9">Useful links</div>
            <div className="text-wrapper-10">Introduction</div>
            <div className="text-wrapper-10">About Us</div>
            <div className="text-wrapper-10">Terms &amp; Conditions</div>
            <div className="text-wrapper-10">Privacy Policy</div>
            <div className="text-wrapper-10">Support Center</div>
          </div>
          <p className="contact-us">
            <span className="span">
              Contact Us:
              <br />
            </span>
            <span className="text-wrapper-11">
              atheleteinsighthub@gmail.com
              <br />
              +62-xxx-xxxx
            </span>
          </p>
          <div className="group-3">
            <div className="icon">
              <img
                className="icon-2"
                alt="Icon"
                src="/static/TeamStats/img/icon.svg"
              />
            </div>
            <div className="icon-wrapper">
              <img
                className="icon-3"
                alt="Icon"
                src="/static/TeamStats/img/icon-1.svg"
              />
            </div>
            <div className="img-wrapper">
              <img
                className="icon-4"
                alt="Icon"
                src="/static/TeamStats/img/icon-2.svg"
              />
            </div>
            <div className="icon-5">
              <img
                className="icon-2"
                alt="Icon"
                src="/static/TeamStats/img/icon-3.svg"
              />
            </div>
          </div>
          <img
            className="divider"
            alt="Divider"
            src="/static/TeamStats/img/divider.svg"
          />
          <div className="text-wrapper-12">Follow Us:</div>
          <p className="text-wrapper-13">
            ©2024 Athlete Insight Hub || All rights reserved || Designed by
            Harshita
          </p>
        </div>
        <div className="https-www-freepik">
          https://www.freepik.com/free-vector/football-position-chart-infographic_29759685.htm#query=line%20up%20soccer&amp;position=0&amp;from_view=keyword&amp;track=ais_user&amp;uuid=22cb9de8-136f-4d07-9cec-b706e57b86d2
        </div>
      </div>
    </div>
  );
};
