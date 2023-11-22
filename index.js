
const names =["Jane" , "Bob", "Alice", "Carol","Jeremy", "Nancy", "Henry", "Maggie"];
const occupations =[ "Writer", "Teacher", "Programmer", "Mechanic", "Painter", "Editor", "Technician","Guide"];
const rates =[ 30,40,50,60,70,90,115,125,];


const freelancers = [
    {
        name: "Alice",
        occupation: "Writer",
        rate: 30
    },
    {
        name:"Bob",
        occupation:"Teacher",
        rate: 50
    },
];

render()

const addFreelancerIntervalId = setInterval(addFreelancer, 1000);

function render() {
  const flName = document.querySelector("#name");
  const flNameElements = freelancers.map((freelancer) => {
    const element = document.createElement("li");
    element.textContent = freelancer.name;
    console.log(element)
    return element;
  });
    flName.replaceChildren(...flNameElements);

  const flOccupation = document.querySelector("#occupation");
  const flOccupationElements = freelancers.map((freelancer) => {
    const element = document.createElement("li");
    element.textContent = freelancer.occupation;
    return element;
  });
    flOccupation.replaceChildren(...flOccupationElements);

  const flRate = document.querySelector("#rate");
  const flRateElements = freelancers.map((freelancer) => {
    const element = document.createElement("li");
    element.textContent = `$${freelancer.rate}`;
    return element;
  });
    flRate.replaceChildren(...flRateElements);

  const avgRate = freelancers.reduce((total, freelancer,) => {
    total = total + freelancer.rate
    return total
    },0)
  const displayAvgRate = document.querySelector('p')
  displayAvgRate.textContent = `The Average Starting Price is $${Math.floor(avgRate/(freelancers.length))}.`

}


function addFreelancer() {

    const name = names[Math.floor(Math.random() * names.length)];
  
    const occupation = occupations[Math.floor(Math.random() * occupations.length)];

    const rate = rates[Math.floor(Math.random() * rates.length)];

    freelancers.push({ name, occupation, rate});
    
    render();
    
    if (freelancers.length >= 10) {
    clearInterval(addFreelancerIntervalId)
}
}

