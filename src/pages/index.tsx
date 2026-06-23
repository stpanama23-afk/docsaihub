import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroTextBlock}>
            <p className={styles.tagline}>ИИ Хаб</p>
            <Heading as="h1" className={styles.heroTitle}>
              Платформа с ИИ-агентами для реальной работы
            </Heading>
            <p className={styles.heroText}>
              Здесь собрана документация по платформе ИИ Хаб — от базовых сценариев до продвинутых рабочих процессов с агентами, помощниками и автоматизацией.
            </p>
            <div className={styles.heroControls}>
              <Link className="button button--primary button--lg" to="/docs/intro">
                Документация
              </Link>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.logoShell}>
              <img src="/docsaihub/img/ai-robot.svg" alt="Логотип ИИ Хаб" className={styles.logoImage} />
            </div>
            <div className={styles.heroCaption}>
              <strong>ИИ Хаб</strong>
              <span>Набор интеллектуальных агентов для помощи в работе, анализе и автоматизации задач.</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout title="Документация ИИ Хаб" description="Документация ИИ Хаб">
      <HomepageHeader />
    </Layout>
  );
}
