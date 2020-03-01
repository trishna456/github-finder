import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const [text, setText] = useState('');
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  //const { showAlert } = alertContext;

  const onChange = e => {
    setText(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (text) {
      githubContext.searchUsers(text);
      setText('');
    } else alertContext.showAlert('Please enter something', 'light');
  };

  return (
    <div>
      {/*<form onSubmit={this.onSubmit.bind(this)} className='form'>*/}
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users..'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>

      {githubContext.users.length > 0 && (
        <button
          onClick={githubContext.clearUsers}
          className='btn btn-light btn-block'
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
