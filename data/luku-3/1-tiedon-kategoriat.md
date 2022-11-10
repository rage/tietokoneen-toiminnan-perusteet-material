---
path: '/luku-3/1-tiedon-kategoriat'
title: 'Tiedon kategoriat, binääri- ja heksadesimaalijärjestelmät, monitavuisen tiedon tallennus'
hidden: false
---

<div>
<lead>Kaikki tieto ei ole samanlaista. Jotkut sopivat ihmiselle, jotkut koneelle ja jotkut molemmille.</lead>
</div>

Tietokoneen käsittelemät tiedot voidaan jakaa (ainakin) kolmeen eri kategoriaan. Ensinnäkin meillä on ihmisen kanssa kommunikointiin käytettävä tieto. Sellaisiin sisältyy teksti, jota voi lukea normaaliin tapaan tai tunnustella [pistekirjoitusnäytöltä](https://en.wikipedia.org/wiki/Refreshable_braille_display). Myös ääni, kuvat ja video ovat tällaista ihmiselle sopivaa tietoa. Toki tietokonekin pystyy käsittelemään tällaista tietoa.

Toisena ääripäänä on suorittimen ymmärtämä tieto. Se on hyvin jäsenneltyä ja yleensä hyvin pienimuotoista, yhden konekäskyn käsiteltävissä olevaa tietoa. Suorittimen ymmärtämät tietotyypit vaihtelevat eri suorittimilla, mutta usein niihin sisältyvät kokonaisluvut, liukuluvut, merkit ja merkkijonot sekä totuusarvot. Huomaa, että ihmisen ymmärtämä teksti-kategoria voi tarkoittaa suorittimen tasolla näitä kaikkia edellä mainittuja, koska tavallisilla kirjaimilla voidaan kuvata kaikkia em. tietotyyppejä. Tärkeä suorittimen ymmärtämä tietotyyppi on myös sen oma konekäskykanta. Tämä heijastaa tietokoneessa muutenkin selkeää jakoa koodin ja datan välillä. Koodi antaa käskyt, jotka käsittelevät dataa.

Kolmas kategoria on järjestelmän sisäiset tietotyypit. Ne määrittelevät, mitä tietoa ja missä muodossa sitä talletetaan keskusmuistiin tiedon käsittelyä varten. Niihin sisältyvät kaikki suorittimen ymmärtämät tietotyypit, joita voidaan sellaisenaan käsitellä konekäskyillä. Niihin sisältyy myös kaikki muu tieto, jota järjestelmässä suorittavat ohjelmat käsittelevät. Tämä voi olla esimerkiksi kuvia, ääniä, sormenjälkiä tai hajuja. Niitä ei voi suoraan käsitellä konekäskyllä, vaan niiden käsittely tapahtuu aliohjelmilla, joiden toiminta perustuu em. tietotyyppien standardoituihin tai itse keksittyihin esitysmuotoihin. Yleensä esitysmuodot ovat sovittuja koodaustapoja kokonaislukuja, liukulukuja tai tekstiä käyttäen. Samalla tiedolla (esim. kuvalla) voi olla erikseen järjestelmän sisäinen esitysmuoto (esim. kissakuva.jpg), joka sitten muutetaan ihmiselle sopivaan muotoon (visuaalisesti soma kuva kissasta näytöllä) tarvittaessa.

## Binäärijärjestelmä

Kaikki tieto esitetään tietokoneessa loppujen lopuksi binäärijärjestelmän numeroina eli bitteinä. Miksi bitteinä eikä esimerkiksi desimaalijärjestelmän numeroina? Bitit on helppo toteuttaa digitaalipiireillä ja digitaalipiirejä on helppo käsitellä matemaattisesti [Boolen algebran](https://fi.wikipedia.org/wiki/Boolen_algebra) avulla.

<!-- note Boole ja Shannon -->

<text-box variant="example" name="George Boole, Claude Shannon ja bitit">

Englantilainen matemaatikko George Boole kehitti 1854 oman algebran totuusarvojen käsittelemiseen. Totuusarvot ovat 2-arvoisia ja ne voi helposti esittää bitteinä. Yleensä arvo 1 vastaa totuusarvoa tosi ja arvo 0 totuusarvoa epätosi. Vuonna 1937 amerikkalainen matemaatikko Claude Shannon esitti maisterin tutkinnon lopputyössään, kuinka Boolen algebraa voidaan soveltaa piirien suunnitteluun. Tämä osoittautui loistavaksi ideaksi tietokoneiden kannalta. Shannonia kutsutaan usein informaatioteorian isäksi.

</text-box>

Binäärijärjestelmässä kantaluku on kaksi. Sen numerot ovat 0 ja 1. Kun 10-järjestelmän luvuissa numeroiden painoarvot oikealta vasemmalle ovat kymmenen potensseja (10<sup>0</sup>=1, 10<sup>1</sup>=10, 10<sup>2</sup>=100, 10<sup>3</sup>=1000, jne.), niin 2-järjestelmässä ne ovat kakkosen potensseja (2<sup>0</sup>=1, 2<sup>1</sup>=2, 2<sup>2</sup>=4, 2<sup>3</sup>=8, jne.). Täten esimerkiksi binääriluvun 110111011<sub>2</sub> ja desimaaliluvun 219 arvot (desimaalilukuina) saadaan laskemalla

<!-- binääriluku esim -->

<pre>

11011011<sub>2</sub> = 2<sup>7</sup>+2<sup>6</sup>+2<sup>4</sup>+2<sup>3</sup>+2<sup>1</sup>+2<sup>0</sup> = 128+64+16+8+2+1 = 219
219<sub>10</sub> = 2*10<sup>2</sup>+1*10<sup>1</sup>+9*10<sup>0</sup> = 200+10+9 = 219
</pre>

Tämä näyttää helpommalta binäärilukujen osalta, koska eri suuruusluokilla ei ole mitään kertoimia edessä (kuten esim. desimaaliluvun 219  suuruusluokan 10<sup>2</sup> eli satojen kerroin on 2). Binääriluvuilla ainoa nollasta poikkeava kerroin on yksi (1), jota ei tarvitse edes kirjoittaa näkyville. Kantaluku ilmaistaan tarvittaessa alaindeksinä (esim. 219<sub>10</sub>), mutta usein se jätetään pois ja kantaluku ilmenee asiayhteydestä.

Vastaavasti, kun desimaaliluvuilla voi olla desimaalipisteellä erotettu desimaaliosa, myös binääriluvuilla voi olla&nbsp;  _binääripisteellä_ erotettu _binääriosa_. Binääripisteen jälkeen tulevilla numeroilla on (desimaalijärjestelmän lukuina) painoarvot
2<sup>-1</sup>=0.5, <nobr>2<sup>-2</sup>=0.25</nobr>, <nobr>2<sup>-3</sup>=0.125</nobr>, <nobr>2<sup>-4</sup>=0.0625</nobr>, jne.  Täten esimerkiksi lukujen 11011011.10101<sub>2</sub> ja 219.65625<sub>10</sub> arvot ovat (desimaalilukuina)

<!-- binääripiste esim -->

<pre>

11011011.10101<sub>2</sub> = 2<sup>7</sup> + 2<sup>6</sup> + 2<sup>4</sup> + 2<sup>3</sup> + 2<sup>1</sup> + 2<sup>0</sup> + 2<sup>-1</sup>  +  2<sup>-3</sup>  +  2<sup>-5</sup>
             = 128 + 64 + 16 + 8 + 2 + 1 + 0.5 + 0.125 + 0.03125 = 219.65625

219.65625<sub>10</sub> = 2*10<sup>2</sup>+1*10<sup>1</sup>+9*10<sup>0</sup>+6*10<sup>-1</sup>+5*10<sup>-2</sup>+6*10<sup>-3</sup> + 2*10<sup>-4</sup> + 5*10<sup>-5</sup>
        = 200 +  10 +  9 + 0.6 + 0.05 + 0.006 + 0.0002 + 0.00005 = 219.65625
</pre>

### Esitysmuodon muunnos desimaalijärjestelmästä binäärijärjestelmään
Esitysmuotojen muunnokset binäärijärjestelmän ja desimaalijärjestelmän välillä ovat triviaaleja. Edellä esitettiinkin jo, kuinka binäärijärjestelmän luku muutetaan desimaalijärjestelmän luvuksi. Muunnos toiseen suuntaan on vain vähän monimutkaisempi.

Kun luku (esim. 57.1875<sub>10</sub>) muunnetaan desimaalijärjestelmästä binäärijärjestelmään, muunnos tehdään erikseen kokonaisosalle ja desimaaliosalle. Kokonaisosan muunnos tehdään siten, että se jaetaan toistuvasti kahdella (2), kunnes jäljelle jää nolla (0). Jakolaskujen jakojäännökset otetaan binäärijärjestelmän kokonaisosaksi _käännetyssä järjestyksessä_.

<!-- kuva: 57 binäärilukuna -->

<pre>
Esimerkki: Mikä on 57<sub>10</sub> binäärilukuna?

57/2 = 28 jakojäännos 1
28/2 = 14 jakojäännös 0
14/2 =  7 jakojäännös 0
7/2 =  3 jakojäännös 1
3/2 =  1 jakojäännös 1
1/2 =  0 jakojäännös 1  joten  57<sub>10</sub> = 111001<sub>2</sub>
</pre>

Desimaaliosan muunnos tehdään kertomalla desimaaliosa kahdella (2), ottamalla tuloksen kokonaisosa (0 tai 1) talteen _seuraavana_ binääriosan numerona, ja toistamalla tätä (pelkän desimaaliosan kertomista kahdella) tarpeeksi monta kertaa. Algoritmi päättyy, jos desimaaliosaksi tulee nolla (0.0), koska sen jälkeen tilanne ei muutu mihinkään. Usein algoritmi ei pääty koskaan, koska kaikilla desimaaliluvuilla ei ole täsmällistä vastinetta binäärijärjestelmässä. Tällöin tyydytään etukäteen määriteltyyn tarkkuuteen binääriosan numeroiden lukumäärän suhteen. Esimerkiksi voidaan jo alkuaan sopia, että otetaan korkeintaan 30 numeroa mukaan binääriosaan, jolloin binääriluvun tarkkuus vastaa noin 9 desimaalinumeron tarkkuutta.

<!-- esim. desimaaliosasta binääriosa -->

<pre>
Esimerkki: Mikä on 0.1875<sub>10</sub> binäärilukuna? <br>
0.1875 * 2 = 0.375 = 0 + 0.375
0.375  * 2 = 0.75  = 0 + 0.75
0.75   * 2 = 1.5   = 1 + 0.5
0.5    * 2 = 1.0   = 1 + 0.0   joten  0.1875<sub>10</sub> = 0.0011<sub>2</sub>
</pre>

Kun kokonais- ja binääriosat yhdistetään, saadaan 57.1875<sub>10</sub> = 111001.0011<sub>2</sub>. Kokonaisosan alkuun voidaan halutessa laittaa lisää nollia lukuarvon siitä muuttumatta. Sama pätee binääriosan lopussa oleviin nolliin.

<!-- esim etu ja loppunollat -->

<pre>
Esimerkki: kokonaisosan etunollat ja binääriosan loppunollat <br>
57.1875<sub>10</sub> = 111101.0011<sub>2</sub>
   = 00111101.00110000<sub>2</sub>
   = 111101.001100000000000000000<sub>2</sub>
</pre>

Jos desimaaliluvulla ei ole täsmällistä binäärilukuvastiketta, likiarvon laskeminen pitää lopettaa sitten kun numeroita on tarpeeksi haluttuun laskentatarkkuuteen.

<!--  esim. päättymätön binääriosa -->

<pre>
Esimerkki: Mikä on 0.1<sub>10</sub> binäärilukuna?

0.1 * 2 = 0.2 = 0 + 0.2
0.2 * 2 = 0.4 = 0 + 0.4
0.4 * 2 = 0.8 = 0 + 0.8
0.8 * 2 = 1.6 = 1 + 0.6
0.6 * 2 = 1.2 = 1 + 0.2
0.2 * 2 = 0.4 = 0 + 0.4
0.4 * 2 = 0.8 = 0 + 0.8
0.8 * 2 = 1.6 = 1 + 0.6
0.6 * 2 = 1.2 = 1 + 0.2
0.2 * 2 = 0.4 = 0 + 0.4, jne.

Nyt,  0.1<sub>10</sub> = 0.0001100110011..<sub>2</sub> = 0.0<u>0011</u><sub>2</sub>
</pre>

Alleviivausmerkintä luvussa 0.0<u>0011</u><sub>2</sub> tarkoittaa jaksollisuutta,
jossa alleviivattu osa toistuu luvussa äärettömän monta kertaa. Esimerkiksi,
jos luvusta 0.1<sub>10</sub> halutaan 30 bitin binääriosainen binääriesitys, niin se olisi
0.0&nbsp;0011&nbsp;0011&nbsp;0011&nbsp;0011&nbsp;0011&nbsp;0011&nbsp;0011&nbsp;0<sub>2</sub>.
<br><br>
Edellä olevissa esimerkeissä on vähän erikoista esitystavasta aiheutuva esitystarkkuuden muutos. Alkuperäisessä luvussa 57.1875<sub>10</sub> oli 6 desimaaliluvun tarkkuus, mutta sitä vastaavassa binääriesityksessä 111101.001100000000000000000<sub>2</sub> näyttää olevan 27 binäärinumeron tarkkuus, vaikka oikeasti tarkkuus on sama (noin 20 binäärinumeroa) kuin desimaaliluvussakin. Lopussa olevat 0-bitit voivat oikeasti olla mitä vain. Toisessa esimerkissä desimaaliluvun 0.1<sub>10</sub> tarkkuus on vain yksi desimaalinumero, kun taas sen 30-numeroinen binääriesitys 0.0001&nbsp;1001&nbsp;1001&nbsp;1001&nbsp;1001&nbsp;1001&nbsp;1001&nbsp;10<sub>2</sub> näyttää kovin täsmälliseltä, vaikka senkään oikea tarkkuus ei oikeasti ole yhtään parempi kuin lähtötiedon 0.1<sub>10</sub> tarkkuus (noin 3 binäärinumeroa).
<br><br>
Tietokoneille on tyypillistä, että esitystavan vuoksi lukujen tarkkuus näyttää olevan parempi kuin todellisuudessa onkaan. Jos data talletetaan 32-bittisenä, siellä on aina 32-bittiä tietoa, vaikka osa niistä olisikin puppua! Laskennan lopputulos on todellisuudessa aina korkeintaan yhtä tarkka kuin alkuperäiset operandit, ja yleensä epätarkempi. Ei siis pidä sokeasti luottaa tietokoneiden antamiin lopputuloksiin.

<!-- Quizes 3.1.1-7 -->
<div><quiz id="245cabc3-e76f-4a2a-a58d-b9f1cf4f0441"></quiz></div>
<div><quiz id="673b57d2-41b4-46b9-94ab-34ca2acf6d06"></quiz></div>
<div><quiz id="4002a5ec-28bd-4bd5-acc9-20bba69256d1"></quiz></div>
<div><quiz id="4432ae80-2b68-410b-8ef4-22dfdb6c8454"></quiz></div>
<div><quiz id="2ff84dca-1e88-4246-9fde-f54dde433ebf"></quiz></div>
<div><quiz id="586a4f04-3846-43cd-bc4f-2d3685548b57"></quiz></div>
<div><quiz id="3ce2af9c-26c0-494d-80de-1f2292d212b8"></quiz></div>

## Heksadesimaalijärjestelmä
Bittien informaatioarvo on pieni, joten niitä tarvitaan paljon. Niiden kirjoittaminen ja lukeminen on ihmiselle jonkin verran virhealtista, joten yleensä ne esitetään 16-järjestelmän ([heksadesimaalijärjestelmän](https://fi.wikipedia.org/wiki/Heksadesimaalij%C3%A4rjestelm%C3%A4)) avulla.

Heksadesimaalijärjestelmän numerot ovat lukuarvoltaan 0-15, ja ne ovat 0-9, A, B, C, D,  E ja F. Numeroiden A-F lukuarvot ovat 10-15. Luvun A4B arvaa aika helposti esittävän 16-järjestelmän lukua, mutta esimerkiksi luvun 345 kohdalla voi helposti tulla sekaannus käytössä olevasta lukujärjestelmästä. Tämän vuoksi tapana on kirjoittaa 16-järjestelmien luvuille etuliite 0x. Esimerkiksi, desimaaliluvulla 837 on sama arvo kuin heksadesimaaliluvulla 0x345.

<!-- esim: hexadesimaaliluku -->

<pre>
3*16<sup>2</sup>&nbsp;+&nbsp;4*16&nbsp;+&nbsp;5&nbsp;=&nbsp;3*256&nbsp;+&nbsp;4*16&nbsp;+&nbsp;5 = 768 + 64 + 5 = 837
</pre>


Kukin 16-järjestelmän numero vastaa neljää bittiä ja ne ryhmitellään aina oikealta vasemmalle ennen binääripistettä ja vasemmalta oikealle sen jälkeen. Ryhmittelyssä binäärilukuihin laitetaan sopivasti etunollia kokonaisosan eteen ja binääriosan loppuun, jotta bittien lukumäärä molemmissa olisi neljällä jaollinen.

Esimerkiksi, 16-bittinen luku 0000&nbsp;0101&nbsp;0111&nbsp;1010 on helpompi kirjoittaa muodossa 0x057A. Esitysmuodon muutokset binääri- ja heksadesimaalijärjestelmien välillä ovat triviaaleja. Kukin neljän bitin ryhmä vastaa heksadesimaaliarvoa välillä 0-F (eli 0-15), ja kukin heksadesimaalijärjestelmän numero on helppo vastaavasti purkaa biteiksi. Bittiesityksestä voi poistaa kokonaisosan etunollia ja binääriosan loppunollia halutessaan, tai laittaa niitä lisää.

<!-- esim: binääri hexa  -->

<pre>
Esimerkki: Muunnokset binääri- ja heksadesimaaliesitysten välillä

binääri:  0100 0111 1001 1010 1111.0100
heksad.:    4    7    9    A    F . 4   eli 0x479AF.4  =  479AF.4<sub>16</sub>

heksad.: 0x120ADF.C8  =    1    2    0    A    D    F .  C    8
binääri:                 0001 0010 0000 1010 1101 1111.1100 1000
                          = 1 0010 0000 1010 1101 1111.1100 1
</pre>

Kukin 16-järjestelmän numero vastaa siis neljää bittiä. Nyt yhden tavun bitit (8 bittiä) voidaan ilmaistaan (kirjoittaa näkyville) kahdella heksadesimaalinumerolla. Esimerkiksi tavun sisältö 0x62 tarkoittaa, että tavun bitit ovat vasemmalta oikealle 0110&nbsp;0010. Nämä bitit voivat esittää esimerkiksi kokonaislukua +98, merkkiä 'a' tai operaatiokoodia ADD tulkintatavasta riippuen.

On tärkeätä muistaa, että samat bittiyhdistelmät voivat tarkoittaa ihan eri asioita riippuen siitä, miten niitä käsitellään tai halutaan tulkita. Konekielessä on omia konekäskyjä raakadatan (bitit ilman merkitystä) käsittelyyn (esim. SHL eli siirrä bittejä vasemmalle) ja omia konekäskyjä tiettyjen tietotyyppien käsittelyyn (esim. ADD eli kokonaislukujen yhteenlasku). Viimeksi mainitut perustuvat tietotyyppien sovittuihin esitysmuotoihin, joihin tutustumme seuraavassa aliluvussa. Minkä tahansa tietotyypin esitysmuodossa olevaa tietoa voidaan käsitellä kuitenkin myös raakadatana pelkkinä bitteinä siihen tarkoitukseen sopivilla konekäskyillä.

<!-- Quizes 3.1.8-9 -->
<div><quiz id="4adc6501-2fa5-4b6c-8b4b-26481bcf12ab"></quiz></div>
<div><quiz id="51c58332-340b-4b7f-8215-29d0c8999d82"></quiz></div>

## Monitavuinen tieto muistissa
Tallennuksen yksikkö on yksi tavu, mutta muistissa tietoa talletetaan 32-bittisinä sanoina. Merkkijonot talletetaan muistiin peräkkäisiin tavuihin, jotka ovat peräkkäisissä sanoissa. Olisi luontevaa, että tavut talletettaisiin samassa järjestyksessä kuin me ihmiset olemme oppineet niitä käsittelemään. Siten esimerkiksi lukua 1350 tarkoittava merkkijono "1350" talletettaisiin muistiosoitteeseen 0x1A0 siten, että merkki '1' on tavussa 0x1A0, merkki '3' tavussa 0x1A1, merkki '5' tavussa 0x1A2 ja lopulta merkki '0' tavussa 0x1A3. Tällainen monitavuisen tiedon _sanan_ (tai kaksoissanan) sisäinen talletusmuoto on nimeltään _Big-Endian_ koska lukuarvoltaan eniten merkitsevä tavu on ensimmäisenä. Näin ei kuitenkaan tietokoneessa aina tehdä. Toisen talletusmuodon _Little-Endian_ mukaan sanassa vähiten merkitsevä tavu laitetaan ensimmäiseksi, jolloin kyseiset tavut tulevat tavallaan käänteisessä järjestyksessä muistiin. Tiedon osoite on joka tapauksessa sen muistissa olevan ensimmäisen tavun osoite.

<!-- esim Big-Endian Little-Endian "autotie" -->

<pre>
Esimerkki:  Talleta merkkijono "autotie" muistiin osoitteeseen 0xA10,
eli tavuihin 0xA10, 0xA11, 0xA12, 0xA13. Merkkijonon lopetusmerkki on '\0'.
Tavujen järjestys vaihtelee, mutta vain yhdessä sanassa kerrallaan.

Big-Endian:      'a'    'u'    't'    'o'        't'    'i'   'e'    '\0'
   tavuosoite   0xA10  0xA11 0xA12   0xA13      0xA14  0xA15 0xA16  0xA17
Little-Endian:   'o'    't'    'u'    'a'        '\0'   'e'   'i'    't'
</pre>

<!-- esim. Big-Endian Little-Endian 0x11223344 -->

<pre>
Esimerkki:  Talleta luku 0x11223344 (287454020) muistiin osoitteeseen
0x1200 eli tavuihin 0x1200, 0x1201, 0x1202 ja 0x1203.

Big-Endian:      0x11   0x22   0x33   0x44
   tavuosoite   0x1200 0x1201 0x1202 0x1203
Little-Endian:   0x44   0x33   0x22   0x11
</pre>

Tietokoneen kannalta tällä ei ole paljoa merkitystä, kunhan vain tavujen järjestys on etukäteen sovitun mukainen. Yleisesti ottaen suorittimen suunnittelija tekee tämän päätöksen ja sitten ALU-operaatiot tehdään toimivaksi sen mukaisesti. Big-Endian'issa on se etu, että me ihmiset olemme tottuneet siihen. Little-Endian'issa etuna on, että monitavuisen tiedon lyhyempien esitysmuotojen osoite on aina sama kuin alkuperäisenkin datan.

<!-- esim: monitavuisen tiedon osoite -->

<pre>
Esimerkki:  Talleta luku 0x35 = 0x00000035 muistiin osoitteeseen 0x1200
            (tavut 0x1200, 0x1201, 0x1202, 0x1203)

Big-Endian:      0x00   0x00   0x00   0x35
   tavuosoite   0x1200 0x1201 0x1202 0x1203
Little-Endian:   0x35   0x00   0x00   0x00

Big-Endian'issa luvun 35 sanan osoite on 0x1200,
puolikassanan (2 tavua) 0x1202 ja tavun 0x1203.

Little-Endian'issa luvun 35 sanan osoite on 0x1200,
puolikassanan 0x1200 ja tavun 0x1200.
</pre>

Joissakin suorittimissa ovat molemmat monitavuisen tiedon esitystavat käytössä. ALU-piirit tietenkin tekevät toimensa vain yhdellä esitystavalla, jolloin operandien ja tuloksen tavut käännetään eri järjestykseen tarvittaessa. Suorituksessa oleva ohjelma ilmoittaa, kumpaa järjestystä käytetään. Voi myös olla, että etuoikeutetussa tilassa laskettaessa käytetään aina jotain tiettyä tavujen järjestystä.

Tämä on tyypillinen ongelma myös siirrettäessä tietoa verkon ylitse. Verkkoprotokollat (sovitut käytännöt tietoliikenteen toteuttamiseen) tietävät lähettäjän ja vastaanottajan käyttämät monitavuisen tiedon esitystavat, ja kääntävät tavut oikeaan järjestykseen tarvittaessa.

<text-box variant="example" name="Tärkeitä termejä">

### Binäärijärjestelmä
Lukujärjestelmä, jonka kantaluku on 2. Sen numerot ovat 0 ja 1.

### Heksadesimaalijärjestelmä
Lukujärjestelmä, jonka kantaluku on 16. Sen numerot ovat 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E ja F. Numeron 'A' lukuarvo on desimaaliluku 10 ja numeron 'F' lukuarvo on desimaaliluku 15.

### Big-Endian
Ihmiselle tutumpi monitavuisen tiedon (yleensä sanan) tavujärjestys. Eniten merkitsevä tavu ensin.

### Little-Endian
Monitavuisen tiedon vaihtoehtoinen tavujärjestys. Vähiten merkitsevä tavu ensin.

</text-box>

<!-- Quiz 3.1.10 -->
<div><quiz id="40941c5d-291a-452d-8dfe-210609378b98"></quiz></div>
