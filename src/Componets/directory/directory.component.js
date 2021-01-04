
import React from 'react'

import {  connect} from 'react-redux'
import { createStructuredSelector } from 'reselect';

import  selectDirectorySections  from '../../redux/directory/directory.selectors';
import MenuItem from '../Menu-items/Menu-Item.component'
import './directory.style.scss'
 const Directory =({sections})=>{
        return(
            <div className='directory-menu'>
{  sections.map(({title,imageUrl,id,size,linkUrl})=>(
        <MenuItem key={id} title={title} image={imageUrl} size={size} linkUrl={linkUrl}/>
    ))}
            </div>
        )
    }
    
    const mapStateToProps = createStructuredSelector({
      sections: selectDirectorySections
    });
    
  export default connect(mapStateToProps)(Directory);


