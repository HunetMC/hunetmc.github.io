// React
import React from 'react';

// Data fetching
import useSwr from 'swr'
const fetcher = (url) => fetch(url).then(res => res.text())

// Bootstrap
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

function App (props) {
  const uuid = props;
  
  const timeAgo = (prevDate) => {
    const diff = Number(new Date()) - prevDate;
    const minute = 60 * 1000;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 30;
    const year = day * 365;
    switch (true) {
        case diff < minute:
            const seconds = Math.round(diff / 1000);
             return `${seconds} 秒前`
        case diff < hour:
            return Math.round(diff / minute) + '分前';
        case diff < day:
            return Math.round(diff / hour) + '時間前';
        case diff < month:
            return Math.round(diff / day) + '日前';
        case diff < year:
            return Math.round(diff / month) + 'ヶ月前';
        case diff > year:
            return Math.round(diff / year) + '年前';
        default:
            return "";
    }
};

    const { data, error } = useSwr(
        uuid.uuid ? `https://api.skura.tech/players/last/${uuid.uuid}` : null,
        fetcher
    )
    
    if (error) {
        return <></>
    } else {
      if (data === undefined || data === null || data === "") {
        return <></>
      } else {
        if (data.toString() == "not_found") {
            return <></>
        } else {
            let dateTime = new Date(parseInt(data.toString()) * 1000);
            const formatted = dateTime.getFullYear() + '/' + ('0' + (dateTime.getMonth() + 1)).slice(-2) + '/' +('0' + dateTime.getDate()).slice(-2) + ' ' +  ('0' + dateTime.getHours()).slice(-2) + ':' + ('0' + dateTime.getMinutes()).slice(-2) + ':' + ('0' + dateTime.getSeconds()).slice(-2)
            const timestampTooltip = (props) => (
                <Tooltip id="timestamp-tooltip" {...props}>{formatted} JST</Tooltip>
              );
              
            return (
                <div style={{ 'display' : 'inline-block' }}>
                    <span className='tooltip rounded shadow-lg p-1 bg-gray-100 text-red-500 -mt-8'>  
                        {dateTime.toLocaleDateString() + " " + dateTime.toLocaleTimeString()}
                    </span>
                    <span>最終ログイン: </span>
                    <OverlayTrigger
                      placement="right"
                      delay={{ show: 250, hide: 400 }}
                      overlay={timestampTooltip}
                    >
                      <span>{timeAgo(dateTime)}</span>
                    </OverlayTrigger>
                </div>
            )
        }
      }
    }
}

export default App;