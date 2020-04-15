import React from 'react';
import{NavLink} from 'react-router-dom';

const Signedinlinks = ()=>
{
  return(
      <ul className = 'right'>
          <li><NavLink to = '/'>Create Project</NavLink></li>
          <li><NavLink to = '/'>Sign Out</NavLink></li>
          <li><NavLink to = '/' className = 'btn btn-floting pink lighten-1'>Hg</NavLink></li>
      </ul>

  )
}

export default Signedinlinks;


