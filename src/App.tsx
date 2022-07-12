import { useState } from "react";

import { Box } from "@mantine/core";

import Header from "./components/Header";
import Skill from "./components/Skill";

function App() {
  const data = {
    skills: [{ name: "Strength" }],
  };

  const [percentage, setPercentage] = useState(35);
  const [level, setLevel] = useState(9);
  const [name] = useState("AlexBeje");

  const handleSetPercentage = (input: number) => {
    const newPercentage = input + percentage;
    if (newPercentage < 100) {
      setPercentage(newPercentage);
    } else {
      setPercentage(newPercentage - 100);
      setLevel(level + 1);
    }
  };

  return (
    <Box className="bg-dark-700 text-gray-100">
      <Header percentage={percentage} level={level} name={name} />
      {data.skills.map((skill, index) => (
        <Skill
          skillName={skill.name}
          key={index}
          setPercentage={handleSetPercentage}
        />
      ))}
    </Box>
  );
}

export default App;
