'use client';

import CityPicker from '@/components/CityPicker';
import { Card, Divider, Subtitle, Text } from '@tremor/react';

export default function Home() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-400 to-slate-700 p-10 flex flex-col justify-center'>
      <Card className='max-w-4xl mx-auto'>
        <Text className='text-5xl font-bold text-center mb-10'>Weather Ai</Text>
        <Subtitle className='text-xl text-center'>
          Powered by OpenAI, Next.js 13.4, TailwindCSS, Tremor, and More!{' '}
        </Subtitle>

        <Divider className='my-10' />
        <Card className='bg-gradient-to-br from-slate-400 to-slate-700'>
          <CityPicker />
        </Card>
      </Card>
    </div>
  );
}
