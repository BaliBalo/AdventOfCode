// Part 1
(i=$('*').innerText.trim().split`
`).filter((fn=n=>l=>[...l].find(c=>l.replace(new RegExp('[^'+c+']','g'),'').length==n))(2)).length*i.filter(fn(3)).length

// Part 2
(i=$('*').innerText.trim().split`
`).find(a=>i.find(b=>a!=b&&(r=[...a].filter((l,i)=>l==b[i])).length==a.length-1)),r.join('')
