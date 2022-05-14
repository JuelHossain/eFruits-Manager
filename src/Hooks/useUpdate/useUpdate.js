const useUpdate = (update, id) => {
  const url = `https://efruits-management.herokuapp.com/fruits/${id}`;
  //sending data to the server
  fetch(url, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(update),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("success", data);
    });
};
export default useUpdate;
