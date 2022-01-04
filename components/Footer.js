import { Box, Spacer, Flex, Link, Text } from "@chakra-ui/layout";
import React from "react";

function Footer() {
  return (
    <div>
      <Flex align="center">
        <Flex ml={10} mr={10} align="center">
          <Text>Veritas Venture Capital, LLC</Text>
        </Flex>
        <Spacer />
        <Box p={2}>
          <Flex gap={10}>
            <Link href="/">
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
}

export default Footer;
