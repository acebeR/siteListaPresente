import db from "../firebase";

export default class FirebaseService {
	getUtilidades() {
		db.collection("utilidade").get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
	}
}