"use client";

import { Carousel } from "flowbite-react";
import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa6";

const Stories = () => {
	return (
		<div id="stories" className=" bg-white pt-12 lg:pt-18 mb-12 grid mx-auto">
			<div
				id="innerContainer"
				className="max-w-[100%] md:max-w-[90%] lg:max-w-[80%] mx-auto text-left lg:text-center"
			>
				<section className="text-left mx-3 md:mx-lg:mx-10 pt-[4rem] lg:pt-[10rem] py-4">
					<div className="flex flex-col justify-center max-w-full lg:max-w-[75%] items-start mb-6">
						<h1 className="text-3xl md:text-4xl lg:text-[100px] font-[600] pb-6 whitespace-nowrap mb-4 md:mb-12 lg:mb-18">
							Succcess Stories
						</h1>
						<p className=" mb-5 md:mb-10 lg:mb-12 text-xl md:text-2xl lg:text-3xl">
							Discover how Nothing has changed subscribers’ lives. Lorem ipsum
							dolor sit amet consectetur, adipisicing elit. Animi beatae
							cupiditate molestias unde quibusdam eum nesciunt enim provident
							doloribus, in voluptatum error, harum, laborum nemo dolore
							distinctio aliquam? Optio, harum?
						</p>
					</div>

					<div className="h-96">
						<Carousel>
							<div className="grid gap-4 max-w-sm p-16  rounded-2xl shadow hover:scale-[1.02] transition-all delay-75 hover:shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
								<span className=" flex gap-1">
									<FaStar />
									<FaStar />
									<FaStar />
									<FaStar />
									<FaStar />
								</span>

								<p class="font-normal text-xl text-gray-700 dark:text-gray-400">
									Nothing has improved every part of my life. I received a
									promotion at work, and my hair has never looked better. My
									ex-wife also came back to me, although my current wife didn’t
									seem to appreciate it.
								</p>
								<div className="flex gap-2  items-center">
									<div class="relative w-12 h-12 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
										<svg
											class="absolute w-12 h-12 text-gray-400 -left-1"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fill-rule="evenodd"
												d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
												clip-rule="evenodd"
											></path>
										</svg>
									</div>
									<div className="flex flex-col ">
										<p className="text-lg">Donald</p>
										<p className="text-sm">Blogger</p>
									</div>
								</div>
							</div>
							<div className="grid gap-4 max-w-sm p-16 bg-yellow rounded-2xl shadow hover:scale-[1.02] transition-all delay-75 hover:shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
								<span className=" flex gap-1">
									<FaStar />
									<FaStar />
									<FaStar />
									<FaStar />
									<FaStar />
								</span>

								<p class="font-normal text-2xl text-gray-700 dark:text-gray-400">
									I’ve never seen such honest marketing before. I received
									exactly what I was offered — nothing. It’s incredible!
								</p>
								<div className="flex gap-2  items-center">
									<div class="relative w-12 h-12 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
										<svg
											class="absolute w-12 h-12 text-gray-400 -left-1"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fill-rule="evenodd"
												d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
												clip-rule="evenodd"
											></path>
										</svg>
									</div>
									<div className="flex flex-col ">
										<p className="text-lg">Emery</p>
										<p className="text-sm">Mystery Shopper</p>
									</div>
								</div>
							</div>
							<div className="grid gap-4 max-w-sm p-16 bg-yellow rounded-2xl shadow hover:scale-[1.02] transition-all delay-75 hover:shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
								<span className=" flex gap-1">
									<FaStar />
									<FaStar />
									<FaStar />
									<FaStar />
									<FaStar />
								</span>

								<p class="font-normal text-2xl text-gray-700 dark:text-gray-400">
									Subscribing to Nothing made me realize that maybe I didn't
									need it after all. I've never felt so smart.
								</p>
								<div className="flex gap-2  items-center">
									<div class="relative w-12 h-12 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
										<svg
											class="absolute w-12 h-12 text-gray-400 -left-1"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fill-rule="evenodd"
												d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
												clip-rule="evenodd"
											></path>
										</svg>
									</div>
									<div className="flex flex-col ">
										<p className="text-lg">Stacy</p>
										<p className="text-sm">Philanthropist</p>
									</div>
								</div>
							</div>
							<div className="grid gap-4 max-w-sm p-16 bg-yellow rounded-2xl shadow hover:scale-[1.02] transition-all delay-75 hover:shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
								<span className=" flex gap-1">
									<FaStar />
									<FaStar />
									<FaStar />
									<FaStar />
									<FaStar />
								</span>

								<p class="font-normal text-2xl text-gray-700 dark:text-gray-400">
									Great -- another monthly ill to add to the list of things ill
									forget to cancel. Thanks !
								</p>
								<div className="flex gap-2  items-center">
									<div class="relative w-12 h-12 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
										<svg
											class="absolute w-12 h-12 text-gray-400 -left-1"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fill-rule="evenodd"
												d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
												clip-rule="evenodd"
											></path>
										</svg>
									</div>
									<div className="flex flex-col ">
										<p className="text-lg">Phil</p>
										<p className="text-sm">Famous Singer</p>
									</div>
								</div>
							</div>
							<div className="grid gap-4 max-w-sm p-16 bg-yellow rounded-2xl shadow hover:scale-[1.02] transition-all delay-75 hover:shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
								<span className=" flex gap-1">
									<FaStar />
									<FaStar />
									<FaStar />
									<FaStar />
									<FaStar />
								</span>

								<p class="font-normal text-2xl text-gray-700 dark:text-gray-400">
									I gave my boss a subscription, and he said it was cooler than
									the yacht he bought last year
								</p>
								<div className="flex gap-2  items-center">
									<div class="relative w-12 h-12 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
										<svg
											class="absolute w-12 h-12 text-gray-400 -left-1"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fill-rule="evenodd"
												d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
												clip-rule="evenodd"
											></path>
										</svg>
									</div>
									<div className="flex flex-col ">
										<p className="text-lg">Alex</p>
										<p className="text-sm">Ship captain</p>
									</div>
								</div>
							</div>
						</Carousel>
					</div>
				</section>
			</div>
			<div className="my-[5rem] py-[8rem] bg-yellow flex items-start justify-normal gap-8 ">
				<FaQuoteLeft className="text-[7rem] text-red-500" />
				<div className="flex flex-col items-start justify-start">
					<p className=" text-xl md:text-2xl lg:text-3xl">
						There's no such thing as nothing. In every nothing, there's a
						something. In fact, there could be everything!
					</p>
					<p className="text-2xl my-6">Libba Bray</p>
				</div>
			</div>
		</div>
	);
};

export default Stories;
