---
path: '/luku-3/3-taulukot-tietueet'
title: 'Taulukot, tietueet ja muu rakenteinen tieto'
hidden: false
---

<div>
<lead>Rakenteisen tieto talletetaan yleensä yhtenäiselle muistialueelle peräkkäisiin muistipaikkoihin, mutta tiedon tallennusjärjestys voi vaihdella. </lead>
</div>

## 1-ulotteiset taulukot ja tietueet

1-ulotteiset taulukot talletetaan yleensä aina peräkkäisiin muistipaikkoihin ja taulukon osoite on sen ensimmäisen alkion osoite. Tietokonejärjestelmissä ensimmäinen indeksi on yleensä nolla (0), koska tällä tavoin taulukon T alkion T[i] osoite on T+i. Indeksoitu tiedonosoitusmoodi tukee tehokkaasti 1-ulotteisiin taulukoihin viittaamista. Yleensä taulukon alkuosoite annetaan vakiona konekäskyssä ja taulukon indeksi on samassa konekäskyssä olevan _indeksirekisterin_ arvo.

```
load  r1, Tbl(r2)     ; hae rekisteriin r1 taulukon Tbl alkion Tbl[r2] arvo
```

Tiedon suojauksen kannalta olisi tärkeää, että em. esimerkissä rekisterin r2 arvo tarkistetaan ennen taulukkoviittauksen tekemistä. Se ei saa olla negatiivinen eikä liian suuri. Usein näihin tarkistuksiin menee enemmän koodia kuin itse tietoon viittaamiseen, mutta tarkistukset ovat tärkeä osa tiedon suojaamisessa koodausvirheiden ja tietosuojahyökkäysten varalta.

```
Tbl      DS  300      ; varaa tilaa 300 sanaa taulukolle Tbl
TblSize  EQU 300      ; symbolin TblSize arvona on taulukon Tbl koko
...
                      ; tarkista indeksi r2:ssa
jneg  r2, HandleBadIndex  ; onko r2 negatiivinen?
comp  r2, =TblSize        ; onko r2 liian iso?
jnles HandleBadIndex      ; hyppää, jos arvo ei ole pienempi kuin TblSize.

load  r1, Tbl(r2)     ; hae rekisteriin r1 taulukon Tbl alkion Tbl[r2] arvo
```

Tietueet on talletettu samalla tavalla yhtenäiselle muistialueelle, jossa tietueen eri _kentät_ ovat peräkkäisissä muistipaikoissa. Myös tietueen osoite on sen ensimmäisen kentän osoite. Indeksoitu tiedonosoitusmoodi tukee tehokkaasti myös tietueisiin viittaamista, vaikkakin nyt vähän eri tavalla. Taulukkojen osoite annetaan käskyn vakiokentässä, kun tietueen osoite annetaan indeksirekisterissä.  Tietueen kentän sijainti tietueen sisällä annetaan nyt konekäskyn vakiokentässä. On erittäin kätevää, että yhtä ja samaa tiedonosoitusmoodia voidaan käyttää yleisimpiin rakenteisiin tietotyyppeihin viitattaessa.

```
Id      equ 0
Age     equ 1
Nr      equ 2

load  r1, Nr(r2)    ; hae rekisteriin r1 rekisterin r2 osoittaman tietueen
                    ; kentän Nr arvo
```

## 2-ulotteiset taulukot

