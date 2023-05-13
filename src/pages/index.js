import Form from '@/components/Form';
import Phone from '@/components/Phone';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>LotusLink</title>
        <meta name="description" content="Fully Decentralized Link Pages" />
        <meta name="vieport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="container mx-auto py-10 lg:py-20 px-8 grid grid-cols-1 gap-16 md:grid-cols-2">
        <Form />
        <Phone />
      </div>

    </>
    

    
  );
}
