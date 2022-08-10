/**
 * Preserves prop ordering, so that the order most closely matches the last spread objects
 * Useful for having { ...defaultProps, ...props } that ensure props ordering is always kept
 *
 *    Given:
 *      mergeProps({ a: 1, b: 2 }, { b: 1, a: 2 })
 *    The final key order will be:
 *      b, a
 *
 * Handles a couple special tamagui cases
 *   - classNames can be extracted out separately
 *   - shorthands can be expanded before merging
 */

type StringRecord = Record<string, string>

export const mergeProps = (
  a: Object,
  b: Object,
  leaveOutClassNames = false,
  inverseShorthands?: StringRecord
) => {
  const out: StringRecord = {}
  const outCns: StringRecord = leaveOutClassNames ? {} : (null as any)
  for (const key in a) {
    mergeProp(out, outCns, a, b, key, leaveOutClassNames, inverseShorthands)
  }
  for (const key in b) {
    mergeProp(out, outCns, b, undefined, key, leaveOutClassNames, inverseShorthands)
  }
  return [out, outCns] as const
}

function mergeProp(
  out: StringRecord,
  outCns: StringRecord,
  a: Object,
  b: Object | undefined,
  key: string,
  leaveOutClassNames: boolean,
  inverseShorthands?: StringRecord
) {
  const val = a[key]
  const shorthand = inverseShorthands ? inverseShorthands[key] : null
  if (b && (key in b || (shorthand && shorthand in b))) {
    return
  }
  if (shorthand) {
    key = shorthand
  }
  if (leaveOutClassNames && val?.[0] === '_') {
    outCns[key] = val
  } else {
    out[key] = val
  }
}
