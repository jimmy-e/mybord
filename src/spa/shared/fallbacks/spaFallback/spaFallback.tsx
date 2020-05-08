import * as React from 'react';
import Spinner from 'fallbacks/spinner/spinner';
import * as styles from './spaFallback.module.less';

// This component is used to render a fallback for the entire spa when the spa is loading /
// initializing.
const SpaFallback: React.FC = () => (
  <main className={styles.main}>
    <div className={styles.div}>
      <Spinner />
    </div>
  </main>
);

export default SpaFallback;
