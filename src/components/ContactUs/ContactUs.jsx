import scss from './ContactUs.module.scss';
import { Container } from 'components/Container/Container';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ReactComponent as TeamIcon } from '../../images/undraw_team_collaboration_re_ow29.svg';
import 'react-tabs/style/react-tabs.css';
import { LiaViber } from 'react-icons/lia';
import {
  PiTelegramLogoThin,
  PiWhatsappLogoThin,
  PiEnvelopeSimpleThin,
} from 'react-icons/pi';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const ContactUs = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');

  const [selectedTabIndex, setSelectedTabIndex] = useState(() => {
    const storedIndex = localStorage.getItem('selectedTabIndex');
    // Use parseInt to convert the stored value to a number
    return storedIndex !== null ? parseInt(storedIndex, 10) : 0; // Default to 0 if not found in localStorage
  });

  const [ref, inView] = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    const storedIndex = localStorage.getItem('selectedTabIndex');
    if (storedIndex !== null) {
      setSelectedTabIndex(parseInt(storedIndex, 10));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedTabIndex', selectedTabIndex);
  }, [selectedTabIndex]);

  const handleTabSelect = index => {
    setSelectedTabIndex(index);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log({ name: input1, contact: input2, question: input3 });
    setInput1('');
    setInput2('');
    setInput3('');
  };

  return (
    <section className={scss.contactUsContainer} ref={ref}>
      <Container>
        <motion.div
          className={scss.wrapper}
          initial={{ opacity: 0, y: 30}}
          animate={inView ? { opacity: 1, y: 0} : {}}
          transition={{
            duration: 0.6,
          }}
        >
          <div className={scss.icon}>
            <TeamIcon />
          </div>
          <div className={scss.contactForm}>
            <h2 className={scss.title}>Задати питання</h2>
            <p className={scss.subtitle}>Способи зв'язку</p>
            <Tabs
              className={scss.tabsx}
              defaultIndex={selectedTabIndex}
              onSelect={handleTabSelect}
            >
              <motion.div
                initial={{ opacity: 0, y: 30, x: 5 }}
                animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
                transition={{
                  duration: 0.8,
                }}
              >
                <TabList className={scss.tabList}>
                  <Tab className={scss.tabVar}>
                    <PiEnvelopeSimpleThin />
                  </Tab>
                  <Tab className={scss.tabVar}>
                    <PiTelegramLogoThin />
                  </Tab>
                  <Tab className={scss.tabVar}>
                    <PiWhatsappLogoThin />
                  </Tab>
                  <Tab className={scss.tabVar}>
                    <LiaViber style={{ opacity: '0.5' }} />
                  </Tab>
                </TabList>
              </motion.div>

              <TabPanel className={scss.tabPanel}>
                <motion.div
                  initial={{ opacity: 0, x: 7, y: 5 }}
                  animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                  }}
                >
                  <form onSubmit={handleSubmit} className={scss.form}>
                    <div className={scss.inputbox}>
                      <input
                        required="required"
                        type="text"
                        placeholder="Ім`я"
                        className={scss.input}
                        onChange={e => setInput1(e.target.value)}
                        value={input1}
                      />
                    </div>
                    <div className={scss.inputbox}>
                      <input
                        required="required"
                        type="email"
                        placeholder="example@gmail.com"
                        className={scss.input}
                        onChange={e => setInput2(e.target.value)}
                        value={input2}
                      />
                    </div>
                    <div className={scss.inputbox}>
                      <textarea
                        rows="5"
                        cols="33"
                        placeholder="Запитання"
                        className={scss.textArea}
                        onChange={e => setInput3(e.target.value)}
                        value={input3}
                      ></textarea>
                    </div>
                    <div className={scss.btnWrapper}>
                      <button type="submit" className={scss.contactBtn}>
                        <span className={scss.underlineAnimation}>
                          {' '}
                          Надіслати
                        </span>
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
                  </form>
                </motion.div>
              </TabPanel>

              <TabPanel className={scss.tabPanel}>
                <motion.div
                  initial={{ opacity: 0, x: 7, y: 5 }}
                  animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                  }}
                >
                  <form onSubmit={handleSubmit} className={scss.form}>
                    <div className={scss.inputbox}>
                      <input
                        required="required"
                        type="text"
                        placeholder="Ім`я"
                        className={scss.input}
                        onChange={e => setInput1(e.target.value)}
                        value={input1}
                      />
                    </div>
                    <div className={scss.inputbox}>
                      <input
                        required="required"
                        type="text"
                        placeholder="@telegram_nick"
                        className={scss.input}
                        onChange={e => setInput2(e.target.value)}
                        value={input2}
                      />
                    </div>
                    <div className={scss.inputbox}>
                      <textarea
                        rows="5"
                        cols="33"
                        placeholder="Запитання"
                        className={scss.textArea}
                        onChange={e => setInput3(e.target.value)}
                        value={input3}
                      ></textarea>
                    </div>
                    <div className={scss.btnWrapper}>
                      <button type="submit" className={scss.contactBtn}>
                        <span className={scss.underlineAnimation}>
                          {' '}
                          Надіслати
                        </span>
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
                  </form>
                </motion.div>
              </TabPanel>

              <TabPanel className={scss.tabPanel}>
                <motion.div
                  initial={{ opacity: 0, x: 7, y: 5 }}
                  animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                  }}
                >
                  <form onSubmit={handleSubmit} className={scss.form}>
                    <div className={scss.inputbox}>
                      <input
                        required="required"
                        type="text"
                        placeholder="Ім`я"
                        className={scss.input}
                        onChange={e => setInput1(e.target.value)}
                        value={input1}
                      />
                    </div>
                    <div className={scss.inputbox}>
                      <input
                        required="required"
                        type="number"
                        placeholder="+38-(XXX)-XXX-XX-XX"
                        className={scss.input}
                        onChange={e => setInput2(e.target.value)}
                        value={input2}
                      />
                    </div>
                    <div className={scss.inputbox}>
                      <textarea
                        rows="5"
                        cols="33"
                        placeholder="Запитання"
                        className={scss.textArea}
                        onChange={e => setInput3(e.target.value)}
                        value={input3}
                      ></textarea>
                    </div>
                    <div className={scss.btnWrapper}>
                      <button type="submit" className={scss.contactBtn}>
                        <span className={scss.underlineAnimation}>
                          {' '}
                          Надіслати
                        </span>
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
                  </form>
                </motion.div>
              </TabPanel>

              <TabPanel className={scss.tabPanel}>
                <motion.div
                  initial={{ opacity: 0, x: 7, y: 5 }}
                  animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                  }}
                >
                  <form onSubmit={handleSubmit} className={scss.form}>
                    <div className={scss.inputbox}>
                      <input
                        required="required"
                        type="text"
                        placeholder="Ім`я"
                        className={scss.input}
                        onChange={e => setInput1(e.target.value)}
                        value={input1}
                      />
                    </div>
                    <div className={scss.inputbox}>
                      <input
                        required="required"
                        type="number"
                        placeholder="+38-(XXX)-XXX-XX-XX"
                        className={scss.input}
                        onChange={e => setInput2(e.target.value)}
                        value={input2}
                      />
                    </div>
                    <div className={scss.inputbox}>
                      <textarea
                        rows="5"
                        cols="33"
                        placeholder="Запитання"
                        className={scss.textArea}
                        onChange={e => setInput3(e.target.value)}
                        value={input3}
                      ></textarea>
                    </div>
                    <div className={scss.btnWrapper}>
                      <button type="submit" className={scss.contactBtn}>
                        <span className={scss.underlineAnimation}>
                          {' '}
                          Надіслати
                        </span>
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
                  </form>
                </motion.div>
              </TabPanel>
            </Tabs>
            <div></div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
