

'use strict';

var categoryActiveLinkRequest= function(id){};
var categoryActiveLink="https://www.trthaber.com/gundem_articles.rss";



var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {

        var text, parser, xmlDoc, title;
    var live = [
    {
        title: "",
        description: '',
        imgPath: '',
        link: '',
        pubDate: '',

    }
]
        var obj = {
            title: '',
            description: '',
            imgPath: '',
            link: '',
            pubDate: ''
        }
        parser = new DOMParser();
        xmlDoc = parser.parseFromString(this.response, "text/xml");
        var items = xmlDoc.getElementsByTagName("item");

        console.log(items[0]);
        // console.log(items[0].childNodes[7].firstChild.nodeValue);

        //console.log(items.length);

        obj.title = items[0].childNodes[5].firstChild.nodeValue;
        var metin = items[0].childNodes[7].firstChild.nodeValue;
        obj.description = metin.split('"/>');
        obj.imgPath = metin.split('"/>')[0].split('<img src="');
        obj.pubDate = items[0].childNodes[3].firstChild.nodeValue;

        var pubdate = (obj.pubDate.split(", ")[1].split(" "));
        obj.pubDate = pubdate[0] + " " + pubdate[1] + " " + pubdate[2];
        obj.link = items[0].childNodes[13].firstChild.nodeValue;

        var firsLiveNews,firsLiveNewsDescAndLink,firsLiveNewsImg,firsLiveNewsLink; 
        firsLiveNews = document.getElementById("ilkCanliHaber");
        firsLiveNewsDescAndLink = document.getElementById("ilkCanliHaberAciklama");
        firsLiveNewsImg =document.getElementById('İlkCanliHaberImg') ;  
  

        firsLiveNews.innerHTML = String(obj.title);
        firsLiveNewsDescAndLink.innerHTML = "<a href='"+obj.link+"'"+"class='link-dark'target='_blank' >"+String(obj.description[1])+"</a>";
        firsLiveNewsImg.innerHTML = "<img src=" + "'" + obj.imgPath[1] + "'" + "width='100%' height='100%'" + "'" + ">";



        for (var i = 1; i < 5; i++) {

            var edit = items[i].childNodes[7].firstChild.nodeValue;
            var edittarih = items[i].childNodes[3].firstChild.nodeValue;
            var editPubdate = edittarih.split(", ")[1].split(" ");
             

            var livediz = {
                title: items[i].childNodes[5].firstChild.nodeValue,
                description: edit.split('"/>'),
                imgPath: edit.split('"/>')[0].split('<img src="'),
                pubDate: editPubdate[0] + " " + editPubdate[1] + " " + editPubdate[2]+" "+ editPubdate[3],
                link: items[i].childNodes[13].firstChild.nodeValue

            }

            live.push(livediz);
        };

        //////////////////CARD BÖLÜMÜ/////////////
        var cards = [];
        var cardies1 = document.getElementById("cardies1");
        var cardies2 = document.getElementById("cardies2");
        var cardies3 = document.getElementById("cardies3");
        var cardies4 = document.getElementById("cardies4");
        for (var i = 1; i < 5; i++) {
            var cardItem = "<div class='card'> <img src=" + "'" + live[i].imgPath[1] + "'" + " width='50px' height='150px' class='card-img-top' alt='...'><div class='card-body'><a href='"+live[i].link+"'"+"class='card-text link-dark' target='_blank'>" + live[i].description[1] + "</a><p style='text-align: right;'> </br>" + live[i].pubDate + "</p> ";
            cards.push(cardItem);
        }

        cardies1.innerHTML = cards[0];  
        cardies2.innerHTML = cards[1];
        cardies3.innerHTML = cards[2];
        cardies4.innerHTML = cards[3];

        //////////////////CARD BÖLÜMÜ/////////////

       
        categoryActiveLinkRequest= function(id){
            switch (id) {
                
                case "Türkiye":
                    categoryActiveLink="https://www.trthaber.com/turkiye_articles.rss";
                    categoryChoose(categoryActiveLink);
                    break;
                case "Dünya":
                    categoryActiveLink ="https://www.trthaber.com/dunya_articles.rss";
                    categoryChoose(categoryActiveLink);
                    break;
                case "Ekonomi":
                    categoryActiveLink ="https://www.trthaber.com/ekonomi_articles.rss";
                    categoryChoose(categoryActiveLink);
                    break;
                case "Spor":
                    categoryActiveLink ="https://www.trthaber.com/spor_articles.rss";
                    categoryChoose(categoryActiveLink);
                    break;
                case "Eğitim":
                    categoryActiveLink ="https://www.trthaber.com/egitim_articles.rss";
                    categoryChoose(categoryActiveLink);
                    break;
                case "Bilim":
                    categoryActiveLink ="https://www.trthaber.com/bilim_teknoloji_articles.rss";
                    categoryChoose(categoryActiveLink);
                    break;
                    
                case "Kültür":
                    categoryActiveLink ="https://www.trthaber.com/kultur_sanat_articles.rss";
                    categoryChoose(categoryActiveLink);
                    break;       
            
                default:
                    categoryActiveLink="https://www.trthaber.com/gundem_articles.rss"
                    break;
            }
        }

        

     

        

    }
}



xhr.open('GET', categoryActiveLink);
var res = xhr.send();


function categoryChoose(categoryActiveLink){    
xhr.open('GET', categoryActiveLink);
var res = xhr.send();
}



