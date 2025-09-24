import { Redirect, Slot } from 'expo-router';
import React from 'react';

export default function TabsLayout() {
  const isAuthaenticated = true; // Replace with actual authentication logic

  if (!isAuthaenticated) return <Redirect href="/sign-in" />;
  return <Slot />;
}
