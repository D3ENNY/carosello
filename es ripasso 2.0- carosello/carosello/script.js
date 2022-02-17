  /*variabili globali*/ 
  var count=0, obj, img=document.createElement('img'), desc=document.createElement('h3')
  /*fine variabili globali*/ 

window.addEventListener('load', () => {
    var request = new XMLHttpRequest()
  
    request.open("GET", "data.json", true)
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            obj = JSON.parse(this.responseText)

            setImage()
            createRadio()
        } else {
            console.log("Error: " + request.status)
        }
    }

    request.send()
  })

  back.addEventListener("click", backImage = () =>{
    let tmp=count
    if(count>0)
        count--
    else
    count = obj.length-1

    changeImage()
    setRadio(tmp)
})

forewards.addEventListener("click", nextImage = () =>{
  let tmp=count
    if(count<obj.length-1)
    count++
    else
    count=0

    changeImage()
    setRadio(tmp)
})

  createRadio = () => {
    for(i in obj){
      let inp= document.createElement("input")
      inp.setAttribute("type","radio")
      inp.setAttribute('disabled','true')
      inp.checked = false
      point.appendChild(inp)
    }
    document.getElementsByTagName('input')[0].checked=true
  }
  
  setImage = () => {
    img.src=obj[count].image
    
    desc.innerText=obj[count].descrizione
    image.appendChild(img)
    description.appendChild(desc)
  }

  changeImage = () => {
    img.src=obj[count].image
    desc.innerText=obj[count].descrizione
    image.replaceChild(img, img)
    description.replaceChild(desc, desc)
  }

  setRadio = (tmp) => {
   let radio =  document.getElementsByTagName('input')

   if(radio[count].type == "radio"){

    if(count!=0&&count!=obj.length-1){
      if(count>tmp)
        radio[count-1].checked=false
      else
          radio[count+1].checked=false
    }else if(count==obj.length-1){
      radio[0].checked=false
      radio[obj.length-2].checked=false
    }else{
      radio[obj.length-1].checked=false
      radio[1].checked=false
    }

    radio[count].checked=true
  }

  }