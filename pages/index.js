import Head from "next/head";
import Hero from "../components/Hero";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Next Real Estate App</title>
        <meta name="description" content="Real Estate App with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </div>
  );
}
