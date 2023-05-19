export function convertTime(newsEpoch) {
  let dateObj = new Date(newsEpoch * 1000);
  let date = dateObj.toLocaleDateString("en-GB"); // english format dd/mm/yyyy
  let time = dateObj.toLocaleTimeString("it-IT"); // italian format 13:10:34 --- in EN viene 1:10:34 PM

  let HumanDateProv = "" + date + " " + time;

  let HumanDate = HumanDateProv.slice(0, -3);

  return HumanDate;
}

export function createUrl(index, API_ONE_DET_OBJ) {
  let NewUrl = `${API_ONE_DET_OBJ + index + ".json"}`; // I create the request url to the second API
  return NewUrl; // No promise - normal function - it only returns the url string I need to query the detail api for each news item
}
