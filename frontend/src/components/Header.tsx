import { IconRobot } from './icons';

function Header() {
  return (
    <nav className="navbar sticky-top bg-black shadow-sm ">
      <div className="container">
        <div className=" d-flex align-items-center gap-3 py-2">
          <IconRobot />
          <div>
            <h5 className="mb-0 text-body navbar-brand">Interview Bot</h5>
            <small className="badge rounded-pill text-bg-success fw-light">
              Online
            </small>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
