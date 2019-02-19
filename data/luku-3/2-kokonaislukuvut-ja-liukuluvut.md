---
path: '/luku-3/2-kokonaisluvut-ja-liukuluvut'
title: 'Kokonaislukujen ja liukulukujen esitysmuodot'
hidden: false
---


<div>
<lead>Käymme tässä aliluvussa läpi kokonaislukujen neljä esitysmuotoa ja IEEE-standardin mukaisen 32-bittisten liukulukujen esitysmuodon.</lead>
</div>

## Kokonaisluvut
Positiiviset kokonaisluvut ovat helppoja, koska niiden esitysmuoto on useimmiten (mutta ei aina!) niiden binääriarvo. Tiedon pituus pitää kuitenkin niissäkin ottaa aina huomioon, koska yleisesti ottaen vasemmanpuolimmainen bitti pitää varata etumerkille. Täten esimerkiksi 8-bittiseen tavun suurin kokonaisluku on yleensä 0111&nbsp;1111 eli 127 eli 2<sup>7</sup>-1 eli 128-1.

### Kokonaislukujen etumerkkiin perustuva esitysmuoto
Meille ihmisille luontevin tapa esittää kokonaisluvut on käyttää etumerkkiä, jolloin vasemmanpuolimmainen bitti on positiivisille luvuille 0 ja negatiivisille 1. Esimerkiksi, +57 ja -57 ovat tavuina 0x39 ja 0x95, sekä 32-bittisinä sanoina 0x00000039 ja 0x80000039.

``` 
+57 = 0011 1001 = 0x39 (tavuna)   +57 = 0x 00 00 00 39 (32-bittisenä sanana)
-57 = 1011 1001 = 0xB9 (tavuna)   -57 = 0x 80 00 00 39 (32-bittisenä sanana)
``` 
Etumerkkibitin käyttö on vähän huono kokonaislukujen aritmetiikan toteutukseen, joten sitä ei useinkaan käytetä sen vuoksi. Esitystavan parhaimpana puolena on sen soveltuvuus ihmisille, jotka ovat tottuneet etumerkkien käyttöön.

