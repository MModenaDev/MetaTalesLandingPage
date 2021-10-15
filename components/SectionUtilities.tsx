import * as React from "react";

import Image from 'next/image'

type SectionUtilitiesProps = {}

const SectionUtilities: React.FC<SectionUtilitiesProps> = () => {
	return (
		<section className="w-full px-8 md:px-20 lg:px-40 xl:px-60 py-16 text-center mb-4">
			<h3 className="text-3xl pb-8"><strong>Utilities</strong></h3>
			<div className="flex flex-wrap lg:flex-nowrap justify-between gap-8">
				<div className="flex flex-col items-center">
					<Image src="/crypto.svg" height={120} width={173} layout="fixed" />
					<p className="mt-2">
						Tales are a system to give ownership to fiction-based Intellectual Property.
						Characters and other Tales can be used by the community to create games, books, comics and other utilities.
						As the Universe gains fans, the NFTs gain value, closing a positive loop.
					</p>
				</div>
				<div className="flex flex-col items-center">
					<Image src="/quality.svg" height={120} width={161} layout="fixed" />
					<p className="mt-2">
						Images, details and stats are intentionally left out of the NFT, so the community can create cannon stories.
						In the future, a decentralized wiki will be created to include details approved by the community.
					</p>
				</div>
				<div className="flex flex-col items-center">
					<Image src="/organize.svg" height={120} width={142} layout="fixed" />
					<p className="mt-2">
						MetaTales proposes an architecture to organize stories in the Metaverse, guaranteeing consistency.
						Universes in the future should also include Items, Skills/Abilities, Jobs/Classes, Races/Folks and Locations, as in a classic RPG world-building.
					</p>
				</div>
			</div>
		</section>
	)
}

export default SectionUtilities;
