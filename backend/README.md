### Backend APIs

- Farmer registration API:--  This API is for simple user registration, so any visitors can register through this API on our website. 

  ```markdown
  url =  http://localhost:5000/api/signup/farmer
  ```

  ```markdown
  headers = {
  	"Content-Type":"application/json"
  }
  ```

  ```markdown
  body = {
  	"email":"rayahabittu242@gmail.com",
  	"name":"Bittu Ray",
  	"password":"1234567890"
  }
  ```

  ```markdown
  Output :  {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWU1MGU2YzkxOGU5ZjkzMDZjNzFiMWRhIn0sImlhdCI6MTU4MjM2MDI2NSwiZXhwIjoxNTg1OTYwMjY1fQ.DcaiJKMeL_EK80UplFzLlLUDSedzCq1909NMUGgnnxI"
  }
  
  ```
  
- Company Registration API :-- Here company can register themselves to use our Delivery API

  ```
  url  =  http://localhost:5000/api/signup/company
  ```

  ```markdown
  headers = {
  	"Content-Type":"application/json"
  }
  ```

  ```markdown
  body = {
  	"email":"rayahabittu242@gmail.com",
  	"name":"Bittu Ray",
  	"password":"1234567890",
  	"role":"admin"
  }
  ```

  ```markdown
  Output :--   Output :  {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWU1MGU2YzkxOGU5ZjkzMDZjNzFiMWRhIn0sImlhdCI6MTU4MjM2MDI2NSwiZXhwIjoxNTg1OTYwMjY1fQ.DcaiJKMeL_EK80UplFzLlLUDSedzCq1909NMUGgnnxI"
  }
  
  ```


- Farmer Login API :-- This API is for farmer login

  ```
  url = http://localhost:5000/api/login/farmer
  ```

  ```markdown
  header = {
  	"Content-Type":"application/json"
  }
  ```

  ```markdown
  body = {
  	"email":"rayg3242@gmail.com",
  	"password":"1234567890"
  }
  ```

  ```markdown
  Output =  {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWU1MzZlZDI5MGY5ZmYwNjU5ZWU4ODMzIiwibmFtZSI6IlJvaGl0IiwiZW1haWwiOiJyYXlnMzI0MkBnbWFpbC5jb20iLCJyb2xlIjoiY29tcGFueSIsImFwaV9rZXkiOiIkMmEkMTUkbC93cWdyZUlhbFBIcmRIYzBzSkRtT0NrUVBvOGNJTVJpVlI5dDIwQVp0ZGJRVmIvM2dJQ3kifSwiaWF0IjoxNTgyNTI4MTQxLCJleHAiOjE1ODYxMjgxNDF9.1sFye9vt0RszGYeoOruXzZYyjlX-7dHPzYyXq8VU2Vw"
  }
  ```

- Company Login API :-- This API is for company Login

  ```
  url = http://localhost:5000/api/login/company
  ```

  ```markdown
  header = {
  	"Content-Type":"application/json"
  }
  ```

  ```markdown
  body = {
  	"email":"rayg3242@gmail.com",
  	"password":"1234567890"
  }
  ```

  ```markdown
  Output =  {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWU1MzZlZDI5MGY5ZmYwNjU5ZWU4ODMzIiwibmFtZSI6IlJvaGl0IiwiZW1haWwiOiJyYXlnMzI0MkBnbWFpbC5jb20iLCJyb2xlIjoiY29tcGFueSIsImFwaV9rZXkiOiIkMmEkMTUkbC93cWdyZUlhbFBIcmRIYzBzSkRtT0NrUVBvOGNJTVJpVlI5dDIwQVp0ZGJRVmIvM2dJQ3kifSwiaWF0IjoxNTgyNTI4MTQxLCJleHAiOjE1ODYxMjgxNDF9.1sFye9vt0RszGYeoOruXzZYyjlX-7dHPzYyXq8VU2Vw"
  }
  ```

  