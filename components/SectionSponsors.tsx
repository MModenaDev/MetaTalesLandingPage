import * as React from "react";

import Image from 'next/image'

type SectionProductProps = {}

const SectionProduct: React.FC<SectionProductProps> = () => {
	return (
		<section className="bg-secondary bg-opacity-75 w-full px-8 py-4 flex justify-center items-center">
			<a href="http://sandbox.mit.edu/">
				<Image src="/Sandbox-Logo.png" height={60} width={100} layout="fixed" alt="MIT Sandbox Logo" />
			</a>
		</section>
	)
}

export default SectionProduct;
