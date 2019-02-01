import React from "react"
import Helmet from "react-helmet"
import Layout from "../templates/Layout"
import Container from "../components/Container"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { withLoginStateContext } from "../contexes/LoginStateContext"

const Credits = () => (
  <Layout>
    <Container>
      <Helmet title="Kiitokset ja materiaalista" />
      <h1>Kiitokset ja materiaalista</h1>
      <h2>Kurssimateriaali</h2>

      <p>Kurssimateriaalin ovat kirjoittanut Teemu Kerola.</p>
      <p>
        Kurssin materiaali on lisensoitu{" "}
        <OutboundLink
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fi"
          target="_blank"
          rel="noopener noreferrer"
        >
          Creative Commons BY-NC-ND-SA 4.0
        </OutboundLink>{" "}
        -lisenssillä, joten voit käyttää ja levittää sitä vapaasti, kunhan
        alkuperäisten tekijöiden nimiä ei poisteta. Et saa tehdä muutoksia
        materiaaleihin. Materiaalien käyttö kaupalliseen
        tarkoitukseen on ilman erillistä lupaa kielletty.
      </p>

      <h2>Kurssilla käytössä oleva teknologia</h2>

      <p>
        Kurssin sivun ovat tehneet{" "}
        <OutboundLink
          href="https://github.com/nygrenh"
          target="_blank"
          rel="noopener noreferrer"
        >
          Henrik Nygren
        </OutboundLink>{" "}
        ja{" "}
        <OutboundLink
          href="https://github.com/redande"
          target="_blank"
          rel="noopener noreferrer"
        >
          Antti Leinonen
        </OutboundLink>
        . Helsingin yliopiston{" "}
        <OutboundLink
          href="https://www.helsinki.fi/en/researchgroups/data-driven-education"
          target="_blank"
          rel="noopener noreferrer"
        >
          Agile Education Research -tutkimusryhmä
        </OutboundLink>{" "}
        on luonut ja ylläpitää kurssilla käytettyä ohjelmointitehtävien
        palautusympäristöä{" "}
        <OutboundLink
          href="https://tmc.mooc.fi"
          target="_blank"
          rel="noopener noreferrer"
        >
          Test My Code
        </OutboundLink>
        :a, Test My Coden liitännäisiä ohjelmointiympäristöhin,
        kurssimateriaalissa olevaa kyselyjärjestelmää ja muita
        kurssimateriaalissa olevia vempaimia (widgettejä).
      </p>
    </Container>
  </Layout>
)

export default withLoginStateContext(Credits)
