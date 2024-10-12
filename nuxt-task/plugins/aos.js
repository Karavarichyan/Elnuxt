import AOS from 'aos';
import 'aos/dist/aos.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:mounted', () => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  });
});
