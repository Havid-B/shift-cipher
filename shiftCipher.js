function encode(plainText){
    let encodedText = '';
    for(i = 0; i < plainText.length; i++){
        encodedText += String.fromCharCode(plainText.charCodeAt(i) + 2);
    }

    return encodedText;
}

function decode(encodedText){
    let decodedText = '';
    for(i = 0; i < encodedText.length; i++){
        decodedText += String.fromCharCode(encodedText.charCodeAt(i) - 2);
    }

    return decodedText;
}