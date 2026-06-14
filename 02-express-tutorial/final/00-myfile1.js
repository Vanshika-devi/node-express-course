const http=require('http');
const {readFileSync}=require('fs');
//get all files
const homepage=readFileSync('./index.html')


const server=http.createServer((req,res)=>{
// console.log(req.method)
  const url = req.url
  // home page
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' })//status code first argumentb second content type
    res.write(homepage)
    res.end()
  }
  // about page
  else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>about page</h1>')
    res.end()
  }
  // 404
  else {
    res.writeHead(404, { 'content-type': 'text/html' })// text/plain will return only plain text at the brower
    res.write('<h1>page not found</h1>')
    res.end()
  }//mozerlla for http
})
server.listen(5000)