

const Data = [
  {
    id: 1,
    jobName: "Web Developer",
    image: "logo 1.png",
    location: "Canada",
    jobtype: "Full-Time",
    company: "Amazon Inc.",
  },
  {
    id: 2,
    jobName: "Software Engineer",
    image: "logo 2.png",
    location: "Sri Lanka",
    jobtype: "Full-Time",
    company: "GoogleInc.",
  },
  {
    id: 3,
    jobName: "Data Analyst",
    image: "logo 3.png",
    location: "Pakistan",
    jobtype: "Part-Time",
    company: "Microsoft Co.",
  },
  {
    id: 4,
    jobName: "Cloud Engineer",
    image: "logo 4.png",
    location: "India",
    jobtype: "Full-Time",
    company: "Samsung Co",
  },
  {
    id: 5,
    jobName: "Devops Engineer",
    image: "logo 3.png",
    location: "India",
    jobtype: "Full-Time",
    company: "Microsoft Co",
  },
  {
    id: 6,
    jobName: "IOS Developer",
    image: "logo 6.png",
    location: "California",
    jobtype: "Part-Time",
    company: "Apple Co",
  },
];

const FeaturedDiv = () => {
  return (
    <div>
      <h1 className=" text-slate-950 text-3xl justify-center text-center p-10 font-medium">
        Featured Jobs
      </h1>
      <div class="jobcontainer flex gap-10 justify-center flex-wrap items-center pb-8 px-4">
        {Data.map(({ id, jobName, image, location, jobtype, company }) => {
          return (
            <div
              key={id}
              className="group group/item singleJob w-[350px] p-[20px] bg-white rounded-[10px] hover:bg-blue-500 shadow-lg shadow-gray-500 hover:shadow-lg "
            >
              <span className="flex justify-between items-center gap-4">
                <h1 className="text-[20px] font-semibold text-black group-hover:text-white">
                  {jobName}
                </h1>
              </span>
              <h6 className="text-gray-400 group-hover:text-white">
                {location}
              </h6>
              <h6 className="text-gray-400 group-hover:text-white">
                {jobtype}
              </h6>
              <div className="companylogo flex items-center gap-2">
                <img src={image} alt="company logo" className="w-[25%]" />
                <span className="text-[12px] py-[1rem] block group-hover:text-white">
                  {company}
                </span>
              </div>
              <button
                className="border-[2px] rounded-[10px] block p-[10px]
           w-full text-[14px] font-semibold text-black hover:bg-white group-hover/item:text-black group-hover:text-black "
              >
                Apply Now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedDiv;
