
import "./header.css";
import landing from '../../assets/landing.png'
import HeaderLink from "./headerLink";
const Header = (props) => {
  return (
    <div className="header-container">
      <div className="links-container">
            <HeaderLink url="https://www.facebook.com/TheValleyDBS/?locale=es_ES" text="Facebook"></HeaderLink>
            <HeaderLink url="https://www.instagram.com/thevalleydbs/?hl=es" text="Instagram"></HeaderLink>
            <HeaderLink url="https://twitter.com/TheValleyDBS?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" text="Twitter"></HeaderLink>
          
      </div>
      <img className="logo" src={landing}></img>
      <div className="button-container">
            <HeaderLink text="Docu React"></HeaderLink>
            <HeaderLink url="https://thevalley.es/" linkStyle="button" text="Ir a The Valley"></HeaderLink>
      </div>
    </div>
  );
};
export default Header;
