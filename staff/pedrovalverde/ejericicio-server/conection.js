var http = require('http')

const [port, from, message] = process.argv.slice(2)

const url = "http://192.168.0.42:" + port + "/?from=" + from + "&message='" + message + "'"

http.get(url, (res) => {
  let content = ''
  res.on("error", console.error)
  res.setEncoding('utf8')
  //res.on("data", (data) => { content += data })
  res.on("data", chunk => { content += chunk })
  res.on("end", () => { console.log(content) })
}).on('error', (e) => {
  console.error(`Hay error: ${e.message}`);
});