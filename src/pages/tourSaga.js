import React from 'react';
import { connect } from 'react-redux';

import Layout from '../components/Layout';
import Tour from '../components/TourSaga/Tours';
import { tourAction } from '../store/actions/actions';

class TourSaga extends React.Component {
  componentDidMount() {
    this.props.tourAction();
  }
  render() {
    return (
      <Layout>
        {!this.props.tours ? (
          <h1>Loading.....</h1>
        ) : (
          <Tour tours={this.props.tours} />
        )}
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  tours: state.tours,
});

export default connect(
  mapStateToProps,
  { tourAction }
)(TourSaga);
