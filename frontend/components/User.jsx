import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  ScaleFade,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Img,
} from "@chakra-ui/react";
import { FiHome, FiMenu, FiBell, FiChevronDown } from "react-icons/fi";
import { useEffect, useState } from "react";
export const User = ({ active, children }) => {
  const [email, setEmail] = useState("");
  useEffect(() => {
    let tokens = localStorage.getItem("token");
    if (tokens) {
      tokens = tokens.split(".");
      setEmail(JSON.parse(atob(tokens[1])).username);
    } else {
      window.location.href = "/login";
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <Flex alignItems={"center"}>
      <Menu>
        <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: "none" }}>
          <HStack>
            <Avatar size={"sm"} src={"https://i.imgur.com/VN2mz3I.jpg"} />
            <VStack
              display={{ base: "none", md: "flex" }}
              alignItems="flex-start"
              spacing="1px"
              ml="2"
            >
              <Text fontSize="sm"> {email}</Text>
              <Text fontSize="xs" color="gray.600">
                RoboReach Applicant
              </Text>
            </VStack>
            <Box display={{ base: "none", md: "flex" }}>
              <FiChevronDown />
            </Box>
          </HStack>
        </MenuButton>
        <MenuList
          bg={useColorModeValue("white", "gray.900")}
          borderColor={useColorModeValue("gray.200", "gray.700")}
        >
          {/* <MenuItem>Profile</MenuItem>
                    <MenuItem>Settings</MenuItem> */}
          {/* <MenuDivider /> */}
          <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};
