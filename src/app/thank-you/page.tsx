"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ThankYou = () => {
	const router = useRouter();
	const [seconds, setSeconds] = useState(3);

	useEffect(() => {
		setTimeout(() => {
			router.replace("/");
		}, 3000);

		setInterval(() => {
			setSeconds(seconds - 1);
		}, 1000);
	}, [router, seconds]);

	return (
		<main className="flex flex-col justify-center items-center min-h-[calc(100vh-40px)] bg-slate-800">
			<h1 className="text-4xl text-white font-bold">Thank you for your feedback</h1>
			<p className="text-white">
				You will be relocated in <span className="text-green-400">{seconds}</span> seconds
			</p>
		</main>
	);
};

export default ThankYou;
