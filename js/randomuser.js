console.log("random user")

const loadUser = ()=>{
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data =>displayUser(data))
}

const displayUser=user =>{
    console.log(user.results[0].gender)
    const gender = document.getElementById('gender');
    gender.innerText = user.results[0].gender;

    const names = user.results[0].name;
    
    const fullName = names.title +" "+names.first + ' ' + names.last;
    const setName = document.getElementById('name');
    setName.innerHTML= fullName;
    console.log(user.results[0].picture.medium);

    const pictureLocation = document.getElementById('pic');
    pictureLocation.src = user.results[0].picture.large;

    
}



loadUser()