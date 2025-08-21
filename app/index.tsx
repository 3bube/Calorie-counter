import React, { useEffect } from 'react';
import { router } from 'expo-router';

export default function IndexScreen() {
  useEffect(() => {
    // Redirect to onboarding on app launch
    router.replace('/onboarding');
  }, []);

  return null;
}