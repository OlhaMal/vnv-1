import scss from './LeadMagnet.module.scss';
import { Container } from 'components/Container/Container';
import { ReactComponent as Icon } from '../../images/undraw_in_sync_re_jlqd.svg';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const LeadMagnet = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });
  return (
    <section className={scss.magnetContainer}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.4,
          }}
        >
          <div className={scss.banner}  ref={ref}>
            <div className={scss.textWrapper}>
              <h2 className={scss.title}>
                При першому замовленні щось безкоштовно *
              </h2>
              <p className={scss.subtitle}>
                Мета компанії проста: це надання вам безпрограшних
                домовленостей, інновацій та зберігання даних.
              </p>
              <p className={scss.additionInfo}>
                <b>*</b> Ми весь час думаємо про різницю між містами, про їх
                ресторани, музеї та різну погоду.
              </p>
              <div className={scss.btnWrapper}>
                <button type="button" className={scss.magnetBtn}>
                  <span className={scss.underlineAnimation}> Детальніше</span>
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
            </div>
            <div className={scss.iconWrapper}>
              <Icon />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
