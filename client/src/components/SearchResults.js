import React, {Component} from 'react';
import {debounce} from "../services/Debounce";
import {ajax} from "../services/Ajax";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = {results: []};
    this.load = debounce(this.load.bind(this), this.props.debounce);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.search !== this.props.search) {
      this.load();
    }
    if (prevProps.debounce !== this.props.debounce) {
      this.load = debounce(this.load.func, this.props.debounce);
    }
  }

  load() {
    if (this.props.search) {
      ajax(this.props.url, {
        method: "post",
        responseType: "json",
        data: {
          search: this.props.search
        }
      }).then(response => {
        this.setState({results: response});
      }).catch(err => {
        this.setState({results: []});
      });
    }
  }

  render() {
    console.log(this.state.results);
    return (
      <ul>
        {this.state.results.map(result => <li key={result}><a href={"/org/"+result}>{result}</a></li>)}
      </ul>
    );
  }
}

SearchResults.defaultProps = {
  debounce: 500
};

export {SearchResults};
