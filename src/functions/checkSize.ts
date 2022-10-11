function checkSize(){
    let width = window.innerWidth;
    if(width > 560){
        return "large"
    }
    else{
        return "small"
    }
}
export default checkSize;