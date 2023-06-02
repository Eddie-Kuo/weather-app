'use client';

import { CheckCircleIcon, ExclamationIcon } from '@heroicons/react/solid';
import { Callout } from '@tremor/react';

type Props = {
  message: string;
  alert?: boolean;
};

export default function CalloutCard({ message, alert }: Props) {
  return (
    <Callout
      className='mt-4'
      title={message}
      icon={alert ? ExclamationIcon : CheckCircleIcon}
      color={alert ? 'rose' : 'teal'}
    />
  );
}
