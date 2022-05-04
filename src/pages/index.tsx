import type { NextPage } from 'next'

import MainLayout from '../components/layout/MainLayout';
import LeadsMain from '../components/leads/LeadsMain';
import Head from 'next/head'


const Home: NextPage = () => {
return (
<MainLayout>

  <Head>
    <title>Mis emprendedoras Tissini</title>
    <meta property={`og: Mis emprendedoras Tissini`} content={`page Mis emprendedoras Tissini`} key={`Mis emprendedoras
      Tissini`} />
  </Head>
  <LeadsMain />

</MainLayout>
);
}

export default Home