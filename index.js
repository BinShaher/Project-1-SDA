function checkLogin() {
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;

    if (email.toLowerCase() === "admin@binshaher.com" && password.toLowerCase() === "admin") {
        alert("Successfully Logged in.")
        window.location.href = 'dashboard.html'
        return false;
    } else {
        alert("wrong login, email: admin@binshaher.com, password: admin")
        window.location.href = 'login.html';
        return false;
    }
}

function showCreatePost() {
    createPostForm = document.getElementById('createPostForm');
    if (createPostForm.style.display === "block") {
        createPostForm.style.display = "none";
    } else {
        createPostForm.style.display = "block"
    }
}

let today = new Date();
let date = `${today.getFullYear()}-${(today.getMonth() + 1)}-${today.getDate()}`;
let time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
let dateTime = `${date} ${time}`;


let posts = [{
    title: "Post",
    contents: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et molestiae provident harum odio nobis, porro ex delectus repellendus.",
    date: "2021-6-13 22:59:31",
    img: "./assets/img/avatars/profile.png"
}];


function addPost() {
    console.log('yo')

    postTitle = document.getElementById('postTitle').value;
    postContent = document.getElementById('postContent').value;
    postPhoto = document.getElementById('postPhoto');

    posts.push({
        title: postTitle,
        contents: postContent,
        date: dateTime,
        img: "./assets/img/avatars/profile.png"
    })
    printPosts();
}

function insertAfter(newElement, referenceElement) {
    referenceElement.parentNode.insertBefore(newElement, referenceElement.nextSibling);
}

function printPosts() {
    posts.forEach(post => {
        parent = document.getElementById('postBoxx');
        parentDiv = parent.parentNode;
        console.log(post);

        postDiv = document.createElement('div');
        postImg = document.createElement('img');
        postName = document.createElement('h3');
        postDate = document.createElement('p');
        postContents = document.createElement('p');

        postDiv.className = 'row posts';
        postImg.className = 'rounded-circle';
        postImg.src = post.img;

        postName.className = 'name';
        postName.innerHTML = post.title;

        postDate.className = 'title';
        postDate.innerHTML = post.date;

        postContents.className = 'description';
        postContents.innerHTML = post.contents;

        insertAfter(postContents, parent);
        insertAfter(postDate, parent);
        insertAfter(postName, parent);
        insertAfter(postImg, parent);
    });
};