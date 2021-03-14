import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title='404: Not found' />
    <div className='site-container not-found-page'>
      <div className='container text-center'>
        <h1>PAGE NOT FOUND</h1>
        <p>
          Uh oh! Either an error has occurred, or the page you are looking for
          does not exist.
        </p>
        <p>
          Go back to return home or browse through some of my latest posts on
          the blog.
        </p>
      </div>
    </div>
  </Layout>
);

export default NotFoundPage;
