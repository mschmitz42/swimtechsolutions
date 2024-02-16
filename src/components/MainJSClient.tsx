"use client"

import { useEffect } from 'react';

export default function MainJSClient() {
  useEffect(() => {
    require('../assets/js/main.js');
  }, []);

  return null;
}

