import * as React from 'react';
import pageWrapper from 'landing/pages/pageWrapper/pageWrapper';
import LoginFormContainer from './loginForm/loginFormContainer';
import LoginFormHeader from './loginForm/loginFormHeader/loginFormHeader';
import { LoginContextProvider } from './loginContext/loginContext';
import * as styles from './loginPage.module.less';

const LoginPage: React.FC = () => (
  <LoginContextProvider>
    <div className={styles.div}>
      <LoginFormHeader />
      <LoginFormContainer />
    </div>
  </LoginContextProvider>
);

export default pageWrapper(LoginPage);
