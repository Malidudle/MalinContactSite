"use client";

import styles from "./languageSkills.module.css";
import TechLogo from "@/components/techStack/techLogos/TechLogo";
import RustLogo from "@/public/techLogos/rust.svg"
import PythonLogo from "@/public/techLogos/python.svg"
import { useState } from "react";

const techInfo = [
  {
    technology: "Starting",
    explanation:
      "These are my favourite languages that I am either learning or use often for all sorts of projects. Click on one of the logos above to find out more about these languages and their uses!",
  },
  {
    technology: "Rust",
    explanation:
      "On my journey in robotics, Rust stands out as the ideal choice. Renowned for its emphasis on memory safety and high performance, Rust's modular code structure, strong typing, and ownership system align perfectly with my ambitions in system-level programming for robotics applications.",
  },
  {
    technology: "Python",
    explanation:
      "Python is arguably the best language for machine learning. Renowned for its simplicity and versatility, Python's clear syntax, large array of libraries, and automatic memory management make it an ideal choice for venturing into the world of artificial intelligence.",
  },
];

const FavLanguages = () => {
  const [info, setInfo] = useState("Starting");
  const prismaTech = techInfo.find((tech) => tech.technology === info);
  return (
    <div className={styles.infoBox}>
      <h2 className={styles.title}>General Programming Favoutites</h2>
      <ul className={styles.techList}>
        <li className={styles.itemRow}>
          <span onClick={() => setInfo("Rust")}>
            <TechLogo
              imageSrc={RustLogo}
              width={70}
              height={70}
              alt="Rust Logo"
            />
          </span>
          <span onClick={() => setInfo("Python")}>
            <TechLogo
              imageSrc={PythonLogo}
              width={70}
              height={70}
              alt="Python Logo"
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

export default FavLanguages;
