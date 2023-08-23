
//1
const hobbies=['jogar vôlei', 'cantar', 'comer', 
'escutar música','correr','cozinhar','dançar'];
console.log(hobbies)
console.log(hobbies[0])
console.log(hobbies[1])
console.log(hobbies[2])
hobbies[0] = 'ler livros';
console.log(hobbies)


hobbies.push('jogar vôlei')
console.log(hobbies)
//desafio
hobbies.forEach(function(hobby) {
console.log("Olá, eu sou o hobby " + hobby + "!");
});

//2
const bookTitles = hobbies.map(function(hobby) {
    return "O grande mundo de" + hobby;
    });
    console.log(bookTitles);

    
//3
    const dHobbies = hobbies.filter(function(hobby) {
        return hobby[0] === 'd';
        } );
        
        console.log(dHobbies);
//desafio
        const jhobbies = hobbies.filter(function(hobby) {
            return hobby[0] === 'j';
            } );
            
            console.log(jhobbies);
//4
        const runningPosition = hobbies.findIndex(function(hobby) {
            return hobby === 'correr';
            });
            console.log("Correr está na posição: " + runningPosition);
//desafio
            const runningposi = hobbies.findIndex(function(hobby) {
            return hobby === 'cozinhar';
        });
        console.log("Correr está na posição: " + runningposi);
  //5.1
        const allHobbies = hobbies.reduce(function(accumulator, hobby) {
                return accumulator + " , " + hobby; }, "");
                
            console.log("Meus hobbies são: " + allHobbies);
//desafio
                const todosHobbies = hobbies.reduce(function(accumulator, hobby) {
                    return accumulator + " , " + hobby; }, "");
                    console.log("Esses são meus robbies favoritos: " + todosHobbies);
    
//5.2
        const hasVHobbi = hobbies.some(function(hobby) {
                    return hobby[0] === 'v'; });
        console.log("Eu tenho um hobby que começa com 'v'? " + hasVHobbi);

        //desafio
     const hasVHobby = hobbies.some(function(hobby) {
            return hobby.length >= 8; });
            console.log("Eu tenho um hobby que tem mais de 8? " + hasVHobby);
       
       //6
            const quinzeLetterHobby = hobbies.find(function(hobby) {
            return hobby.length <15; });
            console.log("qual hobbie tem menos de 15 letras?: " + quinzeLetterHobby);

      //7
            const fiveLetterHobby = hobbies.find(function(hobby) {
        return hobby.length === 5; });
        console.log("Meu primeiro hobby com 5 letras é: " + fiveLetterHobby);

        //desafio 
        const letraz = hobbies.find(function(hobby) {
            return hobby.includes ('z'); });
            console.log("Meu primeiro hobby que tem a letra z é: " + letraz);
//8
            const firstThreeHobbies = hobbies.slice(0, 3); console.log("Meus três primeiros hobbies são: ",
firstThreeHobbies);

//desafio
const quatro = hobbies.slice(2, 4); 
console.log("Os meus 2 e 4 são: " + quatro);
