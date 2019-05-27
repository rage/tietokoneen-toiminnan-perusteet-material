---
path: '/luku-2/4-tiedon-sijainti'
title: 'Tiedon sijainti suoritusaikana'
---

<div><lead>
Tässä osiossa tarkastelemme tiedon eri sijaintipaikkoja suoritusaikana. Tiedon sijainnilla on huomattava merkitys ohjelman suoritusnopeuteen.
</lead></div>

## Tiedon sijaintipaikat

Ohjelman suoritusaikana viittaama tieto voi sijaita kolmessa eri paikassa. Ensinnäkin, se voi sijaita suorittimen rekisterissä. Tuolloin se voi olla joko konekäskyssä nimetty rekisteri (esim. R3), joku oletusarvoinen sisäinen rekisteri (esim. PC tai SR) tai käskyrekisterin (IR) joku kenttä (esim. vakiokenttä tai operaatiokoodi). Käskyrekisterin kentät ovat hyvin helposti saatavilla suorittimella ja niiden lukeminen on ainakin yhtä nopeata kuin konekäskyssä viitattavien rekistereiden viittaukset. Rekistereitä on korkeintaan muutama kymmen, joten kovin moni tieto ei sinne mahdu. Lisäksi rekistereihin mahtuu vain ns. skalaarimuotoinen tieto, mikä tarkoittaa yksinkertaista korkeintaan yhden tai kahden sanan mittaista tietoa. Esimerkkejä ovat eri kokoiset kokonaisluvut ja liukuvut. Rekistereihin ei voi tallettaa esimerkiksi 1000-alkioista taulukkoa, vaan sen alkiot pitää käsitellä rekisterissä yksi kerrallaan. On tosin erikoistapauksia, joissa esim. 64 alkioisiin _vektorirekistereihin_ voi tallettaa usean data-alkion, joita kaikkia pystyy operoimaan yhdellä kertaa _vektorikäskyillä_. Emme käsittele tällaisia _vektorisuorittimia_ tällä kurssilla.

Toiseksi, tieto voi olla välimuistissa. Välimuisteja voi olla useita tasoja, joista suoritinta lähempänä olevat ovat pienempia ja nopeampia. Välimuisteja voi olla erikseen koodille ja datalle, koska näin niistä voi saada tehokkaampia. Tällöin konekäskyt haetaan omasta _käskyvälimuistista_ ja normaalit dataviitteet koetetaan löytää _datavälimuistista_. Välimuistien toimintalogiikka on täysin automaattista, eikä siihen voi mitenkään vaikuttaa suoritusaikana.

Kolmanneksi, tieto voi olla muistissa. Kaikki tieto mahtuu tänne, mutta välttämättä kaikki ohjelman tarvitsema tieto ei silti ole aina paikalla. Pääosa ohjelman käyttämästä tiedosta on muistissa, josta se haetaan tarvittaessa rekistereihin ja välimuistiin. Usein välimuistiin haetaan tietoa myös spekulatiivisesti arvaamalla, että kohta tuotakin tietoa varmaan käytetään. Esimerkiksi, kun viittaat taulukon ensimmäiseen alkioon, niin siinä yhteydessä välimuistiin voidaan hakea saman taulukon toinen, kolmas ja neljäskin alkio.

Suoritusaikainen tieto ei voi olla massamuistissa, koska tiedon hakemiseen sieltä kuluu liikaa aikaa. Jos ohjelma haluaa viitata massamuistissa olevaan tietoon, ohjelman suoritus keskeytetään ja tarvittava tieto kopioidaan muistiin. Tämän jälkeen suoritus voi jatkua, mutta nyt viitattu tieto löytyykin muistista. Tiedon siirron aikana suoritin suorittaa muita ohjelmia.

