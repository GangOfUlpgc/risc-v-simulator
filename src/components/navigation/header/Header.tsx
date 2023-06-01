import { Box, Text } from "@chakra-ui/react";
import React from "react";
import HeaderContainer from "./HeaderContainer";
import HeaderControl from "./HeaderControl";

export default function Header() {
  return (
    <Box
      py="0.7rem"
      bgColor="gray.100"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      px="2rem"
      borderBottom="2px"
      borderBottomColor="gray.200"
    >
      {/* This is for the logo */}
      <Box>
        <Text fontSize="xl" fontWeight="bold">
          Riscv-simulator
        </Text>
      </Box>
      {/* This is for the play button */}
      <Box>
        <HeaderControl />
      </Box>
    </Box>
  );
}
