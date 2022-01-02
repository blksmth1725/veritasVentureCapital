import { Flex, Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import { Spacer } from "@chakra-ui/layout";
import Link from "next/link";
import React from "react";
import penAndPaper from "../public/images/penAndPaper.png";

const Navbar = () => {
  return (
    <div>
      <Flex bg="tomato" align="center">
        <Flex ml={10} bg="blue" align="center">
          <Image
            height={100}
            width={100}
            src={penAndPaper}
            alt="logo"
          />
          <Text>Veritas Venture Capital, LLC</Text>
        </Flex>
        <Spacer />
        <Box rounded="xl" bg="white" p={2}>
          <Flex gap={10}>
            <Link color="black" href="/">
              <a>Home</a>
            </Link>
            <Link href="/Navigation/AboutPage">
              <a>About Us</a>
            </Link>
            <Link href="/Navigation/MessagePage">
              <a>Message From CEO</a>
            </Link>
            <Link href="/Navigation/TeamsPage">
              <a>Team</a>
            </Link>

            <Link href="/Navigation/NewsPage">
              <a>News</a>
            </Link>

            <Link href="/Navigation/PortfolioAssetsPage">
              <a>Portfolio Assests</a>
            </Link>

            <Link href="/Navigation/ContactPage">
              <a>Contact</a>
            </Link>

            <Link href="/Navigation/FAQPage">
              <a>FAQ</a>
            </Link>
          </Flex>
        </Box>
        <Spacer />
      </Flex>
    </div>
  );
};

export default Navbar;
