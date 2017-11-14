import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="container">
          <div className="col-md-4">
          </div>
          <div className="col-md-8">
            <h3>Om idrottskoll</h3>
            <p>
            Idrottskoll grundades 2014, med idé om att alla skall kunna utvecka sin idrott med hjälp av video. Idag använder elitspelare och top klubbar dagligen video analysering för att förbättra deras prestationer. Både genom hitta vad man kan förbättra i sitt spel, men även plocka ut de positiva sekvenserna ur en matchen eller träning.
            <br /><br />
            Idrottskoll skapades för alla, med grund idén om att även kalle 5 år skall både ha råd och möjlighet att analysera sina match och träningar. Tänk om alla som sattsar på sin idrott kan ha tillgång till material som annars bara elitspelare har tillgång till. Tänk på hur mycket fortare man kan utvecklas.
            <br /><br />
            I systemet kan man på ett snabbt och enkelt sätt spela in sina matcher och träningar för att efteråt analysera dem. Man kan antingen streama matchen från hemsidan eller ladda ner den som en fil för att lägga in i externa analys program. Idrottskoll erbjuder även live streamning från utvalda event och turneringar.
            </p>
          </div>
        </div>
        <div className="order-video">
          <h5>Intresserad av att lägga en beställning? <a href="#">Tryck här</a></h5>
        </div>
      </div>
    );
  }
}

export default About;
