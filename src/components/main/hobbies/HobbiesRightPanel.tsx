import {useMedia} from "use-media";

const WorkOne = require('../../../static/images/work/work-1.jpg');
const WorkTwo = require('../../../static/images/work/work-2.jpg');
const WorkThree = require('../../../static/images/work/work-3.jpg');

const HobbiesRightPanel = () => {
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
    <h2 className='font-bold text-4xl tracking-wider'>Tworzyć rękodzieło,</h2>
    <div className='flex flex-col'>
      <img src={WorkOne} alt='Skrzaty, moje rękodzieło' className='w-[30em] mb-[3em] pr-5 border-r-4 border-black' />
      <img src={WorkTwo} alt='Baranki, moje rękodzieło' className='w-[30em] mb-[3em] pr-5 border-r-4 border-black' />
      <img src={WorkThree} alt='Zdjęcie ze mną i skrzatami' className='w-[30em] pr-5 border-r-4 border-black' />
    </div>
  </div>
}

const generateNonWideDisplay = () => {
  return <div className='flex flex-col items-center'>
    <h2 className='font-bold text-4xl tracking-wider'>Tworzyć rękodzieło,</h2>
    <div className='my-8'>
      <img src={WorkOne} alt='Skrzaty, moje rękodzieło' className='w-[30em] mb-[3em] border border-transparent rounded-lg shadow' />
      <img src={WorkTwo} alt='Baranki, moje rękodzieło' className='w-[30em] mb-[3em] border border-transparent rounded-lg shadowk' />
      <img src={WorkThree} alt='Zdjęcie ze mną i skrzatami' className='w-[30em] mb-[3em] border border-transparent rounded-lg shadow' />
    </div>
  </div>
}


export default HobbiesRightPanel;