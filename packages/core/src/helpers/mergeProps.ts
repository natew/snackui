/**
 * Preserves prop ordering, so that the order most closely matches the last spread objects
 * Useful for having { ...defaultProps, ...props } that ensure props ordering is always kept
 *
 *    Given:
 *      mergeProps({ a: 1, b: 2 }, { b: 1, a: 2 })
 *    The final key order will be:
 *      b, a
 */

export const mergeProps = (
  a: Object,
  b: Object,
  leaveOutClassNames = false,
  inverseShorthands?: Record<string, string>
) => {
  const out: Record<string, string> = {}
  const outCns: Record<string, string> = leaveOutClassNames ? {} : (null as any)

  for (let key in a) {
    if (inverseShorthands) {
      key = inverseShorthands[key] || key
    }
    if (!(key in b)) {
      if (leaveOutClassNames && a[key]?.[0] === '_') {
        outCns[key] = a[key]
      } else {
        out[key] = a[key]
      }
    }
  }

  for (let key in b) {
    if (inverseShorthands) {
      key = inverseShorthands[key] || key
    }
    if (leaveOutClassNames && b[key]?.[0] === '_') {
      outCns[key] = b[key]
    } else {
      out[key] = b[key]
    }
  }

  return [out, outCns] as const
}
