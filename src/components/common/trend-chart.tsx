import React from "react";
import { type TrendChartProps } from "../../types/interfaces";

const TrendChart: React.FC<TrendChartProps> = ({ trend, variant = "success" }) => {
	const maxTrend = Math.max(...trend);

	const variantClasses = {
		success: "bg-green-500",
		warning: "bg-yellow-500",
		danger: "bg-red-500",
	};

	return (
		<div className="flex items-end h-16 gap-1" role="img" aria-label={`6-month trend chart showing new patients: ${trend.join(", ")}`}>
			{trend.map((value, index) => (
				<div
					key={index}
					className={`${variantClasses[variant]} rounded-sm min-h-1 flex-1`}
					style={{ height: `${(value / maxTrend) * 100}%` }}
					aria-label={`Month ${index + 1}: ${value} new patients`}
					role="presentation"
				/>
			))}
		</div>
	);
};

export default TrendChart;
