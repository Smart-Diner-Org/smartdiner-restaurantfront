import PlacesAutocomplete from 'react-places-autocomplete';
import React from 'react';


class LocationSearchInput extends React.Component {
  

  
  
  render() {
    return (
      <PlacesAutocomplete
        value={this.props.address}
        onChange={this.props.PAhandleChange}
        onSelect={this.props.handleSelect}
        
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input autoFocus
              {...getInputProps({
                className: 'location-search-input',
              })}
              // defaultValue={this.props.address}
              // onChange={this.props.PAhandleChange}
              // placeholder={localStorage.getItem('address')}
              placeholder= "Enter your location"
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