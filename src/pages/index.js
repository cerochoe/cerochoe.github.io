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
    <Experience
     from="Jan 2010" 
     to="Feb 2011" 
     title="Undergraduate Research Assistant"  
     at="CV Lab at POSTECH" 
     url="http://cvlab.postech.ac.kr/lab/" />
  </div>
)

const education = () => (
  <div>
    <Experience
     from="2008" 
     to="2016" 
     title="B.S. in Computer Science and Engineering" 
     at="POSTECH"
     url="http://postech.edu" />
  </div>
)

export default () => (
  <Container>
    <Header />
    <Heading title="Experience"/>
    {experiences()}
    <Heading title="Education"/>
    {education()}
    <Heading title="Contacts"/>
  </Container>
)
