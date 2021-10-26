import * as React from "react";

import Image from 'next/image'

type SectionProductProps = {}

const SectionProduct: React.FC<SectionProductProps> = () => {
	return (
		<section className=" bg-opacity-75 w-full px-8 py-4 flex justify-center items-center">
			<a href="http://sandbox.mit.edu/" className="bg-MTred rounded-2xl px-4 py-2">
				<Image src="/Sandbox-Logo.png" height={80} width={133} layout="fixed" alt="MIT Sandbox Logo" />
			</a>
		</section>
	)
}

export default SectionProduct;
