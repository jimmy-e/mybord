import * as React from 'react';
import logo from 'assets/logo/mb.png';
import * as styles from './navigationLogo.module.less';

const NavigationLogo: React.FC = () => (
  <section className={styles.section}>
    <img alt="MyBord logo" className={styles.img} src={logo} />
  </section>
);

export default NavigationLogo;
