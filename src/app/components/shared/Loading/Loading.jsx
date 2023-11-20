import React from 'react';

// * style
import './Loading.scss';

// * components

// * scripts

// * contexts

// * img

// * icons

import { GoDesktopDownload } from 'react-icons/go';

const Loading = () => {
   return (
      <div className="Loading">
         <GoDesktopDownload className="loading-icon" />

         <span>Loading...</span>
      </div>
   );
};

export default Loading;
