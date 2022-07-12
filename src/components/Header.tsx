import { Box } from "@mantine/core";

import Avatar from "./Avatar";
import ProgressBar from "./ProgressBar";

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
    <Box className="flex items-end justify-between p-4">
      <Avatar name={name} />
      <ProgressBar level={level} percentage={percentage} />
    </Box>
  );
}
