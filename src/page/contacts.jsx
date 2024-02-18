import footer from "../style/footer.module.css"

export const ContactsCard = ({ img, link }) => {
  return (
    <li className={footer.logo}>
      <a href={link} target="_blank">
        <img src={img} alt="Contact" />
      </a>
    </li>
  );
};
