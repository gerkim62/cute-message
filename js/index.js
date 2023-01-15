const quotes = ['The universe is super blessed to have you in it!',  "You are the sunshine that brightens my day.",
  "You are the reason I wake up in the morning.",
  "You are my rock, my shelter and my everything.",
  "With you, every day feels like a fairytale.",
  "You are the missing piece that completes me.",
  "You make my heart skip a beat.",
  "You are my home, my safe place.",
  "You are my everything and more.",
  "You light up my world like nobody else.",
  "I am so grateful to have you in my life.",
  "You are my best friend, my lover, and my soulmate.",
  "I never knew love could be this amazing, until I met you.",
  "You make my life a beautiful journey.",
  "I am forever yours.",
  "I love you more than words can express."]

//let messages = []


const events = ['Day',   "Birthday",
  "Anniversary",
  "New Year",
  "Christmas",
  "Independence Day",
  "Mashujaa Day",
  "Labour Day",
  "Madaraka Day",
  "Jamhuri Day",
  "Maulid",
  "Good Friday",
  "Easter Monday",
  "Idd-Ul-Fitr",
  "Idd-Ul-Adha",
  "Wedding Day",
  "Graduation Day",
  "Promotion Day",
  "Retirement Day",
  "Housewarming Day",
  "Baby Shower",
  "Engagement Day",
  "Baptism Day",
  "First Communion Day",
  "Confirmation Day",
  "Bar Mitzvah",
      "Mother's Day",
      "Father's Day",
      "Thanksgiving",
      "Easter",
      "Halloween",
      "Hanukkah",
      "Kwanzaa",
      "Ramadan",
      "Diwali",
      "Chinese New Year",
      "Children's Day",
      "Women's Day",
      "Men's Day",
      "Veteran's Day",
      "Memorial Day",
      "Flag Day",
      "Patriot Day",
      "National Day",
      "International Women's Day",
      "International Men's Day",
      "Global Entrepreneurship Day",
      "World Aids Day",
      "World Environment Day",
      "World Cancer Day",
      "World Health Day",  "Teacher's Day",
        "Doctor's Day",
        "Nurse's Day",
        "Police Day",
        "Firefighters Day",
        "Armed Forces Day",
        "World Water Day",
        "World Food Day",
        "World Peace Day",
        "World Wildlife Day",
        "World Ocean Day",
        "World Animal Day",
        "World Mental Health Day",
        "World Tourism Day",
        "World Day of Social Justice",
        "World Youth Skills Day",
        "World Population Day",
        "World Day Against Child Labor",
        "World Day of Remembrance for Road Traffic Victims",
        "World Day for Safety and Health at Work",
        "World Press Freedom Day",
        "World Book and Copyright Day",
        "World Intellectual Property Day",
        "World Meteorological Day",
        "World Telecommunication and Information Society Day"].sort()

function extractUrlParams(url = window.location.href) {
  const urlParams = new URLSearchParams(new URL(url).search);
  let extractedParams = {};
  for (const [key, value] of urlParams.entries()) {
    extractedParams[key] = value;
  }
  //console.log(extractedParams)
  return extractedParams;
}

function showLoveCard(){
  document.getElementById('loader').classList.add('hidden');
}

addEventListener('load', showLoveCard)

document.addEventListener('DOMContentLoaded', ()=>{
  const urlParams = extractUrlParams()
  
  const sender = urlParams['from'] || 'Your Friend'
  const receiver = urlParams['to'] || 'You'
  const eventIndex = urlParams['ei'] || NaN
  const event = events[eventIndex]||'Day!'
  
  const quoteIndex =  Number(urlParams['qi'])||0
  console.log({quoteIndex})
  const quote = quotes[quoteIndex]
  console.log(quote)
  document.getElementById('sender-name').textContent = sender
  document.getElementById('receiver-name').textContent = receiver
  document.getElementById('quote').textContent = quote
  document.getElementById('event').textContent = event
  
  
  
})

/*
 function detectCurrentOrUpcomingEvent() {
    navigator.geolocation.getCurrentPosition(function(position) {
        const currentDate = new Date();
        const url = `https://calendarific.com/api/v2/holidays?api_key=63663969022be1178aac65d9655b2d1c82dfe68d&country=${position.countryCode}&year=${currentDate.getFullYear()}&month=${currentDate.getMonth() + 1}`;
        console.log(url)
        fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log({data})
            for (let i = 0; i < data.response.holidays.length; i++) {
                const holiday = data.response.holidays[i];
                if (holiday.date.datetime >= currentDate) {
                    return holiday.name;
                }
            }
        })
        .catch(error => console.log(error));
    });
}

//detectCurrentOrUpcomingEvent()

const url = `https://calendarific.com/api/v2/holidays?api_key=63663969022be1178aac65d9655b2d1c82dfe68d&country=${position.countryCode}&year=${currentDate.getFullYear()}&month=${currentDate.getMonth() + 1}`;
console.log(url)*/

//console.log(extractUrlParams('http://localhost:7700?from=Hg&to=&ei=3&qi=4'))


