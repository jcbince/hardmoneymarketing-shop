import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import {ref as dataRef, push, set, get, remove} from 'firebase/database';
import { db, storage  } from "./libs/firebase/firebaseConfig";

async function pageInit(){
  const key = sessionStorage.getItem('key');
  console.log(key)
  //read in the object RTD with key
  //remove
  const rentalRef = dataRef(db, `rentals/${key}`);
  const deleteItem = document.getElementById('delete');

  const exit = document.getElementById('exit');
  deleteItem.addEventListener("click", ()=>{
    remove(rentalRef);
    alert("Item Successfully deleted");
  });
}

exit.addEventListener("click", ()=>{
  window.location.assign('read.html');
});

pageInit();