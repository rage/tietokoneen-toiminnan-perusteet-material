---
path: '/luku-2/3-konekaskyt'
title: 'Konekäskyt'
---

<div>
<lead>Tässä osiossa tutustumme tarkemmin konekäskyihin. Selvitämme mm., mitä ominaisuuksia konekäskyissä on ja minkälaisia konekäskyjä suorittimissa voi olla. Esittelemme samalla myös (lukun) esimerkkitietokoneen ttk-91 käskyistä ja annamme esimerkkejä (symbolisesta) konekielisestä koodista.</lead>
</div>

## Konekäskykanta
Suorittimen kaikki konekäskyt yhdessä muodostavat sen konekäskykannan, joka on käyttöliittymä suorittimella tapahtuvaan laskentaan. Laskenta tapahtuu suorittimen rekistereiden välillä ja konekäskyissä yleensä nimetään kaikki sen käyttämät rekisterit.

### Rekistereiden lukumäärä konekäskyssä
Yksi tapa luokitella konekäskykantoja perustuu siihen, kuinka monta operandia konekäskyjen aritmetiikkaoperaatioissa voi nimetä. Joissakin tapauksissa riittää yhden operandin nimeäminen. Tällöin toinen operandi ja tulos ovat aina yksi ja sama oletusarvoinen "akkurekisteri". Sen arvo tulee väkisten tuhottua operaation aikana, koska uusi tulos kirjoitetaan samalle paikalle akkurekisteriin.

Useissa konekielissä käskyssä voi aritmetiikkaoperaatioissa nimetä kaksi operandia. Toinen niistä on samalla tulosrekisteri. Tässäkin tapauksessa on se huono piirre, että toinen operandi tuhoutuu käskyn suorituksen aikana. Hyvänä ominaisuutena on kuitenkin se, että näissä prosessoreissa on useampi rekisteri, joten ongelma ei ole niin suuri.

Nykyisissä konekielissä on yleistä, että operandeja on aritmetiikkaoperaatioissa nimetty kolme kappaletta ja ne ovat kaikki rekistereitä. Näin kummankaan operandin arvoa ei tarvitse tuhota, ellei sitä erityisesti haluta nimeämällä tulosrekisteri samaksi kuin toinen operandirekistereistä. Nämä suoritinarkkitehtuurit ova yleensä ns. _load-store arkkitehtuureja_, joissa muistiviittauksia tekevät käskyt eivät tee samalla aritmeettis-loogisia operaatioita.

On myös määritely konekäskykantoja, joissa aritmetiikkaoperaatioissa ei ole nimetty lainkaan rekistereitä. Tuollaiset koneet ovat ns. _pinokoneita_, joissa laskenta tapahtuu _pinoa_ käyttäen. Pinon voi mieltää pöydällä olevaksi korttipakaksi. Operandit löytyvät pinon pinnalta ja tulos talletetaan myös pinoon. Esimerkiksi yhteenlaskun yhteydessä pinosta poistetaan (päältä) kaksi arvoa operandeiksi, arvot lasketaan yhteen ja tulos talletetaan pinoon päällimmäiseksi. Pino on talletettu muistiin ja sen pinnalle osoittaa sisäinen pinorekisteri (SP, Stack Pointer). Korttipakkaesimerkkiä käyttäen yhteenlaskussa otamme pinon pinnalta kaksi korttia (ruutu 5 ja hertta 3) ja laitamme takaisin niiden arvojen summan (pata 8). Esimerkki ei toimi, jos pinon pinnalla on vain kuvakortteja, koska pelikorttien arvoalue on niin pieni.

Esimerkkikoneessa ttk-91 voi yhdessä konekäskyssä nimetä kaksi operandia, joista ensimmäinen on aina rekisteri. Toinen operandi voi olla joku rekisteri, se voi olla vakio, tai se voidaan määritellä näiden yhdistelmänä. Se voi olla myös muistissa, kuten seuraavassa on tehty.

Load-store arkkitehtuurin koodissa on paljon konekäskyjä, mutta sen suoritus voi olla hyvin nopeaa. Itse laskenta on erikseen muistioperaatioista ja siinä on myös riittävästi rekistereitä koodin suoritusnopeuden optimoimiseksi. Fiksu suoritin voisi lukuta noutaa A:n ja B:n arvot osittain samanaikaisesti muistista, koska käskyt ovat täysin riippumattomia toisistaan.

<!-- esimerkki Yhteenlasku eri tyyppisillä suorittimilla -->

```
Yhteenlasku eri tyyppisillä suorittimilla

Laske C=A+B, kun A, B ja C ovat muuttujia muistissa eri 
tyyppisillä suorittimilla. Operandien lukumäärä 
ADD-käskyssä on 0, 1, 2 tai 3.

Pinokone   Akkurek.    Ttk-91        Load-store
(0 oper.)  (1 oper.)   (2 oper.)     (3 oper.)

push A     load  A     load  r4,A    load  r10,A
push B     add   B     add   r4,B    load  r11,B
add        store C     store r4,C    add   r12,r10,r11
pop C                                store r12,C
```

Olisi mukava, jos nopeita rekistereitä olisi paljon, koska tiedot löytyisivät tällöin usein mahdollisimman nopeasti. Suuri määrä rekistereitä kuitenkin tarkoittaa, että tarvitsemme enemmän bittejä niiden osoittamiseen konekäskyissä. Jos rekistereitä on 16, niin neljä bittiä riittää rekisterin osoitteeksi. Toisaalta, 128 rekisterille tarvitaan jo 7 bittiä niiden osoittamiseen. Tuolloin kolmen rekisterin nimeämiseen kuluu jo 21 bittiä, mikä tekee konekäskyistä ehkä turhan pitkiä. Usein rekistereitä on 16-32 kappaletta kutakin eri tyyppiä, jolloin yhden rekisterin nimeämiseen riittää 4-5 bittiä konekäskyissä.

