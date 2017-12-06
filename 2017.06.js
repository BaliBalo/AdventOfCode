// Part 1
for(M=$('*').innerText.trim().split`\t`.map(e=>+e),l=M.length,a={},i=0;!a[M];i++)a[M]=i,p=M.indexOf(m=Math.max(...M)),M[p]=0,M=M.map((k,P)=>k+((P-p-1+l)%l<m%l)+m/l|0);i

// Part 2
for(M=$('*').innerText.trim().split`\t`.map(e=>+e),l=M.length,a={},i=0;!a[M];i++)a[M]=i,p=M.indexOf(m=Math.max(...M)),M[p]=0,M=M.map((k,P)=>k+((P-p-1+l)%l<m%l)+m/l|0);i-a[M]
