---
path: '/luku-2/1-suorittimen-rakenne'
title: 'Suorittimen rakenne'
---

<div>
<lead>Suoritin koostuu erilaisista osista ja niillä on kaikilla oma erityinen tehtävänsä. </lead>
</div>

## Suorittimen, välimuistin ja muistin sisältö

Suorituksen aikana prosessin (järjestelmässä olevan ohjelman esitysmuoto, ks. Luku 4.2) ohjelmakoodi ja kaikki sen käyttämä data sijaitsevat keskusmuistissa. Siellä on myös prosessin käyttämät kirjastorutiinit (kirjastoaliohjelmat). Niitä ei linkitetä vain yhden ohjelman yhteyteen, vaan ne voivat olla yhteiskäyttöisiä kaikille prosesseille. Muistissa on myös käyttöjärjestelmän koodi ja data. Näiden lisäksi siellä on myös kaikkien muiden järjestelmässä olevien prosessien tiedot. Emme kuitenkaan käsittele niitä tämän kurssin yhteydessä sen enempää, koska keskitymme yhden konekielisen ohjelman suoritukseen.

Välimuisti sijaitsee suorittimen välittömässä yhteydessä. Välimuistin idea on, että tieto löytyy jostain ihan suorittimen läheltä eikä sitä tarvitse hakea väylän kautta kaukaa muistista. Välimuisti toimii automaattisesti suoraan laitteiston avulla. Täten konekäskyn viitatessa muistiin ei mitenkään tiedetä, löytyykö tieto välimuistista vai ei. Joskus se löytyy ja joskus taas ei. Useimmissa tapauksissa tieto löytyy välimuistista.

<!-- kuva: ch-2-1-suoritin-ja-muisti-draft   # kalvo 5.2   -->

![Yksinkertainen esimerkkijärjestelmä. Suoritin ja muisti ovat yhdistettynä väylään. Muistin sisällä kolme laatikkoa. Ne ovat suorituksessa oleva prosessi ja sen data, kirjastorutiinit ja käyttöjärjestelmä. Suorittimessa on neljä laatikkoa. Ne ovat väylän liittymän kohdalla oleva välimuisti, rekisterit, suoritettava konekäsky ja konekäskyjen suorituspiirit.](./ch-2-1-suoritin-ja-muisti.svg)
<div>
<illustrations motive="ch-2-1-suoritin-ja-muisti"></illustrations>
</div>

Suorittimella on jo aikaisemmin mainitut ohjelmalle näkyvät rekisterit, joiden välillä kaikki aritmetiikka ja muu laskenta tapahtuu. Ohjelman konekäskyissä nimetään, mitä rekistereitä tämä konekäsky käyttää. Konekäsky voi suorittaa tiedon siirtoa muistin ja rekistereiden välillä, tai tehdä pelkkää laskentaa rekistereiden välillä. Jotkut konekäskyt voivat tehdä sekä muistiviittauksia että laskentaa, vaikkakin nykyisissä koneissa näin ei yleensä tehdä.

Suorittimella on tiedon tallettamiseen myös muita sisäisiä rekistereitä, joita ei voi suoraan osoittaa konekäskyissä. Esimerkkinä tällaisesta rekisteristä on käskyrekisteri IR, jossa on muistista haettu tällä hetkellä suorituksessa oleva konekäsky. Lisäksi suorittimella on kuhunkin konekäskyyn liittyvät suorituspiirit.

## Suoritin ja väylä

Väylä on kimppu sähköjohtoja, jotka voidaan luokitella käyttötavan mukaan kolmeen eri ryhmään. _Dataväylän_ johtimien kautta siirretään itse data. Dataväylän _leveys_ voi esimerkiksi olla 32 bittiä (32 johdinta), jolloin 32-bittinen sana siirtyy kerralla läpi, mutta 64-bittinen tieto pitää lähettää kahdessa ryhmässä. _Osoiteväylän_ avulla lähetetään muistiosoitteet. Sen leveys on tyypillisesti sama kuin dataväylän, jolloin esimerkiksi 32-bittinen muistiosoite voidaan lähettää nopeasti yhdellä kertaa. _Kontrolliväylän_ avulla suoritin esimerkiksi kertoo muistipiirille, onko kyseessä luku- tai kirjoituspyyyntö. Muistipiiri taas voi kertoa kontrolliväylän kautta suorittimelle, että haluttu sana on talletettu muistiin ja suoritus voi jatkua. Kontrolliväylässä on myös oma johtimensa sitä varten, että jokin I/O-laite on saanut tehtävänsä tehtyä. Tämän johtimen avulla ulkoinen laite voi aiheuttaa _I/O-laitekeskeytyksen_, johon suoritin sitten voi kohta esiteltävällä tavalla reagoida.

