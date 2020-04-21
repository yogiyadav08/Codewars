function add(n){
  var adtn = x=> add(n + x);
  
  adtn.valueOf =() => n;
  
  return adtn;
}
