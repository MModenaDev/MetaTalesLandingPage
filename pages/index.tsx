import type { NextPage } from 'next'
import Head from 'next/head'

import SectionHeader from '../components/SectionHeader'
import SectionProduct from '../components/SectionProduct'
import SectionUtilities from '../components/SectionUtilities'
import SectionForm from '../components/SectionForm'
import SectionSponsors from '../components/SectionSponsors'

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>MetaTales</title>
        <meta name="description" content="MetaTales home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SectionHeader />
      <SectionProduct />
      <SectionUtilities />
      <SectionForm />
      <SectionSponsors />
    </main>
  )
}

export default Home
