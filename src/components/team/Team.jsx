import React from 'react'
import { useContext } from 'react';
import { TeamCard } from '../cards'
import navigationContext from '../../context/navigationContext';
import { Head } from '../heading';



function Team() {
	const {employeeData} = useContext(navigationContext);
	return (
		<div className='flex flex-col min-w-[600px]'>
			<div className=' h-[150px] z-10 bg-slate-100 flex items-center justify-center'>
				<Head>Our Team</Head>
			</div>
			<div className=' h-[150px] flex mt-[-10vh] justify-center'>
			
				<div className='bg-slate-100 w-[100px] h-[100px] rotate-45 '>ksj</div>
			</div>
			<div className=' md:flex md:flex-row sm:flex-col items-center justify-center flex-wrap'>
			{
			employeeData.map((data)=>{
				return( 
				<TeamCard key={data.id} text={data.aboutEmployee} tittle={data.employeeTittle} name={data.employeeName} image={data.employeeProfilePic}/>
				)
			})
			}
			
		</div>
		</div>

	)
}

export default Team
