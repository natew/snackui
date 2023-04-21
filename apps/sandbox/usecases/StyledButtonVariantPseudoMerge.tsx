import { Button, styled } from 'tamagui'

const StyledButton = styled(Button, {
  pressStyle: {
    scale: 0.5,
  },

  variants: {
    reddish: {
      true: {
        pressStyle: {
          backgroundColor: 'red',
        },
      },
    },
  },
})

export default () => (
  <>
    <StyledButton id="test" reddish>
      test
    </StyledButton>
    <StyledButton id="animated" reddish animation="quick">
      test
    </StyledButton>
  </>
)
