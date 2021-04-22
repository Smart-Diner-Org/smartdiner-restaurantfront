import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import routes from "./routes";
import "antd/dist/antd.css";
import "./theme 2.1/assets/css/bootstrap.min.css";
import "./theme 2.1/assets/css/style.css";
import "./theme 2.1/assets/css/default.css";
import "./theme 2.1/assets/css/LineIcons.css";
import "./theme 2.1/assets/css/style.css";

ReactDOM.render(routes, document.getElementById("root"));

serviceWorker.unregister();
