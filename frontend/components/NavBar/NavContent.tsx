import {
  Box,
  Button,
  Flex,
  Text,
  FlexProps,
  HStack,
  useColorModeValue as mode,
  useDisclosure,
  VisuallyHidden,
  Img,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  chakra
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import * as React from 'react'
import { NavLink } from './NavLink.tsx'
import { NavMenu } from './NavMenu.tsx'
import { Submenu } from './Submenu.tsx'
import { ToggleButton } from './ToggleButton.tsx'
import { links } from './_data.tsx'
import { useEffect, useState } from 'react'

const MobileNavContext = (props: FlexProps) => {
  const [email, setEmail] = useState('')
  useEffect(() => {
    let tokens = localStorage.getItem('token')
    if (tokens) {
      tokens = tokens.split('.')
      setEmail(JSON.parse(atob(tokens[1])).username)
    }
    // console.log();

  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('token')
    window.location.href = '/'
  }

  const { isOpen, onToggle } = useDisclosure()
  return (
    <>
      <Flex align="center" justify="space-between" className="nav-content__mobile" {...props} overflowX='hidden'>
        <Box>
          <ToggleButton isOpen={isOpen} onClick={onToggle} />
        </Box>
        <Box as="a" rel="home" mx="auto" href="/">
          <Img src="/logo.png" alt="Keep" maxW="150px" />
        </Box>
        <Box>
          {!email && (
            <Button bg="green.dark" _hover={{ bg: "green.dark.hover" }} color="white" as="a" href="/login" borderRadius="20" shadow="lg">
              Sign In
            </Button>)}
          {
            email && (

              <Menu>
                <MenuButton
                  py={2}
                  transition='all 0.2s'
                  borderRadius='md'
                  _hover={{ bg: 'gray.100' }}
                  _focus={{ boxShadow: 'outline' }}
                  fontWeight='bold'
                ><chakra.span color='green.dark'>{email}</chakra.span><ChevronDownIcon />
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={handleSignOut}>Log Out</MenuItem>
                </MenuList>
              </Menu>
            )
          }
        </Box>
      </Flex>
      <NavMenu animate={isOpen ? 'open' : 'closed'}>
        {links.map((link, idx) =>
          link.children ? (
            <Submenu.Mobile key={idx} link={link} />
          ) : (
            <NavLink.Mobile key={idx} href={link.href} color="text.dark">
              {link.label}
            </NavLink.Mobile>
          ),
        )}
      </NavMenu>
    </>
  )
}

const DesktopNavContent = (props: any) => {
  const [email, setEmail] = useState('')
  useEffect(() => {
    let tokens = localStorage.getItem('token')
    if (tokens) {
      tokens = tokens.split('.')
      setEmail(JSON.parse(atob(tokens[1])).username)
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('token')
    window.location.href = '/'
  }

  return (
    <Flex className="nav-content__desktop" align="center" justify="space-between" {...props}>
      <Box as="a" href="/" rel="home">
        <VisuallyHidden>RoboReach</VisuallyHidden>
        <Img src="/logo.png" alt="Keep" maxW="150px" />
      </Box>
      <HStack as="ul" id="nav__primary-menu" aria-label="Main Menu" listStyleType="none">
        {links.map((link, idx) => (
          <Box as="li" key={idx} id={`nav__menuitem-${idx}`}>
            {link.children ? (
              <Submenu.Desktop active={props.active} link={link} />
            ) : (
              <NavLink.Desktop href={link.href} color={link.label.toLowerCase() === props.active ? "green.dark" : "text.dark"}>{link.label}</NavLink.Desktop>
            )}
          </Box>
        ))}
      </HStack>
      <HStack spacing="8" minW="100px" justify="space-between">
        {!email && (
          <Button bg="green.dark" _hover={{ bg: "green.dark.hover" }} color="white" as="a" href="/login" borderRadius="full" shadow="lg">
            Sign In
          </Button>)}
        {
          email && (

            <Menu>
              <MenuButton
                px={4}
                py={2}
                transition='all 0.2s'
                borderRadius='md'
                _hover={{ bg: 'gray.100' }}
                _focus={{ boxShadow: 'outline' }}
                fontWeight='bold'
              >
                Welcome, <chakra.span color='green.dark'>{email}</chakra.span><ChevronDownIcon />
              </MenuButton>
              <MenuList>
                <MenuItem onClick={handleSignOut}>Log Out</MenuItem>
              </MenuList>
            </Menu>
          )
        }
      </HStack>
    </Flex>
  )
}

export const NavContent = {
  Mobile: MobileNavContext,
  Desktop: DesktopNavContent,
}
