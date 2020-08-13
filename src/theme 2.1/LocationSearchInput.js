import PlacesAutocomplete from 'react-places-autocomplete';
import React from 'react';


class LocationSearchInput extends React.Component {
  constructor(props){
    super(props)
    this.state={ selected :""}
this.handleSelect = this.handleSelect.bind(this)
  }
  handleSelect(object) {
  // Do something with address and placeId and suggestion
this.setState({selected:object})
}

  
  
  render() {
    return (
      <PlacesAutocomplete
        value={this.props.address}
        onChange={this.props.PAhandleChange}
        onSelect={this.props.handleSelect}
        
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input 
              {...getInputProps({
                className: 'location-search-input',
              })}
              // placeholder={localStorage.getItem('address')}
              placeholder={sessionStorage.getItem('address') ? sessionStorage.getItem('address') : "Enter your location"}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}

export default LocationSearchInput;