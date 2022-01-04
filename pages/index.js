import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { Flex, Text, Box, Heading } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>V.V.C</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex mb={5} mt={5} gap={6}>
        <Heading>Investment Strategies</Heading>
        <Text>
          The private equity strategy targets growth-oriented private
          companies from early to late stages, with an emphasis on
          businesses based in the U.S., China, Canada and India.
          Veritas Venture Capital invests around 70% of its capital in
          early stage (Regulation A+) startups, and 30% directed
          toward Series C startups Currently investment sectors
          include Biopharmaceuticals, Artificial Intelligence,
          Blockchain Technologies, Cannabis CBD, Nutraceuticals and
          Food Retail.
        </Text>
      </Flex>

      <Box gap={6}>
        <Heading>Funding for the Future...</Heading>
        <Text>
          The future isn’t built by dreamers. It’s built today, by
          doers. By people with singularity of focus. Trust, focus,
          and impact are key tenets of our culture. Trust keeps us
          accountable to ourselves and our partners, and helps foster
          lasting relationships with our companies and business
          incubators. Focus applies to our discipline and our
          investment strategy – building future focused portfolios
          allows us to keep a high bar, and dedicate more time to each
          of our investments. Finally, the desire to make a positive
          impact is why we have spent our careers investing. Our focus
          is crafted by people who live on the edge of social,
          environmental, scientific and cultural trends, who
          understand where things are heading. Building tomorrow is
          the work of many hands and minds, not one person alone. And
          the future hinges on the support of a partner who
          understands that. At Veritas Venture Capital, LLC, we
          believe tomorrow is built today.
        </Text>
      </Box>

      <Box mt={20}>
        <Heading>Subscribe</Heading>
        <Text>Sign up to our newsletter and stay up to date</Text>
        <Input mt={4} placeholder="Enter Email Address" />
        <Button mt={4} mb={4}>
          Submit
        </Button>
        <Text>
          By submitting your information, you are granting us
          permission to email you. You may unsubscribe at any time.
        </Text>
      </Box>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}
