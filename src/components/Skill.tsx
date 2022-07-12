import { Box, Button, Text } from "@mantine/core";

export default function Skill({
  skillName,
  setPercentage,
}: {
  skillName: string;
  setPercentage: (percentage: number) => void;
}) {
  return (
    <Box className="flex items-center bg-dark-500 p-4 justify-between">
      <Text>{skillName}</Text>
      <Box className="flex gap-2">
        <Button onClick={() => setPercentage(1)}>+1</Button>
        <Button onClick={() => setPercentage(5)}>+5</Button>
        <Button onClick={() => setPercentage(15)}>+15</Button>
      </Box>
    </Box>
  );
}
