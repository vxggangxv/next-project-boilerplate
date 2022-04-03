import type { NextPage } from 'next';
import Link from 'next/link';
// import Image from 'next/image';
import { useRouter } from 'next/router';

const Home: NextPage = ({ movies }: any) => {
  const router = useRouter();
  const onNavigateMovie = (id: number, title: string) => {
    router.push(`/movies/${title}/${id}`);
  };

  return (
    // <div className="flex flex-wrap justify-between max-w-xl mx-auto">
    <div className="grid gap-2 grid-cols-2 max-w-xl mx-auto">
      {/* <h1 className="text-yellow-500">Home</h1>
      <h2 className="text-yellow-500">Post Title : {post?.title}</h2> */}
      {movies?.map((movie: any) => (
        <div
          onClick={() => onNavigateMovie(movie.id, movie.original_title)}
          key={movie.id}
        >
          {/* eslint-disable-next-line */}
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt="movie poster"
            className="rounded-md"
          />
          <h4>
            <Link href={`/movies/${movie.original_title}/${movie.id}`}>
              <a>{movie.original_title}</a>
            </Link>
          </h4>
        </div>
      ))}
    </div>
  );
};

export async function getServerSideProps() {
  // const post = await (
  //   await fetch('https://jsonplaceholder.typicode.com/posts/1')
  // ).json();

  const { results: movies } = await (
    await fetch('http://localhost:3000/api/movies')
  ).json();

  return {
    props: {
      // post,
      movies,
    },
  };
}

export default Home;
