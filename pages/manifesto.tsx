import type { NextPage } from 'next'
import Head from 'next/head'

import Building from '../components/Building'

const Manifesto: NextPage = () => {
	return (
		<main>
			<Head>
				<title>Manifesto</title>
				<meta name="description" content="MetaTales Manifesto" />
				<link rel="icon" href="/logo.ico" />
			</Head>

			<Building />
		</main>
	)
}

export default Manifesto
