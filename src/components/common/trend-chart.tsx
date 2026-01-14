import React from "react";

interface TrendChartProps {
	trend: number[];
}

const TrendChart: React.FC<TrendChartProps> = ({ trend }) => {
	const maxTrend = Math.max(...trend);

	return (
		<div className="flex items-end h-16 gap-1" role="img" aria-label={`6-month trend chart showing new patients: ${trend.join(", ")}`}>
			{trend.map((value, index) => (
				<div
					key={index}
					className="bg-blue-500 rounded-sm min-h-1 flex-1"
					style={{ height: `${(value / maxTrend) * 100}%` }}
					aria-label={`Month ${index + 1}: ${value} new patients`}
					role="presentation"
				/>
			))}
		</div>
	);
};

export default TrendChart;
