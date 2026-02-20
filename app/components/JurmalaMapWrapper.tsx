'use client';

import dynamic from 'next/dynamic';

const JurmalaMap = dynamic(() => import('./JurmalaMap'), { ssr: false });

export default function JurmalaMapWrapper({ language }: { language: 'ru' | 'en' | 'lv' }) {
  return <JurmalaMap language={language} />;
}
