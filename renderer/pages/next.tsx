import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function NextPage() {
  return (
    <React.Fragment>
      <Head>
        <title>Next - Nextron (basic-lang-typescript)</title>
        <meta name="twitter:title" content="타이틀" />
        <meta name="twitter:image" content="sample.jpeg" />
        <meta name="twitter:description" content="간단한 설명" />
        <meta name="twitter:url" content="https://sample.co.kr/" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <div>
        <p>
          ⚡ Electron + Next.js ⚡ -<Link href="/home">Go to home page</Link>
        </p>
      </div>
    </React.Fragment>
  );
}
