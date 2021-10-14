import db from "../firebase";

export default class LoginService {
	getUtilidades() {
		db.collection("utilidade").get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log("aquiiiii");
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
	}
}