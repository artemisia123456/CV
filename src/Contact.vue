<template>
  <div>
    <header>
      <h1>Kontakt</h1>
    </header>
    <section>
      <div>
      <span class="underlined">E-mail:</span>
      <a href="mailto:phercutova@gmail.com" aria-label="Send an email to phercutova@gmail.com"> phercutova@gmail.com</a>
    </div>
    <div>
      <span class="underlined">Telefón:</span>
      <span> +421 918 232 287</span>
    </div>
    <div>
      <span class="underlined">Adresa:</span>
      <span> Niťová 3, 821 08 Bratislava</span>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style scoped>
.underlined {
  text-decoration: underline;
}

div {
  color: #d8f3dc;
}

h1 {
  font-size: 2.5rem; /* Veľkosť nadpisu sa prispôsobí rôznym veľkostiam */
  margin-bottom: 20px; /* Medzera pod nadpisom */
}

div > div {
  font-size: 1.2rem; /* Veľkosť písma pre odseky */
  margin-bottom: 15px; /* Medzera medzi odsekmi */
}

/* Responzívne úpravy pre menšie obrazovky */
@media (max-width: 600px) {
  h1 {
    font-size: 2rem; /* Zmenšuje veľkosť nadpisu na menších obrazovkách */
  }

  div > div {
    font-size: 1rem; /* Zmenšuje veľkosť písma pre odseky */
  }
}
</style>
