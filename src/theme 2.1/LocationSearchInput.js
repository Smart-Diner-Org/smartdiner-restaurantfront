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
            <p className="col-11" style={{"padding-left":"0px","font-size":"14px"}}>Enter your area name. Do not type your full address</p>
            <input autoFocus
              {...getInputProps({
                className: 'location-search-input',
              })}
              placeholder= "Ex. Sulur"

            />
            <div className="autocomplete-dropdown-container" >
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { color:"#000466" , cursor: 'pointer' , fontSize:"0.8em", padding:"10px", fontWeight:'700'}
                  : { backgroundColor: '#ffffff', cursor: 'pointer', fontSize:"0.8em" };
                return (
                  <div aria-expanded="false"
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