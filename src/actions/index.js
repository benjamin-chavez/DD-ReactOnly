import participants from "../participants";
export const SET_PARTICIPANTS = "SET_PARTICIPANTS";
export const SET_NAV_SECONDARY = "SET_NAV_SECONDARY";

export function setParticipants() {
  // switch this url to local route once in rails
  return fetch(
    "https://raw.githubusercontent.com/bmchavez/bmchavez-DD-ReactOnly/main/participants.json"
  )
    .then((response) => response.json())
    .then((data) => {
      return {
        type: SET_PARTICIPANTS,
        payload: data,
      };
    });
}

export function setNavSecondary() {
  return {
    type: SET_NAV_SECONDARY,
    payload: "???",
  };
}
