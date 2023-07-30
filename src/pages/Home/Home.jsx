import { fetchMovieApi } from "movieApiService";
import { useState, useEffect } from "react";
import { Title, Main } from './Home.styled';
import { MovieList } from '../../components/MovieList/MovieList';
import { Btn } from '../../components/Button/Button';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [total_results, setTotalResults] = useState(null);

    useEffect(() => {
        fetchMovieApi.getPopularMovies(page).then(data => {
          setMovies(movies => [...movies, ...data.results]);
          setTotalResults(data.total_results);
        });
      }, [page]);

      const loadMore = () => {
        setPage(page => page + 1);
      };
    
    
  return (
    <Main>
      <Title>Trending today </Title>
      <MovieList movies={movies} />
      {total_results / 20 >= page && (
        <Btn text="Load more" status="load" onClick={loadMore} />
      )}
    </Main>
  );
};
  
export default Home;