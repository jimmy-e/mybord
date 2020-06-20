import * as React from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import Icon from 'icons/icon/icon';
import Typography from 'typography/typography';
import { LOGOUT_USER } from 'schema/user';
import { useAuthenticationContext } from 'context/authenticationContext';
import * as styles from './headerProfile.module.less';

const HeaderProfilePopOverContent: React.FC = () => {
  const [LogoutUserQuery] = useLazyQuery(LOGOUT_USER);
  const { setAuthenticationStatus } = useAuthenticationContext();

  const handleClick = async (): Promise<void> => {
    await LogoutUserQuery();
    setAuthenticationStatus(false);
  };

  const AboutIconContent: React.FC = () => <Icon color="blue" iconName="about" size={18} />;
  const LogoutIconContent: React.FC = () => <Icon color="blue" iconName="logout" size={18} />;

  return (
    <ul className={styles.ul}>
      <li>
        <Typography
          Content={LogoutIconContent}
          onClick={handleClick}
          size="three"
          text="Logout"
        />
      </li>
      <li>
        <Typography
          Content={AboutIconContent}
          link="trending"
          size="three"
          text="About MyBord"
        />
      </li>
    </ul>
  );
};

export default HeaderProfilePopOverContent;
