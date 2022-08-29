import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

const data = [
  'hell',
  'boy',
  'there',
  'you',
  'are',
  'is',
  'it',
  'write',
  'hell',
  'boy',
  'there',
  'you',
  'are',
  'is',
  'it',
  'write',
  'hell',
  'boy',
  'there',
  'you',
  'are',
  'is',
  'it',
  'write',
];

const Home: NextPage = () => {
  const [filterData, setFilterData] = useState();
  const [query, setQuery] = useState('');
  const [finalValue, setFinalValue] = useState('');
  const blank = query === '';
  const filteredData = blank ? [] : data.filter((name) => name.includes(query));

  const keyDownHandler = (e) => {
    if (e.key === 'Enter') {
      setFinalValue(query);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <section>
          <h1>hello</h1>
          <div className="relative">
            <input
              onKeyDown={keyDownHandler}
              className="block w-full border-0 border-b border-transparent bg-gray-50 focus:border-indigo-600 focus:ring-0 sm:text-sm"
              type="text"
              onChange={(e) => setQuery(e.target.value)}
            />
            <div className="absolute  inset-x-0 mt-1 rounded-md h-28 overflow-y-auto">
              {filteredData.map((item) => {
                return (
                  <div
                    onClick={() => setQuery(item)}
                    className="border py-1 text-left pl-2 hover:bg-indigo-500 hover:text-white"
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  );
};

export default Home;
