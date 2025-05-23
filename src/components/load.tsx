// src/components/Loader.tsx
'use client';

import { useEffect, useState } from 'react';
import styles from './Loader.module.css';

export default function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className={styles.loaderContainer}>
      <div className={styles.logoCircle}>
        <span className={styles.logoText}>code4all</span>
      </div>
    </div>
  );
}
