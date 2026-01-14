import React from "react";
import { type MetricItemProps } from "../../types/interfaces";

const MetricItem: React.FC<MetricItemProps> = ({ label, value }) => {
	return (
		<div role="group" aria-labelledby={`metric-label-${label.replace(/\s+/g, "-").toLowerCase()}`} className="flex flex-col justify-between">
			<h6 id={`metric-label-${label.replace(/\s+/g, "-").toLowerCase()}`} className="text-xs uppercase text-gray-600 font-medium">
				{label}
			</h6>
			<p className="text-lg font-bold text-gray-800" aria-label={`${label}: ${value}`}>
				{value}
			</p>
		</div>
	);
};

export default MetricItem;
