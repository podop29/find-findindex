//filterByUsername
const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'},
    {username: 'podp'},
    {username: 'keeg'}

  ];
function filterByUsername(users, username){
    return users.find((user)=>{
        return user['username'] = username;
    })
}
//console.log(filterByUsername(users,'podp'));

//removeUser

const usersArray = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'},
    {username: 'podp'},
    {username: 'keeg'}
  ];

 function removeUser(users, userName){
     let index = users.findIndex((user)=>{
        return user.userName = userName;
     })
     if(index === -1) return;

     return users.splice(index,1)[0]
     
 }


console.log(usersArray)
 console.log(removeUser(users, 'akagen'));