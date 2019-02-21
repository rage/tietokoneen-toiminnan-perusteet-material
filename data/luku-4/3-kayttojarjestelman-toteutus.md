---
path: '/luku-4/3-kayttojarjestelman-toteutus'
title: 'Käyttöjärjestelmän toteutus'
hidden: false
---

<div>
<lead>Pääoppimistavoitteena tässä osiossa on ymmärtää, kuinka käyttöjärjestelmä toteutetaan erilaisten prosessien ja aliohjelmien avulla. Näiden avulla toteutetaan käyttöjärjestelmän hallinto ja annetaan sovellusten käyttöön niiden työtä helpottavia palveluja. Esittelemme myös, kuinka näitä palveluita käytetään.
</lead>
</div>

## Käyttöjärjestelmän hallinnon toteutus prosessien ja aliohjelmien avulla
Käyttöjärjestelmän pitää lähes jatkuvasti hallinnoida muistia, tiedostoja, laitteita ja verkkoa. Prosessit tarvitsevat näitä resursseja koko ajan ja niitä pitää tarjota reilusti kaikille prosesseille.

Joissakin tapauksissa on järkevää käyttöjärjestelmän alustuksen yhteydessä luoda oma prosessi jonkin hallintotehtävän suorittamiseen. Esimerkiksi muistinhallintaprosessi voisi olla tällainen. Se pääsee muiden prosessien tavoin suoritukseen aika ajoin ja valvoo, että jokaisella muulla prosessilla on sopiva määrä muistitilaa käytössään. Prosessin luominen käyttöjärjestelmän hallintotehtävää varten on vähän sama asia, kuin että yrityksen hallintotiimiin palkataan uusi henkilö vaikkapa tilojen hallintaan. Hän suorittaa itsenäisesti kaikki tilojen varauksiin liittyvät tehtävät. Tällaisia koko ajan järjestelmässä olevia käyttöjärjestelmän palveluprosesseja kutsutaan joissakin järjestelmissä [daemon](https://fi.wikipedia.org/wiki/Daemon)-prosesseiksi. Daemon on kreikkalaisessa mytologiassa suojelushenki tai puolijumala. Nimitys on kuvaava, koska jumalten tavoin etuoikeutetut daemon-prosessit voivat järjestelmässä tehdä ihan mitä haluavat!

Käyttöjärjestelmän hallintoprosessit pääsevät suoritukseen vähän väliä tietyn aikataulun mukaisesti, tai sitten ne aktivoidaan tarvittaessa jonkun järjestelmän tilamuutoksen seurauksena. Jos esimerkiksi jokin prosessi päättyy, niin muistinhallintaprosessi voidaan aktivoida, jotta vapautunut muistitila voidaan ottaa uusiokäyttöön.

Toinen vaihtoehto käyttöjärjestelmän hallintotehtävien suorittamiseen on toteuttaa niitä aliohjelmina, joita kutsutaan aina tarvittaessa. Muistinhallinta voitaisiin hyvin toteuttaa myös tällä tavoin. Esimerkiksi jokaisen keskeytyskäsittelyn lopuksi voidaan kutsua muistinhallintaa, joka sitten sillä hetkellä tekee kaikki tarvittavat muistinhallinnan rästissä olevat työt. Keskeytyksiä tapahtuu tarpeeksi usein, jotta muistinhallinta tulee tehtyä kunnolla. Asian voi varmistaa riittävän usein tapahtuvilla kellolaitekeskeytyksillä. Tämä vastaa yrityksessä tilannetta, jossa tilojen hallinta on ohjeistuksen avulla hajautettu kaikille hallintoa tekeville. Aina kun joku tarvitsee salin tai kokoushuoneen, hän itse tekee tilan varauksen annettua ohjeistusta käyttäen. Samat tehtävät tulee tehtyä, mutta suorittaja voi vaihtua joka kerta.

Joissakin tapauksissa on välttämätöntä, että hallintotehtävää suoritettaessa suoritus tapahtuu suorittimen etuoikeutetussa tilassa. Jos tehtävä on toteutettu prosessina, niin kyseinen prosessi suorittaa aina eutuoikeutettuna prosessina. Jos toteutus on aliohjelmana, niin sitä voidaan kutsua käyttöjärjestelmän palvelupyynnön (SVC), jolloin suoritus tapahtuu myöskin etuoikeutetussa tilassa.

Aika usein kuitenkin riittää ihan tavallinen käyttäjätason suoritustila. Tehtävän suorittavat prosessit ovat tällöin tavallisia käyttäjätason prosesseja ja hallintotehtäviä tekevät tavalliset aliohjelmat, joita kutsutaan aika ajoin esim. keskeytyskäsittelijöistä.

## Käyttöjärjestelmän palveluiden toteutus prosessien ja aliohjelmien avulla
Useat käyttöjärjestelmän tehtävistä ovat palveluiden tarjontaa. Esimerkiksi kovalevyn laiteajuri on palvelu, jota kutsumalla kyseistä kovalevyä on helppo käyttää. Erilaiset käyttöjärjestelmän tarjoamat palvelut tekevät koko järjestelmän käyttämisestä helppoa. Sovellukset käyttävät kaikkia järjestelmän resusseja noiden palveluiden kautta ja palvelurajapinnat piilottavat resurssien vähemmät tärkeät yksityiskohdat niitä käyttäviltä sovelluksilta. Esimerkiksi kirjoittaessasi tekstiä word-dokumenttiin on todella kätevää vain klikata kyseistä dokumenttia näyttöpäätteen ikkunassa, valita editoitava kohta hiirellä klikkaamalla ja naputtelemalla uutta sisältöä näppäimistöltä. On mukavaa, kun ei tarvitse erikseen miettiä, (a) minkä tyyppiseltä kovalevyltä dokumentti alkuaan luettiin, (b) minne päin muistia se on tallennettu, (c) kuinka pääseen editoimaan tiedostoa sen 345. merkin kohdalta tai (d) minkä tyyppinen näppäimistö minulla on käytössäni.

Sen lisäksi, että käyttöjärjestelmän palvelut helpottavat sovellusten käyttöä, ne tekevät myös sovellusten toteuttamisesta helpompaa. Sovellusten suunnittelussa ei tarvitse ottaa lainkaan kantaa siihen, minkälaisia kovalevyjä tai näyttöjä sovellukset käyttävät. Sama sovellus toimii sellaisenaan eri ympäristöissä ja erilaisten laitteiden kanssa, kun käyttöjärjestelmän palvelut ratkovat nuo yhteensopivuusongelmat suoritusaikana.

Sovelluksille tarjottavat palvelut voi toteuttaa (etuoikeutettuina) aliohjelmina, joita kutsutaan tavallisten aliohjelmakutsujen (esim. CALL-käsky) tai käyttöjärjestelmäpalvelujen kutsujen (SVC) avulla. Palvelun päätyttyä niistä palataan kutsuvaan rutiiniin tavalliseen tapaan (EXIT, IRET). Ongelmana tällaisissa aliohjelmatoteutuksissa on, että useampi prosessi on voinut kutsua samaa palvelua samanaikaisesti. Palveluiden toteutus täytyy tehdä huolella, jotta samanaikaisesti meneillään olevat palvelut eivät sotke toisiaan.

Toinen tapa toteuttaa sovelluksille tarjottava palvelu on tehdä siitä prosessi. Palvelun käyttö tapahtuu nyt vähän eri tavalla. Kun jokin sovellus haluaa käyttää palvelua, se lähettää palvelun tarjoajalle palvelupyyntöviestin. Palvelun tarjoaja lukee uuden palvelupyyntöviestin sitten kun se hänelle sopii, suorittaa pyydetyn palvelun ja lopulta vastaa sovellukselle sopivalla vastausviestillä. Yleensä palvelua pyytänyt prosessi jää heti palvelupyynnön lähetettyään odottamaan vastausviestiä, eikä tee siis mitään odotusaikana. Toisaalta, yhtä hyvin se voi tehdä ensin jotain muuta ja sitten vasta jäädä odottamaan vastausviestiä, kun työn eteneminen on siitä kiinni. Samanaikaisuusongelman hallinta on nyt helpompaa, kun palvelin prosessi käsitellä vain yhtä pyyntöä kerrallaan.

Kumpikaan hallinnon ja palveluiden toteutustavoista (prosessina tai aliohjelmana) ei ole absoluuttisesti sen parempi kuin toinenkaan. Nykyisissä järjestelmissä molemmat tavat ovat yhtä aikaa käytössä, kussakin hallinto- tai palvelutehtävässä juuri siihen nyt sopivammalla tavalla teotutettuna.

### Esimerkki: laiteajuri etuoikeutettuna aliohjelmana
Laiteajuri voidaan toteuttaa etuoikeutettuna käyttöjärjestelmän palvelurutiinina. Se suorittaa etuoikeutetussa tilassa, koska sen täytyy pystyä käyttämään kyseistä laitteistoa. Fyysisten laitteiden käyttö halutaan rajata tapahtuvan ainoastaan etuoikeutetussa tilassa, jotta tavalliset sovellukset eivät pääse laitteisiin suoraan käsiksi.

Laiteajuria kutsutaan nyt käyttöjärjestelmän palvelupyyntökäskyn (SVC) avulla ja kontrolli palaa takaisin kutsuvaan sovellukseen IRET-käskyllä. Laiteajurin suorituksen aikana voi tapahtua keskeytyksiä, joten käyttöjärjestelmä voi antaa suoritusvuoron muille prosesseille. Myös ne voisivat olla samaan aikaan suorittamassa tätä laiteajuria ja tämä mahdollisuus täytyy ottaa huomioon laiteajurin ohjelmoinnissa.

-- kuva  luento 8, kalvo 15    ch-4-3-ajuri-etuoik-aliohj-draft.jpg

![Vasemmalla sovelluksen prosessi, jossa nuoli alaspäin kuvaamassa suorituksen etenemistä. Jossain kohtaa suoritusta tulee SVC-käsky, jolloin kontrollinuoli siirtyy oikealla puolella olevalle laiteohjaimelle. Laiteohjain on toteutettu etuoikeutettuna aliohjelmana eli käyttöjärjestelmäpalveluna. Kun laiteohjain saa tehtävänsä tehtyä, kontrollinuoli palaa takaisin sovelluksen puolelle IRET-käskyllä.](./ch-4-3-ajuri-etuoik-aliohj-draft.jpg)
<div>
<illustrations motive="ch-4-3-ajuri-etuoik-aliohj-draft" frombottom="0" totalheight="100%"></illustrations>
</div>

### Esimerkki: laiteajuri osittain etuoikeutettuna aliohjelmana
Toinen mahdollisuus on jakaa laiteajurin koodi kahteen osaan, jolloin vain (toivottavasti paljon) pienempi osa siitä suorittaa etuoikeutetussa tilassa. Nyt sovellus kutsuu laiteajurin kutsurajapintaa tavallisella aliohjelmien kutsukäskyllä (CALL), josta kontrolli siirtyy tarvittaessa etuoikeutettuun tilaan käyttöjärjestelmän palvelupyyntökäskyn (SVC) avulla. Etuoikeutetussa tilassa suorittava koodi on nyt huomattavasti pienempi kuin edellisessä esimerkissä, joten sen toteutus on helpompi tehdä. Samanaikaisuuden hallintaongelmat ovat kuitenkin samanlaisia kuin aikaisemminkin.

Lisäetuna laiteajurin tässä toteutusmallissa on, että kutsurajapinta voi olla sama lähes kaikille saman tyypin laitteiden ajureille. Ainoastaan pienempi etuoikeutetussa tilassa suorittava moduuli täytyy erikseen räätälöidä kullekin laitteelle sopivaksi.

-- kuva  luento 8, kalvo 16    ch-4-3-ajuri-user-etuoik-aliohj-draft.jpg

![Vasemmalla sovelluksen prosessi, jossa nuoli alaspäin kuvaamassa suorituksen etenemistä. Jossain kohtaa suoritusta tulee CALL-käsky, jolla kontrollinuoli siirtyy kuvan keskelle suorittamaan laiteajurin tavallisessa suoritustilassa olevaa koodia. Jossain vaiheessa laiteajuri tarvitsee etuoikeutettua tilaa, jota se kutsuu SVC-käskyllä. Kontrollinuoli siirtyy oikeaan reunaan, jossa laiteajurin etuoikeutettu puoli sijaitsee. Lopulta etuoikeutettu palvelun osa päättyy, ja kontrolli palaa laiteajurin tavalliselle puolelle IRET-käskyllä. Lopulta laiteajurin suoritus päättyy ja kontrolli palaa sovellukselle RETURN-käskyllä.](./ch-4-3-ajuri-user-etuoik-aliohj-draft.jpg)
<div>
<illustrations motive="ch-4-3-ajuri-user-etuoik-aliohj-draft" frombottom="0" totalheight="100%"></illustrations>
</div>

### Esimerkki: laiteajuri prosessina
Kolmas vaihtoehto on toteuttaa ajuri omana prosessinaan. Prosesseja ei kutsuta, vaan niiltä pyydetään palveluita viestien avulla. Sovellukset eivät suoraan voi lähettää viestejä muille prosesseille, mutta käyttöjärjestelmä tarjoaa viestienvälityspalvelun. Kun sovellus haluaa laiteajurin tekevät jotain, se kutsuu aliohjelmana laiteajurin tynkää, joka sitten lähettää viestin itse ajurille ja jää odottamaan vastausta. Ajuri saa palvelupyyntöviestin vastaan ja käsittelee sen aikanaan. Sitten se lähettää vastausviestin, jonka ajurin tynkää suorittava sovellus ottaa vastaan. Kontrolli palaa tyngästä sovellukselle ja toiminta jatkuu normaalisti.

Sovellusten ei tarvitse tietää, onko laiteajuri toteutettu omana prosessinaan tai ei. Sovellukset kutsuvat rajapinta-aliohjelmia ja laiteajurin tynkiä ihan samalla tavalla. Kontrolli palaa niistä lopulta takaisin sovelluksille normaalisti. Sama pätee myös muihin käyttöjärjestelmäpalveluihin ja sovellukset käyttävät niitä palveluiden omien rajapintojen kautta.

-- kuva  luento 8, kalvo 17    ch-4-3-ajuri-stub-etuoik-prosessi-draft.jpg

![Vasemmalla sovelluksen prosessi, jossa nuoli alaspäin kuvaamassa suorituksen etenemistä. Jossain kohtaa suoritusta tulee CALL-käsky, jolla kontrollinuoli siirtyy kuvan keskelle suorittamaan laiteajurin tynkää eli stub'ia, jonka ainoa tehtävä on toteuttaa viestinvälitys. Tynkä-aliohjelma lähettää viestin laiteajuriprosessille kuvan oikeassa reunassa, jossa laiteajuri ottaa sen vastaan jossain vaiheessa. Laiteajuri käsittelee palvelupyynnön ja lähettää sovellusprosessille, joka on odottamassa sitä tynkä-aliohjelmassa. Tynkä-aliohjelma saa vastausviestin laiteajurilta ja palauttaa kontrollin sovellukselle RETURN-käskyllä.](./ch-4-3-ajuri-stub-etuoik-prosessi-draft.jpg)
<div>
<illustrations motive="ch-4-3-ajuri-stub-etuoik-prosessi-draft" frombottom="0" totalheight="100%"></illustrations>
</div>

-- Quizes 4.3.1-5. 
<div><quiznator id="5c35e4fdddb6b814af31d29d"></quiznator></div>
<div><quiznator id="5c35e91e99236814c5bb3e64"></quiznator></div>
<div><quiznator id="5c35eb1bfd9fd71425c5deff"></quiznator></div>
<div><quiznator id="5c35ed8a99236814c5bb3e78"></quiznator></div>
<div><quiznator id="5c35efe0244fe21455cb228e"></quiznator></div>
