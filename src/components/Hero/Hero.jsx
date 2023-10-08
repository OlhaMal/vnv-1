import scss from './Hero.module.scss';
import logoImage from '../../images/logo.png';
import { Container } from 'components/Container/Container';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';

export const Hero = () => {
  return (
    <InView triggerOnce={false}>
      {({ inView, ref }) => (
    <div className={scss.container} ref={ref}>
      <Container>
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{
            duration: 1,
          }}
        >
          <header className={scss.header}>
            <a href="/" className={scss.logoLink}>
              <img src={logoImage} alt="Logo" className={scss.logo} />
            </a>
          </header>
        </motion.div>

        <section className={scss.heroContainer}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 0.9 } : {}}
            transition={{
              duration: 0.8,
            }}
          >
            <div className={scss.backgroundGif}></div>
          </motion.div>
          <motion.div
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
          >
            <p className={scss.name}>Liubomyr Luznyi</p>
            <h1 className={scss.title}>Заголовок заголовок…</h1>
            <p className={scss.slogan}>
              Хочемо підкорювати стильних особистостей
            </p>
            <div className={scss.btnWrapper}>
              <button type="button" className={scss.heroBtn}>
                <span className={scss.underlineAnimation}> Замовити </span>
                <svg
                  viewBox="0 0 46 16"
                  height="10"
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                  id="arrow-horizontal"
                >
                  <path
                    transform="translate(30)"
                    d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                    data-name="Path 10"
                    id="Path_10"
                  ></path>
                </svg>
              </button>
            </div>
          </motion.div>
        </section>
      </Container>
    </div>
    )}
    </InView>
  );
};
