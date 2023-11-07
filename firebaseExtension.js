class firebase { //Put your extension here!
    // Import the functions you need from the SDKs you need
    import {
        initializeApp
    } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyAXASyQ33sTyNaZwcF-H7R-WAlRWh2ld_w",
        authDomain: "firestore-penguinmod-extension.firebaseapp.com",
        projectId: "firestore-penguinmod-extension",
        storageBucket: "firestore-penguinmod-extension.appspot.com",
        messagingSenderId: "878526541083",
        appId: "1:878526541083:web:ab4d1891767611acd9b7be"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    // -----------------------------------------------------
    constructor() {}

    getInfo() {
        return {
            "id": "firebasee",
            "name": "Firestore",
            "blocks": [{
                    "opcode": "firestore",
                    "blockType": "command",
                    "text": "Create collection [col]",
                    "arguments": {
                        "col": {
                            "type": "string",
                            "defaultValue": "default-collection"
                        },
                    }
                },
                {
                    "opcode": "field",
                    "blockType": "command",
                    "text": "Create Field [value] in currently opened document",
                    "arguments": {
                        "value": {
                            "type": "string",
                            "defaultValue": "default-field"
                        },
                    }
                },
                {
                    "opcode": "confirm",
                    "blockType": "command",
                    "text": "Create document",
                    "arguments": {}
                },
            ]
        };
    }

    firestore({
        col
    }) {
        var colname = col
    }
    field({
        value
    }) {
        var val = value
    }
    confirm({}) {
        db.collection(col).add({
                value: val
            })
            .then(function(docRef) {
                console.log("Message ", docRef.id, " created!");
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
    }

}

Scratch.extensions.register(new firebase()); //Again, Put your extension here
