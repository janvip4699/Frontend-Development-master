import React from 'react'
import ReactDOM from 'react-dom/client'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import ContainerApp from './ContainerApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContainerApp />
  </React.StrictMode>,
)
