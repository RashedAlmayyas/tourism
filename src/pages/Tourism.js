import React, { useEffect, useState } from "react";
import Data from "../helpers/data.json";
import rum from "../assets/tourism/rum.png";


function Tourism(props) {
	useEffect(() => {
		props.changeBG("tourism");
	});

	const [tabFocus, settabFocus] = useState(0);

	const [currentImage, setCurrentImage] = useState({
		portrait: rum,
		landscape: rum,
	});
	const [clicked, setClicked] = useState(0);
	const [animation, setAnimation] = useState(false);
	const toggle = (index) => {
		if (clicked === index) return;
		settabFocus(index);
		setAnimation(true);
		setTimeout(() => {
			setClicked(index);
			switch (index) {
				case 0:
					setCurrentImage({
						...currentImage,
						portrait: rum,
						landscape: rum,
					});
					break;
				case 1:
					setCurrentImage({
						...currentImage,
						portrait: rum,
						landscape: rum,
					});
					break;
				case 2:
					setCurrentImage({
						...currentImage,
						portrait: rum,
						landscape: rum,
					});
					break;
				default:
					return null;
			}
			setClicked(index);
			setAnimation(false);
		}, 1000);
	};

	return (
		<main id="main" className="grid-container grid-container--tech flow">
					<div className="flex number-selectors">
				{Data.tourism.map((item, index) => {
					return (
						<button
							key={index}
							onClick={() => toggle(index)}
							aria-selected={tabFocus === index}
							role="tab"
							className=""
						>
							{index + 1}
							<span className="sr-only">{item.name}</span>
						</button>
					);
				})}
			</div>
			<article
				className="tech-details flow"
				role="tabpanel"
				tabIndex="0"
				style={
					animation ? { transform: "translateX(-20%)", opacity: "0" } : null
				}
			>
				<header>
					<h2 className="text-accent fs-400 ff-sans-cond uppercase">
						The tourism...
					</h2>
					<p className="fs-700 ff-serif uppercase">
						{Data.tourism[clicked].name}
					</p>
				</header>
				<p className="page-info fs-400 text-accent">
					{Data.tourism[clicked].description}
				</p>
			</article>
			<div className="picture" style={animation ? { opacity: "0" } : null}>
				<img
					className="landscape"
					src={currentImage.landscape}
					alt={Data.tourism[clicked].name}
				/>
				<img
					className="Wadi Rum"
					src={currentImage.portrait}
					alt={Data.tourism[clicked].name}
				/>
			</div>
		</main>
	);
}

export default Tourism;
