function createmsg(top, description) {
    db.collection("msg").add({
        title: top,
        desc: description,
    })
    .then(function(docRef) {
        console.log("Message ", docRef.id, " created!");
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}
function read() {
    var msgdiv = document.getElementById("msg");
    msgdiv.innerHTML = ""
     // Get a reference to the "users" collection
    var usersRef = db.collection("msg");

    // Get all documents in the collection
    usersRef.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
    // Get a reference to the "users" div
    var msgdiv = document.getElementById("msg");

    // Create a new paragraph
    var para = document.createElement("p");
    var para2 = document.createElement("p");
    var br = document.createElement("br");
    var newdiv = document.createElement("div");

    // Create a text node containing user info
    var text = document.createTextNode(doc.data().title);
    var text2 = document.createTextNode(doc.data().desc);
    console.log(doc.data());

    // Append the text to the paragraph
    para.appendChild(text);
    para2.appendChild(text2);

    // Append the paragraph to the "users" div
    msgdiv.appendChild(newdiv);
    newdiv.appendChild(para);
    newdiv.appendChild(para2);
    newdiv.appendChild(br);
    });
    }).catch((error) => {
        console.log("Error getting documents: ", error);
    });
}
function send() {
    t = document.getElementById("title").value
    d = document.getElementById("desc").value
    createmsg(t, d)
    read()
}
function unload() {
    msg = document.getElementById("msg")
    msg.innerHTML = ""
}
window.onload = function() {
    read()
    typeof Notification !== "undefined"
    var notifystatus = Notification.permission
    if (notifystatus == "default") {
    Notification.requestPermission().then(function (permission) {

        var notifystatus = permission
        console.log(permission);
        if (notifystatus === "granted") {
            var body = "You got a message from crzy!"
            var msgnotify = new Notification("Message", {body});
            msgnotify.onclick = function(){
                window.parent.focus();
                msgnotify.close();
            }
        } 
    
    
    });
}
}