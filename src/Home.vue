<template> 
  <div class="container ">
    <header>
      <h1>Vitajte na mojej osobnej webovej stránke!</h1>
    </header>
    <section>
    <p>Volám sa Paulína Herčútová, mám 25 rokov.
      Aktuálna práca pre mňa nemá žiadnu pridanú hodnotu a neumožňuje mi osobnostný rast, 
      preto si hľadám novú prácu, ktorá ma niekde posunie.
      Rýchlo sa učím nové veci, vo svojom voľnom čase sa vzdelávam ako to len ide. 
      Už vyše roka sa sama učím programovať v programovacom jazyku Java a môžem povedať, 
      že je to konečne niečo, čo ma baví. Baví ma najmä backend, ale prostredníctvom kurzu, 
      ktorý momentálne absolvujem sa ku mne dostali aj základy frontendu a testovania, ktoré ma tiež dosť bavili. 
      Chcem sa v oblasti informatiky zlepšovať a učiť sa stále nové veci.  
    </p>
    <img src="@/assets/my-image/my-image.jpg" alt="">
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
div {
  font-family: 'Courier New', Courier, monospace;
  text-align: left;
}

h1 {
  font-size: 2.5rem; /* Veľkosť nadpisu sa prispôsobí rôznym veľkostiam */
  margin-bottom: 20px; /* Medzera pod nadpisom */
  color: #d8f3dc;
  text-align: center; /* Stredové zarovnanie pre h1 */
}

h2 {
  color: #d8f3dc;
  text-decoration: underline;
}

p {
  font-size: 1.2rem; /* Veľkosť písma pre odseky */
  margin-bottom: 15px; /* Medzera medzi odsekmi */
  color: #d8f3dc;
  text-align: justify; /* Zarovnanie textu odsekov */
}

/* Responzívne úpravy pre menšie obrazovky */
@media (max-width: 600px) {
  div {
    text-align: center; /* Stredové zarovnanie pre menšie obrazovky */
  }
  
  h1 {
    font-size: 2rem; /* Zmenšuje veľkosť nadpisu na menších obrazovkách */
  }
  
  p {
    font-size: 1rem; /* Zmenšuje veľkosť písma pre odseky */
  }
}

img {
  height: 230px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
