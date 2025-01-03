import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React from "react";

const MainLayout = () => {
  const [loaded] = useFonts({
    'GeneralSans-400': require('../assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-600': require('../assets/fonts/GeneralSans-Bold.otf'),
    'GeneralSans-700': require('../assets/fonts/GeneralSans-Semibold.otf')
  });

  if(!loaded) return null;

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default MainLayout;
