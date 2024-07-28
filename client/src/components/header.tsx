import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Spacer,
  Button,
  IconButton,
  useColorMode,
  useColorModeValue,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import {
  MoonIcon,
  SunIcon,
  HamburgerIcon,
  StarIcon,
  SearchIcon,
  TimeIcon,
} from "@chakra-ui/icons";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.100", "gray.900");
  const [logined, setLogined] = useState(true);

  return (
    <Box bg={bg} px={4} boxShadow="md">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Heading size="md">IconCraft</Heading>
        <Spacer />
        {logined ? (
          <>
            <Flex alignItems="center" justifyContent="center">
              <Link mx={4} display="flex" alignItems="center">
                <StarIcon mr={2} />
                保存した画像
              </Link>
              <Link mx={4} display="flex" alignItems="center">
                <SearchIcon mr={2} />
                他の人のアイコンを探す
              </Link>
              <Link mx={4} display="flex" alignItems="center">
                <TimeIcon mr={2} />
                履歴
              </Link>
            </Flex>
            <Spacer />
            <Button m={4} onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem>Option 1</MenuItem>
                <MenuItem>Option 2</MenuItem>
                <MenuItem onClick={() => setLogined(false)}>
                  ログアウト
                </MenuItem>
              </MenuList>
            </Menu>
          </>
        ) : (
          <>
            <Button onClick={() => setLogined(true)}>ログイン</Button>
            <Button ml={4} onClick={() => alert("サインアップ画面へ")}>
              サインアップ
            </Button>
          </>
        )}
      </Flex>
    </Box>
  );
};
export default Header;
