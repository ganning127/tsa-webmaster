import { Box, Link, SimpleGrid, SimpleGridProps, Stack } from '@chakra-ui/react'
import * as React from 'react'
import { FooterHeading } from './FooterHeading.tsx'

export const LinkGrid = (props: SimpleGridProps) => (
  <SimpleGrid columns={2} {...props}>
    <Box minW="130px">
      <FooterHeading mb="4" color="text.dark">Navigate</FooterHeading>
      <Stack>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/about-roboreach-website'>About this Site</Link>
        <Link href='/impact'>Impact</Link>

      </Stack>
    </Box>
    <Box minW="130px">
      <FooterHeading mb="4" color="text.dark">Resources</FooterHeading>
      <Stack>
        <Link href='/faq'>FAQ</Link>
        <Link href='builds'>Builds</Link>
        <Link href='/apply'>Apply</Link>
        <Link href='mailto:teamroboreach@gmail.com'>Say Hello!</Link>
      </Stack>
    </Box>
  </SimpleGrid>
)
