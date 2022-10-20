import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  searchSuggest = event => {
    this.setState({searchInput: event.target.value})
  }

  appeareSearch = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {searchInput} = this.state

    const {suggestionsList} = this.props

    const filterList = suggestionsList.filter(each =>
      each.suggestion.includes(searchInput),
    )

    return (
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="logo-size"
        />
        <div className="input-container">
          <div className="search-alin">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-logo"
            />
            <input
              placeholder="Search Google"
              type="search"
              onChange={this.searchSuggest}
              value={searchInput}
            />
          </div>
          <ul>
            {filterList.map(each => (
              <SuggestionItem
                suggestionsLis={each}
                appeareSearch={this.appeareSearch}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
