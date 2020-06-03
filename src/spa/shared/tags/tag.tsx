import * as React from 'react';
import IconButton from 'icons/iconButton/iconButton';
import Typography from 'typography/typography';
import * as styles from './tag.module.less';

interface Props {
  label: string;
}

const Tag: React.FC<Props> = ({ label }) => (
  <div className={styles.div}>
    <Typography
      color="white"
      size="one"
      text={label}
      weight="light"
    />
    <IconButton
      iconName="close"
      onClick={() => console.log('delete tag')}
      size={16}
    />
  </div>
);

export default Tag;
