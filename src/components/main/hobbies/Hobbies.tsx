import { Link } from 'react-router-dom';
import HobbiesLeftPanel from './HobbiesLeftPanel';
import HobbiesRightPanel from './HobbiesRightPanel';

const Hobbies = () => {
  return (
    <section>
      <HobbiesLeftPanel />
      <hr className="mx-52 sm:my-8 lg:my-16" />
      <HobbiesRightPanel />

      <div className="mt-[4em] mb-[8em]">
        <h2 className="mb-4 text-center text-3xl font-semibold">Oraz pisać bloga.</h2>
        <Link to="/blog">
          <button
            onClick={() => window.scrollTo(0, 0)}
            className="m-auto block rounded-lg bg-indigo-400 px-[5em] py-[1em] text-lg uppercase tracking-widest text-white"
          >
            Sprawdź moje wpisy!
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hobbies;
