import * as React from "react";

type TaleProps = {
	theme: string;
	universe: string;
	type: string;
	name: string;
	description: string;
	className?: string;
}

const Tale: React.FC<TaleProps> = ({ theme, universe, type, name, description, className }) => {
	return (
		<div className={`flex flex-col gap-4 border border-MTred border-solid rounded-2xl mr-8 p-4 max-w-md bg-primary ${className}`}>
			<p className="text-lg"><span className="font-bold text-MTred">Theme: </span>{theme}</p>
			<p className="text-lg"><span className="font-bold text-MTred">Universe: </span>{universe}</p>
			<p className="text-lg"><span className="font-bold text-MTred">Type: </span>{type}</p>
			<p className="text-lg"><span className="font-bold text-MTred">Name: </span>{name}</p>
			<p className="text-lg">{description}</p>
		</div>
	)
}

export default Tale;
