import useFetch from "../hooks/useFetch";
const BEERS_URL = "https://random-data-api.com/api/v2/beers";

const Beer = () => {
  const [{ data: beer, isLoading, error }, refetch] = useFetch(BEERS_URL);

  if (error) {
    return (
      <div>
        <h2>Oop! Chaos Era ☠️</h2>
        <button onClick={refetch}>I demand refreshment.</button>
      </div>
    );
  }

  if (isLoading) {
    return (
      <h2 style={{ color: "orchid", fontStyle: "italic" }}>
        Finding the coldest of beers...
      </h2>
    );
  }

  return beer ? (
    <>
      <article>
        <h2>
          Enjoy a refreshing <strong>{beer.name}</strong>
        </h2>
        <p>Brought to you by your friends at {beer.brand}</p>
      </article>
      <button onClick={refetch}>Not cold enough. Give me another!</button>
    </>
  ) : null;
};

export default Beer;
