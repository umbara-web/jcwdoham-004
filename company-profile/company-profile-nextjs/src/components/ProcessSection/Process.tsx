'use client';

import React from 'react';
import SectionWrapper from '../section-wrapper';
import Typography, { Subtitle, Title } from '../ui/Typography';
import Image from 'next/image';
import { icons, themeAsConst } from '../../constants';
import { useTheme } from 'next-themes';
import clsx from 'clsx';
import type { ProcessStepProps } from './Process.types';
import { processSteps } from './Process.constants';

function ProcessStep({ id, title, description, align }: ProcessStepProps) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  const { resolvedTheme } = useTheme();
  const chevronIcon = !mounted
    ? icons.chevronUp
    : resolvedTheme === themeAsConst.dark
    ? icons.chevronDark
    : icons.chevronUp;

  return (
    <div
      className={clsx(
        'flex gap-4 items-center w-full lg:relative',
        align === 'right' && 'justify-end'
      )}
    >
      {/* Number circle */}
      <div className='z-0 size-10 lg:size-12 lg:max-h-12 flex-none object-number max-h-10 bg-primary rounded-full aspect-[1/1] text-white grid place-items-center text-center leading-none font-semibold lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2'>
        {id}
      </div>

      {/* Accordion */}
      <div
        className={clsx(
          'relative grow flex w-full rounded-2xl border-base-border bg-base-50 dark:bg-base-950 dark:border-base-800 p-4 lg:p-6 justify-between lg:flex-none lg:basis-45/100'
        )}
      >
        <details
          className='cursor-pointer group w-full'
          open={isOpen}
          onToggle={(e) => setIsOpen((e.target as HTMLDetailsElement).open)}
        >
          <summary className='flex justify-between font-bold text-md leading-md lg:text-xl lg:leading-xl'>
            <Typography weight='bold' size={{ base: 'md', lg: 'xl' }}>
              {title}
            </Typography>
            <Image
              id='chevron-up'
              src={chevronIcon}
              alt=''
              className={clsx(
                'w-6 h-6 group-open:block transition-transform duration-300 ease-in-out',
                !isOpen && 'rotate-180'
              )}
              width={24}
              height={24}
            />
          </summary>
          <Typography
            weight='normal'
            size={{ base: 'sm', lg: 'md' }}
            className='text-base-400'
          >
            {description}
          </Typography>
        </details>
      </div>
    </div>
  );
}

export default function Process() {
  return (
    <SectionWrapper
      id='process'
      className='flex flex-col gap-6 py-1 lg:py-2 lg:gap-16'
    >
      <div className='flex flex-col gap-3 text-center mb-12'>
        <Title>Our Process</Title>
        <Subtitle>
          Clear steps. Smart execution. Results you can count on.
        </Subtitle>
      </div>

      <div className='relative flex flex-col gap-4'>
        {/* <!-- Vertical Line --> */}
        <div className='absolute z-0 border-r-[1px] border-base-border dark:border-base-800 h-[calc(100%-94px)] left-[calc(40px/2)] lg:left-1/2 top-8'></div>

        {processSteps.map((step) => (
          <ProcessStep key={step.id} {...step} />
        ))}
      </div>
    </SectionWrapper>
  );
}
