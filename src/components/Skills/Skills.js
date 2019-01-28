import React from 'react';
import nodelogo from './nodelogo.png';
import reactlogo from './reactlogo.png'
import htmllogo from './htmllogo.png'
import csslogo from './csslogo.png';
import gitlogo from './gitlogo.svg';
import jslogo from './jslogo.png';
import sqllogo from './sqllogo.png';
import './Skills.css';

const Skills = () => {
	return (
		<div>
			<div className='center'>
				<p className='f3 ba dib pa2 br-pill dim pointer'> Skills </p>
				<div className='w-50 center bb bl br'>
					<img className='logo' alt='nodelogo' src={nodelogo}/>
					<img className='logo' alt='reactlogo' src={reactlogo}/>
					<img className='logo' alt='htmllogo' src={htmllogo}/>
					<img className='logo' alt='csslogo' src={csslogo}/>
					<img className='logo' alt='jslogo' src={jslogo}/>
					<img className='logo' alt='sqllogo' src={sqllogo}/>
					<img className='logo' alt='gitlogo' src={gitlogo}/>

				</div> 
			</div>
		</div>
	);
}

export default Skills;