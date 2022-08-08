import "./navbar.scss";
import QueueIcon from "@mui/icons-material/Queue";

export default function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#hero" className="logo">
            CTV <span>Radio</span>
          </a>
          <div className="itemContainer">
            <QueueIcon className="icon" />
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfv8BOmk0Vfwtot5YTauNWYUWdbPkqqxna4D5atp3Q8ff-nUA/viewform?autoplay=1">
              Submit A Song
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

