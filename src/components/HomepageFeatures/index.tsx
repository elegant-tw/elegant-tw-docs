import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Img: string;
  description: JSX.Element;
};


const FeatureList: FeatureItem[] = [
  {
    title: '多類別語錄',
    Img: require('@site/static/img/categories.png').default,
    description: (
      <>
        這裡收錄了各種類別相關語錄，包含日本動漫、歐美卡通、台劇等。如果厭倦了那些激勵語錄，也可以嘗試特別收集「毒雞湯」語錄。
        <br />
        <a href="https://www.flaticon.com/free-icons/category" title="category icons">Created by Freepik - Flaticon</a>
      </>
    ),
  },
  {
    title: '開放原始碼',
    Img: require('@site/static/img/open-source.png').default,
    description: (
      <>
        此專案為 Open Source，後端使用 Golang 撰寫，展示用前端以 Next.js + Typescript 呈現。
        <br />
        <a href="https://www.flaticon.com/free-icons/open-source" title="open source icons">Created by Smashicons - Flaticon</a>
      </>
    ),
  },
  {
    title: '來自台灣 🇹🇼',
    Img: require('@site/static/img/taipei-101.png').default,
    description: (
      <>
        收集繁體中文翻譯的語錄，讓大家感受繁體之美。
        <br />
        <a href="https://www.flaticon.com/free-icons/taiwan" title="taiwan icons">Created by Icongeek26 - Flaticon</a>
      </>
    ),
  },
];

function Feature({title, Img, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Img} className={styles.featureSvg} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
