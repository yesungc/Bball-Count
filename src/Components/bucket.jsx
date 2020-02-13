import React, { Component } from "react";

class Bucket extends Component {
	componentDidUpdate(prevProps, prevState) {
		console.log("prevProps", prevProps);
		console.log("prevState", prevState);
		if (prevProps.bucket.value !== this.props.bucket.value) {
			//Ajax call and get new data?
		}
	}

	componentWillUnmount() {
		console.log("bucket - Unmount");
	}

	render() {
		console.log("bucket - Rendered");
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
