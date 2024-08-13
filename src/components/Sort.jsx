import React, { useState } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';

const Sort = ({ onSort }) => {
  const [sortCriteria, setSortCriteria] = useState({
    criteria: null,
    order: 'asc'
  });

  const handleSort = (criteria) => {
    const newOrder = sortCriteria.criteria === criteria ? (sortCriteria.order === 'asc' ? 'desc' : 'asc') : 'asc';
    setSortCriteria({ criteria, order: newOrder });
    onSort(criteria, newOrder);
  };

  return (
    <div className='mb-4'>
      <h3 className="mb-3">Sort By</h3>
      <ButtonGroup vertical>
        {['total', 'friends', 'influence', 'chirpiness'].map(criteria => (
          <Button
            key={criteria}
            variant={sortCriteria.criteria === criteria ? 'dark' : 'outline-dark'}
            onClick={() => handleSort(criteria)}
            className='mb-2'
          >
            {criteria.charAt(0).toUpperCase() + criteria.slice(1).replace('_', ' ')}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
};

export default Sort;
