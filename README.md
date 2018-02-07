### Sample Request

```curl -X POST \
  http://localhost:3000/ \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: c5203297-c0c9-ef81-a4b0-a6d6ee3cbb45' \
  -d '{
	"swaggerUrl": "http://petstore.swagger.io/",
	"authHeaders": {"api-key": "Bearer tokenValue"},
	"operationId": "operationId",
	"requestBody": {}
}'
