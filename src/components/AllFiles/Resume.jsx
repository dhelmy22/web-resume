import React from 'react';
import PropTypes from 'prop-types';
import {
    Table,

} from 'reactstrap';


const Resume = (props) => {

return(
    <>
        <h2>Education</h2>
        <Table  hover className='wlbody'>
      <thead>
        <tr>
          <th>#</th>
          <th>SCHOOL</th>
          <th>DEGREE</th>
          <th>GRADUATION</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">*</th>
          <td>Eleven Fifty Academy</td>
          <td>Software Development</td>
          <td>Jan 2021</td>
        </tr>
        <tr>
          <th scope="row">*</th>
          <td>Eleven Fifty Academy</td>
          <td>Web Development</td>
          <td>Sept 2020</td>
        </tr>
        <tr>
          <th scope="row">*</th>
          <td>Indiana Institute of Technology</td>
          <td>General Studies</td>
          <td>June 2015</td>
        </tr>
        <tr>
          <th scope="row">*</th>
          <td>Red Rocks Community College</td>
          <td>AutoCad</td>
          <td>June 2013</td>
        </tr>
      </tbody>
    </Table>
    <hr/>
    <h4>Skills: Teamwork / Html5 / CSS3 / JavaScript / React.js / Node.js / PostgreSQL / Reactstrap / Bootstrap4 / GitHub / Heroku / Postman</h4>
      <hr/>
          <h2>Life Experience</h2>
      <Table  hover className='wlbody'>
      <thead>
        <tr className='tr'>
          <th>#</th>
          <th>Company</th>
          <th>Position</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody className='tb'>
        <tr>
          <th scope="row">*</th>
          <td>Military</td>
          <td>Retired</td>
          <td>Jan 2012 - Present</td>
        </tr>
        <tr>
          <th scope="row">*</th>
          <td>US Army</td>
          <td>Convoy Security / Petroleum Supply</td>
          <td>Jan 2008 - Jan 2012</td>
        </tr>
        <tr>
          <th scope="row">*</th>
          <td>US Marine Corps</td>
          <td>Combat Engineer</td>
          <td>Jan 1999 - Jan 2008</td>
        </tr>
        <tr>
          <th scope="row">*</th>
          <td>Assmann Corp - USA</td>
          <td>Sales / Engineering</td>
          <td>Oct 2018 - Oct 2019</td>
        </tr>
      </tbody>
    </Table>
    <hr/>
    <h2>Organizations</h2>
      <Table  hover className='wlbody'>
      <thead>
        <tr className='tr'>
          <th>#</th>
          <th>Name</th>
          
          <th>Date</th>
        </tr>
      </thead>
      <tbody className='tb'>
        <tr>
          <th scope="row">*</th>
          <td>VFW</td>
          
          <td>Present</td>
        </tr>
        <tr>
          <th scope="row">*</th>
          <td>American Legion</td>
          
          <td>Present</td>
        </tr>
        <tr>
          <th scope="row">*</th>
          <td>Marine Of The Year</td>
          
          <td>2005</td>
        </tr>
      </tbody>
    </Table>
    </>
)

}

export default Resume;

Table.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    size: PropTypes.string,
    bordered: PropTypes.bool,
    borderless: PropTypes.bool,
    striped: PropTypes.bool,
    dark: PropTypes.bool,
    hover: PropTypes.bool,
    responsive: PropTypes.bool,
    // Custom ref handler that will be assigned to the "ref" of the inner <table> element
    innerRef: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.string,
      PropTypes.object
    ])
    };