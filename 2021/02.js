// Part 1
$('*').innerText.trim().split('\n').map(e=>o[+(e[0]=='f')]+=(e[0]=='u'?-1:1)*e.split(' ')[1],o=[0,0]),o[0]*o[1]

// Part 2
$('*').innerText.trim().split('\n').map(e=>([[d],n]=e.split(' '),d)=='f'?(o[0]+=+n,o[1]+=n*o[2]):(o[2]+=d=='u'?-n:+n),o=[0,0,0]),o[0]*o[1]