import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import {
  IBMPlexSerif_100Thin,
  IBMPlexSerif_200ExtraLight,
  IBMPlexSerif_300Light,
  IBMPlexSerif_400Regular,
  IBMPlexSerif_500Medium,
  IBMPlexSerif_600SemiBold,
  IBMPlexSerif_700Bold,
  IBMPlexSerif_100Thin_Italic,
  IBMPlexSerif_200ExtraLight_Italic,
  IBMPlexSerif_300Light_Italic,
  IBMPlexSerif_400Regular_Italic,
  IBMPlexSerif_500Medium_Italic,
  IBMPlexSerif_600SemiBold_Italic,
  IBMPlexSerif_700Bold_Italic,
} from '@expo-google-fonts/ibm-plex-serif';

import { ScreenContent } from 'components/ScreenContent';

import './global.css';

export default function App() {
  const [fontsLoaded] = useFonts({
    IBMPlexSerif_100Thin,
    IBMPlexSerif_200ExtraLight,
    IBMPlexSerif_300Light,
    IBMPlexSerif_400Regular,
    IBMPlexSerif_500Medium,
    IBMPlexSerif_600SemiBold,
    IBMPlexSerif_700Bold,
    IBMPlexSerif_100Thin_Italic,
    IBMPlexSerif_200ExtraLight_Italic,
    IBMPlexSerif_300Light_Italic,
    IBMPlexSerif_400Regular_Italic,
    IBMPlexSerif_500Medium_Italic,
    IBMPlexSerif_600SemiBold_Italic,
    IBMPlexSerif_700Bold_Italic,
  });

  if (!fontsLoaded) {
    return null; // Or a loading screen
  }

  return (
    <>
      <ScreenContent title="Home" path="App.tsx"></ScreenContent>
      <StatusBar style="auto" />
    </>
  );
}
