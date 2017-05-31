#!/bin/bash
curl -X POST   http://localhost:3000/path/to/query=string   -H 'cache-control: no-cache'   -H 'content-type: application/json'   -H 'postman-token: 3b948cbd-ab26-a58b-ac69-97521c88bdb7'   -d '{"value":"1"}'

