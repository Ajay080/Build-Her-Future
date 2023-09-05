import { useContext, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Login.css";
import {AuthContext} from "../AuthProvider"; 


const Login = () => {
	const {login}= useContext(AuthContext);

	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try{
			login(data.name, data.email, data.password);
		}
		catch(error){
			setError("Wrong Inputs Try Again")
		}
		}

	return (
		<div className="login_container">
			<div className="login_form_container">
				<div className="left">
					<form className="form_container" onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
                        <input
							type="text"
							placeholder="name"
							name="name"
							onChange={handleChange}
							value={data.name}
							// required
							className="input"
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className="input"
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className="input"
						/>
						<button type="submit" className="green_btn">
							Sign In
						</button>
					</form>
					{error && <div className="error_msg">{error}</div>}
				</div>
				<div className="right">
					<h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button" className="white_btn">
							Sign Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;