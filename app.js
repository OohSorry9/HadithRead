const API_KEY = '$2y$10$6faZIlr9Plp6tj50jL5kBOLUFGgujmENHecb7rUDaUyJZcW67rsm';
const url = `https://random-hadith-generator.vercel.app/bukhari/`
const na = document.getElementById('na')
const num = document.getElementById('number')

const sunnah = document.getElementById('sunnahbtn')

const hadithTextElement = document.getElementById('hadithText')
const reporter = document.getElementById('reporter')

const generate = () =>{
fetch(url)
.then(response => {
    response.json().then(data1 =>{
        
        let data = data1.data
        console.log(data)
        reporter.innerText = data.header;
        hadithTextElement.innerText = data.hadith_english;
        na.innerText = "Sahih"
        num.innerText = data.id


    })

})

}

function explore(){
    window.location.href = "https://sunnah.com/bukhari:" + num.innerText
}


