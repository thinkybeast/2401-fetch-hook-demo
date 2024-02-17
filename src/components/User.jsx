import useFetch from "../hooks/useFetch";

const USERS_URL = "https://random-data-api.com/api/v2/users";

/*
    Key idea:
    Use reducers when you have complex, interdependent state
    When you want to move control of state changes out the component and into a function that manages those states change

    Key idea:
    useReducer is like useState
    except
    the argument to the setter function is not the next state
    the argument to setter function is the argument to the reducer function

    Actions: 
    {
        type: str // indicate what action we want to take
        payload?: any
    }
*/

const User = () => {
  const [{ data: user, isLoading, error }, refetch] = useFetch(USERS_URL);

  if (error) {
    return (
      <div>
        <h2>Oop! Chaos Era ☠️</h2>
        <button onClick={refetch}>I demand satisfaction.</button>
      </div>
    );
  }

  if (isLoading) {
    return (
      <h2 style={{ color: "orchid", fontStyle: "italic" }}>
        Finding the coolest of users...
      </h2>
    );
  }

  return user ? (
    <>
      <article>
        <figure style={{ width: "300px", height: "300px", margin: "0 auto" }}>
          <img src={user.avatar} key={user.avatar} />
        </figure>
        <h2>
          Meet <strong>{user.first_name}</strong>
        </h2>
        <p>They are passionate about {user.employment.key_skill}</p>
      </article>
      <button onClick={refetch}>Not cool enough. Give me another!</button>
    </>
  ) : null;
};

export default User;
