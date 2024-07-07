import React from 'react';
import JobTable from './JobTable'; 
import SearchDiv from '../../components/SearchDiv/SearchDiv';

const FindJob = () => {
  const jobListings = [
    {
      title: 'Frontend Developer',
      company: 'Tech Co.',
      description: 'We are looking for a skilled frontend developer...',
      location: 'San Francisco, CA',
    },
    {
      title: 'UX Designer',
      company: 'Design Firm',
      description: 'Join our design team to create amazing user experiences...',
      location: 'New York, NY',
    },
    {
      title: 'Software Engineer',
      company: 'Tech Innovators Inc.',
      description: 'Join our engineering team to build cutting-edge software solutions...',
      location: 'Seattle, WA',
    },
    {
      title: 'Data Scientist',
      company: 'Data Insights Co.',
      description: 'Use your analytical skills to derive insights from complex datasets...',
      location: 'Boston, MA',
    },
    {
      title: 'Marketing Manager',
      company: 'Global Marketing Group',
      description: 'Lead our marketing efforts and develop impactful campaigns...',
      location: 'Los Angeles, CA',
    },
    {
      title: 'Product Designer',
      company: 'Product Visionaries Ltd.',
      description: 'Shape the user experience of our next-generation products...',
      location: 'Austin, TX',
    },
    {
      title: 'Financial Analyst',
      company: 'Financial Services Corp.',
      description: 'Analyze financial data and assist in strategic decision-making...',
      location: 'Chicago, IL',
    },
    {
      title: 'Content Writer',
      company: 'Creative Content Creators',
      description: 'Craft compelling content for blogs, articles, and social media...',
      location: 'New York, NY',
    },
    // Add more job listings here
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Find Jobs</h1>
      <SearchDiv />
      <JobTable jobListings={jobListings} />
    </div>
  );
};

export default FindJob;