Esimerkkikoneessa ttk-91 on 8 rekisteriä, joten niiden nimeämiseen konekäskyssä tarvitaan 3 bittiä. Konekäskyssä voi viitata kahteen rekisteriin.

### Muistiinviittaustavat
Konekäskyssä tarvitaan jonkinlaisia tapoja viitata muistiin. Korkean tason kielissä usein käytetyt tietotyypit vaativat erilaisia viittaustapoja. Yleisiä tietotyyppejä korkean tason kielissä ovat muuttujat, vakiot ja 1-, 2- tai 3-ulotteiset taulukot. Sellaisia ovat myös _tietueet_ tai _oliot_, joissa on erilaisia kenttiä. Usein tieto on myös esitetty epäsuorasti, jolloin tietorakenteessa ei olekaan itse tietoa, vaan ainoastaan osoite tietoon.

<!-- Note: tietue ja olio -->

<text-box variant="example" name="Tietueet ja oliot">
  
Tietue on esimerkki rakenteisesta tiedosta. Esimerkiksi harrasteseuran jäsenrekisteri voisi koostua tietueista, joista kukin kertoo yhden jäsenen tiedot. Kullakin tietueella on sama rakenne ja se sisältää samat (tieto)kentät. Tällaisia kenttiä olisivat esimerkiksi jäsenen nimi, osoite ja puhelinnumero.
<br><br>
Olio on kehittyneempi muoto tietueesta. Siellä on tiedon lisäksi myös kokoelma metodeja (aliohjelmia, funktioita), joiden avulla olion tietoja voidaan lukea ja muokata. Tyypillisesti olion tietoja voi lukea tai kirjottaa vain sen omien metodien kautta. Tämä tekee helpommaksi ja luotettavammaksi olion tietojen käytön, kun kaikki samaa tietoa käsittelevä koodi on keskitetty yhteen paikkaan. Koodausvirheiden havaitseminen on helpompaa verrattuna tilanteeseen, jossa samaa tietoa käsiteltäisiin siellä täällä esimerkiksi 40000 koodirivin ohjelmistossa. Jos harrasteseuran jäsenrekisteri toteutettaisiin oliona (esim. JäsR), niin jäsenten tiedot olisivat olion sisäisiä tietorakenteita ja niitä pääsisi käyttämään ainoastaan olion metodeja kutsumalla. Tällaisia metodeja olisivat esimerkiksi JäsR.UusiJäsen(), JäsR.LueOsoite() ja JäsR.MuutaOsoite() avulla.

</text-box>

Olisi mukavaa, jos tietoon useimmiten pystyisi viittaamaan yksinkertaisesti yhden käskyn sisältä jotain muistinviittaustapaa käyttäen. Aina tämä ei ole mahdollista. Tällöin viitattu muistiosoite lasketaan ensin johonkin rekisteriin suorittamalla usea konekäsky ja sitten vihdoin itse muistiviite voidaan toteuttaa yhdellä konekäskyllä tuon rekisterin kautta. Tyypillisesti näin tehdään vaikkapa viitatessa 3-ulotteisen taulukon alkiohin, koska juuri missään suorittimessa ei ole valmista muistinviittaustapaa 3-ulotteisille taulukoille.

Viitattu tieto voivat sijaita tietyssä muistiosoitteessa, joten konekäskyssä olisi mukava olla suoraan paikka tuolle osoitteelle. Joissakin korkean tason kielissä (esim. C) on _pointtereita_ eli _osoitinmuuttujia_, jotka eivät sisällä itse tietoa vaan ainoastaan tiedon osoitteen muistissa. Tietoon viitatessa pitää ensin hakea muistista pointterin arvo ja vasta sitten sen avulla hakea muistista laskennassa tarvittava data. Kyseessä on tällöin _epäsuora muistiviite_. Useissa korkean tason ohjelmointikielissä (esim. Java) taas ei tietoisesti ole pointereita, koska niiden käyttö on vaativaa ja johtaa helposti ohjelmointivirheisiin.

Usein osoite voi olla suhteellinen jonkin rekisterin suhteen. Viitatun tiedon osoite saadaan nyt laskemalla yhteen tuon rekisterin ja jonkin vakion arvot yhteen. Tällaista kutsutaan _indeksoiduksi tiedonosoitukseksi_. Esimerkiksi 1-ulotteisten taulukoiden tapauksessa tuo vakio voi olla taulukon alkuosoite muistissa ja rekisterin arvo kyseisen taulukon _indeksi_. Toisaalta taas tietueen tai olion tapauksessa rekisterissä on yleensä tietueen tai olion muistiosoite, ja vakiona on viitatun kentän suhteellinen osoite tietueessa tai oliossa. On hyvin käytännöllista, että samalla tiedonosoitustavalla voidaan ratkaista kahden hyvin yleisen mutta silti erilaisen tietorakenteen käyttö. Lähes kaikissa suorittimissa on indeksoitu tiedonosoitus käytettävissä.

Muistiosoitteen laskennassa voidaan myös käyttää useampaa rekisteriä ja näin viitata esimerkiksi 2-ulotteisen taulukon alkioon hyvin helposti. Tällainen tiedonosoitustapa on kuitenkin nykyään harvinainen, koska se on niin monimutkainen muihin tapoihin verrattuna. Yksinkertaisien konekäskyjen suoritusnopeus on helpompi optimoida kuin monimutkaisten tiedonosoitustapojen.

