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
	return res.sendFile(path.join(__dirname, `photos/${req.params.fn}`))
})

// API: Get the nth to the mth journal entry
app.get("/api/entries/:n/:m", function(req, res) {
	fs.readFile('journal.csv', function(err, data) {
		if (err) throw err
		entries = data.toString().split("\n")
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
		req.files.photo.mv(path.join(__dirname, `/photos/${timestamp}.jpg`))
		hasPhoto = true
	}

	const data = fs.readFileSync('journal.csv')
	const fd = fs.openSync('journal.csv', 'w+')
	let entryText = `${timestamp}:::${hasPhoto}:::${req.body.text}\n`
	const insert = Buffer.alloc(entryText.length)
	insert.write(entryText)

	fs.writeSync(fd, insert, 0, insert.length, 0)
	fs.writeSync(fd, data, 0, data.length, insert.length)
	fs.close(fd, (err) => {
	  if (err) throw err;
	});

	res.redirect("/random")
})

// Start server
app.listen(1998)
