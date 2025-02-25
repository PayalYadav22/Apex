import Layout from '@/components/layout/Layout';
import { ReactLenis } from 'lenis/react';

/**
 * @copyright 2025 Payal Yadav
 * @license Apache-2.0
 */

const App = () => {
  return (
    <ReactLenis root>
      <div className='relative isolate overflow-hidden'>
        <Layout />
      </div>
    </ReactLenis>
  );
};

export default App;
