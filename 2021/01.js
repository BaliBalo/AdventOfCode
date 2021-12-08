// Part 1
$('*').innerText.trim().split('\n').filter(e=>p<(p=+e),p=1/0).length

// Part 2
(a=$('*').innerText.trim().split('\n')).slice(3).filter((e,i)=>s<(s=+e+s-a[i]),s=+a[0]+ +a[1]+ +a[2]).length