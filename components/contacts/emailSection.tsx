import styles from "./emailSection.module.css";
import {
  IconChevronCompactDown,
  IconArrowBigLeftFilled,
} from "@tabler/icons-react";
import { GetInTouchSimple } from "./emailForm/emailForm";

const EmailSection = () => {
  const word = "Or.......";

  const wordSpans = word.split("").map((char, index) => (
    <span className={styles.letter} key={String(index)}>
      {char}
    </span>
  ));
  return (
    <>
      <div className={styles.curlingOr}>
        <div className={styles.wordOr}>{wordSpans}</div>
      </div>
      <div className={styles.emailContact}>
        <IconChevronCompactDown
          className={styles.chevron}
          width={40}
          height={40}
        />
      </div>
      <div className={styles.emailContact}>
        <GetInTouchSimple />
      </div>
    </>
  );
};

export default EmailSection;
