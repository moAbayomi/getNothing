import React, { useEffect, useState } from "react";

import { Navbar } from "flowbite-react";

const Header = ({ openModal, setOpenModal }) => {
	const [show, setShow] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	const controlNavbar = () => {
		if (typeof window !== "undefined") {
			if (window.scrollY > lastScrollY) {
				// if scroll down hide the navbar
				setShow(true);
			} else {
				// if scroll up show the navbar
				setShow(false);
			}

			// remember current page location to use in the next move
			setLastScrollY(window.scrollY);
		}
	};

	useEffect(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("scroll", controlNavbar);

			// cleanup function
			return () => {
				window.removeEventListener("scroll", controlNavbar);
			};
		}
	}, [lastScrollY]);
	/* show && "hidden" */
	return (
		<div
			className={`w-full bg-yellow fixed transition-all duration-300  z-40 shadow-sm ${
				show && "top-[-80px] z-40 transition-all duration-300"
			}`}
		>
			<Navbar
				fluid={true}
				rounded={true}
				className={` bg-yellow text-black top-0 mx-10 py-4 `}
			>
				<Navbar.Brand href="">
					<span className="self-center whitespace-nowrap text-xl font-semibold ">
						nothing
					</span>
				</Navbar.Brand>
				<Navbar.Collapse className="">
					<Navbar.Link className="text-xl " href="#product">
						product
					</Navbar.Link>
					<Navbar.Link className="text-xl" href="#advantages">
						advantages
					</Navbar.Link>
					<Navbar.Link className="text-xl" href="#giftNothing">
						gift nothing
					</Navbar.Link>
					<Navbar.Link className="text-xl" href="#stories">
						stories
					</Navbar.Link>
					<Navbar.Link className="text-xl" href="#faq">
						FAQ
					</Navbar.Link>
				</Navbar.Collapse>

				<a
					onClick={() => setOpenModal("form-elements")}
					className="bg-blue text-xs md:text-xl lg:text-xl py-2 md:py-3 lg:py-4 px-6 md:px-12 lg:px-18 text-white rounded-full sm:ml-0 ml-auto cursor-pointer"
				>
					Get Nothing
				</a>
				<Navbar.Toggle className="" />
			</Navbar>
		</div>
	);
};

export default Header;
