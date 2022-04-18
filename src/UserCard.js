function UserCard({eachUser}){

console.log("prop from Parent")












return(
    <div>

        ----------------------------------------------
        <br></br>
         <h3>{eachUser.name}</h3>
         <img className="pics" src= {eachUser.image_url} alt={`This is an image of: ${eachUser.name}`}></img>
        <br></br>
        ----------------------------------------------
        <br></br>
        <br></br>

    </div>
)

}

export default UserCard