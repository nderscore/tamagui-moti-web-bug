import { styled, YStack } from 'tamagui'

export const MyComponent = styled(YStack, {
  name: 'MyComponent',

  flexShrink: 0,
  alignSelf: 'stretch',
  backgroundColor: '$backgroundStrong',
  borderRightColor: '$borderColor',
  borderRightWidth: '$0.25',
  position: 'absolute',
  padding: '$2',
  width: '$20',
  height: '100%',
  top: '$0',
  left: '$0',
  zIndex: 1,

  // comment this line out to see expected styles working:
  animation: 'quick',
  //

  $gtSm: {
    height: 'auto',
    position: 'relative',
  },

  variants: {
    open: {
      true: {
        x: '$0',
      },
      false: {
        x: '-100%',
        $gtSm: {
          x: '$0',
        },
      },
    },
  } as const,

  defaultVariants: {
    open: false,
  },
})
