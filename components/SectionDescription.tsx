import * as React from "react";
import Image from 'next/image'

type SectionDescriptionProps = {}

const SectionDescription: React.FC<SectionDescriptionProps> = () => {
	return (
		<section className="w-full px-8 md:px-20 lg:px-40 xl:px-60 py-16 mb-4">
			<div className="flex flex-col-reverse md:flex-row justify-center items-center gap-8 md:gap-16 mb-16 md:mb-8">
				<div className="md:text-right">
					<h5 className="text-2xl mb-4 underline customRedUnderline"><strong>Your community has characters and stories</strong></h5>
					<p>Communities are creating rich universes across the internet. Memes, webnovels, video series and SubReddits full of potential</p>
				</div>
				<Image src="/planet-purple.png" width="1202" height="676" />
			</div>
			<div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-16 md:mb-8">
				<Image src="/planet-purple.png" width="1202" height="676" />
				<div>
					<h5 className="text-2xl mb-4 underline customRedUnderline"><strong>Bring them to the Metaverse</strong></h5>
					<p>Transform characters, items and other elements into an NFT collection. Its prices grow with the value of these stories and the community behind it.</p>
				</div>
			</div>
			<div className="flex flex-col-reverse md:flex-row justify-center items-center gap-8 md:gap-16 mb-16 md:mb-8">
				<div className="md:text-right">
					<h5 className="text-2xl mb-4 underline customRedUnderline"><strong>Universes are always expanding</strong></h5>
					<p>Anyone can propose new characters, and the community takes a vote to decide what goes in the next Season. </p>
				</div>
				<Image src="/planet-purple.png" width="1202" height="676" />
			</div>
			<div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-16 md:mb-8">
				<Image src="/planet-purple.png" width="1202" height="676" />
				<div>
					<h5 className="text-2xl mb-4 underline customRedUnderline"><strong>Be part of the community</strong></h5>
					<p>The NFT owners decide on stories, art and licencing for the Universe, based on a governance system</p>
				</div>
			</div>
		</section>
	)
}

export default SectionDescription;
