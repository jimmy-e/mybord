import * as React from 'react';
import YoutubeCard from 'shared/cards/youtubeCard/youtubeCard';
import PhantomCard from 'shared/cards/phantomCard/phantomCard';
import getYoutubeId from 'utils/getYoutubeId';
import videos from 'mockData/mockVideoList';
import * as styles from './dashboardCards.module.less';

const DashboardCards: React.FC = () => (
  <section className={styles.section}>
    {
      videos.map((videoUrl: string, index) => (
        <YoutubeCard key={`${videoUrl}-${index}`} videoId={getYoutubeId(videoUrl)} />
      ))
    }
    {
      // we create some phantom cards that do not appear visible but are rendered so that we can
      // `justify-content: center` our flexbox card content while having our last row be
      // left-aligned.
      Array(10).fill(null).map((value, index) => <PhantomCard key={`phantom-card-${index}`} />)
    }
  </section>
);

export default DashboardCards;
