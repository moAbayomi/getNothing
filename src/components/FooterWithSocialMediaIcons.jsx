import { Footer } from "flowbite-react";

export default function FooterWithSocialMediaIcons() {
	return (
		<div id="container" className="text-gray bg-blue pt-12 sticky grid mx-auto">
			<Footer className="bg-blue" container>
				<div className="w-full px-0 md:px-4 lg:px-12 text-[2rem]">
					<div className="grid justify-between w-full sm:flex sm:justify-between md:flex md:grid-cols-1">
						<div className="text-left grid justify-items-start">
							<div className="sm:mt-4">
								<Footer.Copyright by="Nothing" href="#" year={2023} />
							</div>
							<p className="hidden md:hidden lg:block">
								What else do you need to attain complete happiness? Nothing.
							</p>
						</div>
						<div className="grid text-lg self-end grid-cols-2 gap-8 mt-10 md:mt-4 lg:mt-4 sm:grid-cols-3 sm:gap-6">
							<div>
								<Footer.LinkGroup col>
									<Footer.Link href="#">Get Nothing</Footer.Link>
									<Footer.Link href="#">Contact Us</Footer.Link>
									<Footer.Link href="#">Charity</Footer.Link>
								</Footer.LinkGroup>
							</div>
							<div>
								<Footer.LinkGroup col>
									<Footer.Link href="#">Instagram</Footer.Link>
									<Footer.Link href="#">FaceBook</Footer.Link>
									<Footer.Link href="#">Twitter</Footer.Link>
								</Footer.LinkGroup>
							</div>
						</div>
					</div>
					<Footer.Divider />
					<div className="w-full sm:flex sm:items-center sm:justify-between">
						<div>
							<p className="text-xs">Made with love ... muhd</p>
						</div>
						<div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
							<Footer.LinkGroup className="flex gap-6 text-lg">
								<Footer.Link href="#">Terms</Footer.Link>
								<Footer.Link href="#">Privacy</Footer.Link>
							</Footer.LinkGroup>
						</div>
					</div>
				</div>
			</Footer>
		</div>
	);
}
