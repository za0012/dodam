import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';


export default function HomePage() {
  const [message, setMessage] = React.useState('No message found');

  React.useEffect(() => {
    window.ipc.on('message', (message: string) => {
      setMessage(message);
    });
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Home - Nextron (basic-lang-typescript)</title>
      </Head>
      <div className="h-screen bg-slate-600 flex flex-col justify-center items-center h-full">
        <p>
          ⚡ Electron + Next.js ⚡ -<Link href="/next">Go to next page</Link>
        </p>
        <Link href={'/main'}>
          <Image src="/images/sangdam.png" alt="sangdam" width={256} height={256} />
        </Link>
        <div>
          <button
            onClick={() => {
              window.ipc.send('message', 'Hello');
            }}>
            Test IPC
          </button>
          <p>{message}</p>
        </div>{' '}
      </div>
    </React.Fragment>
  );
}
