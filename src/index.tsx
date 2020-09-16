import { NativeModules } from 'react-native';

type StepcounterIosAndroidType = {
  isSupported(): Promise<boolean>;
  startStepCounter(): any;
  stopStepCounter(): any;
};

const { StepcounterIosAndroid } = NativeModules;

export default StepcounterIosAndroid as StepcounterIosAndroidType;
