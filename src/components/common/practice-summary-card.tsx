import React from "react";
import TrendChart from "./trend-chart";
import MetricItem from "./metric-item";
import Badge from "./badge";

export type PracticeSummary = {
	id: string;
	name: string;
	city: string;
	country: string;
	newPatientsThisMonth: number;
	appointmentRequests: number;
	conversionRate: number;
	monthlyTrend: number[];
	marketingSpend?: number;
};

interface PracticeSummaryCardProps {
	practice: PracticeSummary;
}

const PracticeSummaryCard: React.FC<PracticeSummaryCardProps> = ({ practice }) => {
	const getStatus = (rate: number): { label: string; variant: "success" | "warning" | "danger" } => {
		if (rate >= 20) return { label: "High Performer", variant: "success" };
		if (rate < 10) return { label: "At Risk", variant: "danger" };
		return { label: "Stable", variant: "warning" };
	};

	const status = getStatus(practice.conversionRate);

	const recommendations = ["Consider increasing ad budget on top-performing channels.", "Optimize mobile landing page layout."];

	return (
		<div
			className="bg-white border border-gray-100 rounded-lg shadow-md p-6 max-w-sm transition-shadow duration-300 flex flex-col gap-y-6 ease-in-out hover:shadow-lg"
			role="article"
			aria-labelledby={`practice-${practice.id}-name`}>
			<div className="border-b border-gray-200/80 pb-5">
				<h2 id={`practice-${practice.id}-name`} className="text-xl font-bold text-gray-800">
					{practice.name}
				</h2>
				<p className="text-sm text-gray-600 mt-1" aria-label={`Located in ${practice.city}, ${practice.country}`}>
					{practice.city}, {practice.country}
				</p>
			</div>
			<div className="space-y-4">
				<div className="grid grid-cols-2 gap-4" role="group" aria-label="Key metrics">
					<MetricItem label="New Patients This Month" value={practice.newPatientsThisMonth} />
					<MetricItem label="Appointment Requests" value={practice.appointmentRequests} />
					<MetricItem label="Conversion Rate" value={`${practice.conversionRate}%`} />
					{practice.marketingSpend !== undefined && <MetricItem label="Marketing Spend" value={`$${practice.marketingSpend}`} />}
				</div>
				<div className="my-4">
					<Badge label={status.label} variant={status.variant} />
				</div>
				<div>
					<h3 className="text-sm font-semibold text-gray-800 mb-2">6-Month Trend</h3>
					<TrendChart trend={practice.monthlyTrend} />
				</div>
				<div className="mt-3">
					<h3 className="text-sm font-semibold text-gray-800 mb-2">Recommendations</h3>
					<ul className="list-disc list-inside text-sm text-gray-700 space-y-1" role="list">
						{recommendations.map((rec, index) => (
							<li key={index} role="listitem" className="text-wrap">
								{rec}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default PracticeSummaryCard;
