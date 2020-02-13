import React, { Component } from "react";
import Bucket from "./bucket";

class Buckets extends Component {
	render() {
		const {
			onReset,
			onDelete,
			onIncrement3,
			onIncrement2,
			buckets
		} = this.props;
		return (
			<div>
				<button onClick={onReset}>RESET</button>
				{buckets.map((bucket) => (
					<Bucket
						bucket={bucket}
						onDelete={onDelete}
						onIncrement2={onIncrement2}
						onIncrement3={onIncrement3}
					></Bucket>
				))}
			</div>
		);
	}
}

export default Buckets;