2-ulotteiset taulukot ([matriisit](https://fi.wikipedia.org/wiki/Matriisi)) ovat jo hankalia käyttää. Ne talletetaan peräisrakenteina, riveittäin tai sarakettain. Välimuistin toiminnan kannalta olisi tehokkaampaa, jos ne talletettaisiin samassa järjestyksessä kuin mitä alkiota yleensä käytetään. Valitettavasti vain useimmissa tapauksissa matriiseihin tulee viittauksia sekä rivi- että sarakejärjestyksessä. Esimerkiksi _matriisitulon_ laskennan yhteydessä ensimmäistä matriisia käydään läpi riveittäin ja toista sarakettain.

Matriisin osoite on kuitenkin aina sen ensimmäisen muistiin talletetun alkion osoite. Jos esimerkiksi 3 rivin ja 4 sarakkeen matriisi M\[3, 4\]

```
 1  2  3  4
 5  6  7  8
 9 10 11 12
```

talletetaan muistiin riveittäin osoitteeseen 876, niin muistissa on muistipaikasta 876 alkaen arvot

```
 876: 1  2  3  4  5  6  7  8  9 10 11 12
```

Koska yhden rivin pituus on 4 alkiota, niin alkion M\[i,j\] osoite on 876+4\*i+j. Ennen haluttua alkiota M\[i,j\] pitää sivuuttaa i kokonaista riviä ja j alkiota halutulla rivillä. Useimmissa suorittimissa ei ole valmista tiedonosoitusmoodia tämän laskemiseksi. Tällöin viitatun alkion osoitteen laskeminen pitää ensin toteuttaa usealla konekäskyllä ja sitten vasta tehdä varsinainen muistiviite tuohon alkioon. Esimerkiksi, alkion M\[i,j\] lukeminen rekisteriin r2 tapahtuu konekäskyillä

```
  load r1, i        ; laske alkion M[i,j] suhteellinen osoite matriisissa M
  mul  r1, =4
  add  r1, j
  load  r2, M(r1)   ; hae alkion M[i,j] arvo rekisteriin r2
```

Jos taas matriisi M olisi talletettu sarakettain osoitteeseen 654, niin muistissa olisi muistipaikasta 654 alkaen arvot

```
 654: 1  5  9  2  6 10  3  7 11  4  8 12
```

Sarakkeen pituus on 3 riviä, joten alkion M\[i,j\] lukeminen rekisteriin r2 tapahtuu nyt konekäskyillä

```
  load r1, j       ; laske alkion M[i,j] suhteellinen osoite matriisissa M
  mul  r1, =3
  add  r1, i       ; suhteellinen osoite on i+3j
  load  r2, M(r1)  ; hae alkion M[i,j] arvo rekisteriin r2
```

Kumpikin on ihan yhtä kätevää, mutta vähän hidasta koska osoitteen laskeminen täytyy tehdä usemman konekäskyn avulla. Lisäksi em. esimerkeistä puuttuu täysin indeksitarkistukset, jotka lisääväät koodin määrää vielä pikkasen.

## 3-ulotteiset taulukot ja muu rakenteinen tieto

3-ulotteiset taulukot talletetaan vastaavasti joko "riveittäin" tai "sarakettain" ja niihin viittaminen tapahtuu samalla tavalla kuin edellä. Ajatellaan esimerkkinä riveittäin talletettua 3-ulotteista taulukkoa T\[3,4,5\]. Siinä on 3 tasoa (tasot 0, 1, 2), kussakin tasossa 4 riviä (rivit 0, 1, 2, 3) ja kullakin rivillä 5 alkiota (alkiot 0, 1, 2, 3, 4). Kullakin tasolla on siis 4\*5=20 alkiota. Alkion T\[i,j,k\] arvo voidaan lukea (ilman indeksitarkistuksia) rekisteriin r0 käskyillä

```
  load r1, i     ; laske alkion T[i,j,k] suhteellinen osoite taulukossa T
  mul  r1, =20         ; ohita i tasoa (4*5*i sanaa)
  load r2, j
  mul r2, =5           ; ohita j riviä (5*j sanaa) tällä tasolla
  add r1, r2
  add r1, k            ; ohita k sanaa tällä rivillä
  load  r0, T(r1)  ; hae alkion T[i,j,k] arvo rekisteriin r0
```

Samalla tavalla toimitaan kaikissa monimutkaisissa tietorakenteissa. Tällaisia ovat esimerkiksi 2-ulotteiset taulukot, joissa kukin alkio on 8-kenttäinen tietue. Toinen esimerkki on 8-ulotteinen taulukko. Niissä kaikissa tietoon viittaaminen tapahtuu kolmessa vaiheessa. Ensin tarkistetaan kaikki viittausparametrien (taulukon indeksit, kenttien indeksit) kelvollisuus, sitten lasketaan viitattavan tiedon osoite ja lopulta tehdään itse viittaus tietoon. Vähän monimutkaista, mutta näin se toimii!

## Muut tavat tallettaa rakenteista tietoa

Rakenteisen tiedon voi tallettaa myös linkitettyinä tietorakenteina. Tällöin tietorakenne on talletettu muistiin erillisinä yhtenäisinä muistilohkoina, jotka on linkitetty toisiinsa muistiosoitteiden avulla. Tällöin esimerkiksi riveittäin talletettu 2-ulotteinen taulukko T\[5,\6] voisi olla talletettu siten, että kukin rivi on oma muistilohkonsa. Osoitteessa T olisikin nyt vain 1-ulotteinen taulukko T, joka sisältää kunkin rivin osoitteen muistissa. Taulukon T rivit voivat nyt sijaita erillisinä alueina muistissa.

```
  load r1, i       ; rivin i indeksi
  load r2, T(r1)   ; rivin i osoite muistissa
  add  r2, j       ; alkion T[i,j] osoite muistissa
  load  r1, (r2)   ; hae alkion T[i,j] arvo rekisteriin r1
```

Emme käsittele tällä tavoin talletettuja linkitettyjä tietorakenteita tämän enempää tällä kurssilla.

<!-- Quizes 3.3.10-13  -->
<div><quiz id="297f8e19-1a69-4a88-9960-d435bdb11fb7"></quiz></div>
<div><quiz id="28079e7b-fec7-4d52-a57d-ccb35089f339"></quiz></div>
<div><quiz id="1d21f005-b96c-4203-b6be-94f9b3de5f3d"></quiz></div>
<div><quiz id="1d44af70-ba49-4499-a0b5-95ab646c3533"></quiz></div>
