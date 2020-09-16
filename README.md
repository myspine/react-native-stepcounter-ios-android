# react-native-stepcounter-ios-android

React Native Pedometer for Android and IOS

## Installation

```sh
npm install react-native-stepcounter-ios-android
```

## Usage

```js
import StepcounterIosAndroid from "react-native-stepcounter-ios-android";

// ...

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

        StepcounterIosAndroid.startStepCounter();
      } else {
        console.log(
          'Sensor TYPE_STEP_COUNTER is not supported on this device'
        );
      }
    })
    .catch((err) => console.log(err));

  return () => StepcounterIosAndroid.stopStepCounter();
}, []);

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
