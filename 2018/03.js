// Part 1
a={},s=(o,b)=>+m[o]+b,$(z='*').innerText.trim().split`
`.map(l=>[...Array((m=l.match(/(\d+),(\d+): (\d+)x(\d+)/))[3]*m[4])].map((e,i)=>a[p=s(1,i%m[3])+z+s(2,~~(i/m[3]))]=~~a[p]+1));Object.keys(a).filter(k=>a[k]>1).length

// Part 2
I=(a,c,b,d)=>a>c?a<c+d:c<a+b,i=o=>I(+n[o],+m[o],+n[o+=2],+m[o]),(a=$('*').innerText.trim().split`
`).find(l=>(k=(m=l.match(r=/(\d+) @ (\d+),(\d+): (\d+)x(\d+)/))[1])&&!a.find(j=>j!=l&&i(2,n=j.match(r))&&i(3)));k
