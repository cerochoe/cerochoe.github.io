import React from "react"
import Container from "../components/container"
import Header from "../components/header"
import Heading from "../components/heading"
import Experience from "../components/experience"

const experiences = () => (
  <div>
    <Experience from="Oct 2016" to="Now" position="Software Engineer (iOS)" at="Acciio Inc." />
    <Experience from="Apr 2014" to="Oct 2016" position="Software Engineer (iOS, Web)" at="IAMCOMPANY Inc." />
    <Experience from="Jun 2012" to="Mar 2014" position="Software Engineer (iOS)" at="Kakao Corp." />
    <Experience from="Mar 2011" to="Jun 2012" position="Software Engineer (iOS, Backend)" at="ISEEYOU Co., Ltd." />
  </div>
)

export default () => (
  <Container>
    <Header />
    <Heading title="Experience"/>
    {experiences()}
    <Heading title="Education"/>
    <Heading title="Contacts"/>
  </Container>
)
