import React from "react";
import "./header.css";
import Select from "react-select";

const options = [
  { value: "semester1", label: "Semester 1" },
  { value: "semester2", label: "Semester 2" },
  { value: "semester3", label: "Semester 3" },
  { value: "semester4", label: "Semester 4" },
  { value: "semester5", label: "Semester 5" },
  { value: "semester6", label: "Semester 6" },
  { value: "semester7", label: "Semester 7" },
  { value: "semester8", label: "Semester 8" }
];

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null
    };
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption }, () => {
      if (selectedOption) {
        window.location.href = `${window.location.origin}/#${
          selectedOption.value
        }`;
      } else {
        window.location.href = `${window.location.origin}`;
      }
    });
  };

  render() {
    return (
      <div className="header-container">
        <div className="header-title">Stranger Beings (DA Edition)</div>
        <div className="header-navigation-dropdown">
          <span>Go To: </span>
          <Select
            className="dropdown"
            isClearable={true}
            value={this.state.selectedOption}
            onChange={this.handleChange}
            options={options}
          />
        </div>
      </div>
    );
  }
}

export default Header;
