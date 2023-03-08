## React Native Basics

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

### Components

- View

  > Used for building a UI. View is a container that supports layout with flexbox, style, some touch handling, and accessibility controls. View maps directly to the native view equivalent on whatever platform React Native is running on, whether that is a `UIView`, `<div>`, `android.view`, etc.

- SafeAreaView

  > SafeAreaView renders nested content and automatically applies padding to reflect the portion of the view that is not covered by navigation bars, tab bars, toolbars, and other ancestor views.

- Text

  > Used for displaying text. `<Text>` support nesting, styling and touch handling. Text also access props like, numberOfLines, onPress, etc.
  > `numberOfLines`: use for ellipsize.
  > `onPress` : make text clickable.

- Image

  > In React Native displaying different types of images, including network images, static resources, temporary local images, and images from local disk, such as the camera roll.
  > In local images use `require` to load images.
  > In network images use `uri` to load image and also set `width` and `height` props.

- Touchable

  > The `Touchable` components provide the capability to capture tapping gestures, and can display feedback when a gesture is recognized.

  1. TouchableHighlight: The view's background will be darkened when the user presses down.
  2. TouchableOpacity: used to provide feedback by reducing the opacity of the button, allowing the background to be seen through while the user is pressing down.
  3. TouchableWithoutFeedback: If you need to handle a tap gesture but you don't want any feedback to be displayed.

- Button

  > A basic button component that should render nicely on any platform.

- Alert

  > Launches an alert dialog with the specified title and message.

- Stylesheet

  > A StyleSheet is an abstraction similar to CSS StyleSheets

- Platform Specific Code

  > Detect the platform (Android, iOS or Web).
  > React Native provides two ways to organize your code and separate it by platform:

  1. Using the Platform module: React Native provides a module that detects the platform in which the app is running.
  2. Using platform-specific file extensions: React Native will detect when a file has a .ios. or .android. extension and load the relevant platform file when required from other components.

- Dimensions

  > Dimensions, it updates as the window's dimensions update. This works nicely with the React paradigm.

- Flexbox

  - flex:

    > `flex` will define how your items are going to “fill” over the available space along your main axis. Space will be divided according to each element's flex property.

  - flexDirection:
    > `flexDirection` controls the direction in which the children of a node are laid out.
    - column (default value) Align children from top to bottom.
    - row Align children from left to right.
    - column-reverse Align children from bottom to top.
    - row-reverse Align children from right to left.
