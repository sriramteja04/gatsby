import React from 'react';
import Layout from '../components/Layout';

import { connect } from 'react-redux';
import { showImage } from '../store/actions/actions';

class tourSagaTemplate extends React.Component {
  componentDidMount() {
    this.props.showImage(this.props.pageContext.slug);
  }
  render() {
    this.props.image &&
      console.log(this.props.image[0].fields.images[0].fields.file.url);
    return (
      <Layout>
        {this.props.image && (
          <img
            src={this.props.image[0].fields.images[0].fields.file.url}
            alt={this.props.pageContext.slug}
          />
        )}
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  image: state.image,
});

export default connect(
  mapStateToProps,
  { showImage }
)(tourSagaTemplate);
