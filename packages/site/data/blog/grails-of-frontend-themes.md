The Grails of Frontend pt 1: Themes

On the surface, theming seems straightforward. Define some colors, split them into similarly named scales within "dark" and "light", and tada.

Unfortunately, like all things frontend, themes are actually a neverending pit of complexity that with the subtlest of variation will lead you either towards disaster or paradise. Let's map out a few paths to disaster, and at least one to paradise.

But first, what is an ideal theme system?

1. Allows light and dark themes.
1. Allows re-theming components without changing their internals.
2. Allows type-safe colors that are easy to access and share between themes.
4. Allows nesting - both on definition side and on usage side
    1. For definition: "**blue** dark" and "**blue** light" are sub-themes.
    2. On the usage side, allowing a <Theme blue> inside <Theme dark> or light.

Let's put it all together into a simple-enough demo:

```tsx
<Theme name="dark">
  <Stack backgroundColor="$background">
    <Button>Dark  button</Button>
    <Theme name="blue">
      <Button>
        Dark blue button
      </Button>
    </Theme>
  </Stack>
</Theme>
```

If you change `dark` to `light`, you now have a light theme, with a light blue button. A few things are going on here:

- We have a Stack with a background that ideally is set to our theme value `background`
- We have a Button that should fit nicely with the theme, standing out from `background`

But how do we define Button? There's some interesting trade-offs you run into immediately. Let's work our way up from "most naive" to "least naive" ways to define a button.

**Most Naive**

```tsx
const MostNaiveTheme = {
  blue: {
    blue0: 'darkestblue',
    blue1: 'darkblue',
    blue2: 'blue',
    blue3: 'lightblue',
    blue3: 'lightestblue',
  }
}

const Button = styled(Stack, {
  backgroundColor: '$blue2',
})
```
