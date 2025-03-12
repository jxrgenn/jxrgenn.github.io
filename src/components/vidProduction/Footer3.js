import logo from "../../assets/img/black-sheep-blackbg.png";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";

export const Footer3 = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logo} alt="Logo" className="footer-logo" />
        <div className="social-icons">
          <a href="#" className="social-link">
          <img src={navIcon3} alt="Logo" className="footer-logo" />          </a>
          <a href="#" className="social-link">
          <img src={navIcon2} alt="Logo" className="footer-logo" />          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer3;

// Updated CSS
const styles = `
.footer {
  background-color: #111111;
  padding: 2rem 1rem;
  border-top: 1px solid #333333;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-logo {
  height: 40px;
  width: auto;
  filter: grayscale(100%) brightness(500%);
}

.social-icons {
  display: flex;
  gap: 1.5rem;
}

.social-link {
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.social-link:hover {
  opacity: 0.7;
}

.social-link .fab {
  font-size: 1.5rem;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}
`;

// Required in HTML head:
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />