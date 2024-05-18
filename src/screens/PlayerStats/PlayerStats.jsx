import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export const PlayerStats = () => {
  return (
    <div className="player-stats">
      <div className="div">
        <div className="copy">
          <div className="text-wrapper">My Stats</div>
          <p className="with-real-time-data">
            With real-time data insights, we empower athletes, coaches, and
            organizations to unlock their full potential and achieve peak
            performance.
            <br />
            Watch out your insights from the past workout below:
          </p>
        </div>
        <p className="p">
          Insights based on your recent match/training session:
        </p>
        <div className="navigation">
          <div className="navbar">
            <Link to="/">
              <div className="text-wrapper-2">Home</div>
            </Link>
            <button className="button">
              <div className="text-wrapper-3">My Profile</div>
            </button>
            <Link to="/TeamStats">
              <div className="text-wrapper-2">My Team</div>
            </Link>
            <Link to="/ExploreMore">
              <div className="text-wrapper-2">Contact Us</div>
            </Link>
            <Link to="/Login">
              <div className="text-wrapper-2">Log Out</div>
            </Link>
            <div className="navbar"></div>
            <div className="frame">
              <div className="frame-2">
                <div className="notif" />
                <div className="img">
                  <div className="group">
                    <div className="overlap-group">
                      <img
                        className="pexels-pixabay"
                        alt="Pexels pixabay"
                        src="/static/PlayerStats/img/pexels-pixabay-264411-2.png"
                      />
                      <div className="ellipse" />
                    </div>
                  </div>
                </div>
                <img
                  className="iconly-light-outline"
                  alt="Iconly light outline"
                  src="/static/PlayerStats/img/iconly-light-outline-arrow-down-3.svg"
                />
              </div>
            </div>
          </div>
          <div className="group-2">
            <div className="text-wrapper-4">Athlete Insight Hub</div>
            <img
              className="image"
              alt="Image"
              src="/static/PlayerStats/img/image-1.png"
            />
          </div>
        </div>
        <div className="group-3">
          <img
            className="image-2"
            alt="Image"
            src="/static/PlayerStats/img/image-2.png"
          />
          <img
            className="image-3"
            alt="Image"
            src="/static/PlayerStats/img/image-3.png"
          />
        </div>
        <div className="navigation-footer">
          <div className="items">
            <div className="text-wrapper-5">Useful links</div>
            <div className="text-wrapper-6">Introduction</div>
            <div className="text-wrapper-6">About Us</div>
            <div className="text-wrapper-6">Terms &amp; Conditions</div>
            <div className="text-wrapper-6">Privacy Policy</div>
            <div className="text-wrapper-6">Support Center</div>
          </div>
          <p className="contact-us">
            <span className="span">
              Contact Us:
              <br />
            </span>
            <span className="text-wrapper-7">
              atheleteinsighthub@gmail.com
              <br />
              +62-xxx-xxxx
            </span>
          </p>
          <div className="group-4">
            <div className="icon">
              <img
                className="icon-2"
                alt="Icon"
                src="/static/PlayerStats/img/icon.svg"
              />
            </div>
            <div className="icon-wrapper">
              <img
                className="icon-3"
                alt="Icon"
                src="/static/PlayerStats/img/icon-1.svg"
              />
            </div>
            <div className="img-wrapper">
              <img
                className="icon-4"
                alt="Icon"
                src="/static/PlayerStats/img/icon-2.svg"
              />
            </div>
            <div className="icon-5">
              <img
                className="icon-2"
                alt="Icon"
                src="/static/PlayerStats/img/icon-3.svg"
              />
            </div>
          </div>
          <img
            className="divider"
            alt="Divider"
            src="/static/PlayerStats/img/divider.svg"
          />
          <div className="text-wrapper-8">Follow Us:</div>
          <p className="text-wrapper-9">
            ©2024 Athlete Insight Hub || All rights reserved || Designed by
            Harshita
          </p>
        </div>
        <div className="group-5">
          <img
            className="image-4"
            alt="Image"
            src="/static/PlayerStats/img/image-4.png"
          />
          <img
            className="image-5"
            alt="Image"
            src="/static/PlayerStats/img/image-5.png"
          />
          <img
            className="image-6"
            alt="Image"
            src="/static/PlayerStats/img/image-6.png"
          />
          <img
            className="image-7"
            alt="Image"
            src="/static/PlayerStats/img/image-7.png"
          />
        </div>
        <img
          className="img-2"
          alt="Img"
          src="/static/PlayerStats/img/319c53fca23346c9c1f7f35a82522c40-1-1.png"
        />
        <img
          className="img-3"
          alt="Img"
          src="/static/PlayerStats/img/319c53fca23346c9c1f7f35a82522c40-1-2.png"
        />
        <div className="text-wrapper-10">
          https://dribbble.com/shots/2565984-Football-analytics
        </div>
      </div>
    </div>
  );
};