### Kokonaislukujen yhden komplementin esitysmuoto
Etumerkkiä paremmin laitteiston ALU-piireille sopiva esitystapa on [yhden komplementti](https://fi.wikipedia.org/wiki/Komplementti_(tietotekniikka)). Siinä positiivisilla luvuilla on edelleen tavallinen binääriesitys, mutta negatiiviset luvut saadaan komplementoimalla positiivisen luvun kaikki bitit. Esimerkin luvut +57 ja -57 ovat nyt tavuina 0x39 ja 0xC6, sekä sanoina 0x00000039 ja 0xFFFFFFC6.
``` 
+57 = 0011 1001 = 0x39 (tavuna)   +57 = 0x 00 00 00 39 (32-bittisenä sanana)
-55 = 1100 0110 = 0xC6 (tavuna)   -57 = 0x FF FF FF C6 (32-bittisenä sanana)
```

Vasemmanpuolimmainen bitti toimii edelleen etumerkkibittinä, mutta negatiivisten lukujen lukuarvo ei ole niin helposti luettavissa. Yhden komplementin esitystavalla on se hyvä ominaisuus, että positiivisia ja negatiivisia lukuja on yhtä monta. Esimerkiksi yhden tavun arvoalue on siis \[-127,&nbsp;+127\]. Huonona puolena on, että nollalla on kaksi esitystapaa, esimerkiksi tavuina +0&nbsp;=&nbsp;0x00 ja -0&nbsp;=&nbsp;0xFF. Tästä on haittaa aritmetiikkaoperaatioissa ja vertailuoperaatioissa, kun pitää varautua kahteen nollaan. Sitäpaitsi nollaan vertailu on harmillisesti ohjelmissa huomattavan yleinen operaatio.

### Kokonaislukujen kahden komplementin esitysmuoto
Yleensä kokonaisluvuille käytetään yhden komplementin esitysmuodon sijasta [kahden komplementin](https://fi.wikipedia.org/wiki/Kahden_komplementti) esitysmuotoa. Positiiviset luvut ovat edelleen tavallisessa binääriesityksessä. Negatiivisen luvun esitysmuoto saadaan nyt vastaavan positiivisen luvun esitysmuodosta komplementoimalla kaikki bitit ja lisäämällä esitysmuotoon 1. Huomaa, että binäärijärjestelmässä yhteenlasku tehdään ihan samalla tavalla kuin 10-järjestelmässäkin. Jos yhteenlaskua tehtäessä tulee muistinumero vasemmanpuolimmaisen bittin kohdalla, niin tässä tapauksessa se unohdetaan eli jätetään pois.

```
               +57 = 0011 1001 = 0x39
komplementoi         1100 0110
lisää 1                     +1
               -57 = 1100 0111 = 0xC7
```

Vasemmanpuolimmainen bitti on toimii edelleenkin etumerkkinä. Negatiivisen luvun suuruus (vastaava positiivinen arvo, itseisarvo) saadaan negatiivisen luvun esitysmuodosta ehkä vähän yllättäen samalla tavalla, komplementoimalla kaikki bitit ja lisäämällä 1.

```
               -57 = 1100 0111
komplementoi         0011 1000
lisää 1                     +1
suuruus              0011 1001 = 0x39 = +57
```

Kahden komplementin esitysmuodolla on se hyvä ominaisuus, että nollia on vain yksi (tavuna 0x00).

```
              +0 = 0000 0000 = 0x00
komplementoi       1111 1111
lisää 1                   +1        (unohda yhteenlaskun viimeinen muistinumero)
suuruus       -0 = 0000 0000 = 0x00 (+1:llä ja -1:llä on sama esitysmuoto)
```

Huonona puolena on, että negatiivisia lukuja on nyt yksi enemmän kuin positiivisia lukuja. Tavun arvoalue on \[-128,-&nbsp;+127\]. Tämä otetaan huomioon aritmetiikkapiireissä automaattisesti.
<pre>               -128 = 1000 0000 = 0x80
komplementoi          0111 1111
lisää 1                      +1
suuruus               1000 0000 = 128 (Sama esitysmuoto kuin luvulla -128!!)
</pre>
Tästä seuraa, että esimerkiksi aritmetiikkaoperaatio negaatio (esim. lauseessa Y&nbsp;=&nbsp;-X;) päättyy virhetilanteeseen, jos operandi on pienin mahdollinen negatiivinen luku (tavuna -128 ja 32-bittisenä sanana -2<sup>31</sup>&nbsp;=&nbsp; -2 147 483 648). Kahden komplementin parhaimpana puolena on, että sille tehdyt aritmetiikkaoperaatiot on muita esitystapoja helpompi toteuttaa ALU:n piireillä. Tämän vuoksi se on yleisin käytössä oleva kokonaislukujen esitystapa.
<br><br>
On myös huomionarvoista, että normaali 32-bittisten lukujen lukualue \[-2&nbsp;147&nbsp;483&nbsp;648,&nbsp;+2&nbsp;147&nbsp;483&nbsp;647\] ei ole ihan valtavan iso. Jos sovelluksessa tarvitaan todella suuria kokonaislukuja, niin täytyy käyttää kaksinkertaisen tarkkuuden 64-bittisiä kokonaislukuja.

### Kokonaislukujen vakiolisäys esitysmuoto
Joissakin tapauksissa (esim. seuraavaksi esitettävien liukulukujen yhteydessä) kokonaisluvut esitetään positiivisina binäärilukuina. Tämä tarkoittaa, että kaikki binääriluvut tulkitaan ensin etumerkittöminä kokonaislukuina ja sitten esitysmuodosta vähennetään sovittu vakio sen lukuarvon saamiseksi. Yleensä tuo vakio on n-bittiselle tiedolle 2<sup>n-1</sup>-1.

Tavussa on 8 bittiä, joten vakio on yleensä 127 (2<sup>7</sup>-1 = 01111111<sub>2</sub>). Tällöin arvoalue \[-127,+128\] on suunnilleen yhtä suuri positiivisille ja negatiivisille luvuille. Suurin positiivinen luku on 128, koska suurin 8-bittinen etumerkitön kokonaisluku on 0xFF&nbsp;=&nbsp255 ja 255-127=128. Jos vakio olisi vaikkapa 50, niin arvoalue olisi sitten \[-50,+205\]. Joskus tuostakin voisi olla hyötyä!

```
Luku            57 = 0011 1001
vakiolisäys   +127 = 0111 1111
esitysmuoto    184 = 1011 1000 = 0xB8

Luku           -57
vakiolisäys   +127
esitysmuoto     70 = 0100 0110 = 0x46
```

Kun vakiolisäyksenä käytetään 2<sup>n-1</sup>-1 (missä n on bittien lukumäärä, niin esitystavalla on kaksikin etua. Ensinnäkin, positiivisilla ja negatiivisilla luvuilla on suunnilleen yhtä iso arvoalue. Toiseksi, vasemmanpuolimmainen bitti toimii myös etumerkkinä. Toisin kuin aikaisemmissa esitysmuodoissa, etumerkkibitin arvo 0 indikoi nyt negatiivista lukua ja arvo 1 posiivista lukua.

-- Quizes 3.2.1-7  
<div><quiznator id="5bdc44630f60f62a209d8e50"></quiznator></div>
<div><quiznator id="5bdc45abb5cefd2a43d9b2e6"></quiznator></div>
<div><quiznator id="5bdc4a7b8138f12a7e53728a"></quiznator></div>
<div><quiznator id="5bdc4c7ce8e5d029fd781972"></quiznator></div>
<div><quiznator id="5bdc4e5dc6014229d5b535a1"></quiznator></div>
<div><quiznator id="5bdc506ee921f629a8dfd762"></quiznator></div>
<div><quiznator id="5bdc5186c6014229d5b535a9"></quiznator></div>

<text-box variant="example" name="Tärkeitä termejä">

### Kahden komplementti
Kokonaislukujen yleisin esitysmuoto. Negatiivisen luvun esitysmuoto saadaan komplementoimalla positiivisen luvun binääriesitysmuoto ja lisäämällä 1.

### Vakiolisäys-esitysmuoto
Kokonaisluvun esitysmuoto on positiivinen kokonaisluku, joka saadaan lisäämällä lukuarvoon jokin sovittu vakio. Esimerkiksi, 8-bittiselle tiedolle vakio on yleensä 127.

</text-box>


## Liukuluvut
Kuten jo ensimmäisessä luvussa mainittiin, tietokoneissa ei ole käytettävissä realilukuja. Sen sijaan käytämme tietokonearitmetiikkaa varten kehitettyä realilukujen approksimaatiota, liukulukuja. Liukuluvuille on tyypillistä vakiomuoto ja etukäteen määritelty lukutarkkuus. Esimerkiksi, realiluku &Pi; (pii) esitetään likiarvona 3.1415927 sen yleisimmässä 32-bittisessä esitysmuodossa.

Esitysmuodossa on kolme kenttää: etumerkki, lukuarvo (mantissa) ja suuruusluokka. Desimaaliluvuilla esitysmuoto toimisi seuraavanlaisesti. Mantissa skaalataan sillä tavoin, että kokonaisosassa on vain yksi numero ja desimaaliosaan otetaan vaikkapa 6 numeroa.

<pre>

+1.23         =    + 1.230000  *  10<sup>0</sup>
+123.0        =    + 1.230000  *  10<sup>2</sup>
-0.00123      =    - 1.230000  *  10<sup>-3</sup>
-0.000000123  =    - 1.230000  *  10<sup>-7</sup>
+123.456789   =    + 1.234568  *  10<sup>2</sup>
</pre> 

Tietokoneessa käytämme tietenkin binäärijärjestelmää. Nytkin mantissa skaalataan siten, että kokonaisosaan jää vain yksi numero. Normaalissa 32-bitin esitysmuodossa mantissassa on 24 bittiä, mutta tässä esimerkissä mantissassa on vain 9 bittiä yhteensä, joista 8 on binääriosassa.

<pre>

+1.5<sub>10</sub>   =   +1.1        =  +  1.10000000    * 2<sup>0</sup>
+2.5<sub>10</sub>   =  +10.1        =  +  1.01000000    * 2<sup>1</sup>
-96.75<sub>10</sub> =  -1100000.11  =  -  1.10000011    * 2<sup>6</sup>
+96.875<sub>10</sub> = +1100000.111 =  +  1.10000100    * 2<sup>6</sup> (pyöristetty)
</pre>

Tietokoneiden alkuaikoina jokaisella valmistajalla oli oma tapansa esittää liukulukuja, mutta tästä aiheutui liikaa harmia. On jo tarpeeksi ärsyttävää laskea koko ajan likiarvoilla, saati sitten niin että sama ohjelma antaa erilaisia (likiarvo) tuloksia eri koneilla. Jo vuodesta 1985 käytössä on ollut [IEEE 754](https://fi.wikipedia.org/wiki/Liukuluku) standardi liukulukujen esitysmuodolle ja aritmetiikalle. Standardin uusin päivitys on vuodelta 2008. Nyt lähes kaikki suorittimet noudattavat tuota standardia ja laskevat likiarvonsa samalla tavalla. Esittelemme tässä nyt standardin pääperiaatteet 32-bittisille liukuluvuille.

IEEE:n 32-bittisessä standardissa liukulukujen esitysmuoto on seuraavanlainen. Vasemmanpuolimmainen bitti on etumerkki, ja se on 0 positiivisille luvuille ja 1 negatiivisille luvuille. Seuraavat 8 bittiä ovat eksponentti, ja sen esitysmuoto on vakiolisäys 127. Loput 23 bittiä ovat mantissalle, joka yleisessä tapauksessa esitetään _normalisoidussa muodossa_. Normalisoinnissa mantissa skaalataan ensin siten, että kokonaisosassa on vain yksi numero. Koska kyseessä on binäärijärjestelmä, tuo numero on aina 1, joten sitä ei tarvitse tallettaa! Sitä kutsutaan _piilobitiksi_. Normalisoidusta luvusta talletetaan siis vain mantissan binääriosa. Tällä nerokkaalla tempulla saamme 23 bittiin talletettua 24 bittiä informaatiota, eli lukutarkkuus kaksinkertaistuu.

Eksponentin esitysmuoto on siis aina positiivinen kokonaisluku. Miksi tämä esitysmuoto, eikä joku noista muista? Perusteluna on, että liukulukuaritmetiikkaa toteutettaessa eksponentteja käsitellään vain niiden esitysmuotoina välittämättä eksponenttien todellisista arvoista. Normalisointi ja muut liukulukuaritmetiikkaan liittyvät operaatiot on helpompi toteuttaa, kun käsiteltävänä on vain positiivisia lukuja eksponettikentissä.

Esimerkiksi, luku -96.75 on binäärinä -1100000.11 ja normalisoidussa muodossa -1.10000011&nbsp;\*&nbsp;2<sup>6</sup>. Etumerkki ('-') talletetaan bittinä 1, eksponentti 6 muodossa 6+127=133=10000101, ja mantissasta vain sen binääriosa 23 bitillä 0x41800 (10000101 = <nobr>100&nbsp;0001&nbsp;1000&nbsp;0000&nbsp;0000&nbsp;0000</nobr> = 0x41800).

<pre> 

-96.75<sub>10</sub>   = -1.1000 0011    * 2<sup>6</sup> 
    &rarr; 1 100 0 010 1 100 0001 1000 0000 0000 0000 = 0xC2C18000
</pre>

Toinen esimerkki. Luku +346.875 on binäärinä +101011010.111 ja normalisoituna +1.010&nbsp;1101&nbsp;0111 * 2<sup>8</sup>. Etumerkki talletetaan bittinä 0, eksponentti muodossa 8+127=135=10000111, ja mantissa 23-bittisessä muodossa 0x2D7000 <nobr>(=&nbsp;010&nbsp;1101&nbsp;0111&nbsp;0000&nbsp;0000&nbsp;0000</nobr>).

<pre> 

+345.875<sub>10</sub> = +1.0101 1010 111 * 2<sup>8</sup> 
    &rarr; 0 100 0 011 1 010 1101 0111 0000 0000 0000 = 0x43AD7000
</pre>

Vastaavasti, jos muistissa olevan liukuluvun X esitysmuoto on 0x40780000 (<nobr>=&nbsp;0&nbsp;100&nbsp;0000&nbsp;0&nbsp;111&nbsp;1000&nbsp;0000&nbsp;0000&nbsp;0000</nobr>), niin mikä on X:n arvo? Etumerkkibitti on 0, joten luku on positiivinen. Eksponentin esitysmuoto on 1000&nbsp;0000=128, joten eksponentin arvo on 128-127=1. Mantissan esitysmuoto on 0x780000=111&nbsp;1000&nbsp;0000&nbsp;0000&nbsp;0000&nbsp;0000, joten piilobitin kanssa mantissa on 1.1111. Muuttujan X arvo on nyt siis 1.1111\*2<sup>1</sup> = 11.111 = 3.875<sub>10</sub>.

<pre>

0x40780000 = 0 100 0000 0 111 1000 0000 0000 0000 
    &rarr; +1.1111 * 2<sup>1</sup> = +11.111<sub>2</sub> =  3.875<sub>10</sub>
</pre>

### Liukulukujen erikoistapaukset

Liukuluvuille on erikseen määritelty muutama esitysmuodon erityistapaus. Ensinnäkin siellä on ±0, joissa kaikki eksponentin ja mantissan bitit ovat nollia. Siellä on myös määritelty ±&infin;, joissa exponenttikenttä on 0xFF ja mantissakenttä on nolla. Lisäksi on vielä "alustamaton liukuluku" (NaN, Not a Number), jota on vielä kahta muotoa. Niissä molemmissa eksponenttikenttä on 0xFF ja mantissakenttä nollasta poikkeava. Toisessa muodossa alustamattoman luvun käyttö aiheuttaa keskeytyksen ja toisessa ei.

<pre>

±0 =           0/1 0000 0000 00...0
±&infin; =           0/1 1111 1111 00...0
Quiet Nan:     0/1 1111 1111  1?..?1?..?  (nollasta poikkeava mantissakenttä)
Signaling Nan: 0/1 1111 1111  0?..?1?..?  (nollasta poikkeava mantissakenttä)
</pre>

Normalisointi asettaa omat rajoituksensa sille, kuinka pieniä liukulukuja voi esittää, koska normalisoidun liukuluvun kokonaisosa on aina 1. Hyvin pienille _ei-normalisoiduille luvuille_ on oma esitystapansa, joka on koodattu eksponenttikenttänä 0 ja nollasta poikkeavana mantissakenttänä. Tuollaisilla luvuilla eksponentti on aina -126 ja piilobitin arvo on 0. Nimensä mukaisesti mantissaa ei ole normeerattu tavalliseen tapaan, vaan se on skaalattu eksponenttiin -126 sopivaksi.

<pre>

+1.14794 \* 10<sup>-40</sup> = 0.0000 0010 1 \* 2<sup>-126</sup> 
    &rarr; 0 000 0000 0 000 0001 0100 0000 0000 0000 = 0x00014000
</pre>

Huonona puolena tällaisissa (itseisarvoltaan) hyvin pienissä luvuissa on esitystarkkuuden heikentyminen. Edellisessä esimerkissä merkitseviä bittejä on vain 17, kun normaalisti liukulukujen tarkkuus on 24 bittiä. Jokainen nollabitti ei-normalisoidun mantissan alussa puolittaa lukutarkkuuden.

-- Quizes 3.2.8-10 
<div><quiznator id="5be1890ae8e5d029fd781d84"></quiznator></div>
<div><quiznator id="5be18b670f60f62a209d9293"></quiznator></div>
<div><quiznator id="5be18d190f60f62a209d9296"></quiznator></div>

### Liukulukulaskenta
Liukulukulaskenta on hieman erilaista kuin mitä koulussa on opittu realilukulaskennasta. Esimerkkinä tarkastellaan tilannetta, jossa muuttujan X arvo on 1.0 ja muuttujan Y arvo on 0.00000001. Jos laskemme nämä luvut yhteen (Z=X+Y), niin realiluvuilla laskettaessa summan pitäisi olla 1.00000001. Liukuluvuilla (IEEE:n 32-bittinen standardi) laskettaessa tulos on kuitenkin 1.0, koska Y:n bitit jäävät pois normeeratussa 24 bitin esitysmuodossa.
<pre>1.000000<sub>10</sub> + 0.00000001<sub>10</sub> = 1.00000001<sub>10</sub>
1.000 0000 0000 0000 0000 0000 0001 0101<sub>2</sub> &rarr; 1.000 0000 0000 0000 0000 0000<sub>2</sub> (24 bittiä)
</pre>
Toinen ongelma liukulukulaskennassa on lukujen vertailu. Realiluvuilla on ihan normaalia verrata kahta lukua toisiinsa, mutta liukuluvuilla suora vertailu ei useinkaan toimi lähes samanarvoisten lukujen kanssa, koska liukulukujen esitystarkkuus tulee ottaa huomioon. Täten esimerkiksi lause _if&nbsp;(X+Y&nbsp;==&nbsp;3.0)&nbsp;then&nbsp;..._ ei useinkaan toimi oikein. Liukulukujen vertailussa yhtä suuruuteen täytyy riittää, että ne ovat "riittävän lähellä" toisiaan. Sama epätarkkuus pitää ottaa huomioon vertailtaessa, onko jokin liukuluku suurempi/pienempi kuin toinen.
```
Esimerkki: Liukulukulaskennan epätarkkuus

X = 20.3;  -- tallentuu lukuna 20.299999
Y = 1.33;  -- tallentuu lukuna  1.33000004
Z = X+Y;   -- tulos on luku 21.629999
if (Z == 21.63)     -- koodi toimii väärin, tarkoitus oli haarautua
then ....

Z = X+Y-21.63;
if ( |Z| < 0.00001)   -- koodi toimii oikein
then ....             -- epsilon 0.00001 pitää valita viisaasti!

--

if (Y < Z) -- koodi ei välttämättä toimi oikein
           -- esim. Y = 3.00000011 ja Z = 3.00000008
then  ....

if ( Y < 0.99999 * Z)  -- koodi toimii varmemmin oikein
then ....
```

Pitkäkestoisessa (tunteja, päiviä, viikkoja?) liukulukulaskennassa ongelmana voi olla, että käytössä olevien liukulukujen esitystarkkuus pikkuhiljaa heikkenee. Tämä pätee erityisesti vähennyslaskuun, jos molemmat operandit ovat suunnilleen samankokoisia. Lukujen vsemmanpuoleiset merkitsevät bitit kumovat toisensa ja tuloksen normalisoinnin yhteydessä oikealta täytetään nolla-biteillä ilman mitään parempaa tietoa. Kerran menetettyä todellista esitystarkkuutta ei koskaan voi saada takaisin. Joissakin järjestelmissä tällaista tiedon rappeutumista vastaan taistellaan alustamalla (boottamalla) järjestelmä aika ajoin, jolloin liikkeelle lähdetään taas "puhtaalta pöydältä" ja mahdollisimman tarkan datan pohjalta.

<text-box variant="example" name="Tärkeitä termejä">

### IEEE-754 liukulukustandardi
Tietokonevalmistajien yhteisesti sopima standardi liukulukujen esitysmuotoon ja liukulukulaskentaan. Standardia käyttämällä sama ohjelma antaa periaatteessa samat laskentatulokset kaikilla standardia käyttävillä tietokoneilla, olettaen että kaikki laskennassa käytetyt standardin parametrit ovat samoja. Tällaisia parametreja ovat esim. liukuluvun koko bitteinä ja laskennan lopputuloksen pyöristystapa.

</text-box>
