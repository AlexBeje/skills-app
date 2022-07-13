import { Box, Button, Text } from "@mantine/core";

interface SkillProps {
  skillName: string;
  skillPoints: number;
  setPercentage: (input: number) => void;
  setPoints: (name: string, input: number) => void;
}

export default function Skill({
  skillName,
  skillPoints,
  setPercentage,
  setPoints,
}: SkillProps) {
  const handleClick = (name: string, points: number) => {
    setPercentage(points);
    setPoints(name, points);
  };

  return (
    <Box className="flex items-center bg-dark-500 p-4 justify-between">
      <Text>
        {skillName} ({skillPoints})
      </Text>
      <Box className="flex gap-2">
        <Button onClick={() => handleClick(skillName, 1)} compact>+1 xp</Button>
        <Button onClick={() => handleClick(skillName, 5)} compact>+5 xp</Button>
        <Button onClick={() => handleClick(skillName, 15)} compact>+15 xp</Button>
      </Box>
    </Box>
  );
};
