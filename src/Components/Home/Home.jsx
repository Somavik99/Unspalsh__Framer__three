import { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../Card/Card";
import { TbUserSearch } from "react-icons/tb";
import "./Home.css";

const Home =() => {
  const [ApiData, setApiData] = useState([]);

  let controller = new AbortController();
  const GetApiData = async () => {
    try {
      const resp = await axios.get(
        "https://api.unsplash.com/photos/?client_id=Mjmf793T2l7_nLOWLigtslROt_RgliDFdtmBA4oMhsk ",
        {
          signal: controller.signal,
        }
      );
      setApiData(resp.data);
      console.log(resp.data);
    } catch (err) {
      return console.log(err);
    } finally {
      console.log("ApiFetched");
      controller.abort();
    }
  };

  useEffect(() => {
    (function () {
      GetApiData();
    })();
  },[]);

  return (
    <>
      <div style={{ position: "relative" }}>
        <span className="header">
          <h1 style={{ fontWeight: "800", position: "sticky", zIndex: "150" }}>
            Unsplash Profiles
          </h1>
        </span>
        <div className="home__cont">
          <button style={{ position: "fixed" }} className="search__btn">
            <TbUserSearch size={50} />
          </button>

          <div className="cards">
            {ApiData.map((data, i) => {
              return (
                <Cards
                  url={data.user.social.portfolio_url}
                  instagram={data.user.social.instagram_username}
                  bio={data.user.bio}
                  image={data.user.profile_image.medium}
                  name={data.user.name}
                  key={i}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
