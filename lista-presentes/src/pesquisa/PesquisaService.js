import db from "../firebase";

export class PesquisaService {

    getCasais() {
		return db.collection("casal").get()
	}
    // findCasal(noivo,noiva) {
	// 	db.collection("casal").get()
    //     .then((querySnapshot) => {
    //         querySnapshot.forEach((doc) => {
    //             console.log(doc.id, " => ", doc.data());
    //         });
    //     })
    //     .catch((error) => {
    //         console.log("Error getting documents: ", error);
    //     });
	// }
    
}
