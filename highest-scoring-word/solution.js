function high(x){
  let array = x.split(' ');
  let points = (array.map(function(word) {
    let points=0;
    for (i = 0; i < word.length; i++) {
      points+=word.charCodeAt(i)-97
      }
      return(points);}))
  const points1 = points.concat();
  points.sort( function(a, b) {
    return a-b
    });
  for(i=0;i<points.length;i++) {
    if(points[points.length - 1] === points1[i]) {
    return(array[i]);}
}
}