import type { NextPage } from 'next'
import Head from 'next/head'

import SectionHeader from '../components/SectionHeader'
import SectionBenefits from '../components/SectionBenefits'
import SectionDescription from '../components/SectionDescription'
import SectionForm from '../components/SectionForm'
import SectionSponsors from '../components/SectionSponsors'

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>MetaTales</title>
        <meta name="description" content="MetaTales home page" />
        <link rel="icon" href="/logo.ico" />
      </Head>

      <SectionHeader />
      <SectionDescription />
      <SectionBenefits />
      <SectionForm />
      <SectionSponsors />
    </main>
  )
}

export default Home
