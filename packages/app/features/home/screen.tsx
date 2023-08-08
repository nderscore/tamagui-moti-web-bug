import { Button, H1, MyComponent, Paragraph, useMedia, XStack, YStack } from '@my/ui'
import { ChevronRight, ChevronLeft, Ban } from '@tamagui/lucide-icons'
import React, { useEffect, useState } from 'react'

export function HomeScreen() {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { gtSm } = useMedia()

  useEffect(() => setMounted(true), [])

  return (
    <XStack f={1} position="relative">
      <MyComponent
        // debug
        open={(mounted && gtSm) || open}
      >
        <YStack flex={1}>
          <Paragraph>Drawer Body Top</Paragraph>
        </YStack>
        <YStack>
          <Paragraph>Drawer Body Bottom</Paragraph>
        </YStack>
      </MyComponent>
      <YStack f={1} alignSelf="stretch" jc="flex-start" ai="flex-end" p="$4" space>
        <H1>Responsive Drawer Test</H1>
        <Paragraph textAlign="right" alignSelf="stretch" $sm={{ display: 'none' }}>
          (Shrink your viewport to enable this drawer switch)
        </Paragraph>
        <Button
          size="$6"
          icon={gtSm ? Ban : open ? ChevronLeft : ChevronRight}
          circular
          onPress={() => !gtSm && setOpen((x) => !x)}
          disabled={mounted && gtSm}
        />
        <Paragraph textAlign="left" alignSelf="stretch">
          This is a demonstration of variant-based animations breaking when used in combination with
          responsive styles.
        </Paragraph>
        <Paragraph textAlign="left" alignSelf="stretch">
          This page has a drawer which is visible always on medium viewport and up.
        </Paragraph>
        <Paragraph textAlign="left" alignSelf="stretch">
          On small viewports, it is an overlay that slides in from the left and is toggled by a
          button.
        </Paragraph>
      </YStack>
    </XStack>
  )
}
