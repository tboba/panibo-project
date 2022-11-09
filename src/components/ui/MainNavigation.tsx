import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const MainNavigation = () => {
  const defaultStyling = 'color-[#95bcf0] uppercase font-semibold tracking-tight mr-[2em]';

  return (
    <header className="mr-[5em] mt-[2em] flex items-baseline justify-end p-0">
      <div className="ml-[3rem]">
        <NavLink
          to="/"
          className={(props) =>
            props.isActive
              ? `${defaultStyling} mr-[2em] border-b-[4px] border-solid border-b-slate-900 pb-1`
              : defaultStyling
          }
          end
        >
          O mnie
        </NavLink>

        <NavLink
          to="/blog"
          className={(props) =>
            props.isActive
              ? `${defaultStyling} mr-[2em] border-b-[4px] border-solid border-b-slate-900 pb-1`
              : defaultStyling
          }
        >
          Blog
        </NavLink>

        <NavLink
          to="/contact"
          className={(props) =>
            props.isActive
              ? `${defaultStyling} mr-[2em] border-b-[4px] border-solid border-b-slate-900 pb-1`
              : defaultStyling
          }
        >
          Kontakt
        </NavLink>

        <FontAwesomeIcon
          icon={faFacebook}
          className="fa-2xl cursor-pointer"
          onClick={() => window.open('https://www.facebook.com/pracownia.pani.bo')}
        />
      </div>
    </header>
  );
};

export default MainNavigation;