## Eri paikoissa olevaan tietoon viittaaminen
Suorittimen normaalissa rekisterissä olevaan tietoon viitataan konekäskyissä nimeämällä kyseinen rekisteri. Samoin käskyrekisterissä (IR) olevaan vakioon tai osoitteeseen viittaaminen on nopeata, koska tieto on jo valmiiksi suorittimella. Sama pätee paikanlaskuriin (PC) viittaamiseen. Molemmat rekisterit löytyvät suorittimen kontrolliyksiköstä ja IR:n eri kentät ovat siellä valmiiksi eroteltu lukemista varten. PC:n arvoa pitää joissakin konekielissä pystyä lukemaan myös konekäskyn suorituksen aikana, koska hyppy- tai haarautumiskäskyn osoite olla määriteltynä suhteellisena osoitteena PC:n suhteen. Nämä ovat nopeimmat tavat viitata tietoon.

Välimuistissa olevaan tietoon ei voi suoraan viitata, koska suoritusaikana ei voi tietää, löytyykö tieto välimuistista vai ei. Muistissa olevaan tietoon viitatessa aina tarkistetaan ensin, josko tieto löytyisikin välimuistista. Jos se löytyy, niin hyvä niin ja tieto on nopeasti saatavilla. Ohjelmakoodissa voi lisätä todennäköisyyttä tiedon löytymiseen välimuistista, jos koodin kirjoittaja ymmärtää välimuistin toimintapaa. Välimuistit pyrkivät pitämään saatavilla viime aikoina viitattuja ja niiden lähellä olevia muistialueita. Hyvä koodaaja pystyy hyödyntämään tätä tietoa ohjelman toiminnnan nopeuttamiseksi.

Muistissa olevaan tietoon viitataan käyttäen suorittimen ymmärtämiä muistinosoitusmuotoja, joista suora (indeksoitu) muistiviite on yleisimmin käytetty. Epäsuoria muistiviitteitä ei nykyään useinkaan enää käytetä, koska ne kestävät niin kauan aikaa. Sen sijaan epäsuorat muistiviitteet toteutetaan yleensä kahdella suoraa muistinosoitusta käyttävällä konekäskyllä, joista ensimmäinen hakee tiedon osoitteen muistista ja toinen sitten käyttää tätä osoitetta tiedon lukemiseen tai kirjoittamiseen.

```
Tiedon sijainti ja siihen osoittaminen
Huom: nämä ovat irrallisia käskyjä - ne eivät muodosta ohjelmaa.
Kaikkien käskyjen tulos talletetaan rekisteriin r2.

ptrX dc 453828           -- symbolin ptrX arvo on (osoitin)muuttujan ptrX
                            osoite. (Osoitin)muuttujan ptrX arvo on 
                            muistissa olevan tiedon osoite
Tbl  ds 200              -- symbolin Tbl arvo on 200-alkioisen taulukon 
                            ensimmäisen alkion osoite

    load  r2, =80        -- luku 80 on IR:n vakio-osassa
    load  r2, Tbl(r1)    -- Tbl(r1) on suora muistinosoitusviite 
                            keskusmuistiin, osoitteeseen 280. Arvo 280 on
                            lukujen 200 (IR:n vakio-osa) ja 80 (rek r1)
                            summa. Tulos talletetaan r2:een.
    add   r2, =1         -- ensimmäinen operandi on r2:ssä
                            toinen operandi (luku 1) on IR:n vakio-osassa.
    load  r2, Tbl(r5)    -- alkio Tbl(r5) osoitteesta 281 löytyisi 
                            luultavasti välimuistista, koska sen viereiseen
                            alkioon osoitteessa 280 viitattiin juuri äsken.
    load  r2, @ptrX      -- epäsuora muistiviite, ptrX arvo löytyy IR:n 
                            vakio-osasta, tiedon osoite 453828 löytyy 
                            muistista (osoitteesta ptrX), tieto löytyy 
                            muistista ptrX:n osoittamasta osoitteesta 453828
```

## Tiedon sijainnin vaikutus suoritusnopeuteen
Yleisesti ottaen kaikki tieto sijaitsee muistissa ja juuri nyt käsiteltävänä oleva tieto sijaitsee suorittimen rekistereissä. Tästä on se seuraus, että jokin tietty tieto (esim. muuttujan X arvo) voi sijaita sekä muistissa että rekisterissä. On ohjelmoijan vastuulla, että X:n arvon muuttuessa se tarvittaessa talletetaan myös muistiin. Muistissa sijaitseva tieto voi olla myös välimuistissa, mutta laitteisto huolehtii automaattisesti sen kirjoittamisesta muistiin tarvittaessa.

