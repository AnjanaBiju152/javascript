let weatherData=[
    {district:'ernakulam',temperature: 32},
    {district:'kottayam',temperature: 40},
    {district:'palakkad',temperature: 45},
    {district:'thrissur',temperature: 25},
    {district:'ernakulam',temperature: 56},
    {district:'kottayam',temperature: 17},
    {district:'kannur',temperature: 32},
    {district:'kasargod',temperature: 50},
]
// print each district with highest temperature
let wd={}
for(let data of weatherData){
     let district=data.district
     let currentTemp = data.temperature
     if(district in wd){
        let oldTemp = wd[district];
        if(oldTemp>currentTemp){
            wd[district]=oldTemp
        }
        else{
            wd[district]=currentTemp
        }
    }
        else{
              wd[district]= currentTemp
        }
     }
     console.log(wd);
     