Esimerkkikoneessa ttk-91 on kolme tiedonosoitustapaa ja ne perustuvat kaikki indeksoituun tiedonosoitukseen. Ensin lasketaan ohjelman käyttämä "muistiosoite" laskemalla yhteen käskyssä oleva vakio ja käskyssä olevan _indeksirekisterin_ arvo. Jos "osoite" löytyy suoraan indeksirekisteristä, niin vakioksi laitetaan nolla. Jos "osoitteeksi" haluttiin on pelkästään käskyssä oleva vakio, niin tämä on koodattu käskyyn laittamalla indeksirekisteriksi R0. Indeksirekisteriä R0 ei tämän vuoksi voi käyttää indeksointiin.

Ttk-91:n suorittimella on kolme vaihtoehtoista tapaa saada jälkimmäinen operandi edellä lasketun "muistiosoitteen" avulla ja ne valitaan 2-bittisen _tiedonosoitusmoodin_ avulla. Moodin arvo 0 (_välitön tiedonosoitus_) tarkoittaa, että tuo äsken laskettu "muistiosoite" on sellaisenaan toinen operandi, eikä mitään muistiviitettä tarvita. Moodin arvo 1 (_suora muistiviite_) tarkoittaa, että muistisoitetta käytetään yhden kerran operandin hakemiseksi muistista. Moodin arvo 2 (_epäsuora muistiviite_) tarkoittaa, että ensin haetaan muistista edellä laskettua muistiosoitetta käyttäen toisen operandin osoite ja vasta sitten haetaan muistista tuta osoitetta käyttämällä jälkimmäinen operandi.

```
Ttk-91 symbolisen konekielen tiedonosoitusmoodit

Oletetaan, että kaikissa käskyissä alkuaan rekisterin r1 arvo 
on 3, rekisterin r2 arvo on 10, muistipaikan mem(17) arvo on 45, 
ja että muistipaikan mem(45) arvo on 88.

               op.koodi tul.rek. moodi ind.rek. vakio  tulos
load r1, r2      -- 2      1        0     2        0    r1 <- 10
load r1, =7      -- 2      1        0     0        7    r1 <- 7
load r1, =7(r2)  -- 2      1        0     0        7    r1 <- 17
load r1, 7(r2)   -- 2      1        1     0        7    r1 <- 45
load r1, @7(r2)  -- 2      1        2     0        7    r1 <- 88
store r1, 7(r2)  -- 1      1        0     0        7  mem(17) <- 3
```

Moodi kertoo siis muistista _lukujen_ lukumäärän käskyn suoritusaikana. Käskyä muistista noudettaessahan tuli jo yksi muistiviite. Muistiin kirjoituskäskyn (STORE) yhteydessä moodikentän arvo on yhtä pienempi kuin vastaavassa muistin lukukäskyssä (LOAD) ja sillä tarkoitetaan aina suoraa tai epäsuoraa muistiviitettä. Käskyn suoritusaikana STORE-käskyssä tulee lopuksi aina yksi muistiin _kirjoitus_.

### Konekäskyjen pituus ja muoto
Vaihtelevasta konekäskyjen pituudesta on se hyöty, että eri käskyillä voi olla erilaisia kenttiä. Esimerkiksi pelkästään rekistereiden välillä operoiva konekäsky ei tarvitse vakio-kenttää, mutta muistinviittauksen yhteydessä vakiokentästä taas olisi hyötyä. Joissakin tapauksissa vakiokenttä voisi olla kovinkin lyhyt (esim. 8 bittiä), kun taas muistisoitteiden tapauksissa se voisi olla jopa 32-bittinen tai pidempikin. Vaihtelevasta konekäskyjen pituudesta on kuitenkin myös haittaa. Käskyjen nouto muistista on vaikeata, kun ei heti tiedetä mitenkä monta tavua tarvitsee noutaa. Tavujen määrä selviää vasta kun operaatiokoodi on ensin haettu muistista. Tämän vuoksi nykyään yleensä käytetään usein vain vakiomittaisia konekäskyjä.

Konekäskyjä voi olla useata eri muotoa. Absoluuttinen hyppykäsky ei tarvitse operaatiokoodin lisäksi kuin hyppyosoitteen. Muistiviittauskäskyt voivat käyttää erilaisia muistinviittausmuotoja, joista jotkut käyttävät rekistereitä apunaan ja jotkut eivät. Aritmeettis-loogisissa operaatioissa voidaan tarvita yksi, kaksi tai kolme nimettyä rekisteriä. Yleensä konekäskyn muoto määräytyy suoraan sen operaatiokoodin perusteella, mutta joissakin konekielissä jokaisen operandin muoto voi määräytyä erikseen.

Esimerkkikoneen ttk-91 kaikki konekäskyt ovat 32-bittisiä ja niillä on kaikilla sama muoto: operaatiokoodi 8 bittiä, operandi/tulosrekisteri 3 bittiä, tiedonosoitusmoodi 2 bittiä, indeksirekisteri 3 bittiä ja vakiokenttä 16 bittiä. Tiedonosoitusmoodin käyttö voi tuntua aluksi sekavalta, mutta käytännön ohjelmoinnissa eri tiedonosoitusmoodeja tarvitaan kokoa ajan. Tällä kurssilla emme perehdy varsinaiseen konekieliseen ohjelmointiin muutamaa triviaalia esimerkkiä enempää.

