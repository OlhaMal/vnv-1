import scss from './Review.module.scss';
import { Container } from 'components/Container/Container';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

export const Review = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1500,
    accessibility: true,
    arrows: false,
  };

  const [ref, inView] = useInView({
    threshold: 0.4,
  });
  return (
    <section
      className={scss.revContainer}
      ref={ref}
    >
      <Container>
        <motion.div
          className={scss.sliderWrpr}
          initial={{ opacity: 0, x:3 , y: 5 }}
          animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
          transition={{
            duration: 0.7,
          }}
        >
          <Slider {...settings}>
            <div className={scss.slide}>
              <h3 className={scss.title}> Відгук</h3>
              <div className={scss.costomerInfo}>
                <h4 className={scss.customerName}>Яна Опенгеймер</h4>
                <p className={scss.date}>Сер 13, 2022</p>
              </div>
              <div className={scss.reviewBody}>
                <div className={scss.line}></div>
                <p className={scss.feedback}>
                  На постійній основі підприємство використовує оригінальні до
                  найменших дрібниць прораховані засоби бізнесу, безпрограшних
                  домовленостей та інновацій. Мета підприємства проста: це
                  забезпечення вам зберігання даних, накопичення та відкриттів.
                </p>
              </div>
            </div>
            <div className={scss.slide}>
              <h3 className={scss.title}> Відгук</h3>
              <div className={scss.costomerInfo}>
                <h4 className={scss.customerName}>Олексій Босий</h4>
                <p className={scss.date}>Жов 31, 2022</p>
              </div>
              <div className={scss.reviewBody}>
                <div className={scss.line}></div>
                <p className={scss.feedback}>
                  Я настільки люблю Гелловін, що вирішив залишити відгук на
                  прекрасний сайт саме у цей день. Мені все сподобалось, а зараз
                  я домальовую грим черепа на обличчі і біжу лякати маленьких
                  дітей.
                </p>
              </div>
            </div>
            <div className={scss.slide}>
              <h3 className={scss.title}> Відгук</h3>
              <div className={scss.costomerInfo}>
                <h4 className={scss.customerName}>Катерина Леонтович</h4>
                <p className={scss.date}>Лют 04, 2023</p>
              </div>
              <div className={scss.reviewBody}>
                <div className={scss.line}></div>
                <p className={scss.feedback}>
                  Пласт був створений 1911 року, невдовзі після заснування
                  скаутського руху Робертом Бейден-Пауелом у 1907 році. А вже 12
                  квітня 1912 року, у Львові, пластуни гуртка «Круки» склали
                  першу Пластову присягу. Серед засновників організації були
                  Іван Чмола, Олександр Тисовський та Петро Франко. В основі
                  назви «Пласт» є відповідник англійського «Scout» (розвідник),
                  взятий за прикладом пластунів — козаків-розвідників.
                </p>
              </div>
            </div>
            <div className={scss.slide}>
              <h3 className={scss.title}> Відгук</h3>
              <div className={scss.costomerInfo}>
                <h4 className={scss.customerName}>Дем'ян Гіргіс</h4>
                <p className={scss.date}>Кві 03, 2023</p>
              </div>
              <div className={scss.reviewBody}>
                <div className={scss.line}></div>
                <p className={scss.feedback}>
                  Динозаври — надряд завропсидів, який з’явився близько 251 млн
                  років тому. Динозаври були панівною групою наземних хребетних
                  в мезозойську еру (тріасовий, юрський і крейдовий періоди), аж
                  до масового вимирання 65 млн років тому. Описано понад 1000
                  видів. Рештки знайдені на всіх сучасних континентах.
                </p>
              </div>
            </div>
          </Slider>
        </motion.div>
      </Container>
    </section>
  );
};
