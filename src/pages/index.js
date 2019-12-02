import React from "react"
import Container from "../components/container"
import Header from "../components/header"
import Heading from "../components/heading"
import Experience from "../components/experience"

const experiences = () => (
  <div>
    <Experience
     from="Oct 2016"
     to="Now"
     title="Software Engineer" 
     position="iOS" 
     at="Acciio Inc." 
     url="https://acciio.com" />
    <Experience 
     from="Apr 2014"
     to="Oct 2016" 
     title="Software Engineer" 
     position="iOS / Web" 
     at="IAMCOMPANY Inc." 
     url="http://www.nhnedu.com" />
    <Experience
     from="Jun 2012" 
     to="Mar 2014" 
     title="Software Engineer" 
     position="iOS" 
     at="Kakao Corp."
     url="https://kakaocorp.com" />
    <Experience
     from="Mar 2011" 
     to="Jun 2012" 
     title="Software Engineer" 
     position="iOS / Backend" 
     at="ISEEYOU Co., Ltd." />
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
