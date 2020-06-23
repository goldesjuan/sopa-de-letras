# sopa-de-letras
Simple solution to solve a word puzzle.

To start the server run
```
npm start
```

## Website
Shows a super simple website with a button that makes a hardcoded request to the "solucion" api and then shows the result

+ URL:

```
localhost:3000/sopadeletras
```

## API
### [POST] /sopadeletras/solucion
receives an input stream with a series of cases, each case being two numbers (n & m) between 1 and 100 followed by n rows with m letters each and a word to find all occurences of.
Returns an array with the number of occurrences of the given word for each case.
The search is case insensitive and in 8 posible directions.

+ Sample body:
  ```
  {
    word: 'oie'
    stream: '3 3\nOIE\nIIX\nEXE\n\n1 10\nEIOIEIOEIO\n\n5 5\nEAEAE\nAIIIA\nEIOIE\nAIIIA\nEAEAE\n'
  }

+ Sample response:
  ```
  {
    result:[3,4,8]
  }
  ```

## Tests
To view tests run:
```
npm test
```
