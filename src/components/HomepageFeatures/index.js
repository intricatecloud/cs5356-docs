import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Find Resources',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Most of the course content and resources to help you build your project will be available here.
      </>
    ),
  },
  {
    title: 'Share what you find',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        We'll use the blog/ for folks to share more context for discussions that happen via Canvas
      </>
    ),
  },
  {
    title: 'Powered by Github',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        This website is automatically updated and deployed whenever a new change is merged in. Go ahead and give it a shot!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
