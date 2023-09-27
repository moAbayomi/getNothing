import React from "react";

const Product = () => {
	return (
		<div
			id="product"
			className=" bg-white rounded-tr-[100px] rounded-tl-[100px] pt-12 lg:pt-18 grid mx-auto"
		>
			<div
				id="innerContainer"
				data-te-container
				className="max-w-[100%] lg:max-w-[80%] mx-auto text-left lg:text-center"
			>
				<section className=" text-left mx-3 md:mx-5 lg:mx-10 pt-[4rem] lg:pt-[10rem] py-4">
					<div className=" flex flex-col justify-center max-w-full lg:max-w-[75%] items-start mb-6">
						<h1 className="text-3xl md:text-4xl lg:text-[100px] font-[600] pb-6 whitespace-nowrap mb-4 md:mb-12 lg:mb-18">
							Whattttt??
						</h1>
						<p className="text-xl md:text-2xl lg:text-3xl">
							youre already signed up for a bunch of stuff, like streaming
							services, software, and delivery apps. honestly, it seems like you
							have everything you need.
						</p>
					</div>

					<div className=" flex items-center justify-between mb-6">
						<div className=" flex flex-col justify-center items-start max-w-full md:max-w-[90%] lg:max-w-[60%] mb-6">
							<h1 className="text-3xl md:text-4xl lg:text-[64px] leading-[2rem] md:leading-[2.5rem] lg:leading-[4rem] mb-4 md:mb-12 lg:mb-18">
								So, what else do you need to find happiness? Nothing.
							</h1>
							<p className="text-xl md:text-2xl lg:text-3xl">
								Rather than offering you more things or services, Nothing
								suggests that you refrain from buying anything else. It’s about
								taking a step back from the constant pressure to consume and
								acquire, and finding joy in the things that really matter.
							</p>
						</div>
						<div className="hidden md:hidden lg:inline relative w-64 h-[500px] rounded-full bg-yellow">
							<span className="absolute top-10 left-20 rounded-full bg-transparent border-[2rem] border-blue w-80 h-32"></span>
							<span className="absolute animate-bounce top-20 left-32 rounded-full bg-blue w-12 h-12"></span>
						</div>
						<div></div>
					</div>

					{/* product screenshpt sample goes here */}

					<img src="https://getnothing.app/img/сertificate.png"></img>
				</section>
			</div>
		</div>
	);
};

export default Product;
