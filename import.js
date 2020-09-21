document.querySelectorAll('blockquote').forEach(el => {
    var ines = el.innerHTML;
    el.innerHTML = "<img src='따옴표.png' style=\"width:30px;margin-right:10px\">"+ines+"<img src='따옴표2.png' style=\"width:30px;margin-left:10px\">";
})

document.querySelectorAll('zacpum').forEach(el => {
    var zac = el.innerHTML;
    el.innerHTML = "<iframe src='https://playentry.org/api/iframe/project/"+zac+"' style='width: 600px\;height: 360px\;border-radius: 8px\;border: 0\;margin:10px'>";
})

document.querySelectorAll('ttl').forEach(el => {
    var zac = el.innerHTML;
    el.innerHTML = "<div class='ttl'>"+zac+"</div>";
})

document.querySelectorAll('stmp').forEach(el => {
    var zac = el.innerHTML;
    el.innerHTML = "<div class='stmp'>"+zac+"</div>";
})

document.querySelectorAll('end').forEach(el => {
    var zac = el.innerHTML;
    el.innerHTML = "<div class='end'>"+zac+"</div>";
})

const locationform = document.querySelector("form")
const search = document.querySelector("input")
const msg = document.querySelector("#link")

locationform.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    msg.textContent = location
})

const miris = document.querySelector("miri")

locationform.addEventListener('submit', (e) => {
    e.preventDefault()
    var miri = document.querySelector('#link').innerHTML
    miris.innerHTML = "<iframe alt='' style='text-align: center;' src='"+miri+"'>";
    console.log(miri)
    msg.textContent = miri+"의 미리보기"
})
