import * as React from "react";

import Tale from './Tale'

const tales = [
	{
		universe: "Cyberpunk",
		collection: "Cyberpunk 2077",
		type: "Character",
		name: "Johnny Silverhand",
		description: "He, born as Robert John Linder, was a famous influential rockerboy and the lead singer of the band Samurai before its breakup in 2008. He was the most prominent figure that fought against the corrupted NUSA government and the megacorporations, often being described as a terrorist. Johnny is charismatic and quite the charmer. However he is also known to be irrational, impulsive, and a manipulator.",
	},
	{
		universe: "Cyberpunk",
		collection: "Cyberpunk 2077",
		type: "Character",
		name: "Johnny Silverhand",
		description: "He, born as Robert John Linder, was a famous influential rockerboy and the lead singer of the band Samurai before its breakup in 2008. He was the most prominent figure that fought against the corrupted NUSA government and the megacorporations, often being described as a terrorist. Johnny is charismatic and quite the charmer. However he is also known to be irrational, impulsive, and a manipulator.",
	},
]

type SectionProductProps = {}

const SectionProduct: React.FC<SectionProductProps> = () => {
	return (
		<section className="w-full px-8 md:px-20 lg:px-40 xl:px-40 py-16 flex flex-col justify-center items-center">
			<h3 className="text-3xl pb-1"><strong>How it works</strong></h3>
			<div className="flex flex-col items-center">
				<h4 className="text-2xl pb-4"><em>Tale, the storytellers NFT</em></h4>
				<p className="mb-5 text-center">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Mauris nec sodales mi. Donec lacus sapien, sodales vitae lorem et, hendrerit sollicitudin erat.
					Vivamus congue nunc erat, ac pulvinar turpis condimentum in.
					Nullam id augue sit amet ex finibus tempus non ut massa.
					In viverra nibh sed dolor pellentesque aliquet.
					Cras ut imperdiet felis, eu vehicula elit.
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</p>
			</div>
			<div className="flex gap-8">
				{tales.map((tale, idx) => (
					<Tale
						key={tale.name}
						universe={tale.universe}
						collection={tale.collection}
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
