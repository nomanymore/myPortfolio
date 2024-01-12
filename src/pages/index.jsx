import Head from 'next/head';
import HeroSection from '../components/HeroSection';

export default function Home() {
  return (
    <div>
      <Head>
        <title>VS Data & Development</title>
        <link rel="icon" href="/logoicon.ico" />
      </Head>

      <HeroSection/>
    </div>
    
  );
}
