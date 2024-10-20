import react, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Restuarant } from "./src/components/Restuarant/Restuarant";

const App = () => {
  // fetching  data from swiggy api

  const [listofres, setListOfRes] = useState([]);
  const [loading , setLoading] = useState(false);
  const fetchData = async () => {
   setLoading(true);
    try {
      const listres = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const data = await listres.json();
      setListOfRes([
        ...listofres,
        ...data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants,
      ]);
    } catch {
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    // fetch data from swiggy api
    fetchData();
  }, []);
  useEffect(() => {
    const onScroll = () => {
      if (
        window.document.body.scrollHeight <=
        window.innerHeight + window.scrollY
      ) {
        fetchData();
      }
    };
   //  function debounce(func , timeout){
   //      let timeoutId;
   //      // returning the debounced function
   //      return function(...args){
   //      if(timeoutId){
   //        clearInterval(func);
   //      }
   //      timeoutId = setTimeout(()=>{
   //         func(...args);
   //      },timeout)
   //      }
   //  }
    window.addEventListener("scroll", onScroll );

    return () => window.removeEventListener("scroll", onScroll);
  }, [listofres]);
  return (
    <>
      <h2
        style={{
          textAlign: "center",
        }}
      >
        Welcome to swiggy api
      </h2>
      <Restuarant 
        listofres={listofres}
      />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