<!-- note: bitti, tavu, sana  -->

<text-box variant="example" name="Bitti, tavu, sana">
  
Tietokone toimii binäärijärjestelmän avulla. Binäärijärjestelmän numeron (0 tai 1) talletettu esitysmuoto on bitti. Nykyään on vakiintunut ryhmitellä bitit tavuiksi ja sanoiksi. Yksi tavu on 8 bittiä ja sana yleensä 4 tavua eli 32 bittiä. Kaksoissana on 8 tavua eli 64 bittiä. Sanojen pituus voi vaihdella tietokoneesta riippuen, mutta edellämainitut pituudet ovat yleisiä.
<br><br>
Bitit numeroidaan yleensä oikealta vasemmalle, alkaen bitistä nolla (0). Esimerkiksi, tavussa 00001000 bitin numero 3 arvo on yksi, kun muut bitit ovat nollia. Numerointi alkaa nollasta sen vuoksi, että tavuun talletetussa positiivisessa kokonaisluvussa kunkin bitin lukuarvo vastaa bitin numeron kakkosen potenssia. Esimerkiksi, tavun 00000101 lukuarvo on 4+1 eli 5.

</text-box>

<!-- kuva: ch-2-1-suorittimen-rakenne-draft   # kalvo 5.4, ei välimuistia  -->

![Suoritin ja väylä tarkemmin. Väylä on jaettu kolmeen eri osaan, jotka ovat dataväylä, osoiteväylä ja kontrolliväylä. Suorittimen sisällä on neljä komponenttia, jotka ovat muistinhallintayksikkö MMU, rekisterit, aritmeettislooginen yksikkö ALU ja kontrolliyksikkö CU. Välimuisti puuttuu kuvasta kokonaan. Aritmeettisloogisessa yksikössä on esimerkin vuoksi mainittu ADD- ja MUL-suorituspiirit. Suorittimen komponentteja yhdistää niiden välinen omna sisäinen dataväylä ja niiden välisen kommunikoinnin toteuttavat kontrollisignaalit. Väylän lähellä on muistinhallintayksikkö MMU, jossa on sisäiset rajarekisterit Base ja Limit, muistin osoitusrekisteri MAR, muistin puskurirekisteri MBR ja väylän kontrollirekisteri BusCtl. Rekistereitä on kahdeksan kappaletta R0-R7. Kontrolliyksikkössä on neljä sisäistä rekisteriä. Ne ovat paikanlaskuri PC, käskyrekisteri IR, tilarekisteri SR ja tilapäisrekisteri TR.](./ch-2-1-suorittimen-rakenne.svg)
<div>
<illustrations motive="ch-2-1-suorittimen-rakenne"></illustrations>
</div>

### Muistinhallintayksikkö MMU, muistinkuvaus
MMU (Memory Management Unit) toimii suorittimen käyttöliittymänä väylälle. Siellä olevan sisäisen rekisterin MAR (Memory Address Register) kautta voidaan asettaa viitatun muistialueen osoite osoiteväylälle. Sisäisen rekisterin MBR (Memory Buffer Register) kautta saadaan haluttu tieto dataväylälle, josta se kirjoitetaan muistiin osoiteväylän osoittamaan paikkaan. Vastaavasti MBR:ään saada tieto dataväylältä, kun muistia luetaan. Sisäisen rekisterin BusCtr kautta synkronoidaan ja ohjataan väylän käyttöä.

Normaali suorituksessa oleva ohjelma (prosessi) ei saa viitata muiden prosessien tai käyttöjärjestelmän muistialueisiin. Tämä on toteutettu (kurssin esimerkkikoneessa) sisäisillä rajarekistereillä BASE ja LIMIT. Suorituksessa olevan ohjelman muistialue alkaa rekisterin BASE osoittamasta paikasta ja on rekisterin LIMIT pituinen. Pituus voida ilmoittaa esimerkiksi tavuina tai sanoina.

<!-- note: ttk-91 -->

