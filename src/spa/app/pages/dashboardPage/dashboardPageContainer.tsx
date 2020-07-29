import * as React from 'react';
import pageWrapper from 'pages/pageWrapper';
import { USER_CARDS_QUERY, UserCard } from 'schema/card';

interface Props {
  data: {
    userCards: UserCard[];
  };
}

const DashboardPageContainer: React.FC<Props> = ({ data }) => {
  console.log(' ----- DASHBOARD DATA ----- ');
  console.log(data);
  console.log(' ----- DASHBOARD DATA ----- ');

  return (
    <div
      style={{
        alignItems: 'center',
        background: 'blue',
        display: 'flex',
        height: '15rem',
        justifyContent: 'center',
        width: '15rem',
      }}
    >
      <h1 style={{ color: 'white' }}>Dashboard Page</h1>
    </div>
  );
};

export default pageWrapper({
  Component: DashboardPageContainer,
  gqlString: USER_CARDS_QUERY,
  setHydration: false,
});
