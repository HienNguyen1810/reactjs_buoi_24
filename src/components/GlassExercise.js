import React, { useState } from "react";
import Glasses from "./Glasses";
import Model from "./Model";

function GlassExercise() {
	const [glassId, setGlassId] = useState(0);
	return (
		<>
			<Model glassId={glassId} />
			<Glasses setGlassId={setGlassId} />
		</>
	);
}

export default GlassExercise;