```
Esimerkki: Ttk-91 symbolisen konekielen käskyjen koodaus

                  op.koodi tul.rek. moodi ind.rek. vakiokenttä
                  
    -- Hae X:n arvo muistista rekisteriin r1.
    -- Muuttujan X osoite on sama kuin symbolin X arvo.
load r1, X         2 (load)     1      1     0     X:n osoite 

    -- Lisää r2:n arvoon 6
add  r2, =6        17 (add)     2      0     0     6

    -- Kerro r4:n arvo muistissa olevan taulukon Tbl alkion i arvolla,
    -- kun i on r1:n arvo.
    -- Taulukon Tbl osoite on sama kuin symbolin Tbl arvo.
mul  r4, Tbl(r1)   19 (mul)     4      1     1     Tbl:n osoite

    -- Jaa r3:n arvo luvulla, jonka osoite on muistissa 
    -- osoitinmuuttujan ptrX arvona.
    -- Osoitinmuuttujan ptrX osoite on sama kuin symbolin ptrX arvo.
div  r3, @ptrX     20 (div)     3      2     0     ptrX:n osoite

    -- Hyppää osoitteeseen loop, jos r2:n arvo on <0.
    -- silmukan loop osoite on sama kuin symbolin loop arvo
jpos  r2, loop     35 (jpos)    2      0     0     loop'in osoite

    -- Talleta r2:n arvo muistissa olevan muuttujan Y arvoksi.
    -- Muuttujan Y osoite on sama kuin symbolin Y arvo.
store r2, Y        1 (store)    2      0     0     Y:n osoite 
```

### Tiedon tyypit
Tietokone lukua (tietenkin) käsitellä kaiken tyyppistä tietoa. Suoritin ymmärtää kuitenkin vain muutamaa tietotyyppiä, joita varten on omat konekäskynsä. Kaikki muu tieto pitää kuvata näiden muutaman tietotyypin avulla. Sellaisen tiedon käsittely tapahtuu ohjelmallisesti, yleensä kutakin tietotyyppiä varten erikseen suunniteltujen aliohjelmien avulla.

_Kokonaisluvut_ ovat yleensä kaikissa suorittimissa. Useissa on kokonaislukuja muutamaa eri pituutta, esimerkiksi 8-, 16-, 32  ja 64-bittisiä. On ehkä yllättävää, että kaikki tietokoneella ratkaistavissa olevat ongelmat voidaan ratkaista pelkästään kokonaislukujen avulla. Se ei ole kuitenkaan yksinkertaisin tai tehokkain tapa.

Missään suorittimessa ei ole realilukuja. Esimerkiksi, piin tarkka arvo vaatisi äärettömän suuren muistialueen. Sen sijaan suorittimissa käytetään _liukulukuja_, jotka ovat realilukujen kiinteän mittaisia likiarvoja. Liukulukuja on tyypillisesti kahta eri pituutta, 32- ja 64-bittisiä. Esimerkiksi, pii voitaisiin esittää tällöin likiarvona 3.1415927 tai 3.1415926535897931. Kaikissa suorittimissa ei ole edes liukulukuja, koska yksinkertaisissa laitteissa ei ole tarvetta sen tyyppiselle laskennalle.

Joissakin (vanhemmissa) suorittimissa on tietotyyppi _totuusarvo_ (tosi ja epätosi). Nykyään totuusarvoja käsitellään bitteinä, jolloin tosi on koodattu lukuna 1 ja epätosi lukuna 0. Bittejä käsitellään raakadatan bittioperaatioilla (ks. alla).

Vanhemmissa suorittimissa saattoi olla myös tietotyypit _merkeille_ ja _merkkijonoille_. Huonona puolena tässä oli, että koko järjestelmän piti rajoittua johonkin tiettyyn merkkien ja merkkijonojen esitystapaan. Nykyään käytössä on useita eri merkistöjä. Niiden merkit on koodattu kokonaislukujen avulla ja niitä käsitellään kokonaislukuina.

Kaikki tieto esitetään suorittimella loppujen lopuksi bitteinä, ja suorittimissa on yleensä myös tällainen raakadatan bittiesitysmuoto. Niillä käsitellään tietoa bitteinä riippumatta siitä, mitä nuo bitit tarkoittavat. Joissakin tapauksissa esimerkiksi kokonaislukuja voi olla järkevää käsitellä pelkästään niiden esitysmuodossa bitteinä kuin kokonaislukuina.

Käsittelemme eri tyyppisten tietojen esitystapoja tarkemmin seuraavassa luvussa.

Esimerkkitietokoneessa ttk-91 on vain 32-bittisiä kokonaislukuja ja bittiesitysmuodon 32-bittisiä sanoja.

## Konekäskyt
Käskykannassa on kullekin suorittimen ymmärtämälle tietotyypille sen ominaiset perusoperaatiot. Jos samasta tietotyypistä (esim. kokonaisluvut) on olemassa eri pituisia muotoja (esim. 8-, 16-, 32 ja 64-bittiä), niin tiedon pituus tulee koodata jollain tavoin. Pituus voi olla koodattu omalla operaatiokoodilla tai lisämääreellä. Lisäksi suorittimella on sekalainen joukko konekäskyjä suorittimen yleishallintoon ja käyttöjärjestelmän toimintojen tukemiseen.

### Aritmetiikkakäskyt
Aritmetiikkakäskyissä on mukana aina yhteenlasku, vähennyslasku ja kertolasku. Usein siellä on myös jakolasku, mutta ei aina. Joskus jakolasku toteutetaan kertomalla jaettava jakajan käänteisluvulla, koska se voi olla nopeampaa. Kokonaislukujen jakolaskusta voi tulla talteen myös jakojäännös, mutta usein se pitää kaivaa esiin omalla modulo-konekäskyllä (esim., MOD-käsky).

Liukuluvuille on omat vastaavat konekäskynsä. Niiden toteutus on jonkin verran monimutkaisempaa kuin kokonaislukujen käsittely ja ne käyttävät yleensä niille varattuja liukulukurekistereitä.

