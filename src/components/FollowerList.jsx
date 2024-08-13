import React from 'react';
import { Button, Table } from 'react-bootstrap';

const FollowerList = ({ followers, onRemove }) => {
  return (
    <div className='table-responsive'>
      <Table striped hover className='text-center table-dark'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Twubric Score</th>
            <th>Friends</th>
            <th>Influence</th>
            <th>Chirpiness</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {followers.map((follower) => (
            <tr key={follower.uid}>
              <td>{follower.username}</td>
              <td>{follower.twubric.total}</td>
              <td>{follower.twubric.friends}</td>
              <td>{follower.twubric.influence}</td>
              <td>{follower.twubric.chirpiness}</td>
              <td>
                <Button variant='danger' onClick={() => onRemove(follower.uid)}>Remove</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default FollowerList;