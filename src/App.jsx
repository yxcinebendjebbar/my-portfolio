import { useState } from "react";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaLinkedin,
  FaGlobe,
  FaInstagram,
  FaTelegram,
  FaDiscord,
} from "react-icons/fa";
import myAvatar from "./assets/my-avatar.jpg";
import univLearn from "./assets/univ-learn.png";
import projectp from "./assets/project-p.png";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="h-screen w-screen overflow-x-hidden flex flex-col items-center dark text-white bg-neutral-950">
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className="py-3"
      >
        <NavbarBrand>
          <Avatar
            isBordered
            color="primary"
            radius="lg"
            src={myAvatar}
            size="md"
          />
          <p className="ml-2 text-xl sm:text-2xl uppercase font-Righteous dark:text-white">
            Yacine.Bendjebbar
          </p>
        </NavbarBrand>
        <NavbarContent
          className="hidden sm:flex gap-4 uppercase font-Righteous"
          justify="end"
        >
          <NavbarItem>
            <Link color="foreground" className="text-xl" href="#about">
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" className="text-xl" href="#experiences">
              Experiences
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" className="text-xl" href="#projects">
              Projects
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
        <NavbarMenu className="mt-6 dark font-Righteous gap-8 items-center">
          <NavbarMenuItem>
            <Link
              color="foreground"
              className="text-3xl"
              href="#about"
              onPress={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              color="foreground"
              className="text-3xl"
              href="#experiences"
              onPress={() => setIsMenuOpen(false)}
            >
              Experiences
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link
              color="foreground"
              className="text-3xl"
              href="#projects"
              onPress={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem className="mt-auto mb-8">
            <p className="dark:text-white font-sans">Made with ❤ by Yacine</p>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
      <section
        id="about"
        className="w-screen mt-16 px-8 lg:px-32 md:grid grid-cols-2 gap-8 place-items-center"
      >
        <div>
          <div className="w-40 lg:w-72">
            <h2 className="font-Righteous text-4xl lg:text-6xl text-center">
              About me
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              className="h-1 w-full bg-blue-600 rounded"
            ></motion.div>
          </div>
          <p className="mt-8 text-lg lg:text-2xl">
            <span className="text-xl font-Acme lg:text-3xl">Hello, </span>I am
            Yacine Bendjebbar, a software engineer who focuses on building web
            applications. Also founder of Game Makers Algeria. I am based in
            Algeria. <br />
            Passionate about web development, a game developer and a tech
            enthusiast.
          </p>
        </div>
        <Avatar
          className="hidden md:block w-64 h-64"
          radius="lg"
          src={myAvatar}
          isBordered
          color="primary"
        />
      </section>
      <section id="experiences" className="w-screen mt-16 px-8 lg:px-32">
        <div className="w-[17rem] lg:w-[28rem]">
          <h2 className="font-Righteous text-4xl lg:text-6xl text-center">
            My Experiences
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            className="h-1 w-full bg-blue-600 rounded"
          ></motion.div>
        </div>
        <div className="flex flex-col gap-8 items-center justify-center md:flex-row md:flex-wrap lg:flex-nowrap">
          <Card
            isHoverable
            className="w-64 lg:w-72 h-64 p-4 mt-8 lg:mt-16 hover:outline-2 hover:outline-primary-400"
          >
            <CardHeader>
              <h2 className="font-Righteous text-xl">Forspex Entertainment</h2>
            </CardHeader>
            <CardBody className="overflow-hidden">
              <p className="text-lg">Roles:</p>
              <div className="">
                <div>
                  ⚪ Frontend Developer
                  <p className="text-default-400 text-sm ml-7">
                    Feb 2023 - Present
                  </p>
                </div>
                <div>
                  ⚪ Game Tester
                  <p className="text-default-400 text-sm ml-7">
                    Jan 2021 - Present
                  </p>
                </div>
              </div>
            </CardBody>
            <CardFooter className="justify-center gap-2 h-8">
              <Link
                isExternal
                color="foreground"
                href="https://www.forspex.com"
              >
                <FaGlobe size={24} />
              </Link>
              <Link
                isExternal
                color="foreground"
                href="https://www.linkedin.com/company/forspex"
              >
                <FaLinkedin size={24} />
              </Link>
            </CardFooter>
          </Card>
          <Card
            isHoverable
            className="w-64 lg:w-72 h-64 p-4 mt-8 lg:mt-16 hover:outline-2 hover:outline-primary-400"
          >
            <CardHeader>
              <h2 className="font-Righteous text-xl">GDSC Tlemcen</h2>
            </CardHeader>
            <CardBody>
              <p className="text-lg">Roles:</p>
              <div className="">
                <div>
                  ⚪ Event Organizer
                  <p className="text-default-400 text-sm ml-7">
                    Oct 2023 - June 2024
                  </p>
                </div>
              </div>
            </CardBody>
            <CardFooter className="justify-center gap-2">
              <Link
                isExternal
                color="foreground"
                href="https://www.linkedin.com/company/gdsc-tlemcen"
              >
                <FaLinkedin size={24} />
              </Link>
            </CardFooter>
          </Card>
          <Card
            isHoverable
            className="w-64 lg:w-72 h-64 p-4 mt-8 lg:mt-16 hover:outline-2 hover:outline-primary-400"
          >
            <CardHeader>
              <h2 className="font-Righteous text-xl">Scorpio</h2>
            </CardHeader>
            <CardBody>
              <p className="text-lg">Roles:</p>
              <div className="">
                <div>
                  ⚪ Training Manager
                  <p className="text-default-400 text-sm ml-7">
                    Mar 2023 - Dec 2023
                  </p>
                </div>
              </div>
            </CardBody>
            <CardFooter className="justify-center gap-2">
              <Link
                isExternal
                color="foreground"
                href="https://www.linkedin.com/company/uabtscorpioclub"
              >
                <FaLinkedin size={24} />
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section>
      <section id="projects" className="w-screen mt-16 px-8 lg:px-32">
        <div className="w-52 lg:w-96">
          <h2 className="font-Righteous text-4xl lg:text-6xl text-center">
            My Projects
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            className="h-1 w-full bg-blue-600 rounded"
          ></motion.div>
        </div>
        <div className="grid place-items-center md:grid-cols-2">
          <Card
            isFooterBlurred
            className="w-64 md:w-72 lg:w-80 h-64 mt-8 lg:mt-16"
          >
            <CardHeader className="absolute z-10 top-1 flex-col !items-center">
              <h2 className="text-black font-Righteous text-2xl">UNIV-LEARN</h2>
            </CardHeader>
            <Image
              removeWrapper
              draggable={false}
              alt="card background"
              className="z-0 w-full h-full object-cover"
              src={univLearn}
            />
            <CardFooter className="absolute bottom-0 gap-2 flex-col justify-center border-white/20 border-1 shadow-small z-10 left-0">
              <Link isExternal href="https://univ-learn.vercel.app/">
                <Button color="primary" variant="ghost">
                  View Project
                </Button>
              </Link>
              <Link
                isExternal
                href="https://github.com/yxcinebendjebbar/UNIV-LEARN"
              >
                <Button color="secondary" variant="ghost">
                  Github
                </Button>
              </Link>
            </CardFooter>
          </Card>
          <Card
            isFooterBlurred
            className="w-64 md:w-72 lg:w-80 h-64 mt-8 lg:mt-16"
          >
            <CardHeader className="absolute z-10 top-1 flex-col !items-center">
              <h2 className="text-black font-Righteous text-2xl">Project-P</h2>
            </CardHeader>
            <Image
              removeWrapper
              draggable={false}
              alt="card background"
              className="z-0 w-full h-full object-cover"
              src={projectp}
            />
            <CardFooter className="absolute bottom-0 gap-2 flex-col justify-center border-white/20 border-1 shadow-small z-10 left-0">
              <Link
                isExternal
                href="https://github.com/yxcinebendjebbar/project_p"
              >
                <Button color="secondary" variant="ghost">
                  Github
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section>
      <footer className="w-screen mt-8 py-4 flex flex-col justify-center items-center">
        <h2 className="my-2">Reach out to me</h2>
        <div className="grid place-items-center grid-cols-4 gap-2">
          <Link
            isExternal
            color="foreground"
            href="https://www.facebook.com/yxcinebendjebbar"
          >
            <FaFacebook size={24} />
          </Link>
          <Link
            isExternal
            color="foreground"
            href="https://www.instagram.com/yacine.jsx/"
          >
            <FaInstagram size={24} />
          </Link>
          <Link
            isExternal
            color="foreground"
            href="https://t.me/yxcinebendjebbar"
          >
            <FaTelegram size={24} />
          </Link>
          <Link
            isExternal
            color="foreground"
            href="https://discordapp.com/users/424637166509883392"
          >
            <FaDiscord size={24} />
          </Link>
        </div>
      </footer>
    </main>
  );
}

export default App;