<text-box variant="example" name="Esimerkkitietokone ttk-91">
  
Kurssilla käytetään esimerkkinä hyvin yksinkertaista tietokonetta, joka on antaa oikein hyvän kuvan todellisesta tietokoneesta. Todellinen tietokone on tietenkin jonkin verran monimutkaisempi ja kattavampi. Sellaisiin voitte sitten perehtyä myöhemmin, kun teillä on paremmat taustatiedot aihepiiristä. 
<br><br>
Tietokoneen ttk-91 määritelmän on tehnyt Auvo Häkkinen vuonna 1991 Helsingin yliopistolla pidettyä Tietokoneen toiminta -kurssia varten. Ttk-91 on edelleen käytössä ja sille on tehty mm. simulaattori Titokone symbolisella konekielellä tehtyjen ohjelmien kehittämiseksi ja ajamiseksi.

</text-box>

Rajarekistereiden BASE ja LIMIT käyttö tekee keskusmuistin hallinnasta eri ohjelmien välillä helppoa. Kullekin suorituksessa olevalle ohjelmalle annetaan keskusmuistista sille riittävä yhtenäinen muistialue, joka alkuosoite on rekisterissä BASE ja jonka koko on rekisterissä LIMIT. Ohjelman käyttämät muistiosoitteet ovat suhteellisia BASE rekisterin arvoon ja arvovälillä \[0, LIMIT-1\]. Joka muistiviitteen yhteydessä MMU tekee _osoitteenmuunnoksen_ ohjelman käyttämästä osoiteavaruudesta (esim. \[0, 511\]) keskusmuistin omaan paljon suurempaan osoiteavaruuteen (esim. \[0, 4&nbsp;194&nbsp;303\]).  MMU tarkistaa ensin, että onko ohjelman käyttämä muistiosoite (esim. 96) välillä \[0, LIMIT-1\]. Jos se ei ole, niin tästä aiheutuu virhetilannekeskeytys. Jos osoite on sallittu, niin siihen lisätään BASE-rekisterin arvo (esim. 20&nbsp;000) ja näin saatu todellinen eli fyysinen muistiosoite (esim. 20&nbsp;096) annetaan väylän kautta muistipiirille.

<!-- kuva: ch-2-1-muistitilan-kaytto-ohjelmalle   # kalvo 5.12  -->

![Kuva muistitilankäytöstä ohjelmalle P. Vasemmalla on iso korkea palkki, joka kuvaa koko muistia, ylhäällä olevasta osoitteesta 0 osoitteeseen iso, joka voi olla esimerkiksi 4 194 303. Keskellä isoa muistia on ohjelmalle P varattu alue, jonka alkuun osoittaa rekisteri BASE ja jonka koko on rekisterissä LIMIT. Oikealla on tämä sama P:n muistialue suurennettuna, ylhäällä olevasta osoitteesta 0 osoitteeseen LIMIT-1. Ylimpänä osoitteesta 0 alkaen on ohjelman koodialue, ja sitten heti sen perään muistialue globaaleille muuttujille ja muille tietorakenteille. Seuraavaksi on pino aliohjelmien toteuttamista varten. Kaikkein alimpana on keko, joka sisältää dynaamisesti suoritusaikana varattuja ja vapautettuja muistialueita. Keossa on siis sekaisin varattuja ja vapaana olevia muistialueita. Pinorekisteri osoittaa pinon loppuun ja kekorekisteri keon alkuun. Näiden rekistereiden väliin jäävä osa on vapaata muistitilaa, johon sekä pino että keko voivat kasvaa.](./ch-2-1-muistitilan-kaytto-ohjelmalle.svg)
<div>
<illustrations motive="ch-2-1-muistitilan-kaytto-ohjelmalle"></illustrations>
</div>

Ohjelman käytössä oleva muistialue on jaettu erilaisiin osiin. Tyypillisesti siellä on omat yhtenäiset alueensa (muistisegmentit) ainakin koodille, kaikkialla viitattavissa olevalle datalle, _pinolle_ ja _keolle_. 

Pino on erityinen aliohjelmien toteutukseen liittyvä muistialue, jonka avulla toteutetaan mm. aliohjelmien parametrien välitys ja aliohjelmien omien tietorakenteiden tilanvaraus. Pino kasvaa aina aliohjelmakutsun yhteydessä ja pienenee sieltä palatessa. Pinorekisteri (SP, Stack Pointer) osoittaa pinon loppuun kullakin hetkellä. 

