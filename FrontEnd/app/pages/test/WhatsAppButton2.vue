<template>
  <div class="flex flex-col items-center mt-10 gap-4">
    <!-- Illustration -->
    <img src="/assets/iconeZCL.jpg" alt="Icône ZCL" class="w-24 h-24 rounded-full shadow-lg" />

    <!-- Bouton WhatsApp -->
    <a
      :href="whatsappLink"
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-2xl shadow-md hover:bg-green-600 transition"
    >
      <span>💬 Contacter l’administrateur 2</span>
    </a>
  </div>
</template>

<script setup>
const adminNumber = "237659461258";
const photoZCL = "/assets/iconeZCL.jpg"; 

const defaultMsg = ` ${photoZCL} Bonjour, je souhaite discuter avec un administrateur de ZCL (ZIGGY Cargo~Links) . `;
const whatsappLink = `https://wa.me/${adminNumber}?text=${encodeURIComponent(defaultMsg)}`;
</script>

<!-- ok -->