<template>
  <div class="bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200 py-10 w-full h-full">
    <div
      class="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
      data-aos="fade-up"
    >
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/2">
          <img
            src="/dispp.jpeg"
            alt="Contact Us Image"
            class="w-full h-full object-cover transition duration-500 hover:brightness-90"
          />

        </div>

        <div class="w-full md:w-1/2 p-8">
          <h2 class="text-3xl font-bold mb-4 text-blue-900">
            Հանդիպեք մեզ հետ
          </h2>

          <div class="flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-blue-600 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M2.003 5.884a3.25 3.25 0 011.21-2.449l.49-.39c1.062-.845 2.596-.85 3.678.014L8.26 3.698a2.25 2.25 0 01.679 2.626l-.76 1.902a13.06 13.06 0 005.031 5.03l1.902-.76a2.25 2.25 0 012.626.679l.64.878c.865 1.082.86 2.616-.014 3.678l-.39.49a3.25 3.25 0 01-2.449 1.21c-7.54 0-13.666-6.125-13.666-13.667z"
              />
            </svg>
            <span class="text-lg font-medium">+374 33 333362</span>
          </div>

          <div class="flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-blue-600 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.7 3H7.3C5.6 3 4 4.6 4 6.3V17.7C4 19.4 5.6 21 7.3 21H16.7C18.4 21 20 19.4 20 17.7V6.3C20 4.6 18.4 3 16.7 3ZM16.7 5.3L12 9.6L7.3 5.3H16.7ZM12 11.4L16.7 7.1V17.7H7.3V7.1L12 11.4Z"
              />
            </svg>
            <span class="text-lg font-medium">ltdeltrans@gmail.com</span>
          </div>

          <div class="flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-blue-600 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17 9C17 12.866 12 21 12 21s-5-8.134-5-12a5 5 0 1110 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 11a2 2 0 100-4 2 2 0 000 4z"
              />
            </svg>
            <span class="text-lg font-medium">Երևան,  Աբովյան 10</span>
          </div>
          <div class="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.0705149470566!2d44.5152133153727!3d40.18272027939327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4041d8cf76b6c0c7%3A0x0!2z0KHQvdC10LrRgdGC0YHRjNC60LjQuSDRgtC10LvRjNC20Y8gMTA!5e0!3m2!1sru!2s!4v1696959330324!5m2!1sru!2s"
          width="100%"
          height="300"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
        </div>
      </div>
    </div>

    <div class="bg-gray-100 py-6">
      <div class="max-w-6xl mx-auto text-center">
        <h3 class="text-2xl font-bold text-blue-900 mb-4" data-aos="fade-up">
          Ինչու ընտրել մեզ
        </h3>
        <p class="text-lg text-gray-700 mb-2" data-aos="fade-up" data-aos-delay="100">
          Մենք առաջարկում ենք մասնագիտական և վստահելի ծառայություն, որին կարող եք վստահել:
        </p>
        <p class="text-lg text-gray-700 mb-2" data-aos="fade-up" data-aos-delay="200">
          Մեր փորձառու մասնագետների թիմը միշտ պատրաստ է առաջարկել լուծումներ, որոնք կգերազանցեն ձեր ակնկալիքները:
        </p>
        <p class="text-lg text-gray-700 mb-2" data-aos="fade-up" data-aos-delay="300">
          Դուք կբավարարվեք մեր ծառայությունների որակով, իսկ մեր առաքելությունն է ապահովել հարմարավետություն և վստահություն:
        </p>
        <p class="text-lg text-gray-700" data-aos="fade-up" data-aos-delay="400">
          Կապվեք մեզ հետ, և մենք կ dokazենք, որ դուք ճիշտ ընտրություն եք կատարել:
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

onMounted(() => {
  AOS.init();
});
</script>

<style scoped>
.map-container {
  width: 100%;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
</style>
