<template>
  <div id="app">
    <div class="containerApp">
      <nav>
        <router-link to="/Home">Domov</router-link>
        <router-link to="/Education">Vzdelanie</router-link>
        <router-link to="/Experiences">Pracovné skúsenosti</router-link>
        <router-link to="/skills">Zručnosti</router-link>
        <router-link to="/projects">Moje projekty</router-link>
        <router-link to="/contact">Kontakt</router-link>
      </nav>
      <h1>Mgr. Paulína Herčútová</h1>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>

div {
  font-family:'Courier New', Courier, monospace ;
  
}
/* Ensure the HTML and body elements take up full height */
html, body {
  margin: 0;
  padding: 0;
  height: 100%; /* Full height for html and body */
}

#app {
  display: block;
  flex-direction: column;
  height: 500vh;  
}

.containerApp {
  display: flex;
  flex-direction: column;
  position: fixed; /* Keep navbar and h1 at the top */
  top: 0;
  left: 0;
  width: 100%;
  background-color: #b7e4c7; /* Ensure the background color matches the navbar */
  z-index: 1000;
  align-items: center;
}

nav {
  display: flex;
  gap: 20px;
  padding: 20px;
}

nav a {
  text-decoration: none;
  color: #1b4332;
  font-weight: bold;
}

nav a:hover {
  color: #b7e4c7;
}

h1 {
  background-color: #2d6a4f;
  padding: 10px;
  color: #b7e4c7;
  font-weight: bold;
  font-size: 2rem;
  width: 100%;
  text-align: center;
}

.content {
  margin-top: 120px; /* Adjust based on the height of your navbar and h1 */
  padding: 20px; /* Add padding for content */
  flex-grow: 1; /* Allow content area to fill remaining space */
  overflow: auto; /* Allow scrolling if content overflows */
}

body{
  background-color: #181818;
}

@media (min-width: 1024px) {
    #app {
        display: block;
    }
}
</style>
