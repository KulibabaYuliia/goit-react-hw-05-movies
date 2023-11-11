// import { CastList } from './Cast.styled';

export const Reviews = ({ movieReviews }) => {
  console.log(movieReviews);
  return movieReviews?.length === 0 || !movieReviews ? (
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
