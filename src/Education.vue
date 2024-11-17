<template>
    <div>
      <header>
        <h1>Vzdelanie</h1>
      </header>
      <section>
        <div>
          <h2>sdacademy.sk</h2>
          <h3>MÁJ 2024 - Súčasnosť</h3>
          <p> Po takmer roku samoštúdia Javy som sa rozhodla urobiť si od Mája tohto roka online kurz zameraný na Javu. Dostava sa nám obrovské množstvo praktických ale aj teoretických poznatkov v oblastiach ako:
            Java basics, Java fundamentals, Java Fundamentals coding, Java advanced Features coding, Software Testing, SQL, HTML, CSS, JavaScript, Vue.js, Spring. Ukončenie kurzu bude prostredníctvom prezentácie finálneho projektu (ja pracujem na vývoji aplikácie, ktorý uľahčí zubárom zhotovovanie liečebných plánov).  </p>
        </div>
        <div>
          <h2>Univerzita Mateja Bela v Banskej Bystrici Filozoficka fakulta</h2>
          <h3>SEP 2022 - OCT 2024</h3>
          <p> Štúdium odboru Anglický jazyk (prekladateľstvo a tlmočníctvo) - história a kultúra
              Magisterský stupeň. Zameranie hlavne na prekladateľstvo. Štúdium som skončila obhajobou
              diplomovej práce Seriálová adaptácia videohry The Last of Us (Intersemiotický preklad).
          </p>
        </div>
        <div>
          <h2>Univerzita Mateja Bela v Banskej Bystrici Filozoficka fakulta</h2>
          <h3>SEP 2019 - MÁJ 2022</h3>
          <p> Štúdium odboru Anglický jazyk (prekladateľstvo a tlmočníctvo) - história a kultúra
              Bakalárksy stupeň. Zameranie hlavne na prekladateľstvo. Štúdium som skončila obhajobou
              bakalárskej práce Breakfast of Champions v slovenskom preklade.</p>
        </div>
        <div>
          <h2>Stredná zdravotnícka škola vo Zvolene</h2>
          <h3>SEP 2014 - MÁJ 2018</h3>
          <p>Štúdium odboru Zdravotnícky asistent. Štúdium som skončila maturitnou skúškou.</p>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "Education",
  };
  </script>

<style scoped>

h2 {
  text-decoration: underline;
}

div {
  text-align: justify;
  color: #d8f3dc;
}

h1 {
  font-size: 2.5rem; /* Veľkosť nadpisu sa prispôsobí rôznym veľkostiam */
  margin-bottom: 20px; /* Medzera pod nadpisom */
}

p {
  font-size: 1.2rem; /* Veľkosť písma pre odseky */
  margin-bottom: 15px; /* Medzera medzi odsekmi */
}

/* Responzívne úpravy pre menšie obrazovky */
@media (max-width: 600px) {
  h1 {
    font-size: 2rem; /* Zmenšuje veľkosť nadpisu na menších obrazovkách */
  }
  
  p {
    font-size: 1rem; /* Zmenšuje veľkosť písma pre odseky */
  }
}

</style>