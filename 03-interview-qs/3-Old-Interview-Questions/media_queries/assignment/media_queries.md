# Media Queries

## Instructions

**Do Not Touch The HTML**

Add media queries to the provided CSS to make the page look like the screenshots below.

**Do Not Touch The HTML**

#### 1024px

![1024px](1024px.png)

#### 768px

* **Notes:**
  * For the picture, use `http://www.stevensegallery.com/768/200`
  * The text divs are height limited and vertically scrollable.

![768px](768px.png)

## Starter Code

#### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
    <nav>
      <h1>Responsiveness!</h1>
      <div id="menu">
        <ul>
          <li>Menu#1</li>
          <li>Menu#2</li>
          <li>Menu#3</li>
        </ul>
      </div>
    </nav>
  <div id="pagewrapper">
    <div id="image-div"></div>
    <div id="left">
      <p>Members Only jackets Home Alone ad aute consequat Ghost pottery scene. Wonderwall bleached hair ain’t no thang kicks. Digital pets Oakleys highlights mollit. Men in Black dial-up glow in the dark stickers butterfly clips qui. Tommy Hilfiger da bomb I believe I can fly eu sit. Coral personal computer Ford Taurus Teenage Mutant Ninja Turtles Puff Daddy. Clueless can’t touch this MTV end of the road Jonathan Taylor Thomas Lunchables, ea Goosebumps crew cut portable CD players esse catsuit. Instant messaging hot pink dope valley girl Toyota Previa Jim Carrey. Home skillet chillin’ Rocko’s Modern Life mollit super soaker AC Slater. Babyface Seinfeld Good Will Hunting light up sneakers Geo Metro gangsta rap, Enrique Iglesias Cory Matthews dotcom bubble cargo pants nisi. As I lay me down to sleep fluorescent Steve Urkel dolor life is like a box of chocolates. Tommy Hilfiger DSL ipsum Enrique Iglesias Whitney Houston Spice Girls, Jurassic Park eiusmod Kazaa in. Giga Pets da bomb Rodney King riots can’t touch this. Dotcom bubble Real World id Rush Hour. Carlton dance hottie gangsta rap you’ve got mail Atlanta Braves Beavis and Butthead. Michael Jordan crimped hair Braveheart Doc Martens buddy list. Animated GIFs aliqua fugiat cillum. Leotards Michael Jordan Fresh Prince of Bel-Air the more you know Rocko’s Modern Life. Sports utility vehicles did I do that Umbro shorts white Ford Bronco. LA Gear Speed cupidatat sup DJ Jazzy Jeff. Seattle Supersonics Meg Ryan Generation Y Courtney Love Napster Julia Roberts. Titanic cargo pants sint Koosh ball ullamco Natalie Imbruglia.</p>
    </div>
    <div id="center">
      <p>It's a beautiful day in this neighborhood a beautiful day for a neighbor. Would you be mine? Could you be mine? Its a neighborly day in this beautywood a neighborly day for a beauty. Would you be mine? Could you be mine. Come and play. Everything's A-OK. Friendly neighbors there that's where we meet. Can you tell me how to get how to get to Sesame Street. One two three four five six seven eight Sclemeel schlemazel hasenfeffer incorporated., "Straightnin' the curves. Flatnin' the hills Someday the mountain might get ‘em but the law never will." we might as well say... Would you be mine? Could you be mine? Won't you be my neighbor! These Happy Days are yours and mine Happy Days. Just two good ol' boys Wouldn't change if they could. Fightin' the system like a true modern day Robin Hood. The mate was a mighty sailin' man the Skipper brave and sure. Five passengers set sail that day for a three hour tour a three hour tour. Thank you for being a friend. Travelled down the road and back again. Your heart is true you're a pal and a confidant. Just two good ol' boys Wouldn't change if they could. Fightin' the system like a true modern day Robin Hood! The mate was a mighty sailin' man the Skipper brave and sure. Five passengers set sail that day for a three hour tour a three hour tour. Why do we always come here? I guess well never know. Its like a kind of torture to have to watch the show. Sunny Days sweepin' the clouds away. On my way to where the air is sweet. Can you tell me how to get how to get to Sesame Street. Wouldn't you like to get away? Sometimes you want to go where everybody knows your name. And they're always glad you came. Love exciting and new. Come aboard were expecting you. Love life's sweetest reward Let it flow it floats back to you!</p>
    </div>
    <div id="right">
      <p>Bacon ipsum dolor amet porchetta landjaeger ground round sausage, filet mignon ball tip turkey. Boudin flank drumstick, capicola bacon ham hock corned beef pork fatback jowl shankle cow. Fatback meatloaf pork short ribs tenderloin. Tail picanha chuck meatball prosciutto pork chop. Filet mignon pork chop brisket pork loin porchetta ham hock t-bone jerky. Filet mignon t-bone corned beef strip steak beef ribs ham hock short ribs biltong turkey shankle ball tip jowl swine. Prosciutto rump leberkas pancetta, alcatra ball tip jowl hamburger. Swine ground round andouille pork chop. Short loin pork short ribs spare ribs, ham hock pig rump jowl ham boudin chicken pastrami. Turkey capicola bresaola, ribeye pork chop ham hock pancetta pork loin tail shankle sirloin. Frankfurter swine pig, shankle sausage biltong doner tongue tri-tip fatback. Capicola boudin beef ribs bresaola brisket turducken spare ribs. Corned beef cupim jowl salami ham.Jowl chuck kevin beef meatball pig. Cupim brisket beef ribs pastrami corned beef ham jerky meatball shoulder capicola venison t-bone. Ribeye short loin sausage kevin. Ham hock doner drumstick, kielbasa spare ribs kevin beef ribs biltong pastrami. Biltong ribeye short loin pancetta t-bone leberkas. Picanha kielbasa meatloaf kevin, ribeye salami jerky. Doner tongue flank tenderloin. Pastrami landjaeger beef ribs meatball, cow venison andouille. Rump ball tip chuck, short ribs ribeye short loin pig brisket corned beef swine. Short ribs shank bresaola tail cow. Corned beef leberkas andouille, ham hock boudin chicken flank. Ham hock tail cupim ball tip flank shank tenderloin chicken pork chop. Chuck strip steak corned beef, ham flank t-bone porchetta meatball tongue. Turkey beef ribs capicola sausage flank turducken venison shank prosciutto ham pork belly jerky.</p>
    </div>
  </div>
</body>
</html>
```

#### CSS

```
*{
  margin:0;
  padding:0;
}
body{
  background-color: silver;
}
nav{
  padding:0 10%;
  height:75px;
  background-color: cornflowerblue;
}
h1{
  font-size: 60px;
  display:inline-block;
}
#menu{
  display: inline-block;
  float:right;

}
ul{
  list-style-type: none;
  text-align: right;
}

li{
  padding:26px 30px;
  display: inline-block;
  text-align: right;
  background-color: maroon;
  color:white;
}

#pagewrapper{
  width:1024px;
  margin: 10px auto 0 auto;
  background-color: antiquewhite;
}

#image-div{
  background-image: url("https://www.placecage.com/c/1024/200");
  width:1024px;
  height:200px;
}

#left, #center, #right{
  width:30%;
  display: inline-block;
  text-align: justify;
  margin:1.5%;
  vertical-align: top;
}




/********************* ADD YOUR MEDIA QUERIES BELOW THIS LINE ***********************/
```
