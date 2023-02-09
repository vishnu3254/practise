const getDataFromApi = async () => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(typeof response);
    // without "await" promise is pending, because without await function controll will move to next line without fetching fully.
    let data = await response.json();
    // as json() response is promise, without "await" promise is assigned to the data that is in the pending state without actual data.
    console.table(
      data.filter(
        (element) =>
          element.company.name == "Romaguera-Crona" ||
          element.company.name == "Romaguera-Jacobson"
      )
    );
  } catch (err) {
    console.log(err);
  }
};
getDataFromApi();
