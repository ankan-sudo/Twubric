import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Filter = ({ onFilter }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleApplyFilter = () => {
    onFilter(startDate, endDate);
  };

  return (
    <div className='mb-4'>
      <h3 className="mb-4">Filter</h3>
      <form>
        <div className="form-group mb-3">
          <label htmlFor="startDate" className="form-label px-2">Start Date</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            placeholderText="Select Start Date"
            className="form-control"
            showYearDropdown
            yearDropdownItemNumber={12}
            showMonthDropdown
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="endDate" className="form-label px-3">End Date</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            placeholderText="Select End Date"
            className="form-control"
            showYearDropdown
            showMonthDropdown
            yearDropdownItemNumber={12}
          />
        </div>
        <button type="button" onClick={handleApplyFilter} className="btn btn-dark">Apply Filter</button>
      </form>
    </div>
  );
};

export default Filter;
