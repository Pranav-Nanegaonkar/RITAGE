import React from "react";
import photo from "../assets/photo.png";
import { useLoaderData, useLocation } from "react-router-dom";
import axios from "axios";

const StudentHome = () => {
  const location = useLocation();
  let { userid, year } = location.state || {}; // Safely extracting values
  year = year.slice(0, 9);

  const studentsData = useLoaderData();
  console.log(studentsData.data);

  console.log(userid);
  console.log(year);

  return (
    <div className="">
      <div className="h-[40px] text-center ">nothing</div>
      <div className="w-[940px] p-[20px] bg-[#F1F0FB] mx-auto flex flex-col gap-4">
        <div className="flex gap-4">
          <div className="w-[20%] h-[142px] flex justify-center studentblockborder">
            <img className="h-full" src={photo} alt="photo" />
          </div>
          <div className="w-full h-[142px] studentblockborder px-4 py-2 flex gap-8 ">
            <div className="flex flex-col gap-3">
              <h6 className="text-[13px] font-light">Name : </h6>
              <h6 className="text-[13px] font-light">User Type :</h6>
              <h6 className="text-[13px] font-light">Enroll No. :</h6>
            </div>
            <div className="flex flex-col gap-2 ">
              <h6 className="text-[15px] font-normal uppercase">
                {studentsData.data.name}
              </h6>
              <h6 className="text-[15px] font-normal uppercase">
                {studentsData.data.usertype}
              </h6>
              <h6 className="text-[15px] font-normal uppercase">{userid}</h6>
              <h6 className="text-[15px] font-normal uppercase">{year}</h6>
            </div>
          </div>
        </div>
        <div className="p-2 w-full h-full studentblockborder grid grid-cols-4 grid-rows-4 justify-items-center gap-x-4 ">
          <div className="flex flex-col items-center">
            <img
              className="h-[60px]"
              src="http://ritage.ritindia.edu/RITCMS/images/profile1.jpg"
              alt=""
            />
            <h2 className="text-[#0066FF] font-semibold text-center">
              Profile
            </h2>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="h-[60px]"
              src="http://ritage.ritindia.edu/RITCMS/images/attendance1.jpg"
              alt=""
            />
            <h2 className="text-[#0066FF] font-semibold text-center">
              Attendance
            </h2>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="h-[60px]"
              src="http://ritage.ritindia.edu/RITCMS/images/fees.png"
              alt=""
            />
            <h2 className="text-[#0066FF] font-semibold text-center">
              Online Fees Payments
            </h2>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="h-[60px]"
              src="	http://ritage.ritindia.edu/RITCMS/images/admission.jpg"
              alt=""
            />
            <h2 className="text-[#0066FF] font-semibold text-center">
              Admission
            </h2>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="h-[60px]"
              src="	http://ritage.ritindia.edu/RITCMS/Images/FacultyPerformance.jpg"
              alt=""
            />
            <h2 className="text-[#0066FF] font-semibold text-center">
              Faculty Performance Index
            </h2>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="h-[60px]"
              src=" http://ritage.ritindia.edu/RITCMS/images/Mentor.png"
              alt=""
            />
            <h2 className="text-[#0066FF] font-semibold text-center">
              Mentee Details
            </h2>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="h-[60px]"
              src=" http://ritage.ritindia.edu/RITCMS/Images/feedback.jpg"
              alt=""
            />
            <h2 className="text-[#0066FF] font-semibold text-center">
              SLI Feedback
            </h2>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="h-[60px]"
              src=" 	http://ritage.ritindia.edu/RITCMS/images/placement.png"
              alt=""
            />
            <h2 className="text-[#0066FF] font-semibold text-center">
              Training & Placement
            </h2>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="h-[60px]"
              src=" 	http://ritage.ritindia.edu/RITCMS/images/announcement.jpg"
              alt=""
            />
            <h2 className="text-[#0066FF] font-semibold text-center">
              Elective Choices
            </h2>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="h-[60px]"
              src=" 		http://ritage.ritindia.edu/RITCMS/Images/ElectiveChoice.png"
              alt=""
            />
            <h2 className="text-[#0066FF] font-semibold text-center">
              Overall Institutional Feedback
            </h2>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="h-[60px]"
              src=" 		http://ritage.ritindia.edu/RITCMS/images/Change_Password.png"
              alt=""
            />
            <h2 className="text-[#0066FF] font-semibold text-center">
              Change Password
            </h2>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="h-[60px]"
              src=" 			http://ritage.ritindia.edu/RITCMS/Images/web_opac.png"
              alt=""
            />
            <h2 className="text-[#0066FF] font-semibold text-center">
              Web OPAC
            </h2>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="h-[60px]"
              src=" 			http://ritage.ritindia.edu/RITCMS/images/moodle.jpg"
              alt=""
            />
            <h2 className="text-[#0066FF] font-semibold text-center">Moodle</h2>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="h-[60px]"
              src=" 				http://ritage.ritindia.edu/RITCMS/images/results.jpg"
              alt=""
            />
            <h2 className="text-[#0066FF] font-semibold text-center">Result</h2>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="h-[60px]"
              src=" 					http://ritage.ritindia.edu/RITCMS/Images/examform-n.jpg"
              alt=""
            />
            <h2 className="text-[#0066FF] font-semibold text-center">
              Re-Registration Application
            </h2>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="h-[60px]"
              src="http://ritage.ritindia.edu/RITCMS/images/studymaterial.jpg"
              alt=""
            />
            <h2 className="text-[#0066FF] font-semibold text-center">
              Study Material
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentHome;

export const studentLoader = async () => {
  const user = JSON.parse(localStorage.getItem("user")); // parse data ot json
  const res = await axios.get(`http://localhost:4001/user/${user.userid}`);
  return res;
};
