// React
import React from "react";

const Loading = () => {
  return (
    <div className='loading h-screen w-screen fixed top-0 left-0 z-10 bg-black opacity-90'>
      <div className='loading' />
    </div>
  );
};

export default React.memo(Loading);
