import { type PracticeSummary } from "../types/types";

export const mockPractices: PracticeSummary[] = [
	{
		id: "1",
		name: "Bright Smiles Dental",
		city: "New York",
		country: "USA",
		newPatientsThisMonth: 25,
		appointmentRequests: 40,
		conversionRate: 22.5,
		monthlyTrend: [15, 18, 20, 22, 25, 28], // High Performer: consistent upward growth
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
		monthlyTrend: [25, 22, 18, 15, 12, 10], // At Risk: declining trend
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
		monthlyTrend: [28, 30, 29, 31, 30, 32], // Stable: relatively flat with minor fluctuations
		marketingSpend: 1800,
	},
];
