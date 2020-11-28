import participants from "../participants";
export const SET_PARTICIPANTS = "SET_PARTICIPANTS";
export const SET_NAV_SECONDARY = "SET_NAV_SECONDARY";
export const DENIZEN_TAB_SELECTED = "DENIZEN_TAB_SELECTED";

export function setParticipants() {
  // switch this url to local route once in rails
  return fetch(
    "https://raw.githubusercontent.com/bmchavez/EHI-Lab--Denizen-Designer-Website/main/EHI-Lab_Denizen-Designer-Website/app/javascript/denizenDesigner/data/participants.json"
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

export function selectDenizenTab(denizenTab) {
  return {
    type: DENIZEN_TAB_SELECTED,
    payload: denizenTab,
  };
}
