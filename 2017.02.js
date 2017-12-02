// Part 1
$('*').innerText.trim().split('\n').reduce((s,l)=>s+Math.max(...(a=l.split('\t')))-Math.min(...a),0)

// Part 2
$('*').innerText.trim().split('\n').reduce((s,l)=>(a=l.split(/\s+/)).find(x=>a.find(y=>x!=y&&~~(n=x/y)==n))&&s+n,0)
