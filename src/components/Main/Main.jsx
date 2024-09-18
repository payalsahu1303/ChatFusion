import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
import { Context } from "../../context/Context";
const Main = () => {
	const {
		onSent,
		recentPrompt,
		showResults,
		loading,
		resultData,
		setInput,
		input,
	} = useContext(Context);

    const handleCardClick = (promptText) => {
			setInput(promptText);
		};
	return (
		<div className="main">
			<div className="nav">
				<div className="logo">
                    <img src={assets.gemini_icon} alt="Logo" />
                    <p>ChatFusion</p>
                </div>
				<img src={assets.user_icon} alt="" />
			</div>
			<div className="main-container">
				{!showResults ? (
					<>
						<div className="greet">
							<p>
								<span>Hello ,</span>
							</p>
							<p>How Can i Help You ?</p>
						</div>
						<div className="cards">
							<div
								className="card"
								onClick={() =>
									handleCardClick("Suggest Some Place To Visit In Kerala")
								}
							>
								<p>Suggest Some Place To Visit In Kerala </p>
								<img src={assets.compass_icon} alt="" />
							</div>
							<div
								className="card"
								onClick={() =>
									handleCardClick(
										"Brainstorm team bonding activities for our work retreat"
									)
								}
							>
								<p>Brainstorm team bonding activities for our work retreat </p>
								<img src={assets.message_icon} alt="" />
							</div>
							<div
								className="card"
								onClick={() =>
									handleCardClick("How to Create a Gyroscope using Disc?")
								}
							>
								<p>How to Create a Gyroscope using Disc?</p>
								<img src={assets.bulb_icon} alt="" />
							</div>
							<div
								className="card"
								onClick={() => {
									handleCardClick(
										"Create a Script for the youtube video about coding "
									);
								}}
							>
								<p>Create a Script for the youtube video about coding </p>
								<img src={assets.code_icon} alt="" />
							</div>
						</div>
					</>
				) : (
					<div className="result">
						<div className="result-title">
							<img src={assets.user_icon} alt="" />
							<p>{recentPrompt}</p>
						</div>
						<div className="result-data">
							<img src={assets.gemini_icon} alt="" />
							{loading ? (
								<div className="loader">
									<hr />
									<hr />
									<hr />
								</div>
							) : (
								<p dangerouslySetInnerHTML={{ __html: resultData }}></p>
							)}
						</div>
					</div>
				)}

				<div className="main-bottom">
					<div className="search-box">
						<input
							onChange={(e) => {
								setInput(e.target.value);
							}}
							value={input}
							type="text"
							placeholder="Enter the task/message here"
						/>
						<div>
							<img
								src={assets.send_icon}
								alt=""
								onClick={() => {
									onSent();
								}}
							/>
						</div>
					</div>
					<div className="bottom-info">
						<p>
                        Connecting you to the information you need, when you need it. © 2024 ChatFusion. All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;