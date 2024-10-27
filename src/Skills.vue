<template>
  <div>
    <header>
      <h1>Zručnosti</h1>
    </header>
    <section>
      <div>
      <h2>PC</h2>
      <ul class="skills-list">
        <li>
          Java - Stredne pokročilý
          <SkillLevel :level="3" class="skill-level"/>
        </li>
        <li>
          HTML & CSS - Mierne Pokročilý
          <SkillLevel :level="2" class="skill-level"/>
        </li>
        <li>
          JavaScript - Mierne pokročilý
          <SkillLevel :level="2" class="skill-level"/>
        </li>
        <li>
          Vue.js - Zaklady
          <SkillLevel :level="1" class="skill-level"/>
        </li>
        <li>
          Github - Základy
          <SkillLevel :level="1" class="skill-level"/>
        </li>
        <li>
          Microsoft Excel - Mierne pokročilý
          <SkillLevel :level="2" class="skill-level"/>
        </li>
        <li>
          Microsoft Word - Pokročilý
          <SkillLevel :level="4" class="skill-level"/>
        </li>
        <li>
          Microsoft PowerPoint - Pokročilý
          <SkillLevel :level="4" class="skill-level"/>
        </li>
        <li>
          memoQ - Expert
          <SkillLevel :level="5" class="skill-level"/>
        </li>
        <li>
          Adobe Photoshop - Základy
          <SkillLevel :level="1" class="skill-level"/>
        </li>
        <li>
          Adobe Illustrator - Základy
          <SkillLevel :level="1" class="skill-level"/>
        </li>
        <li>
          Aegisub - Expert
          <SkillLevel :level="5" class="skill-level"/>
        </li>
        <li>
          WordPress - Mierne pokročilý
          <SkillLevel :level="2" class="skill-level"/>
        </li>
      </ul>
    </div>

    <div>
      <h2>Jazyky</h2>
      <ul class="skills-list">
        <li>
          Anglický jazyk - Pokročilý (C1)
          <SkillLevel :level="4" class="skill-level"/>
        </li>
      </ul>
      </div>
    </section>
  </div>
</template>

<script>
import SkillLevel from './components/icons/SkillLevel.vue';

export default {
  name: "Skills",
  components: {
    SkillLevel,
  },
};
</script>

<style scoped>
div {
  color: #d8f3dc;
}

h1 {
  font-size: 2.5rem; 
  margin-bottom: 20px; 
}

h2 {
  text-decoration: underline;
  margin-top: 20px;
}

.skills-list {
  list-style-type: none;
  padding: 0;
}

.skills-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.skill-level {
  margin-left: 20px;
}

/* pre menšie obrazovky */
@media (max-width: 600px) {
  h1 {
    font-size: 2rem; 
  }
  
  .skills-list li {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .skill-level {
    margin-left: 0;
  }
}
</style>
