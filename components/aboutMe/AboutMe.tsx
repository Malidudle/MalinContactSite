import Image from "next/image";
import styles from "./AboutMeSection.module.css";
import Portrait from "@/public/portraitPhoto/portrait.jpeg";
import Link from "next/link";

const AboutMeSection = () => {
  return (
    <div className={styles.aboutMeContainer}>
      <div className={styles.row}>
        <Image
          className={styles.portrait}
          src={Portrait}
          width={130}
          height={130}
          alt="Portrait Photo"
        />
        <h1 className={styles.header}>More About me!</h1>
      </div>
      <ul className={styles.aboutMe}>
        <li>17 year old student living in Edinburgh</li>
        <li>
          Co founder of{" "}
          <Link className={styles.link} href="https://kamicards.co/">
            Kami Cards Nfc Business cards
          </Link>
        </li>
        <li>Passionate about the future of robotics and Ai</li>
        <li>
          Connect with me on{" "}
          <Link className={styles.link} href="https://www.linkedin.com/in/malin-grafton-59972b260/">
            LinkedIn!
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AboutMeSection;
