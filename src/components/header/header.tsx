import { Link } from "react-router-dom";
import arrowSvg from '../../images/icons/arrow.svg'
import './index.css'

interface headerInterface {
    id?: string
}

function Header ({id}: headerInterface) {
    return (
        <header className="soccer-header">
            <Link to="/" className='navigation-link' id={id}>
                <img src={arrowSvg} alt="voltar" />
            </Link>
            <h2>Fut Society</h2>
        </header>
    )
}

export default Header;
