import React, { useLayoutEffect, useState } from 'react';

import "./index.css"
interface IHeaderComponentProps {
  dataSource?: Array<any>
}

const HeaderComponent = (props: IHeaderComponentProps) => {

  useLayoutEffect(() => {}, []);

  if (window?.location?.pathname === '/login') {
    return null
  }

  return (
    <div className='header'>
      <div className='header-container'>
        {/* <div className='header-logo'></div> */}
        <a href='/' className='header-title'>
          D-One
        </a>

        <div className='header-meneu'>
          {/* <div className='meneu-item'>首页</div> */}
          {/* <div className='meneu-item'>设置</div> */}
          {/* <div className='meneu-item'>我的</div> */}
        </div>

        <div className='header-user'>
          <div className='user-avatar'></div>
        </div>
      </div>
    </div>
  )
}

export default HeaderComponent;