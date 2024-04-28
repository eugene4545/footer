import {
  Footer,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import {BsFacebook,} from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";



import docs from '../assets/Icon open-document.png';


export function Component() {
  return (
    <Footer className="bg-chainPrimary text-white" container >
      <div className="w-full mt-16">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 py-8">
          <div className="text-left">
            <FooterTitle className="text-white"  title="Chain Coop" />
            <p>
              The first cooperative with digital membership <br />
              in Nigeria. Earn fixed guaranteed returns <br /> 
              investing in businesses - all this via
              blockchain <br /> technology.
            </p>
           <div className="py-5 text-white">
           <p className="flex gap-4">
            Statute of the Chain Cooperative
            <img className="h-3 mt-2" src={docs} alt="" />
            </p>
            <p className="flex gap-4">
              Constitutive Act of the Chain Cooperative
              <img className="h-3 mt-2" src={docs} alt="" />
              </p>

           </div>
      
          </div>

          <div className="grid grid-cols-4 gap-8 sm:mt-1 sm:grid-cols-4 sm:gap-1 ml-12">
            <div className="text-left">
              <FooterTitle className="text-white" title="company" />
              <FooterLinkGroup className="text-white" col>
                <FooterLink href="#">About Us</FooterLink>
                <FooterLink href="#">Team</FooterLink>
                <FooterLink href="#">Career</FooterLink>
                <FooterLink href="#">Support</FooterLink>
              </FooterLinkGroup>
            </div>
            <div className="text-left">
              <FooterTitle className="text-white" title="Explore" />
              <FooterLinkGroup className="text-white" col>
                <FooterLink href="#">Why Chain Coop</FooterLink>
                <FooterLink href="#">Membership Cards</FooterLink>
                <FooterLink href="#">Projects</FooterLink>
                <FooterLink href="#">Blog</FooterLink>
              </FooterLinkGroup>
            </div>
            <div className="text-left">
              <FooterTitle className="text-white" title="Legal" />
              <FooterLinkGroup className="text-white" col>
                <FooterLink href="#">Privacy Policy</FooterLink>
                <FooterLink href="#">Terms & Conditions</FooterLink>
                <FooterLink href="#">Disclaimer</FooterLink>
              </FooterLinkGroup>
            </div>
            <div className="text-left">
              <FooterTitle className="text-white" title="Contact" />
              <FooterLinkGroup className="text-white" col>
                <FooterLink href="#">No. 9 Ogunlana Street,<br /> Ikosi Ketu, Lagos, Nigeria</FooterLink>
                <FooterLink href="#">info@chainerative.com.ng</FooterLink>
                <FooterLink href="#">+234 809 322 7696</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright className="text-white" href="#" by="2024 Chain Cooperative. All rights reserved."  />
          <div className="mt-4 flex space-x-3 sm:mt-0 sm:justify-center">
            <FooterIcon className="text-white" href="#" icon={BsFacebook} />
            <FooterIcon className="text-white" href="#" icon={GrInstagram} />
            <FooterIcon className="text-white" href="#" icon={FaTwitter} />
            <FooterIcon className="text-white" href="#" icon={FaLinkedinIn} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
