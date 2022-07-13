import { useState } from "react";

import { Box } from "@mantine/core";

import Header from "./components/Header";
import Skill from "./components/Skill";

function App() {
  const [name] = useState("AlexBeje");
  const [level, setLevel] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [skills, setSkills] = useState([
    {
      name: "Strength",
      points: 0,
    },
    {
      name: "Dexterity",
      points: 0,
    },
    {
      name: "Intelligence",
      points: 0,
    },
    {
      name: "Vitality",
      points: 0,
    },
  ]);

  const handleSetPercentage = (input: number) => {
    const newPercentage = input + percentage;
    if (newPercentage < 100) {
      setPercentage(newPercentage);
    } else {
      setPercentage(newPercentage - 100);
      setLevel(level + 1);
    }
  };

  const handleSetPoints = (name: string, input: number) => {
    const newSkills = skills.map((skill) => {
      if (skill.name === name) {
        return {
          ...skill,
          points: input + skill.points,
        };
      }
      return skill;
    });
    setSkills(newSkills);
  };

  return (
    <Box className="bg-dark-700 text-gray-100">
      <Header percentage={percentage} level={level} name={name} />
      {skills.map((skill, index) => (
        <Skill
          skillName={skill.name}
          key={index}
          skillPoints={skill.points}
          setPercentage={handleSetPercentage}
          setPoints={handleSetPoints}
        />
      ))}
    </Box>
  );
}

export default App;
