import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
	title: "Feedback",
	description: "this is the Feedback page",
};

const FeedbackLayout = ({ children }: { children: ReactNode }) => {
	return <main className="min-h-[calc(100vh-40px)] bg-slate-800 flex justify-center items-center">
		{children}
	</main>;
};

export default FeedbackLayout;
