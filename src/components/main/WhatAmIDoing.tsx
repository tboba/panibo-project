import {Link} from "react-router-dom";

const RunnerOne = require('../../static/running/run-1.jpg');
const RunnerTwo = require('../../static/running/run-2.jpg');
const RunnerThree = require('../../static/running/run-3.jpg');
const WorkOne = require('../../static/work/work-1.jpg');
const WorkTwo = require('../../static/work/work-2.jpg');
const WorkThree = require('../../static/work/work-3.jpg');

const WhatAmIDoing = () => {
  return (
    <div>
      <div className='flex justify-around items-center'>
        <div className='flex flex-col'>
          <img src={RunnerOne} alt='To Remove' className='w-[30em] mb-[3em] pl-5 border-l-4 border-black' />
          <img src={RunnerTwo} alt='To Remove' className='w-[30em] mb-[3em] pl-5 border-l-4 border-black' />
          <img src={RunnerThree} alt='To Remove' className='w-[30em] object-cover pl-5 border-l-4 border-black' />
        </div>
        <h2 className='md:mr-[5em] font-bold text-4xl tracking-wider'>Kocham biegać.</h2>
      </div>

      <hr className='my-16 mx-52' />

      <div className='flex justify-around items-center'>
        <h2 className='ml-[5em] font-bold text-4xl tracking-wider'>Tworzyć rękodzieło.</h2>
        <div className='flex flex-col'>
          <img src={WorkOne} alt='To Remove' className='w-[30em] mb-[3em] pr-5 border-r-4 border-black' />
          <img src={WorkTwo} alt='To Remove' className='w-[30em] mb-[3em] pr-5 border-r-4 border-black' />
          <img src={WorkThree} alt='To Remove' className='w-[30em] pr-5 border-r-4 border-black' />
        </div>
      </div>

      <div className='mt-[8em] mb-[8em]'>
        <h2 className='text-center font-semibold text-3xl mb-4'>Oraz pisać bloga.</h2>
        <Link to='/blog'>
          <button className='block m-auto text-lg uppercase tracking-widest text-white px-[5em] py-[1em] bg-indigo-400 rounded-lg'>Sprawdź moje wpisy!</button>
        </Link>
      </div>
    </div>
  );
}

export default WhatAmIDoing;