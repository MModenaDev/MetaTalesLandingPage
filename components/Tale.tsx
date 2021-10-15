import * as React from "react";

type TaleProps = {
	universe: string;
	collection: string;
	type: string;
	name: string;
	description: string;
	className?: string;
}

const Tale: React.FC<TaleProps> = ({ universe, collection, type, name, description, className }) => {
	return (
		<div className={`flex flex-col gap-4 border border-tertiary border-solid rounded-2xl mr-8 p-4 max-w-md bg-primary ${className}`}>
			<p className="text-lg"><span className="font-bold text-tertiary">Universe: </span>{universe}</p>
			<p className="text-lg"><span className="font-bold text-tertiary">Collection: </span>{collection}</p>
			<p className="text-lg"><span className="font-bold text-tertiary">Type: </span>{type}</p>
			<p className="text-lg"><span className="font-bold text-tertiary">Name: </span>{name}</p>
			<p className="text-lg">{description}</p>
		</div>
	)
}

export default Tale;
