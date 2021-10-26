import * as React from "react"

import Image from 'next/image'

type SectionHeaderProps = {}

const SectionHeader: React.FC<SectionHeaderProps> = () => {
	const scrollBottom = () => {
		window.scrollTo(0, document.body.scrollHeight);
	}

	return (
		<section className="w-full h-80vh px-8 md:px-20 lg:px-40 xl:px-60 py-16 flex flex-col justify-end border-b border-MTred">
			<div className="flex items-center">
				<Image src="/logo.png" height={160} width={160} />
				<div className="ml-4">
					<h1 className="text-6xl text-MTred"><strong>MetaTales</strong></h1>
					<h2 className="text-4xl text-MTred textOutline mt-4">Capitalize on your imagination</h2>
				</div>
			</div>
			<h3 className="text-2xl mt-8">Create, grow and motize fictional Universes via community-based NFTs</h3>
			<button
				className="mt-16 p-4 font-bold border border-MTred rounded-2xl bg-MTred text-primary hover:text-MTred hover:bg-primary w-96 transition-colors"
				type="submit"
				onClick={() => scrollBottom()}
			>
				Apply now to become part of season 1
			</button>
		</section>
	)
}

export default SectionHeader;
