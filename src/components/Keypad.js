// Code Keypad Component Here
const passwordChange = e => {
    console.log("Entering password...")
}

function Keypad (){
    return (
        <>
            <h1>I am Keypad</h1>
            <input type='password' onChange={passwordChange}></input>
        </>
    )
}

export default Keypad;