<!-- Koodiesimerkki (ei ttk-91) -->

```
Esimerkki: yhteenlasku eri tyyppisillä tiedoilla (ei ttk-91)

Laske C=A+B, kun A, B ja C ovat muuttujia muistissa
samalla suorittimella. Kustakin muuttujasta on kolme
versiota. Muuttuja iA on kokonaisluku, fA on
32-bittinen liukuluku, dA on 64-bittinen liukuluku, jne.

kokon.luvuilla  liukuluvuilla  64-bitt. liukuluvuilla

load  r1,iA      load f1,fA       dload f2,dA
load  r2,iB      load f2,fB       dload f4,dB
add   r3,r1,r2   fadd f3,f1,f2    dfadd f6,f2,f4
store r3,iC      store f3,fC      dstore f6,dC
```

64-bittiset rekisterit muodostetaan usein yhdistämäällä kaksi peräkkäistä 32-bittistä rekisteriä. Esimerkin 64-bittiset liukuluvut on talletettu kahteen peräkkäiseen 32-bittiseen liukulukurekisteriin. Muuttujan dA 64-bittinen arvo ladataan rekisteriin f2-f3, jne.

Ttk-91:ssä on vain kokonaislukujen konekäskyt ADD, SUB, MUL, DIV ja MOD. Siinä ei ole käskyjä liukulukujen käsittelyyn ja sen käskyssä voi nimetä vain kaksi rekisteriä.

<!-- Note: matem historia, kertolasku, Fibonacci, helmitaulun algoritmi -->

<text-box variant="example" name="Kertolaskun historiaa">

Kertolasku on monimutkaisin operaatio, minkä suoritin pystyy tekemään. Sen monimutkaisuutta ei kannata väheksyä, vaikka olet itse oppinut sen tekemään jo koulussa. Kokonaislukujen kertolasku oli vielä 800 vuotta sitten niin haastavaa, että sen tekemiseen palkattiin ulkopuolinen konsultti. Hänellä oli käytössään useimmiten helmitaulu (abacus) ja siihen sopiva algoritmi. Ongelmana oli, että lukujen esityksessä käytetty menetelmä (esim. roomalaiset numerot) sopi hyvin lukujen tallentamiseen mutta ei niillä laskemiseen. Konsultti muutti luvut ensin helmitaululle sopivaan muotoon, ratkaisi ongelman ja antoi lopulta asiakkaalle tuloksen hänen ymmärtämässään muodossa.
<br><br>
Tilanne muuttui radikaalisti 10-järjestelmän keksimisen jälkeen. Fibonacci toi sen vuonna 1202 Eurooppaan kirjassaan Liber abaci. Uusi merkintätapa oli helposti opittavissa ja nyt kuka tahansa saattoi oppia aika yksinkertaiset algoritmit peruslaskutoimituksien tekemiseen noita samoja numeroita käyttäen. Kertakaikkiaan nerokasta!
<br><br>
Tilanne on nyt vähän samanlainen kuin 800 vuotta sitten, mutta helmitaulun asemesta käytetään tietokonetta. Asiakkaat antavat konsulttiyritykselle ratkaistavan tehtävän tekstinä. Ohjelmoijat suunnittelevat ongelman ratkaisun tietokoneohjelmaksi. Tietokone suorittaa binäärimuotoisen algoritmin asiakkaan antamia lähtötietoja käyttäen. Lopulta ratkaisu annetaan asiakkaalle tekstinä ja 10-järjestelmän lukuina. Ohjelmoijien ratkaisevat ongelmat ovat nykyään tietenkin aika lailla monimutkaisempia kuin kertolasku. Asiakkaan ei kuitenkaan edelleenkään tarvitse ymmärtää, kuinka ohjelmoija tai tietokone ongelman oikeastaan ratkaisee.

</text-box>

### Bittioperaatiot
Bittien käsittelyä varten mukana on yleensä ainakin loogiset operaatiot AND, OR, XOR ja NOT. NOT-käskyllä on vain yksi operandi ja se komplementoi jokaisen bitin. Muilla käskyillä on kaksi operandia ja ne tekevät valitun loogisen-operaation pareittain jokaiselle operandien bitille. AND-operaation tulos on 1 (tosi), jos molemmat vastaavat bitit ovat 1, ja muutoin tulos on 0. OR-operaation tulos on 1, jos jompi kumpi tai molemmat operandibiteistä on 1, ja muutoin tulos on 0. XOR-operaatio on mielenkiintoisempi. Lyhenne XOR tulee sanasta "exclusive or". XOR-operaation tulos on 1, jos jompi kumpi mutta ei molemmat operandibiteistä on 1, ja muutoin tulos on 0. Toisin sanoen, XOR on 1, jos operandit ovat erilaisia.

<!-- esimerkki bittioperaatioista -->

```
Esimerkki: bittioperaatiot

operaatio: A and B   A or B   A xor B  not A
A:          1100      1100     1100    1100
B:          0101      0101     0101
tulos:      0100      1101     1001    0011
```

Bittikäskyt tekevät siis loogiset operaatiot _kaikille_ operandien biteille pareittaijn. Ne sopivat kuitenkin myös käsittelemään _loogisia muuttujia_, joissa on vain yksi bitti käytössä. Tällöin esimerkiksi 32-bittisen muuttujan Flag arvo on talletettu vain yhteen bittiin ja loput bitit ovat aina nollia.

<!-- Note: xor-operaatio salakirjoituksen apuna -->

<text-box variant="example" name="Xor-operaatio salakirjoituksen apuna">
  
