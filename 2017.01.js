// Part 1
[...$('*').innerText.trim()].reduce((s,d,i,a)=>s+d*(d==a[++i%a.length]),0)

// Part 2
[...$('*').innerText.trim()].reduce((s,d,i,a)=>s+d*(d==a[(i+(l=a.length)/2)%l]),0)
