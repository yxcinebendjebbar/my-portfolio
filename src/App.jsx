import {
  Avatar,
  Box,
  Button,
  Card,
  Flex,
  Grid,
  HoverCard,
  Link,
  Progress,
  Spinner,
  Text,
} from "@radix-ui/themes";
import myavatar from "./assets/my-avatar.jpg";
import univlearn from "./assets/univ-learn.png";
import supportli from "./assets/supportli.png";
import quadapp from "./assets/quad-app.png";
import { useEffect, useState } from "react";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

const Player = {
  name: "Yacine Bendjebbar",
  age: 20,
  avatar: myavatar,
  country: "Algeria",
  position: "Web Developer",
  company: "Forspex Entertainment",
  stats: {
    HTML: 100,
    CSS: 95,
    JavaScript: 98,
    React: 90,
    Git: 90,
    NodeJS: 90,
    NextJS: 85,
    MongoDB: 85,
    TypeScript: 80,
    Express: 80,
    MySQL: 80,
    SoftwareEngineering: 80,
    Java: 76,
    SQLite: 75,
    Python: 70,
    Django: 60,
    Docker: 40,
    CSharp: 30,
    Unity: 29,
  },
  about: {
    founder: "Game Makers Algeria",
    desc: "A community of game developers in Algeria.",
  },
  about2: {
    role: "Open Source Contributor",
    desc: "I ❤ to contribute to open source projects.",
  },
  projects: {
    supportli: {
      name: "Supportli",
      desc: "uniting people and technology to foster a customer service experience that puts human connections at its core.",
      thumbnail: supportli,
      link: "https://www.supportli.net/",
    },
    univlearn: {
      name: "Univ-Learn",
      desc: "A platform that connects students with tutors.",
      thumbnail: univlearn,
      link: "",
    },
    quadapp: {
      name: "quad-app",
      desc: "A tool allows you to quickly generate a robust Express template based on your preferences.",
      thumbnail: quadapp,
      link: "https://www.npmjs.com/package/quad-app",
    },
  },
};

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <main className="h-full w-full flex flex-col dark justify-center items-center bg-background px-16 pt-48 pb-16 gap-4">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Card className="sm:max-w-sm p-8 motion-preset-slide-right-md">
            <Flex gap="3" align={"center"}>
              <Avatar
                size={"3"}
                src={Player.avatar}
                fallback={Player.name.charAt(0).toUpperCase()}
                radius="full"
              />
              <Box>
                <Text as="h1" size="4" weight="bold">
                  {Player.name}
                </Text>
                <Text as="p" size="2" color="gray">
                  {Player.position} @ {Player.company}
                </Text>
              </Box>
            </Flex>
            <Box>
              <Text as="p" size="2" className="mt-4">
                I have a passion for web development and love to create new
                things.
              </Text>
            </Box>
          </Card>
          <Card className="sm:max-w-sm p-8 motion-preset-slide-right-md">
            <Flex gap="3" align={"center"} direction={"column"}>
              <Text size="4" weight="medium">
                /stats
              </Text>
              <Grid columns="3" gap="4">
                {Object.entries(Player.stats).map(([key, value]) => (
                  <Box key={key}>
                    <Text size="2" color="gray">
                      {key}
                    </Text>
                    <Progress value={value} />
                  </Box>
                ))}
              </Grid>
            </Flex>
          </Card>
          <Card className="sm:max-w-sm p-8 motion-preset-slide-right-md">
            <Flex gap="3" align={"center"} direction={"column"}>
              <Text size="4" weight="medium">
                /about
              </Text>
              <Box>
                <Text size="2">
                  - Founder of{" "}
                  <HoverCard.Root>
                    <HoverCard.Trigger>
                      <Text size="2" color="blue" className="cursor-pointer">
                        {Player.about.founder}
                      </Text>
                    </HoverCard.Trigger>
                    <HoverCard.Content maxWidth={"300px"}>
                      <Text size="2">{Player.about.desc}</Text>
                    </HoverCard.Content>
                  </HoverCard.Root>{" "}
                  &{" "}
                  <HoverCard.Root>
                    <HoverCard.Trigger>
                      <Text size="2" color="blue" className="cursor-pointer">
                        {Player.about2.role}
                      </Text>
                    </HoverCard.Trigger>
                    <HoverCard.Content maxWidth={"300px"}>
                      <Text size="2">{Player.about2.desc}</Text>
                    </HoverCard.Content>
                  </HoverCard.Root>
                </Text>
                <br />
                <Text size="2" className="text-start">
                  - From {Player.country}.
                </Text>
              </Box>
            </Flex>
          </Card>
          <Card className="sm:max-w-sm p-8 motion-preset-slide-right-md">
            <Flex gap="3" align={"center"} direction={"column"}>
              <Text size="4" weight="medium">
                /projects
              </Text>
              {Object.entries(Player.projects).map(([key, value]) => (
                <Flex gap="2" key={key}>
                  <Avatar
                    size={"6"}
                    src={value.thumbnail}
                    fallback={value.name.charAt(0)}
                  />
                  <Box>
                    <Link href={value.link} target="_blank">
                      <Text size="4" weight="bold">
                        {value.name}
                      </Text>
                    </Link>
                    <Text as="p" size="2" color="gray">
                      {value.desc}
                    </Text>
                  </Box>
                </Flex>
              ))}
            </Flex>
          </Card>
          <Flex
            gap={"4"}
            align={"center"}
            className="motion-preset-slide-up-md"
          >
            <Link href="https://github.com/yxcinebendjebbar" target="_blank">
              <GitHubLogoIcon className="scale-150" />
            </Link>
            <Link href="https://www.instagram.com/yacine.jsx/" target="_blank">
              <InstagramLogoIcon className="scale-150" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/yxcinebendjebbar/"
              target="_blank"
            >
              <LinkedInLogoIcon className="scale-150" />
            </Link>
          </Flex>
        </>
      )}
    </main>
  );
}

export default App;
