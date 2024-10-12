<template>
  <footer class="bg-gray-800 text-white py-6">
    <div class="container mx-auto text-center">

      <p class="text-sm flex items-center justify-center space-x-2 text-center">
  <NuxtLink
    to="/"
    class="flex items-center"
  >
    <img src="/logo.webp" alt="Electric Logo" class="w-8 h-8 rounded-full inline-block align-middle" />
    <span class="text-gray-600 dark:text-gray-400">© 2024 Nelli Levon. Все права защищены.</span>
  </NuxtLink>
</p>
      <nav>
        <ul class="flex justify-center space-x-4 mt-4">
          <li>
            <NuxtLink to="/" class="hover:text-blue-400">Գլխավոր</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="hover:text-blue-400">Մեր Մասին</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/ServicesView" class="hover:text-blue-400">Ծառայություններ</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/ContactForm" class="hover:text-blue-400">Հетադարձ Կап</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped>
  footer {
    background-color: #1a202c; /* Темно-серый фон */
    color: #fff;
  }

  a {
    color: inherit;
  }

  a:hover {
    color: #63b3ed; /* Голубой цвет при наведении */
  }
</style>
