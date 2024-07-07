import React from "react";

const JobTable = ({ jobListings }) => {
  return (
    <div className="p-5 my-7">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Title</th>
            <th className="border border-gray-300 px-4 py-2">Company</th>
            <th className="border border-gray-300 px-4 py-2">Description</th>
            <th className="border border-gray-300 px-4 py-2">Location</th>
            <th className="border border-gray-300 px-4 py-2">Apply</th>
          </tr>
        </thead>
        <tbody>
          {jobListings.map((job, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
            >
              <td className="border border-gray-300 px-4 py-2">{job.title}</td>
              <td className="border border-gray-300 px-4 py-2">
                {job.company}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {job.description}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {job.location}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                  Apply
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobTable;
