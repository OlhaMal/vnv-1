import scss from './Questions.module.scss';
import { useState } from 'react';
import { ReactComponent as Arrow } from '../../images/arrow-down.svg';
import { Container } from 'components/Container/Container';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const Questions = () => {
  const [open, setOpen] = useState([]);

  const handleCategoryClick = question => {
    if (open.includes(question)) {
      setOpen(open.filter(cat => cat !== question));
    } else {
      setOpen([...open, question]);
    }
  };

  const [ref, inView] = useInView({
    threshold: 0.3,
  });


  return (
    <section className={scss.questionContainer} ref={ref}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30}}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
          }}
        >
          <p className={scss.subtitle}>Відповіді на часті запитання</p>
          <h2 className={scss.title}>FAQ</h2>
          <div className={scss.faqList}>
            <div
              className={`${scss.questionWrapper} ${
                open.includes('1') ? scss.active : ''
              }`}
              onClick={() => handleCategoryClick('1')}
            >
              <div className={scss.textWr}>
                <p>Чи можна сюди задати питання?</p>
                <div className={scss.icon}>
                  <Arrow />
                </div>
              </div>
              <div
                className={`${scss.answerCont} ${
                  open.includes('1') ? scss.active : ''
                }`}
              >
                <div className={scss.answ}>
                  <p>
                    Форма цього басейну значно відхиляється від правильного
                    набору концентричних кілець.
                  </p>
                  <p>
                    Від басейну Моря Дощів радіально розходяться численні хребти
                    та борозни шириною 1—12 км і довжиною від кількох десятків
                    до 100—200 км.
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`${scss.questionWrapper} ${
                open.includes('2') ? scss.active : ''
              }`}
              onClick={() => handleCategoryClick('2')}
            >
              <div className={scss.textWr}>
                <p>Права дзвіниця збудована лише до висоти склепінь нави?</p>
                <div className={scss.icon}>
                  <Arrow />
                </div>
              </div>
              <div
                className={`${scss.answerCont} ${
                  open.includes('2') ? scss.active : ''
                }`}
              >
                <div className={scss.answ}>
                  <p>
                    Початково собор зовні підпирали 12 чотириярусних
                    контрфорсів, які закінчуються трохи нижче дахового карнизу.
                  </p>
                  <p>
                    Основний простір майже кубічний, але пізніші прибудови
                    значно ускладнили конфігурацію храму.
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`${scss.questionWrapper} ${
                open.includes('3') ? scss.active : ''
              }`}
              onClick={() => handleCategoryClick('3')}
            >
              <div className={scss.textWr}>
                <p>Проблема початків храму?</p>
                <div className={scss.icon}>
                  <Arrow />
                </div>
              </div>
              <div
                className={`${scss.answerCont} ${
                  open.includes('3') ? scss.active : ''
                }`}
              >
                <div className={scss.answ}>
                  <p>
                    Обставини заснування храму, точне датування та фундатори
                    залишаються нез'ясованими.
                  </p>
                  <p>
                    В подальшому ця позиція набула певного поширення, зокрема
                    відобразилась у фундаментальній праці «Архітектура Львова.
                  </p>
                  <p>
                    Версія з неопублікованої праці секретаря капітули першої
                    половини XIX століття Каєтана Андрусевича.
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`${scss.questionWrapper} ${
                open.includes('4') ? scss.active : ''
              }`}
              onClick={() => handleCategoryClick('4')}
            >
              <div className={scss.textWr}>
                <p>Надалі замок набув статусу адміністративного центру?</p>
                <div className={scss.icon}>
                  <Arrow />
                </div>
              </div>
              <div
                className={`${scss.answerCont} ${
                  open.includes('4') ? scss.active : ''
                }`}
              >
                <div className={scss.answ}>
                  <p>
                    Унікальність замку в Старокостянтинові полягає передусім у
                    тому, що закладено і побудовано його було разом з усім
                    містом в доволі стислі терміни.
                  </p>
                  <p>
                    Формальною причиною побудови міста Костянтинова і замку
                    стала прогалина, що існувала в оборонній системі волинських
                    земель на шляху татарських вторгнень. Поряд з будівництвом
                    укріплених міст Базалії та Острополя, включаючи Красилів та
                    Любар, в долині південної Случі створювалася лінія
                    укріплень, розташованих одне від одного на відстані у кілька
                    десятків кілометрів.
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`${scss.questionWrapper} ${
                open.includes('5') ? scss.active : ''
              }`}
              onClick={() => handleCategoryClick('5')}
            >
              <div className={scss.textWr}>
                <p>Замок від міста окопано валом земляним?</p>
                <div className={scss.icon}>
                  <Arrow />
                </div>
              </div>
              <div
                className={`${scss.answerCont} ${
                  open.includes('5') ? scss.active : ''
                }`}
              >
                <div className={scss.answ}>
                  <p>
                    Брама камінна, при ній кімната з грубкою кахельною та
                    лавками. Серед замка — дім великий дерев'яний.
                  </p>
                  <p>
                    За цим будинком, у кутку камінної стіни, був міст на вал:
                    міст попсовано.
                  </p>
                  <p>
                    Будинок цей двоповерховий — наверх ведуть двоє камінних
                    сходів; під ними дві лавочки. На другому поверсі заля, вікна
                    в ній від Случі з залізними ґратами в цині.
                  </p>
                  <p>
                    За церквою частина камінної стіни тягнеться до середини
                    замка.
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`${scss.questionWrapper} ${
                open.includes('6') ? scss.active : ''
              }`}
              onClick={() => handleCategoryClick('6')}
            >
              <div className={scss.textWr}>
                <p>
                  Палац, що являє собою видовжену двоповерхову
                  будівлю?
                </p>
                <div className={scss.icon}>
                  <Arrow />
                </div>
              </div>
              <div
                className={`${scss.answerCont} ${
                  open.includes('6') ? scss.active : ''
                }`}
              >
                <div className={scss.answ}>
                  <p>
                    Власне сам палац, як і оборонна вежа, сьогодні перебувають в
                    досить занедбаному стані. Палац поступово пристосовується
                    під музей «Старий Костянтинів»
                  </p>
                  <p>
                    Влаштована для в'їзду й оборони зі сторони міста та включена
                    в оборонне кільце замку. Брама була обладнана підйомним
                    мостом. Вимурувана з каменю, другий ярус — цегляний, у
                    проєкції квадрата. Залишився лише перший ярус, в якому
                    влаштовано наскрізний арковий проїзд. Частково зберігся
                    декор західного фасаду. Накрита шатровим дахом.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
