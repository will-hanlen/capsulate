export default (req, res) => {
  let journal = [
    {
      id: 1,
      date: "2019-01-03",
      text: "My first upload",
      photo: ""
    },
    {
      id: 2,
      date: "2019-01-05",
      text: "Today was a fun day. I went to the beach.",
      photo: "https://i.ytimg.com/vi/rVSDFk3vY5c/maxresdefault.jpg"
    },
    {
      id: 3,
      date: "2019-01-09",
      text: "Today was rainy.",
      photo: "https://cdna.artstation.com/p/assets/covers/images/020/320/442/large/yevi-art-regenraupe.jpg?1567330786"
    },
    {
      id: 4,
      date: "2019-01-15",
       text: "I got a new puppy today.",
      photo: ""
    },
    {
      id: 5,
      date: "2020-01-15",
      text: "My puppy is a year old today.",
      photo: "https://i.pinimg.com/originals/70/98/9e/70989ecb0258f566b9af13e876cf7dce.gif"
    },
  ]

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(journal))
}

