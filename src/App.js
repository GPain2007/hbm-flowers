import "./App.css";
import img from "./images/logo.png";
import "typeface-glacial-indifference";

function App() {
  return (
    <div className="page">
      <div>
        <img src={img} />
      </div>
      <div className="text">Florist</div>
      <div className="text"> Something Big is Coming Soon</div>
      <p className="text">
        In the meantime you can reach out to me on Instagram{" "}
        <a href="#"> @hbm_flowercity</a> or by email at{" "}
        <a href="">hbmflowercity@gmail.com</a>
      </p>
    </div>
  );
}

export default App;
