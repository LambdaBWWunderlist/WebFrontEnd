import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <h1>Welcome to Wunderlist!</h1>
    <p>
      New here!? Get started with the Sign Up page, but we hope you can tell us
      how you learned about our app first!
    </p>
    <form>
      <label>
        Where did you hear about us?
        <select>
          <option>Our Marketing Page</option>
          <option>Lambda</option>
          <option>Friend</option>
          <option>Ad</option>
          <option>Other</option>
        </select>
      </label>
      <Link to="/Register">
        <button type="submit">submit</button>
      </Link>
    </form>
  </div>
);
export default Home;
