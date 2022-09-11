
# PhoneJS
a javascript library for accessing user contacts using contact api

## usage
download from github and refrence in html

```html
<script src="path/to/phone.js"></script>
```

### how to
```javascript
let api=new Phone("JSON", (data, err)=>{
if(err) throw(err);
console.log(data)
})

```
