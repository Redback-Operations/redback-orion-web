import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export const ExploreMore: React.FC = () => {
	return (
		<div className="explore-more">
			<div className="div">
				<header className="header">
					<p className="text-wrapper">Unlock Your Potential with Us!</p>
					<p className="p">
            Revolutionizing Sports Analytics with Real-Time Precision
					</p>
					<Link to="/Login">
						<button className="button">
							<div className="text-wrapper-2">Join Now!</div>
						</button>
					</Link>
				</header>
				<div className="navigation">
					<div className="navbar">
						<Link to="/">
							<button className="button">
								<div className="text-wrapper-2">Home</div>
							</button>
						</Link>
						<Link to="/MyProfile">
							<div className="text-wrapper-3">My Profile</div>
						</Link>
						<Link to="/TeamStats">
							<div className="text-wrapper-3">My Team</div>
						</Link>
						<Link to="/ExploreMore">
							<div className="text-wrapper-3">Contact Us</div>
						</Link>
						<Link to="/Login">
							<div className="text-wrapper-3">Register</div>
						</Link>
						<Link to="/Login">
							<div className="text-wrapper-3">Log In</div>
						</Link>
					</div>
					<div className="group">
						<div className="text-wrapper-4">Athlete Insight Hub</div>
						<img
							className="image"
							alt="Image"
							src="/static/ExploreMore/img/image-1.png"
						/>
					</div>
				</div>
				<div className="overlap-group">
					<div className="group-2">
						<div className="text-wrapper-5">Team Performance Evaluation</div>
						<p className="in-the-dynamic-world">
              In the dynamic world of sports, success hinges not only on
              individual talent but also on the collective performance of teams.
              Our platform offers a sophisticated analysis of team dynamics,
              strengths, and areas for improvement, empowering coaches,
              managers, and players alike to make data-driven decisions that
              drive success. Dive into our comprehensive evaluations and unlock
              the potential to elevate your team&#39;s performance to new
              heights.
						</p>
						<img
							className="pexels-football-wife"
							alt="Pexels football wife"
							src="/static/ExploreMore/img/pexels-football-wife-577822-1428984-1-1.png"
						/>
					</div>
					<div className="group-3">
						<div className="group-4">
							<div className="copy">
								<div className="text-wrapper-6">
                  Athlete Performance Evaluation
								</div>
								<p className="text-wrapper-7">
                  Our platform is dedicated to revolutionizing how athletes and
                  teams assess and optimize their performance. With real-time
                  data insights, we empower athletes, coaches, and organizations
                  to unlock their full potential and achieve peak performance.
                  From monitoring key metrics to analyzing trends, our
                  cutting-edge tools provide a comprehensive view of athletic
                  performance like never before.
								</p>
							</div>
							<img
								className="img"
								alt="Jonathan chng"
								src="/static/ExploreMore/img/jonathan-chng-hgokvtkpyha-unsplash-1.png"
							/>
						</div>
						<div className="group-2">
							<div className="text-wrapper-5">Team Performance Evaluation</div>
							<p className="in-the-dynamic-world">
                In the dynamic world of sports, success hinges not only on
                individual talent but also on the collective performance of
                teams. Our platform offers a sophisticated analysis of team
                dynamics, strengths, and areas for improvement, empowering
                coaches, managers, and players alike to make data-driven
                decisions that drive success. Dive into our comprehensive
                evaluations and unlock the potential to elevate your team&#39;s
                performance to new heights.
							</p>
							<img
								className="pexels-football-wife"
								alt="Pexels football wife"
								src="/static/ExploreMore/img/pexels-football-wife-577822-1428984-1-1.png"
							/>
						</div>
						<div className="group-wrapper">
							<div className="group-5">
								<div className="copy-2">
									<div className="text-wrapper-6">Real-Time Tracking</div>
									<p className="text-wrapper-7">
                    Gone are the days of guesswork and speculation. With our
                    platform, every movement, every statistic, and every crucial
                    detail is captured and analyzed instantaneously. Whether
                    you&#39;re a professional athlete striving for greatness or
                    a coach seeking that competitive edge, our real-time
                    tracking capabilities empower you to make informed decisions
                    and drive peak performance. Our platform is dedicated to
                    providing unparalleled insights into player and team
                    performance, all in real-time with our cutting-edge
                    technology.
									</p>
								</div>
								<img
									className="img"
									alt="Andrei j castanha"
									src="/static/ExploreMore/img/andrei-j-castanha-eosy4so0bd8-unsplash-1.png"
								/>
							</div>
						</div>
					</div>
					<div className="text-wrapper-8">
            https://unsplash.com/photos/group-of-men-running-in-track-field-HgoKvtKpyHA
					</div>
					<div className="text-wrapper-9">
            https://www.pexels.com/photo/football-gameplay-1428984/
					</div>
				</div>
				<div className="navigation-footer">
					<div className="items">
						<div className="text-wrapper-10">Useful links</div>
						<div className="text-wrapper-11">Introduction</div>
						<div className="text-wrapper-11">About Us</div>
						<div className="text-wrapper-11">Terms &amp; Conditions</div>
						<div className="text-wrapper-11">Privacy Policy</div>
						<div className="text-wrapper-11">Support Center</div>
					</div>
					<p className="contact-us">
						<span className="span">
              Contact Us:
							<br />
						</span>
						<span className="text-wrapper-12">
              atheleteinsighthub@gmail.com
							<br />
              +62-xxx-xxxx
						</span>
					</p>
					<div className="group-6">
						<div className="icon">
							<img
								className="icon-2"
								alt="Icon"
								src="/static/ExploreMore/img/icon.svg"
							/>
						</div>
						<div className="icon-wrapper">
							<img
								className="icon-3"
								alt="Icon"
								src="/static/ExploreMore/img/icon-1.svg"
							/>
						</div>
						<div className="img-wrapper">
							<img
								className="icon-4"
								alt="Icon"
								src="/static/ExploreMore/img/icon-2.svg"
							/>
						</div>
						<div className="icon-5">
							<img
								className="icon-2"
								alt="Icon"
								src="/static/ExploreMore/img/icon-3.svg"
							/>
						</div>
					</div>
					<img
						className="divider"
						alt="Divider"
						src="/static/ExploreMore/img/divider.svg"
					/>
					<div className="text-wrapper-13">Follow Us:</div>
					<p className="text-wrapper-14">
            ©2024 Athlete Insight Hub || All rights reserved || Designed by
            Harshita
					</p>
				</div>
				<div className="text-wrapper-15">
          https://unsplash.com/photos/man-riding-bicycle-downhill-during-daytime-eOsY4sO0bD8
				</div>
			</div>
		</div>
	);
};

