import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
export default function PaymentForm({ openModal, setOpenModal }) {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [duration, setDuration] = useState();

	const name = firstName + " " + lastName;

	const handleDuration = (e) => {
		const target = e.target;
		if (target.checked) {
			setDuration(target.value);
		}
	};

	async function rememberDetails(e) {
		e.preventDefault();
		console.log("form submitted");
		console.log({ firstName, lastName, email, duration });
		await fetch("http://localhost:5000", {
			method: "POST",
			body: JSON.stringify({ name, email }),
			headers: {
				"Content-Type": "application/json",
			},
		});
		setOpenModal();
	}
	function makePayment() {
		FlutterwaveCheckout({
			public_key: "FLWPUBK_TEST-818f522548982b104ec6736738f2701c-X",
			tx_ref: Date.now(),
			amount: duration === "annually" ? 5000 : 2999,
			currency: "NGN",
			payment_options: "card, banktransfer, ussd",
			redirect_url: "https://glaciers.titanic.com/handle-flutterwave-payment",
			meta: {
				consumer_id: 23,
				consumer_mac: "92a3-912ba-1192a",
			},
			customer: {
				email: email,
				name: firstName + lastName,
			},
			customizations: {
				title: "nothing",
				description: "Payment for Nothing !",
				logo: "https://www.logolynx.com/images/logolynx/22/2239ca38f5505fbfce7e55bbc0604386.jpeg",
			},
		});
	}
	return (
		<>
			<Modal
				show={openModal === "form-elements"}
				size="3xl"
				position="top-right"
				popup
				/* className={`${
					openModal === "form-elements"
						? "flex bg-red-400 translate-x-0 bg-opacity-50 dark:bg-opacity-80"
						: "translate-x-full"
				} transform transition-transform delay-500`} */
				onClose={() => setOpenModal(undefined)}
			>
				<Modal.Header className="pl-8">Get Nothing</Modal.Header>
				<Modal.Body>
					<form action="" method="POST" onSubmit={rememberDetails}>
						<div className="space-y-6 mb-12">
							<div className="max-w-full p-6 bg-yellow rounded-lg">
								After payment, we’ll hook you up with a link to your personal
								page. On this page, you will find your full name, avatar — and
								nothing else. As long as you’re subscribed, it’s all yours!
							</div>
							<h1>Personal Information</h1>

							<div id="form-inputs" className="flex flex-col">
								<div>
									<div className="relative">
										<Label
											className="hidden absolute focus-within:block top-8 text-normal left-5"
											htmlFor="firstName"
											value="First Name"
										>
											First Name
										</Label>
									</div>
									<input
										value={firstName}
										onChange={(e) => setFirstName(e.target.value)}
										className="w-full min-h-[5rem] rounded-tr-lg rounded-tl-lg text-2xl border border-gray focus:text-sm focus:placeholder:-translate-y-5 placeholder:block transition-all duration-150 ease-in-out delay-100 p-4 focus:shadow-inner focus:shadow-yellow"
										type="text"
										id="firstName"
										placeholder="First Name"
										required
									/>
								</div>
								<div>
									<div className="-mt-1 ">
										<Label
											className="hidden"
											htmlFor="lastName"
											value="Last Name"
										/>
									</div>
									<input
										value={lastName}
										onChange={(e) => setLastName(e.target.value)}
										className="w-full min-h-[5rem] text-2xl border border-gray focus:text-sm focus:placeholder:-translate-y-5 placeholder: transition-all duration-150 ease-in-out delay-100 p-4 focus:shadow-inner focus:shadow-yellow"
										type="text"
										id="lastName"
										placeholder="Last Name (optional)"
									/>
								</div>

								<div>
									<div className="-mt-1 ">
										<Label className="hidden" htmlFor="email" value="Email" />
									</div>
									<input
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										className="w-full min-h-[5rem]  text-2xl border border-gray focus:text-sm focus:placeholder:-translate-y-5 placeholder: transition-all duration-150 ease-in-out delay-100 p-4 focus:shadow-inner focus:shadow-yellow"
										type="email"
										id="email"
										placeholder="Email"
									/>
								</div>
								<div>
									<div className="">
										<Label htmlFor="avatar" value="Avatar"></Label>

										<input
											className="w-full min-h-[5rem]  rounded-br-lg rounded-bl-lg text-2xl border border-gray border-t-0 focus:text-sm focus:placeholder:-translate-y-5 placeholder: transition-all duration-150 ease-in-out delay-100 p-4 focus:shadow-inner focus:shadow-yellow"
											type="file"
											id="avatar"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className=" mb-12 space-y-6">
							<h1>Payments</h1>

							<div id="form-inputs" className="flex flex-col">
								<div className=" rounded-tr-lg rounded-tl-lg text-2xl border border-gray p-4">
									<div className="flex justify-between">
										<div className="flex gap-4 text-[4rem] justify-between items-center">
											<input
												value="monthly"
												checked={duration === "monthly"}
												onChange={handleDuration}
												className="w-4 h-4"
												type="radio"
												id="monthly"
												placeholder="Monthly"
												required
											/>
											<Label
												className=" text-lg"
												htmlFor="monthly"
												value="Monthly"
											>
												Monthly
											</Label>
										</div>
										<p className="text-[1.4rem] ">
											#5000 <span className="text-gray text-sm">/mo</span>
										</p>
									</div>
								</div>

								<div className=" rounded-br-lg rounded-bl-lg text-2xl border border-gray border-top-0 p-4">
									<div className="flex justify-between">
										<div className="flex gap-4 text-[4rem] justify-between items-center">
											<input
												value="annually"
												checked={duration === "annually"}
												onChange={handleDuration}
												className="w-4 h-4"
												type="radio"
												id="firstName"
												placeholder="Annual"
												required
											/>
											<Label
												className=" text-lg"
												htmlFor="annual"
												value="Annual"
											>
												Annual
											</Label>
										</div>
										<p className="text-[1.4rem] ">
											#2999 <span className="text-gray text-sm">/mo</span>
										</p>
									</div>
								</div>

								<div className="mt-4 rounded-lg text-2xl border border-gray border-top-0 ">
									<div className="flex relative justify-between">
										<Label
											className="absolute right-4 top-2 px-12 py-4 bg-blue rounded-lg text-gray text-lg"
											htmlFor="apply"
											value="Apply"
										>
											Apply
										</Label>

										<input
											className="w-full px-4 min-h-[5rem] "
											type="text"
											id="promocode"
											placeholder="Promo Code"
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="my-6 px-4 w-full border border-gray h-[1px] bg-gray"></div>

						<div className="flex flex-col gap-4">
							<div className="w-full text-lg flex justify-between">
								<p>Billed now</p>
								<p>#5000</p>
							</div>

							<div className="flex items-center gap-2 text-lg">
								<input
									type="checkbox"
									name="terms"
									id="terms"
									checked={true}
									required
								/>
								<label htmlFor="terms">
									I have read the terms and agreements
								</label>
							</div>
							<p>
								All sales are charged in NGN and all sales are final. You will
								be charged #5000 immediately. You will be charged #5000 monthly
								thereafter while the subscription is active. Cancel any time. We
								will donate 50% of our income to charitable foundations
								worldwide.
							</p>
							<button
								/* onClick={(e) => {
									
								}} */
								className="bg-blue px-12 py-4 text-lg self-center text-gray rounded-lg"
							>
								Go to Payment
							</button>
							<p className="self-center text-lg">powered by flutterwave</p>
						</div>
					</form>
				</Modal.Body>
			</Modal>
		</>
	);
}
