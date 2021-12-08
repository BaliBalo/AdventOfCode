// Part 1
(v=parseInt([...(a=$('*').innerText.trim().split('\n'))[0]].map((e,i)=>+(a.filter(e=>+e[i])[l='length']>a[l]/2)).join(''),2))*(~v&2**a[0][l]-1)

// Part 2
[...(a=$('*').innerText.trim().split('\n'))[0]].map((e,i)=>z=z.map((e,j)=>(m=+((e.filter(v=>+v[i])[l]>=e[l]/2)==!j),e[l]>1?e.filter(v=>v[i]==m):e)),z=[a,a],l='length'),(p=parseInt)(z[0],2)*p(z[1],2)