<template>
   <div class="flex gap-4 bg-blue-700 ">
     <!-- Bouton WhatsApp -->
     <button
       v-if="contacts.whatsapp"
       @click="openWhatsApp"
       class="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition"
     >
       📲 WhatsApp
     </button>
 
     <!-- Bouton WeChat -->
     <button
       v-if="contacts.wechat"
       @click="openWeChat"
       class="px-4 py-2 bg-green-700 text-white rounded-lg shadow-md hover:bg-green-800 transition"
     >
       🟢 WeChat
     </button>
   </div>
 </template>
 
 <script setup>
 import { ref, onMounted } from 'vue'
 
 const contacts = ref({ whatsapp: null, wechat: null })
 
 // Charger les numéros depuis ton backend
 onMounted(async () => {
   try {
     const res = await fetch('http://localhost/ZIGGY_Cargo-Links/api/contact.php')
     contacts.value = await res.json()
   } catch (err) {
     console.error("Erreur chargement contacts:", err)
   }
 })
 
 // ✅ Ouvrir WhatsApp sans afficher le numéro
 function openWhatsApp() {
   const phone = contacts.value.whatsapp
   window.open(`https://wa.me/${phone}`, "_blank")
 }
 
 // ✅ Ouvrir WeChat (tu peux mettre un lien de QR code ou ID direct)
 function openWeChat() {
   alert(`Ajoute ce contact sur WeChat : ${contacts.value.wechat}`)
 }
 </script>
 




