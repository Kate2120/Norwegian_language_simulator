function makeActiveInput(){
    let inputs = Array.from(document.querySelectorAll('input'));
    inputs.forEach(input => {
        input.focus();
    })
}
export default makeActiveInput;