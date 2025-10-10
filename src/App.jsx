import {
  Avatar,
  Badge,
  Box,
  Card,
  Flex,
  Grid,
  HoverCard,
  Link,
  Separator,
  Spinner,
  Strong,
  Tabs,
  Text,
} from "@radix-ui/themes";
import myavatar from "./assets/my-avatar.jpg";
import univlearn from "./assets/univ-learn.png";
import supportli from "./assets/supportli.png";
import quadapp from "./assets/quad-app.png";
import qrayti from "./assets/qrayti.png";
import wisal from "./assets/wisal.png";
import nf from "./assets/null-form.png";
import mdc from "./assets/mdc.png";
import { useEffect, useState } from "react";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

const Player = {
  name: "Yacine Bendjebbar",
  age: new Date().getFullYear() - 2003,
  avatar: myavatar,
  address: "Tlemcen, Algeria",
  position: "CTO",
  company: "Supportli",
  mastery: {
    soft: [
      "Teamwork",
      "Communication",
      "Problem-solving",
      "Adaptability",
      "Creativity",
      "Leadership",
      "Project Management",
      "Time Management",
      "Critical Thinking",
    ],
    hard: [
      "React",
      "React Native",
      "TypeScript",
      "Node.js",
      "Express",
      "Go Lang",
      "Git",
      "Docker",
      "QA Testing",
      "C/C++",
      "C#",
      "Java",
      "MongoDB",
      "SQL",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  about: {
    founder: "Game Makers Algeria",
    desc: "A community of game developers in Algeria.",
  },
  about2: {
    role: "null",
    desc: "A freelancing team that specializes in web development, mobile applications, and backend systems.",
  },
  experience: [
    {
      role: "CTO",
      company: "Supportli",
      period: "2024 - Present",
      desc: "Leading the tech team and overseeing the development of the platform.",
    },
    {
      role: "Full-Stack Developer",
      company: "Forspex",
      period: "2023 - Present",
      desc: "Building web and mobile applications for corporate and clients.",
    },
    {
      role: "Founder",
      company: "Game Makers Algeria",
      period: "2024 - Present",
      desc: "Creating a community for game developers in Algeria.",
    },
  ],
  education: [
    {
      grad: "Master's Degree",
      field: "Computer Science",
      specialty: "Networks and destributed systems",
      school: "University of Tlemcen",
      ongoing: true,
    },
    {
      grad: "Bachelor's Degree",
      field: "Computer Science",
      school: "University of Tlemcen",
    },
  ],
  projects: {
    supportli: {
      name: "Supportli",
      desc: "uniting people and technology to foster a customer service experience that puts human connections at its core.",
      thumbnail: supportli,
      link: "https://www.supportli.net/",
      isLive: true,
    },
    qrayti: {
      name: "Qrayti",
      desc: "A platform that connects students with tutors.",
      thumbnail: qrayti,
      link: "https://www.qrayti.site/",
      isLive: true,
    },
    nf: {
      name: "null-form",
      desc: "Smart Contact Forms for Modern Websites.",
      thumbnail: nf,
      link: "https://null-form.vercel.app/",
      isLive: true,
    },
    wisal: {
      name: "Wisal",
      desc: "A modern approach to marriage, connecting hearts with values ​​and traditions.",
      thumbnail: wisal,
      link: "https://www.wisal.cc/",
      isLive: true,
    },
    mdc: {
      name: "mobile-dev-cli",
      desc: "A sleek and minimal command-line tool to kickstart mobile development by enabling wireless ADB pairing and real-time screen mirroring using scrcpy.",
      thumbnail: mdc,
      link: "https://github.com/yxcinebendjebbar/mobile-dev-cli",
      isLive: true,
    },
    quadapp: {
      name: "quad-app",
      desc: "A tool allows you to quickly generate a robust Express template based on your preferences.",
      thumbnail: quadapp,
      link: "https://www.npmjs.com/package/quad-app",
      isLive: true,
    },
    univlearn: {
      name: "Univ-Learn",
      desc: "A platform that connects students with tutors.",
      thumbnail: univlearn,
      link: "",
      isLive: false,
    },
  },
  contact: {
    phone: "+213 779 52 78 89",
    whatsapp: "https://wa.me/+213779527889",
    telegram: "https://t.me/yxcinebendjebbar",
    email: "yacine.bbusiness@gmail.com",
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
    <main className="h-full w-full flex flex-col dark justify-center items-center bg-background px-4 md:px-16 pt-48 pb-16 gap-4">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Tabs.Root defaultValue="cv">
            <Tabs.List className="place-self-center">
              <Tabs.Trigger value="cv">CV</Tabs.Trigger>
              <Tabs.Trigger value="portfolio">Portfolio</Tabs.Trigger>
              <Tabs.Trigger value="contact">Contact</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="cv">
              <Card className="mt-8 max-w-sm w-screen">
                <Flex direction="row" gap="4">
                  <Avatar src={Player.avatar} size="8" />
                  <Flex direction="column">
                    <Strong size="4">{Player.name}</Strong>
                    <Text size="2" color="gray">
                      {Player.position} @ {Player.company}
                    </Text>
                    <Separator size="4" my="2" />
                    <Text size="2" color="gray">
                      {Player.address}
                    </Text>
                    <Text size="2" color="gray">
                      {Player.age} years old
                    </Text>
                    <Separator size="4" my="2" />
                    <Text size="2" color="gray">
                      Founder of{" "}
                      <HoverCard.Root>
                        <HoverCard.Trigger asChild>
                          <Link>{Player.about.founder}</Link>
                        </HoverCard.Trigger>
                        <HoverCard.Content side="top" align="center">
                          <Box className="max-w-xs">{Player.about.desc}</Box>
                        </HoverCard.Content>
                      </HoverCard.Root>
                    </Text>
                    <Text size="2" color="gray">
                      Leader of{" "}
                      <HoverCard.Root>
                        <HoverCard.Trigger asChild>
                          <Link>{Player.about2.role}</Link>
                        </HoverCard.Trigger>
                        <HoverCard.Content side="top" align="center">
                          <Box className="max-w-xs">{Player.about2.desc}</Box>
                        </HoverCard.Content>
                      </HoverCard.Root>{" "}
                      Team
                    </Text>
                  </Flex>
                </Flex>
              </Card>
              <Card className="mt-4 max-w-sm w-screen">
                <Flex direction="column" gap="4">
                  <Text size="3" weight="bold">
                    Experience
                  </Text>
                  {Player.experience.map((exp) => (
                    <Flex direction="column" key={exp.role + exp.company}>
                      <Text size="2" weight="bold">
                        {exp.role} @ {exp.company}
                      </Text>
                      <Text size="2" color="gray">
                        {exp.period}
                      </Text>
                      <Text size="2">{exp.desc}</Text>
                      {exp !== Player.experience.at(-1) && (
                        <Separator size="4" my="1" />
                      )}
                    </Flex>
                  ))}
                </Flex>
              </Card>
              <Card className="mt-4 max-w-sm w-screen">
                <Flex direction="column" gap="4">
                  <Text size="3" weight="bold">
                    Education
                  </Text>
                  {Player.education.map((edu) => (
                    <Flex direction="column" key={edu.grad + edu.school}>
                      <Text size="2" weight="bold">
                        {edu.grad} in
                        {edu.specialty ? ` ${edu.specialty}` : ""}
                      </Text>
                      <Text size="2" color="gray">
                        {edu.school} {edu.ongoing ? "(Ongoing)" : ""}
                      </Text>
                      {edu !== Player.education.at(-1) && (
                        <Separator size="4" my="1" />
                      )}
                    </Flex>
                  ))}
                </Flex>
              </Card>
              <Card className="mt-4 max-w-sm w-screen">
                <Grid columns="2">
                  <Flex direction="column" gap="4">
                    <Text size="3" weight="bold">
                      Hard Skills
                    </Text>
                    {Player.mastery.hard.map((skill) => (
                      <Box key={skill}>
                        <Text size="3">{skill}</Text>
                      </Box>
                    ))}
                  </Flex>

                  <Flex direction="column" gap="4">
                    <Text size="3" weight="bold">
                      Soft Skills
                    </Text>
                    {Player.mastery.soft.map((skill) => (
                      <Box key={skill}>
                        <Text size="3">{skill}</Text>
                      </Box>
                    ))}
                  </Flex>
                </Grid>
              </Card>
            </Tabs.Content>

            <Tabs.Content value="portfolio">
              <Card className="mt-8 max-w-sm w-screen">
                <Flex direction="column" gap="4">
                  <Text size="3" weight="bold">
                    Projects
                  </Text>
                  {Object.values(Player.projects).map((project) => (
                    <Card key={project.name} className="p-4">
                      <Flex direction="column" gap="2">
                        <img
                          src={project.thumbnail}
                          alt={project.name}
                          className="rounded"
                        />
                        <Flex direction="row" align="center" gap="2">
                          <Text size="2" weight="bold">
                            {project.name}
                          </Text>
                          {project.isLive ? (
                            <Badge color="green">Live</Badge>
                          ) : (
                            <Badge color="orange">In Progress</Badge>
                          )}
                        </Flex>
                        <Text size="2">{project.desc}</Text>
                        {project.link && (
                          <Link href={project.link} target="_blank">
                            Visit
                          </Link>
                        )}
                      </Flex>
                    </Card>
                  ))}
                </Flex>
              </Card>
            </Tabs.Content>

            <Tabs.Content value="contact">
              <Card className="mt-8 max-w-sm w-screen">
                <Flex direction="column" gap="2">
                  <Text size="3" weight="bold">
                    Contact
                  </Text>
                  <Text size="2">
                    Feel free to reach out to me via any of the platforms below.
                  </Text>
                  <Grid columns={"2"} rows={"2"}>
                    <Box>
                      <i className="fa fa-whatsapp"></i>{" "}
                      <Link href={Player.contact.whatsapp}>WhatsApp</Link>
                    </Box>
                    <Box>
                      <i className="fa fa-telegram"></i>{" "}
                      <Link href={Player.contact.telegram}>Telegram</Link>
                    </Box>
                    <Box>
                      <i className="fa fa-envelope"></i>{" "}
                      <Link href={`mailto:${Player.contact.email}`}>Email</Link>
                    </Box>
                    <Box>
                      <i className="fa fa-phone"></i> {Player.contact.phone}
                    </Box>
                  </Grid>
                </Flex>
              </Card>
            </Tabs.Content>
          </Tabs.Root>
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
