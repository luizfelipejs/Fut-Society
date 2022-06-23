import { Link } from 'react-router-dom';
import './index.css'
interface channelProps {
    nameChannel: string;
    imgPath: string;
    pathChannel: string
    idChannel?: string
    normalLink?: boolean
}

const ChannelItem = function ({ nameChannel, imgPath, pathChannel, idChannel, normalLink }: channelProps) {

    if (normalLink === true) {
        return (
            <li className='option-channel'>
                <a href={pathChannel} target="_blank">
                    <img src={imgPath} alt="premiere" id={idChannel} />
                    <div className="text-option">
                        {nameChannel}
                    </div>
                </a>
            </li>
        )
    }

    return (
        <li className='option-channel'>
            <Link to={pathChannel}>
                <img src={imgPath} alt="premiere" id={idChannel} />
                <div className="text-option">
                    {nameChannel}
                </div>
            </Link>
        </li>
    )
}

export default ChannelItem 