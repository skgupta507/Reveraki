'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { Suspense } from 'react';

const TopProgressBar = () => {
  return (
    <Suspense>
      <ProgressBar
        height="2px"
        color="#f45c92"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </Suspense>
  );
};

export default TopProgressBar;
