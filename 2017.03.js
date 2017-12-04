// Part 1
for(i=$('[class^=p]').innerText,X=1,Y=x=y=k=n=0;--i;)x+=X,y+=Y,++k>n&&(n+=.5,k=0,t=X,X=Y,Y=-t);(_=Math.abs)(x)+_(y)

// Part 2
for(m=$('[class^=p]').innerText,v=Y=k=n=0,p=[0,0],w={},w[p]=X=1;v<m;){p[0]+=X,p[1]+=Y,++k>n&&(n+=.5,k=0,t=X,X=Y,Y=-t);for(j=9,v=0;j--;)v+=w[[p[0]+j%3-1,p[1]+(j/3|0)-1]]||0;w[p]=v}v
