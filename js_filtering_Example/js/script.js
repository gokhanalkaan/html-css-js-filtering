
const inputBox = document.querySelector("#search"); //klavyeden girdigimiz degeri buraya atiliyor
const suggestionBox = document.querySelector(".suggest-list"); // suggestionlarin oldugu li elemanlari buranin icine olusturulacak
const bannerTextItem = document.querySelector(".banner-text-item");
const link=bannerTextItem.querySelector("a");
const searchIcon = document.querySelector(".search-img");
let word="";

searchIcon.addEventListener('click',e=>{
    if(word.length>0) 
       search();


});

inputBox.addEventListener('input',e=>{ //klavyenin basilmasi durumunda burasi tetiklenecek
    e.preventDefault(); 
    console.log("input alanindaki okunan deger:"+e.target.value);
    let keyboardValue=e.target.value;

    let filteredWords=[];//filtrelenmis elemanlar bu dizinin icinde tutulacak

   

   


    if(keyboardValue){ //bir deger girildiyse keyboardValue degeri true oluyor ve asagidaki islemler yapiliyor
        

       
        
      
        filteredWords=cities.filter((city)=>{  //burada girilen degerlerin baslangic sirasina gore filtreleme yapiliyor.filtreleme yaparken tum harfler kucuk harflere donusturuluyor

            return city.toLocaleLowerCase().startsWith(keyboardValue.toLocaleLowerCase());
        });
        filteredWords = filteredWords.map((data)=>{   //filtrelenen dizi map fonksiyonu kullanarak degistiriliyor ve icine html kodu yaziliyor ekranda gosterebilmek icin

            
            return data = `<li class="suggest-li">${data}</li>`;
            
        });
        
    }

    showSuggestions(filteredWords);//suggestion lari gosterebilmek icin bu metodu cagiriyoruz
   

   
    
    




});



function showSuggestions(list){
   const html= !list.length ? '' : list.join(''); //lste bos mu degil mi onun kontrolu yapiliyor bossa erkanda bir sey gosterilmiyor.Degilse ul icinde listeleniyor.
    suggestionBox.innerHTML = html;
     //olusturulan suggestion elemanlari bunun icine ataniyor
     allSuggestions=suggestionBox.querySelectorAll("li");
     for(let i = 0;i<allSuggestions.length;i++){
         allSuggestions[i].setAttribute("onclick","selectElement(this)"); //burada tum suggestionlara onclick fonksiyonu ataniyor ve tiklandiginda  selectElement metodu cagiriliyor ve tiklanan elemanida yolluyoruz
     }
   
    
    
    
}

function selectElement(value) // bu fonksiyonda secilenz li elementindeki deger search box in icine atiliyor
{
    inputBox.value=value.textContent;
    console.log("Secilen sehir:"+value.textContent);//deger searchboxa atandiktan sonra ekrandaki suggestionlar siliniyor
    
    suggestionBox.innerHTML="";
    word=value.textContent;
    inputBox.addEventListener("keyup",googleSearch); 

    
     
    
   

}

function search()  {
    
        

      
        try {

       
        haritalar = `https://www.google.com/maps/place/${word}`; //google mapsde sehiri aratma
        link.setAttribute("href", haritalar);
        var kontrol=link.click();
        console.log("enter tusu tetiklendi,google a basariyla gidildi. aratilan sehir:"+word);
            
        } catch (error) {

            console.log("enter tusu tetiklendi, Google a cikarken hata cikti. Error:"+error.textContent);


            
        }
        
    
}
 function googleSearch(e)  {
    if (e.keyCode === 13) { // bu fonksiyon enter tusuna basildigi zaman google a gidip secilen sehir hakkinda arama yapiyor.e.keyCode === 13 enter tusuna basildi mi onu kontrol ediyor
       // alert('Enter is pressed!');
        
            search();
        
    }
}



