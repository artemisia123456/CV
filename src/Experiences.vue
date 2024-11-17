<template>
    <div>
      <header>
        <h1>Pracovné skúsenosti</h1>
      </header>
      <section>
      <div>
        <h2>ESITY s.r.o., Homeoffice</h2>
        <h3>OKT 2022 - NOV 2023</h3>
        <p> Pre firmu Esity som robila rôzne projekty: titulkovanie cez softvér Aegisub,
            preklad z ANJ do SJ pomocou softvéru MemoQ, grafiky v programoch Photoshop a v Adobe Illustrator, trénovanie a tetsovanie bota Bard pre Google (Anglický a Slovenký trh) a updateovala
            som e-shop cez WordPress.
        </p>
      </div>
      <div>
        <h2>Welocalize, Homeoffice</h2>
        <h3>JAN 2023 - SEP 2023</h3>
        <p>Pre túto zahraničnú firmu som robila projekty:
          lokalizácia a preklad softvérov na CZ/SK trh., testovanie automatických reklám od Google. 
          Podieľala som sa znova na projekte ChatBot Bard
          od Google - trenovanie a testovanie na CZ/SK trh.
        </p>
      </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "Experiences",
  };
  </script>

  <style scoped>
  div {
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

  h2 {
    text-decoration: underline;
  }
  
  </style>