Keko on erityinen muistialue, josta ohjelma pystyy suoritusaikana varaamaan uusia muistialueita ja vapauttamaan niitä. Esimerkkikoneessa ohjelmakoodi on heti muistialueen alussa ja sen jälkeen on datasegmentti, johon on varattu tilaa kaikkialla ohjelmassa viitattavissa oleviin muuttujiin ja muihin tietorakenteisiin. Kekorekisteri (HP, Heap Pointer) osoittaa keon alkuun kullakin hetkellä. Todellisissa järjestelmissä on keko voi olla esimerkiksi ohjelman oman muistialueen lopussa, mutta esimerkkikoneessa sitä ei ole toteutettu.  

Sekä pinon että keon koot vaihtelevat dynaamisesti ohjelman suoritusaikana. Joskus ohjelmointivirheen seurauksena näiden tarvitsema yhteinen muistitila voi loppua, mikä ilmenee siitä, että pinorekisterin arvo yrittää kasvaa kekorekisterin arvoa suuremmaksi. Käyttäjälle tämä ilmenee ohjelman "kaatumisena" mahdollisen _stack overflow_-virheilmoituksen kera.

Muistinhallintayksikössä on myös välimuisti. Se tarkistaa ennen jokaisen muistinviittauksen tekemistä, että löytyykö viitattu tieto välimuistista vai ei. Jos tieto löytyy välimuistista, se otetaan sutjakkaan käyttöön sieltä. Jos tietoa ei löydy välimuistista, se haetaan muistista välimuistiin tässä yhteydessä. Esimerkkikoneessa ei  ole välimuistia.

### Rekisterit

