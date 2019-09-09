---
path: '/luku-1/1-mika-on-tietokone'
title: 'Tietokone'
hidden: false
---

<div>
<lead>
Tässä ensimmäisessä luvussa selvitämme, mikä tietokone on ja minkälaisia osia siihen voi kuulua. Kerromme myös, mikä on tietokoneen suorittama ohjelma ja missä muodossa se on tietokoneessa. Lopuksi tarkastelemme tietokonelaitteiston käsittelemiä valtavia nopeuseroja ja niiden vaikutusta tietokoneiden toimintaan.
<br><br>
Lähtötietoina kurssin osallistujilta oletetaan, että heillä olisi karkeasti ottaen ainakin peruskoulu suoritettuna loppuun. Olisi myös suotavaa, mutta ei pakollista, että opiskelijoilla olisi jotain ohjelmointikokemusta. Konekieliseen ohjelmointiin liittyvät esimerkit on tällöin helpompi ymmärtää. Oppimateriaalissa on runsaasti linkkejä, joita seuraamalla löytyy tausta- tai lisätietoja kulloinkin käsittelyssä olevaan aihepiiriin. Linkkien seuraamista ei mitenkään edellytetä, vaan kaikki kurssin sisältöön liittyvä materiaali on tässä aineistossa.
<br><br>
</lead>
</div>

