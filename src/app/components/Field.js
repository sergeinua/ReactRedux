import React from "react";

export const Field = (props) => {
	return (
		<div>
			<label>text:</label>
			<input type="text"/>
			<button onClick={() => props.changeFieldVal('sdsd')}>submit text</button>
			<div>data:{props.fieldData}</div>
		</div>
	)
}