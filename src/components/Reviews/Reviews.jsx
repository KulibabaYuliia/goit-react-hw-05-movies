// import { CastList } from './Cast.styled';

export const Reviews = ({ movieReviews }) => {
  return movieReviews.length === 0 ? (
    <p>No reviews</p>
  ) : (
    <ul>
      {movieReviews.map(({ author, content, id }) => (
        <li key={id}>
          <p>Author: {author}</p>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};
