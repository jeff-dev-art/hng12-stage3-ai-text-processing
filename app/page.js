'use client';
import Main from '@/components/Main';
import { useState } from 'react';

export default function Home() {
  const [data, setData] = useState([]);

  return (
    <>
      <Header setData={setData} />
      <Main setData={setData} data={data} />
      <Footer />
    </>
  );
}
