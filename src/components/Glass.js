import React from "react";

function Glass({ glass, setGlassId }) {
	return (
		<div className="glass col col-6 col-sm-4 col-md-3 col-xl-2">
			<img
				src={glass.url}
				alt="glass"
				onClick={() => {
					setGlassId(glass.id);
				}}
			></img>
		</div>
	);
}

export default Glass;
