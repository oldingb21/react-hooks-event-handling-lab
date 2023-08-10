// Code EyesOnMe Component Here

const buttonFocus = () => {
    console.log('Good!')
}

const buttonBlur = () => {
    console.log('Hey! Eyes on me!')
}

function EyesOnMe () {
    return (
        <>
            <h1>I am Eyes on Me</h1>
            <button onFocus={buttonFocus} onBlur={buttonBlur}>Eyes on me</button>
        </>
    )
}

export default EyesOnMe;