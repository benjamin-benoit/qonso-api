# qonso-api documentation

<br></br>

# Use API :

L'API est disponible depuis notre [site](https://qonso-app.herokuapp.com/api) avec la route /api

# Routes :

## Auth **[/api/auth](https://qonso-app.herokuapp.com/api/auth)** :

### **[/register](https://qonso-app.herokuapp.com/api/user/register)** (POST) :

Ajoute un User à la BDD

Send:
```json
{
    "nickname": "A",
    "email": "A@gmail.com",
    "password": "test",
    "password_confirmation": "test"
}
```
Success (201):
```json
{
    "data": {
        "user": {
            "id": 5,
            "nickname": "A",
            "email": "A@gmail.com",
            "password": "test",
            "updatedAt": "2019-06-24T11:20:47.099Z",
            "createdAt": "2019-06-24T11:20:47.099Z"
        }
    },
    "meta": {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwibmlja25hbWUiOiJBIiwiZW1haWwiOiJBQGdtYWlsLmNvbSIsImlhdCI6MTU2MTM3NTI2OSwiZXhwIjoxNTYxNDYxNjY5fQ.YoC5PeA_FYDcbzC9oPA750jgGuU9qTQt-by9Ow1mzW8"
    }
}
```
Error (400):
```json
{
    "err": "message d'éreur"
}
```

### **[/login](https://qonso-app.herokuapp.com/api/user/login)** (POST) :

Trouve le User dans la BDD et le retourne

Send:
```json
{
    "nickname": "A",
    "password": "test"
}
```

Success (201):
```json
{
    "data": {
        "user": {
            // user data
        }
    },
    "meta": {
        "token": // user token
    }
}
```
Error (400):
```json
{
    "err": "message d'éreur"
}
```

<br></br>
## <span style="color:red">Les routes suivantes ont besoin d'un token pour être exécuté (excepter les méthodes GET)</span>
<br></br>

## User **[/api/user](https://qonso-app.herokuapp.com/api/user)** :

### **[/show](https://qonso-app.herokuapp.com/api/user/show)** (GET) :

Retourne tous les Users de la BDD

Success (201):
```json
{
    "users": [
        {
            "id": 1,
            "nickname": "A",
            "email": "A@gmail.com",
            "password": "test",
            "createdAt": "2019-06-24T07:02:00.647Z",
            "updatedAt": "2019-06-24T07:02:00.647Z"
        },
        {
            "id": 2,
            "nickname": "B",
            "email": "B@gmail.com",
            "password": "test",
            "createdAt": "2019-06-24T08:04:52.256Z",
            "updatedAt": "2019-06-24T08:04:52.256Z"
        }
    ]
}
```

### **[/changePassword](https://qonso-app.herokuapp.com/api/user/changePassword)** (PUT) :

Change le mot de pass du User et le retourne

Send:
```json
{
    "id": 5,
    "password": "test",
    "newPassword": "test2",
    "newPassword_confirmation": "test2"
}
```
Success (201):
```json
{
    "data": {
        "user": {
            // user data
        }
    },
    "meta": {
        "token": // user token
    }
}
```
Error (400):
```json
{
    "err": "message d'éreur"
}
```

### **[/delete](https://qonso-app.herokuapp.com/api/user/delete)** (DELETE) :

supprime un User et le retourne

Send:
```json
{
    "id": 5
}
```
Success (201):
```json
{
    "data": {
        "user": {
            // user data
        }
    }
}
```
Error (400):
```json
{
    "err": "message d'éreur"
}
```

## Type **[/api/type](https://qonso-app.herokuapp.com/api/type)** :

### **[/show](https://qonso-app.herokuapp.com/api/type/show)** (GET) :

Retourne tous les Types de la BDD

Success (201):
```json
{
"types": [
        {
            "id": 1,
            "name": "test",
            "createdAt": "2019-06-25T07:37:32.164Z",
            "updatedAt": "2019-06-25T07:37:32.164Z"
        },
        {
            "id": 2,
            "name": "soap-alain",
            "createdAt": "2019-06-26T21:49:51.272Z",
            "updatedAt": "2019-06-26T21:49:51.272Z"
        }
    ]
}
```
Error (400):
```json
{
    "err": "message d'éreur"
}
```

## **[/create](https://qonso-app.herokuapp.com/api/type/create)** (POST) :

Ajoute un Type à la BDD

Send:
```json
{
    "name": "soap-alain"
}
```
Success (201):
```json
{
    "data": {
        "type": {
            "id": 2,
            "name": "soap-alain",
            "updatedAt": "2019-06-24T11:20:47.099Z",
            "createdAt": "2019-06-24T11:20:47.099Z"
        }
    }
}
```
Error (400):
```json
{
    "err": "message d'éreur"
}
```

### **[/delete](https://qonso-app.herokuapp.com/api/type/delete)** (DELETE) :

supprime un Type et le retourne

Send:
```json
{
    "id": 2
}
```
Success (201):
```json
{
    "data": {
        "type": {
            // type data
        }
    }
}
```
Error (400):
```json
{
    "err": "message d'éreur"
}
```

## product **[/api/product](https://qonso-app.herokuapp.com/api/product)** :

### **[/show](https://qonso-app.herokuapp.com/api/product/show)** (GET) :

Retourne tous les Products de la BDD

Success (201):
```json
{
"products": [
        {
            "id": 1,
            "name": "water",
            "barcode": 32682652,
            "createdAt": "2019-06-25T07:44:17.255Z",
            "updatedAt": "2019-06-25T07:44:17.255Z",
            "TypeId": 1
        }
    ]
}
```
Error (400):
```json
{
    "err": "message d'éreur"
}
```

