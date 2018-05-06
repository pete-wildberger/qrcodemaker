import * as React from 'react';

const Ticket = (props: any) => {
  console.log(props);
  return (
    <div className="row">
      <div className="col-3">
        <img src={props.code} />
      </div>
      <div />
    </div>
  );
};

export default Ticket;
