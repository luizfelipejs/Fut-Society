import { Link } from "react-router-dom";
import soccerIcon from "../../images/icons/soccer-player.png";
import "./styles.css";

function HomePage() {
  return (
    <div className="home-page">
      <figure>
        <img src={soccerIcon} alt="futebol" />
      </figure>
      <div className="home-page-text">
        <h1>Soccerity</h1>
        <p>Assista futebol de graça com a melhor qualidade</p>
        <nav className="navigation-links">
          <li>
            <Link to="/soccer/premiere">Assistir</Link>
          </li>
          <li>
            <Link to="/soccer-programming">Ver os placares</Link> 
          </li>
        </nav>
      </div>
    </div>
  );
}

export default HomePage;