Xor-operaatiota käytetään paljon salakirjoituksessa. Ajatellaan vaikkapa tilannetta, jossa lähetettävänä on salattava viesti APUA, joka käytössä olevan merkkikoodiston (UTF-8) mukaan on bitteinä 01000001_01010000_01010110_01000001. Artolla ja Beritillä on yhdessä sovittu salainen merkkijonoavain 5821, joka on bitteinä  00110011_00111000_00110010_00110001. Arto salakirjoittaa viestin tekemällä operaation APUA xor 5821. Tuloksena on bitit 01110010_01101000_01100100_01110000, mikä vastaa merkkejä rhdp. 
<br><br>
Arto lähettää Beritille salakirjoitetun merkkijonon rhdp, josta kukaan ulkopuolinen ei saa selvää. Berit purkaa salakirjoituksen tekemällä uuden xor-operaation, rhdp xor 5821, jonka tuloksena on bittijono 01000001_01010000_01010110_01000001 eli alkuperäinen viesti APUA. Berit rientää apuun ja Arto on pelastettu!
<br><br>
Tämä ns. symmetrinen salakirjoitus perustuu xor-operaation ominaisuuteen, jossa kaksi xor-operaatiota samalla operandilla (avaimella 5821) kumoavat toisensa. Tällaista symmetristä salakirjoitusavainta (sama avain Artolla ja Beritillä) käytetään sinunkin pankkiyhteyksien turvaamisessa, mutta vain osana laajempaa järjestelmää.

</text-box>

Bittejä käsitellään myös erilaisilla bittien siirtokäskyillä. Niissä yleensä siirretään rekisterissä olevia bittejä vasemmalle (SHL, shift left) tai oikealle (SHR, shift right) haluttu määrä. Siirron yhteydessä bittejä täytetään oikealta tai vasemmalta nollilla. Oikealle tapahtuvan normaalisiirron lisäksi usein on myös SHRA-käsky (shift right arithmetic), jossa nollan asemesta täytetäänkin vasemmalta alkuaan vasemmanpuolimmaista bittiä. Kokonaislukujen esitystavoissa etumerkki on tiedon vasemmanpuolimmainen bitti, joten SHRA-käsky säilyttää kokonaisluvun etumerkin. Tästäkin on hyötyä tietyissä ohjelmointiongelmissa!

Ttk-91:ssä on bittien siirtokäskyt SHL, SHR ja SHRA.

