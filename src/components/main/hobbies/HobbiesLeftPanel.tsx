import {useMedia} from "use-media";

const RunnerOne = require('../../../static/images/running/run-1.jpg');
const RunnerTwo = require('../../../static/images/running/run-2.jpg');
const RunnerThree = require('../../../static/images/running/run-3.jpg');

const HobbiesLeftPanel = () => {
  const isWide = useMedia({minWidth: '930px'});
  return (
    <>
      {isWide && generateWideDisplay()}
      {!isWide && generateNonWideDisplay()}
    </>
  )
}

const generateWideDisplay = () => {
  return <div className='flex justify-evenly items-center'>
    <div className='flex flex-col'>
      <img src={RunnerOne} alt='Selfie w górach' className='w-[30em] mb-[3em] pl-5 border-l-4 border-black'/>
      <img src={RunnerTwo} alt='Siedzę na plaży z medalem' className='w-[30em] mb-[3em] pl-5 border-l-4 border-black'/>
      <img src={RunnerThree} alt='Kończę bieg dla WOŚPu'
           className='w-[30em] object-cover pl-5 border-l-4 border-black'/>
    </div>
    <h2 className='font-bold text-4xl tracking-wider'>Kocham biegać,</h2>
  </div>
}

const generateNonWideDisplay = () => {
  return <div className='flex flex-col items-center'>
    <h2 className='font-bold text-4xl tracking-wider'>Kocham biegać,</h2>
    <div className='my-8'>
      <img src={RunnerOne} alt='Selfie w górach'
           className='w-[30em] mb-[3em] border border-transparent rounded-lg shadow'/>
      <img src={RunnerTwo} alt='Siedzę na plaży z medalem'
           className='w-[30em] mb-[3em] border border-transparent rounded-lg shadow'/>
      <img src={RunnerThree} alt='Kończę bieg dla WOŚPu'
           className='w-[30em] border border-transparent rounded-lg shadow'/>
    </div>
  </div>
}


export default HobbiesLeftPanel;