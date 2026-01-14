import React from "react";

export type PracticeSummary = {
	id: string;
	name: string;
	city: string;
	country: string;
	newPatientsThisMonth: number;
	appointmentRequests: number;
	conversionRate: number;
	monthlyTrend: number[]; // 6 months
	marketingSpend?: number; // optional additional metric
};

interface PracticeSummaryCardProps {
	practice: PracticeSummary;
}

const PracticeSummaryCard: React.FC<PracticeSummaryCardProps> = ({ practice }) => {
	const getStatus = (rate: number) => {
		if (rate >= 20) return { label: "High Performer", class: "bg-green-100 text-green-800" };
		if (rate < 10) return { label: "At Risk", class: "bg-red-100 text-red-800" };
		return { label: "Stable", class: "bg-yellow-100 text-yellow-800" };
	};

	const status = getStatus(practice.conversionRate);

	const recommendations = ["Consider increasing ad budget on top-performing channels.", "Optimize mobile landing page layout."];

	const maxTrend = Math.max(...practice.monthlyTrend);

	return (
		<div className="bg-white rounded-lg shadow-md p-6 m-4 max-w-sm transition-shadow hover:shadow-lg">
			<div className="border-b pb-3 mb-4">
				<h2 className="text-xl font-bold text-gray-800">{practice.name}</h2>
				<p className="text-sm text-gray-600 mt-1">
					{practice.city}, {practice.country}
				</p>
			</div>
			<div className="space-y-4">
				<div className="grid grid-cols-2 gap-4">
					<div>
						<p className="text-xs uppercase text-gray-500">New Patients This Month</p>
						<p className="text-lg font-bold text-gray-800">{practice.newPatientsThisMonth}</p>
					</div>
					<div>
						<p className="text-xs uppercase text-gray-500">Appointment Requests</p>
						<p className="text-lg font-bold text-gray-800">{practice.appointmentRequests}</p>
					</div>
					<div>
						<p className="text-xs uppercase text-gray-500">Conversion Rate</p>
						<p className="text-lg font-bold text-gray-800">{practice.conversionRate}%</p>
					</div>
					{practice.marketingSpend !== undefined && (
						<div>
							<p className="text-xs uppercase text-gray-500">Marketing Spend</p>
							<p className="text-lg font-bold text-gray-800">${practice.marketingSpend}</p>
						</div>
					)}
				</div>
				<div className={`inline-block px-3 py-1 rounded text-sm font-semibold ${status.class}`}>{status.label}</div>
				<div>
					<h3 className="text-sm font-semibold text-gray-800 mb-2">6-Month Trend</h3>
					<div className="flex items-end h-16 gap-1">
						{practice.monthlyTrend.map((value, index) => (
							<div
								key={index}
								className="bg-blue-500 rounded-sm min-h-1 flex-1"
								style={{ height: `${(value / maxTrend) * 100}%` }}
								title={`Month ${index + 1}: ${value}`}
							/>
						))}
					</div>
				</div>
				<div>
					<h3 className="text-sm font-semibold text-gray-800 mb-2">Recommendations</h3>
					<ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
						{recommendations.map((rec, index) => (
							<li key={index}>{rec}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default PracticeSummaryCard;
