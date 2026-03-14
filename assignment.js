let n=4;
for(let i=-n;i<=n;i++){
  let r="";
  for(let j=-n;j<=n;j++){
    if(Math.abs(i) + Math.abs(j)===n){
      r+="*";
    }else{
      r+=" ";
    }
  }
  console.log(r)
}
