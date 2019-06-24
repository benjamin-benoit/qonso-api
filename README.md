# qonso-api documentation

<br></br>

# Use API :

L'API est disponible depuis notre [site](https://qonso-app.herokuapp.com/api) avec la route /api

# Routes :

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