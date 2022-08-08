import './hero.scss';
import { TikTok } from 'react-tiktok';

export default function Hero() {
  return (
    <div className='hero' id='hero'>
        <div className="left">
          <div className="imgContainer">
            <img src='assets/ctvlogosm.jpg' alt='' />
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <div className='tiktok'>
              <TikTok url='https://www.tiktok.com/@ctvradio/video/7098337893336288554?is_from_webapp=1&sender_device=pc&web_id=7102566022927025706' />
            </div>
          <a href="https://www.tiktok.com/@ctvradio" >
            <button>Tune In</button>
            </a>            
          </div>
          <a href='#catalog'>
            <img src='assets/down.png' alt=''/>
          </a>
        </div>
    </div>
  )
}
