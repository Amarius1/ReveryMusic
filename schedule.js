//this is the schedule which you will need to change

var schedule = new Vue({
  el: '#schedule',
  data: {
    schedule1: [
      {
          title: "PremierSport TV 1 UK HD",
          link: "http://timesports.cc/ch15.php",
        },
     
    ],
    schedule2: [
      {
          title: "PremierSport TV 1 UK HD",
          link: "http://timesports.cc/ch15.php",
        },
     
    ],
	schedule3: [
      {
          title: "PremierSport TV 1 UK HD",
          link: "http://timesports.cc/ch15.php",
        },
     
    ],
  }
})

//these are the top links


var top_buttons = new Vue({
  el: '#top_buttons',
  data: {
    buttons1: [
      {
        title: "BT Sport 1 HD",
        link: "http://timesports.cc/ch31.html",
        }, 
        {
        title: "BT Sport 2 HD",
        link: "http://timesports.cc/ch32.html",
        },
        {
            title: "BT Sport 3 HD",
            link: "http://timesports.cc/ch33.html",
        },
        {
            title: "BT Sport ESPN HD",
            link: "http://timesports.cc/ch34.html",
        },
        {
            title: "Sky Sports Football HD",
            link: "http://timesports.cc/ch35.html",
        },
        {
            title: "Sky Sports Arena HD",
            link: "http://timesports.cc/ch36.html",
        },
        {
            title: "Sky Sports Action HD",
            link: "http://timesports.cc/ch37.html",
        },
        {
            title: "Sky Sports Formula 1 HD",
            link: "http://timesports.cc/ch38.html",
        },
        {
            title: "Sky Sports Golf HD",
            link: "http://timesports.cc/ch70.html",
        },
        {
            title: "Sky Sports Main Cricket HD",
            link: "http://timesports.cc/ch24.html",
        },
        {
            title: "Fox Sports 1 USA HD",
            link: "http://timesports.cc/ch39.html",
        },
		 {
            title: "Tennis Channel USA HD",
            link: "http://timesports.cc/ch39.html",
        },
		 {
            title: "Eurosport 1 UK HD",
            link: "http://timesports.cc/ch40.html",
        },
		 {
            title: "Eurosport 2 UK HD",
            link: "http://timesports.cc/ch41.html",
        },
		 {
            title: "NBCSN USA HD",
            link: "http://timesports.cc/ch43.html",
        },
		 {
            title: "ESPN USA HD",
            link: "http://timesports.cc/ch44.html",
        },
		 {
            title: "ESPN 2 USA HD",
            link: "http://timesports.cc/ch45.html",
        },
		 {
            title: "Sport TV 1 Portugal HD",
            link: "http://timesports.cc/ch49.html",
        },
		{
            title: "Sport TV 2 Portugal HD",
            link: "http://timesports.cc/ch74.html",
        },
		{
            title: "ESPN Brasil HD",
            link: "http://timesports.cc/ch81.html",
        },
		{
            title: "ESPN Brasil HD",
            link: "http://timesports.cc/ch81.html",
        },
		{
            title: "ESPN No Brasil HD",
            link: "http://timesports.cc/ch82.html",
        },
		{
            title: "ESPN 2 Brasil HD",
            link: "http://timesports.cc/ch83.html",
        },
		{
            title: "ESPN Extra Brasil HD",
            link: "http://timesports.cc/ch84.html",
        },
		{
            title: "Fox Sports Brasil HD",
            link: "http://timesports.cc/ch85.html",
        },
		{
            title: "Fox Sports 2 Brasil HD",
            link: "http://timesports.cc/ch86.html",
        },
		{
            title: "Fox Sports Premium Brasil HD",
            link: "http://timesports.cc/ch87.html",
        },
		{
            title: "Premiere 1 Brasil HD",
            link: "http://timesports.cc/ch88.html",
        },
		{
            title: "Combate Brasil HD",
            link: "http://timesports.cc/ch89.html",
        },
		{
            title: "ABC USA HD",
            link: "http://timesports.cc/ch51.html",
        },
		{
            title: "CBS USA HD",
            link: "http://timesports.cc/ch52.html",
        },
		{
            title: "NBC USA HD",
            link: "http://timesports.cc/ch53.html",
        },
		{
            title: "FOX USA HD",
            link: "http://timesports.cc/ch54.html",
        },
		{
            title: "Beinsport 1 France HD",
            link: "http://timesports.cc/beinsport1fr.php",
        },
		{
            title: "Beinsport 2 France HD",
            link: "http://timesports.cc/beinsport2fr.php",
        },
		{
            title: "Beinsport 3 France HD",
            link: "http://timesports.cc/3.html",
        },
		{
            title: "RMC Sport 1 France HD",
            link: "http://timesports.cc/4.html",
        },
		{
            title: "RMC Sport 2 France HD",
            link: "http://timesports.cc/9.html",
        },
		{
            title: "Canal Plus France HD",
            link: "http://timesports.cc/5.html",
        },
		{
            title: "Canal Plus Sport France HD",
            link: "http://timesports.cc/6.html",
        },
		{
            title: "Eurosport 1 France HD",
            link: "http://timesports.cc/7.html",
        },
		{
            title: "Eurosport 2 France HD",
            link: "http://timesports.cc/8.html",
        },
		{
            title: "ESPN Argentina HD",
            link: "http://timesports.cc/espnargentina.php",
        },
		{
            title: "ESPN 2 Argentina HD",
            link: "http://timesports.cc/espn2argentina.php",
        },
		{
            title: "ESPN 3 Argentina HD",
            link: "http://timesports.cc/espn3argentina.php",
        },
		{
            title: "ESPN 1 Netherlands HD",
            link: "http://timesports.cc/espn1nl.php",
        },
		{
            title: "ESPN 2 Netherlands HD",
            link: "http://timesports.cc/espn2nl.php",
        },
		{
            title: "ESPN 3 Netherlands HD",
            link: "http://timesports.cc/espn3nl.php",
        },
		{
            title: "ESPN 4 Netherlands HD",
            link: "http://timesports.cc/espn4nl.php",
        },
		{
            title: "ESPN 5 Netherlands HD",
            link: "http://timesports.cc/espn5nl.php",
        }
    ],
    buttons2: [
      {
          title: "BT Sport 1 HD",
          link: "http://timesports.cc/ch31.html",
        },
        {
		      title: "Timesports 1 HD",
          link: "http://timesports.cc/ch1.php",
        }, 
        {
          title: "Timesports 2 HD",
          link: "http://timesports.cc/ch2.php",
        },
        {
          title: "Timesports 3 HD",
          link: "http://timesports.cc/ch3.php",
        },
		{
          title: "Timesports 4 HD",
          link: "http://timesports.cc/ch4.php",
        },
		{
          title: "Timesports 5 HD",
          link: "http://timesports.cc/ch5.php",
        },
		{
          title: "Timesports 6 HD",
          link: "http://timesports.cc/ch6.php",
        },
		{
          title: "Timesports 7 HD",
          link: "http://timesports.cc/ch7.php",
        },
		{
          title: "Timesports 8 HD",
          link: "http://timesports.cc/ch8.php",
        },
		{
          title: "Timesports 9 HD",
          link: "http://timesports.cc/ch9.php",
        },
		{
          title: "Timesports 10 HD",
          link: "http://timesports.cc/ch10.php",
        },
		{
          title: "Timesports 11 HD",
          link: "http://timesports.cc/ch11.php",
        },
		{
          title: "Timesports 12 HD",
          link: "http://timesports.cc/ch12.php",
        },
		{
          title: "Timesports 13 HD",
          link: "http://timesports.cc/ch13.php",
        },
		{
          title: "Timesports 14 HD",
          link: "http://timesports.cc/ch14.php",
        },
		{
          title: "Timesports 15 HD",
          link: "http://timesports.cc/ch15.php",
        },
		{
          title: "Timesports Match TV Russia HD",
          link: "http://timesports.cc/match.php",
        },
		{
          title: "Timesports Match Futbol 1 Russia HD",
          link: "http://timesports.cc/match1.php",
        },
		{
          title: "Timesports Match Futbol 2 Russia HD",
          link: "http://timesports.cc/match2.php",
        },
		{
          title: "Timesports Match Futbol 3 Russia HD",
          link: "http://timesports.cc/match3.php",
        },
		{
          title: "Timesports Match Premier Russia HD",
          link: "http://timesports.cc/matchpremier.php",
        },
		{
          title: "Timesports Match Strana Russia HD",
          link: "http://timesports.cc/matchstrana.php",
        },
		{
          title: "Timesports Match Arena Russia HD",
          link: "http://timesports.cc/matcharena.php",
        },
		{
          title: "Timesports Match Igra Russia HD",
          link: "http://timesports.cc/matchigra.php",
        },
		{
          title: "Timesports Futbol 1 Ukraine HD",
          link: "http://timesports.cc/futbol1.php",
        },
		{
          title: "Timesports Futbol 2 Ukraine HD",
          link: "http://timesports.cc/futbol2.php",
        },
		{
          title: "Timesports Futbol 3 Ukraine HD",
          link: "http://timesports.cc/futbol3.php",
        },
		{
          title: "Timesports Setanta Sport Ukraine HD",
          link: "http://timesports.cc/setantaukraine.php",
        },
		{
          title: "Timesports Setanta Sport Ukraine Plus HD",
          link: "http://timesports.cc/setantaukraineplus.php",
        },
		{
          title: "Timesports Belarus 5 TV HD",
          link: "http://timesports.cc/belarus5.php",
        }
    ]
  }
});