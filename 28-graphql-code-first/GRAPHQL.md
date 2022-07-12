Run the app using "npm start" or "npm run start:dev".
Excute the GraphQL playground on "http://localhost:3000/".

### GraphQL Query

```
query{
  recipes(skip: 0, take: 10) {
    id
    description
    creationDate
    ingredient
  }
}

query{
  recipe(id: "1") {
    id
    description
    creationDate
    ingredient
  }
}
```

```
mutation{
   removeRecipe(id: "1")
}

mutation{
   addRecipe(newRecipeData: {
    title:"#002"
    description: "hello"
    ingredient: []
  }) {
    id
    description
    ingredient
    creationDate
  }
}
```

```
subscription{
  recipeAdded{
    id
    description
    ingredient
    creationDate
  }
}
```
