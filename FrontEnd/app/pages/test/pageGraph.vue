<template>
   <div class="p-10">
   <div class="chart-wrapper ">
   <LineChart
     :data="data"
     :categories="categories"
     :height="300"
     :xFormatter="xFormatter"
     xLabel="Month"
     yLabel="Amount"
   />
   </div>
   </div>

 </template>
 
 <script setup>
 import { LineChart } from 'vue-chrts';
 
 const data = [
   { month: 'Jan', sales: 100, profit: 50 },
   { month: 'Feb', sales: 120, profit: 55 },
   { month: 'Mar', sales: 180, profit: 80 },
   { month: 'Apr', sales: 110, profit: 40 },
   { month: 'May', sales: 90, profit: 30 },
   { month: 'Jun', sales: 150, profit: 70 },
   { month: 'Jul', sales: 200, profit: 100 },
   { month: 'Aug', sales: 170, profit: 90 },
   { month: 'Sep', sales: 130, profit: 60 },
   { month: 'Oct', sales: 160, profit: 75 },
   { month: 'Nov', sales: 190, profit: 95 },
   { month: 'Dec', sales: 220, profit: 110 }
 ];
 
 const categories = {
   sales: {
     name: 'Sales',
     color: '#3b82f6'
   },
   profit: {
     name: 'Profit', 
     color: '#10b981'
   }
 };
 
 const xFormatter = (i) => data[i].month;
 </script>
 