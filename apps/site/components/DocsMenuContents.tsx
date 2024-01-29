import uFuzzy from '@leeoniya/ufuzzy'
import { docsRoutes } from '@lib/docsRoutes'
import { useStore } from '@tamagui/use-store'
import * as React from 'react'
import { Input, Paragraph, Separator, Spacer, XStack } from 'tamagui'

import { useRouter } from 'next/router'
import { DocsItemsStore, DocsRouteNavItem } from './DocsRouteNavItem'
import { NavHeading } from './NavHeading'
import { useDocsMenu } from './useDocsMenu'

const fuz = new uFuzzy({})

const allItems = docsRoutes.flatMap((section, sectionIndex) =>
  section.pages?.map((page, index) => ({ page, section, sectionIndex, index }))
)
const allItemsStrings = allItems.map((s) =>
  `${s?.page.title || ''} ${s?.section?.title || ''}`.trim()
)

export const DocsMenuContents = React.memo(function DocsMenuContents({
  inMenu,
}: { inMenu?: boolean }) {
  const store = useStore(DocsItemsStore)
  const router = useRouter()
  const { currentPath } = useDocsMenu()
  const [items, setItems] = React.useState(allItems)
  const isFiltered = items !== allItems

  return (
    <>
      <Input
        size="$4"
        w="100%"
        bw={0}
        bbw={0.5}
        textContentType="none"
        autoCapitalize="none"
        autoCorrect={false}
        br="$0"
        // @ts-ignore
        name="Search"
        dsp="none"
        $pointerFine={{
          dsp: 'flex',
        }}
        borderColor="$color4"
        backgroundColor="transparent"
        focusStyle={{
          outlineWidth: 0,
          borderColor: '$color6',
        }}
        hoverStyle={{
          borderColor: '$color6',
        }}
        autoComplete="off"
        placeholder="Search for friend to chat"
        // @ts-ignore
        placeholderTextColor="transparent"
        onKeyPress={(e) => {
          const event = e.nativeEvent
          if (event.key === 'Escape') {
            // closePopover()
          }
          if (event.key === 'ArrowUp') {
            e.preventDefault()
            store.index = Math.max(0, store.index - 1)
          }
          if (event.key === 'ArrowDown') {
            e.preventDefault()
            store.index = (store.index + 1) % (items.length - 1)
          }
          if (event.key === ' ' || event.key === 'Enter') {
            e.preventDefault()
            router.push(items[store.index].page?.route)
          }
        }}
        onChangeText={(next) => {
          if (!next) {
            setItems(allItems)
            return
          }
          const [indexes] = fuz.search(allItemsStrings, next)
          if (!indexes?.length) {
            setItems(allItems)
            return
          }
          const found = indexes?.map((i) => allItems[i])
          setItems(found || allItems)
          store.index = 0
        }}
      />

      <Spacer />

      <div style={{ width: '100%' }} tabIndex={0} role="listbox">
        {React.useMemo(() => {
          return (
            <>
              {items.map((item, index) => {
                if (!item) return null

                const { section, page } = item

                const contents = (
                  <DocsRouteNavItem
                    inMenu={inMenu}
                    href={page.route}
                    active={currentPath === page.route}
                    pending={page['pending']}
                    key={`${page.route}${index}`}
                    index={index}
                  >
                    {page.title}
                  </DocsRouteNavItem>
                )

                const lastItem = items[index - 1]
                const nextItem = items[index + 1]
                const isEndingSection = !nextItem || nextItem.section !== item.section
                const isStartingSection = !lastItem || item.section !== lastItem.section

                if (isEndingSection) {
                  return (
                    <React.Fragment key={`${page.route}${index}`}>
                      {contents}
                      {!isFiltered && <Spacer />}
                    </React.Fragment>
                  )
                }

                if (isStartingSection) {
                  return (
                    <React.Fragment key={`${page.route}${index}`}>
                      {section.label ? <NavHeading>{section.label}</NavHeading> : null}
                      {section.title && (
                        <XStack py="$2" px="$2" ai="center" gap="$3">
                          <Paragraph size="$4">{section.title}</Paragraph>
                          <Separator />
                        </XStack>
                      )}
                      {contents}
                    </React.Fragment>
                  )
                }

                return contents
              })}
            </>
          )
        }, [items, currentPath])}
      </div>
    </>
  )
})
