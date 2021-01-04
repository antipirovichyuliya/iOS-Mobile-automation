## iOS Mobile automation

using:
```
appium (XCUITest)
webdriverIO
jasmine
allure
Xcode (for application building and simulators)
```

## Requirements

1. NodeJS installed globally in the system
2. JAVA and Android (sdk) installed, JAVA_HOME and ANDROID_HOME environment variables set
3. Appium installed (checked by appium-doctor)
4. Xcode installed
5. Command line tool xcrun available (Xcode -> menu at the top -> Preferences -> Locations tab 
-> select Command Line Tools (for instance, Xcode 10.3))
6. Open source iOS application code or ready build (file.app)

## Setup
```
npm install
```

## Run tests

Xcode sumulator (iPhone 7 (by default), iPhone Plus 7 or iPhone XR) 
and Appium server should be started

```
npm run test
```

## Reporting

Allure is used for tests results' reporting. Report is available on http://127.0.0.1:8084
```
npm run generate-report
npm run launch-report
```
