// https://developer.spotify.com/dashboard/applications/aefbbdc54a3d4842a567f65020f1df86

export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "https://spofity-clone-eb5e2.web.app/";
const cliendId = "4b564d8d43584986a960cd02c7ab01be";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
  ];

  export const getTokenFromUrl = () => {
    return window.location.hash
      .substring(1)
      .split("&")
      .reduce((initial, item) => {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
  
        return initial;
      }, {});
  };



  export const loginUrl =  `${authEndpoint}?client_id=${cliendId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;