const level1 = new Level(
//enemies
    [
        new Boss(),
   new Chicken(700,400),
   new Chicken(1000,400),
   new Chicken(500,400),
 new FastChicken(1990,300),
 new Chicken(3500,400),
 new Chicken(3650,400),
 new Chicken(3800,400),
 new FastChicken(5740,240),

 new FastChicken(6630,240),
 new FastChicken(6730,240),
 new FastChicken(6830,240),
 new FastChicken(6510,240),
 new FastChicken(6980,240),

 new Chicken(6630,250),
 new Chicken(6900,250),
 new Chicken(6500,250),

 new FastChicken(6200,300),
 new FastChicken(6000,300),
 new Chicken(6000,300),
 new Chicken(6150,300),


   
   
  //  new Chicken(), new Chicken(), new Chicken(), new Chicken(), new Chicken(), new Chicken(),
  //  new Chicken()
],
//clouds
[
    new Cloud(),
    new Cloud(),
    new Cloud(),
    new Cloud(),
    new Cloud(),
    new Cloud(),
    new Cloud(),
    new Cloud(),
    new Cloud(),
    new Cloud(),
    new Cloud(),
    new Cloud(),
    new Cloud(),
    new Cloud(),

],
// backgroundobjects
[
    new BackgroundObject(imagepaths[106],0),
    new BackgroundObject(imagepaths[100],0),
    new BackgroundObject(imagepaths[97],0),
    new BackgroundObject('img/img/5.Fondo/Capas/1.suelo-fondo1/1new.png',0),
   // new BackgroundObject("img/img/sonstiges/fence-horizontal.png",455,415,95,30),

    new BackgroundObject(imagepaths[106],799),
    new BackgroundObject(imagepaths[101],799),
    new BackgroundObject(imagepaths[98],799),
    new BackgroundObject('img/img/5.Fondo/Capas/1.suelo-fondo1/2new.png',799),

    new BackgroundObject(imagepaths[106],1598),
    new BackgroundObject(imagepaths[100],1598),
    new BackgroundObject(imagepaths[97],1598),
    new BackgroundObject('img/img/5.Fondo/Capas/1.suelo-fondo1/1new.png',1598),

    new BackgroundObject(imagepaths[106],2397),
    new BackgroundObject(imagepaths[101],2397),
    new BackgroundObject(imagepaths[98],2397),
    new BackgroundObject('img/img/5.Fondo/Capas/1.suelo-fondo1/2new.png',2397),

    new BackgroundObject(imagepaths[106],3196),
    new BackgroundObject(imagepaths[106],3995),
    new BackgroundObject(imagepaths[106],4794),
    new BackgroundObject(imagepaths[106],5593),
    new BackgroundObject(imagepaths[106],6192),
    new BackgroundObject(imagepaths[106],6991),
    new BackgroundObject(imagepaths[106],7790),
    new BackgroundObject(imagepaths[106],8589),
    new BackgroundObject(imagepaths[106],9388),

    new BackgroundObject(imagepaths[100],3196),
    new BackgroundObject(imagepaths[101],3995),
    new BackgroundObject(imagepaths[100],4794),
    new BackgroundObject(imagepaths[101],5593),
    new BackgroundObject(imagepaths[100],6192),
    new BackgroundObject(imagepaths[101],6991),
    new BackgroundObject(imagepaths[100],7790),
    new BackgroundObject(imagepaths[101],8589),
    new BackgroundObject(imagepaths[100],9388),

    new BackgroundObject(imagepaths[97],3196),
    new BackgroundObject(imagepaths[98],3995),
    new BackgroundObject(imagepaths[97],4794),
    new BackgroundObject(imagepaths[98],5593),
    new BackgroundObject(imagepaths[97],6192),
    new BackgroundObject(imagepaths[98],6991),
    new BackgroundObject(imagepaths[97],7790),
    new BackgroundObject(imagepaths[98],8589),
    new BackgroundObject(imagepaths[97],9388),

    new BackgroundObject('img/img/5.Fondo/Capas/1.suelo-fondo1/1new.png',3196),
    new BackgroundObject('img/img/5.Fondo/Capas/1.suelo-fondo1/2new.png',3995),
    new BackgroundObject('img/img/5.Fondo/Capas/1.suelo-fondo1/1new.png',4794),
    new BackgroundObject('img/img/5.Fondo/Capas/1.suelo-fondo1/2new.png',5593),
    new BackgroundObject('img/img/5.Fondo/Capas/1.suelo-fondo1/1new.png',6192),
    new BackgroundObject('img/img/5.Fondo/Capas/1.suelo-fondo1/2new.png',6991),
    new BackgroundObject('img/img/5.Fondo/Capas/1.suelo-fondo1/1new.png',7790),
    new BackgroundObject('img/img/5.Fondo/Capas/1.suelo-fondo1/2new.png',8589),
    new BackgroundObject('img/img/5.Fondo/Capas/1.suelo-fondo1/1new.png',9388),
],


[
  
    
    new Platforms('img/img/5.Fondo/Capas/1.suelo-fondo1/plattform1.png',0,505,800,200,"solid"),
    new Platforms('img/img/5.Fondo/Capas/1.suelo-fondo1/plattform2.png',799,505,801,200,"solid"),
    new Platforms('img/img/5.Fondo/Capas/1.suelo-fondo1/plattform1.png',1599,505,400,200,"solid"),
    new Platforms('img/img/5.Fondo/Capas/1.suelo-fondo1/plattform2.png',1998,460,400,200,"solid"),
    new Platforms('img/img/5.Fondo/Capas/1.suelo-fondo1/plattform1.png',2397,400,500,200,"solid"),
    new Platforms('img/img/5.Fondo/Capas/1.suelo-fondo1/plattform2.png',2856,505,300,200,"solid"),
    new Platforms('',3195,1000,100,200,""),
    new Platforms(imagepaths[125],3255,480,10,50,"barrier"), //fence

    new Platforms('img/img/5.Fondo/Capas/1.suelo-fondo1/plattform1.png',3255,505,800,200,"solid"),
    new Platforms('img/img/5.Fondo/Capas/1.suelo-fondo1/plattform2.png',4054,380,450,400,"solid"),
    new Platforms('img/img/5.Fondo/Capas/1.suelo-fondo1/plattform1.png',4493,300,200,600,"solid"),
    new Platforms('',4700,1000,200,200,""),
    new Platforms('img/img/5.Fondo/Capas/1.suelo-fondo1/plattform1.png',4792,250,100,20,"top"),//small Platform

    new Platforms('img/img/5.Fondo/Capas/1.suelo-fondo1/plattform2.png',4891,505,200,200,"solid"),
    new Platforms('img/img/5.Fondo/Capas/1.suelo-fondo1/plattform1.png',5180,400,200,20,"top"),//small Platform
    new Platforms('img/img/5.Fondo/Capas/1.suelo-fondo1/plattform1.png',5359,470,170,20,"top"),//small Platform
    new Platforms('',5640,470,100,20,"top"),//small Platform hidden
    new Platforms(imagepaths[125],5680,280,10,80,"barrier"), //fence
    new Platforms(imagepaths[125],5870,280,10,80,"barrier"), //fence
    new Platforms('img/img/5.Fondo/Capas/1.suelo-fondo1/plattform1.png',5680,350,200,20,"top"),//small Platform

    new Platforms(imagepaths[125],5800,440,10,100,"barrier"), //fence
    new Platforms('img/img/5.Fondo/Capas/1.suelo-fondo1/plattform1.png',5800,505,800,200,"solid"), 
    new Platforms(imagepaths[125],6505,300,10,100,"barrier"), //fence
    new Platforms(imagepaths[125],7190,300,10,100,"barrier"), //fence
    new Platforms('img/img/5.Fondo/Capas/1.suelo-fondo1/plattform1.png',6500,350,700,300,"solid"), 
    


    new Platforms('img/img/5.Fondo/Capas/1.suelo-fondo1/plattform1.png',7200,505,800,200,"solid"), 

    new Platforms('img/img/5.Fondo/Capas/1.suelo-fondo1/plattform1.png',8005,350,70,20,"top"),//small Platform
    new Platforms('img/img/5.Fondo/Capas/1.suelo-fondo1/plattform1.png',8005,250,70,20,"top"),//small Platform
    new Platforms('img/img/5.Fondo/Capas/1.suelo-fondo1/plattform1.png',8720,350,70,20,"top"),//small Platform
    new Platforms('img/img/5.Fondo/Capas/1.suelo-fondo1/plattform1.png',8720,250,70,20,"top"),//small Platform
    //30
    new Platforms(imagepaths[125],8000,250,15,300,"barrier"), //fence
    new Platforms("",8000,0,15,250,"solid"), //fence

    new Platforms(imagepaths[125],8790,250,10,300,"solid"), //fence
    new Platforms("",8790,0,10,250,"solid"), //fence



    new Platforms('img/img/5.Fondo/Capas/1.suelo-fondo1/plattform2.png',8000,505,800,200,"solid"), //endbossgebiet
    new Platforms('img/img/5.Fondo/Capas/1.suelo-fondo1/plattform1.png',8800,505,800,200,"solid"),//non walkable 
    
   // new Platforms('img/img/5.Fondo/Capas/1.suelo-fondo1/plattform1.png',0,450,800,200,"solid"),
   // new Platforms('img/img/5.Fondo/Capas/1.suelo-fondo1/plattform2.png',799,450,800,200,"solid"),

    new Platforms('',2399,1000,200,200,""),//freifläche

    new Platforms(imagepaths[125],300,440,10,100,"barrier"), //fence

    new Platforms('img/img/5.Fondo/Capas/1.suelo-fondo1/plattform1.png',2998,290,95,20,"top"),//small Platform
    new Platforms('img/img/5.Fondo/Capas/1.suelo-fondo1/plattform1.png',3210,290,75,20,"top"),//small Platform


 //   new Platforms('img/img/5.Fondo/Capas/1.suelo-fondo1/plattform1.png',500,270,200,20,"top"),//small Platform
],
[
    new LootableObject(200,445,true),
    new LootableObject(770,445,false),
 //   new LootableObject(1200,400,false),
    new LootableObject(1500,445,false),

  //  new LootableObject(1600,300,false),
    new LootableObject(5950,445,false),
    new LootableObject(5870,445,false),

    /************************ */

    new LootableObject(2670,345,false),
    new LootableObject(3780,445,false),
    new LootableObject(2990,445,false),
    new LootableObject(3230,225,false),



    new LootableObject(7650,445,false),
    new LootableObject(7700,445,false),
    new LootableObject(7750,445,false),




],
[
    new Coins(350,300),
    new Coins(420,300),
    new Coins(490,300),


    new Coins(3005,200),
    new Coins(3005,150),
    new Coins(3180,100),
    new Coins(3180,150),
    new Coins(3230,150),
    new Coins(3230,100),
    new Coins(3170,370),

    new Coins(5025,150),

    new Coins(5025,200),
    new Coins(5025,250),
    new Coins(5025,300),
    
    new Coins(5250,200),
    new Coins(5600,50),
//******************************************** */
    new Coins(6600,50),
    new Coins(6650,50),
    new Coins(6700,50),
    new Coins(6750,50),
    new Coins(6800,50),

    new Coins(2170,210),
    new Coins(2120,250),
    new Coins(2220,250),

    new Coins(1290,410),
    new Coins(1150,410),
    new Coins(1220,410),

    new Coins(4580,150),
    new Coins(4530,150),
    new Coins(4580,200),
    new Coins(4530,200),













]
)