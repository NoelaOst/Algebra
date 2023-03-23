import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

function SearchResult(props) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (props.input) {
      fetch(`https://api.github.com/users/${props.input}`)
        .then((response) => response.json())
        .then((podaci) => setUserData(podaci))
        .catch((error) => console.error(error));
    }
  }, [props.input]);

  if (!userData) {
    return <div>Učitava se...</div>;
  }

  return (
    <div>
      <h1>{userData.name}</h1>
      <img src={userData.avatar_url} alt="User Avatar" />
      <p>{userData.location}</p>
      <p>{userData.bio}</p>
    </div>
  );
}
SearchResult.propTypes = {
  input: PropTypes.string,
};
export default SearchResult;
