import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const docsSections = [
  {
    icon: '🤖',
    title: 'Интеллектуальные сервисы',
    description: 'Описание платформы, модели, возможности автоматизации и примеры использования.',
    to: '/docs/intro',
  },
  {
    icon: '🏗️',
    title: 'Инфраструктура',
    description: 'Интеграция, развертывание и поддержка решений на базе ИИ.',
    to: '/docs/tutorial-basics/create-a-page',
  },
  {
    icon: '🔐',
    title: 'Безопасность и доступ',
    description: 'Управление правами, защита данных и рекомендации по безопасности.',
    to: '/docs/tutorial-basics/deploy-your-site',
  },
  {
    icon: '⚙️',
    title: 'API и интеграции',
    description: 'Документация по API, примерам и работе с SDK.',
    to: '/docs/tutorial-basics/markdown-features',
  },
];

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div>
            <p className={styles.tagline}>Документация ИИ Хаб</p>
            <Heading as="h1" className={styles.heroTitle}>
              Понимай, запускай и расширяй ИИ решения быстрее.
            </Heading>
            <p className={styles.heroText}>
              Структурированные гайды, примеры и лучшие практики для работы с ИИ.
            </p>
            <div className={styles.heroControls}>
              <Link className="button button--secondary button--lg" to="/docs/intro">
                Начать документацию
              </Link>
            </div>
          </div>
          <div className={styles.heroPanel}>
            <div className={styles.panelBadge}>Документация</div>
            <p className={styles.panelText}>Все разделы собраны в одном месте — удобно искать и быстро переходить к нужной теме.</p>
            <div className={styles.featureList}>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>📚</span>
                <div>
                  <strong>Структура</strong>
                  <span>Категории для быстрого старта и глубокого изучения.</span>
                </div>
              </div>
              <div className={styles.featureItem}>
                <span className={styles.featureIcon}>🧩</span>
                <div>
                  <strong>Примеры</strong>
                  <span>Рабочие сценарии и советы в каждой теме.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function SectionCard({icon, title, description, to}: {icon: string; title: string; description: string; to: string}) {
  return (
    <Link className={styles.sectionCard} to={to}>
      <div className={styles.sectionCardMeta}>
        <span className={styles.sectionIcon}>{icon}</span>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      <span className={styles.sectionArrow}>→</span>
    </Link>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout title="Документация ИИ Хаб" description="Документация ИИ Хаб">
      <HomepageHeader />
      <main className={styles.mainContent}>
        <div className="container">
          <section className={styles.sectionGridWrapper}>
            <div className={styles.sectionHeading}>
              <Heading as="h2">Разделы документации</Heading>
              <p>Выберите направление и переходите к подробным инструкциям.</p>
            </div>
            <div className={styles.sectionGrid}>
              {docsSections.map((item) => (
                <SectionCard key={item.title} {...item} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
