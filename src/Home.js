import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <header>
        <div>
          <li>
            <NavLink to="/schools">schools</NavLink>
          </li>
          <li>Contact</li>
        </div>
      </header>
      {/* <div id="schools">
        <div className="school">School One</div>
        <div className="school">School Two</div>
        <div className="school">School Three</div>
        <div className="school">School Four</div>
        <div className="school">School Five</div>
        <div className="school">School Six</div>
        <div className="school">School Seven</div>
        <div className="school">School Eight</div>
      </div> */}
    </div>
  );
};
export default Home;
