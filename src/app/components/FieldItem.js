import React from "react";

export class FieldItem extends React.Component {
	render() {
		return (
			<div>
				<p>result:</p>
				<div>{this.props.result}</div>
			</div>
		);
	}
}