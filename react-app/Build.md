Create your first build

1

Install the latest EAS CLI
EAS CLI is the command-line app that you will use to interact with EAS services from your terminal. To install it, run the command:


* npm install -g eas-cli *

You can also use the above command to check if a new version of EAS CLI is available. We encourage you to always stay up to date with the latest version.

We recommend using npm instead of yarn for global package installations. You may alternatively use npx eas-cli@latest, just remember to use that instead of eas whenever it's called for in the documentation.

2 Log in to your Expo account
If you are already signed in to an Expo account using Expo CLI, you can skip the steps described in this section. If you are not, run the following command to log in:


# eas login
You can check whether you are logged in by running eas whoami.

3 Configure the project
To configure an iOS or an Android project for EAS Build, run the following command:

# eas build:configure
If you'd like to learn more about what happens behind the scenes, you can read the build configuration process reference.

Additional configuration may be required for some scenarios:

Are you migrating an Expo managed app from "expo build"? Learn about the differences.
Does your app code depend on environment variables? Add them to your build configuration.
Is your project inside of a monorepo? Follow these instructions.
Do you use private npm packages? Add your npm token.
Does your app depend on specific versions of tools like Node, Yarn, npm, CocoaPods, or Xcode? Specify these versions in your build configuration.

4 Run a build
Build for Android Emulator/device or iOS Simulator
The easiest way to try out EAS Build is to create a build that you can run on your Android device/emulator or iOS Simulator. It's quicker than uploading it to a store, and you don't need store developer membership accounts. If you'd like to try this, read about creating an installable APK for Android and creating a simulator build for iOS.

Build for app stores
Before the build process can start for app stores, you will need to have a store developer account and generate or provide app signing credentials.

Whether you have experience with generating app signing credentials or not, EAS CLI does the heavy lifting. You can opt-in for EAS CLI to handle the app signing credentials process. Check out the steps for Android app signing credentials or iOS app signing credentials process below for more information.

After you have confirmed that you have a Google Play Store or Apple App Store account and decided whether or not EAS CLI should handle app signing credentials, you can proceed with the following set of commands to build for the platform's store:

AndroidiOS


#eas build --platform android

You can attach a message to the build by passing --message to the build command, for example, eas build --platform ios --message "Some message". The message will appear on the website. It comes in handy when you want to leave a note with the purpose of the build for your team.

Alternatively, you can use --platform all option to build for Android and iOS at the same time:

# eas build --platform all

If you have released your app to stores previously and have existing app signing credentials that you want to use, follow these instructions to configure them.

Android app signing credentials
If you have not yet generated a keystore for your app, you can let EAS CLI take care of that for you by selecting Generate new keystore, and then you are done. The keystore is stored securely on EAS servers.
If you have previously built your app with expo build:android, you can use the same credentials here.
If you want to manually generate your keystore, please see the manual Android credentials guide for more information.
iOS app signing credentials
If you have not generated a provisioning profile and/or distribution certificate yet, you can let EAS CLI take care of that for you by signing into your Apple Developer Program account and following the prompts.
If you have already built your app with expo build:ios, you can use the same credentials here.
If you want to rather manually generate your credentials, refer to the manual iOS credentials guide for more information.

5. Wait for the build to complete
By default, the eas build command will wait for your build to complete, but you can interrupt it if you prefer not to wait. Monitor the progress and read the logs by following the link to the build details page that EAS CLI prompts once the build process gets started. You can also find this page by visiting your build dashboard or running the following command:


# eas build:list
If you are a member of an organization and your build is on its behalf, you will find the build details on the build dashboard for that account.

Did your build fail? Double check that you followed any applicable instructions in the configuration step and refer to the troubleshooting guide if needed.

6. Deploy the build
If you have made it to this step, congratulations! Depending on which path you chose, you now either have a build that is ready to upload to an app store, or you have a build that you can install directly on an Android device/iOS Simulator.

Distribute your app to an app store
You will only be able to submit to an app store if you built specifically for that purpose. If you created a build for a store, learn how to submit your app to app stores with EAS Submit.

Install and run the app
You will only be able to install the app directly to your Android device/iOS Simulator if you explicitly built it for that purpose. If you built for app store distribution, you will need to upload to an app store and then install it from there (for example, from Apple's TestFlight app).

To learn how to install the app directly to your Android device/iOS Simulator, navigate to your build details page from your build dashboard and click the "Install" button.

Next steps
We walked you through the steps for creating your first build with EAS Build without going into too much depth on any particular part of the process.

When you are ready to learn more, we recommend proceeding through the Start Building section of this documentation to learn about topics such as:

Configuration with eas.json
Internal distribution
Updates
Automating submissions
Triggering builds from CI
You may also want to dig through the reference section to learn more about the topics that interest you most, such as:

Build webhooks
Build server infrastructure
How the Android and iOS build processes work