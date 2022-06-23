import { useParams } from 'react-router-dom'
import ChannelItem from '../../components/channel-item'

import premiereLogo from '../../images/premiere-logo.jpeg'
import foxSportsLogo from '../../images/fox-sports.jpeg'
import sportvLogo from '../../images/sportv-logo.jpeg'
import espnLogo from '../../images/espn-logo.jpeg'
import sportv2Logo from '../../images/sportv2-logo.jpeg'

import "./styles.css"
import Header from '../../components/header/header'

function Soccer() {


  const chooseChanneObj = () => {
    const soccerChannelName = useParams()

    const channelsURL = [
      {
        "name": "foxsports",
        "url": "https://luizfelipejs.github.io/project.luizfelipejs.github.io/SecondChannel.html"
      },
      {
        "name": "premiere",
        "url": "https://luizfelipejs.github.io/project.luizfelipejs.github.io/"
      },
      {
        "name": "espn",
        "url": "https://luizfelipejs.github.io/project.luizfelipejs.github.io/ThirdChannel.html"
      },
      {
        "name": "sporTV",
        "url": "https://luizfelipejs.github.io/project.luizfelipejs.github.io/FourthChannel.html"
      },
      {
        "name": "sporTV2",
        "url": "https://luizfelipejs.github.io/project.luizfelipejs.github.io/FifthChannel.html"
      }
    ]

    const ChannelObj = channelsURL.find((channel) => {
      if (channel.name == soccerChannelName.channel) {
        return channel
      } 
    })
    
    return ChannelObj
  }

  return (
    <main className="soccer-page">
      <div className="soccer-video">
        <Header />
        <iframe
          height={'600rem'}
          width={'100%'}
          frameBorder={0}
          scrolling="no"
          allowFullScreen
          src={chooseChanneObj()?.url} 
        />

        <div className="text-soccer">
          <div className="channel-info">
            <b>Canal: {chooseChanneObj()?.name}</b> Você esta assistindo: Londrina Vs Vasco
          </div>
        </div>
      </div>
      <ul className="channel-options">
          <ChannelItem 
            nameChannel="Canal 01: Premiere"
            imgPath={premiereLogo}
            pathChannel="/soccer/premiere"
          />
          <ChannelItem 
            nameChannel="Canal 02: FoxSports"
            imgPath={foxSportsLogo}
            pathChannel="/soccer/foxsports"
          />
          <ChannelItem 
            nameChannel="Canal 03: SporTV"
            imgPath={sportvLogo}
            pathChannel="/soccer/sporTV"
          />
          <ChannelItem 
            nameChannel="Canal 04: SporTV2"
            imgPath={sportv2Logo}
            pathChannel="/soccer/sporTV2"
          />
          <ChannelItem 
            nameChannel="Canal 05: Espn"
            imgPath={espnLogo}
            pathChannel="/soccer/espn"
          />
      </ul>
    </main>
  )
}

export default Soccer;
