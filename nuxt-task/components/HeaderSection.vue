<template>
  <header class="bg-white dark:bg-blue-900 py-4 shadow sticky top-0 z-50">
    <div class="container mx-auto flex justify-between items-center">
      <!-- <div class="flex items-center space-x-4">
    <img src="/logo.webp" alt="Electric Logo" class="w-12 h-12 rounded-full" />
    <h1 class="text-4xl font-bold text-blue-400 dark:text-blue-200 font-poppins">
      Nelli Levon
    </h1>
  </div> --> <NuxtLink
  to="/"
  :class="{
    'text-blue-400 dark:text-blue-200': isRouteActive('/'),
    'text-gray-600 dark:text-gray-400 hover:text-blue-600': !isRouteActive('/')
  }"
  class="flex items-center"
>
  <img src="/logo.webp" alt="Electric Logo" class="w-8 h-8 rounded-full inline-block align-middle mr-2" />
  <h1 class="text-4xl font-bold font-poppins">
    Nelli Levon
  </h1>
</NuxtLink>

      <div class="lg:hidden">
        <button @click="toggleMenu" class="text-blue-400 dark:text-blue-200 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      <nav class="hidden lg:flex">
        <ul class="flex space-x-8">
          <li>
            <RouterLink
              to="/"
              :class="isRouteActive('/') ? 'text-blue-600 font-bold' : 'text-gray-600 dark:text-blue-200 hover:text-blue-600'"
            >
              Գլխավոր
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/AboutView"
              :class="isRouteActive('/AboutView') ? 'text-purple-800 font-bold' : 'text-gray-600 dark:text-blue-200 hover:text-blue-600'"
            >
              Մեր Մասին
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/ServicesView"
              :class="isRouteActive('/ServicesView') ? 'text-blue-600 font-bold' : 'text-gray-600 dark:text-blue-200 hover:text-blue-600'"
            >
              Ծառայություններ
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/ContactForm"
              :class="isRouteActive('/ContactForm') ? 'text-blue-600 font-bold' : 'text-gray-600 dark:text-blue-200 hover:text-blue-600'"
            >
              Հետադարձ Կապ
            </RouterLink>
          </li>
        </ul>
      </nav>

      <!-- Mobile menu -->
      <nav
        v-if="isMenuOpen"
        class="absolute top-full left-0 w-full bg-white dark:bg-blue-900 lg:hidden"
      >
        <ul class="flex flex-col items-center space-y-4 py-4">
          <li>
            <RouterLink
              to="/"
              :class="isRouteActive('/') ? 'text-blue-600 font-bold' : 'text-gray-600 dark:text-blue-200 hover:text-blue-600'"
              @click="toggleMenu"
            >
              Գլխավոր
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/about"
              :class="isRouteActive('/about') ? 'text-purple-800 font-bold' : 'text-gray-600 dark:text-blue-200 hover:text-purple-800'"
              @click="toggleMenu"
            >
              Մեր Մասին
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/ServicesView"
              :class="isRouteActive('/ServicesView') ? 'text-blue-600 font-bold' : 'text-gray-600 dark:text-blue-200 hover:text-blue-600'"
              @click="toggleMenu"
            >
              Ծառայություններ
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/ContactForm"
              :class="isRouteActive('/ContactForm') ? 'text-blue-600 font-bold' : 'text-gray-600 dark:text-blue-200 hover:text-blue-600'"
              @click="toggleMenu"
            >
              Հետադարձ Կապ
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router'
const route = useRoute()

const isRouteActive = (path) => {
  return route.path === path
}

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<style scoped>
@media (max-width: 1024px) {
  /* Adjustments for mobile screens */
  nav ul {
    flex-direction: column;
  }

  .container {
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
