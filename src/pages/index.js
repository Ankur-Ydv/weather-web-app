import { useState } from "react";
import axios from "axios";
import { BiSearch, BiReset } from "react-icons/bi";
import WeatherApp from "@/components/WeatherApp";
import Toggle from "@/components/Toggle";
import { Hint } from "react-autocomplete-hint";

const HintCities = [
  // Indian Cities
  "Mumbai",
  "Delhi",
  "Bengaluru",
  "Hyderabad",
  "Ahmedabad",
  "Chennai",
  "Kolkata",
  "Pune",
  "Jaipur",
  "Surat",
  "Lucknow",
  "Kanpur",
  "Nagpur",
  "Patna",
  "Indore",
  "Thane",
  "Bhopal",
  "Visakhapatnam",
  "Vadodara",
  "Firozabad",
  "Ludhiana",
  "Rajkot",
  "Agra",
  "Siliguri",
  "Nashik",
  "Faridabad",
  "Patiala",
  "Meerut",
  "Kalyan-Dombivali",
  "Vasai-Virar",
  "Varanasi",
  "Srinagar",
  "Dhanbad",
  "Jodhpur",
  "Amritsar",
  "Raipur",
  "Allahabad",
  "Coimbatore",
  "Jabalpur",
  "Gwalior",
  "Vijayawada",
  "Madurai",
  "Guwahati",
  "Chandigarh",
  "Hubli-Dharwad",
  "Amroha",
  "Moradabad",
  "Gurgaon",
  "Aligarh",
  "Solapur",
  "Ranchi",

  // Other Cities
  "New York",
  "London",
  "Paris",
  "Tokyo",
  "Sydney",
  "Berlin",
  "Moscow",
  "Dubai",
  "Singapore",
  "Toronto",
  "Rome",
  "Amsterdam",
  "Seoul",
  "Barcelona",
  "Istanbul",
  "Los Angeles",
  "Rio de Janeiro",
  "Cairo",
  "Cape Town",
  "Bangkok",
  "Athens",
  "Vienna",
  "Munich",
  "Prague",
  "Stockholm",
  "Beijing",
  "Shanghai",
  "Hong Kong",
  "Dublin",
  "Helsinki",
  "Zurich",
  "Lisbon",
  "Oslo",
  "Buenos Aires",
  "São Paulo",
  "Mexico City",
  "Toronto",
  "Vancouver",
  "Montreal",
  "Sydney",
  "Melbourne",
  "Auckland",
  "Wellington",
  "Cape Town",
  "Johannesburg",
  "Nairobi",
];

const Home = () => {
  const [search, setSearch] = useState("");
  const [msg, setMsg] = useState("Search Now!");
  const [data, setData] = useState(null);
  const [searching, setSearching] = useState(false);

  function isAlphabeticString(str) {
    return /^[A-Za-z]+$/.test(str);
  }

  function isNumericString(str) {
    return /^\d+$/.test(str);
  }
  const handleValidation = () => {
    if (search === "") {
      setMsg("Invalid Request!");
      return false;
    } else if (!isAlphabeticString(search) && !isNumericString(search)) {
      setMsg("Invalid Request!");
      return false;
    }
    return true;
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(search);
    if (handleValidation()) {
      try {
        setSearching(true);
        const API_URL = isAlphabeticString(search)
          ? `https://api.weatherbit.io/v2.0/current?city=${search}&key=51c0e4541707423c9adc586dda5bfda5&include=minutely`
          : `https://api.weatherbit.io/v2.0/current?postal_code=${search}&key=51c0e4541707423c9adc586dda5bfda5&include=minutely`;
        const response = await axios.get(API_URL);
        if (response.status === 200) {
          setData(response.data.data[0]);
        }
      } catch (error) {
        console.log(error);
        setMsg("Server Error");
      }
      setSearching(false);
    } else {
      setMsg("Invalid Request!");
    }
  };

  return (
    <main className="w-screen min-h-screen flex flex-col items-center justify-start gap-4 bg-lightMode-background dark:bg-darkMode-background">
      <section className="w-full h-fit flex justify-between px-8 py-4">
        <span className="text-2xl font-semibold dark:text-darkMode-txt">
          WeatherAPP
        </span>
        <Toggle />
      </section>

      <section className="w-full md:w-3/5 flex flex-col gap-4 p-4">
        <form
          className="w-full flex p-4 pt-2 gap-3 rounded-md bg-lightMode-component dark:bg-darkMode-component shadow-md items-center"
          onSubmit={(event) => handleSubmit(event)}
          action=""
        >
          <button type="reset" className="text-2xl font-bold dark:text-white">
            <BiReset />
          </button>

          <input
            type="text"
            className="w-full flex py-1 px-3 bg-transparent border-b-2 border-black dark:border-darkMode-txt outline-none dark:text-darkMode-txt "
            placeholder="Enter Postal Code or City"
            autoComplete="on"
            list="options"
            onChange={(e) => setSearch(e.target.value)}
          />

          {search.length > 2 ? (
            <datalist id="options">
              {HintCities.map((city) => {
                return <option value={city} />;
              })}
            </datalist>
          ) : (
            <></>
          )}

          <button type="submit" className="text-2xl font-bold dark:text-white">
            <BiSearch />
          </button>
        </form>
        <section className="w-full min-h-[30rem] rounded-md shadow-xl bg-lightMode-component dark:bg-darkMode-component flex justify-center items-center">
          {!data && searching ? (
            <div
              role="status"
              className="w-screen h-full flex items-center justify-center"
            >
              <svg
                aria-hidden="true"
                class="inline w-8 h-8 mr-2 animate-spin text-gray-300 dark:text-darkMode-background fill-black dark:fill-darkMode-txt"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
          ) : data ? (
            <WeatherApp data={data} />
          ) : (
            <>
              <div className="flex flex-col items-center">
                <div className="text-2xl font-serif dark:text-darkMode-txt">
                  {msg}
                </div>
              </div>
            </>
          )}
        </section>
      </section>
    </main>
  );
};

export default Home;
