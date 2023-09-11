"use client";

import { useState } from "react";
import styles from "./contactSec.module.css";
import { IconArrowBearRight } from "@tabler/icons-react";

const Contacts = () => {
  const phoneNumber = "+44 07548807818";
  const [hover, setHover] = useState(false);

  const clickHandler = async (text: string) => {
    await navigator.clipboard.writeText(text);
  };

  const phoneNumberSpans = phoneNumber.split("").map((char, index) => (
    <span className={styles.letter} key={String(index)}>
      {char}
    </span>
  ));

  return (
    <div>
      <span className={hover ? styles.fadedOutTextBox : styles.fadedInTextBox}>
        Hello I'm Malin
        <br />
        Grafton Contact
        <br />
        me for dev work
        <br />
      </span>
      <div
        style={{ whiteSpace: "pre" }}
        className={styles.phoneNumber}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => clickHandler(phoneNumber)}
      >
        {phoneNumberSpans}
      </div>
      <p className={styles.infoBox}>
        <IconArrowBearRight width={17} height={17} className={styles.arrow} />
        <span key="CopyTip" id="clicktocopy">click to copy</span>
      </p>
    </div>
  );
};

export default Contacts;
