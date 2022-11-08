import { useMedia } from 'use-media';

const RunnerOne = require('../../../static/images/running/run-1.jpg');
const RunnerTwo = require('../../../static/images/running/run-2.jpg');
const RunnerThree = require('../../../static/images/running/run-3.jpg');

const HobbiesLeftPanel = () => {
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
      <div className="flex flex-col">
        <img src={RunnerOne} alt="Selfie w górach" className="mb-[3em] w-[30em] border-l-4 border-black pl-5" />
        <img
          src={RunnerTwo}
          alt="Siedzę na plaży z medalem"
          className="mb-[3em] w-[30em] border-l-4 border-black pl-5"
        />
        <img
          src={RunnerThree}
          alt="Kończę bieg dla WOŚPu"
          className="w-[30em] border-l-4 border-black object-cover pl-5"
        />
      </div>
      <h2 className="text-4xl font-bold tracking-wider">Kocham biegać,</h2>
    </div>
  );
};

const generateNonWideDisplay = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-4xl font-bold tracking-wider">Kocham biegać,</h2>
      <div className="my-8">
        <img
          src={RunnerOne}
          alt="Selfie w górach"
          className="mb-[3em] w-[30em] rounded-lg border border-transparent shadow"
        />
        <img
          src={RunnerTwo}
          alt="Siedzę na plaży z medalem"
          className="mb-[3em] w-[30em] rounded-lg border border-transparent shadow"
        />
        <img
          src={RunnerThree}
          alt="Kończę bieg dla WOŚPu"
          className="w-[30em] rounded-lg border border-transparent shadow"
        />
      </div>
    </div>
  );
};

export default HobbiesLeftPanel;
