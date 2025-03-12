import { Footer } from "flowbite-react";
import MailchimpForm from "../MailchimpForm";
import logo from "../../assets/img/black-sheep-blackbg.png";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";

export const FooterComponent = () => {
  return (
    <div className="w-full max-w-7xl mx-auto">
    <Footer container className="bg-black rounded-none py-6 w-full max-w-7xl mx-auto" >
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full max-w-7xl mx-auto" >
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt="Logo"
              className="h-16 w-auto max-w-xs object-contain"
            />
          </div>

          {/* Social & Copyright Section */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-6">
              <Footer.Icon
                href="#"
                icon={() => <img src={navIcon2} alt="Social Icon 2" className="h-6 w-6 object-contain" />}
              />
              <Footer.Icon
                href="#"
                icon={() => <img src={navIcon3} alt="Social Icon 3" className="h-6 w-6 object-contain" />}
              />
            </div>

            <Footer.Copyright
              href="#"
              by="Black Sheep"
              year={2022}
              className="text-white !text-base"
            />
          </div>
        </div>
      </div>
    </Footer>
    </div>
  );
};

export default FooterComponent;