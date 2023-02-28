import React , {useState , useEffect} from 'react'
import requests from './requests'
import axios from 'axios'
import './Banner.css'

function Banner() {
    const [movie , setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(`https://api.themoviedb.org/3${requests.fetchNetflixOriginals}`);
            const randomNumber = Math.random() * request.data.results.length
            setMovie(request.data.results[Math.floor(randomNumber)]);
            return request;
        }
        fetchData();
    }, []);

    console.log(movie)

    function truncate(str, max) {
            return str?.length > max ? str.substr(0, max-1) + '…' : str;
        }

  return (
    <header className="banner" 
    style={{
        backgroundSize:"cover",
        backgroundImage : `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
        backgroundPosition:"center center",
    }}
    >
        <div className="banner__contents">
            <h1 className="banner__title">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className="banner__buttons">
                <button className="banner__button">Play</button>
                <button className="banner__button">My List</button>
            </div>
            
            <h1 className="banner__description">{truncate(movie?.overview , 150)}</h1>
        </div>
        <div className='banner__fadeBottom'/>

       
    </header>
  )
}

export default Banner
