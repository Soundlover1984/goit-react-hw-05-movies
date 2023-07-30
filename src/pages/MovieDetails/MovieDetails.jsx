import { useState, useEffect, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { Loader } from '../../components/Loader/Loader';
import { fetchMovieApi } from 'movieApiService';
import { nanoid } from 'nanoid';
import {
  GoBackLinkWrapper,
  WrapperMovie,
  MovieDataWrapper,
  MovieList,
  MovieInfo,
  MoviePic,
  OverviewContent,
  Genres,
  Title,
  SubTitle,
} from './MovieDetails.styled';
import { Link } from '../StartPage/StartPage.styled';

const MovieDetails = () => {
  const { id } = useParams();
  const indexId = nanoid();

  const [movieId, setMovieId] = useState(null);
  const location = useLocation();
  // console.log(location);

  useEffect(() => {
    fetchMovieApi.getMovieById(id).then(setMovieId);
  }, [id]);

  if (!movieId) {
    return null;
  }

  const {
    poster_path,
    original_title,
    original_name,
    release_date,
    first_air_date,
    vote_average,
    genres,
    overview,
  } = movieId;

  return (
    <>
      <GoBackLinkWrapper>
        <Link to={location.state?.from ?? '/'}>Go back</Link>
      </GoBackLinkWrapper>
      <WrapperMovie>
        <MoviePic
          src={poster_path
          ? `${fetchMovieApi.BASE_URL}${poster_path}`
          : fetchMovieApi.defaultImg}
          alt={original_title}
          width="300"
        />
        <MovieDataWrapper>
          <Title>
            {original_title || original_name} (
            <span>{parseInt(release_date || first_air_date)}</span>)
          </Title>
          <OverviewContent>
            User Score: {`${Math.round(vote_average * 10)}%`}
          </OverviewContent>
          <SubTitle>Overview</SubTitle>
          <OverviewContent>{overview}</OverviewContent>
          <SubTitle>Genres</SubTitle>
          <Genres>
            {genres.map((genre) => (
              <li key={indexId} style={{ marginRight: '10px' }}>
                {genre.name}
              </li>
            ))}
          </Genres>
        </MovieDataWrapper>
      </WrapperMovie>
      <MovieInfo>
        <SubTitle>Additional Information</SubTitle>
        <MovieList>
          <li>
            <Link to="cast" state={location.state}>
              Cast
            </Link>{' '}
          </li>
          <li>
            <Link to="review" state={location.state}>
              Reviews
            </Link>{' '}
          </li>
        </MovieList>
      </MovieInfo>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
