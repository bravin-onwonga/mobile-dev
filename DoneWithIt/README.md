### React Native course

This is a simple two screen app as I start my mobile development journey.
I have followed this tutorial from Mosh [Introduction to React-Native](https://www.youtube.com/watch?v=0-S5a0eXPoc&t=4513s)

## Note

- I am using expo as was in the course
- I am not yet sure how everything is rolling as I had some issues with the conflicting versions of react-native, expo and node

  > I ended up using:
  >
  > - node -v : _v20.19.5_
  > - expo : _50.0.21_
  > - react-native: _0.73.6_
  >   Refer to the **_package.json_** file for more information

- This app was solely tested on Android
- Find the app logic in the **app** directory

## How to run

- You can use an **_Android Emulator_** but since I used expo I downloaded the **_Expo Go_** app on my phone
- use the command:

```
npx expo start --tunnel
```

## OR

```
npx expo start --create
```

- scan the QR code or use the link provide in the ```Expo Go``` app to test
- for ```Android Emulator``` press ```a``` and make sure ```adb``` is setup
