// Part 1
$('*').innerText.trim().split('\n').map(l=>s+=!l.split(' ').find((w,i,a)=>a.find((x,j)=>i^j&&w==x)),s=0),s

// Part 2
$('*').innerText.trim().split('\n').map(l=>s+=!l.split(' ').find((w,i,a)=>a.find((x,j)=>i^j&&[...w].sort()+''==[...x].sort()+'')),s=0),s
