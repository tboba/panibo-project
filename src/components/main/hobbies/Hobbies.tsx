import {Link} from "react-router-dom";
import HobbiesLeftPanel from "./HobbiesLeftPanel";
import HobbiesRightPanel from "./HobbiesRightPanel";

const Hobbies = () => {
  return (
    <>
      <HobbiesLeftPanel />
      <hr className='md:my-8 lg:my-16 mx-52' />
      <HobbiesRightPanel />

      <div className='mt-[4em] mb-[8em]'>
        <h2 className='text-center font-semibold text-3xl mb-4'>Oraz pisać bloga.</h2>
        <Link to='/blog'>
          <button
            onClick={() => window.scrollTo(0, 0)}
            className='block m-auto text-lg uppercase tracking-widest text-white px-[5em] py-[1em] bg-indigo-400 rounded-lg'>Sprawdź moje wpisy!</button>
        </Link>
      </div>
    </>
  );
}

export default Hobbies;