import { Hero } from 'components/Hero/Hero';
import { AboutUs } from 'components/AboutUs/AboutUs';
import { Services } from 'components/Services/Services';
import { LeadMagnet } from 'components/LeadMagnet/LeadMagnet';
import { Portfolio } from 'components/Portfolio/Portfolio';
import { Questions } from 'components/Questions/Questions';
import { ContactUs } from 'components/ContactUs/ContactUs';
import { Review } from 'components/Review/Review';
import { Roulette } from 'components/Roulette/Roulette';
import { Footer } from 'components/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Services />
      <LeadMagnet />
      <Portfolio />
      <Questions />
      <ContactUs />
      <Review />
      <Roulette />
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};
