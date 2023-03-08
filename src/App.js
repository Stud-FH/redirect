import './App.css';

function App() {
  const redirectUrl = process.env['REDIRECT_URL'];
  return redirectUrl?
      <meta httpEquiv="Refresh" content="`0; url=process.env['REDIRECT_URL']" />
      : <h1>ERROR: Environment Variable REDIRECT_URL missing.</h1>
}

export default App;
