"use client";

import React from "react";
import { Table } from "flowbite-react";

const Comparison = () => {
	return (
		<div
			id="container"
			className=" bg-yellow relative pt-12 lg:pt-18 grid mx-auto mb-5 md:mb-10 lg:mb-12"
		>
			<div
				id="innerContainer"
				className="max-w-[100%] lg:max-w-[80%] mx-auto text-left lg:text-center"
			>
				<section className=" text-left mx-3 md:mx-5 lg:mx-10 pt-[4rem] lg:pt-[10rem] py-4">
					<div className=" flex flex-col justify-center max-w-full lg:max-w-[75%] items-start mb-6">
						<h1 className=" text-blue text-3xl md:text-4xl lg:text-[100px] font-[600] pb-6 whitespace-nowrap mb-4 md:mb-12 lg:mb-18">
							Comparison
						</h1>
						<p className="text-blue mb-5 md:mb-10 lg:mb-12 text-xl md:text-2xl lg:text-3xl">
							What makes Nothing unique? Take a look at how we stand out from
							the competition.
						</p>
					</div>
				</section>
			</div>

			<Table
				className=" rounded-3xl text-xl mx-auto max-w-80% md:max-w-[90%] lg:max-w-full"
				hoverable
			>
				<Table.Head className="text-center rounded-lg text-gray bg-blue leadng-[5rem]">
					<Table.Cell></Table.Cell>
					<Table.Cell className="text-center bg-blue">
						<p className="block">spotify</p>
						<p>apple music</p>
					</Table.Cell>
					<Table.Cell className="text-center bg-blue">
						<p className="block">Netfilx</p>
						<p className="block">disney+</p>
						<p className="block">HBO</p>
						<p className="block">hulu</p>
					</Table.Cell>
					<Table.Cell className="text-center bg-blue">
						<p className="block">doordash</p>
						<p className="block">love with food</p>
						<p className="block">hellofresh</p>
					</Table.Cell>
					<Table.Cell className="text-center">
						<p className="block">nothing</p>
					</Table.Cell>
				</Table.Head>
				<Table.Body className="divide-y text-center text-gray bg-blue">
					<Table.Row className=" dark:border-gray-700 dark:bg-gray-800 leading-[7rem]">
						<Table.Cell className=" whitespace-nowrap font-medium text-gray-900 dark:text-white">
							Music
						</Table.Cell>
						<Table.Cell className="font-bold text-white">yes</Table.Cell>
						<Table.Cell>no</Table.Cell>
						<Table.Cell>no</Table.Cell>
						<Table.Cell>no</Table.Cell>
					</Table.Row>
					<Table.Row className=" dark:border-gray-700 dark:bg-gray-800 leading-[7rem]">
						<Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
							video
						</Table.Cell>
						<Table.Cell>no</Table.Cell>
						<Table.Cell className="font-bold text-white">yes</Table.Cell>
						<Table.Cell>no</Table.Cell>
						<Table.Cell>no</Table.Cell>
					</Table.Row>
					<Table.Row className=" dark:border-gray-700 dark:bg-gray-800 leading-[7rem]">
						<Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
							food
						</Table.Cell>
						<Table.Cell>no</Table.Cell>
						<Table.Cell>no</Table.Cell>
						<Table.Cell className="font-bold text-white">yes</Table.Cell>
						<Table.Cell>no</Table.Cell>
					</Table.Row>
				</Table.Body>
			</Table>
		</div>
	);
};

export default Comparison;
