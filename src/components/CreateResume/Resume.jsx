import React, {useState} from 'react'

import Card from "../Cards/Card"


function Resume() {
  return (<div className='flex flex-auto m-4 gap-4 columns-2'>
    <Card template = "Template 1"/>
    <Card template = "Template 2"/>
    <Card template = "Template 3"/>
    <Card template = "Template 4"/>
  
   </div>
  )
}

export default Resume
