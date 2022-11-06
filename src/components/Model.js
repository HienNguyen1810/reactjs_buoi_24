import React from "react";
import ListGlasses from "./dataGlasses.json";
import Item from "./Item";

const getItem = (id) => {
	return ListGlasses.find((glass) => glass.id === id);
};

function Model({ glassId }) {
	return (
		<div className="container">
			<div className="row model">
				<div className="col col-12 col-md-6">
					<Item item={getItem(7)} isDefault={true} />
				</div>
				<div className="col col-12 col-md-6">
					<Item item={getItem(glassId)} isDefault={false} />
				</div>
			</div>
		</div>
	);
}

export default Model;
