import {
  Button,
  chakra,
  HTMLChakraProps,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { FooterHeading } from './FooterHeading.tsx'

export const SubscribeForm = (props: HTMLChakraProps<'form'>) => {
  const [submitted, setSubmitted] = React.useState(false)
  return (
    <chakra.form {...props} onSubmit={(e) => e.preventDefault()}>
      <Stack spacing="4">
        <FooterHeading color="text.dark">Subscribe to our newsletter</FooterHeading>
        <Text>Never miss another event from RoboReach!</Text>
        {!submitted && <Stack spacing="4" direction={{ base: 'column', md: 'row' }}>
          <Input
            bg={useColorModeValue('white', 'inherit')}
            placeholder="Enter your email"
            type="email"
            required
            focusBorderColor="blue.shade"
            _placeholder={{
              opacity: 1,
              color: useColorModeValue('gray.500', 'whiteAlpha.700'),
            }}
          />
          <Button
            type="submit"
            // colorScheme="blue"
            bg="blue.dark"
            _hover={{
              bg: 'blue.dark.hover',
            }}
            onClick={() => setSubmitted(true)}
            color="white"
            flexShrink={0}
            width={{ base: 'full', md: 'auto' }}
          >
            Subscribe
          </Button>
        </Stack>}

        {submitted && <Text>Thank you for subscribing!</Text>}
      </Stack>
    </chakra.form>
  )
}
