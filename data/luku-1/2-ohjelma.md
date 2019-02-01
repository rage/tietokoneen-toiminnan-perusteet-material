---
path: '/luku-1/2-ohjelma'
title: 'Ohjelma'
---

<div>
<lead>Tietokone suorittaa ohjelmia sen omalla suorittimella. Mutta mikä on ohjelma? Puhekielessä ohjelma voi itse olla melkein mikä tahansa määrittely tapahtumien kululle, mutta tietokoneen suorittamalle ohjelmalle annetaan paljon tarkemmat vaatimukset. Tutustumme niihin tässä. Tarkastelemme myös (tietokone)ohjelmien erilaisia esitysmuotoja.</lead>
</div>

## Ohjelma
[Ohjelma](https://www.wikiwand.com/fi/Tietokoneohjelma) on jonkin ongelman [algoritmin](https://fi.wikipedia.org/wiki/Algoritmi) avulla kuvattu ratkaisu. Siinä on joukko askelia, jotka järjestyksessä suoritettuina antavat ongelman ratkaisun. Ruokareseptit ovat hyviä esimerkkejä algoritmeista, vaikka tietokoneet niitä yleensä eivät voi suoraan suorittaa. Robotit kyllä osaavat, mutta robotteja ohjaavat algoritmit ne vasta monimutkaisia ovatkin.

<text-box variant="example" name="Algoritmi juustokakun tekemiseksi">

1. Jauha keksit yleiskoneessa keksimuruiksi.
2. Lisää voisula ja sokeri, sekoita tasaiseksi.
3. Kaada seos voidellun vuoan pohjalle ja taputtele tasaiseksi.
4. Sekoita täytteeksi kulhossa rahka, juusto, kananmunat, sokeri ja maissisuuruste.
5. Kaada täyte vuokaan ja paista kunnes täyte on hyytynyt.
6. Nosta kakku pöydälle jäähtymään ja irroita se heti vuoan reunoista terävällä veitsellä.
7. Anna jäähtyä ennen tarjoilua.

</text-box>

Meitä kiinnostaa vain tietokoneella ratkaistavissa olevat ongelmat ja niitä ratkaisevat ohjelmat. Ongelma voi vaikkapa olla, että paljonko on 87\*555+32 tai mikä on nopein reitti ajaa polkupyörällä paikasta A paikkaan B? Ensimmäisen esimerkin ratkaisu on hyvin yksinkertainen, mutta jälkimmäinen vaatii huomattavan monimutkaisen algoritmin ja paljon dataa.

-- note: lauseke 

<text-box variant="example" name="Algoritmi lausekkeen laskemiseksi laskimella">

1. Nollaa laskimen muisti.
2. Laske 87 * 555.
3. Lisää tuloon 32.

</text-box>

-- note: pyöräilyreitti  

<text-box variant="example" name="Algoritmi nopeimman pyöräilyreitin valitsemiseksi">

1. Hae kaikki pyöräilyreitit paikasta A paikkaan B käyttäen tunnettuja katuja/teitä/pyöräteitä.
<br>&nbsp;&nbsp;&nbsp;&nbsp;(Ota mukaan vain reitit, joissa mennään koko ajan lähemmäs B:tä.)
2. Jaa kukin reitti pätkiin kadun/tien/polun/risteyksen tyypistä riippuen.
3. Laske kullekin reittipätkälle sen vaatima aika pyöräilyyn.
4. Laske kunkin reitin kokonaisaika.
5. Näytä nopeimman reitin kokonaisaika ja reitti kartalla.

</text-box>

### Kontrollin siirto
Ohjelmille on tyypillistä, että niissä on joukko peräkkäin suoritettavia enemmän tai vähemmän monimutkaisia toimintoja. Yleensä ohjelmassa suoritetaan toimintoja siinä järjestyksessä kuin ne ohjelmassa esitetään. Joissakin tapauksissa on kuitenkin tärkeää, että tästä oletusarvoisesta toimintojen järjestyksestä poiketaan. Tällaista tapahtumaa kutsutaan _kontrollin siirroksi_. Tyypillinen tapaus on _haarautuminen_, jossa tietyn ehdon vallitessa valitaan kahdesta tai useammasta vaihtoehdosta se oikea toimintojen joukko tällä suorituskerralla. Toinen tyypillinen tapaus on [toistorakenteiden](https://fi.wikipedia.org/wiki/Toistorakenne) (silmukoiden) käyttö, missä annettu joukko toimintoja suoritetaan monta kertaan kunnes jokin ehto tulee todeksi.

Kolmas hyödyllinen kontrollin siirtoon liittyvä käsite on [aliohjelma](https://fi.wikipedia.org/wiki/Aliohjelma) (funktio, metodi). Aliohjelmassa annettua joukkoa toimintoja voidaan suorittaa useammasta paikkaa ohjelmaa _kutsumalla_ kyseistä aliohjelmaa, mahdollisesti joidenkin [parametrien](https://fi.wikipedia.org/wiki/Parametri_(tietotekniikka)) kanssa. Aliohjelman kutsuminen on täsmällisesti määritelty toiminto muiden toimintojen joukossa. Parametrien avulla aliohjelman toimintaa voidaan säätää joka kutsukerralla siihen tilanteeseen sopivaksi. Aliohjelmat voivat myös palauttaa jonkin arvon kutsukohtaan, jolloin niitä sanotaan _funktioiksi_. Joissakin ohjelmointikielissä aliohjelmia tai funktioita sanotaan [metodeiksi](https://fi.wikipedia.org/wiki/Olio-ohjelmointi). Aliohjelmille on tyypillistä, että niillä on oma _laskentaympäristö_, jossa voi esimerkiksi olla aliohjelman omia tietorakenteita. Niitä voi käyttää vain tämän aliohjelman suorituksen aikana. Aliohjelmille on ominaista, että sen toimintojen loppuun suorittamisen jälkeen palataa takaisin aliohjelman kutsukohtaan. Aliohjelmaa kutsuttaessa kontrolli siirtyy sen alkuun ja aliohjelmasta palatessa kontrolli palaa aina aliohjelman kutsukohdan jälkeiseen toimintaan.

-- note: Funktio sum(table, n) 

<text-box variant="example" name="Esimerkki: Funktio Sum(Table, n)">

Funktio Sum(Table, n) palauttaa arvonaan n-alkioisen taulukon Table kaikkien n:n alkion summan. Esimerkiksi kutsu Sum(Noppa, 6)  palauttaisi taulukon Noppa kaikkien kuuden alkion arvojen summan 21 ja kutsu Sum(Palkka, 2345678) palauttaisi pienen valtion kaikkien työssäkäyvien 2345678 henkilön palkkojen summan (taulukossa Palkka) 10&nbsp;135&nbsp;676&nbsp;310,23. Samaa funktiota voi täten käyttää hyvin moneen tarkoitukseen sopivilla parametrien valinnoilla."

</textbox>
</div>

### Käyttöjärjestelmän palvelut aliohjelmina
Käyttöjärjestelmissä on useita aliohjelmia tai funktioita, joita mikä tahansa suorituksessa oleva ohjelma voi käyttää (kutsua). Ne eroavat ohjelman omista aliohjelmista siinä, että ne on suunniteltu yleiskäyttöisiksi ja helpottamaan ohjelmien toteutusta. Tällaisia palveluja ovat esimerkiksi tekstin lukeminen näppäimistöltä tai tiedoston kirjoittaminen muistitikulle. On tosi käytännöllistä, että jokaisen ohjelmoijan ei tarvitse erikseen pohtia tällaisten toimintojen yksityiskohtia. Ohjelmien (ja ohjelmoijien!) ei edes tarvitse tietää minkälainen näppäimistö tai muistitikku laitteistossa on. Ohjelma toimii myös sellaisenaan, vaikka muistitikku vaihdettaisiin kovalevyyn.

Erilaisten käyttöjärjestelmien palvelupyyntöjä kutsutaan joskus _järjestelmäkutsuiksi_, koska halutaan tehdä selkeä eri ohjelman omien aliohjelmien kutsuilla ja käyttöjärjestelmän palvelujen kutsuilla. Järjestelmäkutsuilla ohjelma siirtyy suorittamaan käyttöjärjestelmän palveluita ja sen vuoksi näiden (järjestelmä)palveluiden toteutuksen kanssa pitää olla erityisen varovainen. Kukin järjestelmäpalvelu tarkistaa kutsun yhteydessä, onko sitä kutsuneella ohjelmalla oikeus käyttää tuota palvelua. Esimerkiksi, mikä tahansa ohjelma voi kirjoittaa omia tietojaan kovalevylle, mutta mikä tahansa ohjelma ei saa fyysisesti tutkia kovalevyn sisältöä. Sen lisäksi käyttöjärjestelmä valvoo, että ohjelma saa lukea ja kirjoittaa vain sellaisia tietoja, mihin sillä on oikeus.

-- note: Ohjelman oikeudet

<text-box variant="example" name="Suoritettavan ohjelman oikeudet järjestelmässä">

Miten määräytyy, että mitä tietoja jokin ohjelma saa kovalevyltä lukea? Kun käyttäjä Tiina kirjautuu tietokonejärjestelmään, järjestelmä tunnistaa Tiinan esimerkiksi käyttäjätunnuksen ja salalauseen (pitkä salasana) avulla. Aina kun Tiina käynnistää jonkin ohjelman (esim. Peli) vaikkapa klikkaamalla sen kuvaketta, järjestelmä käynnistää kyseisen ohjelman käyttäjän Tiina oikeuksin.
<br><br>
Oletetaan, että tällä suorituskerralla ohjelma Peli haluaa lukea jonkin tiedoston (esim. Tiinan-pelitilanne). Käyttöjärjestelmä tarkistaa tiedostoa Tiinan-pelitilanne avattaessa, onko ohjelmalla Peli tällä suorituskerralla oikeus lukea kyseistä tiedostoa. Tiina oli itse luonut tiedoston pelatessaaan samaa peliä aikaisemmin, joten tiedoston omistajaksi oli merkitty Tiina. Täten kaikki Tiinan myöhemminkin käynnistämät ohjelmat saavat lukea tuota tiedostoa. Kaikki on siis hyvin ja Peli saa nyt lukea tiedostoa Tiinan-pelitilanne.
<br><br>
Koko järjestelmän luotettavuus perustuu sille, että Tiina on tunnistettu oikein. Tyypillinen tietoturvaan liittyvä hyökkäys järjestelmään tapahtuu, kun Tiina vahingossa klikkaa jotain kivaa kissakuvaa verkkoselaimella. Pelkän kuvan näyttämisen lisäksi voi nyt käynnistyä jokin haittaohjelma, joka on suorituksessa käyttäjän Tiina kaikilla oikeuksilla. Haittaohjelmalla on pääsy kaikkiin Tiinan tietoihin ja se voi esimerkiksi käyttää Tiinan osoitekirjaa lähettääkseen tietojenkalastelupyynnön kaikille Tiinan kavereille. Ja kaverithan vastaavat, kun kerran kysely tuli heidän kaveriltaan Tiinalta! Kyselyn mukana voi tutuille kulkeutua se haittaohjelmakin.
<br><br>
Omaa tietoturvaasi voi saada paremmaksi helpoillakin konsteilla. Käytä pitkiä salalauseita, äläkä käytä samaa salalausetta useassa paikassa. Oma salalause kannattaa pitää tarpeeksi pitkänä (ainakin 16 merkkiä) ja muutenkin monimutkaisena yhdistelmänä erikoismerkkejä, numeroita ja eri kokoisia kirjaimia. Älä kirjaudu eri palveluihin jonkin muun palvelun tunnuksilla. Käytä salalauseiden hallintaan salalauseholvia (sanasanaholvia), jossa itsessään on hyvin pitkä salalause. Muista kuitenkin, että mikään tietoturva ei ole täydellinen. Varaudu siis henkisesti siihen, että kaikki verkkoon laittamasi tieto voi joskus vuotaa julkiseksi.
<br><br>
Toinen hyvä konstin tietoturvan lisäämiseksi on käyttää tietokonetta yleensä tavallisena käyttäjänä eikä ylläpitäjänä. Jos kissakuvaa klikkaamalla vahingossa käynnistyy jokin haittaohjelma, on paljon mukavampaa kun se temmeltää koneellasi ainoastaan tavallisen käyttäjän oikeuksin! Ylläpitäjän oikeuksin toimiva haittaohjelma voi kirjaimellisesti tehdä tietokoneellasi ihan mitä haluaa ja siitä voi olla hyvin vaikea päästä eroon.

</text-box>

### Symbolinen konekieli, numeerinen konekieli
Tietokone osaa suorittaa ainoastaan [konekielisiä](https://fi.wikipedia.org/wiki/Konekieli) ohjelmia, jotka on suoritusaikana talletettu sen muistiin. Puhdas konekieli on pelkkiä numeroita, mikä sopii hyvin koneille mutta huonosti ihmiselle. Kustakin konekielestä on ihmisiä varten oma [symbolinen konekieli](https://fi.wikipedia.org/wiki/Assembly_(ohjelmointikieli)), joka on muistuttaa hyvin paljon kyseistä konekieltä mutta on paljon helpompi ihmisen lukea ja kirjoittaa. Lausekkeen 87\*555+32 arvon laskeva ratkaisu symbolisella konekielellä voisi olla vaikkapa:

<text-box variant="example" name="Lauseke 87*555+32 symbolisella konekielellä">

LOAD  R1, =87    ; laita rekisterin R1 arvoksi 87. R1:n vanha arvo tuhoutuu.<br>
MUL   R1, =555   ; kerro R1:n arvo luvulla 555<br>
ADD   R1, =32    ; lisää R1:n arvoon luku 32.  Vastaus on nyt rekisterissä R1.

</text-box>

Tämän on silti aika vaikeaselkoista, varsinkin jos algoritmi on vähänkin monimutkaisempi. On vaikea pitää kirjaa, mikä merkitys kullakin rekisterillä eri hetkillä on ja kaikki laskenta tapahtuu kuitenkin rekistereitä käyttäen. Konekielen numeerinen muoto on vielä vaikeampi, koska siinä on pelkkiä numeroita:

<text-box variant="example" name="Lauseke 87*555+32 numeerisella konekielellä">

35651571    ; laita rekisterin R1 arvoksi 87. R1:n vanha arvo tuhoutuu.<br>
320864811   ; kerro R1:n arvo luvulla 555<br>
287309856   ; lisää R1:n arvoon luku 32.  Vastaus on nyt rekisterissä R1.

</text-box>

Symbolinen konekieli on huomattavasti mukavampaa lukea, eikö olekin! Yleensä konekieliset ratkaisut toteutetaan käyttäen symbolista konekieltä, joka [käännetään](https://fi.wikipedia.org/wiki/K%C3%A4%C3%A4nt%C3%A4minen) (muunnetaan) numeeriseen muotoon ennen suoritusta. Symbolisen konekielen kääntäminen konekieleksi on hyvin suoraviivaista, vaikka se ei ihan triviaalia olekaan.

### Korkean tason kieli
Olisi mukavaa, jos tietokoneelle voisi antaa algoritmin missä tahansa muodossa, vaikka sanelemalla se ääneen [suomen](https://fi.wikipedia.org/wiki/Suomen_kieli) kielellä tai kirjoittamalla auki halutut toimenpiteet proosana [sanskriitin](https://fi.wiktionary.org/wiki/sanskriitti) kielellä. Käytännössä näin ei kuitenkaan tehdä, koska noilla tavoin annettujen algoritmien täsmällinen ymmärtäminen on (ainakin vielä) liian vaikeata. Algoritmien kuvauskielen on hyvä olla yleinen ja riittävän säännönmukainen, jotta sitä voidaan käsitellä koneellisesti. Symbolinen konekieli sopisi tähän, mutta se on turhan yksinkertaisella tasolla, jotta sen avulla olisi järkevää toteuttaa suuria ohjelmistoja. Symbolisessa konekielessä on lisäksi huono ominaisuus, että sen avulla esitetyt ohjelmat ovat suoritettavissa ainoastaan juuri sitä konekieltä käyttävissä tietokoneissa.

Ohjelmat toteutetaan ([ohjelmoidaan](https://fi.wikipedia.org/wiki/Ohjelmointi)) yleensä tätä varten suunnitelluilla korkean tason [ohjelmointikielillä](https://fi.wikipedia.org/wiki/Ohjelmointikieli). Ne ovat riittävän säännönmukaisia, jotta niillä kirjoitetut ohjelmat on helppo tai ainakin mahdollista muuttaa automaattisesti tietokoneella suoritettavaan muotoon. Tällaisia kieliä ovat esimerkiksi [Java](https://fi.wikipedia.org/wiki/Java), [C](https://fi.wikipedia.org/wiki/C_(ohjelmointikieli)), [C++](https://fi.wikipedia.org/wiki/C%2B%2B), [Scheme](https://fi.wikipedia.org/wiki/Scheme), [Prolog](https://fi.wikipedia.org/wiki/Prolog), [Python](https://fi.wikipedia.org/wiki/Python_(ohjelmointikieli)) ja [SQL](https://fi.wikipedia.org/wiki/SQL). Vanhimpia käyttökelpoisia korkean tason ohjelmointikieliä olivat 1950-luvulla julkaistut [Fortran](https://fi.wikipedia.org/wiki/Fortran) ja [ALGOL](https://fi.wikipedia.org/wiki/ALGOL). Fortran on edelleenkin käytössä, vaikka sitä on vuosien saatossa kehitetty huomattavasti.

Osaat ehkä jo itsekin jotain korkean tason kieltä. Esimerkiksi, yllämainitun lausekkeen ratkaisu on Javalla, C'llä, Fortran'illa, ALGOL'illa ja Schemellä vähän erilainen:

<text-box variant="example" name="Lauseke 87*555+32 Javalla tai C'llä">

X = 87\*555+32;   &nbsp;&nbsp;&nbsp;&nbsp; -- vastaus on nyt muuttujan X arvona

</text-box>

<text-box variant="example" name="Lauseke 87*555+32 Fortran'illa tai ALGOL'illa">

X := 87\*555+32;   &nbsp;&nbsp;&nbsp;&nbsp; -- vastaus on nyt muuttujan X arvona

</text-box>

<text-box variant="example" name="Lauseke 87*555+32 Schemellä">

(+ (* 87 555) 32) &nbsp;&nbsp;&nbsp;&nbsp; -- vastaus on nyt ulomman lausekkeen arvona

</text-box>

Ratkaisujen ohjelmointi korkean tason kielellä on paljon lähempänä ihmisen omaa ajattelumallia ja sen vuoksi ainakin aluksi helpompia toteuttaa kuin (symbolisella) konekielellä kirjoitetut ohjelmat. Ohjelmia voi kirjoittaa myös symbolisella konekielellä, mutta se vaatii niin konekielen kuin sitä suorittavien suorittimien täsmällistä tuntemista. Yleensä käyttöjärjestelmän alimmat suoritinsidonnaiset osat tehdään (symbolisella) konekielellä, kun muu käyttöjärjestelmä ja tavallinen ohjelmointi toteutetaan korkean tason kielillä.

Ohjelmoinnin ammattilaiset osaavat useita ohjelmointikieliä, koska ongelman ratkaisu voi olla helpompi kuvata tietyllä ohjelmointikielellä kuin jollain toisella. Joskus kannattaa käyttää Prologia, kun taas joku toinen ongelma tai ongelman osa voi olla kätevämpää ratkaista C:llä tai C++'lla. Tämä on vähän sama asia kuin se, että ranskan kieli on kuulemma erittäin hyvä rakkauden asioihin, kun suomen kieli taas on hyvä kiroilemiseen. Ilmankos meillä suomalaisilla on joskus ongelmia rakkauden suhteen. Olisiko parempi käyttää aika ranskan kielen opiskeluun Pythonin asemesta?

### Ohjelman esitystavan muunnokset
Ohjelmointi tehdään yleensä **korkean tason kielellä**. Tuloksena syntynyt ohjelma talletetaan **massamuistiin**, jossa sitä voidaan säilyttää ilman sähkövirtaa. Suoritusaikana ohjelman pitää olla kuitenkin **konekielisessä** muodossa talletettuna haipuvaan mutta nopeaan **keskusmuistiin**.

Tarvitsemme esitystavan muunnoksen korkean tason kielestä konekieleen. Muunnos tehdään vaiheittain. Ensin ohjelma [käännetään](https://fi.wikipedia.org/wiki/K%C3%A4%C3%A4nt%C3%A4minen) konekieliseen muotoon. Sitten siihen [linkitetään](https://en.wikipedia.org/wiki/Linker_(computing)) (yhdistetään) muita itse tehtyjä ohjelman osia tai valmiina eri kirjastoissa olevia ohjelmien osia eli kirjastomoduuleita.

-- kuva: käännös, linkitys, ch-1-2-kaannos-linkitys 
![Kolme isoa laatikkoa, jotka kuvaavat kaikki massamuistin sisältöä. Vasemman puolimmainen laatikko esittää korkean tason kielistä esitystä ja siinä on kolme moduulia, Compute, Print ja Math. Kun ne käännetään, niistä saadaan keskimmäisen laatikon konekieliset esitykset moduuleille Compute, Print ja Math. Kirjastomoduuli Math voi olla siellä jo valmiinakin konekielisessä muodossa. Kun nämä kolme moduulia linkitetään yhteen, saadaan oikeanpuoliseen laatikkoon ohjelma P konekielisessä muodossa yhtenä latausmoduulina.](./ch-1-2-kaannos-linkitys.svg)
<div>
<illustrations motive="ch-1-2-kaannos-linkitys" frombottom="0" totalheight="100%"></illustrations>
</div>

Lopuksi ohjelma [ladataan](https://en.wikipedia.org/wiki/Loader_(computing)) konekielisessä muodossa tietokoneen muistiin ja sen suoritus voi alkaa. Näin tapahtuu esimerkiksi, kun klikkaat tietokoneen näytöllä jotain [kuvaketta](https://fi.wikipedia.org/wiki/Kuvake) (ikonia). Tällöin kyseisen ohjelman valmiiksi linkitetty konekielinen esitysmuoto ladataan massamuistista keskusmuistiin suoritusta varten. Joissakin tapauksissa kuvake voi esittää tiedostoa (esim. _cute-cat.jpg_, jolloin kuvaketta klikkaamalla aukeaa kyseistä tiedostoa käsittelevä ohjelma (esim. _Paint_) ja kyseinen tiedosto on ohjelmassa valmiiksi avattuna.

-- kuva: lataus, ch-1-2-lataus
![Yksinkertainen esimerkkijärjestelmä, jossa Suoritin, muisti ja massamuisti ovat yhdistettynä väylään. Massamuisti on yhdistetty väylään laiteohjaimen kautta. Massamuistissa olevasta ohjelma P:stä menee nuoli muistissa olevaan prosessiin P1, joka sisältää P1:n koodin, datan ja muut tiedot.](./ch-1-2-lataus.svg)
<div>
<illustrations motive="ch-1-2-lataus" frombottom="0" totalheight="100%"></illustrations>
</div>

Kääntäjät, linkittäjät ja lataajat ovat ihan tavallisia ohjelmia ja ne sisältyvät käyttöjärjestelmän peruspalikoihin. Ohjelman lataaminen massamuistista muistiin suoritusta varten on itse asiassa vähän monimutkaisempaa kuin miltä se ehkä kuulostaa. Se ei ole pelkkää konekielisen koodin kopiointia, vaikkakin sekin pitää tietenkin tehdä. Jokaista ohjelman suorituskertaa varten käyttöjärjestelmä luo ohjelmasta suorituskelpoisen [prosessin](https://fi.wikipedia.org/wiki/Prosessi_(tietotekniikka)), jolle varataan tarvittavat muistialueet ja muut järjestelmän resurssit. Prosessi on siis ohjelman suoritusaikainen esitysmuoto. Samasta ohjelmasta voi olla yhtäaikaa monta prosessia suoritettavana. Esimerkiksi jokainen näytöllä oleva selaimen ikkuna on oma prosessinsa samasta selain-ohjelmasta.

### Tulkittavat ohjelmointikielet
Jotkut ohjelmointikielistä ovat ns. tulkittavia kieliä. Se tarkoittaa, että niillä kirjoitettuja ohjelmia ei käännetäkään suorituksen tekevän tietokoneen omalle konekielelle vaan ne annetaan jollekin toiselle ohjelmalle (tulkille) suoraan tai vähän muokattuna syötteenä. Esimerkkinä tällaisesta tulkittavasta korkean tason ohjelmointikielestä on [Python](https://fi.wikipedia.org/wiki/Ohjelmointikielen_tulkki). Python-tulkki on tässä tilanteessa se varsinainen tietokoneella suoritettava ohjelma ja sinun Pythonilla kirjoittama ohjelmasi vain tekstimuotoista dataa (syötettä) Python-tulkille. Python-tulkki taas on ihan tavallinen (esim.) C'llä kirjoitettu ohjelma. Tosin on olemassa myös Python-tulkki [PyPy](https://www.wikiwand.com/fi/PyPy), joka on kirjoitettu Pythonilla itsellään! Sehän on vähän sama kuin että ranskan kielen oppikirja olisi kirjoitettu vain ranskan kielellä ilman mitään sanastoa. Ei ihan helppoa!

-- kuva Python ohjelma, tulkki, tietokone, ch-1-2-python-tulkki
![Yksinkertainen esimerkkijärjestelmä. Suoritin, muisti ja massamuisti ovat yhdistettynä väylään. Massamuisti on yhdistetty väylään laiteohjaimen kautta. Massamuistissa on suoritettava Python-ohjelma P sen tekstuaalisessa esitysmuodossa. Siellä on myös Python-tulkki konekielisessä esitysmuodossa. Lataamalla ohjelma Python-tulkki muistiin saadaan suorituksessa oleva prosessi PythonTulkki, jolle on annettu myös muistiin kopioitu ohjelma P datana.](./ch-1-2-python-tulkki.svg)
<div>
<illustrations motive="ch-1-2-python-tulkki" frombottom="0" totalheight="100%"></illustrations>
</div>

Toinen esimerkki tulkin käytöstä on Java-ohjelmien kääntäminen ns. [tavukoodiksi](https://fi.wikipedia.org/wiki/Tavukoodi) (byte-code), jota voi sitten suorittaa tulkitsemalla Java-virtuaalikoneessa ([JVM](https://en.wikipedia.org/wiki/Java_virtual_machine)). Javan tavukoodi on hypoteettisen (ei todellisen, suunnitellun?) tietokoneen (JVM) konekieltä, mikä on hyvin erilaista kuin järjestelmän oman suorittimen konekieli. JVM:lle ei voi antaa siinä suoritettavaa ohjelmaa suoraan Javalla kirjoitettuna, vaan suoritettava Java-ohjelma on aina ensin käännettävä tavukoodiksi.

On olemassa tavukoodikääntäjiä myös muille ohjelmointikielille (esimerkiksi Python'ille), jolloin niilläkin kirjoitetut ohjelmat voidaan suorittaa JVM:ssä. Yhden ohjelman eri osat voi täten olla helposti toteutettuna juuri niihin osiin parhaiten sopivilla ohjelmointikielillä. Tässäkin tilanteessa varsinainen suorituksessa oleva ohjelma on JVM, joka lukee tavukoodia syötteenään.

Java-virtuaalikoneen (JVM) voi toteuttaa myös muilla tavoin kuin tulkitsemalla. Yksi tapa on tavukoodin kääntäminen suoraan järjestelmän omalle konekielelle. Toinen tapa on sellaisen suorittimen toteuttaminen, joka tavallisten konekäskyjen lisäksi osaa suorittaa myös tavukoodin käskyjä konekäkyinä. Emme käsittele näitä tapoja tällä kurssilla sen enempää.

-- kuva Java ohjelma, tavukoodi, JVM, ch-1-2-JVM
![Yksinkertainen esimerkkijärjestelmä. Suoritin, muisti ja massamuisti ovat yhdistettynä väylään. Massamuisti on yhdistetty väylään laiteohjaimen kautta. Massamuistissa on tekstuaalisessa muodossa Java-ohjelma P, josta kääntämällä saadaan massamuistiin Java-ohjelma P tavukoodina. Massamuistissa on myös konekielinen JVM. JVM ladataan muistiin, jolloin siitä tulee prosessi JVM. Muistiin kopioidaan myös tavukoodinen Java-ohjelma P, joka syötetään datana JVM:lle.](./ch-1-2-JVM.svg)
<div>
<illustrations motive="ch-1-2-JVM" frombottom="0" totalheight="100%"></illustrations>
</div>

Tulkittavia ohjelmointikieliä moititaan usein hitaiksi, koska niillä kirjoitettuja ohjelmia pitää suorittaa yksi käsky kerrallaan tulkin kautta. Tämä syö aika paljon laskentatehoa, kun jokaista tulkittavaa käskyä varten pitää suorittaa monta todellista konekäskyä. Se ei kuitenkaan välttämättä haittaa, koska tulkittavat ohjelmat voivat hyödyntää valmiiksi ohjelmoituja nopeita kirjastomoduuleita. Kirjastomoduulien koodi on puhdasta konekieltä, eikä sitä tarvitse tulkita. Jos pääosa ohjelman tekemästä laskennasta tapahtuu näissä nopeissa kirjastomoduleissa, niin muiden osien hitaampi suoritus tulkitsemalla ei vaikuta kokonaisaikaan paljoakaan.

Vaikka järjestelmässä suoritettaisiin missä tahansa muodossa olevaa ohjelmaa, niin todellisuudessa ollaan aina suorittamassa jotain tietokoneen omaa konekielistä koodia. Keskitymme jatkossa tällaisen konekielisen ohjelman suoritukseen, oli ohjelma sitten vaikkapa käyttäjän itse tekemä sovellus, Python-tulkki tai Javan tavukoodia tulkitseva JVM. Huomiomme kohteena on jatkossa vain sellaiset ohjelmat, joiden esitysmuoto suoritusaikana on tietokoneen oma konekieli.

<!-- quiz 1.2.1-6 Onko tämä ohjelma -->
<div><quiznator id="5c4f06fdfd9fd71425c61f43"></quiznator></div>
<div><quiznator id="5c4f076714524713f95a05ec"></quiznator></div>
<div><quiznator id="5c4f07c7017ffc13eddc93e1"></quiznator></div>
<div><quiznator id="5c4f083ac41ed4148d96a7c4"></quiznator></div>
<div><quiznator id="5c4f0891017ffc13eddc93e4"></quiznator></div>
<div><quiznator id="5c4f08fd99236814c5bb7f4e"></quiznator></div>
