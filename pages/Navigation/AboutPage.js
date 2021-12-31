import React from "react";
import { Box, Flex, Grid, Spacer, Text } from "@chakra-ui/layout";
import Link from "next/link";

const AboutPage = () => {
  return (
    <Box>
      <Box mb={20}>
        <h1>Our Mission</h1>
        <Text>
          Our mission is to serve the world’s most extraordinary
          companies and extraordinary people who are building
          tomorrow’s companies today. We have global reach, with a
          presence and access to resources in Silicon Valley, China,
          Canada, Columbia, Australia, India, Europe, and Southeast
          Asia. Our broad global footprint enables our portfolio
          companies to better understand future growth opportunities
          and expand internationally. Of more than the 30 companies we
          have one hundred percent owned or partnered with since our
          founding, a third have either IPO’d or been acquired. And we
          have celebrated at least one IPO a year since our inception.
        </Text>
      </Box>
      <Spacer />
      <Box mb={20}>
        <h1>Companies in our portfolio</h1>
        <Text>
          Our latest acquisitions and partners spanning Blockchain,
          Artificial Intelligence, Biopharmaceuticals, and more..
          Click on any company in our latest acquisition portfolio
          below to experience what the future holds.
        </Text>
      </Box>
      <Box>
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          <Link href="https://floragrowth.ca/">Flora-Growth</Link>
          <Link href="https://bit-digital.com/">Bit-Digital</Link>
          <Link href="https://www.ei.ventures/">
            Emotional Intelligence Ventures
          </Link>
          <Link href="https://store.robotcache.com/#!/home">
            Robot Cache Beta
          </Link>
          <Link href="https://www.qualcan.com/home/">Qualcan</Link>
          <Link href="https://cloudastructure.com/">
            Clouda Structure
          </Link>
          <Link href="https://homebistro.com/">Home Bistro</Link>
          <Link href="https://bitfarms.com/">Bit Farms</Link>
          <Link href="https://www.brazilpotash.com/">
            Potassio Do Brasil
          </Link>
          <Link href="https://digihost.ca/docs/">Digi-Host</Link>
          <Link href="https://emeraldpharma.com">EHP</Link>
          <Link href="https://marathondh.com/">
            Marathon Digital Holdings
          </Link>
        </Grid>
      </Box>
    </Box>
  );
};

export default AboutPage;
