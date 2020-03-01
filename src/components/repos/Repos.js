import React from 'react';
import Spinner from '../layout/Spinner';
import RepoItem from './RepoItem';
import PropTypes from 'prop-types';

const Repos = ({ repos, loading }) => {
  if (loading) return <Spinner />;
  return repos.map(repo => <RepoItem key={repo.id} repo={repo} />);
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
  loading: PropTypes.bool
};

export default Repos;
