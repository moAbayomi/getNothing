import React from "react";
import Marquee from "react-fast-marquee";

const MarqeeComponent = () => {
	return (
		<div id="container" className=" bg-white pt-12 lg:pt-24 mb-12 grid mx-auto">
			<section className="my-[4.5rem] bg-white p-0 mt-18 grid gap-12">
				<Marquee className="overflow-hidden" autofill="true" speed={120}>
					<div className=" flex gap-[4rem] justify-center items-center text-5xl md:text-5xl lg:text-8xl">
						<p>innovative</p>
						<span className="rounded-full h-4 w-4 bg-yellow-300 "></span>
						<p>surprising</p>
						<span className="rounded-full h-4 w-4 bg-yellow-300 "></span>
						<p>stylish</p>
						<span className="rounded-full h-4 w-4 bg-yellow-300 "></span>
						<p>minimalist</p>
						<span className="rounded-full h-4 w-4 bg-yellow-300 "></span>
						<p>premium</p>
						<span className="rounded-full h-4 w-4 bg-yellow-300 "></span>
					</div>
				</Marquee>
				<Marquee
					className="overflow-hidden"
					autofill="true"
					direction="right"
					speed={120}
				>
					<div className=" flex gap-[4rem] justify-center items-center text-5xl md:text-5xl lg:text-8xl">
						<p>refined</p>
						<span className="rounded-full h-4 w-4 bg-yellow-300 "></span>
						<p>trendy</p>
						<span className="rounded-full h-4 w-4 bg-yellow-300 "></span>
						<p>unique</p>
						<span className="rounded-full h-4 w-4 bg-yellow-300 "></span>
						<p>impressive</p>
						<span className="rounded-full h-4 w-4 bg-yellow-300 "></span>
						<p>modern</p>
						<span className="rounded-full h-4 w-4 bg-yellow-300 "></span>
					</div>
				</Marquee>
				<Marquee className="overflow-hidden" autofill="true" speed={120}>
					<div className=" flex gap-[4rem] justify-center items-center text-5xl md:text-5xl lg:text-8xl">
						<p>fashionable</p>
						<span className="rounded-full h-4 w-4 bg-yellow-300 "></span>
						<p>incredible</p>
						<span className="rounded-full h-4 w-4 bg-yellow-300 "></span>
						<p>awesome</p>
						<span className="rounded-full h-4 w-4 bg-yellow-300 "></span>
						<p>phenimenal</p>
						<span className="rounded-full h-4 w-4 bg-yellow-300 "></span>
						<p>unbelievale</p>
						<span className="rounded-full h-4 w-4 bg-yellow-300 "></span>
					</div>
				</Marquee>
			</section>
		</div>
	);
};

export default MarqeeComponent;
