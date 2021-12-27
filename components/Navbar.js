import { Flex } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <Flex>
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
    </div>
  );
};

export default Navbar;
