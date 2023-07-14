import { expect, test } from '@playwright/test'

import { getStyles } from './utils'

test.beforeEach(async ({ page }) => {
  await page.goto('/?test=StyledVariantTextColor', { waitUntil: 'networkidle' })
})

test(`sets text colors with variants + theme`, async ({ page }) => {
  const defaultStyles = await getStyles(page.getByTestId('default').first())
  const defaultStylesFlat = await getStyles(page.getByTestId('default-flat').first())

  // $color
  expect(defaultStyles.color).toBe('rgb(23, 23, 23)')
  expect(defaultStylesFlat.color).toBe(defaultStyles.color)

  const activeStyles = await getStyles(page.getByTestId('active').first())
  const activeStylesFlat = await getStyles(page.getByTestId('active-flat').first())

  // $color10
  expect(activeStyles.color).toBe('rgb(0, 106, 220)')
  expect(activeStylesFlat.color).toBe(activeStyles.color)
})
