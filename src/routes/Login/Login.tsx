import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export const Login: React.FC = () => {
	return (
		<div className="login">
			<div className="div">
				<div className="overlap">
					<p className="welcome-to-athlete">
						<span className="text-wrapper">
              Welcome to
							<br />
						</span>
						<span className="span">Athlete Insight Hub</span>
						<span className="text-wrapper-2">&nbsp;</span>
					</p>
					<div className="login-with-google">
						<div className="group">
							<img
								className="search"
								alt="Search"
								src="/static/Login/img/search-1.svg"
							/>
							<div className="text-wrapper-3">Login with Google</div>
						</div>
					</div>
					<div className="login-with-facebook">
						<div className="group-2">
							<div className="text-wrapper-4">Login with Facebook</div>
							<img
								className="vector"
								alt="Vector"
								src="/static/Login/img/vector.svg"
							/>
						</div>
					</div>
					<div className="or">
						<img className="line" alt="Line" src="/static/Login/img/line-1.svg" />
						<img className="img" alt="Line" src="/static/Login/img/line-2.svg" />
						<div className="text-wrapper-5">OR</div>
					</div>
					<div className="text-wrapper-6">Forgot Password?</div>
					<div className="email">
						<div className="overlap-group">
							<img
								className="vector-2"
								alt="Vector"
								src="/static/Login/img/vector-1.svg"
							/>
							<div className="text-wrapper-7">Email</div>
							<div className="text-wrapper-8">example@gmail.com</div>
						</div>
					</div>
					<div className="password">
						<div className="overlap-group">
							<img className="group-3" alt="Group" src="/static/Login/img/group.png" />
							<div className="text-wrapper-7">Password</div>
							<div className="text-wrapper-9">***********</div>
							<img
								className="bi-eye-fill"
								alt="Bi eye fill"
								src="/static/Login/img/bi-eye-fill.svg"
							/>
						</div>
					</div>
					<button className="button">
						<div className="div-wrapper">
							<Link to="/MyProfile">
								<div className="text-wrapper-10">Login</div>
							</Link>
						</div>
					</button>
					<div className="remember-me">
						<div className="text-wrapper-11">Remember me</div>
						<div className="check" />
					</div>
					<p className="don-t-have-an">
						<span className="text-wrapper-12">Don’t have an account? </span>
						<span className="text-wrapper-13">Register</span>
					</p>
					<img className="image" alt="Image" src="/static/Login/img/image-1.png" />
				</div>
				<img
					className="pexels-tima"
					alt="Pexels tima"
					src="/static/Login/img/pexels-tima-miroshnichenko-6077801-1.png"
				/>
				<p className="p">
          ©2024 Athlete Insight Hub || All rights reserved || Designed by
          Harshita
				</p>
				<div className="text-wrapper-14">
          https://www.pexels.com/photo/a-coach-talking-to-his-team-6077801/
				</div>
			</div>
		</div>
	);
};