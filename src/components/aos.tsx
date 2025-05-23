// src/components/AOSInitializer.tsx
'use client';
import { useEffect } from 'react';
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSInitializer() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return null; // Não renderiza nada, só inicializa
}
