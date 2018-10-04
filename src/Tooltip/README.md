# Tooltip
To implement Tooltip component into your project you'll need to add the import:
```jsx
import Tooltip from "@kiwicom/orbit-components/lib/Tooltip";
```
After adding import into your project you can use it simply like:
```jsx
<Tooltip tip="Your message">
  <Airplane />
</Tooltip>
```

## Props
Table below contains all types of the props available in the Tooltip component.

| Name          | Type                  | Default         | Description                      |
| :------------ | :-------------------- | :-------------- | :------------------------------- |
| dataTest      | `string`              |                 | Optional prop for testing purposes.
| children      | `React.Node`          |                 | The content where the Tooltip belongs.
| message       | `React.Node`          |                 | The message to display in the Tooltip.
| size          | [`enum`](#enum)       |                 | The maximum possible size of the Tooltip.
| inline        | `boolean`             |                 | If `true`, the container around children will have `display: inline-flex`, otherwise `display: block`.
| closeText     | `string`              |                 | The test of the close button to display on mobile devices.

## Functional specs
* The Tooltip's position and arrow alignment is automatically calculated whenever event `onMouseEnter`, `onFocus` or `onClick` fires.

* For mobile devices, the user needs to click on the children to open the Tooltip.

