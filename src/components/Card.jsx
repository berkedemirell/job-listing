import React from "react";
import data from "/src/data/data.json";
/* eslint-disable react/prop-types */

export const Card = (props) => {
  const handleCat = (e) => {
    e.preventDefault();
    if (props.category.includes(e.target.id)) {
      alert("You have already set this category. Try another one.");
    } else {
      props.setCategory([...props.category, e.target.id]);
    }
  };
  return (
    <div className="w-full flex-col flex items-center justify-center gap-4 card-div">
      {data.map((info, i) => {
        return (
          <div
            key={i}
            className="relative flex flex-row gap-4 items-center justify-between w-3/4 p-6 shadow-2xl rounded-md bg-slate-50 deneme2"
          >
            {info.featured && (
              <span className="absolute left-0 bg-cyan-700 top-0.5 w-1.5 rounded-md h-36"></span>
            )}
            <div className="flex flex-row gap-4 items-center deneme">
              <div className="foto">
                <img src={`./${info.logo}`} alt="problem with imgs 🤷‍♂️" />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-4 items-center">
                  <div className="text-xl text-cyan-700 font-bold">
                    <a href="#">{info.company}</a>
                  </div>
                  <div>
                    {info.new && (
                      <span className="bg-cyan-700 text-slate-200  pr-2 pl-2 pt-1 pb-1 rounded-xl font-bold uppercase text-sm">
                        New!
                      </span>
                    )}
                  </div>
                  <div>
                    {info.featured && (
                      <span className="bg-slate-700 text-slate-200 pr-2 pl-2 pt-1 pb-1 rounded-xl uppercase text-sm font-bold">
                        Featured
                      </span>
                    )}
                  </div>
                </div>
                <div className="position">
                  <a href="#" className="text-slate-900 hover:text-cyan-700 text-2xl font-bold">
                    {info.position}
                  </a>
                </div>
                <div className="little-info flex flex-row gap-4 items-center font-bold">
                  <span className="text-md opacity-50">{info.postedAt}</span>
                  <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
                  <span className="text-md opacity-50">{info.contract}</span>
                  <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
                  <span className="text-md opacity-50">{info.location}</span>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4 cats">
              <button onClick={handleCat}>
                <span
                  id={info.role}
                  className="bg-sky-100 text-cyan-700 p-2 rounded-md font-bold hover:bg-cyan-700 hover:text-slate-100"
                >
                  {info.role}
                </span>
              </button>
              <button onClick={handleCat}>
                <span id={info.level} className="bg-sky-100 text-cyan-700 p-2 rounded-md font-bold hover:bg-cyan-700 hover:text-slate-100">
                  {info.level}
                </span>
              </button>
              {info.languages.map((lang, i) => {
                return (
                  <React.Fragment key={i}>
                    <button id={lang} onClick={handleCat}>
                      <span
                        id={lang}
                        className="bg-sky-100 text-cyan-700 p-2 rounded-md font-bold hover:bg-cyan-700 hover:text-slate-100"
                      >
                        {" "}
                        {lang}
                      </span>
                    </button>
                  </React.Fragment>
                );
              })}
              {info?.tools.map((tool, i) => {
                return (
                  <React.Fragment key={i}>
                    <button id={tool} onClick={handleCat}>
                      <span
                        id={tool}
                        className="bg-sky-100 text-cyan-700 p-2 rounded-md font-bold hover:bg-cyan-700 hover:text-slate-100"
                      >
                        {" "}
                        {tool}
                      </span>
                    </button>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
