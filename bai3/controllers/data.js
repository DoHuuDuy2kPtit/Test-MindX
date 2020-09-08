export async function getData() {
  let data = [];
  await db
    .collection("mybooks")
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        data.push(doc.data());
      });
    });
  console.log(data);
  return data;
}
