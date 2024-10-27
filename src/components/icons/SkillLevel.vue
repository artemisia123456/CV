<template>
    <div class="skill-level">
      <!-- Vygenerujeme bodky na základe maxLevel a level -->
      <span
        v-for="n in maxLevel"
        :key="n"
        :class="['dot', { filled: n <= level }]"
      ></span>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SkillLevel',
    props: {
      level: {
        type: Number,
        required: true,
        validator: (value) => value >= 1 && value <= 5,
      },
      maxLevel: {
        type: Number,
        default: 5,
      },
    },
  };
  </script>
  
  <style scoped>
  .skill-level {
    display: flex;
    gap: 4px;
  }
  
  .dot {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #b7e4c7;
  }
  
  .filled {
    background-color: #2d6a4f; /* Farba pre vyplnené bodky */
  }
  </style>
  