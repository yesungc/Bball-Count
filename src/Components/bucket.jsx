import React, { Component } from "react";

class Bucket extends Component {
	render() {
		return (
			<div>
				<span>{this.formatCount()}</span>
				<button onClick={() => this.props.onIncrement2(this.props.bucket)}>
					2s
				</button>
				<button onClick={() => this.props.onIncrement3(this.props.bucket)}>
					3s
				</button>
				<button onClick={() => this.props.onDelete(this.props.bucket.id)}>
					Delete
				</button>
			</div>
		);
	}
	formatCount() {
		const { value } = this.props.bucket;
		// console.log(this.props.buckets);
		// console.log(this.props.buckets.value);
		return value === 0 ? 0 : value;
	}
}

export default Bucket;
