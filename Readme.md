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
