import type { NextPage } from 'next'
import Head from 'next/head'

import Building from '../components/Building'

const Roadmap: NextPage = () => {
	return (
		<main>
			<Head>
				<title>Roadmap</title>
				<meta name="description" content="MetaTales Roadmap" />
				<link rel="icon" href="/logo.ico" />
			</Head>

			<Building />
		</main>
	)
}

export default Roadmap
