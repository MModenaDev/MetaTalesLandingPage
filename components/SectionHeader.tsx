import * as React from "react"

import Image from 'next/image'

type SectionHeaderProps = {}

const SectionHeader: React.FC<SectionHeaderProps> = () => {
	const scrollBottom = () => {
		window.scrollTo(0, document.body.scrollHeight);
	}

	return (
		<section className="w-full bg-secondary bg-no-repeat bg-bottom bg-worldMD md:bg-worldLG h-90vh px-8 md:px-20 lg:px-40 xl:px-60 py-16 flex flex-col justify-between items-center border-b border-MTpurple">
			<div className="pt-40 text-center">
				<h2 className="text-4xl sm:text-4xl text-MTpurple"><strong>Descentralized fiction universes</strong></h2>
				<h3 className="text-xl sm:text-2xl text-primary mt-8">Invest and colaborate in NFT collections created by strong communities</h3>
			</div>
			<button
				className="mt-16 p-4 font-bold border border-MTpurple rounded-2xl bg-MTpurple hover:text-MTpurple hover:bg-secondary w-full sm:w-80 md:w-96 transition-colors"
				type="button"
				onClick={() => scrollBottom()}
			>
				Check out Season Zero
			</button>
		</section >
	)
}

export default SectionHeader;
