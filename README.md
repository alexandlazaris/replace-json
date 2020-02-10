# replace-json


1. `npm install`
2. Edit `replace.js` to modify the JSON data to be replaced
3. `npm run main` - runs `replace.js` to replace JSON data & `format.js` to format JSON data

## Result
A JSON string belonging to a JSON file  is read in and parsed as an Object. This Object then replaces the contents of a JSON file with formatting.

### Before 
```
{
  "key": "value","test": "data",
  "hello": 
  "world"
} 
or
{
  "key": "This is a new value",
  "test": "data",
  
  "hello": "world",
  "parent": {
    "child": 1,
    "child2": 22}
}
```

### After
```
{
  "key": "value",
  "test": "data",
  "hello": "world"
}
and 
{
  "key": "This is a new value",
  "test": "data",
  "hello": "world",
  "parent": {
    "child": 1,
    "child2": 22
  }
}
```

## TODO
* Check if JSON key exists in file before overwriting
* Swap sync functions with async
* Replace multiple JSON key values at different levels
* Error handling (currently assumes all inputs are available)