import './menu.scss';

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={'menu ' + (menuOpen && 'active')}>
        <ul>
            <li>
                <a href="#hero">Home</a>
            </li>
            <li>
                <a href="#catalog">Catalog</a>
            </li>
            <li>
                <a href="#Footer">Support</a>
            </li>
            
           
        </ul>
    </div>
  )
}
