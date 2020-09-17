export default (req, res) => {
  let journal = [
    {
      id: 1,
      date: "2019-01-03",
      text: "My first upload. This post does not have a photo.",
      photo: ""
    },
    {
      id: 2,
      date: "2018-09-05",
      text: "Did a triathalon in San Diego California.",
      photo: "https://drive.google.com/uc?export=download&id=0ByJhUz9RiNenT05sdUVaTGZkTDQ"
    },
    {
      id: 3,
      date: "2018-11-25",
      text: "Christmas back home in Kansas. It's good to have some time off.",
      photo: "https://drive.google.com/uc?export=download&id=1QfuZMhMlgcKgoKbJu7gLKigwBqnfhrRY"
    },
    {
      id: 7,
      date: "2019-03-15",
      text: "Spring break in Cancun. My $3 sunglasses are looking very cool.",
      photo: "https://drive.google.com/uc?export=download&id=1Mkd8tPXCmviqEB3MnHKNgu1_209nZR3E"
    },
    {
      id: 5,
      date: "2019-03-12",
      text: "Combat dining in with Nick.",
      photo: "https://drive.google.com/uc?export=download&id=1hKs695bKTj2MUFrzjbxKCO7uFffan8yH"
    },
    {
      id: 4,
      date: "2019-07-15",
       text: "Commitment dinner at USAFA.",
      photo: "https://drive.google.com/uc?export=download&id=1q1_1hZfEJH9UX5F7jRhmoGEULprMB-45"
    },
    {
      id: 6,
      date: "2020-00-01",
      text: "Scuba diving in Thialand. Saw a whale shark!",
      photo: "https://drive.google.com/uc?export=download&id=1P3WjJFHPWkq-tTe38pdGBse1RqhWAAzs"
    },
    {
      id: 8,
      date: "2020-07-22",
      text: "Cheesing big.",
      photo: "https://drive.google.com/uc?export=download&id=1DGoURHjY_71WvoPJlnKKTsoOVtPUpF5i"
    },
  ]

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(journal))
}

