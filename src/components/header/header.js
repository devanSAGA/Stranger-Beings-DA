import React from "react";
import { withRouter } from "react-router";
import "./header.css";
import Select from "react-select";

const options = [
  { value: "/", label: "Home" },
  { value: "semester1", label: "Semester 1" },
  { value: "semester2", label: "Semester 2" },
  { value: "semester3", label: "Semester 3" },
  { value: "rural-internship", label: "RI" },
  { value: "semester4", label: "Semester 4" },
  { value: "semester5", label: "Semester 5" },
  { value: "semester6", label: "Semester 6" },
  { value: "semester7", label: "Semester 7" },
  { value: "trip", label: "Imagica/Matheran Trip" },
  { value: "semester8", label: "Semester 8" },
  { value: "random", label: "RANDOM" },
<<<<<<< HEAD
  { value: "thankyounote", label: "Personal Section" },
  { value: "imageFetch", label: "Image fetch test"}
  { value: "thankyounote", label: "Personal Section" },
=======
  // { value: "imageFetch", label: "Image fetch test"},
  // { value: "thankyounote", label: "Personal Section" }
>>>>>>> c2491e831099eb1db1d5502c058f62827360f42a
];

const BASE_URL = `https://devansaga.github.io/Stranger-Beings-DA/`;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null
    };
  }

  handleChange = selectedOption => {
    console.log("BASE_URL :", BASE_URL);
    this.setState({ selectedOption }, () => {
      if (selectedOption) {
        // window.location.href = `${BASE_URL}/${selectedOption.value}`;
        this.props.history.push(`${selectedOption.value}`);
      } else {
        this.props.history.push(``);
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

export default withRouter(Header);
