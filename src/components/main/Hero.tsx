import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useMedia } from 'use-media';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Monika = require('../../static/images/monika.jpg');

const Hero = () => {
  const isWide = useMedia({ minWidth: '800px', minHeight: '650px' });

  return (
    <section className="pb-[5rem]">
      <div className="main-window-height flex items-center">
        <div className="flex w-full flex-row items-center justify-evenly">
          <p className="text-5xl font-semibold leading-[1.10] tracking-tight">
            Cześć,
            <br />
            Tutaj <span className="border-b-[4px] border-solid border-b-slate-900 pb-1">Monika.</span>
          </p>

          {isWide && (
            <div className="rounded-md border border-dashed border-slate-900 p-[1em]">
              <img src={Monika} alt="Monika" className="w-[25em]" />
            </div>
          )}
        </div>
      </div>

      {isWide && (
        <AnchorLink href="#aboutme">
          <div className="absolute left-[50%] bottom-[2em]">
            <FontAwesomeIcon icon={faArrowDown} className="fa-2x rounded-full border border-solid border-black p-2" />
          </div>
        </AnchorLink>
      )}
    </section>
  );
};

export default Hero;
