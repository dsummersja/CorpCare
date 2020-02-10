import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import profits2 from '../img/profits2.svg'
import planet from '../img/planet.svg'
import people from '../img/people.svg'

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
                  <div className="column">Malcolm Mavericks *insert logo*</div>
                  <div className="column">Khord Collaborative *insert logo*</div>
                </div>
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
