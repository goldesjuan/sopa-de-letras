# sopa-de-letras
Simple solution to solve a word puzzle.

## API (NOT YET IMPLEMENTED)
To start the API run
```
npm start
```

### [POST] /sopadeletras
Receives a matrix of N*M with a letter in each cell and a word to find all occurences of.
Returns the number of times the word is in the matrix. Searches in 8 posible directions.
+ Sample body:
  ```
  {
    word: 'oie'
    matrix: [
      [`e`, `a`, `e`, `a`, `e`],
      [`a`, `i`, `i`, `i`, `a`],
      [`e`, `i`, `o`, `i`, `e`],
      [`a`, `i`, `i`, `i`, `a`],
      [`e`, `a`, `e`, `a`, `e`]
    ]
  }
  
+ Sample response:
  ```
  { 
    count: 8
  }
  ```

## Tests
To view tests run:
```
npm test
```
