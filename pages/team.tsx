import type { NextPage } from 'next'
import Head from 'next/head'

import Building from '../components/Building'

const Roadmap: NextPage = () => {
	return (
		<main>
			<Head>
				<title>Team</title>
				<meta name="description" content="MetaTales Team" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Building />
		</main>
	)
}

export default Roadmap
