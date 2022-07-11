Run the app using "npm start" or "npm run start:dev".
Excute the GraphQL playground on "http://localhost:3000/".

### GraphQL Query

```
query {
  cats {
    id
    name
    age
  }
}

query {
  cat(id:1) {
    id
    name
    age
  }
}
```

```
mutation{
   createCat(createCatInput: {
    name: "Beer",
    age: 1
  }) {
    id
    name
    age
  }
}
```

```
subscription{
  catCreated{
    id
    name
    age
  }
}
```
