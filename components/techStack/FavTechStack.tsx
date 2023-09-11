"use client";

import styles from "./FavTechStack.module.css";
import TechLogo from "@/components/techStack/techLogos/TechLogo";
import ReactLogo from "@/public/techLogos/react.svg";
import TypeScriptLogo from "@/public/techLogos/typescript.svg";
import PrismaLogo from "@/public/techLogos/prisma.svg";
import NextJsLogo from "@/public/techLogos/next-js.svg";
import { useState } from "react";

const techInfo = [
  {
    technology: "Starting",
    explanation:
      "These are my four staples that I use very often for web development! Click on one of the logos above to find out more about these technologies!",
  },
  {
    technology: "React",
    explanation:
      "React is a popular JavaScript library for building user interfaces. It enables developers to create reusable UI components and efficiently manage the state of their applications.",
  },
  {
    technology: "Next.js",
    explanation:
      "Next.js is a robust framework that streamlines the development of web applications by offering out-of-the-box features like server-side rendering, routing and more.",
  },
  {
    technology: "TypeScript",
    explanation:
      "TypeScript is a statically typed superset of JavaScript that adds type checking to your code. It helps catch errors during development and enhances code quality and maintainability.",
  },
  {
    technology: "Prisma",
    explanation:
      "Prisma is a modern database toolkit for TypeScript and JavaScript. It simplifies database access with a type-safe and auto-generated query builder, making it easier to work with databases.",
  },
];

const FavTechStack = () => {
  const [info, setInfo] = useState("Starting");
  const prismaTech = techInfo.find((tech) => tech.technology === info);
  return (
      <div className={styles.infoBox}>
        <h2 className={styles.title}>Web Tech Favoutites</h2>
        <ul className={styles.techList}>
          <li className={styles.itemRow}>
            <span onClick={() => setInfo("React")}>
              <TechLogo
                imageSrc={ReactLogo}
                width={70}
                height={70}
                alt="React Logo"
              />
            </span>
            <span onClick={() => setInfo("Next.js")}>
              <TechLogo
                imageSrc={NextJsLogo}
                width={70}
                height={70}
                alt="nextJS Logo"
              />
            </span>
          </li>
          <li className={styles.itemRow}>
            <span onClick={() => setInfo("TypeScript")}>
              <TechLogo
                imageSrc={TypeScriptLogo}
                width={70}
                height={70}
                alt="typescript logo"
              />
            </span>
            <span onClick={() => setInfo("Prisma")}>
              <TechLogo
                imageSrc={PrismaLogo}
                width={70}
                height={70}
                alt="prisma logo"
              />
            </span>
          </li>
        </ul>
        <div className={styles.info}>
          <p>{String(prismaTech?.explanation)}</p>
        </div>
      </div>
  );
};

export default FavTechStack;
