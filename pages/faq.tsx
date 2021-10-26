import type { NextPage } from 'next'
import Head from 'next/head'

import Building from '../components/Building'

const Faq: NextPage = () => {
	return (
		<main>
			<Head>
				<title>FAQ</title>
				<meta name="description" content="Frequently Asked Questions for MetaTales" />
				<link rel="icon" href="/logo.ico" />
			</Head>

			<Building />
		</main>
	)
}

export default Faq
