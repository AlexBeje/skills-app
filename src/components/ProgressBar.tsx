import { Box, Text } from "@mantine/core";

export default function ProgressBar({
  level,
  percentage,
}: {
  level: number;
  percentage: number;
}) {
  return (
    <Box className="flex items-center">
      <Text>lvl. {level}</Text>
      <Box className="h-2 ml-2 relative w-32">
        <Box className="absolute bg-dark-500 h-2 w-full" />
        <Box
          className={`absolute bg-blue-500 h-2`}
          style={{ width: percentage + "%" }}
        />
      </Box>
    </Box>
  );
}
