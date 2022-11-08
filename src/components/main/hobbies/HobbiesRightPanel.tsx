import { useMedia } from 'use-media';

const WorkOne = require('../../../static/images/work/work-1.jpg');
const WorkTwo = require('../../../static/images/work/work-2.jpg');
const WorkThree = require('../../../static/images/work/work-3.jpg');

const HobbiesRightPanel = () => {
  const isWide = useMedia({ minWidth: '930px' });
  return (
    <>
      {isWide && generateWideDisplay()}
      {!isWide && generateNonWideDisplay()}
    </>
  );
};

const generateWideDisplay = () => {
  return (
    <div className="flex items-center justify-evenly">
      <h2 className="text-4xl font-bold tracking-wider">Tworzyć rękodzieło,</h2>
      <div className="flex flex-col">
        <img src={WorkOne} alt="Skrzaty, moje rękodzieło" className="mb-[3em] w-[30em] border-r-4 border-black pr-5" />
        <img src={WorkTwo} alt="Baranki, moje rękodzieło" className="mb-[3em] w-[30em] border-r-4 border-black pr-5" />
        <img src={WorkThree} alt="Zdjęcie ze mną i skrzatami" className="w-[30em] border-r-4 border-black pr-5" />
      </div>
    </div>
  );
};

const generateNonWideDisplay = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-4xl font-bold tracking-wider">Tworzyć rękodzieło,</h2>
      <div className="my-8">
        <img
          src={WorkOne}
          alt="Skrzaty, moje rękodzieło"
          className="mb-[3em] w-[30em] rounded-lg border border-transparent shadow"
        />
        <img
          src={WorkTwo}
          alt="Baranki, moje rękodzieło"
          className="mb-[3em] w-[30em] rounded-lg border border-transparent shadow"
        />
        <img
          src={WorkThree}
          alt="Zdjęcie ze mną i skrzatami"
          className="mb-[3em] w-[30em] rounded-lg border border-transparent shadow"
        />
      </div>
    </div>
  );
};

export default HobbiesRightPanel;
