import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import EditArticleForm from '../../forms/components/EditArticleForm';
import { articleProps } from '../../propTypes';
import { getArticleAction } from '../actions';
import SpinnerWrapper from '../../spinner/SpinnerWrapper';

class EditArticle extends React.Component {
  componentDidMount() {
    const { getArticle, match } = this.props;
    getArticle(match.params.slug);
  }

  render() {
    const { data, isLoading } = this.props;
    return (
      <div>
        <h1>Edit Article</h1>
        <SpinnerWrapper isActive={isLoading}>
          <EditArticleForm article={data} />
        </SpinnerWrapper>
      </div>
    );
  }
}

EditArticle.propTypes = {
  getArticle: PropTypes.func.isRequired,
  data: articleProps,
  isLoading: PropTypes.bool,
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string,
    }),
  }).isRequired,
};

EditArticle.defaultProps = {
  data: {},
  isLoading: false,
};

const mapDispatchToProps = ({ currentArticle: { data, isLoading } }) => ({
  data,
  isLoading,
});

const dispatchActions = {
  getArticle: getArticleAction,
};

export default connect(mapDispatchToProps, dispatchActions)(withRouter(EditArticle));
