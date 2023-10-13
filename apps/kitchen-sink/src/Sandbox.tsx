// import './wdyr'

import { View } from 'react-native'
import { Text as RNText, TextInput } from 'react-native'
import { Button, Input, Square, Text, Theme, useTheme } from 'tamagui'

export const Sandbox = () => {
  return (
    <View style={{ width: '100%', height: '100%', padding: 50 }}>
      <Theme name="dark">
        <Square size={100} bc="$background" />
        <TestInner />
      </Theme>
    </View>
  )
}

const TestInner = () => {
  return null
}

// const CustomButton = styled(Button, {
//   color: 'red',
//   pressStyle: {
//     color: 'blue',
//   },
// })

// function ThemeChangeTest() {
//   const [x, setX] = useState('dark' as any)

//   return (
//     <>
//       <Button
//         title="change"
//         onPress={() => {
//           const next = x === 'dark' ? 'light' : 'dark'
//           Appearance.setColorScheme(next)
//           setX(next)
//         }}
//       />
//       <Theme name="blue">
//         <Theme name={x}>
//           <Children />
//         </Theme>
//       </Theme>
//     </>
//   )
// }

// const Children = memo(() => {
//   return (
//     <>
//       <ListItem w={200} h={200} />
//       <Square
//         // animation="bouncy"
//         // animateOnly={['backgroundColor']}
//         size={100}
//         bc="$background"
//       />
//     </>
//   )
// })
