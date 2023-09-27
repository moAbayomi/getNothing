import React from "react";

const Hero = () => {
	return (
		<div className="bg-yellow w-full">
			<div id="container" className="max-w-[80%] mx-auto">
				<main className="text-center grid gap-4 mx-10 py-4 pb-4 md:pb-12 lg:pb-24 text-black">
					<h1 className="mt-6 md:mt-12 lg:mt-24 mb-2 md:mb-8 lg:mb-12 text-[70px] leading-[60px] md:text-[8rem] md:leading-[5rem] lg:text-[12rem] lg:leading-[8rem] ">
						Less is the new more
					</h1>
					<p className="text-[22px] leading-[30px] lg:text-[32px] lg:leading-[44px] my-12">
						instead of providing you with more things, we provide you with less.
						We offer you a subscription to nothing.
					</p>
					<button className="text-[1.2rem] lg:text[1.5rem] place-self-center px-12 py-4 bg-blue text-white hover:bg-gray hover:text-black shadow-sm shadow-gray hover:shadow-md transition-all delay-75  rounded-full">
						Get Nothing
					</button>
					<img src="https://getnothing.app/img/tags.png" width="1037"></img>
				</main>
			</div>
		</div>
	);
};

export default Hero;
