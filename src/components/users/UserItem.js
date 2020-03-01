import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { avatar_url, login, html_url } }) => {
  //const { avatar_url, login, html_url } = props.user; // destructuring the object
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt=''
        className='round-img'
        style={{ width: '60px' }} //for inline css styling
      />
      <h3>{login}</h3>
      <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
        More
      </Link>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;

/*
class Test extends UserItem {
  render() {
    return console.log('this is test render function');
  }
}

console.log(new Test());

class Test2 extends Test {
  render() {
    return console.log('this is test2 render function');
  }
}

//console.log(new Test2());
*/
