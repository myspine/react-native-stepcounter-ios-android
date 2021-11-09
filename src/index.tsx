import { NativeModules } from 'react-native';

type StepcounterIosAndroidType = {
  isSupported(): Promise<boolean>;
  startStepCounter(delayMs: number): any;
  stopStepCounter(): any;
};

const { StepcounterIosAndroid } = NativeModules;

export default StepcounterIosAndroid as StepcounterIosAndroidType;
