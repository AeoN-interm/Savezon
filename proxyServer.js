const corsAnywhere = require("cors-anywhere");

corsAnywhere.createServer({
  originWhitelist: [], // Allow all origins
}).listen(8080, () => {
  console.log("✅ CORS Anywhere proxy running at http://localhost:8080");
});
