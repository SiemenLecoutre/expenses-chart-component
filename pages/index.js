import Head from 'next/head';
import ChartRow from '../components/chartRow';
import styles from '../styles/Home.module.css';
import data from '../data.json';
import { useEffect, useState } from 'react';

export default function Home() {
  const [today, setToday] = useState();

  useEffect(() => {
    const date = new Date();
    setToday(date.getDay());
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* Upper card */}
        <div className={styles.card}>
          <div className={styles.container}>
            <p className={styles.balanceText}>My Balance</p>
            <p className={styles.balance}>$921.48</p>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={styles.logo} src="/images/logo.svg" alt="logo" />
        </div>
        {/* Lower card */}
        <div className={styles.card2}>
          <div className={styles.container}>
            <h1 className={styles.title}>Spending - Last 7 days</h1>
            {/* Column ? */}
            <div className={styles.chart}>
              {data.map((i, index) => (
                <ChartRow
                  key={i.day}
                  today={today}
                  day={i.day}
                  index={index}
                  amount={i.amount}
                />
              ))}
            </div>
            <hr className={styles.divider}></hr>
            {/* Columns */}
            <div className={styles.lowerInformation}>
              <div>
                <p className={styles.lightText}>Total this week</p>
                <p className={styles.totalNum}>$478.33</p>
              </div>
              <div>
                <p className={styles.percentage}>+2.4%</p>
                <p className={styles.lightText}>from last month</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
