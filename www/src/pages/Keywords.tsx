import { NavLink, Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const Warpper = styled.div`
  a {
    display: inline-block;
    padding: 0.2rem 0.3rem;
    margin: 0 0.6rem 0.6rem 0;
    font-size: .75rem;
    border-radius: 0.2rem;
    color: var(--color-fg-muted);
    background-color: var(--color-neutral-muted);
    text-decoration: none;
    transition: all .3s;
    &:hover {
      background-color: var(--color-accent-fg);
      color: var(--color-canvas-default);
    }
  }
`

export function KeywordsPage() {
  return (
    <Warpper>
      <NavLink to="/icons/ad">Ant Design Icons</NavLink>
      <NavLink to="/icons/ae">Aegis Icons</NavLink>
      <NavLink to="/icons/bi">Boxicons</NavLink>
      <NavLink to="/icons/bl">Bank Logos</NavLink>
      <NavLink to="/icons/br">Browser Logos Icons</NavLink>
      <NavLink to="/icons/bs">Bootstrap Icons</NavLink>
      <NavLink to="/icons/bts">Bytesize Icons</NavLink>
      <NavLink to="/icons/ccp">Credit Card & Payment</NavLink>
      <NavLink to="/icons/cg">CSS.gg Icons</NavLink>
      <NavLink to="/icons/ci">CoreUI Icons</NavLink>
      <NavLink to="/icons/ct">Cryptocurrency Icons</NavLink>
      <NavLink to="/icons/di">Devicons</NavLink>
      <NavLink to="/icons/ei">Evil Icons</NavLink>
      <NavLink to="/icons/ev">Eva Icons</NavLink>
      <NavLink to="/icons/fa">Font Awesome Icons</NavLink>
      <NavLink to="/icons/fc">Flat Color Icons</NavLink>
      <NavLink to="/icons/fd">Foundation Icons</NavLink>
      <NavLink to="/icons/fg">Flag Icons</NavLink>
      <NavLink to="/icons/fi">Feather Icons</NavLink>
      <NavLink to="/icons/fl">Flag Icons</NavLink>
      <NavLink to="/icons/fp">Flagpack Icons</NavLink>
      <NavLink to="/icons/gi">Game Icons</NavLink>
      <NavLink to="/icons/go">Github Octicons Icons</NavLink>
      <NavLink to="/icons/gr">Grommet Icons</NavLink>
      <NavLink to="/icons/gy">Glyph Iconset Icons</NavLink>
      <NavLink to="/icons/hi">Heroicons</NavLink>
      <NavLink to="/icons/ic">Icon Collection</NavLink>
      <NavLink to="/icons/ii">Iconic Icons</NavLink>
      <NavLink to="/icons/ik">Ikonate Icons</NavLink>
      <NavLink to="/icons/im">IcoMoon-Free Icons</NavLink>
      <NavLink to="/icons/io">Ionicons Icons</NavLink>
      <NavLink to="/icons/ir">Iconoir Icons</NavLink>
      <NavLink to="/icons/is">Icons</NavLink>
      <NavLink to="/icons/iu">Issuer Icons</NavLink>
      <NavLink to="/icons/ji">Jam Icons</NavLink>
      <NavLink to="/icons/lg">Logos Icons</NavLink>
      <NavLink to="/icons/li">LibreICONS Icons</NavLink>
      <NavLink to="/icons/lu">Lucide Icons</NavLink>
      <NavLink to="/icons/pbi">Power BI Icons</NavLink>
      <NavLink to="/icons/pk">IconPark Icons</NavLink>
      <NavLink to="/icons/ps">Pixeden Stroke7 Icons</NavLink>
      <NavLink to="/icons/mc">Micon Icons</NavLink>
      <NavLink to="/icons/md">Material Design Icons</NavLink>
      <NavLink to="/icons/mi">Maki Icons</NavLink>
      <NavLink to="/icons/mn">Mono Icons</NavLink>
      <NavLink to="/icons/mp">Map Icons</NavLink>
      <NavLink to="/icons/ri">RemixIcon Icons</NavLink>
      <NavLink to="/icons/scwi">Spectrum Workflow Icons</NavLink>
      <NavLink to="/icons/si">Simple Icons</NavLink>
      <NavLink to="/icons/sn">Small-n-flat Icons</NavLink>
      <NavLink to="/icons/sti">Super Tiny Icons</NavLink>
      <NavLink to="/icons/tb">Tabler Icons</NavLink>
      <NavLink to="/icons/ti">Typicons Icons</NavLink>
      <NavLink to="/icons/tn">Teenyicons Icons</NavLink>
      <NavLink to="/icons/uiw">UIW Icons</NavLink>
      <NavLink to="/icons/vl">Vector Logo Zone Icons</NavLink>
      <NavLink to="/icons/vsc">Visual Studio Code Icons</NavLink>
      <NavLink to="/icons/vv">Vivid Icons</NavLink>
      <NavLink to="/icons/wi">Weather Icons</NavLink>
      <NavLink to="/icons/wl">We Love SVG Icons</NavLink>
    </Warpper>
  )
}