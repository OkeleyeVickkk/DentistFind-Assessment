import { type PracticeSummary } from "./types";

export interface BadgeProps {
	label: string;
	variant?: "success" | "warning" | "danger";
	className?: string;
}

export interface MetricItemProps {
	label: string;
	value: string | number;
}

export interface TrendChartProps {
	trend: number[];
	variant?: "success" | "warning" | "danger";
}

export interface PracticeSummaryCardProps {
	practice: PracticeSummary;
}
