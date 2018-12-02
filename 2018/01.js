// Part 1
$('*').innerText.trim().split`
`.reduce((v,n)=>+v+ +n)

// Part 2
for(a=$('*').innerText.trim().split`
`,l={0:1},i=f=0;!l[f+=+a[i++%a.length]];)l[f]=1;f
