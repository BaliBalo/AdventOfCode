// Part 1
for(l=$('*').innerText.trim().split('\n'),p=i=0;l[p]!=l.a;i++)p+=l[p]++;i

// Part 2
for(l=$('*').innerText.trim().split('\n'),k=i=0;(v=l[p=k])!=l.a;i++)k+=+v,l[p]=v>2?--v:++v;i
