import React from 'react';
import { Btn } from '../../components/Btn';
import { TextBox } from '../../components/TextBox';
import './style.css';
import { Link } from 'react-router-dom';

export const MyProfile = () => {
  return (
    <div className="my-profile">
      <div className="main-content">
        <div className="frame">
          <div className="text">
            <div className="frame-2">
              <div className="successful-leaders">Athlete Insight Hub</div>
              <img
                className="image"
                alt="Image"
                src="/static/MyProfile/img/image-1.png"
              />
            </div>
          </div>
          <div className="frame-3">
            <div className="notif" />
            <div className="group-wrapper">
              <div className="group">
                <div className="overlap-group">
                  <img
                    className="pexels-pixabay"
                    alt="Pexels pixabay"
                    src="/static/MyProfile/img/pexels-pixabay-264411-2.png"
                  />
                  <div className="ellipse" />
                </div>
              </div>
            </div>
            <img
              className="iconly-light-outline-2"
              alt="Iconly light outline"
              src="/static/MyProfile/img/iconly-light-outline-arrow-down-3.svg"
            />
          </div>
        </div>
        <div className="frame-4">
          <div className="header-setting">
            <img
              className="divider"
              alt="Divider"
              src="/static/MyProfile/img/divider-1.svg"
            />
            <img
              className="divider-2"
              alt="Divider"
              src="/static/MyProfile/img/divider-1.svg"
            />
          </div>
          <div className="frame-5">
            <div className="frame-wrapper">
              <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                  <img
                    className="pexels-pixabay-2"
                    alt="Pexels pixabay"
                    src="/static/MyProfile/img/pexels-pixabay-264411-1.png"
                  />
                  <div className="change-photo">
                    <img
                      className="iconly-bold-camera"
                      alt="Iconly bold camera"
                      src="/static/MyProfile/img/iconly-bold-camera.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-6">
              <div className="share-wrapper">
                <img
                  className="share"
                  alt="Share"
                  src="/static/MyProfile/img/share-2-3.svg"
                />
              </div>
              <div className="frame-7">
                <div className="dashboard">ABC XYZ</div>
                <div className="text-wrapper-2">Welcome to the Dashboard!</div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-8">
          {/* <div className="text-wrapper-3">
            https://www.pexels.com/photo/selective-focus-photography-of-man-playing-american-football-264411/
          </div> */}
          <div className="side-bar">
            <div className="frame-9">
              <div className="div-wrapper">
                <div className="text-wrapper-4">Edit Profile</div>
              </div>
              <div className="frame-10">
                <Link to="/PlayerStats">
                  <div className="text-wrapper-5">Player Stats</div>
                </Link>
              </div>
              <div className="frame-10">
                <Link to="/TeamStats">
                  <div className="text-wrapper-5">Team Stats</div>
                </Link>
              </div>
              <div className="frame-10">
                <div className="text-wrapper-5">Notifications</div>
              </div>
              <div className="frame-11">
                <div className="text-wrapper-5">Password &amp; Security</div>
              </div>
            </div>
            <img
              className="divider-3"
              alt="Divider"
              src="/static/MyProfile/img/divider-2.svg"
            />
          </div>
          <div className="edit-profile">
            <div className="frame-12">
              <div className="frame-13">
                <div className="dashboard-wrapper">
                  <div className="dashboard">Edit Profile</div>
                </div>
                <div className="frame-14">
                  <div className="frame-15">
                    <div className="frame-16">
                      <div className="text-wrapper-6">Personal Details</div>
                      <div className="frame-17">
                        <TextBox
                          className="text-box-instance"
                          property="value"
                          text="First Name"
                          text1="ABC"
                        />
                        <TextBox
                          className="design-component-instance-node"
                          property="value"
                          text="Last Name"
                          text1="XYZ"
                        />
                      </div>
                    </div>
                    <TextBox
                      className="text-box-2"
                      property="default"
                      text="Team Name"
                      text2="Enter team name"
                    />
                    <TextBox
                      className="text-box-2"
                      property="default"
                      text="Weight"
                      text2="Enter Value"
                    />
                    <TextBox
                      className="text-box-2"
                      property="default"
                      text="Height"
                      text2="Enter Value"
                    />
                  </div>
                  <div className="frame-15">
                    <div className="text-wrapper-7">Contact</div>
                    <div className="frame-16">
                      <TextBox
                        className="text-box-2"
                        property="default"
                        text="Date of Birth"
                        text2=""
                      />
                      <TextBox
                        className="text-box-2"
                        iconlyLightOutlineClassName="text-box-3"
                        property="phon-number"
                        text3="+62"
                        text4="xxxx-xxx"
                      />
                      <TextBox
                        className="text-box-2"
                        iconlyLightOutlineClassNameOverride="text-box-4"
                        property="drop-down"
                        text5="Country"
                        text6="Select"
                      />
                      <TextBox
                        className="text-box-2"
                        iconlyLightOutlineClassNameOverride="text-box-4"
                        property="drop-down"
                        text5="City"
                        text6="Select"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Link to="/PlayerStats">
                <Btn
                  btn="praimery"
                  className="btn-instance"
                  divClassName="btn-3"
                  formAtomValueClassName="btn-2"
                  text="Save"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="navigation-footer">
          <p className="p">
            ©2024 Athlete Insight Hub || All rights reserved || Designed by
            Harshita
          </p>
        </div>
        <div className="navbar">
          <Link to="/">
            <div className="text-wrapper-8">Home</div>
          </Link>
          <Link to="/MyProfile">
            <button className="button">
              <div className="text-wrapper-9">My Profile</div>
            </button>
          </Link>
          <Link to="/TeamStats">
            <div className="text-wrapper-10">My Team</div>
          </Link>
          <Link to="/ExploreMore">
            <div className="text-wrapper-10">Contact Us</div>
          </Link>
          <Link to="/Login">
            <div className="text-wrapper-10">Log Out</div>
          </Link>
        </div>
      </div>
    </div>
  );
};
