import React from "react";

function Item({ item, isDefault }) {
	return (
		<div className="model-imgs try-model">
			<img
				className="model-bg"
				alt="modelBackground"
				src="./glassesImage/model.jpg"
			></img>
			{!!item && (
				<img className="trying-glass" alt="tryingGlass" src={item.url}></img>
			)}
			{isDefault && (
				<div className="glass-info">
					<h4>{item.name}</h4>
					<p>{item.desc}</p>
				</div>
			)}
		</div>
	);
}

export default Item;
