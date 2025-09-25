<template>
   <div class="font-poppins">
     <!-- Navbar -->
     <header class="fixed top-0 w-full bg-white shadow z-50">
       <nav class="container mx-auto flex justify-between items-center py-4 px-6">
         <a href="#" class="text-2xl font-bold text-orange-600">CarVilla</a>
         <ul class="hidden md:flex space-x-6 text-gray-700 font-medium">
           <li><a href="#home" class="hover:text-orange-500">Home</a></li>
           <li><a href="#service" class="hover:text-orange-500">Service</a></li>
           <li><a href="#featured-cars" class="hover:text-orange-500">Featured Cars</a></li>
           <li><a href="#new-cars" class="hover:text-orange-500">New Cars</a></li>
           <li><a href="#brand" class="hover:text-orange-500">Brands</a></li>
           <li><a href="#contact" class="hover:text-orange-500">Contact</a></li>
         </ul>
       </nav>
     </header>
 
     <!-- Hero -->
     <section
       id="home"
       class="h-screen flex flex-col justify-center items-center text-center bg-gray-900 text-white px-6"
     >
       <h2 class="text-4xl md:text-6xl font-bold mb-4">
         Get your desired car <br /> at a reasonable price
       </h2>
       <p class="max-w-2xl mb-6 text-gray-300">
         Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
         tempor incididunt ut labore et dolore magna aliqua.
       </p>
 
       <!-- Boutons CTA -->
       <div class="flex gap-4">
         <a
           href="#contact"
           class="px-6 py-3 bg-orange-600 hover:bg-orange-700 rounded-full text-lg shadow-md"
         >
           Contact Us
         </a>
 
         <!-- Bouton WhatsApp -->
         <a
           :href="whatsappLink"
           target="_blank"
           rel="noopener noreferrer"
           class="flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 rounded-full text-lg shadow-md"
         >
           💬 WhatsApp
         </a>
       </div>
     </section>
 
     <!-- Services -->
     <section id="service" class="py-16 bg-gray-50">
       <div class="container mx-auto text-center">
         <h2 class="text-3xl font-bold mb-12">Our Services</h2>
         <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div
             class="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
           >
             <div class="text-orange-600 text-5xl mb-4">🚗</div>
             <h3 class="text-xl font-semibold mb-2">Largest Dealership</h3>
             <p class="text-gray-600">
               Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
               aut den fugit.
             </p>
           </div>
           <div
             class="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
           >
             <div class="text-orange-600 text-5xl mb-4">🛠️</div>
             <h3 class="text-xl font-semibold mb-2">Unlimited Warranty</h3>
             <p class="text-gray-600">
               Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
               aut den fugit.
             </p>
           </div>
           <div
             class="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
           >
             <div class="text-orange-600 text-5xl mb-4">💳</div>
             <h3 class="text-xl font-semibold mb-2">Insurance Support</h3>
             <p class="text-gray-600">
               Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
               aut den fugit.
             </p>
           </div>
         </div>
       </div>
     </section>
 
     <!-- Featured Cars -->
     <section id="featured-cars" class="py-16 container mx-auto">
       <h2 class="text-3xl font-bold text-center mb-12">Featured Cars</h2>
       <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
         <div class="bg-white shadow rounded-2xl overflow-hidden">
           <!-- <img src="/car1.jpg" alt="Car 1" class="w-full h-56 object-cover" /> -->
           <div class="p-6">
             <h3 class="text-xl font-semibold mb-2">Audi A4</h3>
             <p class="text-gray-600">Luxury sedan with comfort and speed.</p>
           </div>
         </div>
         <div class="bg-white shadow rounded-2xl overflow-hidden">
           <!-- <img src="/car2.jpg" alt="Car 2" class="w-full h-56 object-cover" /> -->
           <div class="p-6">
             <h3 class="text-xl font-semibold mb-2">BMW X5</h3>
             <p class="text-gray-600">Spacious SUV for family and adventure.</p>
           </div>
         </div>
         <div class="bg-white shadow rounded-2xl overflow-hidden">
           <!-- <img src="/car3.jpg" alt="Car 3" class="w-full h-56 object-cover" /> -->
           <div class="p-6">
             <h3 class="text-xl font-semibold mb-2">Mercedes C-Class</h3>
             <p class="text-gray-600">Elegant design with powerful engine.</p>
           </div>
         </div>
       </div>
     </section>
 
     <!-- Footer -->
     <footer class="bg-gray-900 text-white py-8 mt-16">
       <div class="container mx-auto text-center">
         <p>&copy; 2025 CarVilla. All rights reserved.</p>
       </div>
     </footer>
   </div>
 </template>
 
 <script setup>
 const adminNumber = "237659461258"; // sans "+"
 const defaultMsg =
   "Bonjour 👋, je souhaite discuter avec un administrateur de CarVilla.";
 const whatsappLink = `https://wa.me/${adminNumber}?text=${encodeURIComponent(
   defaultMsg
 )}`;
 </script>
 
 <style>
 @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap");
 </style>
 