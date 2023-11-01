"use client"
import { useState } from "react"
export default function Home() {
	const [featuredBlogs, setFeaturedBlogs] = useState([
		{
			title: "This is a blog title",
			url: "this is the url of the blog",
			date: "20/10/2023",
			author: "aniket singh",
		},
		{
			title: "This is a blog title",
			url: "this is the url of the blog",
			date: "20/10/2023",
			author: "aniket singh",
		},
		{
			title: "This is a blog title",
			url: "this is the url of the blog",
			date: "20/10/2023",
			author: "aniket singh",
		},
		{
			title: "This is a blog title",
			url: "this is the url of the blog",
			date: "20/10/2023",
			author: "aniket singh",
		},
		{
			title: "This is a blog title",
			url: "this is the url of the blog",
			date: "20/10/2023",
			author: "aniket singh",
		},
	])
	return (
		<main>
			<section className="m-4">
				<h3 className="px-2 text-large font-semibold">
					Trending blogs
				</h3>
				<section className="flex flex-wrap">
					{featuredBlogs.map((featuredBl, index) => (
						<article
							className="p-4 border border-gray-500 max-w-md rounded-md my-2 mr-4 hover:cursor-pointer"
							key={index}
						>
							<header>
								<h2 className="text-2xl font-semibold">
									{featuredBl.title}
								</h2>
							</header>
							<main>
								<p className="text-sm">
									Lorem ipsum, dolor sit amet consectetur
									adipisicing elit. Minima modi inventore
									placeat pariatur ullam cum, corporis fuga
									officia obcaecati quia.
								</p>
							</main>
							<footer className="flex justify-between">
								<div>{featuredBl.author}</div>
								<div>{featuredBl.date}</div>
							</footer>
						</article>
					))}
				</section>
			</section>
		</main>
	)
}
