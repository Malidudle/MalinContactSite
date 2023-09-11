import { motion } from "framer-motion";
import styles from "./TechLogo.module.css";
import Image from "next/image";

interface Props {
  imageSrc: string;
  alt: string;
  width: number;
  height: number;
}

const TechLogo = ({ imageSrc, alt, width, height }: Props) => {
  return (
    <motion.div
      className={styles.logo}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
    >
      <Image src={imageSrc} width={width} height={height} alt={alt} draggable={false} />
    </motion.div>
  );
};

export default TechLogo;
