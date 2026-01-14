import PracticeSummaryCard from "./components/common/practice-summary-card";
import { mockPractices } from "./data/mock-practices";
export default function MainApp() {
	return (
		<div className="p-4 flex flex-wrap min-h-screen items-center gap-8 justify-center">
			{mockPractices.map((practice) => (
				<PracticeSummaryCard key={practice.id} practice={practice} />
			))}
		</div>
	);
}
