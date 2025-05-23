'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
const TIMEZONE = 'Europe/Istanbul';

const AboutPage = () => {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    // Set initial time
    setTime(getTimeInTimezone(TIMEZONE));

    // Update time every second
    const intervalId = setInterval(() => {
      setTime(getTimeInTimezone(TIMEZONE));
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  function getTimeInTimezone(timezone: string): string {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone: timezone,
      hour12: true, // Use 24-hour format
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  }

  return (
    <div>
      <article className="prose">
        <h1>Now</h1>
        <p>
          This is a <a href="https://nownownow.com/about">now</a> page
        </p>
        <p>📌 Istanbul, time is {time}</p>
        <ul className="list-disc">
          <li>
            ai/ml engineer at the {' '}
            <a href="https://www.usfca.edu/arts-sciences/programs/graduate/data-science">
              kloia
            </a>
          </li>
          <li>
            writing newsletters at {' '}
            <a href="https://llmengineer.substack.com/">llmengineer</a>
          </li>
          <li>
            learning <a href="https://github.com/gpu-mode">cuda</a>
          </li>
          {/*
          <li>
            Building{' '}
            <a href="https://benneo.notion.site/project-ideas-63bc556d83a5405da1bcd89629da2a0e?pvs=4">
              cool iOS apps
            </a>{' '}
            with{' '}
            <a href="https://twitter.com/benxneo/status/1743458106032488839">
              SwiftUI
            </a>
          </li>
          */}
        </ul>
        
        <Image
          src="/images/db-banner.jpg"
          alt="Dragon Ball Banner"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
        <p>Last updated: Apr 29, 2025</p>
      </article>
    </div>
  );
};

export default AboutPage;
