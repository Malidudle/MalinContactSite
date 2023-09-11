import Contacts from "@/components/contacts/contactSec";
import styles from "./page.module.css";
import EmailSection from "@/components/contacts/emailSection";

const ContactMe = () => {
  return (
    <main className={styles.main}>
      <div className={styles.contactBox}>
        <Contacts />
      </div>
      <EmailSection />
    </main>
  );
};

export default ContactMe;
