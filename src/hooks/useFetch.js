import React from "react";

const initialData = {
  data: null,
  isLoading: false,
  error: false,
};

const dataReducer = (prevState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "START_FETCH":
      return {
        data: null,
        isLoading: true,
        error: null,
      };
    case "FETCH_SUCCESS":
      return {
        ...prevState,
        data: payload,
        isLoading: false,
      };
    case "FETCH_ERROR":
      return {
        ...prevState,
        error: payload,
        isLoading: false,
      };
    default:
      throw new Error(`Unsupported action type: ${type}`);
  }
};

const useFetch = (url) => {
  const [state, dispatch] = React.useReducer(dataReducer, initialData);

  async function fetchData() {
    // starting a data fetch

    dispatch({ type: "START_FETCH" });
    await new Promise((resolve) => setTimeout(() => resolve(), 750));
    try {
      const randNum = Math.random();
      const inevitableChaos = randNum > 0.3 ? "" : "asdbfhuoasef";
      const response = await fetch(url + inevitableChaos);
      const responseData = await response.json();
      // data fetch was success
      dispatch({ type: "FETCH_SUCCESS", payload: responseData });
    } catch (error) {
      console.log(error.message);
      // data fetch was error
      dispatch({ type: "FETCH_ERROR", payload: error.message });
    }
  }

  const refetch = React.useCallback(fetchData, [url]);

  React.useEffect(() => {
    refetch();
  }, [refetch]);

  return [state, refetch];
};

export default useFetch;
