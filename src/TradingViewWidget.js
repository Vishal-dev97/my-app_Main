// TradingViewWidget.jsx

import React, { useEffect, useRef } from 'react';

let tvScriptLoadingPromise;

export default function TradingViewWidget() {
  const onLoadScriptRef = useRef();

  useEffect(
    () => {
      onLoadScriptRef.current = createWidget;

      if (!tvScriptLoadingPromise) {
        tvScriptLoadingPromise = new Promise((resolve) => {
          const script = document.createElement('script');
          script.id = 'tradingview-widget-loading-script';
          script.src = 'https://s3.tradingview.com/tv.js';
          script.type = 'text/javascript';
          script.onload = resolve;

          document.head.appendChild(script);
        });
      }

      tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

      return () => onLoadScriptRef.current = null;

      function createWidget() {
        if (document.getElementById('tradingview_e3878') && 'TradingView' in window) {
          new window.TradingView.widget({
            autosize: true,
            symbol: "NSE:NIFTY",
            interval: "D",
            timezone: "Etc/UTC",
            theme: "dark",
            style: "1",
            locale: "in",
            enable_publishing: false,
            backgroundColor: "rgba(255, 242, 204, 1)",
            gridColor: "rgba(0, 0, 0, 0.06)",
            allow_symbol_change: true,
            container_id: "tradingview_e3878"
          });
        }
      }
    },
    []
  );

  return (
    <div className='tradingview-widget-container' style={{ height: "100%", width: "100%" }}>
      <div id='tradingview_e3878' style={{ height: "calc(100% - 100px)", width: "100%" }} />
      <div className="tradingview-widget-copyright">
        {/* <a href="https://in.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a> */}
      </div>
    </div>
  );
}
