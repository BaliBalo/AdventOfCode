// Part 1
for(i=[...$('*').innerText.trim()],d='',p=i.length;p-->1;)(l=i[p])==(n=i[p-1])||!l||l[k='toLowerCase']()!=n[k]()?0:i.splice(p-1,2);i.length

// Part 2
Math.min(...[...Array(26)].map(v=>{for(i=[...$('*').innerText.trim()],v=(++z).toString(36),d='',p=i.length;p--;)(L=(l=i[p]+'')[k='toLowerCase']())==v?i.splice(p++,1):!p||l==(n=i[p-1])||L!=n[k]()?0:i.splice(p-1,2);return i.length},z=9))
