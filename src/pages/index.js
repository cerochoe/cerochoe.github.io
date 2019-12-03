import React from "react"
import Container from "../components/container"
import Header from "../components/header"
import Heading from "../components/heading"
import Experience from "../components/experience"
import Remark from "../components/remark"
import Contact from "../components/contact"
import Footer from "../components/footer"

const experiences = () => (
  <div>
    <Experience
     from="Oct 2016"
     to="Now"
     title="Software Engineer" 
     position="iOS" 
     at="Acciio Inc." 
     url="https://acciio.com"
     remark="[1]" />
    <Experience 
     from="Apr 2014"
     to="Oct 2016" 
     title="Software Engineer" 
     position="iOS / Web" 
     at="IAMCOMPANY Inc." 
     url="http://www.nhnedu.com" 
     remark="[2]" />
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
     at="ISEEYOU Co., Ltd." 
     remark="[3]" />
    <Experience
     from="Jan 2010" 
     to="Feb 2011" 
     title="Undergraduate Research Assistant"  
     at="CV Lab at POSTECH" 
     url="http://cvlab.postech.ac.kr/lab/" />
  </div>
)

const remarks = () => (
  <div>
    <Remark content="-"/>
    <Remark content="[1] Acquired by and became a subsidiary of Kakao Corp." />
    <Remark content="[2] Acquired by NHN Corp., and renamed to NHN Edu Corp." />
    <Remark content="[3] Acquired by Kakao Corp." />
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

const contacts = () => (
  <div>
    <Contact href="http://www.linkedin.com/in/cerowind" channel="linkedin" />
    <Contact href="http://www.facebook.com/jeongbin.choe" channel="facebook" />
    <Contact href="mailto:cerowind@gmail.com" channel="email" />
  </div>
)

export default () => (
  <Container>
    <Header />
    <Heading title="Experience"/>
    {experiences()}
    {remarks()}
    <Heading title="Education"/>
    {education()}
    <Heading title="Contacts"/>
    {contacts()}
    <Footer />
  </Container>
)
