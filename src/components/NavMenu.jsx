import {Link} from 'react-router-dom';
import {scps} from '../data/scp';

function NavMenu()
{
    return(
        <nav>
            <ul>
                {
                    scps.map(
                        scp => (
                            <li key={scp.Subject}>
                                <Link to={`/scp/${scp.Subject}`}>{scp.Subject}</Link>
                            </li>
                        )
                    )
                }
            </ul>
        </nav>
    )
}

export default NavMenu;