import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import data from "/src/data/data.json";
import Filtered from "./components/Filtered";

function App() {
  const [cat, setCat] = useState("");
  const [category, setCategory] = useState([]);

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setCat(e.target.value);
  // };

  const clearCacheData = () => {
    caches.keys().then((names) => {
        names.forEach((name) => {
            caches.delete(name);
        });
    });
    alert('Complete Cache Cleared')
};

clearCacheData();


  const newData = data.map((data) => data);

  const modified = newData.map((info) => {
    return {
      ...info,
      ca: info.tools
        .concat(info.languages)
        .concat(info.role)
        .concat(info.level),
    };
  });

  const filteredArray = modified.filter((el) => {
    return category.every((val) => el.ca.includes(val));
  });

  // const handleEnter = useCallback(
  //   (e) => {
  //     if (e.key === "Enter" && cat.length !== 0) {
  //       if(category.includes(cat)) {
  //         alert("You have already set this category. Try another one.")
  //       } else {
  //         setCategory([...category, cat]);
  //         const input = document.querySelector("#setCategory");
  //         input.value = ""
  //         setCat("");
  //       }
  //     }
  //   },
  //   [cat, category]
  // );

  // useEffect(() => {
  //   window.addEventListener("keydown", handleEnter);
  //   return () => {
  //     window.removeEventListener("keydown", handleEnter);
  //   };
  // }, [handleEnter]);

  return (
    <>
      <div className={`w-full bg-cyan-100 h-fit`}>
        <Header setCategory={setCategory} category={category} />
        {category.length === 0 ? (
          <Card cat={cat} category={category} setCategory={setCategory} />
        ) : (
          <Filtered
            filteredArray={filteredArray}
            setCategory={setCategory}
            category={category}
            setCat={setCat}
          />
        )}
      </div>
    </>
  );
}

export default App;
