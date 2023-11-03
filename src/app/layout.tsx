import "./globals.css";
import { Metadata } from "next";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Home",
	description: "this is the Home page",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header />
				{children}
			</body>
		</html>
	);
};

export default RootLayout;
