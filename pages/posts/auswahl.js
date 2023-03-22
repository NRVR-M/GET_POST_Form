import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';

export default function FirstPost() {
    return (
        <>
            <Head>
                <title>Auswahl Treffen</title>

            </Head>


            <h1>Auswahl Treffen</h1>
            <h2>
                <Link href="/posts/neuerEintrag">Neuer Eintrag</Link>
            </h2>
            <h2>
                <Link href="/posts/liste">Liste abfragen</Link>
            </h2>
            <h2>
                <Link href="/">Zurück zur Startseite </Link>
            </h2>
            <h2>
                <Link href="/posts/form">Form </Link>
            </h2>
            <h2>
                <Link href="/posts/form2">Form2 </Link>
            </h2>


        </>
    );
}

