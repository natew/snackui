// import '../lib/wdyr'

import { ThemeTint, ThemeTintAlt } from '@tamagui/logo'
import { Header } from '@tamagui/site/components/Header'
import { SearchProvider } from '@tamagui/site/components/Search'
import { Button, Square } from 'tamagui'

import { getDefaultLayout } from '../lib/getDefaultLayout'

function TestPage() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        flex: 1,
      }}
    >
      {/* <Square animation="quick" o={1} enterStyle={{ o: 0 }} size={200} bc="$color" /> */}
    </div>
  )
}

export default TestPage

const DebugNestedThemeChange = () => {
  return (
    <ThemeTint debug="visualize">
      <ThemeTintAlt debug="visualize">
        {/* <Square theme="active" debug="visualize" size={100} bc="$color5" /> */}
      </ThemeTintAlt>
    </ThemeTint>
  )
}

TestPage.getLayout = (page) => {
  return (
    <>
      <SearchProvider>
        <Header minimal />
        {page}
      </SearchProvider>
    </>
  )
}

// export async function getStaticProps() {
//   return {
//     revalidate: 0.00001,
//     props: {},
//   }
// }
