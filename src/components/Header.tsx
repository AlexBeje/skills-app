import { Box, Text } from "@mantine/core";

import Avatar from "./Avatar";

export default function Header({ percentage }: { percentage: number }) {
  return (
    <Box className="flex items-center justify-between">
      <Avatar />
      <Box className="flex items-center">
        <Text>lvl.</Text>
        <Box className="h-2 ml-2 relative w-32">
          <Box className="absolute bg-dark-500 h-2 w-full" />
          <Box
            className={`absolute bg-blue-500 h-2`}
            style={{ width: percentage + "%" }}
          />
        </Box>
      </Box>
    </Box>
  );
}