### Kontrollin siirtokäskyt
Kontrollinsiirtokäskyillä voidaan (ehdollisesti) muuttaa oletusarvoista käskyjen virtaa, jossa seuraavaksi suoritettava käsky on aina edellisen perässä muistissa. Tyypillisesti tällaisia käskyjä ovat ehdottomat [hyppykäskyt](https://fi.m.wikipedia.org/wiki/Hyppyk%C3%A4sky) ja ehdolliset haarautumiskäskyt. Ehto voi määräytyä suoraan jonkun rekisterin perusteella vertaamalla sen arvoa nollaan. Esimerkiksi käsky voi olla _jneg r1, negat_. Se haarautuu osoitteeseen _negat_, jos rekisterin r1 arvo on negatiivinen. Toisaalta haarautuminen voi perustua aikaisemmin suoritettuun vertailukäskyyn (esim. _comp r1, r2_), jonka tulos on talletettu tilarekisteriin. Tällainen käsky voisi olla vaikkapa _jnles loop_. Se haarautuu, jos aikaisemman vertailun tulos oli "isompi tai yhtäsuuri" eli "ei pienempi".

Kaikki [silmukat](https://fi.wikipedia.org/wiki/Toistorakenne) toteutetaan myös edellämainituilla ehdottomilla hyppykäskyillä ja ehdollisilla haarautumiskäskyillä. Vaikka korkean tason kielissä on monenlaisia silmukoita (for, while, do-until), niin konekielessä niitä on vain kahta lajia. Silmukan loppumistestaus pitää tehdä joko ennen silmukan runkoa tai sen jälkeen. Silmukka toteutetaan korkean tason kielen semantiikan (merkityksen) mukaiseksi, joten esimerkiksi C-kielessä testi on ennen silmukan runkoa ja Fortranissa rungon jälkeen. Fortran-ohjelmissa silmukan runko suoritetaan aina vähintään yhden kerran.

<!-- for loop  esimerkki -->

```
Esimerkki: for-silmukka

For-loop C-kielen semantiikalla (testi silmukan alussa)

for (i=0; i<n; i=i+1) {         load   r1, =0     ; r1 on i
    tbl[i] = 0;            loop comp   r1, n      ; kaikki tehty? 
    }                           jnles  done       ; poistu, jos valmista
                                load   r2, =0     ; alusta Tbl[i]
                                store  r2, tbl(r1)
                                add    r1, =1     ; seuraava i
                                jump   loop
                           done ...
```

[Aliohjelmat](https://fi.wikipedia.org/wiki/Aliohjelma), funktiot ja metodit ovat ohjelmoijan perustyökaluja ohjelmoinnissa. Niitä kutsutaan tässä kaikki yleisnimellä "aliohjelma". CALL-käskyllä kontrolli siirretään aliohjelmaan, eli se toimii ehdottoman hyppykäskyn tavoin ja aiheuttaa haarautumisen annettuun aliohjelmaan. Haarautumisen lisäksi se muuttaa laskentaympäristön aliohjelman omaan ympäristöön ja tallettaa paluuosoitteen johonkin. Esimerkiksi, aliohjelmassa voi olla omia muuttujia, jotka ovat käytettävissä vain aliohjelman suorituksen aikana. EXIT-käsky suorittaa paluun takaisin kutsun tehneeseen rutiiniin, kutsua seuraavaan konekäskyyn. Se myös palauttaa laskentaympäristön ennalleen.

<!-- funktion kutsu esimerkki  -->

```
Esimerkki: funktion kutsu

C-kieli               konekieli

x = sum(y, z);        push  sp, y    ; laita parametrin y arvo pinoon
                      push  sp, z    ; laita parametrin z arvo pinoon
                      call  sp, sum  ; kutsu fuktiota Sum
                      pop   sp, r1   ; ota funktion paluuarvo pinosta
                      store r1, x    ; talleta paluuarvo muuttujan x arvoksi
```

Käyttöjärjestelmän palvelupyynnöt (SVC, supervisor call) ovat hyvin samankaltaisia aliohjelmakutsujen kanssa, mutta kuitenkin vähän erilaisia. Suorittimen suoritustila muuttuu etuoikeutetuksi ja kutsun yhteydessä täytyy tarkistaa, onko ohjelmalla oikeus kutsua tätä palvelua vai ei. Palvelusta palataan lopulta omalla paluukäskyllä (esim. IRET, interrupt return).

<!-- svc kutsu -->

```
Esimerkki: svc kutsu

C-kieli         konekieli

print(x);       load  r1, x      ; laita tulostettava arvo rekisteriin r1
                svc   sp, =print ; kutsu käyttöjärjestelmäpalvelua Print
```

Ttk-91:ssä on ehdoton hyppykäsky JUMP. Siellä on myös rekisterin nolla-arvoon vertailuun perustuvat haarautumiskäskyt JNEG, JZER, JPOS, JNNEG, JNZER ja JNPOS. Siellä on kahden operandin vertailukäsky COMP tilanteisiin, jossa vertailun kohde on nollasta poikkeava.  Vertailun tulokseen perustuva haarautumiskäskyt ovat JLES, JEQU, JGRE, JNLES, JNEQU ja JNGRE. Nämä haarautumiset vaativat siis aina kahden konekäskyn suorittamisen.

Ttk-91:ssä on aliohjelmia ja käyttöjärjestelmän palvelupyyntöjä varten CALL, EXIT ja SVC-käskyt. Mitään IRET-käskyä ei ole, koska määrittely ei ole täydellinen. Aliohjelmia ei käsitellä tällä kurssilla tämän enempää.

### I/O-käskyt
I/O-laitteiden käyttö on vaikeata, koska siinä pitää synkronoida toiminta suorittimen ulkopuolisen laitteen kanssa. Yleensä sen tekevät vain käyttöjärjestelmän laiteajurit etuoikeutetussa tilassa. Yksinkertaisille laitteille voi olla omat (etuoikeutetut) konekäskynsä I/O:n tekemiseen. Monimutkaisempien I/O-laitteiden kontrollointia I/O-laitteen oma muisti näkyy keskusmuistin tavoin ohjelman käyttämässä muistiavaruudessa. Laiteajuri voi sitten kirjoittaa sinne dataa ja komentoja sekä lukea laitteen tilatietoa tavallisilla load/store-käskyillä. Emme käsittele I/O:n toteutusta tämän tarkemmin tällä kurssilla.

Ttk-91:ssä on IN-käsky tiedon lukemiseen näppäimistöltä ja OUT-käsky tiedon kirjoittamiseen näytölle. Näitä voi käyttää tavallisessa suoritustilassa, koska ttk-91:ssä ei muita suoritustiloja ole edes määritelty.

<!-- IO käsky esimerkki  -->

```
Esimerkki: I/O-käsky

C-kieli       konekieli

Print(x);     load  r1, x    ; laita tulostettava arvo rekisteriin r1
              out   r1, =crt ; tulosta r1 arvo näytölle konekäskyllä out
```

### Erityiskäskyt
Suorittimella on lisäksi sekalainen joukko suorittimen ja järjestelmän hallintaan liittyviä konekäskyjä. Useissa suorittimissa on erikoinen käsky NOP (no operation), mikä ei nimensä mukaisesti tee mitään. Se kuitenkin haetaan käskyjen nouto- ja suoritussyklissä normaalisti, joten se kuluttaa aikaa. Jossain tapauksissa tämä on helpoin tapa rytmittää asioita oikein.

Suorittimissa voi olla rekisterissä olevien 1-bittien lukumäärän laskemiskäsky, jota tarvitaan joidenkin salakirjoitusjärjestelmien yhteydessä tai niiden murtamiseen. Suorittimissa voi olla (etuoikeutettuja) käskyjä eri välimuistien tyhjentämiseen. Omia käskyjä on myös kanta- ja rajarekistereiden lukemiseen ja asettamiseen, samoin kuin muidenkin sisäisten muistinhallintarekistereiden käsittelyyn.

Ttk-91:ssä on NOP-käsky. Siinä ei ole muita erityiskäskyjä, koska määrittely ei ole täydellinen.

-- erityiskäskyesimerkki

```
Esimerkki: NOP-käsky

C-kieli           konekieli

if (x<y)                 load r1, x    -- onko x<y?
  y = x;                 comp r1, y
                         jnles  jatka  -- ei ole, ohita store
                         store r1, y
                  jatka  nop           -- nop-käskyyn voi hypätä
```

### Symbolisen konekielen kääntäjän ohjauskäskyt, valekäskyt
Ohjelmien symbolisen konekielisessä esitystavassa on suorittimen konekäskyjen lisäksi mukana myös kääntäjän ohjauskäskyjä. Niiden avulla ilmaistaan mm. tilanvarauksia muuttujille ja muille tietorakenteille sekä nimiä halutuille vakioarvoille. Näitä kutsutaan joskus myös _valekäskyiksi_, koska ne näytävät tavallisilta käskyiltä, mutta niistä ei tule mitään suoritettavaa konekäskyä. Ne vaikutus on ohjelman kääntämisen ja latauksen aikana.

Ttk-91:ssä on muuttujan tai vakion tilanvarauskäsky DC (data constant), joka varaa tilaa muuttujalle ja antaa sille alkuarvon. Toinen tilanvarauskäsky DS (data segment) on taulukoiden ja tietueiden tilanvarausta varten. Sen avulla varataan tilaa yhdellä kertaa useampi sana, mutta varattu tila pitää itse alustaa koodissa. Jollekin vakioarvolle (esim. luku 20) voi antaa nimen (esim. LKM) valekäskyllä EQU. Symbolisessa konekielessä on ihan sama, käyttääkö koodissa jotain symbolia tai sen arvoa.

<!-- ttk91 ohjelmaesimerkki -->

```
Ttk-91 ohjelmaesimerkki

Laske taulukon tbl alkioiden arvojen summa muuttujan sum arvoksi. Tulosta 
muuttujan sum arvo.

                   -- tilanvaraukset
sum    dc    0        -- määr. ja varaa tilaa muuttujalle sum, alkuarvo 0
                      -- symbolin sum arvo on muuttujan sum osoite
tbl    ds   20        -- määrittele ja varaa tilaa 20-alkioiselle 
                      -- taulukolle tbl.
                      -- symbolin tbl arvo on taulukon ensimmäisen 
                      -- alkion tbl[0] osoite
lkm    equ  20        -- määrittele symboli lkm, jolla arvo 20

start  ...            -- aloita ohjelman suoritus
       ...            -- alusta taulukko tbl jollain tavalla

                      -- alusta summan laskeminen
      load r3, =lkm      -- r3=raja-arvo, aseta arvo  (välitön tied.os.)
      load r2, =0        -- r2=indeksi i, alkuarvo 0  (välitön tied.os.)
      load r1, =0        -- r1=summa, alkuarvo 0      (välitön tied.os.)
                      -- vertaa ja laske summaa
loop  comp r2, r3        -- vertailun tulos tilarekisteriin (väl. tied.os.)
      jeq done           -- poistu silmukasta lopuksi       (väl. tied.os.)
      add r1, tbl(r2)    -- lisää tbl[i] summaan           (suora muistiv.)
                      -- seuraava alkio
      add r2, =1         -- lisää indeksiin r2 luku 1   (välitön tiedonos.)
      jump loop          -- palaa testaamaan            (välitön tiedonos.)
                      -- tallenna ja tulosta summa
done  store r1, sum      -- tallenna summa muuttujaan sum  (suora muistiv.)
      load  r4, sum      -- lue r4:ään muuttujan sum arvo  (suora muistiv.)
      out   r4, =crt     -- tulosta r4:n arvo näytölle   (välitön tied.os.)
                      -- lopeta ohjelman suoritus
      svc   sp, =halt    -- kutsu käyttöjärj.palv. 11    (välitön tied.os.)
```

<!-- Note: Ttk-91 simulaattori Titokone  -- onko OK laittaa näkyville? Entä TitoTrainer?  -->

<text-box variant="example" name="Titokone">
  
Titokone on kevällä 2004 Helsingin yliopistossa opiskelijoiden harjoitustyönä toteuttama ohjelmisto, jonka avulla voidaan kääntää ja suorittaa symbolisella konekielellä kirjoitettuja ohjelmia Auvo Häkkisen vuonna 1991 opetuskäyttöä varten määrittelemälle ttk-91 tietokoneelle. Titokone-ohjelmistoon sisältyy symbolisen konekielisen ohjelmoinnin ohjelmistonkehitysympäristö sekä suorituksen simulaattori ja animaattori.
<br><br>
Titokone löytyy verkkosivulta https://www.cs.helsinki.fi/group/titokone/. Helpoin tapa ajaa Titokonetta on tallettaa verkkosivulta löytyvä jar-tiedosto (titokone-1.203.jar) omalle koneellesi ja avata se. Verkkosivulta löytyy myös Titokoneen käyttöohjeet. Valmiita esimerkkejä ttk-91 symbolisen konekielen ohjelmista löytyy verkkosivulta http://www.cs.helsinki.fi/group/nodes/kurssit/tito/esimerkit.
<br><br>
Tällä kurssilla ei mitenkään edellytetä konekielisen ohjelmoinnin harjoittelua Titokoneella. Se voi kuitenkin olla hauskaa, kuten kaikki muukin ohjelmointi. Malta kuitenkin jatkaa kurssin läpikäyntiä, äläkä jää huvittelemaan Titokoneen kanssa.

</text-box>

<!-- quiz 2.3.1-13 Väitteet konekäskyistä -->

<div><quiznator id="5c5035183972a91474102696"></quiznator></div>
<div><quiznator id="5c50359d99236814c5bb83b5"></quiznator></div>
<div><quiznator id="5c50360bddb6b814af32168a"></quiznator></div>
<div><quiznator id="5c503684017ffc13eddc9835"></quiznator></div>
<div><quiznator id="5c5036e514524713f95a0a5d"></quiznator></div>
<div><quiznator id="5c50372bfd9fd71425c62364"></quiznator></div>
<div><quiznator id="5c50378a99236814c5bb83c0"></quiznator></div>
<div><quiznator id="5c50381e99236814c5bb83c6"></quiznator></div>
<div><quiznator id="5c50388f3972a914741026a9"></quiznator></div>
<div><quiznator id="5c50392addb6b814af321696"></quiznator></div>
<div><quiznator id="5c5039833972a914741026ae"></quiznator></div>
<div><quiznator id="5c503a0f017ffc13eddc9851"></quiznator></div>
<div><quiznator id="5c503a5e14524713f95a0a72"></quiznator></div>
