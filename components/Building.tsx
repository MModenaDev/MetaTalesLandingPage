import * as React from "react";

import Image from 'next/image'

type BuildingProps = {}

const Building: React.FC<BuildingProps> = () => {
	return (
		<section className="w-full min-h-screen flex flex-col justify-center items-center px-8 md:px-80 py-8">
			<p className="text-4xl mb-8 text-bold">Page in development</p>
			<Image src="/building.svg" height={661} width={876} layout="fixed" />
		</section>
	)
}

export default Building;