## Tietokone
Tietokoneita on hyvin erilaisia. Kaikille tuttuja esimerkkejä tietokoneista ovat [pöytäkoneet](https://fi.wikipedia.org/wiki/P%C3%B6yt%C3%A4tietokone), [läppärit](https://fi.wikipedia.org/wiki/Kannettava_tietokone) ja [tabletit](https://fi.wikipedia.org/wiki/Taulutietokone). Mutta myös [älypuhelimet](https://fi.wikipedia.org/wiki/%C3%84lypuhelin), [navigaattorit](https://fi.wikipedia.org/wiki/GPS-navigointilaite) ja erilaiset urheilukellot ovat tietokoneita. Kodin pöydällä oleva sisä- ja ulkolämpötilan näyttävä lämpömittari voi olla tietokone, kun taas sen ulkona oleva anturi ei sellainen ole. Toisaalta taas, lämpömittari voi paremminkin olla ns. [sulautettu järjestelmä](https://fi.wikipedia.org/wiki/Sulautettu_j%C3%A4rjestelm%C3%A4), jossa  tietokone on vain tapa toteuttaa toimintalogiikka [mikropiirien](https://fi.wikipedia.org/wiki/Mikropiiri) asemesta. Tässä  mielessä älypuhelinkin on sulautettu järjestelmä. Sen voi mieltää olevan myös ihan täysverinen tietokone, koska siihen voi käyttäjä ladata suoritettavaksi uusia ohjelmia. Suuria  sulautettuja järjestelmiä ovat esimerkiksi pankkiautomaatit, matkustajalentokoneiden ohjausjärjestelmät ja voimalaitosten kontrollijärjestelmät. Tällaisten järjestelmien päätarkoitus ei ole tiedon prosessointi, vaan tietokone on ainoastaan pienehkö mutta tärkeä osa kokonaisjärjestelmää.

<!-- Kuva:  ch-1-1-erilaiset-tietokoneet -->

![Kahdeksan erilaista tietokonekuvaa: läppäri, älypuhelin, urheilutietokone, playstation,  tablettipelikone, auton navigaattori, digikamera. Lopuksi Applen älypuhelin, tabletti, pöytäkone ja läppäri.](./ch-1-1-erilaiset-tietokoneet.svg)
<div>
<illustrations motive="ch-1-1-erilaiset-tietokoneet" frombottom="0" totalheight="100%"></illustrations>
</div>

Mikä tekee jostain laitteesta tietokoneen? Yleisesti ottaen tietokone on mikä tahansa laite, joka käsittelee tietoa oman ohjelmansa mukaisesti. Siinä pitää olla jonkinlainen [suoritin](https://fi.wikipedia.org/wiki/Suoritin), jolle voidaan antaa haluttu ohjelma suoritettavaksi. Suotavaa olisi, että suoritettavaa ohjelmaa pitäisi pystyä vaihtamaan. Suoritettavan ohjelman vaihto voi tapahtua helposti ohjelman kuvaketta klikkaamalla läppärillä, tai se voi olla huollossa tehtävä toimenpide, kuten esimerkiksi urheilukellojen ohjelmiston päivitys. Kuvaketta klikkaamalla pyydetyn suoritettavan ohjelman vaihdon tekee tietokoneen [käyttöjärjestelmä](https://fi.wikipedia.org/wiki/K%C3%A4ytt%C3%B6j%C3%A4rjestelm%C3%A4), joka huolehtii myös kaikesta muusta järjestelmän ylläpidosta. Käyttöjärjestelmään sisältyy monia apuohjelmia, jotka tekevät tietokoneen käyttämisestä helpompaa. Käyttöjärjestelmä myös piilottaa varsinaisen laitteiston ohjelmilta ja käyttäjiltä. Tämä tekee ohjelmien tekemisestä helpompaa, kun ei tarvitse murehtia eri laitteistojen yksityiskohdista.

<!-- Quiz 1.1.1-8 Onko tämä tietokone -->
<div> <quiz id="42876626-2a58-41c0-848a-22055b7b2f2e"> </quiz> </div>
<div> <quiz id="2b527d6f-1b92-4da1-8db7-dd898255c316"> </quiz> </div>
<div> <quiz id="70a9c72c-47b5-427a-8070-399cd69bd914"> </quiz> </div>
<div> <quiz id="304a554c-1ebc-45a2-81e8-f6f1577c5e79"> </quiz> </div>
<div> <quiz id="60717959-3d62-44e1-9bfd-315178d30d24"> </quiz> </div>
<div> <quiz id="67f7f15e-422c-475b-892e-352a9c8ffb65"> </quiz> </div>
<div> <quiz id="60065050-3d1e-4199-8838-311aac605a0b"> </quiz> </div>
<div> <quiz id="5aad6cd8-39b6-4d52-ab6e-2e5ea9f9c3bf"> </quiz> </div>

## Tietokoneen osat
Minkälaisia laitteita tietokoneessa on? Tietokoneen osat voi karkeasti ottaen jakaa kolmeen luokkaan: laitteiston sisäiset osat tai laitteet, muiden tietokoneiden kommunikoivat laitteet ja ihmisen kanssa kommunikoivat laitteet. Ainoastaan _suoritin_ ja _muisti_ ovat välttämättömiä, ja kaikkia muita laitteita kutsutaan sen vuoksi yleisnimellä _oheislaite_. Eri tietokoneissa on vain niiden omiin käyttötarkoituksiin sopivat osat ja osien välinen tiedonsiirto on toteutettu erilaisten väylien kautta. Väylät taas ovat pohjimmiltaan joukko sähköjohtoja, joiden kautta tieto kulkee ykkösinä ja nollina.

<!-- Kuva: ch-1-1-tietokonejarjestelma -->

![Tietokonelaitteisto harmaalla taustalla. Sen yläosassa oheislaitteet käyttäjälle: näppäimistö, kosketusnäyttö, kuulokkeet, peliohjain. Näistä kaikista on nuolet ylhäällä olevalle käyttäjälle. Tietokonelaitteistossa oikealla on emolevy, jossa on suoritin, muisti ja väylät. Siihen on kytketty massamuistit, joista esimerkkkinä kovalevy. Siihen on kytketty myös langaton verkkosovitin, josta on yhteys Internetiin.](./ch-1-1-tietokonejarjestelma.svg)
<div>
<illustrations motive="ch-1-1-tietokonejarjestelma" frombottom="0" totalheight="100%"></illustrations>
</div>

Tietokonejärjestelmän suoritin on sen aivot. Se osaa toteuttaa naurettavan yksinkertaisia konekäskyjä, mihin kaikkien ohjelmien suoritus perustuu. Monimutkaisin asia, minkä suoritin (ja tietokone) osaa tehdä, on kertolasku. Kaikki vaikeammat tehtävät tehdään yhdistelemällä näitä yksinkertaisia konekäskyjä sopivalla tavalla. On usein vaikea ymmärtää ja uskoa, kuinka "tyhmä" tietokone oikeastaan on. Järjestelmien käyttäjille näkyvä tietokoneen "viisaus" onkin vain laitteistossa suoritettavan ohjelman ominaisuus. Tämä ei mitenkään sulje pois sitä, etteikö tietokoneen laitteisto olisi nerokkaasti suunniteltu. Laitteisto vaan nyt ei ole (ainakaan vielä) mitenkään älykäs, vaan pelkästään yksinkertaisia käskyjä toteuttava kone.

Suorittimen sisällä on pienehkö hyvin nopea muisti, jonka alkioita kutsutaan rekistereiksi. Siellä on tyypillisesti muutama kymmen tai satakunta rekisteriä eri tyyppisille tiedoille. Rekistereitä ei voi olla kovin monta, koska pieneen määrään rekistereitä on helpompi ja nopeampi viitata kuin suureen määrään. Pienessä porukassa henkilöt voidaan nimetä pelkän etunimen "Matti" perusteella ja asiat voi hoitaa helposti puhumalla. Isossa joukossa Matteja voi olla useita, jolloin pitää kertoa, että haluaa puhua (huutaa?) nimenomaan Jokisen Matille. Oikean Matin löytäminen väkijoukosta voi myös kestää paljon kauemmin kuin lähipiiristä.

Laitteistossa on aina jonkinlainen muisti (ns. [keskusmuisti](https://fi.wikipedia.org/wiki/Keskusmuisti)), jossa on suoritettava ohjelma ja kaikki ohjelman käyttämä tieto (data). Nykyisissä koneissa sekä ohjelma että sen käyttämä data ovat nopeusvaatimusten takia samassa muistissa. Ensimmäinen suomalainen tietokone [ESKO (Elektroninen SarjaKOmputaattori)](https://fi.wikipedia.org/wiki/Suomen_ensimm%C3%A4iset_tietokoneet#ESKO) oli erityisen hidas, koska sen ohjelmat luettiin hitailta reikänauhoilta vaikka ohjelman käyttämä data oli nopeammassa rumpumuistissa.

Järjestelmään kuuluu yleensä aina jokin [massamuisti](https://fi.wikipedia.org/wiki/Massamuisti), jossa tiedot säilyvät ilman sähkövirtaa. Kun virrat kytketään päälle, järjestelmä alustetaan massamuistissa olevien tietojen avulla. Samassa massamuistissa voi olla tallessa myös kaikki järjestelmän käyttäjien tiedot ja ohjelmien ohjelmakoodit. Massamuisti voi olla esimerkiksi [kovalevy](https://www.wikiwand.com/fi/Kiintolevy), [SSD-levy](https://fi.wikipedia.org/wiki/SSD), [USB-muistitikku](https://fi.wikipedia.org/wiki/USB-muisti) tai vähintään jokin vain luettava [ROM-muisti](https://fi.wikipedia.org/wiki/Lukumuisti). Joidenkin hyvin pienten tai erikoislaitteiden yhteydessä massamuistiksi voi riittää järjestelmän sisäinen pienehkö ROM-muisti, mutta tuolloin massamuistiin ei voi tallettaa mitään tietoja. 

<!-- Kuva: ch-1-1-muisti-koodi-data -->

![Kaksi laatikkoa ja alla joukko samansuuntaisia viivoja, jotka muodostavat väylän. Oikea laatikko on iso muisti, jossa on ohjelman koodi ja data. Vasen laatikko on suoritin, jossa on pieni muistialue rekisterit. Suoritin ja muisti on yhdistetty väylällä, jossa on kimppu sähköjohtoja. Kukin johdin on kuvassa viivana.](./ch-1-1-muisti-koodi-data.svg)
<div>
<illustrations motive="ch-1-1-muisti-koodi-data" frombottom="0" totalheight="100%"></illustrations>
</div>

### Haipuva keskusmuisti ja hitaampi massamuisti
Tietokoneen (keskus)muistille on tyypillistä, että se on toteutusmekanisminsa vuoksi haipuvaa, jolloin tieto häviää muistista virran katkettua. Tämä on tosi harmillista, koska siihen pitää varautua jollain tavoin koko ajan. Kun tietokone suljetaan, sen tärkeät tiedot talletetaan ensin kovalevylle tai muuhun massamuistiin ja sitten vasta pistetään virrat pois. Vastaavasti tietokoneen käynnistämisen yhteydessä pitää tarvittavat tiedot kopioida massamuistista keskusmuistiin, ennen kuin tietokone on käytettävissä. Käynnistämisen yhteydessä ladataan myös käyttöjärjestelmä muistiin ja käynnistetään se. Tähän kuluu usein ärsyttävän paljon aikaa, jopa minuutteja.

[Lepotilassa](https://fi.wikipedia.org/wiki/Lepotila) tietokone "nukkuu" ja kuluttaa vain sen verran sähköä, että tieto säilyy haipuvassa keskusmuistissa ja että laite pystyy heräämään vaikkapa läppärin kantta nostettaessa. Lepotilan avulla läppärin akku saadaan riittämään kauemman aikaa ja laite on silti aika nopeasti koko ajan käytettävissä. Jos sähköä halutaan säästää vielä enemmän, laite voidaan laittaa [horrostilaan](https://fi.wikipedia.org/wiki/Horrostila), jossa kaikki ohjelmien ja käyttöjärjestelmän tiedot talletetaan ensin massamuistiin ja sitten laitetaan kokonaan virrat pois päältä. Horrostilasta herättäessä tiedot palautetaan takaisin keskusmuistiin ja tietokoneen käyttö voi jatkua ihan samasta kohtaa kuin mitä se oli horrostilan alkaessa. Tietojen palauttamiseen voi silti kulua aika paljon aikaa - ainakin jos sitä odottaa tietokoneen äärellä. Se on kuitenkin nopeampaa kuin täysin sammutetun laitteen käynnistäminen, koska käyttöjärjestelmää ei tarvitse käynnistää alusta pitäen uudelleen.

Muistin kokoa mitataan yleisesti tavuina ([B](https://fi.wikipedia.org/wiki/Tavu_(tietotekniikka))). Tavun koko on kahdeksan [bittiä](https://fi.wikipedia.org/wiki/Bitti) ja yhteen tavuun voi tallettaa vaikkapa yhden merkin (esim. 't') tai pienen kokonaisluvun (esim. 57). Muistin koko vaihtelee huomattavasti tietokoneen mukaan. Jonkun pienen laitteen muistin määrä mitataan kilotavuina ([KB](https://fi.wikipedia.org/wiki/Tavu_(tietotekniikka)), 1024 tai 1000 tavua), kun läppärin tai pöytäkoneen muistin koko voi olla useita gigatavuja ([GB](https://fi.wikipedia.org/wiki/Tavu_(tietotekniikka)), miljoona KB) tai jopa teratavuja ([TB](https://fi.wikipedia.org/wiki/Tavu_(tietotekniikka)), 1000 GB). Apollo-ohjelmassa lennettiin kuuhun vuonna 1969 [AGC](https://fi.wikipedia.org/wiki/Apollo_Guidance_Computer)-tietokoneen avulla, jossa oli muistia alle 20 KB.

<text-box variant="example" name="Onko yksi KB (kilotavu) 1000 tavua vai 1024 tavua?">

On vähän häiritsevää, että perustavaa laatua olevassa numerotiedossa on kahta erilaista käytäntöä. Merkintäongelma aiheutuu numerojärjestelmistä. Tietokoneen toteutus pohjautuu bitteihin ja usean bitin muodostamat luvut ovat 2-järjestelmän lukuja. Samoja etuliitteitä käytetään niin binäärijärjestelmässä kuin kymmenjärjestelmässäkin. Täten etuliitteet K, M ja G voivat tarkoittaa tilanteesta riippuen joko lukuja
2<sup>10</sup>=1024,  2<sup>20</sup>=1 048 576, 2<sup>30</sup>=1 073 741 824 tai lukuja
10<sup>3</sup>=1000,  10<sup>6</sup>=1 000 000, 10<sup>9</sup>=1 000 000 000.
<br><br>
Ongelmaa selventämään on tuotu uuden IEC-standardin mukaiset termit (kibitavu KiB, mebitavu MiB, gibitavu GiB, jne) kuvaamaan muistien kokoa tavuina binäärijärjestelmässä. Uudet termit eivät vielä ole oikein lyöneet läpi, joten merkintätapojen sekavuus jatkuu. Se ei kuitenkaan haittaa paljoa, koska mitään suuria virheitä ei tämän vuoksi tule.

</text-box>

### Väylä on kimppu sähköjohtoja
Suorittimen ja muistin välillä on [väylä](https://fi.wikipedia.org/wiki/V%C3%A4yl%C3%A4), jossa tieto siirtyy usean vierekkäisen sähköjohtimen kautta. Jokaisella laitteella on oma väyläsovittimensa, joka toteuttaa etukäteen sovittua käytäntöä (protokollaa) väylän käytössä. Esimerkkikoneessamme on vain yksi väylä, mutta oikeassa koneessa niitä on useampia ja eri nopeuksisia. Lähellä suoritinta olevat ovat nopeampia.

Väylälle on tyypillistä, että vain yksi laite voi laittaa sinne tietoa kerrallaan ja kaikki muut voivat sitten lukea sinne kirjoitetun tiedon. Useimmiten tieto on tarkoitettu vain yhdelle vastaanottajalle ja tuolloin muut laitteet jättävät sen huomioimatta. Ongelma on samanlainen kuin ryhmässä keskustelu. Jos kaikki puhuvat samaan aikaan, niin eihän siitä mitään selvää saa. Jos ryhmässä Tiinalla on välillä asiaa vain Pekalle, niin muut eivät puutu asiaan, vaikka kuulevatkin keskustelun.

Väylälle on ominaista, että sen nopeus määräytyy siihen liitetyn hitaimman laitteen mukaiseksi. Ryhmäkeskustelussakin on tärkeätä, että kaikki puhuvat tarpeeksi hitaasti, jotta jokainen pysyy keskustelussa mukana. Tietokoneessa nopeimmat väylät ovat suorittimen ja muistin välissä. Muut väylät on liitetty näihin hierarkkisesti käyttäen sovittimia, joiden avulla hitaammat väylät voidaan liittää nopeampiin suorituskyvyn siitä kärsimättä. Sovitin toimii kummallekin väylälle sen omalla nopeudella.

<!-- Kuva: ch-1-1-vaylahierarkia -->

![Nopein väylä on sisäinen väylä suorittimen ja välimuistin välillä. Seuraavaksi nopein muistiväylä yhdistää välimuistin muistiin. Muistiväylässä on myös sovitin vähän hitaammalle PCI-väylälle, jossa on kiinni kovalevy. PCI-väylässä on myös sovitin vielä hitaammalle USB-väylälle, jossa on kiinni USB-muistitikku ja näppäimistö.](./ch-1-1-vaylahierarkia.svg)
<div>
<illustrations motive="ch-1-1-vaylahierarkia" frombottom="0" totalheight="40%"></illustrations>
</div>

### Oheislaitteet
Suorittimen ja muistin lisäksi tietokoneeseen ei tarvitse sisältyä muita laitteita, mutta yleensä niitä sekalainen joukko. Näihin sisältyvät erilaiset tiedon tallennusvälineet (massamuistit), tietokoneverkkolaitteet ja yhä hienommat laitteet ihmisen kanssa kommunikointiin. Sana "oheislaite" on vähän hämäävä, koska osa oheislaitteista (esimerkiksi kovalevy) voi olla toteutettu itse tietokonelaatikon sisälle (sisäinen kovalevy) tai sen ulkopuolelle (ulkoinen kovalevy). Niitä käytetään kuitenkin samalla tavalla käyttöjärjestelmän tarjoaman käyttöliittymän kautta.

Yleensä tietokoneeseen liittyy ainakin jokin (keskus)muistia paljon suurempi [massamuistilaite](https://fi.wikipedia.org/wiki/Massamuisti), jossa tieto säilyy myös ilman sähkövirtaa. Tyypillisiä massamuistilaitteita ovat [kovalevyt](https://fi.wikipedia.org/wiki/Kovalevy) ja [SSD-muistit](https://fi.wikipedia.org/wiki/SSD), joiden koko mitataan giga- tai teratavuina.

Kukin oheislaite on liitetty väylään käyttäen oheislaitteen omaa [laiteohjainta](https://simple.wikipedia.org/wiki/Device_controller), joka on räätälöity sopimaan juuri kyseiselle väylätyypille. Esimerkiksi järjestelmän sisäisen kovalevyn mukana voi tulla laiteohjain. Se on pienehkö piirilevy, joka pitää kiinnittää pöytäkoneen [emolevyllä](https://fi.wikipedia.org/wiki/Emolevy) olevaan sille sopivaan väylään. Kovalevy kiinnitetään sitten omilla johdoillaan laiteohjaimeen. Järjestelmä ulkoinen oheislaite muistitikku taas voi käyttää [USB](https://fi.wikipedia.org/wiki/USB)-väylää (Universal Serial Bus), mikä on nykykoneessa usein valmiiksi asennettuna. USB:tä käyttävässä laitteessa laiteohjain on yleensä integroitu itse laitteen kanssa samaan koteloon.

Tietokoneita käytetään usein ympäristössä, jossa niiden täytyy pystyä kommunikoimaan käyttäjän eli ihmisen kanssa. Tällöin oheislaitteista täytyy löytyä kuhunkin käyttötarkoitukseen sopiva laite. Sellaisia ovat vaikkapa [näppäimisto](https://fi.wikipedia.org/wiki/N%C3%A4pp%C3%A4imist%C3%B6), [hiiri](https://fi.wikipedia.org/wiki/Hiiri_(osoitinlaite)), [peliohjain](https://fi.wikipedia.org/wiki/Videopeliohjain), [näyttö](https://fi.wikipedia.org/wiki/Tietokonen%C3%A4ytt%C3%B6), [kosketusnäyttö](https://fi.wikipedia.org/wiki/Kosketusn%C3%A4ytt%C3%B6),  [kuulokkeet](https://fi.wikipedia.org/wiki/Kuuloke) ja [virtuaalitodellisuuslasit](https://fi.wikipedia.org/wiki/Virtuaalitodellisuuslasit).

Useimmat tietokoneet tarvitsevat yhteyksiä toisiin tietokoneisiin ja ne tarvitsevat tietoliikennettä varten sopivat oheislaitteen tai -laitteet. Esimerkiksi älypuhelimessa voi olla sisäänrakennettuna 3G- ja 4G-verkkolaitteet puheluja ja datan siirtoa varten, USB-liitin muihin tietokoneisiin liittämistä varten ja [Wi-Fi](https://fi.wikipedia.org/wiki/WLAN) langattoman verkon käyttöön. Toisaalta taas auton lisävarusteena myydyssä puhelimen handsfree-laitteessa voi olla ainoastaan  pari näppäintä ja [Bluetooth](https://fi.wikipedia.org/wiki/Bluetooth)-moduuli laitteen ulkopuolista kommunikointia varten.

Tietokoneissa voi myös olla erilaisia sensoreita, jotka keräävät tietoa ympäristöstä. Ne ovat samanlaisia oheislaitteita muiden joukossa, vaikka tieto kulkeekin vain yhteen suuntaan. Tällaisia ovat esimerkiksi [sukellustietokoneiden](https://fi.wikipedia.org/wiki/Sukellustietokone) paineanturit ja urheilukellojen sykemittarit. Älypuhelimissa voi olla valoisuus- ja kiihtyvyysantureita sekä [GPS](https://fi.wikipedia.org/wiki/GPS)- ja [Glonass](https://fi.wikipedia.org/wiki/Glonass)-satelliittien vastaanottimet. Kiihtyvyysanturin avulla järjestelmä tietää puhelimen asennon ja voi laittaa kuvat oikein päin katsojalle. Satelliittivastaanottimien keräämän tiedon avulla voidaan laskea puhelimen tarkka sijainti missä päin tahansa maapallolla.

Ihmisten kanssa suoritusaikana tapahtuva kommunikointi tehdään siis siihen sopivien oheislaitteiden avulla. Kaikki ihmisen syöttämä tieto siirretään oheislaitteelta (esim. näppäimistö tai hiiri) tietokoneen muistiin, josta ohjelma sen sitten saa käyttöönsä. Vastaavasti kaikki käyttäjälle annettava tieto talletetaan ensin muistiin, josta se sitten kopioidaan käyttäjän haluamalle oheislaitteelle (esim. näytölle tai kovaäänisiin). Kommunikointi muiden tietokoneiden kanssa tapahtuu samalla tavalla käyttäen niille sopivia oheislaitteita (esim. wifi'ä tai bluetooth'ia).

<!-- key-terminology -->

<text-box variant="example" name="Tärkeitä termejä">

### Tietokone
Laitteisto, joka osaa suorittaa sen muistiin talletettua ohjelmaa.

### Suoritin
Tietokoneen osa, joka osaa suorittaa sen tietokoneen omia yksinkertaisia konekielisiä käskyjä.

### Muisti, keskusmuisti
Nopea muisti tiedon tallettamiseen suoritusaikana. Sisältää ohjelman koodin ja datan. Yleensä haipuvaa, jolloin tieto häviää virran katkettua.

### Väylä
Tietokoneen sisällä eri osia yhdistävä kimppu sähköjohtoja, joita pitkin tieto liikkuu suorituksen aikana. Jokaisella väylään liitetyllä laitteella on tälle väylätyypille sopiva laiteohjain.

### Välimuisti
Lähellä suoritinta sijaitseva keskusmuistia pienempi muistialue, jossa on kopioita viime aikoina käytetyistä keskusmuistin alueista. Vähän hitaampi kuin suorittimen rekisterit, mutta paljon nopeampi kuin keskusmuisti. Välimuisteja on usein monessa eri tasossa (esim. 2-4 tasoa) ja lähempänä suoritinta olevat tasot ovat kooltaan pienempiä mutta nopeampia. Jos tieto löytyy välimuistista, sitä ei tarvitse hakea väylän kautta paljon hitaammasta keskusmuistista.

### Massamuisti, pysyväismuisti
Laite, jossa tieto säilyy ilman sähkövirtaa. Käyttöjärjestelmä on talletettu tänne ja se ladataan muistiin tietokoneen käynnistämisen yhteydessä. Kaikki tietokoneessa mahdollisesti suoritettavat ohjelmat ovat myös täällä ja ne ladataan muistiin ohjelman käynnistyksen yhteydessä. Siellä on myös kaikki käyttäjien omat tiedostot, esimerkiksi kuvat ja dokumentit.

### Oheislaite
Väylään liitetty laite tiedon tallennukseen tai keräämiseen, tai kommunikointiin muiden tietokoneiden ja ihmisten kanssa. Suoritin ja muisti (ja järjestelmän alustukseen tarvittava massamuisti) ovat tietokoneen kannalta välttämättömiä laitteita ja muut ovat oheislaitteita. 

</text-box>


<!-- quiz 1.1.11-22 Pitääkö tietokoneessa olla tämä laite? -->

<div><quiz id="323c413b-1ff9-444a-958d-19b05b50bfc4"></quiz></div>
<div><quiz id="4ec3fcc6-3221-4eec-a3dd-28474563e239"></quiz></div>
<div><quiz id="1c73d15a-b517-4e45-ae0d-917f4e23d6d3"></quiz></div>
<div><quiz id="327224ac-201b-4912-9e2c-19cbe9e4a49a"></quiz></div>
<div><quiz id="271b1f5a-f8e6-4957-8c36-c7f9f0c1b411"></quiz></div>
<div><quiz id="1fdf16d3-cada-4cd0-abbe-a2fb2f998e35"></quiz></div>
<div><quiz id="2df791d7-1d41-4cc5-b8f4-eb0fe5536d24"></quiz></div>
<div><quiz id="249c9e4e-e906-4a57-adc8-bb38d16beb5d"></quiz></div>
<div><quiz id="41ab19b2-29cb-4e4e-a842-2194b3fd03ee"></quiz></div>
<div><quiz id="2ce514ef-1c93-417c-97a9-e5943ed1320e"></quiz></div>
<div><quiz id="2f3133b7-1e09-46b1-a345-f153b8241daf"></quiz></div>
<div><quiz id="3c79fb64-267d-4f09-836c-1eed07ed8d4f"></quiz></div>
