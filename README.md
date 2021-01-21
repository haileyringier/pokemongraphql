# PokeApi

Using the GraphQL PokeApi, this app renders a list of all the pokemon included in the api and features indiviual pokemon details pages. 

## Setup
This app was created with React, React Bootstrap and GraphQL Apollo Client. To check it out, fork and clone this repo, then run ```npm install``` and ```npm start``` to open the app.

## Code Examples

```javascript
    const GET_POKEMON_DETAILS = gql`
    query pokemon($name: String!){
        pokemon(name: $name) {
            id
            name
            sprites{
                front_default
            }
            moves {
                move{
                    name
                }
            }
            types {
                type {
                    name
                }
            }
        }
    }
    `

    const gqlVariables = {
        name: name
    }

    const { loading, error, data } = useQuery(GET_POKEMON_DETAILS, {
        variables: gqlVariables
    })

    if(loading) return <p>Loading..</p>
    if (error) return <p>Error</p>
```

## Contact
Created by [Hailey Ringier](https://www.linkedin.com/in/hailey-ringier/) 


