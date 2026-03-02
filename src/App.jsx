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
import incheck from "./assets/incheck.png"
import rv from './assets/Background2Compressed.png'
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
  address: "Tlemcen - Algeria",
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
      "Linux",
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
    rv: {
      name: "Red Valley RP",
      desc: "Best REDM RP Server.",
      thumbnail: rv,
      link: "https://redvalleyrp.com/",
      isLive: true,
    },
    incheck: {
      name: "Incheck",
      desc: "InCheck is not a task manager. It’s built to finish what you start.",
      thumbnail: incheck,
      link: "https://incheck-landing.netlify.app/",
      isLive: true,
    },
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
    <main className="min-h-screen w-full flex flex-col justify-center items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-background to-background px-4 md:px-16 pt-32 pb-16 gap-4 overflow-x-hidden font-mono">
      {isLoading ? (
        <Spinner size="3" className="motion-preset-pulse" />
      ) : (
        <>
          <div className="motion-preset-slide-down motion-duration-700">
            <Tabs.Root defaultValue="cv">
              <Tabs.List className="place-self-center mb-6">
                <Tabs.Trigger value="cv">CV</Tabs.Trigger>
                <Tabs.Trigger value="portfolio">Portfolio</Tabs.Trigger>
                <Tabs.Trigger value="contact">Contact</Tabs.Trigger>
              </Tabs.List>
              <div className="motion-preset-blur-up motion-duration-1000 w-full flex justify-center">
                <Tabs.Content value="cv" className="w-full max-w-4xl">
                  <Grid columns={{ initial: "1", md: "3" }} gap="6" className="w-full">
                    {/* Left Column - Profile & Skills */}
                    <Flex direction="column" gap="6">
                      <Card className="transition-all hover:scale-[1.01] hover:shadow-lg p-6 transparent-card">
                        <Flex direction="column" align="center" gap="4" className="text-center">
                          <Avatar src={Player.avatar} size="9" fallback="YB" className="shadow-xl ring-2 ring-white/10" />
                          <Flex direction="column" gap="1">
                            <Strong size="6" className="tracking-tight font-sans text-white">{Player.name}</Strong>
                            <Text size="3" color="gray" className="font-mono">
                              {Player.position} @ {Player.company}
                            </Text>
                          </Flex>
                          <Separator size="4" my="2" className="opacity-50" />
                          <Text size="2" color="gray" className="font-mono">
                            {Player.address} • {Player.age} years old
                          </Text>
                          <Flex direction="column" gap="2" mt="2">
                            <Text size="2" color="gray" className="font-mono">
                              Founder of{" "}
                              <HoverCard.Root>
                                <HoverCard.Trigger asChild>
                                  <Link underline="hover" className="text-white">{Player.about.founder}</Link>
                                </HoverCard.Trigger>
                                <HoverCard.Content side="top" align="center">
                                  <Box className="max-w-xs font-mono">{Player.about.desc}</Box>
                                </HoverCard.Content>
                              </HoverCard.Root>
                            </Text>
                            <Text size="2" color="gray" className="font-mono">
                              Leader of{" "}
                              <HoverCard.Root>
                                <HoverCard.Trigger asChild>
                                  <Link underline="hover" className="text-white">{Player.about2.role}</Link>
                                </HoverCard.Trigger>
                                <HoverCard.Content side="top" align="center">
                                  <Box className="max-w-xs font-mono">{Player.about2.desc}</Box>
                                </HoverCard.Content>
                              </HoverCard.Root> Team
                            </Text>
                          </Flex>
                        </Flex>
                      </Card>

                      <Card className="transition-all hover:scale-[1.01] hover:shadow-lg p-6">
                        <Flex direction="column" gap="4">
                          <Text size="4" weight="bold" className="tracking-tight font-sans text-white border-b border-white/10 pb-2">
                            Skills & Mastery
                          </Text>
                          <Flex direction="column" gap="3">
                            <Text size="2" className="font-mono text-gray-400">Technical</Text>
                            <Flex wrap="wrap" gap="2">
                              {Player.mastery.hard.map((skill) => (
                                <Badge key={skill} color="ruby" variant="soft" radius="full" className="font-mono">
                                  {skill}
                                </Badge>
                              ))}
                            </Flex>
                          </Flex>
                          <Flex direction="column" gap="3" mt="2">
                            <Text size="2" className="font-mono text-gray-400">Interpersonal</Text>
                            <Flex wrap="wrap" gap="2">
                              {Player.mastery.soft.map((skill) => (
                                <Badge key={skill} color="teal" variant="soft" radius="full" className="font-mono">
                                  {skill}
                                </Badge>
                              ))}
                            </Flex>
                          </Flex>
                        </Flex>
                      </Card>
                    </Flex>

                    {/* Right Column - Experience & Education */}
                    <Flex direction="column" gap="6" className="md:col-span-2">
                      <Card className="transition-all hover:scale-[1.01] hover:shadow-lg p-6 h-full">
                        <Flex direction="column" gap="6">
                          <Flex direction="column" gap="4">
                            <Text size="4" weight="bold" className="tracking-tight font-sans text-white border-b border-white/10 pb-2">
                              Experience
                            </Text>
                            {Player.experience.map((exp) => (
                              <Flex direction="column" key={exp.role + exp.company} className="group">
                                <Flex justify="between" align="center" wrap="wrap" gap="2">
                                  <Text size="3" weight="bold" className="font-sans text-white group-hover:text-indigo-400 transition-colors">
                                    {exp.role} @ {exp.company}
                                  </Text>
                                  <Text size="2" color="gray" className="font-mono opacity-70">
                                    {exp.period}
                                  </Text>
                                </Flex>
                                <Text size="2" color="gray" className="font-mono mt-1 leading-relaxed">
                                  {exp.desc}
                                </Text>
                                {exp !== Player.experience.at(-1) && (
                                  <Separator size="4" my="3" className="opacity-30" />
                                )}
                              </Flex>
                            ))}
                          </Flex>

                          <Flex direction="column" gap="4" mt="4">
                            <Text size="4" weight="bold" className="tracking-tight font-sans text-white border-b border-white/10 pb-2">
                              Education
                            </Text>
                            {Player.education.map((edu) => (
                              <Flex direction="column" key={edu.grad + edu.school} className="group">
                                <Text size="3" weight="bold" className="font-sans text-white group-hover:text-indigo-400 transition-colors">
                                  {edu.grad} in {edu.specialty ? edu.specialty : edu.field}
                                </Text>
                                <Text size="2" color="gray" className="font-mono mt-1 opacity-70">
                                  {edu.school} {edu.ongoing ? "(Ongoing)" : ""}
                                </Text>
                                {edu !== Player.education.at(-1) && (
                                  <Separator size="4" my="3" className="opacity-30" />
                                )}
                              </Flex>
                            ))}
                          </Flex>
                        </Flex>
                      </Card>
                    </Flex>
                  </Grid>
                </Tabs.Content>

                <Tabs.Content value="portfolio" className="w-full max-w-5xl">
                  <Grid columns={{ initial: "1", md: "2", lg: "3" }} gap="6">
                    {Object.values(Player.projects).map((project) => (
                      <Card key={project.name} className="p-0 transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-indigo-500/20 group cursor-pointer overflow-hidden border border-white/5">
                        <Flex direction="column" className="h-full">
                          <Box className="overflow-hidden relative group-hover:opacity-90 transition-opacity bg-black/20 aspect-video">
                            <img
                              src={project.thumbnail}
                              alt={project.name}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <Box className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </Box>
                          <Flex direction="column" p="5" gap="3" className="flex-grow">
                            <Flex direction="row" align="center" justify="between" gap="2">
                              <Text size="3" weight="bold" className="font-sans text-white">
                                {project.name}
                              </Text>
                              {project.isLive ? (
                                <Badge color="green" radius="full" variant="soft" className="font-mono">Live</Badge>
                              ) : (
                                <Badge color="orange" radius="full" variant="soft" className="font-mono">In Progress</Badge>
                              )}
                            </Flex>
                            <Text size="2" color="gray" className="leading-relaxed font-mono flex-grow">
                              {project.desc}
                            </Text>
                            {project.link && (
                              <Link href={project.link} target="_blank" className="mt-2 text-indigo-400" underline="hover">
                                <Text className="font-mono text-sm">
                                  Visit Project ↗
                                </Text>
                              </Link>
                            )}
                          </Flex>
                        </Flex>
                      </Card>
                    ))}
                  </Grid>
                </Tabs.Content>

                <Tabs.Content value="contact" className="w-full max-w-xl">
                  <Flex direction="column" gap="5">
                    <Flex direction="column" gap="1">
                      <Text size="6" weight="bold" className="tracking-tight font-sans text-white">
                        Get in Touch
                      </Text>
                      <Text size="2" color="gray" className="font-mono leading-relaxed">
                        Open to new opportunities & collaborations.
                      </Text>
                    </Flex>

                    <Flex direction="column" gap="3">
                      <a href={Player.contact.whatsapp} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                        <Card className="px-5 py-4 transition-all duration-200 hover:translate-x-1 hover:bg-white/5 hover:shadow-lg cursor-pointer" style={{ borderLeft: '3px solid #22c55e', borderTop: 'none', borderRight: 'none', borderBottom: 'none' }}>
                          <Flex align="center" justify="between">
                            <Flex align="center" gap="4">
                              <i className="fa fa-whatsapp"></i>
                              <Flex direction="column" gap="1">
                                <Text size="3" weight="bold" className="font-sans text-white">WhatsApp</Text>
                                <Text size="1" color="gray" className="font-mono">Direct message</Text>
                              </Flex>
                            </Flex>
                            <Text size="3" color="gray">↗</Text>
                          </Flex>
                        </Card>
                      </a>

                      <a href={Player.contact.telegram} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                        <Card className="px-5 py-4 transition-all duration-200 hover:translate-x-1 hover:bg-white/5 hover:shadow-lg cursor-pointer" style={{ borderLeft: '3px solid #3b82f6', borderTop: 'none', borderRight: 'none', borderBottom: 'none' }}>
                          <Flex align="center" justify="between">
                            <Flex align="center" gap="4">
                              <i className="fa fa-telegram"></i>
                              <Flex direction="column" gap="1">
                                <Text size="3" weight="bold" className="font-sans text-white">Telegram</Text>
                                <Text size="1" color="gray" className="font-mono">@yxcinebendjebbar</Text>
                              </Flex>
                            </Flex>
                            <Text size="3" color="gray">↗</Text>
                          </Flex>
                        </Card>
                      </a>

                      <a href={`mailto:${Player.contact.email}`} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                        <Card className="px-5 py-4 transition-all duration-200 hover:translate-x-1 hover:bg-white/5 hover:shadow-lg cursor-pointer" style={{ borderLeft: '3px solid #f43f5e', borderTop: 'none', borderRight: 'none', borderBottom: 'none' }}>
                          <Flex align="center" justify="between">
                            <Flex align="center" gap="4">
                              <i className="fa fa-envelope"></i>
                              <Flex direction="column" gap="1">
                                <Text size="3" weight="bold" className="font-sans text-white">Email</Text>
                                <Text size="1" color="gray" className="font-mono">{Player.contact.email}</Text>
                              </Flex>
                            </Flex>
                            <Text size="3" color="gray">↗</Text>
                          </Flex>
                        </Card>
                      </a>

                      <Card className="px-5 py-4" style={{ borderLeft: '3px solid #64748b', borderTop: 'none', borderRight: 'none', borderBottom: 'none' }}>
                        <Flex align="center" gap="4">
                          <i className="fa fa-phone"></i>
                          <Flex direction="column" gap="1">
                            <Text size="3" weight="bold" className="font-sans text-white">Phone</Text>
                            <Text size="1" color="gray" className="font-mono tracking-widest">{Player.contact.phone}</Text>
                          </Flex>
                        </Flex>
                      </Card>
                    </Flex>
                  </Flex>
                </Tabs.Content>
              </div>
            </Tabs.Root>
          </div>
          <Flex
            gap={"5"}
            align={"center"}
            className="motion-preset-slide-up-md mt-6 opacity-70 hover:opacity-100 transition-opacity"
          >
            <Link href="https://github.com/yxcinebendjebbar" target="_blank" color="gray" className="hover:text-white transition-colors">
              <GitHubLogoIcon className="w-6 h-6" />
            </Link>
            <Link href="https://www.instagram.com/yacine.jsx/" target="_blank" color="gray" className="hover:text-purple-400 transition-colors">
              <InstagramLogoIcon className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/yxcinebendjebbar/"
              target="_blank"
              color="gray"
              className="hover:text-blue-400 transition-colors"
            >
              <LinkedInLogoIcon className="w-6 h-6" />
            </Link>
          </Flex>
        </>
      )}
    </main>
  );
}

export default App;
