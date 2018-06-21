import React from 'react';

import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };

  // Class Methods
  handleDeleteOptions = () => {
    this.setState(() => {
      return { options: [] };
    });
  };
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => {
      return {
        options: prevState.options.filter((option) => optionToRemove !== option)
      };
    });
  };
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState((prevState) => {
      return { selectedOption: option };
    });
  };
  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      // indexOf will return the zero based index, -1 if doesn't exist at all
      return 'This option already exists';
    }
    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      };
    });
  };
  handleCloseModal = () => {
    this.setState((prevState) => {
      return { selectedOption: null };
    });
  };

  // React Methods
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (error) {
      console.log(err);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
      console.log('component did update, saved data');
    }
  }
  componentWillUnmount() {
    console.log('component will unmount');
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer';
    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            handlePick={this.handlePick}
            disabled={this.state.options.length === 0}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleCloseModal={this.handleCloseModal}
        />
      </div>
    );
  }
}
