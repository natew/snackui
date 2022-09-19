import { getVariable, useTheme } from '@tamagui/core'
import React from 'react'

export function themed<A extends React.FC>(Component: A) {
  const wrapped = (props: any) => {
    const theme = useTheme()
    return (
      <Component
        {...props}
        color={getVariable(
          theme[props.color] || props.color || (!props.disableTheme ? theme.color : null) || '#000'
        )}
      />
    )
  }
  return wrapped as unknown as A
}
