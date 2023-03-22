import Link from 'next/link';
import Head from 'next/head';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Startseite
        </h1>
        <Link href="/posts/auswahl"> zur Auwahl </Link>

      </main>

      <footer>

      </footer>
    </div>

  )
}
