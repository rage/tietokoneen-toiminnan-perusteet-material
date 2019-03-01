---
path: '/luku-4/2-prosessi'
title: 'Prosessi'
hidden: false
---

<div>
<lead>Tässä osiossa esittelemme prosessin käsitteen. Prosessi on järjestelmässä oleva suorituksessa olevan ohjelma ja prosessin kuvaaja sen esitysmuoto käyttöjärjestelmässä. Käymme myös läpi erilaiset tilat, joissa prosessi voi järjestelmässä olla ja minkälaisia tietoja prosessin kuvaajassa on.</lead>
</div>

## Prosessi
Kun jotain ohjelmaa halutaan suorittaa järjestelmässä, se pitää _ladata_ massamuistista. Latauksessa käyttöjärjestelmä luo uuden [prosessin](https://fi.wikipedia.org/wiki/Prosessi_(tietotekniikka)), joka on kyseisen ohjelman yksi suorituskerta järjestelmässä. Yhdestä ohjelmasta voi järjestelmässä olla samanaikaisesti usea prosessi järjestelmässä, vaikkakin vain yksi niistä voi kerrallaan olla suorituksessa (yhden suorittimen järjestelmässä). Esimerkiksi, sinulla voi olla monta selainikkunaa samanaikaisesti käytössä ja niissä kaikissa suorituksessa sama selainohjelma. Toisaalta, järjestelmässä voi samanaikaisesti olla prosesseja eri ohjelmista, joista niistäkin tietenkin vain yksi kerrallaan on suorituksessa suorittimella.

-- kuva  luento 8, kalvo 3    ch-4-2-prosessit-jarjestelmassa.jpg

![Perusjärjestelmän kokoonpano, jossa ylhäällä suoritin ja muisti, keskellä väylä, ja alhaalla laiteohjain ja kovalevy. Kovalevyllä on ohjelmat P ja Q latausmoduuleina. Muistissa on näistä ohjelmista luodut prosessit P1, P2, P3 ja Q1, sekä näiden prosessien ja KJ:n koodi-ja data-alueet. Suorittimien rekistereissä on prosessin P2 tietoja, vaikka pääosa P2:n tiedoista on muistissa. Osa P2:n juuri nyt ei-käytössä olevista tiedoista voi olla levyllä.](./ch-4-2-prosessit-jarjestelmassa.svg)
<div>
<illustrations motive="ch-4-2-prosessit-jarjestelmassa" frombottom="0" totalheight="100%"></illustrations>
</div>

Ladattava ohjelma sijaitsee massamuistissa kääntämisen ja linkittämisen (ks. Luku 1) lopputuloksena syntyneessä _latausmoduulissa_, jossa on mm. ohjelmakoodi konekielisessä muodossa. Latauksessa käyttöjärjestelmä varaa tarvittavan määrän muistitilaa tälle prosessille ja kopio sen ohjelmakoodin muistiin annetulle alueelle. Se myös tallettaa kaikki tähän prosessiin liittyvät hallintotiedot erityiseen tietueeseen, prosessin _kuvaajaan_ (PCB, Process Control Block) tai siihen linkitettyihin muihin tietorakenteisiin. Kuvaajan tarkempi esittely on alla.

Juuri luotu uusi prosessi ei suinkaan ole vielä suorituksessa, koska sen luontihetkellä suorituksessa oli käyttöjärjestelmään sisältyvä lataaja. Uuden prosessin luomisen jälkeen käyttöjärjestelmä päättää, mikä prosessi saa seuraavaksi suoritusvuoron. Se voi olla juuri luotu prosessi, mutta yhtä hyvin se voi olla esimerkiksi se prosessi, jonka suoritus keskeytettiin uuden prosessin luontia varten.

Kun uusi prosessi pääsee vihdoin suoritukseen, suorittimen rekisterit täytyy alustaa sopivilla arvoilla. Ensimmäisellä suorituskerralla tämä tarkoittaa, että esimerkiksi muistin käyttöä rajaaville rekistereille (BASE ja LIMIT, ks. Luku 2.1) ja tilarekisterille (SR) asetetaan sopivat arvot prosessin kuvaajasta. Lopulta paikanlaskurille (PC) asetetaan uusi arvo tämän prosessin ohjelmakoodiin ja juuri sillä hetkellä kontrolli (suoritusvuoro) siirtyy tälle uudelle prosessille. Seuraava konekäsky on jo uuden prosessin suoritusta.

Prosessin käsite on kertakaikkiaan nerokas. Se on täysin näennäinen (virtuaalinen) käyttöjärjestelmän luoma abstrakti käsite, johon kuitenkin kaikki tietokoneen laskenta perustuu. Kun käyttöjärjestelmä käynnistetään, siellä aivan aluksi (käyttöjärjestelmän ytimessä) luodaan rakenteet prosessien luontia ja prosessien välistä kommunikointia varten. Useat käyttöjärjestelmät (esim. Windows tai Linux) on itsekin toteutettu osittain prosessien avulla, jotka sitten voivat olla suorittamassa käyttöjärjestelmän hallintoa silloin tällöin.

Suoritin ei tiedä mitään prosesseista ja järjestelmässä suoritettavista tehtävistä. Se näkee ainoastaan peräkkäisesti suoritettavia konekäskyjä, joista osa on etuoikeutettuja ja osa ei. Konekäskyjen suoritus tapahtuu käskyjen nouto- ja suoritussyklin mukaisesti. Yleensä suoritin suorittaa konekäskyjä niiden muistissaolojärjestyksen mukaisesti. Aina silloin tällöin kontrolli siirtyy muualle ehdollisen haarautumisen (JZER, etc), hypyn (JUMP), aliohjelmakutsun (CALL), käyttöjärjestelmän palvelupyynnön (SVC) tai keskeytyksen vuoksi.

### Prosessin kuvaaja
Prosessin kuvaajassa on _kaikki_ tiedot, mitä järjestelmä tarvitsee tästä prosessista. Prosessin kuvaaja (tai ainakin tärkeimmät osat siitä) pidetään muistissa myös silloin kun prosessi ei ole suorituksessa, koska käyttöjärjestelmä käsittelee prosesseja nimenomaan niiden kuvaajien kautta. Kaikki prosessin tiedot eivät ole suoraan tässä kuvaajassa. Esimerkiksi tiedostojen käyttöön liittyvät tiedot voi olla keskitetty tiedostojärjestelmään ja prosessin kuvaajassa on sitten linkki tai linkkejä tiedostojärjestelmän tietoihin. Vastaavasti laitteiden hallinta pitää kirjaa kaikista järjestelmän laitteista ja prosessin kuvaajassa on linkkejä sen prosessin käyttämiin laitteisiin.

Prosessin kuvaajassa on järjestelmässä uniikki prosessin _tunniste_ (kokonaisluku, pid, process id), jonka avulla prosessi tunnistetaan tässä järjestelmässä ja muissakin järjestelmissä. Esimerkiksi, kun pyydät uutta verkkosivua joltain web-palvelimelta, selaimesi lähettää verkon kautta viestin palvelintietokoneelle (esim. www.helsinki.fi eli 128.214.189.90) siellä suorittavalle web-palvelinprosessille (esim. 2345). Pyynnössä on mukana sinun koneesi verkko-osoite (esim. 128.214.170.60) ja selainprosessisi tunniste (esim. 1287). Näiden avulla web-palvelinprosessi voi lähettää pyytämäsi verkkosivun sinun koneellesi ja siellä juuri oikealle selaimelle. Prosessin tunniste voi olla esimerkiksi indeksi suureen prosessitauluun, josta prosessin tunnisteen perusteella löytyy prosessin kuvaajan osoite muistissa.

Kuten jo äsken mainittiin, niin kuvaajasta löytyy selkeästi määriteltynä mm. kaikki prosessille varatut _muistialueet_. Ne voivat olla yhtenä ryppäänä tai hajautettuna sinne tänne keskusmuistia. On myös täysin mahdollista, että muistialueita varataan ja vapautetaan dynaamisesti suoritusaikana. Vastaavasti kaikki prosessin käyttämät _tiedostot_ löytyvät täältä (linkitettynä tiedostojärjestelmään). Kuvaajasta näkyy, mitkä tiedostot on avattu esim. lukuoikeuksilla ja missä kohtaa tiedostoa ollaan tällä hetkellä lukemassa. Kuvaajassa on tieto myös kaikista muista _järjestelmän resursseista_ (esim. näppäimistö tai näytöllä oleva ikkuna), jotka prosessi on varannut käyttöönsä.

Kuvaajassa on myös prosessin _prioriteetti_ (esim. 35 tai 85) suorittimen vuoronantoa varten. Käyttöjärjestelmäprosesseilla on aina parempi prioriteetti kuin tavallisilla käyttäjän aloittamilla prosesseilla. Ainahan hallinto on tärkeämpää kuin tavallinen työnteko ja varsinkin tietokonejärjestelmissä. Jos esim. muistinhallintaa ei tehdä ajoissa kuntoon, järjestelmä kaatuu.

Joissakin järjestelmissä prosessit saavat olla suorituksessa korkeintaan jonkin tietyn ajan, jonka jälkeen niiden pitää antaa vuoro toisille. Tällaista kerralla laskentaan käytettävää maksimiaikaa kutsutaan prosessin [aikaviipaleeksi](https://fi.m.wikipedia.org/wiki/Moniajo) ja sen pituus löytyy myös kuvaajasta. Kuvaajasta löytyy myös tieto siitä, suorittaako prosessi (tällä hetkellä) _etuoikeutetussa tilassa_ vai ei.

Jos prosessi joutuu odottamaan jotain asiaa (esim. syötettä käyttäjältä), niin _odotuksen syy_ löytyy kuvaajasta. Käyttöjärjestelmä pitää kuvaajassa kirjaa prosessin käyttämästä _suoritinajasta_, jota joissakin pilvipalveluissa käytetään laskutusperusteena.

### Suoritinympäristö
Tärkeänä komponenttina kuvaajassa on prosessin _suoritinympäristö_. Ajatellaan tilannetta, jossa prosessi on menettänyt suoritusvuoronsa suorittimelle vaikkapa keskeytyksen jälkimainingeissa. Prosessi täytyy nyt laittaa odottamaan uutta vuoroa suorittimelle ja haluamme suorituksen jatkuvan sitten joskus ihan samalla tavalla kuin jos keskeytystä ei olisi ikinä tapahtunutkaan. Tämä toteutetaan tallettamalla lähes kaikki suorittimen rekistereiden arvot tämän prosessin suoritinympäristöön. Tämä ei ole mikään valtava määrä tietoa, koska rekistereitä ei ole kuin muutama sata korkeintaan.

Sitten kun prosessi pääsee suoritukseen uudestaan, rekistereiden tallennetut arvot kopioidaan kuvaajasta takaisin suorittimelle ja suoritus voi jatkua normaalisti. Erona aikaisemmin mainittuun ensimmäiseen suorituskertaan on, että suoritinympäristöstä haetaan nyt myös kaikki aikaisemmin laskennassa käytetyt työrekisterit. Niillähän ei ensimmäisellä suorituskerralla ollut vielä mitään järkeviä arvoja, kun prosessi ei ollut vielä suorittanut yhtään konekäskyä.

Suoritinympäristön tietojen kopiointi tapahtuu ihan tavallisilla konekäskyillä ja muistiinviittauksilla kyseisen prosesssin kuvaajaan. Kopiointi tapahtuu etuoikeutetussa suoritustilassa, kuten kaikki muukin prosessien hallintaan liittyvä käyttöjärjestelmän tekemä työ. Prosessien kuvaajiin ei tavallisilla käyttäjätason prosesseilla ole pääsyä.

Suoritinympäristöön ei tarvitse kopioida ihan kaikkia suorittimen rekistereitä, koska suorituksessa oleva prosessi voi vaihtua toiseen ainoastaan konekäskyjen suoritusten välissä. Sellaisia rekistereitä, joiden arvot asetetaan joka tapauksessa uudelleen yhden konekäksyn suorituksen aikana, ei tarvitse tallettaa suoritinympäristöön. Tällaisia ovat esimerkiksi väylää ohjaavat rekisterit MAR ja MBR (ks. Luku 2.1).

Prosessin ollessa suorituksessa sen suoritinympäristö on siis suorittimen rekistereissä ja muulloin se on talletettuna prosessin kuvaajaan.

### Käyttöjärjestelmän tietorakenteiden yhteiskäyttöongelma
Prosessien kuvaajat ja niihin linkitetyt eri alijärjestelmien (esim. tiedostojärjestelmä) tiedot muodostavat yhdessä valtavan tietorakenteen, jota hyvin moni käyttöjärjestelmän osa käsittelee. Tämä aiheuttaa käyttöjärjestelmän suunnittelussa ja toteutuksessa hankalan ongelman, koska käyttöjärjestelmän osia on järjestelmässä useita suorituksessa samanaikaisesti. Esimerkiksi, usea prosessi on saattanut pyytää levy-I/O:ta tai lisämuistitilaa samanaikaisesti.

Käyttöjärjestelmän omien tietorakenteiden hallinnassa on tämän vuoksi _samanaikaisuusongelma_, koska usean prosessin tarvitsee käsitellä (ja muuttaa) samoja tietorakenteita samanaikaisesti. Samanaikaisuusongelma ratkaistaa rajoittamalla tietyn tietorakenteen osan käyttö yhdelle prosessille kerrallaan. Se on kuitenkin vaikeata tehdä, kun yleensä ei ole tietoa näistä muista prosesseista, jotka juuri nyt haluaisivat ehkä koskea siihen samaan tietorakenteeseen. Jos ratkaisu epäonnistuu, kyseinen käyttöjärjestelmän tietorakenne jää rikkinäiseen tilaan ja koko järjestelmä voi hyytyä (esim. [Blue Screen of Death](https://simple.wikipedia.org/wiki/Blue_Screen_of_Death)). Tämä onkin yleisin syy tietokonejärjestelmien jumiutumiseen siten, että ne eivät reagoi enää mihinkään.

Yleensä ainoa toipumiskonsti hyytyneeseen järjestelmään on pistää virrat pois ja alustaa  (bootata) koko järjestelmä uudelleen. Tästä aiheutuu usein ärsyttävän paljon haittaa, kun kaikki levylle tallentamaton keskeneräinen työ voi mennä hukkaan.

Samanaikaisuusongelmat ovat vaikeita poistaa, koska käyttöjärjestelmässä voi olla satoja tuhansia tai miljoonia rivejä koodia, ja sitä on toteuttamassa suuri määrä ohjelmoijia eri organisaatioissa. Ongelma tulee vähän paremmin hallittavaksi, jos tärkeimpiä tietorakenteita käsitellään vain käyttöjärjestelmän etuoikeutetussa [ytimessä](https://fi.wikipedia.org/wiki/K%C3%A4ytt%C3%B6j%C3%A4rjestelm%C3%A4n_ydin) ([kernel](https://simple.wikipedia.org/wiki/Kernel_%28computer_science%29)). Etuoikeutetusta ytimestä voidaan tehdä mahdollisimman pieni, jolloin myös yhteisiä tietorakenteita käyttävästä koodista tulee pienempi ja sieltä on helpompi löytää virheitä.

## Prosessin vaihto
Prosessin vaihto on tapahtumaketju, jossa suorittimella suoritusvuorossa oleva prosessi vaihtuu. Se tapahtuu käytännössä aika usein, esimerkiksi 1-30 ms välein. Prosessin vaihto tapahtuu usein sen vuoksi, että suorituksessa oleva prosessi ei voi jatkaa suoritusta, vaan sen pitää jäädä odottamaan jotain. Syynä voi olla, että prosessi tarvitsee jotain tietoa massamuistista tai verkosta, tai sitten se jää odottamaan esimerkiksi vastausviestiä toiselta prosessilta pyytämäänsä palveluun.

Esimerkiksi, prosessi P pyytää viestin avulla levy I/O:ta laiteajuriprosessilta DD ja jää sitten odottamaan vastausviestiä. Laiteajuri DD ottaa viestin vastaan ja pyytää levyn laiteohjainta tekemään kyseisen I/O:n (tai osan I/O:sta). Sitten sekin jää odottamaan, kunnes laiteajuri ilmoittaa I/O-keskeytyksen avulla sille annetun tehtävän valmistumisesta.

Toinen syy prosessin vaihtoon voi olla, että prosessin [aikaviipale](https://fi.m.wikipedia.org/wiki/Moniajo) on tullut täyteen ja on aika antaa suoritusvuoro jollekin toiselle prosessille. Tämä havaitaan, kun käyttöjärjestelmä on saanut suoritusvuoron esimerkiksi kellolaitekeskeytyksen (ks. Luku 2.2) tai jonkin muun keskeytyksen kautta. Joka kerta, kun käyttöjärjestelmä saa suoritusvuoron, se voi tehdä hallintoa ja mahdollisesti päättää prosessin vaihdosta. Tämä on itse asiassa todella ärsyttävä ja vaikeita ongelmia aiheuttava käyttöjärjestelmän ominaisuus.

Kolmas syy prosessin vaihtoon on, että nyt suorituksessa oleva prosessi päättyy eli ohjelman suoritus päättyy normaalisti. Tämä toteutetaan yleensä kutsumalla jotain käyttöjärjestelmärutiinia SVC-konekäskyllä (ks. Luku 2.3).

### Prosessin vaihdon toteutus
Prosessin vaihto tapahtuu kahdessa vaiheessa. Ensiksi, nyt suorituksessa ollut prosessi joko lopetetaan kokonaan tai sitten se laitetaan odottamaan jotain. Jos prosessi lopetetaan, niin sitten kaikki sen käyttämät tiedostot suljetaan ja kaikki sen käyttämät resurssit vapautetaan muiden prosessien käyttöön. Tämä on "helpohkoa" tehdä, koska kaikki tiedot löytyvät (linkitettynä) prosessin kuvaajasta. Lopulta kaikki tiedot on poistettu ja prosessin tunnistekin vapautetaan uusiokäyttöön.

Jos prosessi laitetaan odottamaan jotain, niin sen suoritinympäristö pitää ottaa talteen sen kuvaajaan. Tämänkin työn tekee prosessienhallinnan joku moduuli.

Toiseksi, prosessienhallinta kutsuu prosessien _vuoronantajaa_ (scheduler), joka sopivaa _vuoronantoalgoritmia_ käyttäen valitsee uuden prosessin suoritukseen. Suorittimen rekistereihin kopioidaan uuden prosessin suoritinympäristö senn kuvaajasta ja suoritusvuoro siirtyy näin uudelle prosessille.

## Prosessin elinkaarimalli
Prosessin "elämää" järjestelmässä sen luonnista sen päättymiseen kuvataan _prosessin elinkaarimallin_ avulla. Tästä mallista on muutamia variantteja riippuen siitä, kuinka paljon yksityiskohtia halutaan ottaa mukaan. Tässä esitellään mallin yksinkertaisin versio.

Prosessin luonnin ollessa vielä kesken sen ajatellaan olevan tilassa "luonti" ("uusi", "new"). Prosessi on tilassa "valmis suoritukseen" ("ready", "ready to run"), kun se odottaa suoritusvuoroa suorittimelle. Tuolloin sen kaikki tarvittavat muistialueet (koodi ja data) ovat valmiina keskusmuistissa ja se vain odottaa vuoroaan päästä suoritukseen. Kun prosessi vihdoin on suorittamassa suorittimella, sen tilana on "suorituksessa" ("running"). Sillä on tuolloin tietenkin kaikki sen tarvitsemat koodi- ja data-alueet muistissa. Jos prosessi on odottamassa mistä tahansa syystä, se on tilassa "odottaa" ("waiting", "suspended"). Kun prosessi joko itse pääsee koodin loppuun tai käyttöjärjestelmä on tappanut sen, prosessin tilana on "päättynyt tai poistettu" ("tapettu", "terminated", "killed"), kunnes kaikki sen rakenteet on vapautettu uusiokäyttöön. Joskus prosessia ei voi poistaa kokonaan ennen kuin kaikki sen itse käynnistämät prosessit ("lapsiprosessit") on ensin poistettu järjestelmästä. Tuollaisia vähän pidempään tapettu-tilassa olevia prosesseja kutsutaan joskus kuvaavasti [zombie](https://en.wikipedia.org/wiki/Zombie_process)-prosesseiksi, koska ne eivät enää oikeastaan tee mitään paitsi odottavat "lapsiensa" "kuolemaa" eli lapsiprosessiensa päättymistä. Tarkemmassa elinkaarimallissa niillä voi tuolloin olla oma tilansa.

-- fig. luento 8 kalvo 5     ch-4-2-prosessin-elinkaarimalli-draft.jpg

![Viisi tila-pallukkaa: (1) Luonti, (2) valmis suoritukseen eli ready-to-run eli ready, (3) suorituksessa, (4) odottaa, ja (5) poistettu tai tapettu. Luonti-tilasta nuli ready-tilaan ja katkoviiva nuoli odottaa-tilaan. Ready-tilasta nuoli suorituksessa-tilaan. Suorituksesta tilasta nuolet ready-tilaan, odottaa-tilaan ja poistettu-tilaan. Odottaa-tilasta nuoli ready-tilaan.](./ch-4-2-prosessin-elinkaarimalli-draft.jpg)
<div>
<illustrations motive="ch-4-2-prosessin-elinkaarimalli-draft" frombottom="0" totalheight="100%"></illustrations>
</div>

###  Prosessien elinkaarimallin tilasiirtymät
Jos uusi prosessi saa heti käyttöönsä kaikki sen tarvitsemat (esim. muisti-) resurssit, se voidaan siirtää ready-jonoon. Jos taas muistitilaa ei ole vapaana juuri nyt tarpeeksi, käyttöjärjestelmä siirtää uuden prosessin odotustilaan sellaiseen jonoon, jossa odotetaan vapautuvaa muistitilaa. Kun joku muu prosessi päättyy tai tapetaan, siltä vapautunut muistitila voidaan antaa tämän uuden prosessin käyttöön. Tarvittavat koodi/data-tiedot kopiodaan muistiin ja uusi prosessi voidaan vihdoin siirtää ready-jonoon odottamaan suoritusvuoroaan.

Aina kun vuoronantaja on valitsemassa seuraavaa prosessia suoritukseen, se käy läpi ready-jonossa olevia prosesseja ja antaa vuoron korkeimman prioriteetin omaavalle prosessille. Usein ready-jono on oikeasti toteutettu useana jonona, yksi kutakin prioriteettia kohden. Esimerkiksi, prioriteetteja voi olla 128, jolloin ready-jonoja on 128. Jotta kaikkia prosesseja kohdeltaisiin "reilusti", useat käyttöjärjestelmät (esim. Windows ja Linux) vaihtelevat prosessien prioriteetteja dynaamisesti suoritusaikana. Prosessin prioriteetti huononee, jos prosessi saa paljon suoritinaikaa. Prioriteetti paranee, jos prosessi joutuu odottamaan kovin kauan suoritusvuoroaan. Tästä huolimatta käyttäjätason prosessien prioriteetit ovat aina huonompi kuin käyttöjärjestelmätason prosessien prioriteetit.

Ready-jono ei ole koskaan tyhjä. Siellä on vähintään joku (alhaisimman prioriteetin) taustaprosessi, joka laskee ikuisessa silmukassa esimerkiksi piin tarkkaa arvoa tai vain pyörii silmukassa tekemättä mitään järkevää. Suoritin suorittaa koko ajan joitakin konekäskyjä, koska se ei osaa tehdä mitään muutakaan. Nykyaikaisissa akkukäyttöisissä laitteissa tosin voi olla virransäästöoptio. Taustaprosessin suorittamisen asemesta suoritin laitetaan virransäästötilaan ([horrostilaan](https://fi.wikipedia.org/wiki/Horrostila) tai [lepotilaan](https://fi.wikipedia.org/wiki/Lepotila)), josta se herää jonkun sopivan keskeytyksen jälkeen. Taustaprosessi voi olla myös valittu sillä tavoin, että sen suorittaminen kuluttaa mahdollisimman vähän sähköä.

Jos käyttöjärjestelmä havaitsee, että prosessi on käyttänyt aikaviipaleensa loppuun, niin kyseinen prosessi siirretään takaisin ready-jonoon ja vuoro annetaan jollekin toiselle prosessille. Tämä suoritusvuoron vuorottelu tapahtuu käyttäjän (ihmisen) näkökulmasta hyvin tiuhaan tahtiin, esim. 10 ms välein. Näyttää, että kaikki järjestelmässä olevat prosessit olisivat suorituksessa samanaikaisesti, vaikka oikeasti vain yksi prosessi on suorituksessa kerrallaan. Käyttäjä on tyytyväinen, koska ainakin hänen ohjelmansa suoritus näyttää etenevän koko ajan. Vuorottamalla saadaan usean prosessin _keskimääräinen_ vasteaika (aika työn saapumisesta sen valmistumiseen) pienemmäksi verrattuina tilanteeseen, jossa samat prosessit olisi suoritettu loppuun yksi kerrallaan. Palvelu siis paranee ihan oikeastikin.

```
Esimerkki. Prosessit A, B ja C saapuvat järjestelmään yhtä aikaa ja 
vaativat 100, 40 ja 10 ms laskenta-aikaa. Aikaviipaleen koko on 10 ms.

Jos A, B ja C suoritetaan loppuun tässä järjestyksessä, niin niiden
vasteajat ovat 100, 140 ja 150 ms.
Keskimääräinen vasteaika on (100+140+150)/3 = 390/3 = 130 ms.

Jos A, B ja C suoritetaan järjestelmässä aikaviipale kerrallaan, 
niin suoritusjärjestys on A B C  A B  A B  A B  A A A A A A. 
A:n vasteaika on nyt 150 ms, B:n 90 ms ja C:n 30 ms.
Keskimääräinen vasteaika on (150+90+30)/3 = 270/3 = 90 ms.
Huomaa, että erityisesti lyhyiden prosessien B ja C vasteajat
ovat nyt selkeästi paremmat kuin ensimäisessä tapauksessa.
``` 

Kun suorituksessa oleva prosessi tarvitsee mitä tahansa resurssia, joka ei juuri nyt ole saatavilla, se siirtyy odotus-tilaan tuon resurssin mukaiseen jonoon. Tällaisia jonoja voi olla esimerkiksi muistitilaa odottavat prosessit, levy I/O:n päättymistä odottavat prosessit ja prosessilta 532 viestiä odottavat prosessit. Sitten kun kyseinen resurssi tulee saataville, se annetaan odottavalle prosessille, joka sitten siirretään ready-jonoon.

Käyttöjärjestelmä voi (saatuaan jollain tavoin suoritusvuoron) tappaa missä tahansa tilassa olevan prosessin, joka sitten siirretään poistettu tai tapettu -tilaan ja lopulta siivotaan pois koko järjestelmästä.

### Prosessien kuvaajat elinkaarimallin mukaisissa jonoissa
Prosessin tila voi olla merkittynä sen kuvaajaan. Ennen kaikkea tila selviää siitä, missä jonossa prosessi kulloinkin on. Käyttöjärjestelmä käsittelee prosesseja niiden kuvaajina ja siirtelee kuvaajia jonosta toiseen tarpeen mukaan. Esimerkiksi, prosessi on tilassa ready, jos se on jonkun prioriteettiluokan ready-jonossa. Samoin prosessi on odotustilassa, jos se on johonkin resurssiin liittyvässä sitä resurssia odottavien prosessien jonossa.

-- fig. luento 8 slide 7     ch-4-2-prosessit-jonoissa-draft.jpg

![Kolme eri luokkaa jonoja: ready-jono, suorituksessa-jono ja erilaiset odottaa-jonot. Jonoissa on prosessien kuvaajat, joista on mainittu vain prosessin tunniste eli pid. Ready tilassa on prosessit 1056 ja 1766, eli niiden kuvaajat.  Suorituksessa prosessi 0188. Disk 1:n odottaa jonossa on prosessit 0036, 7654 ja 9878. Timer-jonossa on prosessi 0555. Msg-from-1345 jonossa on prosessi 2222. Alla laatikko vuoronanto: Valitse seuraava prosessi ready-jonosta ja siirrä se suoritukseen cpu:lle eli kopioi tämän prosessin suoritinympäristö suorittimelle.](./ch-4-2-prosessit-jonoissa-draft.jpg)
<div>
<illustrations motive="ch-4-2-prosessit-jonoissa-draft" frombottom="0" totalheight="100%"></illustrations>
</div>

-- Quizes 4.2.1-10 
<div><quiznator id="5bfd2b5bfd6c3b3e161a21f6"></quiznator></div>
<div><quiznator id="5bfd2c5d6484ed3e386c0d61"></quiznator></div>
<div><quiznator id="5bfd2d6f2a799f3e5ac26fb0"></quiznator></div>
<div><quiznator id="5bfd2e4acd84693e7889b9cc"></quiznator></div>
<div><quiznator id="5bfd2f5ccd84693e7889b9d1"></quiznator></div>
<div><quiznator id="5bfd40212a799f3e5ac26fdb"></quiznator></div>
<div><quiznator id="5bfd41da2a799f3e5ac26fe3"></quiznator></div>
<div><quiznator id="5bfe9956bc25243d95b3c882"></quiznator></div>
<div><quiznator id="5bfe9998bc25243d95b3c883"></quiznator></div>
<div><quiznator id="5bfe99c90f49d53dce30c1a7"></quiznator></div>
