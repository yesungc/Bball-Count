import React, { Component } from "react";
import NavBar from "./Components/navBar";
import Buckets from "./Components/buckets";
import "./App.css";

class App extends Component {
	state = {
		total: 0,
		points: [
			{ id: 1, value: 0 },
			{ id: 2, value: 0 },
			{ id: 3, value: 0 },
			{ id: 4, value: 0 },
			{ id: 5, value: 0 }
		]
	};
	sumUpPoints = (points) => {
		this.state.total += points;
		return this.state.total;
	};

	handleIncrement2 = (point) => {
		console.log(point);
		const points = [...this.state.points];
		const index = points.indexOf(point);
		points[index] = { ...point };
		const amount = points[index].value + 2;
		points[index].value = amount;
		this.sumUpPoints(amount);

		this.setState({ points });
	};
	handleIncrement3 = (point) => {
		console.log(point);
		const points = [...this.state.points];
		const index = points.indexOf(point);
		points[index] = { ...point };
		const amount = points[index].value + 3;
		points[index].value = amount;
		this.sumUpPoints(amount);
		this.setState({ points });
	};

	handleReset = () => {
		const points = this.state.points.map((c) => {
			c.value = 0;
			this.state.total = 0;
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
			<React.Fragment>
				<NavBar totalPoints={this.state.total} />
				<main className="container">
					<Buckets
						buckets={this.state.points}
						onReset={this.handleReset}
						onIncrement2={this.handleIncrement2}
						onIncrement3={this.handleIncrement3}
						onDelete={this.handleDelete}
					/>
				</main>
			</React.Fragment>
		);
	}
}
export default App;
