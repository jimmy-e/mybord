import * as React from 'react';

type FormStatus = 'forgot' | 'login' | 'signUp';
type SignUpStatus = 'duplicate email'
| 'duplicate username'
| 'invalid username'
| 'weak password';

interface LoginState {
  alertMessage: string;
  formStatus: FormStatus;
  isAuthenticationWaiting: boolean;
  setAlertMessage: (alertMessage: string) => void;
  setFormStatus: (formStatus: FormStatus) => void;
  setIsAuthenticationWaiting: (isAuthenticationWaiting: boolean) => void;
  setSignUpStatus: (loginStatus: SignUpStatus) => void;
  setUserHasAgreedToTerms: (userHasAgreedToTerms: boolean) => void;
  signUpStatus: SignUpStatus;
  userHasAgreedToTerms: boolean;
}

const initialLoginState: LoginState = {
  alertMessage: null,
  formStatus: 'login',
  isAuthenticationWaiting: false,
  setAlertMessage: () => {},
  setFormStatus: () => {},
  setIsAuthenticationWaiting: () => {},
  setSignUpStatus: () => {},
  setUserHasAgreedToTerms: () => {},
  signUpStatus: null,
  userHasAgreedToTerms: false,
};

const LoginContext = React.createContext<LoginState>(initialLoginState);

export const LoginContextProvider = (props: object): React.ReactElement => {
  const [alertMessage, setAlertMessage] = React.useState<string>(null);
  const [formStatus, setFormStatusFn] = React.useState<FormStatus>('login');
  const [isAuthenticationWaiting, setIsAuthenticationWaiting] = React.useState<boolean>(false);
  const [signUpStatus, setSignUpStatus] = React.useState<SignUpStatus>(null);
  const [userHasAgreedToTerms, setUserHasAgreedToTerms] = React.useState<boolean>(false);

  const setFormStatus = (status: FormStatus): void => {
    setAlertMessage(null);
    setFormStatusFn(status);
  };

  return (
    <LoginContext.Provider
      value={{
        alertMessage,
        formStatus,
        isAuthenticationWaiting,
        setAlertMessage,
        setFormStatus,
        setIsAuthenticationWaiting,
        setSignUpStatus,
        setUserHasAgreedToTerms,
        signUpStatus,
        userHasAgreedToTerms,
      }}
      {...props}
    />
  );
};

export const useLoginContext = (): LoginState => React.useContext(LoginContext);
