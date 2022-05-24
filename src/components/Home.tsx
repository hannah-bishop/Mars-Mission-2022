import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faRocket, faEarthAmericas, faUserAstronaut } from "@fortawesome/free-solid-svg-icons";

export function Home() {
    return <main>
        <h1>Welcome to Mars Mission!</h1>
        <p>Welcome, dear guest, to Mars Mission!</p>
        <FontAwesomeIcon icon={faStar} size="6x" spin/>
    </main>
}
