import './hero.scss';

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
