import React from 'react';
import { connect } from 'react-redux';
import { Avatar, Descriptions } from 'antd';
import PropTypes from 'prop-types';
import { getProfileAction } from '../actions';
import { profileProps } from '../../propTypes';
import SpinnerWrapper from '../../spinner/SpinnerWrapper';

class Profile extends React.Component {
  componentDidMount() {
    const { match, getProfileHandler } = this.props;
    getProfileHandler(match.params.username);
  }

  render() {
    const { currentProfile } = this.props;
    return (
      <SpinnerWrapper isActive={currentProfile.isLoading}>
        <Descriptions title="User Info" bordered>
          <Descriptions.Item label="Image" span={4}>
            <Avatar shape="square" size={128} src={currentProfile.image} />
          </Descriptions.Item>
          <Descriptions.Item label="UserName" span={4}>
            {currentProfile.username}
          </Descriptions.Item>
          {currentProfile.bio && (
            <Descriptions.Item label="About me" span={4}>
              {currentProfile.bio}
            </Descriptions.Item>
          )}
          <Descriptions.Item label="Follow" span={4}>
            Follow Icon To Do
          </Descriptions.Item>
        </Descriptions>
      </SpinnerWrapper>
    );
  }
}

Profile.propTypes = {
  getProfileHandler: PropTypes.func.isRequired,
  currentProfile: profileProps.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      username: PropTypes.string,
    }),
  }).isRequired,
};

const mapStateToProps = ({ currentProfile }) => ({
  currentProfile,
});

const dispatchProps = {
  getProfileHandler: getProfileAction,
};

export default connect(mapStateToProps, dispatchProps)(Profile);
