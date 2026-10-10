"use strict";

class FlappyGoobert extends React.Component {
  componentDidMount() {
    this.script = document.createElement('script');
    this.script.src = "../games/flappy-goobert.js";
    this.script.async = true;
    document.body.appendChild(this.script);
  }
  render() {
    return /*#__PURE__*/React.createElement("main", {
      id: "main",
      className: "flappy-goobert container bg-primary"
    }, /*#__PURE__*/React.createElement("div", {
      id: "keys",
      className: "d-block d-md-none vw-100"
    }, /*#__PURE__*/React.createElement("i", {
      className: "bi bi-arrow-up text-white bg-warning p-1 rounded-pill key keyup vw-100",
      onClick: () => jump()
    })));
  }
}
