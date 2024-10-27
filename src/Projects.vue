<template>
    <div>
      <header>
        <h1>Moje projekty</h1>
      </header>
      <section>
        <ol>
        <li>
          <a href="https://github.com/artemisia123456/Pac-man" target="_blank">Pac-man</a>
          <ul>
            <li>
            Projekt Pac-Man vytvorený v Jave je inšpirovaný klasickou arkádovou hrou. 
            Hra obsahuje bludisko reprezentované dvojrozmerným poľom, kde Pac-Man zbiera bodky a vyhýba sa duchom. 
            Pac-Man je ovládaný hráčom pomocou klávesnice (šípky/WASD), zatiaľ čo duchovia sa hýbu náhodne, ale keď do ich zorného poľa vkročí Pac-man, začnú ho prenasledovať. 
            Logika hry zahŕňa detekciu kolízií, zber bodiek a power-upov, ktoré dočasne umožňujú Pac-Manovi chytiť duchov. 
            Grafika je vytvorená pomocou Java AWT/Swing, pričom herná slučka zabezpečuje plynulý pohyb a aktualizáciu stavu hry.
            </li>
        </ul>
          
        </li>
        <li>
          <a href="https://github.com/artemisia123456/Snake" target="_blank">Hadík</a> 
          <ul>
            <li>
              Projekt Hadík vytvorený v Jave je implementácia klasickej hry Snake. 
              Hráč ovláda hada pomocou klávesnice (šípky/WASD), ktorý sa pohybuje po hracej ploche a zbiera potravu. 
              Každý zber jedla predĺži hada a po dosiahnutí určitého skóre sa rýchlosť hada zvyšuje, čo zvyšuje obtiažnosť hry. 
              Hra používa logiku kolízie pre kontrolu, či had narazí do vlastného tela, čo spôsobí koniec hry. 
              Pohyb hada je riadený časovačom, ktorý periodicky aktualizuje jeho smer a pozíciu. 
              Grafika je vytvorená pomocou Java AWT/Swing, s pravidelnou aktualizáciou hracieho poľa a skóre.
            </li>
          </ul>
        </li>

        <li>
          <a href="https://github.com/artemisia123456/Piskorky" target="_blank">Piškôrky</a> 
          <ul>
            <li>
              Projekt Piškvorky vytvorený v Jave je implementácia klasickej hry Tic-Tac-Toe pre dvoch hráčov. 
              Hra prebieha na mriežke, ktorá sa prispôsobuje podľa toho, koľko polí si nastavíte. 
              Hráči sa striedajú a umiestňujú symboly (krížik a krúžok). 
              Hráči vyhrávajú, ak sa im podarí vytvoriť riadok alebo stĺpec symbolov. 
              Logika hry zahŕňa kontrolu víťazstva po každom ťahu a detekciu remízy, ak sa vyplní celá mriežka bez víťaza. 
              Hracia plocha je implementovaná pomocou Java Swing, pričom každé kliknutie myšou vykoná ťah a aktualizuje stav hry.
            </li>
          </ul>
        </li>

        <li>
          <a href="https://github.com/artemisia123456/Calculator" target="_blank">Kalkulačka</a> 
          <ul>
            <li>
              Projekt Kalkulačka v Jave je jednoduchá aplikácia na vykonávanie základných matematických operácií ako sčítanie, odčítanie, násobenie a delenie. 
              Používateľ zadáva čísla a operácie pomocou grafického užívateľského rozhrania (GUI) vytvoreného pomocou Java Swing. 
              Logika aplikácie zahŕňa spracovanie užívateľského vstupu, vykonanie príslušnej operácie a zobrazenie výsledku na displeji kalkulačky. 
              Program tiež obsahuje funkcie ako mazanie vstupu (Clear) a prácu s desatinnými číslami.
            </li>
          </ul>
        </li>

        <li>
          <a href="https://github.com/artemisia123456/Translator" target="_blank">Prekladač</a> 
          <ul>
            <li>
              Projekt Prekladač vytvorený v Jave je konzolová aplikácia, 
              ktorá umožňuje prekladať slová alebo vety pomocou vytvorených metód a tried. 
              Použivateľ zadáva text prostredníctvom poľa.
            </li>
          </ul>
        </li>

        <li>
          <a href="https://github.com/artemisia123456/Robot" target="_blank">Hra Robot</a> 
          <ul>
            <li>
              Konzolový program Robot vytvorený v Jave simuluje robota pohybujúceho sa po 10x10 mriežke, 
              kde môže ukladať a odoberať značky na jednotlivých políčkach. 
              Robot má preddefinované príkazy ako krok, otočenie, položenie a zdvihnutie značky, 
              ktoré sú vykonávané v poradí, v akom sú pridané do programu. 
              Na konci sa mriežka vypíše, pričom označí políčka so značkami.
            </li>
          </ul>
        </li>

        <li>
          <a href="https://github.com/artemisia123456/TowerDefense" target="_blank">Hra TowerDefense</a> 
          <ul>
            <li>
              Konzolový program simuluje hru typu Tower Defense, kde sa nepriatelia pohybujú smerom k cieľu, 
              pričom ich úlohou je dostať sa na jeho pozíciu. Na hracej ploche sú rozmiestnené veže, 
              ktoré sa pokúšajú zastaviť nepriateľov tým, že po nich strieľajú, ak sú v dosahu a majú nabitú 
              zbraň. Ak sa niektorý nepriateľ dostane na pozíciu cieľa, hra sa skončí výnimkou 
              PrehraException.
            </li>
          </ul>
        </li>
       </ol>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "Projects",
  };
  </script>

<style scoped>
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
 
  a {
    text-decoration: underline;
    font-size:x-large;
  }

</style>