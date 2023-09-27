import { useState } from "react";

import viteLogo from "/vite.svg";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Product from "./components/Product";
import Advantages from "./components/Advantages";
import MarqeeComponent from "./components/MarqueeComponent";
import Comparison from "./components/Comparison";
import GiftNothing from "./components/GiftNothing";
import Stories from "./components/Stories";
import Faq from "./components/Faq";
import GetNothing from "./components/GetNothing";
import FooterWithSocialMediaIcons from "./components/FooterWithSocialMediaIcons";
import PaymentForm from "./components/PaymentForm";
import "./App.css";

function App() {
	const [openModal, setOpenModal] = useState();

	return (
		<main className="min-h-screen max-w-[100vw] font-inter">
			<div className=" ">
				<Header openModal={openModal} setOpenModal={setOpenModal} />
				<Hero />
				<Product />
				<Advantages />
				<MarqeeComponent />
				<Comparison />
				<GiftNothing setOpenModal={setOpenModal} />
				<Stories />
				<Faq />
				<GetNothing />
				<FooterWithSocialMediaIcons />
				<PaymentForm openModal={openModal} setOpenModal={setOpenModal} />
			</div>
		</main>
	);
}

export default App;
