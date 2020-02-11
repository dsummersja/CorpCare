import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import profits2 from '../img/profits2.svg'
import planet from '../img/planet.svg'
import people from '../img/people.svg'
import mm from '../img/mm.png'
import khord from '../img/khord.svg'
import ali from '../img/ali.jpg'
import jomarie from '../img/jomarie.jpg'
import kemesha from '../img/kemesha.jpg'
import dominic from '../img/dominic2.png'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              'black 0.5rem 0px 0px, black -0.5rem 0px 0px',
            backgroundColor: 'black',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              'black 0.5rem 0px 0px, black -0.5rem 0px 0px',
            backgroundColor: 'black',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>
                <div className="columns">
                  <div className="column">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Who We Are
                    </h3>
                    <p>The CorpCare team is made up of highly professional and qualified young people dedicated to equipping private sector organisations with the tools to thrive and create meaningful social impact. As the workforce of the future, we work to build companies of the future, all while putting people first. </p>
                    <div className="box">
                      <article className="media">
                        <div className="media-left">
                          <figure className="image is-128x128">
                            <img className="is-rounded" src={ali} alt="Image" />
                          </figure>
                        </div>
                        <div className="media-content">
                          <div className="content">
                            <p>
                              <strong>Ali Matalon</strong>
                              <p>Managing Director</p>
                              <p>Our managing Director, Ali Matalon, holds a Masters in Public Administration from Columbia University with expertise in Urban and Social Policy. Her passion for human-centered design and policy was nurtured during her time at Northeastern University’s Social Enterprise Institute and later as an advocacy support specialist with the United Nations High-Level Panel on Women’s Economic Empowerment. Ali manages several large-scale projects inclusive of the World Economic Forum’s Global Shapers Kingston Hub youth mentorship programme “Project MENd”. She is CSR certified and was recently named an Eisenhower Youth Leader for her work developing CorpCare and goals to use that work to sensitize the corporate world in Jamaica. Ali believes that if private sector resources are allocated more effectively to social causes, all Jamaicans would benefit. </p>
                            </p>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div className="box">
                      <article className="media">
                        <div className="media-left">
                          <figure className="image is-128x128">
                            <img className="is-rounded" src={jomarie} alt="Image" />
                          </figure>
                        </div>
                        <div className="media-content">
                          <div className="content">
                            <p>
                              <strong>Jomarie Malcolm</strong>
                              <p>Communications Director</p>
                              <p>Our Communications Director, Jomarie Malcolm, is both a branding expert with over 10 years of experience, as well as, an attorney-at-law. Jomarie serves as the Founder and CEO of Malcolm Mavericks, a brand strategy and PR firm dedicated to effective communication and authentic branding. Malcolm Mavericks has partnered with CorpCare to create a seamless experience in executing CSR activities and garnering the appropriate brand equity associated with those activities. Jomarie is a motivational speaker, branding educator and business development mentor. She is a member of the World Economic Forum Global Shapers Kingston Hub, President of Campion College Alumni Association and an active member of her community. Jomarie believes that CSR is a core business priority, in addition to being a tool through which companies communicate their values to staff and the wider communities they serve. </p>
                            </p>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div className="box">
                      <article className="media">
                        <div className="media-left">
                          <figure className="image is-128x128">
                            <img className="is-rounded" src={kemesha} alt="Image" />
                          </figure>
                        </div>
                        <div className="media-content">
                          <div className="content">
                            <p>
                              <strong>Kemesha Swaby</strong>
                              <p>Strategy, Monitoring & Evaluation Specialist </p>
                              <p>Our Strategy and Monitoring and Evaluation Expert, Kemesha Swaby, holds a MA in Social Policy, with expertise in Comparative Analysis, Global Policy and Impact Assessment. Kemesha serves as a Lecturer of International Relations at the University of the West Indies, as a Co-Host on Nationwide Radio, a Consultant and Researcher to several private and public sector organisations in Jamaica and the Caribbean. Kemesha is a World Economic Forum Global Shaper Kingston Hub member, a Mentor, Speaker, and Master of Ceremonies. Kemesha works to ensure that CorpCare’s recommended CSR strategies meet the needs of each of our client organisations and fall within the Government of Jamaica’s Vision 2030. She has been a leader on the development of our proprietary CSR Diagnostic Tool for organisations around the world and is committed to evidenced-based giving.</p>
                            </p>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div className="box">
                      <article className="media">
                        <div className="media-left">
                          <figure className="image is-128x128">
                            <img className="is-rounded" src={dominic} alt="Image" />
                          </figure>
                        </div>
                        <div className="media-content">
                          <div className="content">
                            <p>
                              <strong>Dominic Summers</strong>
                              <p>Technology & Service Design Specialist</p>
                              <p>Our Technology and Service Design Specialist, Dominic Summers, is a software engineer by trade and a creative by design. Dominic is the CEO of Khord.Co, a software design company focused on providing businesses with solutions for a variety of business needs from customer-facing software such as websites and apps to improving internal company workflows with custom automations. Dominic and Khord already serve an array of local and international clients to ensure their organizations are operating at optimal efficiency and have partnered with CorpCare to continue doing that with a focus on CSR in Jamaica. Dominic is dedicated to building tech tools that make CSR activities easy and effective through accessible, user-friendly and data-driven software. He believes that no matter the industry, businesses have a responsibility to the communities they operate within and impact through their work.</p>
                            </p>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                    <p>The CorpCare CSR model follows the key tenants of a Triple Bottom Line (TBL or 3BL) business or accounting framework. In fact, the TBL can be used to better understand a company’s commitment to CSR activities. </p>
                  </div>
                </div>
                <h2>The 3 P's of the TBL</h2>
                <div className="columns">
                  <div className="column">
                    <img src={profits2} alt="Profits" style={{ height: '15rem' }}  />
                    <h4>Profits</h4>
                    <p>A traditional measure of success</p> 
                  </div>
                  <div className="column">
                    <img src={people} alt="People" style={{ height: '15rem' }} />
                    <h4>People</h4>
                    <p>A socially-focused measure of success</p>  
                  </div>
                  <div className="column">
                    <img src={planet} alt="The Planet" style={{ height: '15rem' }} />
                    <h4>The Planet</h4> 
                    <p>A measure of success that analyses environmental and community impact overtime.</p>
                  </div>
                </div>
                <h1>How Does CSR benefit businesses?</h1>
                <ul>
                  <li>Increased brand recognition</li>
                  <li>Positive brand association</li>
                  <li>Greater employee satisfaction and lower turnover rates </li>
                  <li>More committed staff </li>
                  <li>Attracting millennial and highly educated talent </li>
                  <li>The access to testing innovative solutions to real social problems which may in the long run become significant business opportunities </li>
                  <li>A more efficient and reliable supply chain based on positive relationships</li>
                </ul>
                <h1>Why should you work with us?</h1>
                <p>CorpCare provides companies with high-quality strategic planning and project management services akin to any consulting firm but every dollar spent with CorpCare is an investment in Jamaica’s social, economic and political development. We align our client company’s goals with the appropriate global development goals. We focus on Public Private Partnerships (PPPs) and low-cost high-impact poverty alleviation technologies to ensure every stakeholder has access to the best possible resources and the ability to use them in achieving collective goals. Our model is founded on human-centered design principles and the radical notion that triple-bottom-line businesses (profits, people and the planet) are the most successful.
