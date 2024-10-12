<script setup>
import HeaderSection from '@/components/HeaderSection.vue'
</script>

<template>
  <section class="relative h-screen bg-gray-100">
    <img
      src="/yerevan.jpg"
      alt="Background Image"
      class="absolute inset-0 w-full h-full object-cover"
    />

    <div class="relative z-10 flex flex-col items-center justify-center h-full">
      <h2 class="text-6xl font-bold text-blue-400 mb-10">Մեր Մասին</h2>
      <p class="text-6xl text-blue-400 mt-8">
        qcum enq gexecik katraum shat vat
      </p>
    </div>
  </section>

  <section class="bg-gray-100 py-20">
    <div class="container mx-auto text-center">
      <h2 class="text-5xl font-bold text-gray-800 mb-10">
        ՄԵՐ ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐԸ
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          class="relative h-96 bg-cover bg-center rounded-lg bg-[url('/elkayan.jpeg')] overflow-hidden shadow-lg"
        >
          <div
            class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          >
            <div class="text-white text-left px-4">
              <h3 class="text-2xl font-bold mb-2">
                Էլեկտրակայանների Աշխատանքներ
              </h3>
              <p class="text-lg">
                Էլեկտրական ենթակայանների կառույցում և վերափոխում՝ առօրյա
                աշխատանքային և չափանիշների ապահովման համար:
              </p>
            </div>
          </div>
        </div>

        <div
          class="relative h-96 bg-cover bg-center rounded-lg overflow-hidden shadow-lg"
          style="background-image: url('/elkayanm.jpeg')"
        >
          <div
            class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          >
            <div class="text-white text-left px-4">
              <h3 class="text-2xl font-bold mb-2">Էլեկտրաֆիկացում</h3>
              <p class="text-lg">
                Բարելավում էլեկտրամատակարարման համակագերի համար՝ երկարատև
                շահագործման համար:
              </p>
            </div>
          </div>
        </div>

        <div
          class="relative h-96 bg-cover bg-center rounded-lg overflow-hidden shadow-lg"
          style="background-image: url('/detalner.jpeg')"
        >
          <div
            class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          >
            <div class="text-white text-left px-4">
              <h3 class="text-2xl font-bold mb-2">Մատակարային Աշխատանքներ</h3>
              <p class="text-lg">
                Մատակարային ծառայությունների որակական և անխափան աշխատանքը
                ապահովելու համար:
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="py-16 bg-gray-50 text-blue-800">
    <div class="container mx-auto">
      <div class="bg-white p-8 shadow-md rounded-lg">
        <p class="text-lg text-gray-700">
          Հայաստանի առաջատար էներգետիկ շինարարական ընկերություններից մեկը, որը
          հիմնադրվել է 2021-ին: Մենք խոստանում ենք տրամադրել բարձրակարգ
          էներգետիկ լուծումների որակ, հուսալիություն և անվտանգություն մեր բոլոր
          ծրագրերում։
        </p>
        <a
          href="#"
          class="mt-6 inline-block bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Կապվել Մեզ հետ
        </a>
      </div>
    </div>
  </section>
</template>
