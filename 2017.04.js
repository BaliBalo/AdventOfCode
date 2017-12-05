// Part 1
$('*').innerText.trim().split('\n').map(l=>s+=!l.match(/\b(\S+)\b.+\b\1\b/),s=0),s

// Part 2
$('*').innerText.trim().split('\n').map(l=>s+=!l.split(' ').find((w,i,a)=>a.indexOf(a[i]=[...w].sort()+0)<i),s=0),s
