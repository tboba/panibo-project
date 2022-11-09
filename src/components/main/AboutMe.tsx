import { useMedia } from 'use-media';

const WhoamiPhoto = require('../../static/images/whoami.jpg');

const AboutMe = () => {
  const isWide = useMedia({ minWidth: '1024px' });

  return (
    <div className="pt-[5rem] sm:mb-[13rem] lg:my-[13rem]" id="aboutme">
      <div className="flex justify-center">
        {isWide && (
          <div
            className="relative before:absolute before:bottom-[165px]
          before:left-[-15px] before:z-[-1] before:h-36 before:w-36 before:bg-gray-500 before:text-transparent before:opacity-60 before:content-['a']"
          >
            <img src={WhoamiPhoto} alt="O mnie" className="w-[25em]" />
          </div>
        )}

        <article className="mt-[25em] w-[35em] before:absolute before:left-[-30px] before:top-[-30px] before:h-[140px] before:w-[250px] before:content-[''] sm:ml-[3em]">
          <h1
            className="relative text-5xl font-bold before:absolute before:top-[-10px]
          before:left-[-10px] before:z-[-1] before:mt-[-3px] before:w-36 before:bg-amber-200 before:text-transparent before:opacity-60 before:content-['a']"
          >
            Kim jestem?
          </h1>
          <br />
          <p className="font-raleway">
            Nazywam się Monika.
            <br />
            Mieszkam w Jaworznie i z wykształcenia jestem Biologiem.
            <br />
            Obecnie pracuję jako nauczyciel biologii i wiedzy o kreatywności.
            <br />
            Dodatkowo prowadzę własny sklep internetowy.
            <br />
            W wolnym czasie sporo biegam i publikuję posty na blogu.
            <br />
            <br />
            Po blisko 25 latach pracy w administracji publicznej,
            <br />
            przechodząc niemalże przez wszystkie szczeble kariery zawodowej,
            <br />
            wywróciłam swoje życie do góry nogami, odeszłam od pracy na etat i
            <br />
            założyłam firmę rękodzielniczą – z duszą, ogromnym sercem do tego co tworzę,
            <br />
            wyobraźnią, którą wciąż rozwijam, w spokojnym rytmie slow i poszanowaniem natury.
          </p>
        </article>
      </div>
    </div>
  );
};

export default AboutMe;
