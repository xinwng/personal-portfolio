import {
  Stack,
  Heading,
  Flex,
  Box,
  Text,
  Image,
  useMediaQuery,
  Spacer,
  colorMode,
  Center,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import NextLink from "next/link";
import React from "react";

export default function HomeProfile() {
  const isDark = colorMode == "dark";
  const [desktopQuery] = useMediaQuery("(min-width: 700px)");
  const [isMinWidth, setIsMinWidth] = useState(false);

  useEffect(() => {
    if (desktopQuery !== isMinWidth) {
      setIsMinWidth(desktopQuery);
    }
  }, [isMinWidth, desktopQuery]);

  return (
    <Stack>
      <Flex direction={isMinWidth ? "row" : "column"} mt={isMinWidth ? 15 : 0}>
        {/* Mobile Display */}

        <Image
          // src="/AvatarImg.jpg"
          src="/home-xin-profile-mobile.svg"
          alt="Profile Picture"
          borderRadius="full"
          backgroundColor="transparent"
          boxShadow="none"
          width="100px"
          height="160px"
          mt="3"
          display={isMinWidth ? "none" : "block"}
        />

        <Box my={isMinWidth ? 20 : 3}>
          <Heading fontSize="4xl" fontWeight="bold">
            {"Xin Wang"}
          </Heading>
          <Text my={1.5}>{"Incoming Software Engineer @ VMware"}</Text>
          <Text my={1.5} color={colorMode === "dark" ? "gray.200" : "gray.500"}>
            📍 Los Angeles Metropolitan Area
          </Text>
        </Box>

        {/* Desktop Display */}
        <Spacer />
        <Image
          // src="/AvatarImg.jpg"
          src="/home-xin-profile-desktop.svg"
          alt="Profile Picture"
          // borderRadius='full'
          backgroundColor="transparent"
          boxShadow="none"
          height="385px"
          mt="auto"
          mx="auto"
          display={isMinWidth ? "block" : "none"}
        />
      </Flex>
    </Stack>
  );
}