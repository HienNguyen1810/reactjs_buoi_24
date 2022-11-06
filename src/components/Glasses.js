import React from "react";
import listGlasses from "./dataGlasses.json";
import Glass from "./Glass";

function Glasses({ setGlassId }) {
	return (
		<div className="container">
			<div className="row glasses">
				{listGlasses.map((item) => (
					<Glass key={item.id} glass={item} setGlassId={setGlassId} />
				))}
			</div>
		</div>
	);
}

export default Glasses;
