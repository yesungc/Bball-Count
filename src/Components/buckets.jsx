import React, { Component } from "react";
import Bucket from "./bucket";

class Buckets extends Component {
	state = {
		points: [
			{ id: 1, value: 10 },
			{ id: 2, value: 0 },
			{ id: 3, value: 0 },
			{ id: 4, value: 0 },
			{ id: 5, value: 0 }
		]
	};

	handleIncrement2 = (point) => {
		console.log(point);
		const points = [...this.state.points];
		const index = points.indexOf(point);
		points[index] = { ...point };
		points[index].value = points[index].value + 2;
		this.setState({ points });
	};
	handleIncrement3 = (point) => {
		console.log(point);
		const points = [...this.state.points];
		const index = points.indexOf(point);
		points[index] = { ...point };
		points[index].value = points[index].value + 3;
		this.setState({ points });
	};

	handleReset = () => {
		const points = this.state.points.map((c) => {
			c.value = 0;
			return c;
		});
		this.setState({ points });
	};

	handleDelete = (pointId) => {
		console.log("Delete Handle Called", pointId);
		const points = this.state.points.filter((c) => c.id !== pointId);
		this.setState({ points });
	};

	render() {
		return (
			<div>
				<button onClick={this.handleReset}>RESET</button>
				{this.state.points.map((bucket) => (
					<Bucket
						bucket={bucket}
						onDelete={this.handleDelete}
						onIncrement2={this.handleIncrement2}
						onIncrement3={this.handleIncrement3}
					></Bucket>
				))}
			</div>
		);
	}
}

export default Buckets;
