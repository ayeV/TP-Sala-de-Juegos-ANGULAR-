import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Usuario } from 'app/clases/usuario';
import { firestore } from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {


  constructor(private db: AngularFirestore) { }




  postUser(uid, user: Usuario) {
    debugger;
    this.db.collection("usuarios").doc(uid).set({
      nombre: user.nombre,
      apellido: user.apellido,
      edad: user.edad,
      email: user.email
    })
      .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  }


  postScore(uid, game, score) {
    this.db.collection(game).doc(uid).set({
      puntaje: firestore.FieldValue.increment(score)

    }, {
      merge: true
    })
      .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });


  }

}



