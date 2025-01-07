"use client";

import React, { ReactNode } from "react";
import NextLink from "next/link";
import Footer from "@/app/components/footer/footer";
import { GlowingText } from "@/app/components/reusables/content";
import { LINKS, REPO_SOURCE, SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const ThisSiteTools = [
  "TypeScript",
  "ReactJS",
  "Figma",
  "NextJS",
  "Framer-motion",
  "TailwindCSS",
  "MDX",
  "GitHub Actions",
  "Terraform",
  "AWS",
  "Playwright",
  "Jest",
  "Docker",
];

interface CardProps extends React.HTMLProps<HTMLDivElement> {
  title: string;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <motion.div
      animate={{
        opacity: 1,
        y: 0,
      }}
      initial={{
        opacity: 0,
        y: -20,
      }}
      transition={{
        duration: 0.4,
        ease: "easeInOut",
      }}
      className="rounded-[2rem] border border-white/10 p-4"
    >
      <div className="flex flex-col items-center gap-2 text-xl">
        <div className="dimmed-3 max-w-[370px] text-center sm:max-w-[550px] md:max-w-[650px] lg:max-w-[850px]">
          <h3 className="glows-dimmed dimmed-4 text-2xl font-bold">{title}</h3>
          <div>{children}</div>
        </div>
      </div>
    </motion.div>
  );
};
export default function Page() {
  return (
    <>
      <div className="mt-12"></div>
      <div className="mt-8 flex flex-col items-center justify-center gap-6 md:mt-20">
        <code>
          <MajorHeading title="~ whoami" />
        </code>
        <Card title="">
          <p>
            I&apos;m a poker player, chess player, anthropology aficionado,
            cinema enthusiast, and software engineer.
          </p>
        </Card>
        <div className="">
          <Card title="">
            <p>
              Throughout the years I&apos;ve had the privilge to collaborate
              with numerous individuals, teams and startups worldwide, to build,
              scale, and lead software projects.
            </p>
          </Card>
        </div>
        <div className="hidden">
          <MajorHeading id="stack" title="Stack" />
        </div>
        <Card title="">
          <p>
            Regarding software, I&apos;ve done it all, been there, done that,
            all the way from bare metal to frontend.
            <br />
            (this site is open
            <Link href={REPO_SOURCE} name="source" /> btw). <br />
          </p>
        </Card>
        <Card title="">
          <p>
            I also do some open source from time to time, where you can find me
            publishing libraries on <br />
            <Link href={LINKS.npm} name="npm" />,
            <Link href={LINKS.crates} name="crates" /> and
            <Link href={LINKS.pypi} name="pypi" />
          </p>
        </Card>
        <Card title="">
          <p>
            I am currently <Link href={"/services"} name="open" />
            to engaging in selective consulting contracts and project
            partnerships. If you&apos;re looking to scale SaaS products, or
            enhance your team capabilities,
            <br />
            <Link href={"/contact"} name="let's talk." />
          </p>
        </Card>
        {/* <Card title="">
          <p>
            As of now, I specialize primarily in object-oriented design and
            analysis in
            <Link href="/blog/tag/python" name="Python" /> and
            <Link href="/blog/tag/typescript" name="TypeScript" />, with a heavy
            focus on HTTP 1.1/2,, containerization, and cloud services (mostly
            AWS).
          </p>
        </Card> */}

        <div id="about-this-site" className="hidden">
          {" "}
          <MajorHeading title={SITE_NAME || "About The Website"} />
          <Card title="">
            <p>
              This site is open
              <Link href={REPO_SOURCE} name="source," /> and made using the
              following technologies for prototyping, provisioning, development,
              testing, and deployment.
            </p>
          </Card>
          <Card title="">
            <div className="dimmed-4 flex flex-wrap items-center justify-center gap-[0.625rem] text-sm">
              {ThisSiteTools.map((tech) => (
                <span
                  key={tech}
                  className="relative rounded-full border border-white/10 px-2 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
      <div className="mt-10"></div>
      <MinorHeading title="" />
      <Footer></Footer>
    </>
  );
}

interface BaseHeadingProps {
  children: ReactNode;
  className?: string;
  id?: string;
}
const BaseHeading = (props: BaseHeadingProps) => {
  return (
    <motion.h2
      id={props.id}
      animate={{
        opacity: 1,
        x: 0,
      }}
      initial={{
        opacity: 0,
        x: -30,
      }}
      transition={{
        duration: 0.2,
        ease: "easeInOut",
      }}
      className={cn(props.className)}
    >
      {props.children}
    </motion.h2>
  );
};

type HeadingProps = { title: string; id?: string };
const MinorHeading = ({ title, id }: HeadingProps) => {
  return (
    <BaseHeading id={id} className="glows-dimmed dimmed-4 text-1xl font-bold">
      {title}
    </BaseHeading>
  );
};

const MajorHeading = ({ title, id }: HeadingProps) => {
  return (
    <BaseHeading id={id} className="glows-dimmed dimmed-4 text-2xl font-bold">
      {title}
    </BaseHeading>
  );
};

const Link = ({ href, name }: { href: string; name: string }) => {
  return (
    <NextLink href={href}>
      <GlowingText>{name}</GlowingText>
    </NextLink>
  );
};
