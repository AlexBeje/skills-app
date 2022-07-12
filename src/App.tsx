import { useState } from "react";

import { Box } from "@mantine/core";

import Header from "./components/Header";

function App() {
  const [percentage] = useState(35);

  return (
    <Box p="md" className="bg-dark-700 text-gray-100">
      <Header percentage={percentage} />
    </Box>
  );
}

export default App;
