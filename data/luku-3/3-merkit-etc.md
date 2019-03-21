---
path: '/luku-3/4-merkit-etc'
title: 'Merkit, kuvat ja tunteenpalo'
hidden: false
---

<div>
<lead>Tässä osiossa käymme läpi pääpiirteissään merkkien, merkkijonojen, kuvien, videoiden ja äänten esitystavat. Lopuksi näytämme, kuinka mikä tahansa tieto, tunteenpalo mukaanlukien, voidaan esittää tietokoneessa. </lead>
</div>
Esittelemme ensin merkkien ja merkkijonojen esitysmuodot karkealla tasolla. Sitten käsittelemme kuvien, videoiden ja äänten esitystapoja hyvin kursoorisesti. Lopuksi kerromme, kuinka mitkä tahansa tieto voidaan koodata tietokoneen käsittelemään muotoon ja kuinka sitä sitten käsitellään.

## Merkit
Yleisesti ottaen Suomessa (ja läntisessä maailmassa yleensä) käytäntönä on koodata kukin merkki yhdellä 8-bittisellä tavulla. Tällä tavoin voidaan esittää 256 erilaista merkkiä, jotka hyvin riittävät normaalikäyttöön. Käytössä on historiallisista ja muista syistä useampi merkkien koodaustapa eli [merkistö](https://fi.wikipedia.org/wiki/Merkist%C3%B6). Paljon käytetty merkistö on [ISO/IEC&nbsp;8859-15](https://en.wikipedia.org/wiki/ISO/IEC_8859-15), mutta sitä kutsutaan myös nimellä _Latin-9_ tai Länsi-Eurooppalainen (Western European) merkistö. Siinä on englanninkielisten aakkosten lisäksi mukana (esimerkiksi) merkit 'ä' (0xE5), 'ö' (0xF6) ja 'å' (0xE5), sekä '$' (0x24), '£' (0xA3) ja '€' (0xA4).

Toinen usein käytetty merkistö on [UTF-8](https://en.wikipedia.org/wiki/UTF-8) ([Unicode](https://simple.wikipedia.org/wiki/Unicode)). Siinä on 1-4 tavua per merkki ja sillä voidaan esittää liki kaikki maailmalla käytössä olevat merkit. Useimmilla meidän käyttämillämme merkeillä UTF-8 merkkikoodit ovat samoja kuin Latin-9 merkkikoodit, mutta eivät kaikilla.

Merkkien koodaustapoja (merkistöjä) on siis useita erilaisia ja niitä kaikkia käytetään rinnakkain. Tästä voi aiheutua ongelmia, kun esimerkiksi jokin maili on kirjoitettu yhtä merkistöä käyttäen ja sen vastaanottajan maili-asiakas olettaa ihan liikaa käytössä olevasta merkistöstä. Vastaava ongelma esiintyy usein verkkosivujen kanssa. Verkkosivuilla on mahdollista kertoa käytössä oleva merkistö sen alussa, jotta selaimet osaavat näyttää sivun oikein. Olisi suotavaa, että jokaisella verkkosivulla olisi tuo merkistönkuvaus paikallaan, mutta harmillisesti näin ei suinkaan ole.

    Esimerkki:  Merkistön määrittely (html-koodatun) verkkosivun alussa
    
    <html><head>
    <meta charset="utf-8">
    <title>Esimerkki merkistön määrittelystä</title>
    ...

Maailmanlaajuisesti standardoitu [Universal Coded Character Set](https://en.wikipedia.org/wiki/Universal_Coded_Character_Set) (UCS) merkistö kattaa lähes kaikki maailmalla käytetyt merkit. Siinä on mm. määritelty 16-bittiset (2 tavua) koodiarvot 65&nbsp;535 erilaiselle merkille, jotka aika hyvin kattavat maailmassa käytössä olevat noin 200&nbsp;000 symbolia. Siinä on standardoitu myös 32-bittinen (4-tavuinen) koodausmuoto lähes mielivaltaisille symboleille. Meidän käyttämämme merkistö (Latin-9) on myös mukana UCS:ssä, sen yhtenä 8-bittisenä osajoukkona. Samoin siellä on mukana japanilaisen Kanji-kielen 20992 merkkiä omana 16-bittisenä osajoukkonaan.

Ei ole niinkään tärkeää, mitä merkistöä käytetään, kunhan tiedon tuottaja ja käyttäjä käyttävät samaa merkistöä. Ohjelmistoissa eri merkistöt täytyy ottaa huomioon hyvin huolella. Esimerkiksi, merkkien vertailuoperaatioissa on olennaista tietää, onko käytetty merkistö 8-, 16- vai 32-bittinen!

## Merkkijonot
[Merkkijonot](https://fi.wikipedia.org/wiki/Merkkijono) koodataan peräkkäisinä merkkeinä. Yleensä merkit on _pakattu_ sanoihin siten, että yhdessä sanassa on monta merkkiä. Esimerkiksi yhdessä 32-bittisessä sanassa voi olla neljä 8-bittistä merkkiä kukin omassa tavussaan. Itse merkkien lisäksi merkkijono pituus täytyy ilmaista jollain tavoin. Joissakin järjestelmissä merkkijonot kuvataan [tietueina](https://fi.wikipedia.org/wiki/Tietue), joissa on kaksi kenttää: merkkijonon pituus ja itse merkkijono. Merkkijonojen koodaustapa vaihtelee eri ohjelmointikielillä. Usein käytetty koodaustapa on [C](https://www.wikiwand.com/fi/C_(ohjelmointikieli)):n merkintätapa, jossa merkkijonon päättymisen ilmaisee erikoismerkki '\0' (0x00). Tuota erikoismerkkiä ei sitten tietenkään voi käyttää itse merkkijonossa.

<!-- esimerkki: merkkijono  -->

```
Merkkijono "Merkkijono" talletetaan C-kielessä tavuosoitteeseen 0x1200
peräkkäisiin tavuihin seuraavasti:

0x1200: 'M' 'e' 'r' 'k'  'k' 'i' 'j' 'o'   'n' 'o' '\0' '?'  (Big-Endian)
0x1200: 'k' 'r' 'e' 'M'  'o' 'j' 'i' 'k'   '?' '\0' 'o' 'n'  (Little-Endian)

Vimeisen sanan viimeinen merkki '?' tarkoittaa tässä ihan mitä vain. 
Jotain bittejä siellä kuitenkin on.
```

Yleensä suorittimissa ei enää ole omia konekäskyjä merkkijonojen käsittelyyn. Käskyjen toteutus on vaikeata, kun eri merkistöjä on niin paljon ja merkkien kokokin vaihtelee. Joissain vanhemmissa suorittimissa on kuitenkin esim. konekäskyt _strcmp_ merkkijonojen vertailuun ja _strcpy_ merkkijonojen kopioimiseen. Tuolloin oletetaan yleensä 8-bittiset merkistöt ja nollamerkin ('\0') käyttö merkkijonon päättymisen indikaattorina.

Merkkijonoja käsitellään nykyisin kokonaislukuina, kun kukin merkki on koodattu omana kokonaislukunaan. Esimerkiksi voidaan testata, onko Latin-9 merkistöä käyttävä merkki '€' vertaamalla kyseisen merkin merkkikoodia lukuun 0xA4=164. Merkkijonojen käsittely on yleensä hidasta, koska merkit on pakattu sanoihin ja ne pitää eristää sieltä irti bittimanipulaatiokäskyillä.

<!-- esim. Merkkien vertailu -->

```
Esimerkki: Merkkien vertailu

Muistissa 0x2300: 'a' 'u' 't' 'o' eli 0x61 0x75 0x74 0x6F (Big-Endian)

Load R1, 0x2300    -- lataa merkit rekisteriin            R1: 61 75 74 6F
shr  R1, 24        -- siirrä bittejä 24 bittiä oikealle   R1: 00 00 00 61
comp R1, =61       -- onko ens. merkki 'a'?
jequ ....          -- hyppää, jos oli 'a' .....
```

Usean merkin pakkaaminen sanoihin (ja kaivaminen esiin sanoista) on työlästä ja vaatii useamman konekäskyn, mutta säästää muistitilaa huomattavasti.

## Kuvat, äänet, videot, dokumentit
Kuvien, äänten, videoiden ja erilaisten dokumenttien tietomäärä on niin suuri, että niitä ei käsitellä vain muistissa olevina tietoina. Ne yleensä talletetaan omiin tiedostoihinsa ja niitä käsitellään kutakin tiedostotyyppiä varten tehdyillä sovelluksilla.

Käyttöjärjestelmät tunnistavat tiedoston tyypin ([tiedostomuodon](https://fi.wikipedia.org/wiki/Tiedostomuoto)) tiedostonimen loppuliitteen (esim. ".pdf") perusteella ja avaavat sitten sitä tiedostotyyppiä käsittelevän sovelluksen. Yleensä useimmille tiedostotyypeille on käyttöjärjestelmässä valittu etukäteen oletusarvoiset sovellukset, mutta käyttäjä voi muuttaa niitä halutessaan. Käyttäjä voi myös käynnistää sovelluksen ensin ja sitten sieltä avata sovellukselle sopivan tiedoston käsittelyyn. Useista tiedostotyypeistä on olemassa useampi variantti vähän erilaisilla tiedostonimen loppuliitteillä.

Tiedostonimen loppuliitteen lisäksi tai sen asemesta tällaisissa _rakenteellisissa tiedostoissa_ on tiedoston alussa jokin "maaginen" merkkisarja, joka kertoo tiedoston tyypin. Esimerkiksi GIF-tiedostoissa on alussa "GIF87a" ja PDF-tiedostossa "%PDF". Kun jokin sovellus avaa tiedoston sen käsittelyä varten, sovelluksen pitäisi aina tarkistaa tästä merkkisarjasta, että tiedosto on oikean muotoinen juuri tälle sovelluksen versiolle. Rakenteellisissa tiedostoissa voi varsinaisen datan lisäksi olla [metatietoja](https://fi.wikipedia.org/wiki/Metatieto), jotka sisältävät tietoja tiedoston tarkemmasta rakenteesta tai kuvatietoon liittyvää hallintotietoa. Esimerkiksi kuvien metatiedoissa voi olla tietoa siitä, milloin, millä kameralla ja minkälaisilla kameran asetuksilla kuva on otettu.

Ääni-, kuva ja videotiedostojen käsittelyyn on suunniteltu omia suorittimia, jotka liitetään väylään muiden lisälaitteiden tavoin. [Äänikortin](https://fi.wikipedia.org/wiki/%C3%84%C3%A4nikortti) avulla laitteistoon voi liittää erilaisia monen kauittimen äänentoistojärjestelmiä. [Näytönohjaimen](https://fi.wikipedia.org/wiki/N%C3%A4yt%C3%B6nohjain) avulla voi esittää huomattavasti laadukkaampia videoita kuin mihin suorittimen oma laskentakyky pystyisi. Näytönohjaimissa on koko suoritin suunniteltu eri muotoisten videoiden esittämiseen ja niissä voi olla tuhansia pieniä suorittimia (ytimiä) laskennan tekemiseen rinnakkain.  Niissä on myös merkittävä määrä omaa nopeata muistia laskennan nopeuttamiseksi.

### Kuvat ja dokumentit
Kuville ja dokumenteille on molemmille hyvin monta erilaista esitysmuotoa. Tyypillisiä kuvien esitysmuotoja ovat [Joint Photographic Experts Group eli JPEG](https://en.wikipedia.org/wiki/JPEG) ([JPEG lyhyt](https://simple.wikipedia.org/wiki/JPEG)), [Graphics Interchange Format eli GIF](https://en.wikipedia.org/wiki/Graphics_Interchange_Format) ([GIF lyhyt](https://simple.wikipedia.org/wiki/Graphics_Interchange_Format)), [Portable Network Graphics eli PNG](https://en.wikipedia.org/wiki/Portable_Network_Graphics) ([PNG lyhyt](https://simple.wikipedia.org/wiki/PNG)) ja [Scalable Vector Graphics eli SVG](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics) ([SVG lyhyt](https://simple.wikipedia.org/wiki/SVG)). Dokumenttien esitysmuotoja ovat esimerkiksi [Portable Document Format eli PDF](https://en.wikipedia.org/wiki/Portable_Document_Format) ([PDF lyhyt](https://simple.wikipedia.org/wiki/PDF)), [Postscript eli PS](https://en.wikipedia.org/wiki/PostScript) ([PS lyhyt](https://simple.wikipedia.org/wiki/Postscript)), [Microsoft Word eli DOCX](https://en.wikipedia.org/wiki/Microsoft_Word) ja [Microsoft Excel eli XLSX](https://en.wikipedia.org/wiki/Microsoft_Excel). Erilaisten esitysmuotojen täsmällinen läpikäynti ei sisälly tämän kurssin oppimistavoitteisiin. Jos ne kuitenkin kiinnostavat enemmän, niin seuratkaa linkkejä eteenpäin.

Yleensä tiedostonimen loppuliite ilmaisee käytössä olevan tiedostomuodon (esim. "kissakuva.jpeg"). Näitä kaikkia käsitellään omilla sovelluksillaan, mutta esimerkiksi kuvien käsittelyn helpottamiseksi tai nopeuttamiseksi voi suorittimessa olla joitakin erityisiä tähän tarkoitukseen suunniteltuja konekäskyjä.

Kuvien esitysmuodoilla on kaksi perusmuoto. [Rasterimuotoinen](https://fi.wikipedia.org/wiki/Rasteri) kuva (pikselikuva, bittikarttakuva) on kaksiulotteinen pisteiden joukko (esm. 800x1200 pistettä tai pikseliä), jossa jokaisen pisteen väri ja tummuusarvo on talletettu erikseen. Kun tällaista kuvaa katsoo tarpeeksi läheltä, erilliset pisteet tulevat näkyville ja kuvan laatu heikkenee. Esimerkiksi JPG-kuvat ja television näytöllä oleva kuva ovat tällaisia.

[Vektorigrafiikkaa](https://fi.wikipedia.org/wiki/Vektorigrafiikka) käyttävät kuvat koostuvat (osittain) päällekkäin olevista kaksi-ulotteisista graafisista elementeistä, kuten kolmioista, suorakulmioista, soikioista, jne. Kukin kuvaelementti, sen sijainti ja asento on määritelty matemaattisesti samaan koordinaatistoon. Tällaista kuvaa voi katsoa mielivaltaisen läheltä ja kuva on aina tarkka, koska kuvan rajaamisen jälkeen näkyvillä olevat kuvaelementit lasketaan aina uudelleen. Esimerkiksi SVG-kuvat ja PS-tiedostot käyttävät vektorigrafiikkaa. Vektorigrafiikalla tehdyn kuva näyttäminen vaatii jonkin verran laskentakapasiteettia, koska kuva luodaan laskemalla joka kerta uudelleen.

### Äänet
Äänten esitysmuodoissa on vastaavasti kahta eri tyyppiä. Ääni voidaan tallentaa tallentamalla yksittäiset äänet peräkkäisinä hetkinä. Esimerkiksi CD-levyllä musiikki on taltioitu 44.1 KHz taajuudella eli 44&nbsp;000 ääntä per sekunti. Paljon suurempaa taajuutta ei kannata käyttää ihmisen kuuloaistin rajallisuuden vuoksi. Kun jokainen ääni talletetaan 8, 16 tai 24 bitin tarkkuudella, äänitiedostoistakin tulee helposti aika suuria. Esimerkiksi puoli tuntia musiikkia 44.1 KHz taajuudella 8 bitin (1 tavu) tarkkuudella vaatii 30\*60\*44.1=793&nbsp;MB tilaa, mikä on jo liikaa CD-levylle. Tämän vuoksi äänitiedostot pakata usein pienempään muotoon tallennusta varten.

Toinen tapa tallettaa ääntä on tallentaa kukin ääni sointuina, syntetisoituina ääninä. Pääpiirteissään siinä kuvataan, mitä nuottia halutaan soittaa milloinkin ja kuinka kauan. [Musical Instrument Digital Interface](https://en.wikipedia.org/wiki/MIDI) (MIDI) on tällainen musiikin tallennusstandardi.

### Videot
[Video](https://fi.wikipedia.org/wiki/Video) saadaan aikaan usealla peräkkäisellä kuvalla. Standardeja on jälleen huima joukko, kuten [Moving Picture Experts Group eli MPEG](https://en.wikipedia.org/wiki/Mpeg)
([MPEG lyhyt](https://simple.wikipedia.org/wiki/MPEG-4)) tai
[teräväpiirtotelevisio eli HDTV](https://fi.wikipedia.org/wiki/Ter%C3%A4v%C3%A4piirtotelevisio).
Video voi esittää valmista elokuvaa tai se voi liittyä dynaamisesti suoritusaikana luotuun videopeliin tai muuhun tiedon visualisointiin.

Videokuva voitaisiin tallettaa yksittäisinä peräkkäisinä kuvina, mutta tämä vie yleensä ihan liikaa tilaa. Tilaa voidaan säästää laskemalla peräkkäisistä kuvista vain eroavaisuudet ja tallettamalle ne. Toinen tapa säästää tilaa on tallettaa (esimerkiksi) vain joka toinen kuva ja sitten näytettäessä laskea puuttuva kuva keskiarvona ([interpoloimalla](https://fi.wikipedia.org/wiki/Interpolaatio)) sitä ympäröivistä kuvista. Molemmissa tavoissa tilan säästäminen maksetaan lisääntyneessä laskennassa niin videon tallennuksen kuin sen näyttämisen aikana. Videoissa on yleensä mukana "ääniraita", joka on synkronoitu kuvatietoon. Erilaisia videoiden koodaustapoja ([koodekkeja](https://fi.wikipedia.org/wiki/Koodekki)) on useita, mutta emme käsittele niitä tässä sen enempää.

Videoiden näyttäminen vaatii paljon tietokoneelta, koska tietomäärät ovat pakattuinakin valtavia ja tiiviisti pakattujen koodekkien purkaminen vaatii paljon laskentaa. Laitteiston täytyy pystyä siirtämään pakattu video tarpeeksi nopeasti levyltä tai verkosta muistiin ja sitten purkaa koodekki vähintään samaa tahtia kun videoesitys etenee. Joissakin tapauksissa joko tiedonsiirtonopeus tai laskentateho voi loppua kesken, jolloin video "pätkii" harmittavasti pilaten ohjelman esityksen.

### Teksti raakadatan muotona
Oma tiedostotyyppinsä on muotoilematon tekstitiedosto (esim. loppuliite txt tai [html](https://fi.wikipedia.org/wiki/HTML)). Tällaiset tiedostot ovat vain joukko peräkkäisiä merkkejä. Tällaisia tiedostoja voi näyttää tai editoida millä tahansa tekstinkäsittelyohjelmalla (esim. Notepad). Tekstinkäsittelyohjelmankin pitää kuitenkin käyttää oikeata merkistöä, jotta esimerkiksi ä- ja ö-kirjaimet tulevat luettua ja kirjoitettua oikeassa muodossa.

Tekstitiedostot voivat sisältää rakenteellisia osia. Verkkosivujen [html](https://fi.wikipedia.org/wiki/HTML) (HyperText Markup Language) tiedostot ovat tällaisia pelkkiä merkkejä sisältäviä tiedostoja, joita selaimet osaavat näyttää halutussa muodossa. Usein tällaisten rakenteellisten tekstitiedostojen sisäinen rakenne kuvataan siihen tarkoitukseen suunnitellulla kuvauskielellä, jollainen on esimerkiksi [Extensible Markup Language eli XML](https://en.wikipedia.org/wiki/XML) ([XML lyhyt](https://simple.wikipedia.org/wiki/XML)), jolloin tiedostot ovat sekä ihmiselle että tietokoneelle sopivassa muodossa. HTML ja XML muistuttavat paljon toisiaan, mutta HTML on suunniteltu nimenomaan selaimia varten vaikka XML on yleiskäyttöisempi.

## Muut ja käyttäjän itse määrittelemät tietotyypit
Kaikki muut tieto talletetaan tietokoneelle jotain sovittua tai itse määriteltyä koodaustapaa käyttäen. Jos tiedossa on jokin rakenne, niin rakenne kuvataan taulukoilla ja/tai tietueilla. Tiedon arvo esitetään kokonaisluvuilla, jos tieto on tyypiltään on diskreettiä eli jokainen arvo eroaa muista arvoista selkeästi. Joissakin tapauksissa arvot voivat olla hyvinkin lähellä toisiaan, jolloin tieto taas on parempi koodata liukulukuina. Jokaiselle näin määriteltyyn tietotyyppiin on valmiina tai sille rakennetaan sopiva ohjelmisto, joka sopii juuri tuon tietotyypin käsittelyyn kokonaisluku- tai liukulukuaritmetiikan avulla.

ISO-standardin mukaan [sormenjälki](http://www.touchngoid.com/iso-iec-19794-2-standard-for-fingerprint-templates/) voidaan tallentaa rakenteellisena datana, jolloin se vie tilaa vain 500 tavua. Raakadatana (kuvana) kukin sormenjälki tarvitsisi 250 KB, jolloin satojen miljoonien sormenjälkien tallentaminen ja käsittely olisi liian vaativaa jokaisessa sormenjälkiä käsittelevässä paikassa. Tottakai se alkuperäinen sormenjälki täytyy olla löydettävissä jossain, mutta ei kaikkialla. Ideana on, että kaikki sormenjäljen oleelliset piirteet voidaan koodata noilla 500 tavulla. Ohjelmistot käsittelevät sormenjälkiä käyttäen pienikokoista standardoitua esitysmuotoa. Mahdollisia operaatioita ovat esimerkiksi _LuoEsitysmuotoSormenjäljestä()_, _EtsiSormenjälki()_ ja _NäytäSormenjäljenKuva()_.

Ruokakaupassa myytävien tuotteet voisi olla hyvä koodata kokonaisluvuilla, jotka esittävät eri tuotteiden tavarakoodeja. Koodien keskinäisillä arvoilla (esim. mansikka 476, mustikka 8923 ja viili 511) ei niinkään ole merkitystä, vaikkakin samankaltaiset tuotteet voisi olla hyvä ryhmitellä lähekkäin olevilla koodeilla. Mahdollisia operaatioita olisivat esimerkiksi _EtsiUusiVapaaTavarakoodi()_ ja _PoistaTavarakoodi()_.

Rakkauden (tai vihan) määrä on varmaankin parasta koodata liukulukuna, koska ainakin joskus on tarve esittää arvo plus (tai miinus) ääretön. Samoin rakkauden määrä voi kasvaa tai vähetä ihan pikkasenkin kerrallaan. Mahdollisia operaatioita olisivat esimerkiksi _AsetaRakkaudenMäärä()_, _LisääRakkaudenMäärää()_ ja _VähennäRakkaudenMäärää()_.

<!-- Quizes 3.3.1-4  -->
<div><quiznator id="5bed3c6b2a799f3e5ac259a5"></quiznator></div>
<div><quiznator id="5bed406ccd84693e7889a351"></quiznator></div>
<div><quiznator id="5bed418c5695f73da1f7544d"></quiznator></div>
<div><quiznator id="5bed47c75695f73da1f75459"></quiznator></div>

### Yhteenveto
Kolmas luku käsitteli tiedon erilaisia esitysmuotoja. Käsittelimme tarkemmin neljä erilaista kokonaislukujen esitysmuotoa ja IEEE:n standardin mukaista liukulukujen 32-bittistä esitysmuotoa. Sen jälkeen tutustuimme merkkien ja merkkijonojen esitysmuotoihin. Lopuksi esittelimme pääperiaatteet kuvien, äänten ja kaiken muun tyyppisen tiedon esitystapoihin.

Vastaa alla olevaan kyselyyn kun olet valmis tämän luvun tehtävien kanssa.
<div><quiznator id="5c6c09bfc41ed4148d96ec98"></quiznator></div>

<!--
<div>
  <part-summary chapter="3" heading="Saatuasi nyt loppuun luvun 3 sinun pitäisi pystyä selittämään seuraavat asiat:" listitems='[
  {"content":"Kuinka merkit pääpiirteissään esitetään tietokoneessa?"},
  {"content":"Miksi joskus tarvitaan 16-bittisiä merkistöjä?"},
  {"content":"Miksi Suomessa yleensä riittää käyttää 8-bittisiä merkistöjä?"},
  {"content":"Miten merkkijonot esitetään muistissa?"},
  {"content":"Miten kuvat, äänet, dokumentit ja videot esitetään tietokoneessa?"},
  {"content":"Milloinka jokin uusi tietotyypi olisi parempi tallettaa kokonaislukuina tai liukulukuina?"},
  {"content":"Miten sovellus tietää, mikä kuvien esitystapa on kulloinkin käytössä?"}
    ]'>>
  </part-summary>
</div>
-->
