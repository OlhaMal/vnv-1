import scss from './Roulette.module.scss';
import { Container } from 'components/Container/Container';
import React, { useState } from 'react';
import Confetti from 'react-confetti';
import RoulettePro from 'react-roulette-pro';
import 'react-roulette-pro/dist/index.css';
import prizeImage1 from '../../images/first-frame.jpg';
import prizeImage2 from '../../images/second-frame.jpg';
import prizeImage3 from '../../images/third-frame.jpg';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { toast } from 'react-toastify';

import { nanoid } from 'nanoid';

const prizes = [
  {
    image: prizeImage1,
  },
  {
    image: prizeImage2,
  },
  {
    image: prizeImage3,
  },
];

const winPrizeIndex = 0;

const reproductionArray = (array = [], length = 0) => [
  ...Array(length)
    .fill('_')
    .map(() => array[Math.floor(Math.random() * array.length)]),
];

export const Roulette = () => {
  const [isWinner, setIsWinner] = useState(false);
  const [isFirstTime, setIsFirstTime] = useState(true);
  const [start, setStart] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  const reproducedPrizeList = [
    ...prizes,
    ...reproductionArray(prizes, prizes.length * 3),
    ...prizes,
    ...reproductionArray(prizes, prizes.length),
  ];

  const prizeList = reproducedPrizeList.map(prize => ({
    ...prize,
    id: nanoid(5),
  }));

  const prizeIndex = prizes.length * 4 + winPrizeIndex;

  const handleStart = () => {
    setStart(prevState => !prevState);
  };

  const handlePrizeDefined = () => {
    setIsWinner(true);
    const randomNum = Math.floor(Math.random() * 4) + 1;

    switch (randomNum) {
      case 1:
        toast('🎉 15% знижки на розробку сайту', {
          position: 'top-center',
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
        break;
      case 2:
        toast('🎉 5% знижки на консультацію', {
          position: 'top-center',
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
        break;
      case 3:
        toast('🎉 10% знижки на щось третє', {
          position: 'top-center',
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
        break;
      case 4:
        toast('🎉 11% знижки за те, що ти класний(-а)', {
          position: 'top-center',
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
        break;
      default:
        alert('');
        break;
    }

    setIsWinner(true); // Set the winner status to true
    setIsFirstTime(false);

    // setTimeout(() => {
    //   setWinMessage('');
    // }, 2000);
  };

  return (
    <section className={scss.rouletteSection} ref={ref}>
      <Container>
        <motion.div
          initial={{ opacity: 0, x: 7, y: 5 }}
          animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
          transition={{
            duration: 0.7,
          }}
        >
          <h2 className={scss.title}>Випробуй свою вдачу</h2>
          <div className={scss.rouletteWrpr}>
            <RoulettePro
              prizes={prizeList}
              prizeIndex={prizeIndex}
              start={start}
              onPrizeDefined={handlePrizeDefined}
              options={{ withoutAnimation: true }}
            />
          </div>
          <div className={scss.btnWrapper}>
            <button
              type="button"
              className={`${scss.rouletteBtn} ${
                !isFirstTime ? scss.disabled : ''
              }`}
              onClick={handleStart}
              disabled={!isFirstTime}
            >
              Крутити
            </button>
          </div>
        </motion.div>
        {isWinner && (
          <Confetti // Show confetti when the user wins
            width={window.innerWidth}
            height={window.innerHeight}
            style={{ position: 'fixed' }}
            recycle={false}
            tweenDuration={5000}
          />
        )}
      </Container>
    </section>
  );
};
