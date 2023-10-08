import { useState } from 'react';
import scss from './Services.module.scss';
import { Container } from 'components/Container/Container';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import { ReactComponent as Tab1 } from '../../images/undraw_designer_life_re_6ywf.svg';
import { ReactComponent as Tab2 } from '../../images/undraw_my_personal_files_re_3q0p.svg';
import { ReactComponent as Tab3 } from '../../images/undraw_organizing_projects_re_9p1k.svg';
import { ReactComponent as Tab4 } from '../../images/undraw_product_teardown_re_m1pc.svg';
import { ReactComponent as Tab5 } from '../../images/undraw_software_engineer_re_tnjc.svg';
import { ReactComponent as Tab6 } from '../../images/undraw_programming_re_kg9v.svg';

import {
  SlBadge,
  SlCalender,
  SlClock,
  SlCloudUpload,
  SlHeart,
  SlLink,
  SlGraduation,
  SlHourglass,
  SlMap,
  SlPaperClip,
  SlNotebook,
  SlPicture,
  SlPin,
  SlQuestion,
  SlSettings,
  SlScreenDesktop,
  SlSpeech,
  SlVector,
} from 'react-icons/sl';

export const Services = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = tabNumber => {
    setActiveTab(tabNumber);
  };

  return (
    <InView triggerOnce={false} threshold={0.1}>
      {({ inView, ref }) => (
        <section className={scss.servicesContainer} ref={ref}>
          <Container>
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.4,
              }}
            >
              <h2 className={scss.title}>Послуги</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div style={{ position: 'relative', zIndex: '2' }}>
                <div className={scss.tabButtons}>
                  <button
                    onClick={() => handleTabClick(1)}
                    className={`${scss.tabBtn} ${
                      activeTab === 1 ? scss.active : ''
                    }`}
                  >
                    Liber Primus
                  </button>
                  <button
                    onClick={() => handleTabClick(2)}
                    className={`${scss.tabBtn} ${
                      activeTab === 2 ? scss.active : ''
                    }`}
                  >
                    Nemo enim ipsam
                  </button>
                  <button
                    onClick={() => handleTabClick(3)}
                    className={`${scss.tabBtn} ${
                      activeTab === 3 ? scss.active : ''
                    }`}
                  >
                    Quis autem vel eum
                  </button>
                  <button
                    onClick={() => handleTabClick(4)}
                    className={`${scss.tabBtn} ${
                      activeTab === 4 ? scss.active : ''
                    }`}
                  >
                    Sed ut
                  </button>
                  <button
                    onClick={() => handleTabClick(5)}
                    className={`${scss.tabBtn} ${
                      activeTab === 5 ? scss.active : ''
                    }`}
                  >
                    Dolorem eum fugiat
                  </button>
                  <button
                    onClick={() => handleTabClick(6)}
                    className={`${scss.tabBtn} ${
                      activeTab === 6 ? scss.active : ''
                    }`}
                  >
                    Cu munere
                  </button>
                </div>

                <div className={scss.tabContent}>
                  {activeTab === 1 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, zIndex: 1 }}
                      animate={inView ? { opacity: 1, y: 0, zIndex: 2 } : {}}
                      transition={{
                        duration: 0.7,
                      }}
                    >
                      <div className={scss.tabCard}>
                        <div className={scss.textWrapper}>
                          <h3 className={scss.tabTitle}>Tab 1 Content</h3>
                          <p className={scss.tabSubtitle}>
                            {' '}
                            У професійному контексті це часто буває, що приватні
                            або корпоративні клієнти Corder публікацію, які
                            будуть зроблені і представлені з фактичний зміст все
                            ще не готовий.
                          </p>
                          <p className={scss.tabText}>
                            <SlBadge />
                            Це також називається заповнювач ( або наповнювач)
                            текст.
                          </p>
                          <p className={scss.tabText}>
                            <SlCalender />
                            Це слова і букви були змінені додаванням або
                            видаленням.
                          </p>
                          <div className={scss.btnWrapper}>
                            <button className={scss.servicesBtn}>Хочу</button>
                          </div>
                        </div>
                        <div className={scss.iconWrapper}>
                          <Tab1 />
                        </div>
                      </div>
                    </motion.div>
                  )}
                  {activeTab === 2 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        duration: 0.7,
                      }}
                    >
                      <div className={scss.tabCard}>
                        <div className={scss.textWrapper}>
                          <h3 className={scss.tabTitle}>Tab 2 Content</h3>
                          <p className={scss.tabSubtitle}>
                            Так само як немає нікого, хто полюбивши, вважав за
                            краще і зажадав би саме страждання тільки за те, що
                            це страждання, а не тому, що інший раз виникають
                            такі обставини, коли страждання і біль приносять
                            якесь і чималу насолоду.
                          </p>
                          <p className={scss.tabText}>
                            <SlClock />
                            Дійсно, ніхто не відкидає, не зневажає, не уникає
                            насолод.
                          </p>
                          <p className={scss.tabText}>
                            <SlCloudUpload />
                            Сенс використання Lorem Ipsum полягає в тому.
                          </p>
                          <p className={scss.tabText}>
                            <SlHeart />
                            Цей текст має більш-менш нормальне розподілення
                            літер.
                          </p>
                          <p className={scss.tabText}>
                            <SlLink />
                            Немає нікого, хто любив би самий біль, хто б шукав
                            його.
                          </p>
                          <div className={scss.btnWrapper}>
                            <button className={scss.servicesBtn}>Хочу</button>
                          </div>
                        </div>
                        <div className={scss.iconWrapper}>
                          <Tab2 />
                        </div>
                      </div>
                    </motion.div>
                  )}
                  {activeTab === 3 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, zIndex: 1 }}
                      animate={inView ? { opacity: 1, y: 0, zIndex: 2 } : {}}
                      transition={{
                        duration: 0.7,
                      }}
                    >
                      <div className={scss.tabCard}>
                        <div className={scss.textWrapper}>
                          <h3 className={scss.tabTitle}>Tab 3 Content</h3>
                          <p className={scss.tabSubtitle}>
                            При всій своїй примітивності приклад роботи
                            передредактора вказує на той центр, довкола якого в
                            редагуванні — при критичній оцінці тексту і при
                            виправленні його — все обертається. Цей центр —
                            читач. До нього, врешті-решт, звернені і окрема
                            фраза і текст в цілому.
                          </p>
                          <p className={scss.tabText}>
                            <SlGraduation />
                            Будь-який текст створюється для читача.
                          </p>
                          <p className={scss.tabText}>
                            <SlHourglass />
                            Проте будь-яка особливість тексту може бути схвалена
                            чи засуджена.
                          </p>
                          <p className={scss.tabText}>
                            <SlMap />
                            Коли б читач був такий же безпристрасно уважний, як
                            електронна машина.
                          </p>
                          <div className={scss.btnWrapper}>
                            <button className={scss.servicesBtn}>Хочу</button>
                          </div>
                        </div>
                        <div className={scss.iconWrapper}>
                          <Tab3 />
                        </div>
                      </div>
                    </motion.div>
                  )}
                  {activeTab === 4 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, zIndex: 1 }}
                      animate={inView ? { opacity: 1, y: 0, zIndex: 2 } : {}}
                      transition={{
                        duration: 0.7,
                      }}
                    >
                      <div className={scss.tabCard}>
                        <div className={scss.textWrapper}>
                          <h3 className={scss.tabTitle}>Tab 4 Content</h3>
                          <p className={scss.tabSubtitle}>
                            Особливо яскраво врахування установки читача (в тому
                            числі буденної свідомості) проявляється у торговій
                            рекламі і є одним з проявів її адресності, іноді
                            створенню читацької установки — бажання сприймати
                            повідомлення — служить так звана «побічна ідея» —
                            цікавий хід, думки, який приводить читача до
                            головної, справжньої ідеї реклами.
                          </p>
                          <p className={scss.tabText}>
                            <SlPaperClip />
                            Елементи тексту, пов'язані із створенням бажання
                            сприймати його.
                          </p>
                          <p className={scss.tabText}>
                            <SlNotebook />
                            Звичайно розташовуються на початку тексту.
                          </p>
                          <div className={scss.btnWrapper}>
                            <button className={scss.servicesBtn}>Хочу</button>
                          </div>
                        </div>
                        <div className={scss.iconWrapper}>
                          <Tab4 />
                        </div>
                      </div>
                    </motion.div>
                  )}
                  {activeTab === 5 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, zIndex: 1 }}
                      animate={inView ? { opacity: 1, y: 0, zIndex: 2 } : {}}
                      transition={{
                        duration: 0.7,
                      }}
                    >
                      <div className={scss.tabCard}>
                        <div className={scss.textWrapper}>
                          <h3 className={scss.tabTitle}>Tab 5 Content</h3>
                          <p className={scss.tabSubtitle}>
                            Тут не завжди треба виправляти саме речення, частіше
                            слід користуватися «металінгвістичною» функцією
                            мови. Елементи, що виконують цю функцію.
                          </p>
                          <p className={scss.tabText}>
                            <SlPicture />І все це відбувається на рівні всієї
                            структури тексту.
                          </p>
                          <p className={scss.tabText}>
                            <SlPin />
                            На нижчих рівнях ми маємо справу з іншими проявами.
                          </p>
                          <p className={scss.tabText}>
                            <SlQuestion />
                            Установка на сприйняття повідомлення, зрозуміла річ.
                          </p>
                          <p className={scss.tabText}>
                            <SlSettings />
                            Це, так би мовити,— характеристика читача, адресата.
                          </p>
                          <div className={scss.btnWrapper}>
                            <button className={scss.servicesBtn}>Хочу</button>
                          </div>
                        </div>
                        <div className={scss.iconWrapper}>
                          <Tab5 />
                        </div>
                      </div>
                    </motion.div>
                  )}
                  {activeTab === 6 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, zIndex: 1 }}
                      animate={inView ? { opacity: 1, y: 0, zIndex: 2 } : {}}
                      transition={{
                        duration: 0.7,
                      }}
                    >
                      <div className={scss.tabCard}>
                        <div className={scss.textWrapper}>
                          <h3 className={scss.tabTitle}>Tab 6 Content</h3>
                          <p className={scss.tabSubtitle}>
                            Контактуюча функція — це вмикання каналу зв'язку,
                            досягнення згоди на прийом повідомлень, продовження
                            або й перерва комунікації, перевірка чи канал
                            працює, привернення уваги співмовця, перевірка його
                            постійної уваги.
                          </p>
                          <p className={scss.tabText}>
                            <SlScreenDesktop />З повідомленням, як таким,
                            пов'язана поетична функція мови.
                          </p>
                          <p className={scss.tabText}>
                            <SlSpeech />
                            Ця звукова організація настроює, причаровує,
                            «гіпнотизує» читача.
                          </p>
                          <p className={scss.tabText}>
                            <SlVector />В коді закладена металінгвістична
                            функція.
                          </p>
                          <div className={scss.btnWrapper}>
                            <button className={scss.servicesBtn}>Хочу</button>
                          </div>
                        </div>
                        <div className={scss.iconWrapper}>
                          <Tab6 />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
            <InView threshold={0.5}>
              {({ inView: motionInView, ref: motionRef }) => (
                <motion.div
                  ref={motionRef}
                  initial={{ opacity: 0 }}
                  animate={motionInView ? { opacity: 0.5 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  <div className={scss.servicesGif}></div>
                </motion.div>
              )}
            </InView>
          </Container>
        </section>
      )}
    </InView>
  );
};
