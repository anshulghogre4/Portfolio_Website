import  ReactDOM  from "react-dom";
import App from "./App";
import './index.css'
// import.css if it's  is a body related CSS not component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
//using that app component into the render with self closing tag
// render: it does the rendering of the component
// ReactDOM: it's known as virtual DOM
//  createroot: hydrate your container with the javascript