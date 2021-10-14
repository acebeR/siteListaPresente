import db from "../firebase";

export default class PesquisaService {

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
    getCasais() {
		db.collection("casal").get()
        .then((querySnapshot) => {
            var objts = [];
            querySnapshot.forEach((doc) => {
                // console.log(doc.id, " => ", doc.data());
                objts.push(doc.data());
            });
            console.log(objts);
            return objts;
        })
        .catch((error) => {
            console.log("Error getCasais: ", error);
        });
	}
    findCasal(noivo,noiva) {
		db.collection("casal").get()
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
