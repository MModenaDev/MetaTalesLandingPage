import * as React from 'react'
import Image from 'next/image'

import { useForm, SubmitHandler } from 'react-hook-form'
import axios from 'axios'
import moment from 'moment'

type Inputs = {
	name: string,
	email: string,
}

type SectionFormProps = {}

const SectionForm: React.FC<SectionFormProps> = () => {
	const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
	const [error, setError] = React.useState<string | null>(null);
	const [signedUp, setSignedUp] = React.useState<boolean>(false);

	React.useEffect(() => {
		if (window.localStorage.getItem("mt-signedUp") === "true") {
			setSignedUp(true);
		}
	})

	const onSubmit: SubmitHandler<Inputs> = data => axios.post(
		process.env.NEXT_PUBLIC_SHEETS_API as string,
		{ ...data, date: moment().format("YYYY-MM-DD") }
	).then((value) => {
		if (value.status === 200) {
			window.localStorage.setItem("mt-signedUp", "true");
			setSignedUp(true);
		} else {
			throw new Error("Response status not 200");
		}
	}).catch((error) => {
		setError(error);
		console.log("error", error);
	});

	return (
		<section className="w-full px-8 md:px-20 lg:px-40 xl:px-60 py-8 mb-8 flex flex-wrap justify-center">
			<Image src="/join.svg" height={180} width={240} layout="fixed" />
			{error &&
				<div className="flex flex-col justify-center ml-4 max-w-lg">
					<p>Oops an error occumt-red, try again later!</p>
				</div>
			}
			{(!error && signedUp) &&
				<div className="flex flex-col justify-center items-center ml-4 max-w-lg">
					<h4 className="text-2xl text-bold mb-4 text-mt-red">Thank you for joining us!</h4>
					<p className="mb-4">To fully use our product, join our discord below!</p>
					<a href="https://discord.gg/FYmM6YT24X" className="w-full flex justify-center border border-secondary rounded-2xl px-4 py-2">
						<Image src="/discord-logo.svg" height={40} width={40} layout="fixed" />
					</a>
				</div>
			}
			{(!error && !signedUp) &&
				<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col flex-grow gap-4 justify-center ml-4 max-w-lg">
					<input className="p-2 border-b border-mt-red bg-primary" placeholder="Name" {...register("name", { requimt- red: true })} />
					<input className="p-2 border-b border-mt-red bg-primary" placeholder="Email" type="email" {...register("email", { requimt- red: true })} />
					{(errors.email || errors.name) && <p className="text-mt-red-400 italic">Requimt-red name and valid email</p>}
					<button className="p-4 font-bold rounded-2xl border border-primary bg-mt-red text-primary hover:text-mt-red hover:bg-primary hover:border-mt-red transition-colors" type="submit">
						Get early access
					</button>
					<p className="text-sm italic">No spams, pinky promise</p>
				</form>
			}
		</section>
	)
}

export default SectionForm;
