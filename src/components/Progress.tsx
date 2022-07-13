import { Box, Text } from "@mantine/core";

export default function ProgressBar({
  level,
  percentage,
  name,
}: {
  level: number;
  percentage: number;
  name: string;
}) {
  return (
    <Box className="w-full flex flex-col justify-between ml-4">
      <Text>{name}</Text>
      <Box className="flex flex-col items-end w-full">
        <Text className="whitespace-nowrap mb-2">
          lvl. <Text component="span" className="font-bold text-blue-500">{level}</Text>
        </Text>
        <Box className="h-2 relative w-full">
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
