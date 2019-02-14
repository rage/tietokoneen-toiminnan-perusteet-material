---
path: "/luku-1/3-laitteiston-nopeuserot"
title: "Laitteiston nopeuserot"
---

<div>
<lead>Ihmisen näkökulmasta tietokone tuntuu kovin nopealta ja niinhän se onkin! Tietokone pystyy tekemään miljardeja tai biljoonia laskutoimituksia sekunnissa. Tietokoneen sisällä eri laitteiden ja komponenttien nopeuserot ovat kuitenkin valtavia. Eri nopeuksisia laitteita on paljon ja silti niiden pitää toimia hyvin yhteen. Tutustumme tässä aliluvussa näihin nopeuseroihin ja niiden vaikutuksiin tietokoneiden ja tietokonejärjestelmien suunnittelussa.</lead>
</div>

## Laitteiston nopeuserot
Meille ihmisille ei ole juurikaan väliä, tapahtuuko jokin asia millisekunnissa ([ms](https://fi.wiktionary.org/wiki/millisekunti)), mikrosekunnissa ([µs](https://fi.wiktionary.org/wiki/mikrosekunti)) vai nanosekunnissa ([ns](https://fi.wiktionary.org/wiki/nanosekunti)), koska ne kaikki ovat ihmisen aikaskaalassa se ja sama silmänräpäys.

Tietokoneelle asia on ihan erilainen. Millisekunti on miljoona nanosekuntia ja on hyvinkin merkittävää, kestääkö jonkin asian tekeminen esimerkiksi 5 ms tai 5 ns. Yksi nanosekunti on niin lyhyt aika, että valo ehtii tyhjiössä kulkea vain 30 cm sinä aikana. Sähkösignaalit tietokoneen laitteistossa kulkevat vielä hitaammin. Sen vuoksi tietokoneiden pitää olla pieniä, jos niistä halutaan nopeita!


<!-- Note: millisekunti, jne -->

<text-box variant="example" name="Milli-, mikro-, nano- ja pikosekunti">

Sekunti = 1 000 ms = 1 000 000 µs = 1 000 000 000 ns = 1 000 000 000 000 ps.
<br>
Millisekunti = 1 ms = 0.001 sekuntia = 1 000 µs = 1 000 000 000 ps.
<br>
Mikrosekunti = 1 µs = 0.000 001 sekuntia = 1 000 ns = 1 000 000 ps.
<br>
Nanosekunti = 1 ns = 0.000 000 001 sekuntia = 1 000 ps.
<br>
Pikosekunti = 1 ps = 0.000 000 000 001 sekuntia."

</text-box>

Vaikka tietokonelaitteistoja kehitetään nopeammiksi koko ajan ja nykyisetkin laitteistot ovat kovin erilaisia keskenään, niin jonkinlaisia suuntaa antavia nopeuksia voidaan silti antaa. Ajatellaan esimerkiksi tilannetta, jossa haluamme lukea muuttujan X arvon. Jos arvo on suorittimen rekisterissä, siihen voisi kulua vaikkapa 1 ns. Vastaavasti sen saantiaika välimuistista voisi olla 4 ns, keskusmuistista 50 ns, [SSD](https://fi.wikipedia.org/wiki/SSD)-muistista 100 µs, kovalevyltä 10 ms ja internetpalvelimelta [Rio de Janeirosta](https://fi.wikipedia.org/wiki/Rio_de_Janeiro) 10 sekuntia.

### Juustokakkuesimerkki
Laitteiston ja koko tietokonejärjestelmän nopeuseroja voi illustroida Teemun juustokakkuesimerkillä. Esimerkki on vähän lapsellinen, mutta koeta kestää.

<!-- juustokakku kuva ch-1-3-juustokakku -->

![Kokki, jonka kädessä on kulho ja juustoa. Aika 0.5 sekuntia (rekisteri). Pöytä, jossa on valmiina juustoa. Aika 1-2 sekuntia (välimuisti). Suljettu jääkaappi, jonka sisällä on juustoa. Aika 25 sekuntia (muisti). Saturnus-raketti nousemassa ylös ja viemässä Apollo-alusta kohti kuuta, jossa on juustoa. Aika 10 päivää (levy). SpaceX:n BRF-raketti lähtee matkalle Orion-alus nokassaan kohti Jupiterin Europa-kuuta, jossa on juustoa. Aika 4 vuotta (pilvi, ihminen).](./ch-1-3-juustokakku.svg)
<div>
<illustrations motive="ch-1-3-juustokakku" totalheight="100%"></illustrations>
</div>

Teemu on tekemässä juustokakkua ja resepti vaatii nyt juuston lisäämisen kulhoon. Jos juusto on valmiiksi kädessä, sehän tipahtaa kulhoon yhdessä sekunnissa. Jos juusto pitää noukkia pöydältä, niin siihen menee muutama sekunti. Jääkaapista juuston hakuun menee vähän enemmän aikaa, kun Teemun pitää kävellä jääkaapille, avata sen ovi, ottaa juusto, sulkea jääkaapin ovi, kävellä takaisin pöydän ääreen, avata paketti ja laittaa juusto kulhoon. Tähän voisi kulua esim. 25 sekuntia.

Jos taas Teemu oli kokonaan unohtanut juuston eikä sitä löydy kaupoistakaan, niin onneksi juustoa löytyy kuusta. Teemu lähettää astronauttikaverinsa Tiinan lentämään Amsterdamin kautta avaruusasemalle Cape Canaveraliin, jossa häntä odottaa juuri kunnostettu [Saturn V -raketti](https://fi.wikipedia.org/wiki/Saturn_V) ja [Apollo-avaruusalus](https://fi.wikipedia.org/wiki/Apollo-komento-_ja_huoltomoduuli). Tiina lentää 2-3 päivää kuuhun, hakee sieltä juuston ja palaa takaisin maan kamaralle, lentää New Yorkin kautta takaisin Suomeen ja vihdoin antaa Teemulle juuston kulhoon laitettavaksi. Tähän menisi ehkä 10 päivää. Teemu ei tietenkään vain odottele Tiinaa ja juustoa, vaan tekee paljon muuta sillä aikaa. Hän käy vaikka lomalla Roomassa, lukee kirjoja tai pelaa [_Doom_](https://fi.wikipedia.org/wiki/Doom)'in taas alusta loppuun. Juustokakkuaineksetkin laitettiin pakastimeen odottamaan.

Entä jos käy niin onnettomasti, että Tiina palaa kuusta tyhjin käsin kun sieltäkin oli juusto loppu? Nyt lähetetään Teemun toinen astronauttikaveri Arto etsimään juustoa Jupiterin [Europa](https://fi.wikipedia.org/wiki/Europa_(kuu))-kuusta. Arto on hyvää pataa [SpaceX](https://www.spacex.com/):n kanssa ja saa heiltä lainaksi [ITS](https://en.wikipedia.org/wiki/Interplanetary_Transport_System)-aluksen, joka lähetetään liikkeelle [BFR](https://en.wikipedia.org/wiki/BFR_(rocket))-raketilla. Matka kestää nelisen vuotta ja suurimpana riskinä on, että minkälaista juustoa Europa oikeastaan on. Se näyttää siniseltä, joten juusto voisi olla [Aura](https://fi.wikipedia.org/wiki/Aura_(juusto))-juustoa, mikä ei taas sovi Teemun reseptiin. Vaikeaksi menee.

### Nopeuserojen vaikutus
Juustokakkuesimerkin mukaiset valtaisat nopeuserot ovat normaaleja tietokoneissa. Konekäskyjä suoritetaan ns-aikaskaalassa ("juusto kädessä"), kun ihmisen kanssa kommunikoidaan sekunnin aikaskaalassa ("juusto Europa'ssa"). Sekunnissa on tuhat miljoonaa (1&nbsp;000&nbsp;000&nbsp;000) nanosekuntia. Yhden sekunnin aikana hyvä tietokone voi siis suorittaa miljardi konekäskyä. Jotkut tietokoneet ovat vielä nopeampia, koska ne suorittavat useaa konekäskyä samanaikaisesti. Jotkut tietokoneet ovat taas paljon hitaampia, koska se riittää niiden käyttötarkoitukseen.

Kuhunkin käyttötarkoitukseen on hyvä hankkia siihen sopiva järjestelmä. Esimerkiksi himopelaaja tarvitsee vähän paremman tietokoneen, koska pelien virtuaalitodellisuuden luominen teräväpiirtonäyttöjä varten vaatiin paljon laskentatehoa. Pelkkään tekstin käsittelyyn ja verkkosurfaukseen riittää huomattavasti pelkistetympi laitteisto. Huippunopean koneen ostaminen sähköpostin lukemista varten on rahan heittämistä hukkaan. Toisaalta, eihän ihmiset osta [Ferrareitakaan](https://fi.wikipedia.org/wiki/Ferrari) vain sen takia, että niillä voisi ajaa kovaa. Jotkut saavat hyvän mielen ihan hienon laitteiston omistamisesta. Yritysmaailmassa näin ei tietenkään toimita. Jos joku on sijoittanut 20 000€ huippunopeaan laitteistoon kun 1 000€ maksava tavallinen PC olisi riittänyt, niin se ei tiedä hyvää urakehitykselle.

Tiedon hakuaika rekisteristä ("juusto kädessä") on nanosekunnin luokkaa. Välimuistista haku ("juusto pöydältä") on vain vähän hitaampaa. Keskusmuisti ("juusto jääkaapissa") on nykykoneilla jo ärsyttävän kaukana, esimerkiksi 50-100 ns. Suoritin yleensä kuitenkin vain "hyytyy paikalleen", kun se odottaa muistista haettavaa tietoa. Jotkut suorittimet kuitenkin hyödyntävät tämänkin odotusajan suorittamalla jotain muuta ohjelmaa sillä aikaa. Tämä ei ole mitenkään yksinkertaista ja toteutetaan ns. [hypersäikeistyksellä](https://fi.wikipedia.org/wiki/Hypers%C3%A4ikeistys).

Kovalevyt ja massamuistit ovat jo tosi kaukana suorittimen näkökulmasta. Pyörivät kovalevyt ("juusto kuussa") toimivat millisekunnin aikaskaalassa, kun taas mikropiireillä toteutetut [SSD](https://fi.wikipedia.org/wiki/SSD):t ("juusto Tukholmassa") ovat jotain 100 kertaa nopeampia, mutta silti vielä yli 1000 kertaa hitaampia kuin keskusmuisti. Suorittimen ei missään tapauksessa kannata vain odotella tiedon siirtoa massamuistista, vaan sillä aikaa suoritusvuoro annetaan muille ohjelmille. Käyttöjärjestelmä siirtää tiedonsiirtoa odottavan ohjelman "nukkumaan" ja "herättää" sen sitten tiedonsiirron valmistuttua.

Internetin pilvipalvelut ja ihminen ovat sitten taas noin tuhat kertaa kovalevyä hitaampia. Ne toimivat sekuntien aikaskaalassa ("juusto Europassa"). Niitä odotellessa kyseinen ohjelma ehtii "nukkua" pitkään. Jo muutaman sekunnin odotusaikana ehtii tehdä paljon muuta, vaikkakaan kotitietokoneessa ei välttämättä ole suurta joukkoa muita ohjelmia suoritusvuoroa odottamassa. Tiedon odotusajan voi silti hyödyntää käyttöjärjestelmän ylläpidolla tai vaikkapa etsimällä älyllistä elämää [SETI\&home](https://fi.wikipedia.org/wiki/SETI@home) joukkoistetun laskennan avulla. Siihen tarvitaankin enemmän kuin muutama sekunti aikaa. Toisaalta, jos mitään muuta ei tosiaankaan ole tehtävänä, niin laitteiston pitää odottaa tekemättä mitään hyödyllistä. Tällainen odottaminenkin on aktiivista ja tarkoittaa konekäskyjen suorittamista pienessä silmukassa, jossa koko ajan kysellään, että "onks tietoo jo?".

Älä tuijota liikaa juustokakkuesimerkin numeroarvoihin. Numeroarvot muuttuvat koko ajan teknologian kehittyessä ja eri laitteistoissa on muutenkin valtavia nopeuseroja. Suuruusluokkaerot ovat tärkeitä. Nopeuskuilu rekistereiden ja muistin välillä on vain kasvanut viime vuosina. Vastaavasti nopeuskuilu muistin ja levymuistin välillä on pysynyt suunnilleen samana, mutta viime aikoina yleistynyt nopeampi SSD-muisti massamuistina muuttaa järjestelmää jonkin verran. Toisaalta taas pilvipalveluiden yleistyminen on johtanut siihen, että järjestelmän massamuisti voi olla pilvessä. Me ihmiset emme ole muuttuneet mihinkään, joten käyttäjältä vastauksen saaminen kestää edelleenkin sekunteja. Tosin graafisen käyttöliittymän kautta ihminenkin voi syöttää suuren määrän tietoa nopeasti.

### Nopeuseroihin sopeutuminen
Erilaisten muistiteknologioiden suuret nopeuserot ovat vaikuttaneet ja vaikuttavat edelleenkin tietokoneiden ja käyttöjärjestelmien kehitykseen huomattavasti. Laitteistossa automaattisesti toimivat [välimuistit](https://fi.wikipedia.org/wiki/V%C3%A4limuisti) ovat ratkaisu suorittimen rekistereiden ja keskusmuistin välisen nopeuseron tuomiiin ongelmiin. Nopeusero on vain kasvanut ja nyt välimuisteja on tehokkaissa koneissa jo kolmessa tai jopa neljässä eri tasossa. Välimuisteilla ohjelma saa käyttöönsä näennäisen muistialueen, joka on yhtä suuri kuin keskusmuisti, mutta lähes yhtä nopea kuin suorittimen rekisterit.

Vielä suurempi nopeusero keskusmuistin ja erilaisten massamuistien välillä on johtanut käyttöjärjestelmissä [virtuaalimuistin](https://fi.wikipedia.org/wiki/N%C3%A4enn%C3%A4ismuisti) kehittämiseen. Sen avulla saadaan ohjelman käyttöön näennäinen (virtuaalinen) muistialue, joka parhaimmillaan on yhtä suuri kuin massamuisti, mutta lähes yhtä nopea kuin keskusmuisti. Virtuaalimuisti nopeuttaa näin ohjelmakoodin ja ohjelman tekemien dataviittausten nopeutta huomattavasti. Tiedostojen osalta keskusmuistissa pidettävä [levyvälimuisti](https://fi.wikipedia.org/wiki/V%C3%A4limuisti) ratkoo tätä samaa ongelmaa pitämällä keskusmuistissa kopioita juuri nyt käytössä olevista massamuistin tiedostoista.

Oman tietokoneen massamuistin ja Internetissä olevien palvelimien välistä nopeuseroa kurotaan umpeen [välityspalvelimilla](https://fi.wikipedia.org/wiki/V%C3%A4lityspalvelin) (proxy). Esimerkiksi, [Los Angeles'issa](https://fi.wikipedia.org/wiki/Los_Angeles) olevan paljon käytetyn kissankuvasivuston tiedostoja voi olla valmiiksi kopioituna verkkopalvelujen tarjoajan omalle välityspalvelimelle Suomessa. Näin paljon käytettyihin kissakuviin pääsee käsiksi nopeasti ja tiedonsiirron määrä Los Angeles'ista Suomeen vähenee huomattavasti.

<!-- kuva: muistihierarkia ch-1-3-muistihierarkia-draft -->

![Kolme sisäkkäistä aluetta. Sisimpänä on laitteisto, jossa on rekisterit, muisti ja niiden välissä välimuistit. Nuoli menee muistista välimuistien läpi rekistereihin. Keskellä on järjestelmätaso, jolla on laitteisto, massamuisti ja niiden välissä käyttöjärjestelmän ylläpitämä virtuaalimuisti ja levyvälimuisti. Nuoli menee massamuistista virtuaalimuistin ja levyvälimuistin läpi muistiin. Uloin alue on internet, jossa on tämä järjestelmän, pilvipalvelu/www ja niiden välissä välityspalvelin eli proxy. Nuoli pilvipalvelusta proxyn kautta massamuistiin. Laitteiston nopeus on ns-luokkaa, järjestelmän massamuistin nopeus ms-luokkaa. Pilvipalveluiden ja muun internetin nopeus on sekuntien luokkaa.](./ch-1-3-muistihierarkia-draft.jpg)
<div>
<illustrations motive="ch-1-3-muistihierarkia-draft" frombottom="0" totalheight="70%"></illustrations>
</div>

<!-- quiz 1.3.1-11 Väitteet tietokoneen nopeudesta, etc -->

<div><quiznator id="5c50086b3972a914741025fc"></quiznator></div>
<div><quiznator id="5c500940fd9fd71425c622c7"></quiznator></div>
<div><quiznator id="5c500a1999236814c5bb830d"></quiznator></div>
<div><quiznator id="5c500ad3ddb6b814af321601"></quiznator></div>
<div><quiznator id="5c500b1b017ffc13eddc9798"></quiznator></div>
<div><quiznator id="5c500b8599236814c5bb8312"></quiznator></div>
<div><quiznator id="5c500c3414524713f95a09c0"></quiznator></div>
<div><quiznator id="5c500d0ec41ed4148d96ab79"></quiznator></div>
<div><quiznator id="5c500e15017ffc13eddc97a4"></quiznator></div>
<div><quiznator id="5c500eabddb6b814af32160d"></quiznator></div>
<div><quiznator id="5c500efe3972a91474102610"></quiznator></div>

<!-- Luvun 1 yhteenveto, mitä tuli opittua quiz 1.summary -->

### Yhteenveto
Ensimmäinen luku käsitteli tietokonejärjestelmää ja sen osia. Sen jälkeen tutustuimme ohjelman käsitteeseen ja ohjelmien erilaisiin esitysmuotoihin vain ihmisen luettavissa olevista algoritmeista numeeriseen konekieleen. Lopuksi kävimme läpi tietokonejärjestelmän valtavia nopeuseroja ja niiden vaikutuksia järjestelmän käyttöön ja toteutukseen.

Vastaa alla olevaan kyselyyn kun olet valmis ensimmäisen osan tehtävien kanssa.
<div><quiznator id="5c544eec3972a91474103008"></quiznator></div>

