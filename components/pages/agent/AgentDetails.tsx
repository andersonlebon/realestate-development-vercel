import React, { FC } from 'react';
import AgentSocialLinks from './AgentSocialLinks';

interface Agent {
	full_name: string;
	designation: string;
	avatar_url: string;
	social_media_links: {
		facebook?: string;
		twitter?: string;
		instagram?: string;
	};
}

const AgentDetails: FC<{ agent: Agent }> = ({ agent }) => {
	return (
		<div className='bg-white rounded mx-3 flex flex-col justify-center items-center py-3'>
			<div className='team-details-img'>
				<img
					src={agent?.avatar_url || `/images/caleb.jpg`}
					alt='Team Member Image'
				/>
			</div>
			<h2>{agent?.full_name}</h2>
			<h6 className='text-uppercase ltn__secondary-color'>
				{agent.designation || 'No designation'}
			</h6>
			<AgentSocialLinks socialMediaLinks={agent?.social_media_links} />
		</div>
	);
};

export default AgentDetails;
