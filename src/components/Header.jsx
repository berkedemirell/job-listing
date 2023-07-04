import React from "react";
/* eslint-disable react/prop-types */

export const Header = (props) => {
  const clearCat = (e) => {
    e.preventDefault();
    props.setCategory([]);
  };

  const handleDelete = (e) => {
    const newList = props.category?.filter((cat) => {
      if(e.target.id === cat) {
        return false;
      } else {
        return true
      }
    })
    props.setCategory(newList)
  };

  return (
    <div className="w-full flex flex-col items-center justify-center relative mb-16 h-fit">
      <svg
        width="1440"
        height="156"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <path id="a" d="M0 0h1440v156H0z" />
        </defs>
        <g fill="none" fillRule="evenodd">
          <mask id="b" fill="#fff">
            <use xlinkHref="#a" />
          </mask>
          <use xlinkHref="#a" />
          <g mask="url(#b)" fill="#63BABA">
            <path d="M495.73 563.419c-51.439-48.795-53.583-130.05-4.788-181.489a128.377 128.377 0 0 1 4.789-4.789l418.16-396.66c55.045-52.215 141.329-52.215 196.374 0 50.418 47.825 53.478 126.835 7.634 178.39l188.06-178.39c55.045-52.215 141.328-52.215 196.373 0 51.44 48.794 53.583 130.049 4.789 181.488a128.377 128.377 0 0 1-4.789 4.789l-418.158 396.658c-55.045 52.215-141.329 52.215-196.374 0-50.418-47.825-53.478-126.835-7.634-178.39L692.104 563.42c-55.045 52.215-141.328 52.215-196.373 0ZM360.464 45.523c-51.44-48.794-53.583-130.05-4.789-181.488a128.377 128.377 0 0 1 4.789-4.79l418.163-396.663c55.046-52.215 141.33-52.215 196.374 0 51.44 48.794 53.583 130.05 4.789 181.488a128.376 128.376 0 0 1-4.789 4.79L556.837 45.522c-55.045 52.215-141.328 52.215-196.373 0Zm-468.795 71.832c-51.439-48.795-53.583-130.05-4.789-181.489a128.377 128.377 0 0 1 4.79-4.788l418.16-396.661c55.045-52.215 141.328-52.215 196.373 0 51.44 48.794 53.583 130.05 4.79 181.488a128.378 128.378 0 0 1-4.79 4.789l-418.16 396.66c-55.045 52.216-141.329 52.216-196.374 0Z" />
          </g>
        </g>
      </svg>
      {props.category.length !== 0 ? (
        <div className="absolute top-32 w-full flex items-center justify-center text-xl cat-outer">
          <div
            type="text"
            className="h-16 w-3/4 bg-slate-50 rounded-md p-2 flex items-center"
            id="setCategory"
          ></div>
          <div className="absolute left-52 flex flex-row gap-2 cat-div">
            {props.category.map((cat, i) => {
              return (
                <React.Fragment key={i}>
                  <span
                    id={cat}
                    className="border-2 pr-2 pl-2 rounded-md bg-sky-100 text-cyan-700 font-bold text-sm"
                  >
                    {cat}{" "}
                    <button id={cat} className="rounded-md border-2 pt-1 pb-1 h-full pl-3 pr-3 hover:bg-slate-800 bg-cyan-800 text-slate-100" onClick={handleDelete}>
                      <span id={cat}>X</span>
                    </button>
                  </span>
                </React.Fragment>
              );
            })}
          </div>
          <button
            className="absolute right-56 underline font-mono text-cyan-800 text-lg font-bold clear"
            onClick={clearCat}
          >
            clear
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
