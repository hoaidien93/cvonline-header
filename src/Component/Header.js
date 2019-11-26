import React from 'react';

class Header extends React.Component {
    render() {
      return (
        <div className="Header">
          <div className="Header-left">
            Logo
          </div>
          <div className="header-right">
            <div className="header-active">Template</div>
            <div>Other CV's</div>
            <div>My CV's</div>
            <div className="sepreate"></div>
            <div className="header-logout">Logout</div>
          </div>
        </div>
      )}
  }

  export default Header;