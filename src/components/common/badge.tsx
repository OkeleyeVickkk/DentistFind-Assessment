import React from "react";
import { type BadgeProps } from "../../types/interfaces";

const Badge: React.FC<BadgeProps> = ({ label, variant = "success", className = "" }) => {
	const variantClasses = {
		success: "bg-green-100 text-green-800",
		warning: "bg-yellow-100 text-yellow-800",
		danger: "bg-red-100 text-red-800",
	};

	return (
		<span
			className={`inline-block px-3 py-1 rounded text-xs font-semibold ${variantClasses[variant]} ${className}`}
			role="status"
			aria-label={`Status: ${label}`}>
			{label}
		</span>
	);
};

export default Badge;
