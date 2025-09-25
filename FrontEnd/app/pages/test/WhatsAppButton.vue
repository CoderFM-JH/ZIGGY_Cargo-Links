<template>
  <div class="flex justify-center mt-10">
    <a
      :href="whatsappLink"
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-2xl shadow-md hover:bg-green-600 transition"
    >
      <span>💬 Discuter sur WhatsApp</span>
    </a>
  </div>
</template>

<script setup>
const adminNumber = "237690000000"; // numéro sans le "+"
const defaultMsg = "Bonjour, je voudrais discuter avec un administrateur.";
const whatsappLink = `https://wa.me/${adminNumber}?text=${encodeURIComponent(defaultMsg)}`;
</script>
