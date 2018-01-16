const pagesContext = require.context('./pages/', true, /index\.js$/);

pagesContext.keys().forEach(file => {
  if (/^\.\/[^/]+?\/(js\/)?index\.js$/.test(file)) {
    const result = pagesContext(file);
    if (result.default) {
      pages.push(result.default);
    }
  }
});
