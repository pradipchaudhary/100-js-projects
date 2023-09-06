## You can upload strings and download translations using our API in a few simple steps

1. Visit the [Localazy Developer Portal](https://localazy.com/console/tokens) and create a new token for your project.

2. Call /projects endpoint and retrieve your project id.

```javascript

curl --request GET \
 --url 'https://api.localazy.com/projects' \
 --header 'Authorization: Bearer <project-token>'

```

3. With your project id, you can import content as following:

```javascript
curl --request POST \
  --url 'https://api.localazy.com/projects/<project-id>/import' \
  --header 'Authorization: Bearer <project-token>' \
  --header 'Content-Type: application/json' \
  --data '{
  "files": [
    {
      "name": "file.json",
      "content": {
        "en": {
          "hello_world": "Hello World!"
        },
        "fr": {
          "hello_world": "Salut tout le monde!"
        }
      }
    }
  ]
}'
```
