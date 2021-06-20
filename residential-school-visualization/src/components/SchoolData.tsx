import React from 'react';
import logo from './logo.svg';
import { getSchools, School } from '../Schools/Schools.js'
import { Slider } from '@material-ui/core';

function SchoolData() {
  const [yearValue, setYearValue] = React.useState<number | number[]>(1900);

  const [schoolVisible, setSchoolVisible] = React.useState<Array<School>>([]);

  const handleYearChange = (event: any, newValue: number | number[]) => {
    setSchoolVisible(allSchools.filter(sch => {
      return (sch.yearStart <= newValue && sch.yearEnd >= newValue) ? true : false;
    }));
    setYearValue(newValue);
  }

  const allSchools: Array<School> = getSchools();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          100 Years
        </p>
        <Slider
          defaultValue={1900}
          valueLabelDisplay="auto"
          value={yearValue}
          min={1900}
          max={2000}
          step={1}
          onChange={handleYearChange}
          style={{
            width: 1500
          }}
        />
        <div>
          {schoolVisible.map((sch, idx) => {
            return (<li key={idx}>{sch.name + " " + sch.yearStart.toString() + " - " + sch.yearEnd.toString()}</li>)
          })}
        </div>
      </header>
    </div>
  );
}

export default SchoolData;