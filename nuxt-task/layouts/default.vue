<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header section -->
    <Header />

    <!-- Main section for dynamic content -->
    <section class="flex-grow container mx-auto py-8 mt-20">
      <NuxtPage />
    </section>

    <!-- Footer section -->
    <Footer />
  </div>
</template>
