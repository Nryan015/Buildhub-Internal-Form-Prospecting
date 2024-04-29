import BuildHubLogo from "../images/buildhub-logo.png";
import "../styles/styles.css"

function Logo() {
  return (
    <div className="header2">
      <img src={BuildHubLogo} alt="Logo" className="logo" />
    </div>
  );
}

export default Logo;
