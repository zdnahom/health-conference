const speakerObj = [
    {
      image: './assets/images/person_1.png',
      name: 'Dr.Benjamin',
      position: 'Pediatric neurosurgeon and New York Times bestselling author',
      description: 'Pediatric neurosurgeon and New York Times bestselling authorPediatric neurosurgeon and New York Times bestselling author',
    },
    {
      image: './assets/images/person_3.png',
      name: 'Dr.Frank',
      position: 'Pediatric neurosurgeon and New York Times bestselling author',
      description: 'Pediatric neurosurgeon and New York Times bestselling authorPediatric neurosurgeon and New York Times bestselling author',
    },
    {
      image: './assets/images/person_4.png',
      name: 'Dr.Mensur',
      position: 'Pediatric neurosurgeon and New York Times bestselling author',
      description: 'Pediatric neurosurgeon and New York Times bestselling authorPediatric neurosurgeon and New York Times bestselling author',
    },
    {
      image: './assets/images/person_5.png',
      name: 'Dr.Chris',
      position: 'Pediatric neurosurgeon and New York Times bestselling author',
      description: 'Pediatric neurosurgeon and New York Times bestselling authorPediatric neurosurgeon and New York Times bestselling author',
    },
    {
      image: './assets/images/person_6.jpg',
      name: 'Dr.Hannah',
      position: 'Pediatric neurosurgeon and New York Times bestselling author',
      description: 'Pediatric neurosurgeon and New York Times bestselling authorPediatric neurosurgeon and New York Times bestselling author',
    },
    {
      image: './assets/images/person_2.png',
      name: 'Dr.Nahom',
      position: 'Pediatric neurosurgeon and New York Times bestselling author',
      description: 'Pediatric neurosurgeon and New York Times bestselling authorPediatric neurosurgeon and New York Times bestselling author',
    },
  ];


  function generateSpeakers(data){
    data.forEach(item=>{
        let speaker=document.createElement("div")
        speaker.className="d-flex mb-5"
        speaker.innerHTML=`
        <img src=${item.image} alt="speaker picture">
        <div class="ms-4">
            <h3 class="fw-bold">${item.name}</h3>
            <p class="focus-color">${item.position}</p>
            <hr>
            <p>${item.description}</p>
        </div>`
        document.querySelector(".featured-speakers").appendChild(speaker)
    })
  }
  generateSpeakers(speakerObj)