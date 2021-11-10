import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  NativeModules,
  NativeEventEmitter,
} from 'react-native';
import StepcounterIosAndroid from 'react-native-stepcounter-ios-android';

export default function App() {
  const [steps, setSteps] = React.useState<number>(0);

  React.useEffect(() => {
    StepcounterIosAndroid.isSupported()
      .then((result) => {
        if (result) {
          console.log('Sensor TYPE_STEP_COUNTER is supported on this device');

          const myModuleEvt = new NativeEventEmitter(
            NativeModules.StepcounterIosAndroid
          );
          myModuleEvt.addListener('StepCounter', (data) => {
            console.log('STEPS', data.steps);
            setSteps(data.steps);
          });

          StepcounterIosAndroid.startStepCounter(4000);
        } else {
          console.log(
            'Sensor TYPE_STEP_COUNTER is not supported on this device'
          );
        }
      })
      .catch((err) => console.log(err));

    return () => StepcounterIosAndroid.stopStepCounter();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Steps: {steps}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
