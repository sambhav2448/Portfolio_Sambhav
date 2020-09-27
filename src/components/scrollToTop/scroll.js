import React, { Component } from "react";
import "./scroll.css";

export default class ScrollToTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false,
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function (e) {
      scrollComponent.toggleVisibility();
    });
  }
  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        is_visible: true,
      });
    } else {
      this.setState({
        is_visible: false,
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  render() {
    const { is_visible } = this.state;
    return (
      <div className={is_visible ? "scroll-to-top" : "notvisible_class"}>
        {is_visible && (
          <div onClick={() => this.scrollToTop()}>
            <i class="fas fa-hand-pointer"></i>
          </div>
        )}
      </div>
    );
  }
}
