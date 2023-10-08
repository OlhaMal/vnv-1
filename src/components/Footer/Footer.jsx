import scss from './Footer.module.scss';
import { Container } from 'components/Container/Container';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import {
  BsInstagram,
  BsTiktok,
  BsFacebook,
  BsLinkedin,
  BsTelegram,
} from 'react-icons/bs';

export const Footer = () => {
  return (
    <InView triggerOnce={false}>
      {({ inView, ref }) => (
        <footer className={scss.foterContainer} ref={ref}>
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
              }}
              className={scss.footerLinks}
            >
              <a
                className={scss.iconWrapper}
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsFacebook />
              </a>
              <a
                className={scss.iconWrapper}
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsInstagram />
              </a>
              <a
                className={scss.iconWrapper}
                href="https://telegram.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsTelegram />
              </a>
              <a
                className={scss.iconWrapper}
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin />
              </a>
              <a
                className={scss.iconWrapper}
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsTiktok />
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
              }}
            >
              <p className={scss.credits}>© Liubomyr Luznyi 2023</p>
            </motion.div>
          </Container>
        </footer>
      )}
    </InView>
  );
};
