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

  - justifyContent:

    > `justifyContent` describes how to align children within the main axis of their container.

    - flex-start (default value) Align children of a container to the start of the container's main axis.
    - flex-end Align children of a container to the end of the container's main axis.
    - center Align children of a container in the center of the container's main axis.
    - space-between Evenly space off children across the container's main axis, distributing the remaining space between the children.
    - space-around Evenly space off children across the container's main axis, distributing the remaining space around the children.
    - space-evenly Evenly distribute children within the alignment container along the main axis.

  - alignItems:

    > `alignItems` describes how to align children along the cross axis of their container.

    - stretch (default value) Stretch children of a container to match the height of the container's cross axis.
    - flex-start Align children of a container to the start of the container's cross axis.
    - flex-end Align children of a container to the end of the container's cross axis.
    - center Align children of a container in the center of the container's cross axis.
    - baseline Align children of a container along a common baseline. Individual children can be set to be the reference baseline for their parents.

  - alignSelf:

    > `alignSelf` has the same options and effect as alignItems but instead of affecting the children within a container, apply this property to a single child to change its alignment within its parent. `alignSelf` overrides any option set by the parent with 'alignItems'.

  - flexWrap:

    > The `flexWrap` property is set on containers and it controls what happens when children overflow the size of the container along the main axis. By default, children are forced into a single line (which can shrink elements). If wrapping is allowed, items are wrapped into multiple lines along the main axis if needed. When wrapping lines, `alignContent` can be used to specify how the lines are placed in the container.

  - alignContent:

    > `alignContent` defines the distribution of lines along the cross-axis. This only has effect when items are wrapped to multiple lines using flexWrap.

    - flex-start (default value) Align wrapped lines to the start of the container's cross axis.
    - flex-end Align wrapped lines to the end of the container's cross axis.
    - stretch (default value when using Yoga on the web) Stretch wrapped lines to match the height of the container's cross axis.
    - center Align wrapped lines in the center of the container's cross axis.
    - space-between Evenly space wrapped lines across the container's cross axis, distributing the remaining space between the lines.
    - space-around Evenly space wrapped lines across the container's cross axis, distributing the remaining space around the lines.

  - flexBasis:

    > `flexBasis` is an axis-independent way of providing the default size of an item along the main axis. `flexBasis` map width or height property.

  - flexGrow:

    > `flexGrow` describes how any space within a container should be distributed among its children along the main axis. A container will distribute any remaining space according to the flex grow values specified by its children. To fill available space

  - flexShrink:

    > `flexShrink` describes how to shrink children along the main axis in the case in which the total size of the children overflows the size of the container on the main axis.

  - absolute and relative positioning:

    > The position type of an element defines how it is positioned within its parent.

    - relative (default value): An element is positioned relatively. This means an element is positioned according to the normal flow of the layout, and then offset relative to that position based on the values of top, right, bottom, and left. The offset does not affect the position of any sibling or parent elements. It moves the item relative to current position without changing the layout around them.

    - absolute: An element doesn't take part in the normal layout flow. It is instead laid out independent of its siblings. The position is determined based on the top, right, bottom, and left values. It moves the item relative to its parent and laied out around it.

- Border

  - borderWidth
  - borderRadius
  - borderColor

- Shadows

  - elevation: number -> Use elevation for android only.
    > Below properties only support on iOS
  - shadowRadius: number
  - shadowOpacity: number
  - shadowOffset: {width: number, height: number}

- Padding and Margins

  - Padding: Is the space inside the component. Setting `padding` has the same effect as setting each of `paddingTop`, `paddingBottom`, `paddingLeft`, and `paddingRight`.

  - Margins: Is the space around the component. Setting `margin` has the same effect as setting each of `marginTop`, `marginLeft`, `marginBottom`, and `marginRight`.

- Styling Text

  - fontSize: number
  - fontFamily -> based Platform specific
  - fontWeight: string
  - color: string
  - fontStyle: string

- Encapsulate Style

  > Encapsulate all the styles of Text inside custom components.

- Icons

  - @expo/vector-icons -> AntDesign, Feather, FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons

- FlatList

> To display a list of items from an API. React Native component that allows you to render lists with zero hassle and minimal code.

`FlatList Syntax`

```jsx
import {FlatList} from "react-native"

<FlatList
  data={
    // The array to render, this can be JSON data from an API
  }
  keyExtractor={
    // Extract keys for each item in the array, retrieve a unique key for each item in the array
  }
  renderItem={
    // each item from the array will be rendered here or to render the items from the list
  }
/>;
```
