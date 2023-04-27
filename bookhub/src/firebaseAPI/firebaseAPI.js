import { initializeApp, getApps, getApp } from 'firebase/app';
import {
    getDatabase, ref, get, child, set, onValue, push, update, remove, query, orderByChild, equalTo, off
} from 'firebase/database';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyASVYySOu4JHhrNJQOWW28kXNk_iOc-CBY",
    authDomain: "bookhub-a0f39.firebaseapp.com",
    databaseURL: "https://bookhub-a0f39-default-rtdb.firebaseio.com",
    projectId: "bookhub-a0f39",
    storageBucket: "bookhub-a0f39.appspot.com",
    messagingSenderId: "1007110447767",
    appId: "1:1007110447767:web:7b73245fd783c92926bfd2"
};

// Initialize Firebase
let app; if (!getApps().length) { app = initializeApp(firebaseConfig); } else { app = getApp(); }

const db = getDatabase();
const dbRef = ref(getDatabase());

// GET APIs
/**
 * @param path: the path of database's data
 * @returns return value of database snapshot based on given param and path
 */
function getData(path, callback) {
    const valueRef = ref(db, path);

    onValue(valueRef, (snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val())
            callback(Object.values(snapshot.val()));
            return snapshot.val();
        } else {
            return "No data";
        }
    });

}

// POST APIs

/**
 * takes in uid, name, age email and add a user to the database at /users/{uid}
 * 
 * @param {*} uid user's special uid from authentication
 * @param {*} name 
 * @param {*} age 
 * @param {*} email 
 * @returns 
 */
function CreateNewUser(uid, name, age, email, yesGenres, noGenres, pages) {
    const db = getDatabase();
    //text post entry
    const user_post = {
        name: name,
        age: age,
        email: "" + email,
        liked_books: {def: ""},
        completed_books: { def: "" },
        forLater_books: {def: ""},
        lightReading: {def: ""}, //need this to force array?
        liked_genres: yesGenres,
        disliked_genres: noGenres, 
        page_preference: pages
    };

    //retrieve key
    const newKey = push(child(ref(db), 'users')).key;

    const updates = {};
    updates['/users/' + uid] = user_post;
    return update(ref(db), updates).catch((error) => { console.log(error) });
}

function addBookToUser(uid, name) {
    const db = getDatabase();
    const user_ref = ref(db, 'users/' + uid  + '/liked_books');
    const book_ref = push(user_ref);
    return set(book_ref, name);
}

function addBookToCompleted(uid, name) {
    const db = getDatabase();
    const user_ref = ref(db, 'users/' + uid  + '/completed_books');
    const book_ref = push(user_ref);
    return set(book_ref, name)
    
}
function addBookToForLater(uid, name) {
    const db = getDatabase();
    const user_ref = ref(db, 'users/' + uid  + '/forLater_books');
    const book_ref = push(user_ref);
    return set(book_ref, name)
    
}
function addBookToLightReading(uid, name) {
    const db = getDatabase();
    const user_ref = ref(db, 'users/' + uid  + '/lightReading');
    const book_ref = push(user_ref);
    return set(book_ref, name)
    
}



// PUT APIS
function updateData(content, key, date, category) {
    const db = getDatabase();

    //retrieve post
    const path = 'Posts/' + key;
    const post = ref(db, path);


    const updates = {};
    updates['/content'] = content;
    updates['/time'] = date;
    updates['/category'] = category;
    update(ref(db, path), updates).catch(error => { alert("Unathorized Access!") });
    return "";
}



//Google Books API
/**
 * 
 * @param {*} name : name of book
 * @param {*} author : name of author
 * @param {*} subject : name of category
 * @returns Promise Object that contains query result
 */
function getBook(name, author, subject) {
    let i = 0;
    let name_q = name === "any" ? "*" : name;
    let author_q = author === "any" ? "" : `+inauthor:${author}`
    let subject_q = subject === "any" ? "" : `+subject:${subject}`

    return fetch(`https://www.googleapis.com/books/v1/volumes?q=${name_q}${author_q}${subject_q}&maxResults=30`);
}
export { getData, getBook, CreateNewUser, addBookToUser, addBookToCompleted, addBookToForLater, addBookToLightReading }