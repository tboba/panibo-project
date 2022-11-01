import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";
import {useMedia} from "use-media";
import React from "react";
import { HashLink as Link } from 'react-router-hash-link';

const Monika = require('../../static/monika.jpg');

const Hero = () => {
  const isWide = useMedia({minWidth: '800px', minHeight: '650px'});

  return <>
    <div className='flex items-center main-window-height'>
      <div className='flex flex-row justify-evenly items-center w-full'>
        <p className='font-semibold tracking-tight text-5xl leading-[1.10]'>
          Cześć,
          <br/>
          Tutaj <span className='pb-1 border-b-[4px] border-solid border-b-slate-900'>Monika.</span>
        </p>

        {isWide &&
            <div className='p-[1em] border border-dashed rounded-md border-slate-900'>
                <img src={Monika} alt="Monika" className='w-[25em]'/>
            </div>
        }

      </div>
    </div>

    <Link to='#aboutme'>
      <div className='absolute left-[50%] bottom-[2em]'>
        <FontAwesomeIcon icon={faArrowDown} className='fa-2x rounded-full border border-black border-solid p-2'/>
      </div>
    </Link>
  </>
}

export default Hero;