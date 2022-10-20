import './index.css'

const SuggestionItem = props => {
  const {suggestionsLis, appeareSearch} = props

  const {suggestion} = suggestionsLis

  const clicking = () => {
    appeareSearch(suggestion)
  }

  return (
    <li>
      <p>{suggestion}</p>
      <button type="button" onClick={clicking}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-size"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
