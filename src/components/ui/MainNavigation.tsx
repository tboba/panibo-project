import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook} from "@fortawesome/free-brands-svg-icons"

const MainNavigation = () => {
  const defaultStyling = 'color-[#95bcf0] uppercase font-semibold tracking-tight mr-[2em]';

  return (
    <div className='flex justify-end items-baseline mr-[5em] mt-[2em] p-0'>
      <div className="ml-[3rem]">
      <NavLink to="/"
               className={props => props.isActive ? `${defaultStyling} pb-1 border-b-[4px] border-solid border-b-slate-900 mr-[2em]` : defaultStyling}
               end>
        O mnie
      </NavLink>

      <NavLink to="/blog"
               className={props => props.isActive ? `${defaultStyling} pb-1 border-b-[4px] border-solid border-b-slate-900 mr-[2em]` : defaultStyling}>
        Blog
      </NavLink>

      <NavLink to="/contact"
               className={props => props.isActive ? `${defaultStyling} pb-1 border-b-[4px] border-solid border-b-slate-900 mr-[2em]` : defaultStyling}>
        Kontakt
      </NavLink>

      <FontAwesomeIcon
        icon={faFacebook}
        className='fa-2xl cursor-pointer'
        onClick={() => window.open('https://www.facebook.com/pracownia.pani.bo')}
      />
      </div>
    </div>
  );
}

export default MainNavigation;