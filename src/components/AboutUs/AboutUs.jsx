import scss from './AboutUs.module.scss';
import { Container } from 'components/Container/Container';
import {
  SlChart,
  SlEvent,
  SlLayers,
  SlStar,
  SlOrganization,
  SlMagnet,
} from 'react-icons/sl';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const AboutUs = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
  });

  return (
    <section className={scss.aboutUsContainer} ref={ref}>
      <Container>
        <motion.div
         initial={{ opacity: 0, x: 7, y: 5 }}
         animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
          transition={{
            duration: 0.4,
          }}
        >
          <h2 className={scss.title}>Чому обирають мене?</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
          }}
        >
          <ul className={scss.preferenceList}>
            <motion.div
              whileHover={{
                scale: 1.05,
                backgroundColor: 'rgba(141, 140, 156, 0.6)',
              }}
              transition={{
                duration: 0.3,
              }}
            >
              <li className={scss.preferenceCard}>
                <div className={scss.iconWrapper}>
                  <SlChart className={scss.icon} />
                </div>
                <p className={scss.cardText}>
                  Стабільно надається широкий вибір глобального громадянства:
                  телекомунікації, мобільний голосовий зв'язок і інформаційні
                  технології для домашніх улюбленців і гостей столиці.{' '}
                </p>
              </li>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.05,
                backgroundColor: 'rgba(141, 140, 156, 0.6)',
              }}
              transition={{
                duration: 0.3,
              }}
            >
              <li className={scss.preferenceCard}>
                <div className={scss.iconWrapper}>
                  <SlStar className={scss.icon} />
                </div>
                <p className={scss.cardText}>
                  Постійне поліпшення, розширення рівня капіталізації,
                  оптимізація топ-менеджерів та створення оптимальних товарних
                  груп та відділів забезпечили підприємству визнання на ринку
                  України.
                </p>
              </li>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.05,
                backgroundColor: 'rgba(141, 140, 156, 0.6)',
              }}
              transition={{
                duration: 0.3,
              }}
            >
              <li className={scss.preferenceCard}>
                <div className={scss.iconWrapper}>
                  <SlOrganization className={scss.icon} />
                </div>
                <p className={scss.cardText}>
                  Ми впевнені, що впровадження бізнесу (робітнича майстерність)
                  життєво необхідне для розвитку, тому ми постійно виконуємо
                  зобов'язання та разом з тим, відкриті до інновацій.
                </p>
              </li>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.05,
                backgroundColor: 'rgba(141, 140, 156, 0.6)',
              }}
              transition={{
                duration: 0.3,
              }}
            >
              <li className={scss.preferenceCard}>
                <div className={scss.iconWrapper}>
                  <SlLayers className={scss.icon} />
                </div>
                <p className={scss.cardText}>
                  Хочемо дивувати киян якістю зберігання даних і прагнемо
                  розвивати закупівлю-продаж, кабельне телебачення і ремонт
                  ювелірних виробів і годинників разом із рейтинговими
                  агентствами.
                </p>
              </li>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.05,
                backgroundColor: 'rgba(141, 140, 156, 0.6)',
              }}
              transition={{
                duration: 0.3,
              }}
            >
              <li className={scss.preferenceCard}>
                <div className={scss.iconWrapper}>
                  <SlEvent className={scss.icon} />
                </div>
                <p className={scss.cardText}>
                  Ми впевнені, що впровадження продуктів харчування (збільшення
                  технічної бази) життєво необхідне для розвитку, тому ми
                  постійно працюємо над поліпшенням та разом з тим, відкриті до
                  накопичення.
                </p>
              </li>
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.05,
                backgroundColor: 'rgba(141, 140, 156, 0.6)',
              }}
              transition={{
                duration: 0.3,
              }}
            >
              <li className={scss.preferenceCard}>
                <div className={scss.iconWrapper}>
                  <SlMagnet className={scss.icon} />
                </div>
                <p className={scss.cardText}>
                  Хочемо підкорювати гостей столиці зручністю безпрограшних
                  домовленостей і прагнемо розвивати пасажирські перевезення,
                  передачу даних і виготовлення ключів.
                </p>
              </li>
            </motion.div>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -90 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
          }}
        >
          <div className={scss.btnWrapper}>
            <button type="button" className={scss.aboutUsBtn}>
              Замовити
            </button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
