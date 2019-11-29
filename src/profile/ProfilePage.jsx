import React from 'react';
import { Route } from 'react-router-dom';
import Profile from './components/Profile';

const ProfilePage = () => <Route path="/profile/:username" component={Profile} />;

export default ProfilePage;
