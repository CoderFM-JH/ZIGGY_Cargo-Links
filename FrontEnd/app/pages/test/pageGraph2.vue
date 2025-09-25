<template>
   <div class="p-10">
     <div class="chart-wrapper">
       <LineChart
         :data="data"
         :categories="categories"
         :height="300"
         :xFormatter="xFormatter"
         xLabel="Month"
         yLabel="Sales"
       />
     </div>
   </div>
 </template>
 
 <script setup>
 import { LineChart } from 'vue-chrts'
 
 const data = [
   { month: 'Jan', sales: 100 },
   { month: 'Feb', sales: 120 },
   { month: 'Mar', sales: 180 },
   { month: 'Apr', sales: 110 },
   { month: 'May', sales: 90 },
   { month: 'Jun', sales: 150 },
   { month: 'Jul', sales: 200 },
   { month: 'Aug', sales: 170 },
   { month: 'Sep', sales: 130 },
   { month: 'Oct', sales: 160 },
   { month: 'Nov', sales: 190 },
   { month: 'Dec', sales: 220 }
 ]
 
 // ✅ Couleur + effet de remplissage dégradé
 const categories = {
   sales: {
     name: 'Sales',
     color: '#3b82f6',
     fill: 'rgba(59, 130, 246, 0.2)' // bleu clair transparent
   }
 }
 
 const xFormatter = (i) => data[i].month
 </script>
 