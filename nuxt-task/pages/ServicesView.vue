<template>
  <div class="bg-blue-100 py-10">
    <div class="max-w-6xl mx-auto text-center mb-10" data-aos="fade-up">
      <h2 class="text-2xl font-semibold text-gray-800">
        Բոլոր աշխատանքները իրականացվում են
      </h2>
      <p class="text-gray-600 mt-4">
        Բոլոր աշխատանքները իրականացվում են փորձագիտական բարձր չափանիշներին
        համապատասխան, օգտագործվում են վստահելի և հայկական արտադրության նյութեր և
        սարքավորումներ:
      </p>
    </div>

    <div
      class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      <div class="card text-center p-6 bg-white shadow-lg rounded-lg" data-aos="fade-right">
        <h3 class="text-lg font-semibold text-gray-800">
          Էլեկտրակայանների աշխատանքներ
        </h3>
        <p class="text-gray-600 mt-2">
          Էլեկտրակայանների կառուցման, վերանորոգման, վերանորոգման աշխատանքների
          իրականացում:
        </p>
      </div>

      <div class="card text-center p-6 bg-white shadow-lg rounded-lg" data-aos="fade-up" data-aos-delay="100">
        <h3 class="text-lg font-semibold text-gray-800">Էլեկտրաֆիկացում</h3>
        <p class="text-gray-600 mt-2">
          Բնակավայրերի էլեկտրաֆիկացման համակարգերի տեղադրում եւ սպասարկում:
        </p>
      </div>

      <div class="card text-center p-6 bg-white shadow-lg rounded-lg" data-aos="fade-left">
        <h3 class="text-lg font-semibold text-gray-800">
          Սարքավորումների աշխատանքներ
        </h3>
        <p class="text-gray-600 mt-2">
          Սարքավորումների սպասարկում եւ տեղադրում՝ բարձր որակի եւ
          արդյունավետության ապահովման համար:
        </p>
      </div>

      <div class="card text-center p-6 bg-white shadow-lg rounded-lg" data-aos="fade-up" data-aos-delay="200">
        <h3 class="text-lg font-semibold text-gray-800">
          Մոնտաժի աշխատանքներ
        </h3>
        <p class="text-gray-600 mt-2">
          Մենք առաջարկում ենք մոնտաժի բարձր որակի ծառայություններ՝ համապատասխան
          բոլոր ստանդարտներին:
        </p>
      </div>

      <div class="card text-center p-6 bg-white shadow-lg rounded-lg" data-aos="fade-right" data-aos-delay="300">
        <h3 class="text-lg font-semibold text-gray-800">
          Կենսագրական աշխատանքներ
        </h3>
        <p class="text-gray-600 mt-2">
          Կենսագրական մոնտաժի և սպասարկման բարձրակարգ ծառայություններ:
        </p>
      </div>

      <div class="card text-center p-6 bg-white shadow-lg rounded-lg" data-aos="fade-left" data-aos-delay="400">
        <h3 class="text-lg font-semibold text-gray-800">
          Խորհրդատվություն
        </h3>
        <p class="text-gray-600 mt-2">
          Մեր մասնագետները կտրամադրեն ոլորտային բարձրորակ խորհրդատվություն
          տարբեր հարցերի շուրջ:
        </p>
      </div>

      <div class="card text-center p-6 bg-white shadow-lg rounded-lg" data-aos="fade-up" data-aos-delay="500">
        <h3 class="text-lg font-semibold text-gray-800">
          Պրոյեկտային աշխատանքներ
        </h3>
        <p class="text-gray-600 mt-2">
          Տարբեր պրոյեկտների մշակման, կառավարման եւ իրականացման ծառայություններ:
        </p>
      </div>

      <div class="card text-center p-6 bg-white shadow-lg rounded-lg" data-aos="fade-right" data-aos-delay="600">
        <h3 class="text-lg font-semibold text-gray-800">
          Տեխնիկական աջակցություն
        </h3>
        <p class="text-gray-600 mt-2">
          Օգտագործողներին աջակցելու համար՝ տեխնիկական ապահովման բոլոր փուլերում:
        </p>
      </div>

      <div class="card text-center p-6 bg-white shadow-lg rounded-lg" data-aos="fade-left" data-aos-delay="700">
        <h3 class="text-lg font-semibold text-gray-800">
          Կրթական ծառայություններ
        </h3>
        <p class="text-gray-600 mt-2">
          Բարձրակարգ դասընթացներ եւ կրթական ծրագիրներ ոլորտի մասնագետների համար:
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';

onMounted(() => {
  AOS.init({
    duration: 800,
    once: true,
  });
});
</script>

<style scoped>
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); 
}
</style>