</p>
                <h1>Our Clients</h1>
                <p>At CorpCare, we work to understand our clients’ specific challenges and strategize the most effective solutions. Our clients vary in industry, services and product offerings but unite under a common understanding that Corporate Social Responsibility (CSR) is a cornerstone of doing business effectively in the 21st century. </p>
                <p>We’re creating a future of work founded on the power of business as a transformative tool in creating equity, social justice and increasing economic and political development. <a href="/contact">Contact</a> the CorpCare team to understand how your organization can become a leader in the world of social business. 
</p>
                <h1>Our Partners</h1>
                <div className="columns">
                  <div className="column is-centered">
                    <img src={mm} style={{ height: '10rem' }}></img>
                    </div>
                  <div className="column is-centered">
                    <img src={khord} className="is-centered" style={{ height: '10rem', width: '20rem'}}></img>
                  </div>
                </div>
                <p>The work we do at CorpCare is founded on strong partnerships and the belief that when we work together, we can deliver the most innovative, creative and impactful services. That’s why we have teamed up with Khord.Co a software and product development company and Malcolm Mavericks a communications and branding firm to deliver the best results possible for our clients. Through these partnerships we’re fully equipped to deliver: High level CSR strategies, Project Management expertise, PR and Communications tools to increase brand equity and positive brand association, and Tech Solutions for system management, monitoring and evaluation. </p>
                <p>More recently, we have joined forces with Jamaican’s for Justice, a non-profit organization dedicated to eradicating injustice through legal services and Human Rights education, to help private sector organisations in Jamaica better understand their role in creating safe and discrimination-free work environments. We know that our work is dependent on the work of others, that our communities need us to focus less on competition and more on connection in order to create a more just and equitable world.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
