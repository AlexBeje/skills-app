import { Box } from "@mantine/core";

import Avatar from "./Avatar";
import Progress from "./Progress";

export default function Header({
  level,
  percentage,
  name,
}: {
  level: number;
  percentage: number;
  name: string;
}) {
  return (
    <Box className="flex p-4">
      <Avatar />
      <Progress name={name} percentage={percentage} level={level} />
    </Box>
  );
}
