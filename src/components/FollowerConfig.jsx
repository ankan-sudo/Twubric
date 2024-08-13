import { useEffect, useState } from 'react';
import axios from 'axios';
import FollowerList from './FollowerList';
import Filter from './Filter';
import Sort from './Sort';
import FollowerCard from './FollowerCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const FollowerConfig = ({ viewMode }) => {
  const [followers, setFollowers] = useState([]);
  const [filteredFollowers, setFilteredFollowers] = useState([]);

  useEffect(() => {
    axios
      .get('https://gist.githubusercontent.com/pandemonia/21703a6a303e0487a73b2610c8db41ab/raw/82e3ef99cde5b6e313922a5ccce7f38e17f790ac/twubric.json')
      .then((response) => {
        const convertedFollowers = response.data.map((follower) => {
          follower.join_date = new Date(follower.join_date * 1000);
          return follower;
        });
        setFollowers(convertedFollowers);
        setFilteredFollowers(convertedFollowers);
        console.log(convertedFollowers)
      });
  }, []);

  const handleFilter = (startDate, endDate) => {
    if (!startDate || !endDate) return;
    const filtered = followers.filter(follower => {
      const joinDate = new Date(follower.join_date);
      return joinDate >= startDate && joinDate <= endDate;
    });
    setFilteredFollowers(filtered);
  };

  const handleSort = (criteria, order) => {
    const sorted = [...filteredFollowers].sort((a, b) => {
      const aValue = criteria === 'join_date' ? a[criteria] : a.twubric[criteria];
      const bValue = criteria === 'join_date' ? b[criteria] : b.twubric[criteria];
      const comparison = aValue - bValue;
      return order === 'asc' ? comparison : -comparison;
    });
    setFilteredFollowers(sorted);
  };

  const handleRemove = (id) => {
    setFilteredFollowers(filteredFollowers.filter((follower) => follower.uid !== id));
  };

  return (
    <div className='row'>
      <div className='col-md-3'>
        <Filter onFilter={handleFilter} />
        <Sort onSort={handleSort} />
      </div>
      <div className='col-md-9'>
        {viewMode === 'list' ? (
          <FollowerList followers={filteredFollowers} onRemove={handleRemove} />
        ) : (
          <div className='d-flex flex-wrap'>
            {filteredFollowers.map(follower => (
              <FollowerCard key={follower.uid} follower={follower} onRemove={handleRemove} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FollowerConfig;
