// var asia = {
//     countries: {
//         India: {
//             Mumbai: {
//                 population: 18.5
//             }
//         },
//         China: {
//             Beijing: {
//                 population: 21.5
//             },
//             "Hong Kong": {
//                 population: 7.3
//             }
//         }
//     }
// }

// console.log(asia.countries.India.Mumbai);
// console.log(asia.countries.China.Beijing);
// console.log(asia.countries.China["Hong Kong"]);


// var familyBankValues = {
//     familyMembers: {
//         Mother: {
//             "account number": 8096291,
//             accountBalance: 10000000
//         },
//         Father: {
//             "account number": 8096292,
//             accountBalance: 9999999
//         },
//         Sister:{
//             "account number": 8096293,
//             accountBalance: 10000
//         },
//         "Step Brother":{
//             "account number": 8096292,
//             accountBalance: 15000
//         }

//     }
// }


// console.log(familyBankValues.familyMembers.Mother.accountBalance);
// console.log(familyBankValues.familyMembers.Father.accountBalance);
// console.log(familyBankValues.familyMembers["Step Brother"]);


// var stepBrother = [];
// console.log(stepBrother.push(familyBankValues.familyMembers["Step Brother"]));

// console.log(stepBrother);




// var num = 12345
// var n = num.toString ();

// function reversed(num)
// {
//     num = num + ""; //converts number to string
//     return num.split("").reverse().join("");
// }
// console.log(reversed(12345));



// var players =[
//     {name: "Lionel Messi", club: "FC Barcelona"},
//     {name: "Christiano Ronaldo", club: "Real Madrid"},
//     {name: "Luis Suarez", club: "FC Barcelona"},
//     {name: "Gareth Bale", club: "Real Madrid"},
//     {name: "Manuel Neur", club: "FC Bayern Munchen"}

// ]

// var noBarc = players.filter (function(player){
//     return player.club !== 'FC Barcelona';
// });

// console.log(noBarc);


// var playersall =['Lionel Messi', 'Christiano Ronaldo', 'Luis Suarez', 'Gareth Bale', 'Manuel Neur'];

// console.log(playersall.length);



// var marks = [
//     { mark: 99}, {mark: 80}, {mark: 60}, {mark: 70}, {mark: 50},
//     { mark: 67.6}, {mark: 62.4}, {mark: 87.5}, {mark:55},
// ]

// var sumMark = marks.reduce(function(sum, score){
//     return sum + score.mark;
// }, 0);

// var markLength = marks.reduce(function(a,b,c,d){
//     return d.length
// })

// console.log(sumMark);

// function elvis(a){
//     var sumMark = a.reduce(function(sum, score){
//         return sum + score.mark;
//     }, 0);
    
//     var markLength = a.reduce(function(a,b,c,d){
//         return d.length
//     })

//     return sumMark/markLength;
// }

// console.log(elvis(marks));



// uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."


// function uefaEuro2016(teams, score){
//     if (score[0] > score [1]){ //Array for calling score at position 0 and position 1
//         return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
//     }   else if (score [0] === score [0]){
//         return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} teams played draw`
//     // }   else if (score [0] < score [1]){
//     //     return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!'
//     }
//     }


// console.log(uefaEuro2016(['China', 'Angola'], [0,0]));