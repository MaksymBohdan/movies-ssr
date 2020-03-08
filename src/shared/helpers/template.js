const htmlTemplate = (jsx, initialData = {}) => `<!DOCTYPE html>
      <html>
        <head>
          <title>SSR with RR</title>
          <script src="/bundle.js" defer></script>
          <script>window.__INITIAL_DATA__ = ${JSON.stringify(
            initialData,
          )}</script>
        </head>
        <body>
          <div id="app">${jsx}</div>
        </body>
      </html>`;

export default htmlTemplate;
