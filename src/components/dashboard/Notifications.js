import React from 'react';

import { distanceInWordsToNow } from 'date-fns';

const Notifications = props => {
  const { notifications } = props;
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Notifications</span>
          <ul className="notifications">
            {notifications &&
              notifications.map(item => (
                <li key={item.id}>
                  <span className="pink-text">{item.user} </span>
                  <span>{item.content}</span>
                  <div className="grey-text note-date">
                    {distanceInWordsToNow(item.time.toDate()) + ' ago'}
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
