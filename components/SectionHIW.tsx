import * as React from "react";
import Image from 'next/image'

type SectionHIWProps = {}

const SectionHIW: React.FC<SectionHIWProps> = () => {
	return (
		<section className="w-full px-8 md:px-20 lg:px-40 xl:px-60 py-16 flex flex-col justify-center items-center">
			<h3 className="text-3xl pb-4"><strong>How it works</strong></h3>
			<div className="flex flex-col items-center">
				<h4 className="text-2xl pb-8"><em>Tales: The building blocks for stories in the Metaverse</em></h4>
				<p className="mb-5">
					Tales are NFTs (non-fungible tokens) that represent characters, locations and world-building elements, created and managed by communities.
				</p>
			</div>
		</section>
	)
}

export default SectionHIW;
