function formatWords(words){

  if(words=== null||words.length===0){return '';}
  let filter = words.filter(x=>x);
  return (filter.length >=2) ? filter.join(', ').replace(/,(?=[^,]*$)/, ' and'):filter.join('');
} 