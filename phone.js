var Phone=(function(opt, callback){
  let caches = [];
  
  let props = {multiple:true};
  let list = ["json"];
  let $$ = opt;
  let $this = window.navigator.contacts;
  let $a = $this.getProperties();
  let $b;
  if(!('contacts' in navigator && 'ContactsManager' in window)){
    return callback("", "contacts api not supportted in this browser")
  }else{
  if($$ != "json"){
    $$.forEach(item=>{
    $a.then(check=>{
     //check props
      if(!(check.includes(item))){
return callback("", "props in array does not exist in contact");        
      }else{
        list.push(item);
      }
      
      
    })
    });
  
  //done
  }  
    //callback(list)
    
    $b = $this.select(['name', "tel", 'email', "address", 'icon'], props);
    $b.then(res=>{
      
  callback(list)   

res.forEach(result=>{
  //fikter for specified
  caches.push(result)
  
    
  
})

    })
    
  }
  
  callback(caches)
})
//phonejs is a small js library that uses the contact api to access your contact