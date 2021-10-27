import * as React from "react";

import Image from 'next/image'

type SectionBenefitsProps = {}

const SectionBenefits: React.FC<SectionBenefitsProps> = () => {
	return (
		<section className="w-full px-8 md:px-20 lg:px-40 xl:px-60 py-16 text-center mb-4">
			<h3 className="text-3xl pb-16"><strong>Benefits</strong></h3>
			<div className="grid sm:grid-cols-3 gap-8">
				<div className="flex flex-col items-center">
					<Image src="/crypto.svg" height={120} width={173} layout="fixed" />
					<h5 className="text-2xl mt-8 underline customRedUnderline"><strong>Be rewarded<br /><span className="text-lg">for contributing</span></strong></h5>
					<p className="mt-2">
						If you buy an NFT, you receive exclusive content and perks.
						If you create one approved by the community, you receive a fair share.
					</p>
				</div>
				<div className="flex flex-col items-center">
					<Image src="/quality.svg" height={120} width={161} layout="fixed" />
					<h5 className="text-2xl mt-8 underline customRedUnderline"><strong>Be listened<br /><span className="text-lg">about the characters you love</span></strong></h5>
					<p className="mt-2">
						No more crappy endings. NFT holders of characters can propose and vote for key decisions (art, stories and licencing)
					</p>
				</div>
				<div className="flex flex-col items-center">
					<Image src="/organize.svg" height={120} width={142} layout="fixed" />
					<h5 className="text-2xl mt-8 underline customRedUnderline"><strong>Be part<br /><span className="text-lg">of new universes</span></strong></h5>
					<p className="mt-2">
						From Cyberpunk to Medieval, help to co-create new universes and engage in new communities
					</p>
				</div>
			</div>
		</section>
	)
}

export default SectionBenefits;
