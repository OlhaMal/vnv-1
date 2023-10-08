import { ReactComponent as PortfolioIcon } from '../../images/undraw_responsive_re_e1nn.svg';
import scss from './Portfolio.module.scss';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Slider from 'react-slick';

export const Portfolio = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1500,
    accessibility: true,
    arrows: true,
  };

  const [ref, inView] = useInView({
    threshold: 0.2,
  });
  return (
    <div className={scss.container}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{
          duration: 0.6,
        }}
      >
        <section className={scss.sliderContainer} ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
            }}
          >
            <Slider {...settings}>
              <div className={scss.slide}>
                <div className={scss.slideWrapper}>
                  <div className={scss.ctnSl}>
                    <div className={scss.slidePicture}>
                      <PortfolioIcon />
                    </div>
                    <div className={scss.slideHeader}>
                      <span className={scss.subtitle}>01 /</span>
                      <h3 className={scss.title}>Заголовок першого проєкту</h3>
                    </div>
                  </div>
                  <div className={scss.slideText}>
                    <p className={scss.text}>
                      З автором пов'язана експресивна функція мови. У ній
                      виявляється ставлення мовця до предмета мовлення і до
                      читача. Від того, в якій емоційній формі висловлює автор
                      свої думки, залежить ставлення читача до нього
                    </p>
                    <button className={scss.portfolioBtn}>
                      <span className={scss.btnTxt}>Хочу вже!</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className={scss.slide}>
                <div className={scss.slideWrapper}>
                  <div className={scss.ctnSl}>
                    <div className={scss.slidePicture}>
                      <PortfolioIcon />
                    </div>
                    <div className={scss.slideHeader}>
                      <span className={scss.subtitle}>02 /</span>
                      <h3 className={scss.title}>Заголовок другого проєкту</h3>
                    </div>
                  </div>
                  <div className={scss.slideText}>
                    <p className={scss.text}>
                      Текст є мовною структурою в комунікативному процесі. В
                      текстовій структурі найбільш яскраво виявляється єдність
                      змісту і форми. Адже все, що виконує комунікативну функцію
                      — форма. Одночасно, ця форма завжди змістовна і суттєва.
                    </p>
                    <button className={scss.portfolioBtn}>
                      <span className={scss.btnTxt}>Хочу вже!</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className={scss.slide}>
                <div className={scss.slideWrapper}>
                  <div className={scss.ctnSl}>
                    <div className={scss.slidePicture}>
                      <PortfolioIcon />
                    </div>
                    <div className={scss.slideHeader}>
                      <span className={scss.subtitle}>03 /</span>
                      <h3 className={scss.title}>Заголовок третього проєкту</h3>
                    </div>
                  </div>
                  <div className={scss.slideText}>
                    <p className={scss.text}>
                      І справа тут не лише в науковому і політичному
                      редагуванні, яким, зрозуміла річ, віддається приорітет.
                      Справа ще й у тому, що кожна функція проявляється не лише
                      в плані виразу (форма), ай в плані змісту.
                    </p>
                    <button className={scss.portfolioBtn}>
                      <span className={scss.btnTxt}>Хочу вже!</span>
                    </button>
                  </div>
                </div>
              </div>
            </Slider>
          </motion.div>
        </section>
      </motion.div>
    </div>
  );
};
