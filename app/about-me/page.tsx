import AboutMeSection from "@/components/aboutMe/AboutMe";
import styles from "./page.module.css";
import FavTechStack from "@/components/techStack/FavTechStack";
import FavLanguages from "@/components/languageSkills/languageSkills";

const AboutMe = () => {
  return (
    <main className={styles.main}>
      <AboutMeSection />
      <FavTechStack />
      <FavLanguages />
    </main>
  );
};

export default AboutMe;
