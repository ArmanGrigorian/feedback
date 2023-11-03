"use client";
import { useRouter } from "next/navigation";
import { useState, FormEvent, ChangeEvent } from "react";

const initState: T_initialState = {
	name: "",
	email: "",
	message: "",
};

const FeedbackPage = () => {
	const [data, setData] = useState(initState);
	const router = useRouter();

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { name, email, message } = data;

		// const res =
			await fetch("http://localhost:3000/api/feedback", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ name, email, message }),
		});

		// const result = await res.json();
		// console.log(result);
		router.push("/thank-you");
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const target = e.target as HTMLInputElement | HTMLTextAreaElement;

		setData((prevData) => ({ ...prevData, [target.name]: target.value }));
	};

	return (
		<form onSubmit={handleSubmit} className="w-1/2 mx-auto">

			<fieldset className="flex flex-col justify-start items-center gap-5 p-5 border-2 border-white rounded-lg">

				<legend className="text-xl text-white font-bold">Your feedback</legend>

				<input
					className="border-2 border-black w-full px-2 py-1 rounded"
					type="text"
					name="name"
					placeholder="name..."
					value={data.name}
					required
					onChange={handleChange}
				/>

				<input
					className="border-2 border-black w-full px-2 py-1 rounded"
					type="email"
					name="email"
					placeholder="email..."
					value={data.email}
					required
					onChange={handleChange}
				/>

				<textarea
					className="border-2 border-black w-full px-2 py-1 rounded resize-none h-40"
					name="message"
					id="message"
					placeholder="message..."
					value={data.message}
					required
					onChange={handleChange}></textarea>


				<input
					type="submit"
					value="SEND"
					className="border-2 px-3 py-1 rounded text-white border-white opacity-50 hover:opacity-100"
				/>
			</fieldset>
		</form>
	);
};

export default FeedbackPage;
