import Iframe from "react-iframe";

import ChannelItem from "../../components/channel-item";
import Header from "../../components/header/header";


import premiereLogo from '../../images/premiere-logo.jpeg'
import foxSportsLogo from '../../images/fox-sports.jpeg'
import sportvLogo from '../../images/sportv-logo.jpeg'
import espnLogo from '../../images/espn-logo.jpeg'
import sportv2Logo from '../../images/sportv2-logo.jpeg'

import './index.css'

function SoccerProgramming() {
    return (
        <div className="soccer-programming">
            <Header id="soccer-programming" />
            <h2>Veja a programação dos seus canais favoritos</h2>
            <ul className="channel-options">
                <ChannelItem
                    nameChannel="Canal 01: Premiere"
                    imgPath={premiereLogo}
                    pathChannel="https://meuguia.tv/programacao/canal/121"
                    normalLink={true}
                />
                <ChannelItem
                    nameChannel="Canal 02: FoxSports"
                    imgPath={foxSportsLogo}
                    pathChannel="https://meuguia.tv/programacao/canal/FS2"
                    normalLink={true}
                />
                <ChannelItem
                    nameChannel="Canal 03: SporTV"
                    imgPath={sportvLogo}
                    pathChannel="https://meuguia.tv/programacao/canal/SPO"
                    normalLink={true}
                />
                <ChannelItem
                    nameChannel="Canal 04: SporTV2"
                    imgPath={sportv2Logo}
                    pathChannel="https://meuguia.tv/programacao/canal/SP2"
                    normalLink={true}
                />
                <ChannelItem
                    nameChannel="Canal 05: Espn"
                    imgPath={espnLogo}
                    pathChannel="https://meuguia.tv/programacao/canal/ESB"
                    normalLink={true}
                />
            </ul>
        </div>
    )
}

export default SoccerProgramming;