Korkean tason kieliä käytettäessä kääntäjä päättää, milloin jokin tieto pidetään missäkin rekisterissä. Se on itse asiassa hyvin vaikea ns. [rekistereiden allokointiongelma](https://en.wikipedia.org/wiki/Register_allocation), koska rekistereitä on hyvin vähän ja kuitenkin kaikki laskenta tapahtuu rekistereissä olevan tiedon varassa.

Esimerkiksi, kaikkialla näkyvän laskuri Count ja sen yläraja Limit olisi hyvä pitää rekistereissä silmukan koko suoritusajan, jos niihin viitataan vähän väliä. Jos ohjelman suorituksessa on sitten pitkä tauko, jolloin Count'iin tai Limit'iin ei tule lainkaan viittauksia, niin silloin niiden arvoja ei kannata pitää rekisterissä. Ohjelmakoodissa tiedon sijainti näkyy siinä, että viitataaanko suoraan rekisteriin vai haetaanko tieto ensin johonkin rekisteriin muistista.
```
Esimerkki: Count ja Limit rekistereissä r1 ja r2

    add   r1, =1       -- kasvata muuntelumuuttujaa Count
    comp  r1, r2       -- testaa loopin loppuminen, Count vs. Limit?
    jless loop         -- hyppää, jos Count < Limit
```

Toisaalta, ei ole itsestään selvää, että muuttujien Count ja Limit arvot kannattaisi pitää rekistereissä juuri tämän silmukan suorituksen aikana. Rekistereitä on vähän ja niille voisi olla vielä tärkeämpääkin käyttöä. Niiden arvot voisi yhtä hyvin pitää muistissa. Koodista tulee (tältä osin) hitaampaa, koska suoritettavia käskyjä on enemmän ja ne viittaavat muistiin useammin.

```
Esimerkki: Count ja Limit molemmat muistissa

    load  r4, Count    -- lisää muuntelumuuttujaa
    add   r4, =1
    store r4, Count
    load  r3, Count    -- testaa loopin loppuminen
    comp  r3, Limit
    jless loop
```

Kolmaskin vaihtoehto on olemassa. Silmukan muuntelumuuttujaa arvon voi pitää rekisterissä silmukan suoritusajan ja sitten lopuksi tallettaa muistiin. Esimerkiksi C-kielessä muuntelumuuttujat ovat tavallisia muuttujia ja niiden loppuarvon täytyy olla käytettävissä myös silmukan jälkeen. Joissakin toisissa kielissä muuntelumuuttujan arvoa ei ole määritelty silmukan päättyessä tai muuntelumuuttujaa ei ole edes määritelty silmukan ulkopuolella. Korkean tason ohjelmointikieliä on hyvin erilaisia ja niillä on merkittäviä mielenkiintoisia eroavaisuuksia! 
```
Esimerkki: muuntelumuuttuja rekisterissä ja muistissa

      load  r1, =0    -- alusta muuntelumuuttuja i (r1:ssä)

loop  comp  r1, =50   -- testaa loopin loppuminen
      jnles done

      ...             -- for-silmukan runko (itse asia) tässä
      ...

      add   r1, =1    -- i:n lisäys ja paluu silmukkaan
      jump  loop

done  store  r1, i    -- talleta i:n loppuarvo (koska ohjelmointikielen 
                         semantiikka sitä vaatii)
```

On siis tapauksia, joissa ohjelmassa nimetty tieto ei sijaitse missään tällä hetkellä. Edellä mainitun silmukan muuntelumuuttujan lisäksi tällaisia tietoja ovat aliohjelmien paikalliset muuttujat ja muut tietorakenteet, jotka varataan muistista vasta aliohjelmaa kutsuttaessa ja vapautetaan muistista aliohjelmasta poistuttaessa.

Käskyrekisterin (IR) kautta jotain vakioarvoa käytettäessä kääntäjällä (koodin kirjoittajalla) on kaksi mahdollisuutta. Käskyrekisteriin voidaan laittaa itse vakio (esim. arvo 1000), joka sitten replikoidaan jokaiseen tuota tietoa käyttävään konekäskyyn. Toinen vaihtoehto on tallettaa vakio muistiin ja laittaa jokaiseen siihen viittaaviin konekäskyyn vakion osoite muistissa. Molemmilla lähestymistavoilla on etunsa ja haittansa. Konekäskyssä oleva vakiolla voi olla koko- tai tyyppirajoitus, mutta sen käyttö on nopeata. Muistissa olevaan vakioon on hitaampi viitata, mutta sitä voi tarvittaessa kuitenkin muokata.

Välimuistin käyttö on tuuripeliä, mutta siihen voi vaikuttaa. On aina tehokkaampaa käydä läpi mitä tahansa suurempaa tietomassaa samassa järjestyksessä kuin se on talletettu muistiin. Ohjelmakoodin tasolla tämä tarkoittaa hyppyjen ja haarautumisten välttämistä, mikä ei käytännössä ole lainkaan helppoa. Koodissa viitatun datan osalta se tarkoittaa, että esimerkiksi 2-ulotteisia taulukoita voi olla parempi käydä läpi riveittäin kuin sarakettain. Usein ohjelmalogiikka valitettavasti vaatii tiedon läpikäyntiä välimuistin kannalta "tehottomassa" järjestyksessä. Aina ei voi voittaa!

<!-- Quiz 2.4.1-10 Väitteet tiedon sijainnin vaikutuksesta suoritusnopeuteen -->

<div><quiznator id="5c503c5fc41ed4148d96ac32"></quiznator></div>
<div><quiznator id="5c503cb3ddb6b814af3216b0"></quiznator></div>
<div><quiznator id="5c503d25ddb6b814af3216b1"></quiznator></div>
<div><quiznator id="5c503dba99236814c5bb83e3"></quiznator></div>
<div><quiznator id="5c503e8e99236814c5bb83e8"></quiznator></div>
<div><quiznator id="5c503f07017ffc13eddc9871"></quiznator></div>
<div><quiznator id="5c504a41c41ed4148d96ac79"></quiznator></div>
<div><quiznator id="5c504b1499236814c5bb842e"></quiznator></div>
<div><quiznator id="5c504b79c41ed4148d96ac81"></quiznator></div>
<div><quiznator id="5c504bdcddb6b814af321701"></quiznator></div>

<text-box variant="example" name="Historiaa:  ESKO">
  
ESKO eli Elektroninen SarjaKOmputaattori (1960) oli ensimmäinen Suoemsa rakennettu tietokone. Se oli vanhentunut jo valmistuessaan ja suoritti noin 20 yhteenlaskua sekunnissa. Ohjelmakoodi luettiin reikänauhoilta. Aliohjelmaa kutsuttiin siirtämällä kontrolli sitä vastaavaan reikänauhan lukijaan, jossa aliohjelman koodi oli reikänauhalla ikuisessa silmukassa. Muistina oli 1840 sanan rumpumuisti. ESKOn varsinainen arvo oli tuoda tietotekniikan osaamista Suomeen.

<!-- kuva: ch-2-4-esko    -->

![Kaksi valokuvaa. Vasemmalla ESKO kokonaisuudessaan ja sen edessä muistina toimiva rumpumuisti ja reikänauhan lukijat. Oikealla on lähikuva reikänauhan lukijoista.](./ch-2-4-esko.svg)
<div>
<illustrations motive="ch-2-4-esko"></illustrations>
</div>
ESKO Tekniikan museossa Helsingissä. Photo Teemu Kerola.

</text-box>

## Yhteenveto
Toinen luku käsitteli suorittimen ja muistin toimintaa. Aluksi katsoimme vähän tarkemmin suorittimen rakennetta ja erityisesti sen toimintaa käskyjen nouto- ja suoritussyklin toteuttajana. Sen jälkeen tarkastelimme konekäskyjen eri tyyppejä ja rakennetta. Lopuksi katsoimme, kuinka tiedon sijainti suoritusaikana voi vaihdella ja kuinka se vaikuttaa ohjelmien suoritusnopeuteen.

Vastaa alla olevaan kyselyyn kun olet valmis tämän luvun tehtävien kanssa.
<div><quiznator id="5c66b17199236814c5bbb972"></quiznator></div>

