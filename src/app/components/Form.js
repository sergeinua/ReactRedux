import React from "react";

export class Form extends React.Component {
	render() {
		return (
			<div className="form">
				<label>email:</label>
				<input type="text" name="email" id="email"/>
				<button type="submit">send</button>
				<div className="result">
					<p>Result</p>
					<div>
						<p>{this.props.name}</p>
						<p>{this.props.email}</p>
					</div>
				</div>
			</div>
		);
	};
}