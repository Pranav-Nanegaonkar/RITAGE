import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FrontPage = () => {
  const [userid, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [selectedOption, setSelectedOption] = useState("2024-2025 Part-II");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { userid, password, selectedOption };
    console.log(data);

    try {
      await axios.post("http://localhost:4001/login", data).then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        setError(false);
        navigate("/student-home", { state: { userid, year: selectedOption } });
      });
    } catch (error) {
      console.log("ERROR:", error.message);
      setError(true);
    }
  };

  return (
    <div className="">
      <section className="header ">
        <div className="centerit flex-col pt-5">
          <span className="text-[10px] dark:text-white">K. E. Societys</span>
          <span className="text-lg text-center font-[500] text-[navy] dark:text-blue-600 ">
            Rajarambapu Institute of Technology.
          </span>
        </div>
        <div className="centerit">
          <img className="h-[90px] " src={logo} alt="" />
        </div>
      </section>
      <div className="text-sm font-[600] text-[#040484] text-center p-2 shadow-hero dark:text-[#e8dddd] ">
        Exam Result
      </div>

      <section className="main flex flex-col justify-center items-center px-[25px] mx-auto sm:w-3/4 lg:w-[410px]">
        <div className="my-3 mb-8 text-center text-[24px] Cooper-Black text-[#800080] dark:text-[#c760c7] ">
          RITAGE
        </div>
        <div className="container border border-[#dddddd] rounded-md">
          <div className="container-header text-[16px] text-[#333] bg-[#f5f5f5] dark:text-[#c5c5c5] dark:bg-zinc-700 py-[10px] px-[15px] rounded-t-md ">
            Please Sign In
          </div>
          {/* ---------------------------------------------------FORM--------------------------------------------------- */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center p-[15px]"
          >
            <div className="academic_year  dark:bg-[#b9b9b9]  ">
              <select
                name="academic_year"
                id="year"
                className="bg-transparent font-medium border-[0.5px] border-black rounded-sm "
                value={selectedOption}
                onChange={(event) => {
                  setSelectedOption(event.target.value);
                }}
              >
                <option value="2024-2025 Part-II">2024-2025 Part-II</option>
                <option value="2024-2025 Part-I">2024-2025 Part-I</option>
                <option value="2023-2024 Part-II">2023-2024 Part-II</option>
                <option value="2023-2024 Part-I">2023-2024 Part-I</option>
                <option value="2022-2023 Part-II">2022-2023 Part-II</option>
                <option value="2022-2023 Part-I">2022-2023 Part-I</option>
                <option value="2021-2022 Part-II">2021-2022 Part-II</option>
                <option value="2021-2022 Part-I">2021-2022 Part-I</option>
                <option value="2020-2021 Part-II">2020-2021 Part-II</option>
                <option value="2020-2021 Part-I">2020-2021 Part-I</option>
                <option value="2019-2020 Part-II">2019-2020 Part-II</option>
                <option value="2019-2020 Part-I">2019-2020 Part-I</option>
                <option value="2018-2019 Part-II">2018-2019 Part-II</option>
                <option value="2018-2019 Part-I">2018-2019 Part-I</option>
                <option value="2017-2018 Part-II">2017-2018 Part-II</option>
                <option value="2017-2018 Part-I">2017-2018 Part-I</option>
                <option value="2016-2017 Part-II">2016-2017 Part-II</option>
                <option value="2016-2017 Part-I">2016-2017 Part-I</option>
                <option value="2015-2016 Part-II">2015-2016 Part-II</option>
                <option value="2015-2016 Part-I">2015-2016 Part-I</option>
                <option value="2014-2015 Part-II">2014-2015 Part-II</option>
                <option value="2014-2015 Part-I">2014-2015 Part-I</option>
                <option value="2013-2014 Part-II">2013-2014 Part-II</option>
                <option value="2013-2014 Part-I">2013-2014 Part-I</option>
              </select>
            </div>
            <div>
              <br />
              <br />
            </div>
            <input
              className="py-[6px] px-[12px] w-full h-[34px] text-[14px] border rounded-sm mb-[19px] bg-white text-[#555] dark:text-[#d3d1d1] font-[600] leading-[1.42857143] shadow-inner dark:bg-zinc-800 "
              type="text"
              placeholder="User Id"
              name="userid"
              value={userid}
              onChange={(e) => {
                setUserId(e.target.value);
              }}
              required
            />
            <input
              className="py-[6px] px-[12px] w-full h-[34px] text-[14px] border rounded-sm mb-[19px] bg-white text-[#555] dark:text-[#d3d1d1] font-[600] leading-[1.42857143] shadow-inner dark:bg-zinc-800 "
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
            <button className="py-[10px] px-[16px] w-full text-[18px] text-[#fff] leading-[1.33] rounded-[6px] border border-[#4cae4c] bg-[#5cb85c] hover:bg-[#47a447] ">
              Login
            </button>
            {error && (
              <div className="alert-danger mt-2 text-[14px] font-[450] self-start">
                Invalid Login Name or Password
              </div>
            )}

            <p className="text-[blue] text-left text-[13px] font-[600] self-start py-2 hover:underline ">
              Forgot your password?
            </p>
          </form>
        </div>
      </section>
      <div className="birthday hover:underline">View Todays BirthDays</div>
    </div>
  );
};

export default FrontPage;
