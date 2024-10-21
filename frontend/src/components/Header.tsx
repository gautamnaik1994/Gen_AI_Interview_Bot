import { useEffect, useState } from 'react';
import {
  IconRobotAnimated,
  IconHelpCircleOutline,
  IconExternalLink,
} from './Icons';
import { ping } from '../services/api';

function Header() {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await ping();
      setIsOnline(response.status === 'ok');
    }
    fetchData();
  }, []);

  return (
    <nav className="navbar sticky-top bg-black shadow-sm ">
      <div className="container">
        <div className=" d-flex align-items-center gap-3 py-2">
          <IconRobotAnimated />
          <div>
            <h5 className="mb-0 text-body navbar-brand">Interview Bot</h5>
            <small
              className={`badge rounded-pill text-bg-${isOnline ? 'success' : 'warning'} fw-light`}
            >
              {isOnline ? (
                'Online'
              ) : (
                <>
                  <span
                    className="spinner-grow spinner-grow-sm"
                    aria-hidden="true"
                  ></span>{' '}
                  <span
                    className="align-text-top"
                    title="Using free server for backend, which sleeps after some time"
                  >
                    Server is starting up
                    <IconHelpCircleOutline height="1.2em" width="1.2em" />
                  </span>
                </>
              )}
            </small>
          </div>
        </div>
        <div>
          <a
            href="https://github.com/gautamnaik1994/AI_Hackathon"
            target="_blank"
            className="underline-hover"
          >
            GitHub&nbsp;
            <IconExternalLink />
          </a>
          {/* <a
            href="https://github.com/gautamnaik1994/AI_Hackathon/tree/main/frontend"
            target="_blank"
            className="text-white underline-hover ms-3"
          >
            Sample Answers
          </a> */}
        </div>
      </div>
    </nav>
  );
}

export default Header;
