import * as React from "react"

import Image from 'next/image'

type SectionHeaderProps = {}

const SectionHeader: React.FC<SectionHeaderProps> = () => {
	const scrollBottom = () => {
		window.scrollTo(0, document.body.scrollHeight);
	}

	return (
		<section className="w-full h-80vh bg-secondary px-8 md:px-20 lg:px-40 xl:px-60 py-16 flex flex-col justify-end">
			<Image src="/logo.png" height={160} width={160} layout="fixed" />
			<h1 className="text-6xl text-MTred mt-4"><strong>MetaTales</strong></h1>
			<h2 className="text-2xl text-primary mt-8 italic">Crypto-universes created and owned by communities</h2>
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
