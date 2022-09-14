# Proctorme-Exam-Sheduler

:briefcase: This is the offical server/backend repository of proctorme ltd.

**Note:** pls format your code using prettier extension in your Vscode before creating PR. Push to **test** branch

`Run npm install`

`npm run start`

## Get a all Weights

### Request

`GET /`

    curl -i -H 'Accept: application/json' http://localhost:4000/

### Response

```
    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2

   {
  "message": "success",
  "data": [
    {
      "_id": "63209e4b8489bc1c4970aac8",
      "risk_score": 4,
      "nigerian_stocks": 29,
      "foriegn_stocks": 7,
      "tech_stocks": 5,
      "emerging_stocks": 6,
      "nigerian_bonds": 35,
      "foriegn_bonds": 6,
      "commodities": 12,
      "real_estate": 0,
      "tbills": 0,
      "alternative": 0
    },
    ....]
   }
```
