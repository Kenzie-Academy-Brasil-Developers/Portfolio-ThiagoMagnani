import footer from "../style/footer.module.css";
import { contacts } from "../data/contacts.js";
import { ContactsCard } from "./contacts";

export const Footer = () => {
  return (
    <section id="footer" className={footer.fotContact}>
      <div className={footer.forContainer}>
        <h2 className={footer.title}>Contato</h2>
          <ul className={footer.listButtonFot}>
          <button className={footer.buttonFotter}>
            {contacts.map((contact) => {
              return <ContactsCard key={contact.id} img={contact.img} link={contact.link} />;
            })}
          </button>
        </ul>
      </div>
    </section>
  );
};
