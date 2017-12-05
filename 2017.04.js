// Part 1
$('*').innerText.trim().split('\n').map(l=>s+=!l.match(/\b(\S+)\b.+\b\1\b/),s=0),s

// Part 2
$('*').innerText.trim().replace(/\S+/g,m=>[...m].sort()+0).split('\n').map(l=>s+=!l.match(/(^|0)(.+0).*\2/),s=0),s
