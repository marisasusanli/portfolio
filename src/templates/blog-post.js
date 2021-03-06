import React, { Component } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import moment from 'moment';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default class blogPost extends Component {
  render() {
    const data = this.props.data.contentfulBlogs;

    return (
      <Layout>
        <SEO
          title={data.title}
          keywords={[
            `Marisa Li`,
            `Software Engineer`,
            `Software Developer`,
            `${data.title}`,
          ]}
        />
        <div className='site-container blog-post'>
          <div className='container'>
            {data.featureImage ? (
              <Img
                className='feature-img'
                fluid={data.featureImage.fluid}
                objectFit='cover'
                objectPosition='50% 50%'
              />
            ) : (
              <div className='no-image'></div>
            )}

            <div className='details'>
              <h1 className='title'>{data.title}</h1>
              <span className='date'>
                <i className='fas fa-calendar-alt'></i>{' '}
                {moment(data.createdAt).format('LL')}
              </span>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.description.childMarkdownRemark.html,
                }}
              />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query SinglePostQuery($slug: String!) {
    contentfulBlogs(slug: { eq: $slug }) {
      id
      title
      slug
      featureImage {
        fluid(maxWidth: 1500) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
      description {
        childMarkdownRemark {
          html
        }
      }
      createdAt
    }
    contentfulSiteInformation {
      siteUrl
    }
  }
`;
