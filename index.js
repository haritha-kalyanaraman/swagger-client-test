const express = require('express')
const Swagger = require('swagger-client')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/verify', (req, res) => {
  const swaggerUrl = req.body.swaggerUrl
  const authHeaders = req.body.authHeaders
  const operationId = req.body.operationId
  const requestBody = req.body.requestBody
  makeApiCall(swaggerUrl, authHeaders, operationId, requestBody)
    .then((response) => res.send(response))
    .catch((err) => res.status(err.status).send(err))

})

app.listen(9999, () => console.log('Example app listening on port 9999!'))

const makeApiCall = (swaggerUrl, authHeaders, operationId, requestBody) => {
  return Swagger(swaggerUrl, {
    		authorizations: authHeaders,
    	})
      .then((client) => {
    	   return client.execute({
        				operationId: operationId,
        				parameters: {
        					req: requestBody,
        				},
        			})
    		})
        .catch((err) => {
          return err
        })
}
