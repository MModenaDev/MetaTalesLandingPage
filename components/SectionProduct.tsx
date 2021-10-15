import * as React from "react";

import Tale from './Tale'

const tales = [
	{
		theme: "Horror",
		universe: "SCP Foundation",
		type: "Character",
		name: "SCP-173",
		description: "Origin unknown. It is constructed from concrete and rebar with traces of Krylon brand spray paint. SCP-173 is animate and extremely hostile. The object cannot move while within a direct line of sight. Line of sight must not be broken at any time with SCP-173. Personnel assigned to enter the container are instructed to alert one another before blinking. Object is reported to attack by snapping the neck at the base of the skull, or by strangulation. In the event of an attack, personnel are to observe Class 4 hazardous object containment procedures.",
	},
	{
		theme: "Cyberpunk",
		universe: "Cyberpunk 2077",
		type: "Character",
		name: "Johnny Silverhand",
		description: "He, born as Robert John Linder, was a famous influential rockerboy and the lead singer of the band Samurai before its breakup in 2008. He was the most prominent figure that fought against the corrupted NUSA government and the megacorporations, often being described as a terrorist. Johnny is charismatic and quite the charmer. However he is also known to be irrational, impulsive, and a manipulator.",
	},
]

type SectionProductProps = {}

const SectionProduct: React.FC<SectionProductProps> = () => {
	return (
		<section className="w-full px-8 md:px-20 lg:px-40 xl:px-60 py-16 flex flex-col justify-center items-center">
			<h3 className="text-3xl pb-1"><strong>The rules</strong></h3>
			<div className="flex flex-col items-center">
				<h4 className="text-2xl pb-4"><em>Tales: The building blocks for stories in the Metaverse</em></h4>
				<ol className="mb-5 list-decimal">
					<li>Each Tale represents a character with a specific rarity, and Tales are organized in consistent Themes and Universes (collections).</li>
					<li>Anyone can propose a Tale for any Universe, but it needs to be approved by voting from other owners in the collection. </li>
					<li>The Universe Creator manages the community and has special powers.</li>
					<li>When approved, the Character is minted and auctioned. Revenue is split among the contributors (see more).</li>
					<li>NFT owners can decide on cannon stories, images and details for the character in the Discord.</li>
				</ol>
			</div>
			<div className="flex gap-8">
				{tales.map((tale, idx) => (
					<Tale
						key={tale.name}
						theme={tale.theme}
						universe={tale.universe}
						type={tale.type}
						name={tale.name}
						description={tale.description}
						className={`${(idx !== 0) ? "hidden md:flex" : "flex"}`}
					/>
				))}
			</div>
		</section>
	)
}

export default SectionProduct;
