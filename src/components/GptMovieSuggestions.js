import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions=()=>{
    
    const {movieNames,tmdbResults} = useSelector((store)=>store.gpt);
    if(!tmdbResults) return null;

    

    return <div className="p-4 m-4 bg-black text-white">
        <div>
            {movieNames.map((movieName,index) => <MovieList title={movieNames} movies={tmdbResults[index]}/>)}
        </div>
    </div>
}
export default GptMovieSuggestions;