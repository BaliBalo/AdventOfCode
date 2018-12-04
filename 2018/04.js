// Part 1
$('*').innerText.trim().split`
`.sort().map(l=>(m=l.match(/:(\d+).+(#(\d+)|w|l)/))[3]?k=t[g=m[3]]=t[g]||{m:0}:m[2]=='w'?[...Array(m[1]-s)].map((e,i)=>(k[i+=s]=~~k[i]+1,k.m++)):s=+m[1],t={},k=0),(g=(K=Object.keys)(t).sort((a,b)=>t[b].m-t[a].m)[0])*K(k=t[g]).sort((a,b)=>k[b]-k[a])[1];

// Part 2
$('*').innerText.trim().split`
`.sort().map(l=>(m=l.match(/:(\d+).+(#(\d+)|w|l)/))[3]?k=t[g=m[3]]=t[g]||{m:0}:m[2]=='w'?[...Array(m[1]-s)].map((e,i)=>(k[i+=s]=~~k[i]+1)>k.m&&(k.m=k[i])):s=+m[1],t={},k=0),(g=(K=Object.keys)(t).sort((a,b)=>t[b].m-t[a].m)[0])*K(t[g]).find(k=>k!='m'&&t[g][k]==t[g].m);
