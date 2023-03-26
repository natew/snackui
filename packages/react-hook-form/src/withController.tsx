import { forwardRef } from 'react'
import { Controller, ControllerRenderProps, FieldValues } from 'react-hook-form'

import { WithControllerProps } from './types'

export function withController<TProps, TFieldValues extends FieldValues = FieldValues>(
  Component: React.JSXElementConstructor<TProps>,
  mapProps: Partial<Record<keyof ControllerRenderProps, keyof TProps>> = {}
) {
  return forwardRef(function controlled<Values extends TFieldValues = TFieldValues>(
    props: WithControllerProps<TProps, Values>,
    ref
  ) {
    const { name, rules, shouldUnregister, defaultValue, ...propsComponent } = props

    return (
      <Controller
        name={name}
        rules={rules}
        shouldUnregister={shouldUnregister}
        defaultValue={defaultValue}
        render={({ field: { ref: innerRef, ...field } }) => {
          const propsMapped = Object.keys(field).reduce((acc, keyFrom) => {
            const keyTo = mapProps[keyFrom]
            const propFrom = field[keyFrom]
            acc[keyTo ?? keyFrom] = propFrom
            return acc
          }, {})
          return <Component ref={ref} {...(propsComponent as TProps)} {...propsMapped} />
        }}
      />
    )
  })
}
