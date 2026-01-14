import { type PracticeSummary } from "../components/common/practice-summary-card";

export const mockPractices: PracticeSummary[] = [
	{
		id: "1",
		name: "Bright Smiles Dental",
		city: "New York",
		country: "USA",
		newPatientsThisMonth: 25,
		appointmentRequests: 40,
		conversionRate: 22.5,
		monthlyTrend: [15, 18, 20, 22, 25, 28],
		marketingSpend: 1500,
	},
	{
		id: "2",
		name: "Healthy Teeth Clinic",
		city: "London",
		country: "UK",
		newPatientsThisMonth: 18,
		appointmentRequests: 30,
		conversionRate: 8.5,
		monthlyTrend: [12, 10, 8, 15, 18, 20],
		marketingSpend: 1200,
	},
	{
		id: "3",
		name: "Pearl Dental Care",
		city: "Sydney",
		country: "Australia",
		newPatientsThisMonth: 32,
		appointmentRequests: 50,
		conversionRate: 15.0,
		monthlyTrend: [20, 22, 25, 28, 30, 32],
		marketingSpend: 1800,
	},
];
