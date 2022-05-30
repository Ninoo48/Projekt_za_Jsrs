import React from "react";
import Header from "./Header";
import Footer from "./Footer";
export default function Home({salji}){

    const click = () =>{
        var klik = document.getElementById("Popup1");
        klik.style.visibility="visible";
        klik.style.display="block";
      }
      const dblclick = () =>{
        var klik1 = document.getElementById("Popup1");
        klik1.style.visibility="invisible";
        klik1.style.display="none";
      }

      const click1 = () =>{
        var klik = document.getElementById("Popup2");
        klik.style.visibility="visible";
        klik.style.display="block";
      }
      const dblclick1 = () =>{
        var klik1 = document.getElementById("Popup2");
        klik1.style.visibility="invisible";
        klik1.style.display="none";
      }

      const click2 = () =>{
        var klik = document.getElementById("Popup3");
        klik.style.visibility="visible";
        klik.style.display="block";
      }
      const dblclick2 = () =>{
        var klik1 = document.getElementById("Popup3");
        klik1.style.visibility="invisible";
        klik1.style.display="none";
      }

      const click3 = () =>{
        var klik = document.getElementById("Popup4");
        klik.style.visibility="visible";
        klik.style.display="block";
      }
      const dblclick3 = () =>{
        var klik1 = document.getElementById("Popup4");
        klik1.style.visibility="invisible";
        klik1.style.display="none";
      }

      const click4 = () =>{
        var klik = document.getElementById("Popup5");
        klik.style.visibility="visible";
        klik.style.display="block";
      }
      const dblclick4 = () =>{
        var klik1 = document.getElementById("Popup5");
        klik1.style.visibility="invisible";
        klik1.style.display="none";
      }

      const click5 = () =>{
        var klik = document.getElementById("Popup6");
        klik.style.visibility="visible";
        klik.style.display="block";
      }
      const dblclick5 = () =>{
        var klik1 = document.getElementById("Popup6");
        klik1.style.visibility="invisible";
        klik1.style.display="none";
      }

      const click6 = () =>{
        var klik = document.getElementById("Popup7");
        klik.style.visibility="visible";
        klik.style.display="block";
      }
      const dblclick6 = () =>{
        var klik1 = document.getElementById("Popup7");
        klik1.style.visibility="invisible";
        klik1.style.display="none";
      }

      const click7 = () =>{
        var klik = document.getElementById("Popup8");
        klik.style.visibility="visible";
        klik.style.display="block";
      }
      const dblclick7 = () =>{
        var klik1 = document.getElementById("Popup8");
        klik1.style.visibility="invisible";
        klik1.style.display="none";
      }


    return(

    <React.Fragment>
        
            <Header></Header>

            <div id="Split_txt">Grad Split</div>

            <div id="Socials">
                <a href="https://www.instagram.com/visitsplit/">
                <div id="Instagram">
                    <img src="assets/Slike/InstagramLogo.jfif" alt="Instagramslika" id="Ig_pic"/>
                </div>
                </a>
                <a href="https://www.facebook.com/21000Split">
                <div id="Facebook">
                    <img src="assets/Slike/FacebookLogo.png" alt="Instagramslika" id="FB_pic"/>
                </div>
                </a>
                <a href="https://twitter.com/splitcityinfo">
                <div id="Twitter">
                    <img src="assets/Slike/TwitterLogo.png" alt="Instagramslika" id="Twitter_pic"/>
                </div>
                </a>
                <a href="https://www.tiktok.com/discover/split-croatia">
                <div id="TikTok">
                    <img src="assets/Slike/TikTokLogo.png" alt="Instagramslika" id="TikTok_pic"/>
                </div>
                </a>
            </div>

            
            

            <div id="Container_za_kartice">
            <div id="txtZaKartice">Upoznajte najljepsi grad u Dalmaciji</div>
        
            </div>
                <div class="container">
                <div class="images js-dropdown-items">
                    <div class="image js-dropdown-item">
                    <div class="avatar"><img src="assets/Slike/bastina2.jpg" alt="" title="The Cathedral of Saint Domnius" onClick={click} onDoubleClick={dblclick}/></div>
                    <div class="fullname">The Cathedral of Saint Domnius</div>
                    <div class="title">{salji.naziv}</div>
                    <div class="js-description" id="Popup1">
                        <p>The Cathedral of Saint Domnius (Croatian: Katedrala Svetog Duje), known locally as the Sveti Dujam or colloquially Sveti Duje, is the Catholic cathedral in Split, Croatia. The cathedral is the seat of the Archdiocese of Split-Makarska, headed by Archbishop Marin Barišić. The Cathedral of St. Domnius is a complex of a church, formed from an Imperial Roman mausoleum, with a bell tower; strictly the church is dedicated to the Virgin Mary, and the bell tower to Saint Domnius. Together they form the Cathedral of St. Domnius.

                            The Cathedral of Saint Domnius, consecrated at the turn of the 7th century AD, is regarded as the oldest Catholic cathedral in the world that remains in use in its original structure, without near-complete renovation at a later date (though the bell tower dates from the 12th century). The structure itself, built in AD 305 as the Mausoleum of Diocletian, is the second oldest structure used by any Christian Cathedral.</p>
                    </div>
                    </div>
                    <div class="image js-dropdown-item">
                    <div class="avatar"><img src="assets/Slike/bastina1.jpg" alt="" title="Diocletian's palace" onClick={click1} onDoubleClick={dblclick1}/></div>
                    <div class="fullname">Diocletian's palace</div>
                    <div class="title">{salji.naziv}</div>
                    <div class="js-description" id="Popup2">
                        <p>Diocletian's Palace (Croatian: Dioklecijanova palača, pronounced [diɔklɛt͡sijǎːnɔʋa pǎlat͡ʃa]) is an ancient palace built for the Roman emperor Diocletian at the turn of the fourth century AD, which today forms about half the old town of Split, Croatia. While it is referred to as a "palace" because of its intended use as the retirement residence of Diocletian, the term can be misleading as the structure is massive and more resembles a large fortress: about half of it was for Diocletian's imageal use, and the rest housed the military garrison.

                            The complex was built on a peninsula six kilometres southwest from Salona, the former capital of Dalmatia, one of the largest cities of the late empire with 60,000 people and the birthplace of Diocletian. The terrain around Salona slopes gently seaward and is typical karst, consisting of low limestone ridges running east to west with marl in the clefts between them. Today the remains of the palace are part of the historic core of Split, which in 1979 was listed by UNESCO as a World Heritage Site.</p>
                    </div>
                    </div>
                    <div class="image js-dropdown-item">
                    <div class="avatar"><img src="assets/Slike/bastina3.jpg" alt="" title="View of the Peristyle" onClick={click2} onDoubleClick={dblclick2}/></div>
                    <div class="fullname">View of the Peristyle</div>
                    <div class="title">{salji.naziv}</div>
                    <div class="js-description" id="Popup3">
                        <p>eristyle, as the central square of the Palace, intended for the Emperor Diocletian celebrated as the living son of Jupiter, finds its place among many temples. The Emperor would appear under the architrave of the central part of Protyron, and his subjects would approach him, kneeling down, kissing the hem of his scarlet cloak, or they would fall in front of him, their entire body to the ground.

                            The red colour of the granite columns emphasises the ceremonial function. Namely, ever since the Emperor Diocletian the colour purple became the imperial colour. With the construction of a new city square with the town hall (Pjaca) in the 13th/14th century, Peristyle became a religious centre. Today it boarders from the West with Palaces of Split noble families Grisogono, Cipci and Skočibušić, as they lean on its authentic columns and arches. With their Renaissance and Gothic architecture they themselves became monuments.</p>
                    </div>
                    </div>
                    <div class="image js-dropdown-item">
                    <div class="avatar"><img src="assets/Slike/split1.jpg" alt="" title="Split coast" onClick={click3} onDoubleClick={dblclick3}/></div>
                    <div class="fullname">Split coast</div>
                    <div class="title">{salji.naziv}</div>
                    <div class="js-description" id="Popup4">
                        <p>The coast south of Split is perhaps the most dramatic in the country, with some of the Adriatic’s finest pebble beaches sheltering beneath the papier-mâché heights of the karst mountains, all easily accessible on the frequent coastal bus service.

                            Some 25km south of Split, the historical town of Omiš makes the ideal base from which to visit the rugged Cetina gorge and the strange and wonderful lakes at Imotski just inland. North of the gorge lies the Marian pilgrimage centre of Sinj, while south from Omiš stretch the celebrated beaches of the Makarska Riviera – which runs from Brela to Gradac – dramatically perched at the base of the Biokovo mountains. Beyond Makarska, the Neretva delta comprises a fascinating landscape of canals and mandarin groves, and contains at least one major archaeological site in the shape of Roman Narona.</p>
                    </div>
                    </div>
                    
                    <div class="image js-dropdown-item">
                    <div class="avatar"><img src="assets/Slike/HNK_Split.JPG" alt="" title="HNK" onClick={click4} onDoubleClick={dblclick4}/></div>
                    <div class="fullname">HNK</div>
                    <div class="title">{salji.naziv}</div>
                    <div class="js-description" id="Popup5">
                        <p>HNK Split hosts around 300 performances every year, attended by a total audience of around 120,000. Some 20 to 40 opera, ballet and dramatic productions are staged per year in addition to many symphony concerts performed by the in-house orchestra. The theatre is billed as the "premier theatre house in Dalmatia" and "one of the biggest and oldest theatre houses in the Mediterranean".</p>
                    </div>
                    </div>
                    <div class="image js-dropdown-item">
                    <div class="avatar"><img src="assets/Slike/marjan3.jpg" alt="" title="Marjan forest park" onClick={click5} onDoubleClick={dblclick5}/></div>
                    <div class="fullname">Marjan forest park</div>
                    <div class="title">{salji.naziv}</div>
                    <div class="js-description" id="Popup6">
                        <p>Looming up to 178m over Split's western fringes, this nature reserve occupies a big space in Split's psyche. The views over the city and surrounding islands are extraordinary, and the shady paths provide a welcome reprieve from both the heat and the summertime tourist throngs. Trails pass through fragrant pine forests to scenic lookouts, a 16th-century Jewish cemetery, medieval chapels and cave dwellings once inhabited by Christian hermits. Climbers take to the cliffs near the end of the peninsula.

                            For an afternoon away from the city buzz, consider taking a long walk through the park and descending to Kašjuni beach to cool off before catching the bus back.</p>
                    </div>
                    </div>
                    <div class="image js-dropdown-item">
                    <div class="avatar"><img src="assets/Slike/Grgur.jpg" alt="" title="Gregory of Nin Sculpture" onClick={click6} onDoubleClick={dblclick6}/></div>
                    <div class="fullname">Gregory of Nin Sculpture</div>
                    <div class="title">{salji.naziv}</div>
                    <div class="js-description" id="Popup7">
                        <p>This huge bronze statue in Giardin Park by Ivan Meštrović is of Grgur Ninski. It is considered good luck to rub his toes. Gregory of Nin was very radical while the Bishop of Nin from 900 until 929. He instructed the churches in his diocese to celebrate the mass in the Croatian Glagolic language and not in Latin. He lost his position as a result. In 1570, the Dalmatic region of Croatia was allowed to celebrate the mass in their native tongue. Finally, in 1962 during the Second Vatican Council, the Catholic Church adopted the same policy and the Latin Mass changed forever. In the background is the St. Arnir campanile..</p>
                    </div>
                    </div>
                    <div class="image js-dropdown-item">
                    <div class="avatar"><img src="assets/Slike/stadion_poljud.jpg" alt="" title="Hajduk's Poljud Stadium" onClick={click7} onDoubleClick={dblclick7}/></div>
                    <div class="fullname">Hajduk's Poljud Stadium</div>
                    <div class="title">{salji.naziv}</div>
                    <div class="js-description" id="Popup8">
                        <p>Hrvatski Nogometni Klub (Croatian Football Club) Hajduk Split were founded in 1911, interestingly, not in Split, not even somewhere else in Croatia, but in a Prague tavern, in Czechia, by a group of students, originally from Dalmatia, and Split in particular.

                            “Hajduk” was how an outlaw was called in the Ottoman Empire, especially in the Balkans, a thief, a bandit, but also a freedom fighter, and someone who tried to protect Christians when being treated unfairly by the Ottoman authorities.</p>
                    </div>
                </div>
                </div>
            </div>  
            <Footer></Footer> 
    </React.Fragment>
    )
}