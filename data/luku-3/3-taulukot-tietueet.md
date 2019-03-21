---
path: '/luku-3/3-taulukot-tietueet'
title: 'Tiedon kategoriat, binääri- ja heksadesimaalijärjestelmät, monitavuisen tiedon tallennus'
hidden: false
---

<div>
<lead>Rakenteisen tieto talletetaan yleensä yhtenäiselle muistialueelle peräkkäisiin muistipaikkoihin, mutta tiedon tallennusjärjestys voi vaihdella. </lead>
</div>

## 1-ulotteiset taulukot ja tietueet

1-ulotteiset taulukot talletetaan yleensä aina peräkkäisiin muistipaikkoihin ja taulukon osoite on sen ensimmäisen alkion osoite. Tietokonejärjestelmissä ensimmäinen indeksi on aina nolla (0). Indeksoitu tiedonosoitusmoodi tukee tehokkaasti 1-ulotteisiin taulukoihin viittaamista. Yleensä taulukon alkuosoite annetaan vakiona konekäskyssä ja taulukon indeksi on samassa konekäskyssä olevan _indeksirekisterin_ arvo.

```
load  r1, Tbl(r2)     hae rekisteriin r1 taulukon Tbl alkion Tbl[r2] arvo
``` 

Tiedon suojauksen kannalta olisi tärkeää, että em. esimerkissä rekisterin r2 arvo tarkistetaan ennen taulukkoviittauksen tekemistä. Se ei saa olla negatiivinen eikä ...????????????????????? pitää olla 

Tietueet on talletettu ihan samalla tavalla yhtenäiselle muistialueelle, jossa tietueen eri _kentät_ ovat peräkkäisissä muistipaikoissa. Indeksoitu tiedonosoitusmoodi tukee tehokkaasti myös tietueisiin viittaamista käyttöä. Yleensä tietueen alkuosoite annetaan jossain rekisterissä (_osoitinrekisteri_) ja tietueen kentän sijainti tietueensisällä annetaan vakiona konekäskyssä. On erittäin kätevää, että yhtä ja samaa tiedonosoitusmoodia voidaan käyttää yleisimpiin rakenteisiin tietotyyppeihin viitattaessa.

```
Id      equ 0
Age     equ 1
Score   equ 2

load  r1, Age(r2)     hae rekisteriin r1 rekisterin r2 osoittaman tietueen kentän Age arvo
``` 

## 2-ulotteiset taulukot

2-ulotteiset taulukot ([matriisit](https://fi.wikipedia.org/wiki/Matriisi)) ovat jo hankalia käyttää. Ne talletetaan peräisrakenteina, riveittäin tai sarakettain. Välimuistin toiminnan kannalta olisi tehokkaampaa, jos ne talletettaisiin samassa järjestyksessä kuin mitä alkiota yleensä käytetään. Valitettavasti vain useimmissa tapauksissa matriiseihin tulee viittauksia sekä rivi- että sarakejärjestyksessä. Esimerkiksi _matriisitulon_ laskennan yhteydessä ensimmäistä matriisia käydään läpi riveittäin ja toista sarakettain.

Matriisin osoite on kuitenkin aina sen ensimmäisen muistiin talletetun alkion osoite. Jos esimerkiksi matriisi M\[3, 4\] (3 riviä, kussakin 4 saraketta) 

```
 1  2  3  4
 5  6  7  8
 9 10 11 12
``` 

talletetaan muistiin riveittäin osoitteeseen 876, niin muistissa olisi muistipaikasta 876 alkaen arvot

```
 876: 1  2  3  4  5  6  7  8  9 10 11 12
``` 

Koska yhden rivin pituus on 4 saraketta, niin alkion M\[i,j\] osoite on 876 + 4 * i + j. Useimmissa suorittimissa ei ole valmista tiedonosoitusmoodia tämän laskemiseksi. Tällöin viitatun alkion osoitteen laskeminen pitää ensin toteuttaa usealla konekäskyllä ja sitten vasta itse tehdä varsinainen muistiviite tuohon alkioon. Esimerkiksi, alkion M\[i,j\] lukeminen rekisteriin r2 tapahtuu konekäskyillä

```
  load r1, i           ; laske alkion M[i,j] suhteellinen osoite matriisissa M
  mul  r1, 4
  add  r1, j
  load  r2, M(r1)      ; hae alkion M[i,j] arvo rekisteriin r2
``` 

Jos taas matriisi M olisi talletettu sarakettain osoitteeseen 654, niin muistissa olisi muistipaikasta 654 alkaen arvot

```
 654: 1  5  9  2  6 10  3  7 11  4  8 12
``` 

Sarakkeen pituus on 3 riviä, joten alkion M\[i,j\] lukeminen rekisteriin r2 tapahtuisi konekäskyillä

```
  load r1, j           ; laske alkion M[i,j] suhteellinen osoite matriisissa M
  mul  r1, 3
  add  r1, i
  load  r2, M(r1)      ; hae alkion M[i,j] arvo rekisteriin r2
``` 

Kumpikin on ihan yhtä kätevää, mutta vähän hidasta koska osoitteen laskeminen täytyy tehdä usemman konekäskyn avulla.

## 3-ulotteiset taulukot ja muu rakenteinen tieto

jkjkjkj ?????????????????????

Konekäskyissä käytettävät tiedonosoitusmoodit tukevat yleisimpiä rakenteisen tiedon käyttötapoja. Monimutkaisissa tietorakenteissa tietoon viittaaminen tapahtuu kahdessa vaiheessa

-- Quizes 3.3.1-3  ???????? 
