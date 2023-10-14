//gets a single number and logs text
async function getFact(num){
    fact = await axios.get(`http://numbersapi.com/${num}/?json`)
    console.log(fact)
    console.log(fact.data.text)
}
//gets a bunch of numbers and inserts the facts on a page
async function getManyFact(num, num2){
    res = await axios.get(`http://numbersapi.com/${num}..${num2}/?json`)
       for (facts in res.data){
        insertFact(res.data[facts])
    }
 
    }
//gets four facts and logs them on webpage
async function getFourFacts(num){
    fact=[]
    //this get request is setup to get all four requests at the same time
    //but still uses await in the second part to speed up the process
    //as none of the requests are dependant on eachother
    f1 = axios.get(`http://numbersapi.com/${num}/?json`)
    f2 = axios.get(`http://numbersapi.com/${num}/?json`)
    f3 = axios.get(`http://numbersapi.com/${num}/?json`)
    f4 = axios.get(`http://numbersapi.com/${num}/?json`)
    
    fact[0] = await f1;
    fact[1] = await f2;
    fact[2] = await f3;
    fact[3] = await f4;

    console.log(fact)
    for(let count=0; count<4; count++){
        insertFourFact(fact[count].data.text)
    }

}
//gets facts currently set for nubmers 1-20
getManyFact(1, 20)
//gets four facts on the number 20
getFourFacts(20)

//code to insert data retreived from API onto webpage
function insertFact(fact){
    newli = document.createElement('li');
    newli.innerHTML=fact;
    const facts = document.querySelector('.facts');
    facts.append(newli);
   }
   function insertFourFact(fact){
       newli = document.createElement('li');
       newli.innerHTML=fact;
       const facts = document.querySelector('.four_facts');
       facts.append(newli);
      }