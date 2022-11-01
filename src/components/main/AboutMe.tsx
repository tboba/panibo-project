import {useMedia} from "use-media";

const WhoamiPhoto = require('../../static/whoami.jpg');

const AboutMe = () => {
  const isWide = useMedia({minWidth: '1100px'});

  return (
    <div className='my-[13rem] pt-[5rem]' id='aboutme'>
      <div className='flex justify-center'>
        {isWide && <div className="relative before:content-['a'] before:text-transparent
          before:w-36 before:h-36 before:absolute before:z-[-1] before:bg-gray-500 before:opacity-60 before:bottom-[165px] before:left-[-15px]">
          <img src={WhoamiPhoto} alt='O mnie' className='w-[25em]' />
        </div>}
        <div className="w-[35em] sm:ml-[5em] mt-[25em] before:content-[''] before:absolute before:w-[250px] before:h-[140px] before:bg-purple before:left-[-30px] before:top-[-30px]">
          <h1 className="relative font-bold text-5xl before:content-['a'] before:text-transparent
          before:w-36 before:absolute before:z-[-1] before:bg-amber-200 before:opacity-60 before:mt-[-3px] before:top-[-10px] before:left-[-10px]">
            Kim jestem?
          </h1>
          <br />
          <p className='font-raleway'>
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
        </div>
      </div>
    </div>
  );
}

export default AboutMe;