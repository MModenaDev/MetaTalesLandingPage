import * as React from "react";

import Image from 'next/image'

type SectionUtilitiesProps = {}

const SectionUtilities: React.FC<SectionUtilitiesProps> = () => {
	return (
		<section className="w-full px-8 md:px-20 lg:px-40 xl:px-40 py-16 text-center mb-4">
			<h3 className="text-3xl pb-8"><strong>Utilities</strong></h3>
			<div className="flex flex-wrap lg:flex-nowrap justify-between gap-8">
				<div className="flex flex-col items-center">
					<Image src="/gaming.svg" height={120} width={250} layout="fixed" />
					<p className="mt-2">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Mauris nec sodales mi. Donec lacus sapien, sodales vitae lorem et, hendrerit sollicitudin erat.
						Vivamus congue nunc erat, ac pulvinar turpis condimentum in.
					</p>
				</div>
				<div className="flex flex-col items-center">
					<Image src="/crypto.svg" height={120} width={173} layout="fixed" />
					<p className="mt-2">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Mauris nec sodales mi. Donec lacus sapien, sodales vitae lorem et, hendrerit sollicitudin erat.
						Vivamus congue nunc erat, ac pulvinar turpis condimentum in.
					</p>
				</div>
				<div className="flex flex-col items-center">
					<Image src="/quality.svg" height={120} width={161} layout="fixed" />
					<p className="mt-2">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Mauris nec sodales mi. Donec lacus sapien, sodales vitae lorem et, hendrerit sollicitudin erat.
						Vivamus congue nunc erat, ac pulvinar turpis condimentum in.
					</p>
				</div>
			</div>
		</section>
	)
}

export default SectionUtilities;