Ttk-91:ssä on 8 konekäskyissä viitattavaa rekisteriä, R0-R7. Nykymittapuussa tämä on aika vähän, mutta toisaalta pienissä [IoT](https://simple.wikipedia.org/wiki/Internet_of_things)-laitteissa 8 rekisteriä voi hyvin riittää. Olohuoneen valaisimen suoritin tuskin tarvitsee kovin suurta määrää rekistereitä.  Isommissa tietokoneissa on mahdollisesti myös eri tyyppisiä rekistereitä, kuten indeksirekistereitä, kokonaislukurekistereitä ja liukulukurekistereitä. Liukuluvut ovat tietokoneen esitysmuoto realiluvuille ja esittelemme ne paremmin myöhemmin. Ttk-91:n rekisterit ovat vain kokonaislukuarvoisia ja kaikki samanlaisia.

Esimerkkikoneen rekisterit R0-R5 ovat ns. työrekistereitä tavalliseen laskentaan. Rekisterit R6 ja R7 on varattu aliohjelmien (funktioiden, metodien) toteuttamiseen, mutta emme käsittele niiden käyttöä tai aliohjelmien toteutusta tällä kurssilla. Rekistereitä R1-R5 voi käyttää myös indeksirekistereinä, mutta R0:n käyttö indeksirekistereinä tarkoittaakin, että indeksirekisteriä ei käytetä lainkaan. Tämäkin asia pitää jollain tavoin ilmaista konekäskyissä ja ttk-91:ssä se nyt ilmaistu tällä tavoin. Kaikissa konekielissä on mukana vähän erikoisen tuntuisia ominaisuuksia, jotka kuitenkin ovat hyvin perusteltuja ja käytännöllisiä.

Kaikissa tietokoneissa on rekisteri PC (Program Counter, joskus IP eli Instruction Pointer), joka ilmoittaa _seuraavana_ suorituksessa olevan käskyn osoitteen. Joissakin koneissa PC on yksi konekäskyissä viitattavissa oleva rekisteri, mutta ttk-91:ssä se on suorittimen sisäinen rekisteri, johon ei voi suoraan osoittaa. Sen arvoa ei voi lukea, mutta sen arvon voi epäsuorasti muuttaa hyppykäskyjen avulla.

### Aritmeettislooginen yksikkö ALU (Arithmetic Logical Unit)

Aritmeettisloogisessa yksikössä on kaikki konekäskyjen operaatiopiirit, kuten esimerkiksi kokonais- ja liukulukujen yhteenlasku- ja kertolaskupiirit. Konekäskyjen suoritus tapahtuu pääpiirteittäin siten, että ALU:lle annetaan yksi tai kaksi operandia ja sitten sitä pyydetään tekemään joku operaatio. Vähän ajan kuluttua ALU on valmis ja operaation tulos voidaan ottaa talteen.

### Kontrolliyksikkö CU (Control Unit)

Jos CPU on tietokoneen "aivot", niin kontrolliyksikkö on CPU:n aivot. Siellä on pieni joukko sisäisiä rekistereitä, joiden avulla kontrolloidaan CPU:n toimintaa käskyjen suorittamiseksi. Nykyinen konekäsky on talletettu sisäiseen rekisteriin IR (Instruction Register) ja PC osoittaa seuraavaan konekäskyyn. TR (Temporary Register) on tilapäistä työtilaa viitatun muistiosoitteen laskennassa. Todellisissa koneissa on paljon sisäisiä rekistereitä tai "laitureita" tilatiedon tai välitulosten tallettamiseen.

Tilarekisteri SR (State Register) pitää tilatietoa siitä, mitä suoritin on oikeutettu tekemään, mitä suorittimella tapahtui tämän konekäskyn suorituksen aikana ja mitä järjestelmässä on tapahtunut viime aikoina. Siellä on omat bittinsä I/O-laitekeskeytykselle ja konekäskyn aiheuttamille erilaisille virhetilanteille, kuten esimerkiksi kokonaislukujen nollalla jakamiselle. Sinne talletetaan ttk-91:ssä myös vertailukäskyjen tulokset (suurempi, pienempi, yhtäsuuri). Joissakin koneissa on omat rekisterinsä vertailujen tuloksia varten. Tilarekisterissä on myös bitti, joka kertoo onko tietokone _etuoikeutetussa suoritustilassa_ vai ei. Samoin siellä on bitti, joka kertoo onko _keskeytykset_ sallittu vai ei. Näihin molempiin palataan tarkemmin ihan kohta.

Kontrolliyksikön tärkein tehtävä on jokaisella hetkellä määrätä, mitä kunkin suorittimen osan pitää sillä hetkellä tehdä. Nämä komennot annetaan yksinkertaisilla kyllä/ei-arvoilla suorittimen eri osia ohjaaville kontrollijohtimille. Esimerkiksi, sopivalla hetkellä annetaan ALU:lle ohje tehdä yhteenlasku ja sitten vähän myöhemmin tulee mmäräys kopioida ALU:n ulostulo johonkin työrekisteriin. Kontrolliyksikön toimintaa tahdistaa tietokoneen kellopulssi, joka tikittää esimerkiksi 4 GHz-taajuudella. Tämä tarkoittaa, että kontrolliyksikön tulee antaa uudet kontrollisignaalit suorittimelle joka 250 ps. Aika vikkelää toimintaa. Varsinkin kun ottaa huomioon, että uudet kontrollisignaalit perustuvat osittain juuri edellisten kontrollisignaalien aiheuttamiin muutoksiin suorittimella.

### Sisäinen väylä
Suorittimen sisällä on oma sisäinen väylä (tai usea) tiedonsiirtoon sen eri osien välillä. Jos katsot suorittimen [mikropiirikuvaa](https://commons.wikimedia.org/wiki/Category:Microprocessor_dies), väylät erottuvat selkeästi vierekkäisten sähköjohtimien viivoina. Kontrolliyksikkö ohjaa näiden väylien toimintaa samalla tavalla kuin kaikkea muutakin. Se voi esimerkiksi määrätä, että rekisterin MBR:n arvo kirjoitetaan sisäiselle väylälle ja seuraavaksi sisäisellä väylällä oleva arvo luetaan IR:ään. Sisäisten väylien lukumäärä ja rakenne vaihtelee huomattavasti suorittimesta toiseen.

<!-- quiz 2.1.1-7: Väitteet suorittimesta, muistista ja väylästä -->

<div><quiznator id="5c5023543972a9147410265b"></quiznator></div>
<div><quiznator id="5c50244fddb6b814af321646"></quiznator></div>
<div><quiznator id="5c5024e299236814c5bb8373"></quiznator></div>
<div><quiznator id="5c50255799236814c5bb8377"></quiznator></div>
<div><quiznator id="5c50267e99236814c5bb837e"></quiznator></div>
<div><quiznator id="5c5026f6ddb6b814af321655"></quiznator></div>
<div><quiznator id="5c502773c41ed4148d96abcd"></quiznator></div>
