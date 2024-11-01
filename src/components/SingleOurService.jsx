


const SingleOurService = ({ title, points }) => {
  return (
    <div className="bg-gradient-to-b from-[rgba(15,53,43,0.3)] to-[#2E5D51] rounded-[24px] w-[334px] h-[320px] ml-20 mt-[150px] p-4 relative">
      <div className="relative z-10 h-[74px] w-[251px]">
        <h1 className="font-clash font-normal text-[30px] leading-[36.9px] text-customWhite">
          {title}
        </h1>
        <ul className="list-disc font-satoshi font-normal text-[13.5px] text-customWhite leading-[20.6px] mt-2 ml-2">
          {points.map((point, index) => (
            <li key={index} className="mt-2">
              {point}
            </li>
          ))}
        </ul>
      </div>

      <img
        src='/bottomsection.svg'
        alt=""
        className="absolute inset-0 h-[320px] w-[330px] rounded-[24px] z-0"
      />

      <button className="absolute bottom-6 left-[25px] transform -translate-x-2 bg-custom-gradient-our-services flex items-center justify-center text-white py-2 px-6 rounded-[99px] border border-white">
        <span className="font-satoshi text-[16px] font-medium leading-[8.6px]">
          Learn more
        </span>
        <img src='/longarrow.svg' alt="Arrow Right" className="ml-2 h-2 w-12" />
      </button>
    </div>
  );
};

export default SingleOurService;
