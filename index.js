
function introduction (name) {
    return `Hi, my name is ${name}.`
}

//introduction ('Aki'); 
//introduction ('Samir');

function introductionWithLanguage (name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

function introductionWithLanguageOptional (name = "User", language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
