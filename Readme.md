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
