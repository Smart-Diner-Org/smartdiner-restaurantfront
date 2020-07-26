var UserProfile = (function() {
  var full_name = sessionStorage.getItem('smartDinerUserName');

  var getName = function() {
    return full_name;    // Or pull this from cookie/localStorage
  };

  var setName = function(name) {
    full_name = name;
    sessionStorage.setItem('smartDinerUserName', full_name);
    // Also set this in cookie/localStorage
  };

  var clearUser = function(){
    sessionStorage.removeItem('smartDinerUserName');
  }

  return {
    getName: getName,
    setName: setName,
    clearUser: clearUser
  }

})();

export default UserProfile;