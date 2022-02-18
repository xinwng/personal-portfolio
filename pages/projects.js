import { VStack, Center, Box, Spacer, useMediaQuery } from "@chakra-ui/react";
import NavBar from "../src/components/navbar";
import HomeProjects from "../src/components/home/home-projects";
import { Container } from "../src/components/Container";
import { useState, useEffect } from "react";
import ProjectHeader from "../src/components/projects/project-header";

export default function Home() {
  const [desktopQuery] = useMediaQuery("(min-width: 700px)");
  const [isMinWidth, setIsMinWidth] = useState(false);

  useEffect(() => {
    if (desktopQuery !== isMinWidth) {
      setIsMinWidth(desktopQuery);
    }
  }, [isMinWidth, desktopQuery]);

  return (
    <Container>
      <Box w="100%" mb={2}>
        <NavBar />
      </Box>
      <Box w="100%" my={2}>
        <ProjectHeader />
      </Box>
    </Container>
  );
}
