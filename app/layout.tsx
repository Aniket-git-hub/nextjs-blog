import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const links = [
		{ name: "Home", url: "/" },
		{ name: "About", url: "/about" },
		{ name: "Contact", url: "/contact" },
		{ name: "Privacy Policy", url: "/privacy-policy" },
		{ name: "Disclaimer", url: "/disclaimer" },
	]
	return (
		<html lang="en">
			<body className={inter.className}>
				<nav className="flex justify-between items-center bg-gray-100">
					<h1 className=" p-2 text-4xl  font-semibold font-sans">
						letsbug.in
					</h1>
					<ul className="flex">
						{links.map((link) => (
							<li
								className=" hover:bg-white py-2 px-4 hover:cursor-pointer"
								key={link.name}
							>
								<Link href={link.url}>{link.name} </Link>
							</li>
						))}
					</ul>
					<section>
						<input placeholder="search" />
					</section>
				</nav>
				{children}
			</body>
		</html>
	)
}
