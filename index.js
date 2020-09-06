var express = require('express')
var path = require('path')
var fs = require('fs')
var fileUpload = require('express-fileupload')

// Init app
var app = express()

// Allow file uploads
app.use(fileUpload())

// Serve static site
app.use(express.static(path.join(__dirname, "public"), { index: "new.html", extensions: ['html'] }))

// API: Get a single photo
app.get("/api/photos/:fn", function(req, res) {
  return res.sendFile(path.join(__dirname, `db/photos/${req.params.fn}`))
})

// API: Get all journal entries
app.get("/api/journal", function(req, res) {
  let entries = JSON.parse(fs.readFileSync("db/journal.json", {encoding: "utf8"}))

  res.json(entries)
})

// API: Get the nth to the mth journal entry
app.get("/api/entries/:n/:m", function(req, res) {
  fs.readFile('db/journal.json', function(err, data) {
    if (err) throw err
    entries = JSON.parse(data).entries

    let n = parseInt(req.params.n)
    let m = parseInt(req.params.m)

    if (n <= m && m < entries.length) {
      return res.send(entries.slice(n, m+1))
    } else {
      res.send(entries.slice(n))
    }
  })
})

// API: Create new post
app.post("/api/entries",  function(req, res) {
  let timestamp = Date.now()
  let hasPhoto = false

  if (req.files && Object.keys(req.files).length > 0) {
    req.files.photo.mv(path.join(__dirname, `/db/photos/${timestamp}.jpg`))
    hasPhoto = true
  }

  let entryText = req.body.text

  let entryObj = {
    timestamp: timestamp,
    hasPhoto: hasPhoto,
    entryText: entryText
  }

  let previousJournal = JSON.parse(fs.readFileSync('db/journal.json', {encoding: 'utf8'}))

  previousJournal.entries.push(entryObj)

  let newJournal = JSON.stringify(previousJournal)

  fs.writeFile(`db/journal.json`, newJournal, function(err) {if (err) throw err});

  res.redirect("/journal")
})

// Start server
app.listen(1998, function(err) {
  if (err) throw err

  if (!fs.existsSync(path.join(__dirname, "db/"))) {
    fs.mkdir(path.join(__dirname, "db/"), function(err) {if (err) throw err})
  }

  if (!fs.existsSync(path.join(__dirname, "db/photos/"))) {
    fs.mkdir(path.join(__dirname, "db/photos/"), function(err) {if (err) throw err})
  }

  if (!fs.existsSync(path.join(__dirname, "/db/journal.json"))) {
    fs.closeSync(fs.openSync(path.join(__dirname, "/db/journal.json"), "w"))
    fs.appendFile("db/journal.json", "{\"entries\": []}", function (err) {if (err) throw err})
  }
})