## **[/create](https://qonso-app.herokuapp.com/api/product/create)** (POST) :

Ajoute un Product à la BDD

Send:
```json
{
    "name": "water",
    "barcode": 32682652,
    "typeId": 1
}
```
Success (201):
```json
{
    "data": {
        "product": {
            "id": 1,
            "name": "water",
            "barcode": 32682652,
            "createdAt": "2019-06-25T07:44:17.255Z",
            "updatedAt": "2019-06-25T07:44:17.255Z",
            "TypeId": 1
        }
    }
}
```
Error (400):
```json
{
    "err": "message d'éreur"
}
```

### **[/delete](https://qonso-app.herokuapp.com/api/product/delete)** (DELETE) :

supprime un Product et le retourne

Send:
```json
{
    "id": 1
}
```
Success (201):
```json
{
    "data": {
        "product": {
            // product data
        }
    }
}
```
Error (400):
```json
{
    "err": "message d'éreur"
}
```

## consume **[/api/consume](https://qonso-app.herokuapp.com/api/consume)** :

### **[/show](https://qonso-app.herokuapp.com/api/consume/show)** (GET) :

Retourne tous les consumes de la BDD

Success (201):
```json
{
"products": [
        {
            "id": 1,
            "key": "feyfg",
            "title": "test",
            "description": "testtesttest",
            "longitude": 2.363148,
            "latitude": 48.788703,
            "createdAt": "2019-06-25T07:58:36.186Z",
            "updatedAt": "2019-06-25T07:58:36.186Z",
            "UserId": 5,
            "ProductId": 1
        }
    ]
}
```
Error (400):
```json
{
    "err": "message d'éreur"
}
```

## **[/create](https://qonso-app.herokuapp.com/api/consume/create)** (POST) :

Ajoute un Consume à la BDD

Send:
```json
{
    "key": "feyfg",
    "title": "test",
    "description": "testtesttest",
    "longitude": 2.363148,
    "latitude": 48.788703,
    "UserId": 5,
    "ProductId": 1
}
```
Success (201):
```json
{
    "data": {
        "consume": {
            "id": 1,
            "key": "feyfg",
            "title": "test",
            "description": "testtesttest",
            "longitude": 2.363148,
            "latitude": 48.788703,
            "createdAt": "2019-06-25T07:58:36.186Z",
            "updatedAt": "2019-06-25T07:58:36.186Z",
            "UserId": 5,
            "ProductId": 1
        }
    }
}
```
Error (400):
```json
{
    "err": "message d'éreur"
}
```

### **[/delete](https://qonso-app.herokuapp.com/api/consume/delete)** (DELETE) :

supprime un Consume et le retourne

Send:
```json
{
    "id": 1
}
```
Success (201):
```json
{
    "data": {
        "consume": {
            // consume data
        }
    }
}
```
Error (400):
```json
{
    "err": "message d'éreur"
}
```

### **[/getAll](https://qonso-app.herokuapp.com/api/consume/getAll)** (GET) :

retourne tous les consumes de la BDD avec toutes les infos lier

Success (201):
```json
{
    "consumes": [
        {
            "id": 1,
            "key": "feyfg",
            "title": "test",
            "description": "testtesttest",
            "longitude": 2.363148,
            "latitude": 48.788703,
            "createdAt": "2019-06-25T07:58:36.186Z",
            "updatedAt": "2019-06-25T07:58:36.186Z",
            "UserId": 5,
            "ProductId": 1,
            "User": {
                "id": 5,
                "nickname": "A",
                "email": "A@gmail.com",
                "password": "test",
                "createdAt": "2019-06-24T11:20:47.099Z",
                "updatedAt": "2019-06-24T11:20:47.099Z"
            },
            "Product": {
                "id": 1,
                "name": "water",
                "barcode": 32682652,
                "createdAt": "2019-06-25T07:44:17.255Z",
                "updatedAt": "2019-06-25T07:44:17.255Z",
                "TypeId": 1,
                "Type": {
                    "id": 1,
                    "name": "test",
                    "createdAt": "2019-06-25T07:37:32.164Z",
                    "updatedAt": "2019-06-25T07:37:32.164Z"
                }
            }
        }
    ]
}
```

### **[/getByUserId/:userId](https://qonso-app.herokuapp.com/api/consume/getByUserId/:userId)** (GET) :

retourne tous les consumes de la BDD avec toutes les infos lier à un User

Success (201):
```json
{
    "consumes": [
        {
            "id": 1,
            "key": "feyfg",
            "title": "test",
            "description": "testtesttest",
            "longitude": 2.363148,
            "latitude": 48.788703,
            "createdAt": "2019-06-25T07:58:36.186Z",
            "updatedAt": "2019-06-25T07:58:36.186Z",
            "UserId": 5,
            "ProductId": 1,
            "User": {
                "id": 5,
                "nickname": "A",
                "email": "A@gmail.com",
                "password": "test",
                "createdAt": "2019-06-24T11:20:47.099Z",
                "updatedAt": "2019-06-24T11:20:47.099Z"
            },
            "Product": {
                "id": 1,
                "name": "water",
                "barcode": 32682652,
                "createdAt": "2019-06-25T07:44:17.255Z",
                "updatedAt": "2019-06-25T07:44:17.255Z",
                "TypeId": 1,
                "Type": {
                    "id": 1,
                    "name": "test",
                    "createdAt": "2019-06-25T07:37:32.164Z",
                    "updatedAt": "2019-06-25T07:37:32.164Z"
                }
            }
        }
    ]
}
```