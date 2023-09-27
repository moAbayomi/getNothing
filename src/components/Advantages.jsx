import React from "react";

const Advantages = () => {
	return (
		<div
			id="advantages"
			className=" bg-white pt-12 lg:pt-24 mb-12 grid mx-auto"
		>
			<div
				id="innerContainer"
				className="max-w-[100%] lg:max-w-[80%] mx-auto text-left lg:text-center"
			>
				<section className=" text-left mx-3 md:mx-5 lg:mx-10 pt-[4rem] lg:pt-[10rem] py-4">
					<div className=" flex flex-col justify-center max-w-full lg:max-w-[75%] items-start mb-6">
						<h1 className="text-3xl md:text-4xl lg:text-[100px] font-[600] pb-6 whitespace-nowrap mb-4 md:mb-12 lg:mb-18">
							Advantages
						</h1>
						<p className=" mb-5 md:mb-10 lg:mb-12 text-xl md:text-2xl lg:text-3xl">
							Not a subscriber yet? There’s nothing stopping you! Read on for
							more reasons why you should sign up.
						</p>
					</div>

					<div
						id="cards"
						/* className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 justify-items-stretch sm:justify-items-center md:justify-items-center" */
						className="flex justify-center items-center mx-auto gap-4 flex-col md:flex-col lg:flex-row"
					>
						<div className="flex flex-col gap-4">
							<div className=" p-12 min-h-fit bg-blue  rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
								<h5 class="mb-5 md:mb-10 lg:mb-12 text-2xl md:text-2xl lg:text-5xl tracking-tight text-white dark:text-black ">
									Thoughtful gift
								</h5>
								<p class="font-normal text-lg md:text-xl lg:text-2xl text-gray dark:text-gray-400 mb-5 md:mb-10 lg:mb-12">
									Give Nothing to yourself or to someone you appreciate more
									than anything. This unique gift serves as a powerful reminder
									that true happiness cannot be found in material possessions.
								</p>
								<svg
									className="mb-5 md:mb-10 lg:mb-12"
									width="100"
									height="100"
									viewBox="0 0 100 100"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M50 49.999C50 77.5982 72.3993 99.9976 99.9985 99.9976C99.9985 72.3984 77.5992 49.999 50 49.999Z"
										fill="#fca311"
									></path>
									<path
										d="M0 99.9966C27.5992 99.9966 49.9985 77.5972 49.9985 49.998C22.3993 49.998 0 72.3974 0 99.9966Z"
										fill="#fca311"
									></path>
									<path
										d="M99.9985 0.000488281C72.3993 0.000488281 50 22.3998 50 49.999C77.5992 49.999 99.9985 27.5997 99.9985 0.000488281Z"
										fill="#fca311"
									></path>
									<path
										d="M0 0C0 27.5992 22.3993 49.9985 49.9985 49.9985C49.9985 22.3993 27.5992 0 0 0Z"
										fill="#fca311"
									></path>
								</svg>
							</div>
							<div className="p-12 min-h-fit bg-yellow rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
								<h5 class="mb-5 md:mb-10 lg:mb-12 text-2xl md:text-2xl lg:text-5xl tracking-tight text-gray-900 dark:text-white">
									Sustainability
								</h5>
								<p class=" mb-5 md:mb-10 lg:mb-12 text-lg md:text-xl lg:text-2xl font-normal text-gray-700 dark:text-gray-400">
									Nothing generates no physical waste or clutter, making it
									beneficial for the environment.
								</p>

								<svg
									className="mb-5 md:mb-10 lg:mb-12"
									width="100"
									height="100"
									viewBox="0 0 100 100"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M0 50.7633C0 77.925 22.0528 99.8984 49.0854 99.8984C48.6785 73.042 26.9309 51.2719 0 50.7633ZM0 49.1355C26.9309 48.7289 48.6789 26.9585 49.0854 0.000348438C22.0528 -0.101124 0 21.9738 0 49.1355ZM50.813 100C77.9472 100 99.8984 77.9248 99.8984 50.8649C73.0691 51.2722 51.3211 73.0418 50.813 100ZM100 49.1355C100 21.9738 77.9472 0.000348438 50.9146 0.000348438C51.3215 26.8568 73.0691 48.6268 100 49.1355Z"
										fill="#14213d"
									></path>
								</svg>
							</div>
						</div>
						<div className="flex flex-col gap-4">
							<div className="p-12 min-h-fit bg-yellow rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
								<h5 class="mb-5 md:mb-10 lg:mb-12 text-2xl md:text-2xl lg:text-5xl tracking-tight text-gray-900 dark:text-white">
									Mindfulness
								</h5>
								<p class="mb-5 md:mb-10 lg:mb-12 text-lg md:text-xl lg:text-2xl font-normal text-gray-700 dark:text-gray-400">
									Nothing promotes a simpler and more mindful lifestyle.
								</p>
								<svg
									className="mb-5 md:mb-10 lg:mb-12"
									width="100"
									height="87"
									viewBox="0 0 100 87"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M25.1328 43.3333H75.0338L50.1004 0L25.1328 43.3333Z"
										fill="#14213d"
									></path>
									<path
										d="M100.001 86.6663L75.0349 43.333L50.1016 86.6663H100.001Z"
										fill="#14213d"
									></path>
									<path
										d="M0 86.6668H49.901L24.9676 43.3335L0 86.6668Z"
										fill="#14213d"
									></path>
								</svg>
							</div>
							<div className="p-12 min-h-fit bg-yellow rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
								<h5 class="mb-5 md:mb-10 lg:mb-12 text-2xl md:text-2xl lg:text-5xl tracking-tight text-gray-900 dark:text-white">
									Freedom
								</h5>
								<p class="mb-5 md:mb-10 lg:mb-12 text-lg md:text-xl lg:text-2xl font-normal text-gray-700 dark:text-gray-400">
									We aren’t trying to make you spend more time and money on our
									website. We have no idea what CTR, DAU, MAU, or retention rate
									mean.
								</p>
								<svg
									className="mb-5 md:mb-10 lg:mb-12"
									width="100"
									height="100"
									viewBox="0 0 100 100"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M0 0V100C27.6 100 49.9657 77.6 49.9657 50C49.9657 22.4 27.5981 0 0 0Z"
										fill="#14213d"
									></path>
									<path
										d="M100.001 50C100.001 22.4 77.6333 0 50.0352 0V100C77.6352 100 100.001 77.6 100.001 50Z"
										fill="#14213d"
									></path>
								</svg>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Advantages;
