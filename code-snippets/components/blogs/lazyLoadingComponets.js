import React, { Suspense, lazy } from 'react';

const HeaderImage = lazy(() => import('../../common/image'));
const Button = lazy(() => import('../../common/button'));

export default function Blog() {
  return (
    <Suspense fallback={<Loader />}>
      <HeaderImage />
      <Button text="Load" />
    </Suspense>
  );
}
