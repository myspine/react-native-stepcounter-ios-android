import { NativeModules } from 'react-native';

type StepcounterIosAndroidType = {
  multiply(a: number, b: number): Promise<number>;
};

const { StepcounterIosAndroid } = NativeModules;

export default StepcounterIosAndroid as StepcounterIosAndroidType;
