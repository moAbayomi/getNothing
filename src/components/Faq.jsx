"use client";

import { Accordion } from "flowbite-react";
import React from "react";

const Faq = () => {
	return (
		<div id="faq" className=" bg-white pt-12 lg:pt-18 mb-12 grid mx-auto">
			<div
				id="innerContainer"
				className="max-w-[100%] lg:max-w-[80%] mx-auto text-left lg:text-center"
			>
				<section className=" text-left mx-3 md:mx-5 lg:mx-10 pt-[4rem] lg:pt-[10rem] py-4 flex flex-col md:flex-col lg:flex-row items-start justify-center gap-6">
					<div className=" flex flex-col md:flex-col lg:flex-row justify-center max-w-full lg:max-w-[75%] items-start mb-6">
						<h1 className="text-3xl md:text-4xl lg:text-[100px] font-[600] pb-6 whitespace-nowrap mb-4 md:mb-12 lg:mb-18">
							FAQ
						</h1>
					</div>

					<div className=" max-w-xl text-xl">
						<Accordion className="border-none">
							<Accordion.Panel>
								<Accordion.Title>It’s a joke, right?</Accordion.Title>
								<Accordion.Content>
									<p className="mb-2 text-gray-500 dark:text-gray-400">
										No. We are seriously counting on your money and have already
										taken out a loan for a new car.
									</p>
								</Accordion.Content>
							</Accordion.Panel>
							<Accordion.Panel>
								<Accordion.Title>
									What will the money be used for?
								</Accordion.Title>
								<Accordion.Content>
									<p className="mb-2 text-gray-500 dark:text-gray-400">
										We donate 50% of our profits to charitable foundations
										worldwide. However, supporting charity is not our main goal.
										If your main objective is to support charity, it may be more
										effective for you to directly donate to a foundation of your
										choice.
									</p>
								</Accordion.Content>
							</Accordion.Panel>
							<Accordion.Panel>
								<Accordion.Title>
									Do you have a family subscription to Nothing?
								</Accordion.Title>
								<Accordion.Content>
									<p className="mb-2 text-gray-500 dark:text-gray-400">
										There’s nothing better than sharing with family, and we hope
										to offer a family subscription in the future. However, at
										the moment, we have a limited supply of Nothing.
									</p>
								</Accordion.Content>
							</Accordion.Panel>
							<Accordion.Panel>
								<Accordion.Title>
									How do I update or cancel my subscription to Nothing?
								</Accordion.Title>
								<Accordion.Content>
									<p className="mb-2 text-gray-500 dark:text-gray-400">
										Log in to PayPal, then go to Settings and click the Payments
										tab. Then, click Manage Automatic Payments and select the
										merchant. Check out detailed instructions from PayPal here.
									</p>
								</Accordion.Content>
							</Accordion.Panel>
							<Accordion.Panel>
								<Accordion.Title>
									What if I have additional questions?
								</Accordion.Title>
								<Accordion.Content>
									<p className="mb-2 text-gray-500 dark:text-gray-400">
										Feel free to email us your questions at
										service@getnothing.app
									</p>
								</Accordion.Content>
							</Accordion.Panel>
						</Accordion>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Faq;
