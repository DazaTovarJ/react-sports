const data = [
  {
    id: 1,
    title: "Football",
    body: "Football is a family of team sports that involve, to varying degrees, kicking a ball to score a goal. Unqualified, the word football is understood to refer to whichever form of football is the most popular in the regional context in which the word appears. Sports commonly called football in certain places include association football (known as soccer in some countries); gridiron football (specifically American football or Canadian football); Australian rules football; rugby football (either rugby league or rugby union); and Gaelic football. These different variations of football share to varying extent common origins and are known as football codes.",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Football_in_Bloomington%2C_Indiana%2C_1996.jpg",
    category: "Team",
    teams: [
      {
        id: 1,
        name: "Manchester United",
        website: "https://www.manutd.com/",
      },
      {
        id: 2,
        name: "Manchester City",
        website: "https://www.mancity.com/",
      },
      {
        id: 3,
        name: "Liverpool",
        website: "https://www.liverpoolfc.com/",
      },
    ],
  },
  {
    id: 2,
    title: "Basketball",
    body: "Basketball is a team sport in which two teams, most commonly of five players each, opposing one another on a rectangular court, compete with the primary objective of shooting a basketball (approximately 9.4 inches (24 cm) in diameter) through the defender's hoop (a basket 18 inches (46 cm) in diameter mounted 10 feet (3.048 m) high to a backboard at each end of the court) while preventing the opposing team from shooting through their own hoop. A field goal is worth two points, unless made from behind the three-point line, when it is worth three. After a foul, timed play stops and the player fouled or designated to shoot a technical foul is given one, two or three one-point free throws. The team with the most points at the end of the game wins, but if regulation play expires with the score tied, an additional period of play (overtime) is mandated.",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Carter_vs_Gasol%2C_Lakers_vs_Magic.jpg",
    category: "Team",
    teams: [
      {
        id: 1,
        name: "Los Angeles Lakers",
        website: "https://www.nba.com/lakers/",
      },
      {
        id: 2,
        name: "Los Angeles Clippers",
        website: "https://www.nba.com/clippers/",
      },
      {
        id: 3,
        name: "Golden State Warriors",
        website: "https://www.nba.com/warriors/",
      },
    ],
  },
  {
    id: 3,
    title: "Baseball",
    body: "Baseball is a bat-and-ball game played between two teams of nine players each, who take turns batting and fielding. The batting team attempts to score runs by hitting a ball that is thrown by the pitcher with a bat swung by the batter, then running counter-clockwise around a series of four bases: first, second, third, and home plate. A run is scored when a player advances around the bases in order and touches home plate. The teams switch between batting and fielding whenever the fielding team records three outs. One turn at bat for each team constitutes an inning. A game is composed of nine innings, and the team with the greater number of runs at the end of the game wins. Baseball has no game clock, although almost all games end in the ninth inning.",
    img: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Mookie_Betts_hitting_the_ball_%2836478781664%29.jpg",
    category: "Team",
    teams: [
      {
        id: 1,
        name: "New York Yankees",
        website: "https://www.mlb.com/yankees",
      },
      {
        id: 2,
        name: "Boston Red Sox",
        website: "https://www.mlb.com/redsox",
      },
      {
        id: 3,
        name: "Houston Astros",
        website: "https://www.mlb.com/astros",
      },
    ],
  },
  {
    id: 4,
    title: "Formula 1",
    body: "Formula One (more commonly known as Formula 1 or F1) is the highest class of international racing for open-wheel single-seater formula racing cars sanctioned by the Fédération Internationale de l'Automobile (FIA). The FIA Formula One World Championship has been one of the premier forms of racing around the world since its inaugural season in 1950. The word formula in the name refers to the set of rules to which all participants' cars must conform. A Formula One season consists of a series of races, known as Grands Prix. Grands Prix take place in multiple countries and continents around the world on either purpose-built circuits or closed public roads.",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/74/FIA_F1_Austria_2022_Nr._16_Leclerc.jpg",
    category: "Motor",
    teams: [
      {
        id: 1,
        name: "Mercedes",
        website: "https://www.mercedesamgf1.com/en/",
      },
      {
        id: 2,
        name: "Ferrari",
        website: "https://www.ferrari.com/en-EN",
      },
      {
        id: 3,
        name: "Red Bull Racing",
        website: "https://www.redbullracing.com/",
      },
    ],
  },
  {
    id: 5,
    title: "MotoGP",
    body: "Grand Prix motorcycle racing (commonly knonw as MotoGP) is the premier class of motorcycle road racing events held on road circuits sanctioned by the Fédération Internationale de Motocyclisme (FIM). Independent motorcycle racing events have been held since the start of the twentieth century and large national events were often given the title Grand Prix. The foundation of the Fédération Internationale de Motocyclisme as the international governing body for motorcycle sport in 1949 provided the opportunity to coordinate rules and regulations in order that selected events could count towards official World Championships. It is the oldest established motorsport world championship.",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Aleix_Espargar%C3%B3_leads_the_pack_2021_Sachsenring.jpg",
    category: "Motor",
    teams: [
      {
        id: 1,
        name: "Honda",
        website: "https://www.honda.com/",
      },
      {
        id: 2,
        name: "Yamaha",
        website: "https://www.yamaha-motor.com/",
      },
      {
        id: 3,
        name: "Ducati",
        website: "https://www.ducati.com/",
      },
    ],
  },
  {
    id: 6,
    title: "NASCAR",
    body: "The National Association for Stock Car Auto Racing, LLC (NASCAR) is an American auto racing sanctioning and operating company that is best known for stock car racing. The privately owned company was founded by Bill France Sr. in 1948, and his son, Jim France, has been the CEO since August 2018. The company is headquartered in Daytona Beach, Florida.[4] Each year, NASCAR sanctions over 1,500 races at over 100 tracks in 48 US states as well as in Canada, Mexico, Brazil and Europe.",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Nascar_Canadian_Tire_Series_Chaudiere.jpg",
    category: "Motor",
    teams: [
      {
        id: 1,
        name: "Ford",
        website: "https://www.ford.com/",
      },
      {
        id: 2,
        name: "Chevrolet",
        website: "https://www.chevrolet.com/",
      },
      {
        id: 3,
        name: "Toyota",
        website: "https://www.toyota.com/",
      },
    ],
  },
  {
    id: 7,
    title: "Chess",
    body: "Chess is a board game between two players. It is sometimes called international chess or Western chess to distinguish it from related games, such as xiangqi (Chinese chess) and shogi (Japanese chess). The recorded history of chess goes back at least to the emergence of a similar game, chaturanga, in seventh-century India. The rules of chess as we know them today emerged in Europe at the end of the 15th century, with standardization and universal acceptance by the end of the 19th century. Today, chess is one of the world's most popular games, played by millions of people worldwide.",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6f/ChessSet.jpg",
    category: "Board",
    teams: [
      {
        id: 1,
        name: "Magnus Carlsen",
        website: "https://www.chess.com/member/magnuscarlsen",
      },
      {
        id: 2,
        name: "Fabiano Caruana",
        website: "https://www.chess.com/member/fabianocaruana",
      },
      {
        id: 3,
        name: "Ding Liren",
        website: "https://www.chess.com/member/dingliren",
      },
    ],
  },
  {
    id: 8,
    title: "Checkers (draughts)",
    body: `Checkers (American English), also known as draughts (British English), is a group of strategy board games for two players which involve diagonal moves of uniform game pieces and mandatory captures by jumping over opponent pieces. Checkers is developed from alquerque. The term "checkers" derives from the checkered board which the game is played on, whereas "draughts" derives from the verb "to draw" or "to move".`,
    img: "https://upload.wikimedia.org/wikipedia/commons/f/f1/CheckersStandard.jpg",
    category: "Board",
    teams: [
      {
        id: 1,
        name: "John Doe",
        website: "https://www.chess.com/member/magnuscarlsen",
      },
      {
        id: 2,
        name: "Jane Doe",
        website: "https://www.chess.com/member/fabianocaruana",
      },
      {
        id: 3,
        name: "John Smith",
        website: "https://www.chess.com/member/dingliren",
      },
    ],
  },
  {
    id: 9,
    title: "Backgammon",
    body: "Backgammon is a two-player board game played with counters and dice on tables boards. It is the most widespread Western member of the large family of tables games, whose ancestors date back nearly 5,000 years to the regions of Mesopotamia and Persia. The earliest record of backgammon itself dates to 17th-century England, being descended from the 16th-century game of Irish.",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/30/Backgammon_lg.png",
    category: "Board",
    teams: [
      {
        id: 1,
        name: "John Doe",
        website: "https://www.chess.com/member/magnuscarlsen",
      },
      {
        id: 2,
        name: "Jane Doe",
        website: "https://www.chess.com/member/fabianocaruana",
      },
      {
        id: 3,
        name: "John Smith",
        website: "https://www.chess.com/member/dingliren",
      },
    ],
  },
];

export default data;
