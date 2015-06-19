 angular.module('storageMod', [])

 .service('storage', function() {

     var diamastone = [
   {
      group:"Boutique",
      photos:[
         "images/diamastone_images/boutique/01-lg-3.jpg",
         "images/diamastone_images/boutique/04-lg-3.jpg",
         "images/diamastone_images/boutique/05-lg-3.jpg",
         "images/diamastone_images/boutique/06-lg-3.jpg",
         "images/diamastone_images/boutique/08-lg-3.jpg",
         "images/diamastone_images/boutique/09-lg-3.jpg",
         "images/diamastone_images/boutique/11-lg-3.jpg",
         "images/diamastone_images/boutique/12-lg-3.jpg",
         "images/diamastone_images/boutique/images/diamastone_images/boutique/13-lg-3.jpg",
         "images/diamastone_images/boutique/14-lg-2.jpg",
         "images/diamastone_images/boutique/15-lg-2.jpg",
         "images/diamastone_images/boutique/16-lg-2.jpg",
         "images/diamastone_images/boutique/17-lg-2.jpg",
         "images/diamastone_images/boutique/18-lg-2.jpg",
         "images/diamastone_images/boutique/19-lg-2.jpg",
         "images/diamastone_images/boutique/20-lg-2.jpg",
         "images/diamastone_images/boutique/21-lg-2.jpg",
         "images/diamastone_images/boutique/22-lg-2.jpg",
         "images/diamastone_images/boutique/23-lg-2.jpg",
         "images/diamastone_images/boutique/24-lg-2.jpg",
         "images/diamastone_images/boutique/24_2lg-1.jpg",
         "images/diamastone_images/boutique/25-lg-1.jpg",
         "images/diamastone_images/boutique/26-lg-1.jpg",
         "images/diamastone_images/boutique/26_2lg.jpg",
         "images/diamastone_images/boutique/27-lg-1.jpg",
         "images/diamastone_images/boutique/28-lg-1.jpg",
         "images/diamastone_images/boutique/32-lg-1.jpg",
         "images/diamastone_images/boutique/33-lg-1.jpg",
         "images/diamastone_images/boutique/34-lg-1.jpg",
         "images/diamastone_images/boutique/39-lg-1.jpg",
         "images/diamastone_images/boutique/40-lg-1.jpg",
         "images/diamastone_images/boutique/42-lg-1.jpg",
         "images/diamastone_images/boutique/43-lg-1.jpg",
         "images/diamastone_images/boutique/44-lg-1.jpg",
         "images/diamastone_images/boutique/46-lg-1.jpg",
         "images/diamastone_images/boutique/47-lg-1.jpg",
         "images/diamastone_images/boutique/48-lg-1.jpg",
         "images/diamastone_images/boutique/49-lg-1.jpg",
         "images/diamastone_images/boutique/50-lg-1.jpg",
         "images/diamastone_images/boutique/51-lg-1.jpg",
         "images/diamastone_images/boutique/52-lg-1.jpg",
         "images/diamastone_images/boutique/53-lg-1.jpg",
         "images/diamastone_images/boutique/54-lg-1.jpg",
         "images/diamastone_images/boutique/55-lg-1.jpg",
         "images/diamastone_images/boutique/57-lg-1.jpg",
         "images/diamastone_images/boutique/58-lg.jpg",
         "images/diamastone_images/boutique/59-lg.jpg",
         "images/diamastone_images/boutique/Amazon_521_lg.jpg",
         "images/diamastone_images/boutique/Atlas_Beige_821_lg.jpg",
         "images/diamastone_images/boutique/Atlas_Brown_820_lg.jpg",
         "images/diamastone_images/boutique/Bordeaux_520_lg.jpg",
         "images/diamastone_images/boutique/Brick_518_lg.jpg",
         "images/diamastone_images/boutique/Caldera_Brown_807_lg.jpg",
         "images/diamastone_images/boutique/Caldera_Grey_808_lg.jpg",
         "images/diamastone_images/boutique/Caldera_White_809_lg.jpg",
         "images/diamastone_images/boutique/Flamingo_514_lg.jpg",
         "images/diamastone_images/boutique/Gemstone_516_lg.jpg",
         "images/diamastone_images/boutique/Ice_511_lg.jpg",
         "images/diamastone_images/boutique/Jet_Black_512_lg.jpg",
         "images/diamastone_images/boutique/Lagoon_513_lg.jpg",
         "images/diamastone_images/boutique/Lavender_515_lg.jpg",
         "images/diamastone_images/boutique/Lead_Grey_272_lg.jpg",
         "images/diamastone_images/boutique/Lime_517_lg.jpg",
         "images/diamastone_images/boutique/Nickel_271_lg.jpg",
         "images/diamastone_images/boutique/Pebble_Green_267_lg.jpg",
         "images/diamastone_images/boutique/Ruby_Mirage_411_lg.jpg",
         "images/diamastone_images/boutique/Silver_Blue_904_lg.jpg",
         "images/diamastone_images/boutique/Violet_510_lg.jpg"
      ]
   },
   {
      group:"Contemporary",
      photos:[
         "images/diamastone_images/contemporary/08_2lg.jpg",
         "images/diamastone_images/contemporary/08_3lg.jpg",
         "images/diamastone_images/contemporary/12_3lg.jpg",
         "images/diamastone_images/contemporary/16_2lg.jpg",
         "images/diamastone_images/contemporary/18_2lg.jpg",
         "images/diamastone_images/contemporary/18_3lg.jpg",
         "images/diamastone_images/contemporary/25-lg.jpg",
         "images/diamastone_images/contemporary/26-lg.jpg",
         "images/diamastone_images/contemporary/27-lg.jpg",
         "images/diamastone_images/contemporary/28-lg.jpg",
         "images/diamastone_images/contemporary/29-lg.jpg",
         "images/diamastone_images/contemporary/30-lg.jpg",
         "images/diamastone_images/contemporary/31-lg.jpg",
         "images/diamastone_images/contemporary/32-lg.jpg",
         "images/diamastone_images/contemporary/33-lg.jpg",
         "images/diamastone_images/contemporary/34-lg.jpg",
         "images/diamastone_images/contemporary/34_2lg.jpg",
         "images/diamastone_images/contemporary/35-lg.jpg",
         "images/diamastone_images/contemporary/36-lg.jpg",
         "images/diamastone_images/contemporary/37-lg.jpg",
         "images/diamastone_images/contemporary/38-lg.jpg",
         "images/diamastone_images/contemporary/40-lg.jpg",
         "images/diamastone_images/contemporary/41-lg.jpg",
         "images/diamastone_images/contemporary/42-lg.jpg",
         "images/diamastone_images/contemporary/43-lg.jpg",
         "images/diamastone_images/contemporary/44-lg.jpg",
         "images/diamastone_images/contemporary/45-lg.jpg",
         "images/diamastone_images/contemporary/46-lg.jpg",
         "images/diamastone_images/contemporary/47-lg.jpg",
         "images/diamastone_images/contemporary/48-lg.jpg",
         "images/diamastone_images/contemporary/49-lg.jpg",
         "images/diamastone_images/contemporary/50-lg.jpg",
         "images/diamastone_images/contemporary/51-lg.jpg",
         "images/diamastone_images/contemporary/52-lg.jpg",
         "images/diamastone_images/contemporary/53-lg.jpg",
         "images/diamastone_images/contemporary/54-lg.jpg",
         "images/diamastone_images/contemporary/55-lg.jpg",
         "images/diamastone_images/contemporary/56-lg.jpg",
         "images/diamastone_images/contemporary/57-lg.jpg",
         "images/diamastone_images/contemporary/57_2lg.jpg",
         "images/diamastone_images/contemporary/57_3lg.jpg"
      ]
   },
   {
      group:"Desert",
      photos:[
         "images/diamastone_images/desert/01-lg.jpg",
         "images/diamastone_images/desert/02-lg.jpg",
         "images/diamastone_images/desert/03-lg.jpg",
         "images/diamastone_images/desert/04-lg.jpg",
         "images/diamastone_images/desert/05-lg.jpg",
         "images/diamastone_images/desert/06-lg.jpg",
         "images/diamastone_images/desert/06_2lg.jpg",
         "images/diamastone_images/desert/07-lg.jpg",
         "images/diamastone_images/desert/08-lg.jpg",
         "images/diamastone_images/desert/09-lg.jpg",
         "images/diamastone_images/desert/10-lg.jpg",
         "images/diamastone_images/desert/11-lg.jpg",
         "images/diamastone_images/desert/12-lg.jpg",
         "images/diamastone_images/desert/12_2lg.jpg",
         "images/diamastone_images/desert/13-lg.jpg",
         "images/diamastone_images/desert/Desert_Abalone_lg.jpg",
         "images/diamastone_images/desert/Desert_Birch_lg.jpg",
         "images/diamastone_images/desert/Desert_Black_Mirage_lg.jpg",
         "images/diamastone_images/desert/Desert_Black_Night_lg.jpg",
         "images/diamastone_images/desert/Desert_Buff_lg.jpg",
         "images/diamastone_images/desert/Desert_Calypso_lg.jpg",
         "images/diamastone_images/desert/Desert_Colony_Brown_lg.jpg",
         "images/diamastone_images/desert/Desert_Deville_lg.jpg",
         "images/diamastone_images/desert/Desert_Dolomite_lg.jpg",
         "images/diamastone_images/desert/Desert_Espresso_lg.jpg",
         "images/diamastone_images/desert/Desert_Fossil_lg.jpg",
         "images/diamastone_images/desert/Desert_Harvest_lg.jpg",
         "images/diamastone_images/desert/Desert_Mink_lg.jpg",
         "images/diamastone_images/desert/Desert_Moonlight_lg.jpg",
         "images/diamastone_images/desert/Desert_Oak_lg.jpg",
         "images/diamastone_images/desert/Desert_Olympic_Beige_lg.jpg",
         "images/diamastone_images/desert/Desert_Oyster_lg.jpg",
         "images/diamastone_images/desert/Desert_Pewter_lg.jpg",
         "images/diamastone_images/desert/Desert_Rubi_Mirage_lg.jpg",
         "images/diamastone_images/desert/Desert_Rum_lg.jpg",
         "images/diamastone_images/desert/Desert_Russet_lg.jpg",
         "images/diamastone_images/desert/Desert_Tempest_lg.jpg",
         "images/diamastone_images/desert/Desert_Truffle_lg.jpg",
         "images/diamastone_images/desert/Desert_Tundra_lg.jpg"
      ]
   },
   {
      group:"Primary",
      photos:[
         "images/diamastone_images/primary/01-lg.jpg",
         "images/diamastone_images/primary/02-lg.jpg",
         "images/diamastone_images/primary/03-lg.jpg",
         "images/diamastone_images/primary/04-lg.jpg",
         "images/diamastone_images/primary/05-lg.jpg",
         "images/diamastone_images/primary/06-lg.jpg",
         "images/diamastone_images/primary/07-lg.jpg",
         "images/diamastone_images/primary/08-lg.jpg",
         "images/diamastone_images/primary/09-lg.jpg",
         "images/diamastone_images/primary/10-lg.jpg",
         "images/diamastone_images/primary/11-lg.jpg",
         "images/diamastone_images/primary/11_2lg.jpg",
         "images/diamastone_images/primary/12-lg.jpg",
         "images/diamastone_images/primary/13-lg.jpg",
         "images/diamastone_images/primary/13_2lg.jpg",
         "images/diamastone_images/primary/14-lg.jpg",
         "images/diamastone_images/primary/15-lg.jpg",
         "images/diamastone_images/primary/16-lg.jpg",
         "images/diamastone_images/primary/17-lg.jpg",
         "images/diamastone_images/primary/17_2lg.jpg",
         "images/diamastone_images/primary/17_3lg.jpg",
         "images/diamastone_images/primary/18-lg.jpg",
         "images/diamastone_images/primary/19-lg.jpg",
         "images/diamastone_images/primary/20-lg.jpg",
         "images/diamastone_images/primary/21-lg.jpg",
         "images/diamastone_images/primary/22-lg.jpg",
         "images/diamastone_images/primary/22_2lg.jpg",
         "images/diamastone_images/primary/23-lg.jpg",
         "images/diamastone_images/primary/24-lg.jpg",
         "images/diamastone_images/primary/24_2lg.jpg"
      ]
   }
];
     var sliders = [{
             image: "./images/sliders/1.jpg",
             type: "slides"
         }, {
             image: "./images/sliders/2.jpg",
             type: "slides"
         }, {
             image: "./images/sliders/3.jpg",
             type: "slides"
         }, {
             image: "./images/sliders/4.jpg",
             type: "slides"
         }, {
             image: "./images/slide/slide2sml.jpg",
             type: "slidesSml"
         }, {
             image: "./images/slide/slide1sml.jpg",
             type: "slidesSml"
         }, {
             image: "./images/slide/slide3sml.jpg",
             type: "slidesSml"
         }, {
             image: "./images/slide/slide4sml.jpg",
             type: "slidesSml"
         }, {
             image: "./images/slide/slide5sml.jpg",
             type: "slidesSml"
         }

     ];

          var caesarstone = [


          {
            name:"Freshwhite",
            list: [{
             image: "/images/caesarstone/name1prev.jpg",
             thumbnail: "./images/caesarstone/name1previcon.jpg"
         },{
             image: "/images/caesarstone/name2prev.jpg",
             thumbnail: "./images/caesarstone/name2previcon.jpg"
         },{
             image: "/images/caesarstone/name3prev.jpg",
             thumbnail: "./images/caesarstone/name3previcon.jpg"
         },{
             image: "/images/caesarstone/name4prev.jpg",
             thumbnail: "./images/caesarstone/name4previcon.jpg"
         },{
             image: "/images/caesarstone/name5prev.jpg",
             thumbnail: "./images/caesarstone/name5previcon.jpg"
         },{
             image: "/images/caesarstone/name6prev.jpg",
             thumbnail: "./images/caesarstone/name6previcon.jpg"
         }
            ]
          },


          {
            name:"Shaded Gray",
            list:[{
             image: "/images/caesarstone/name7prev.jpg",
             thumbnail: "./images/caesarstone/name7previcon.jpg"
         },{
             image: "/images/caesarstone/name8prev.jpg",
             thumbnail: "./images/caesarstone/name8previcon.jpg"
         },{
             image: "/images/caesarstone/name9prev.jpg",
             thumbnail: "./images/caesarstone/name9previcon.jpg"
         },{
             image: "/images/caesarstone/name10prev.jpg",
             thumbnail: "./images/caesarstone/name10previcon.jpg"
         }
                ]
          },


          {
            name:"Beige",
            list:[{
             image: "/images/caesarstone/name11prev.jpg",
             thumbnail: "./images/caesarstone/name11previcon.jpg"
         },{
             image: "/images/caesarstone/name12prev.jpg",
             thumbnail: "./images/caesarstone/name12previcon.jpg"
         },{
             image: "/images/caesarstone/name13prev.jpg",
             thumbnail: "./images/caesarstone/name13previcon.jpg"
         }
         ]
          },

          {
            name:"Tan Brown",
            list:[{
             image: "/images/caesarstone/name14prev.jpg",
             thumbnail: "./images/caesarstone/name14previcon.jpg"
         },{
             image: "/images/caesarstone/name15prev.jpg",
             thumbnail: "./images/caesarstone/name15previcon.jpg"
         },{
             image: "/images/caesarstone/name16prev.jpg",
             thumbnail: "./images/caesarstone/name16previcon.jpg"
         },]
          },


          {
            name:"Rich Brown",
            list:[{
             image: "/images/caesarstone/name17prev.jpg",
             thumbnail: "./images/caesarstone/name17previcon.jpg"
         },{
             image: "/images/caesarstone/name18prev.jpg",
             thumbnail: "./images/caesarstone/name18previcon.jpg"
         },{
             image: "/images/caesarstone/name19prev.jpg",
             thumbnail: "./images/caesarstone/name19previcon.jpg"
         },{
             image: "/images/caesarstone/name20prev.jpg",
             thumbnail: "./images/caesarstone/name20previcon.jpg"
         },]
          },


          {
            name:"Bold Black",
            list:[{
             image: "/images/caesarstone/name21prev.jpg",
             thumbnail: "./images/caesarstone/name21previcon.jpg"
         },{
             image: "/images/caesarstone/name22prev.jpg",
             thumbnail: "./images/caesarstone/name22previcon.jpg"
         },{
             image: "/images/caesarstone/name23prev.jpg",
             thumbnail: "./images/caesarstone/name23previcon.jpg"
         },{
             image: "/images/caesarstone/name24prev.jpg",
             thumbnail: "./images/caesarstone/name24previcon.jpg"
         },{
             image: "/images/caesarstone/name25prev.jpg",
             thumbnail: "./images/caesarstone/name25previcon.jpg"
         },]
          },

          {
            name:"Deep Gray",
            list:[{
             image: "/images/caesarstone/name26prev.jpg",
             thumbnail: "./images/caesarstone/name26previcon.jpg"
         },{
             image: "/images/caesarstone/name27prev.jpg",
             thumbnail: "./images/caesarstone/name27previcon.jpg"
         },{
             image: "/images/caesarstone/name28prev.jpg",
             thumbnail: "./images/caesarstone/name28previcon.jpg"
         },{
             image: "/images/caesarstone/name29prev.jpg",
             thumbnail: "./images/caesarstone/name29previcon.jpg"
         },]
          },

          {
            name:"Soft Gray",
            list:[{
             image: "/images/caesarstone/name30prev.jpg",
             thumbnail: "./images/caesarstone/name30previcon.jpg"
         },{
             image: "/images/caesarstone/name31prev.jpg",
             thumbnail: "./images/caesarstone/name31previcon.jpg"
         },{
             image: "/images/caesarstone/name32prev.jpg",
             thumbnail: "./images/caesarstone/name32previcon.jpg"
         },]
          },


          {
            name:"Vivid Green",
            list:[{
             image: "/images/caesarstone/name33prev.jpg",
             thumbnail: "./images/caesarstone/name33previcon.jpg"
         },{
             image: "/images/caesarstone/name34prev.jpg",
             thumbnail: "./images/caesarstone/name34previcon.jpg"
         },]
          },


          {
            name:"Coold Blue",
            list:[{
             image: "/images/caesarstone/name35prev.jpg",
             thumbnail: "./images/caesarstone/name35previcon.jpg"
         },]
          },


          {
            name:"Warm Red",
            list:[{
             image: "/images/caesarstone/name36prev.jpg",
             thumbnail: "./images/caesarstone/name36previcon.jpg"
         },{
             image: "/images/caesarstone/name37prev.jpg",
             thumbnail: "./images/caesarstone/name37previcon.jpg"
         },{
             image: "/images/caesarstone/name38prev.jpg",
             thumbnail: "./images/caesarstone/name38previcon.jpg"
         },]
          },

          {
            name:"Motivo",
            list:[{
             image: "/images/caesarstone/name39prev.jpg",
             thumbnail: "./images/caesarstone/name39previcon.jpg"
         },{
             image: "/images/caesarstone/name40prev.jpg",
             thumbnail: "./images/caesarstone/name40previcon.jpg"
         }]
          }

     ];
     var desert = [{
             image: "./images/desert/01-lg.jpg",
             title:""
         }, {
             image: "./images/desert/01-lg-1.jpg",
             title:""
         }, {
             image: "./images/desert/01-lg-2.jpg",
             title:""
         }, {
             image: "./images/desert/01-lg-3.jpg",
             title:""
         }, {
             image: "./images/desert/01-lg-4.jpg",
             title:""

         }, {
             image: "./images/desert/02-lg.jpg",
             title:""
         }, {
             image: "./images/desert/02-lg-1.jpg",
             title:""
         }, {
             image: "./images/desert/02-lg-2.jpg",
             title:""
         }, {
             image: "./images/desert/02-lg-3.jpg",
             title:""
         }, {
             image: "./images/desert/02-lg-4.jpg",
             title:""
         }, {
             image: "./images/desert/03-3.jpg",
             title:""
         }, {
             image: "./images/desert/03-lg-1.jpg",
             title:""
         }, {
             image: "./images/desert/03-lg-2.jpg",
             title:""
         }            

     ];
var belenco = [
   {
      group:"Belenco Exclusive",
      photos:[
         {
            prev:"images/belenco/belenco_exclusive/1043.jpg",
            main:"images/belenco/belenco_exclusive/1043lg.jpg",
            code:"1043",
            name:"Magic Purple"
         },
         
         {
            prev:"images/belenco/belenco_exclusive/4458.jpg",
            main:"images/belenco/belenco_exclusive/4458lg.jpg",
            code:"4458",
            name:" Chakra Beige"
         },
         
         {
            prev:"images/belenco/belenco_exclusive/7568.jpg",
            main:"images/belenco/belenco_exclusive/7568lg.jpg",
            code:"7568",
            name:"Cascade White"
         },
         
         {
            prev:"images/belenco/belenco_exclusive/7777.jpg",
            main:"images/belenco/belenco_exclusive/7777lg.jpg",
            code:"7777",
            name:"Vintage Black"
         },
         
         {
            prev:"images/belenco/belenco_exclusive/7986.jpg",
            main:"images/belenco/belenco_exclusive/7986lg.jpg",
            code:"7986",
            name:"Coffee Mix"
         },
         
         {
            prev:"images/belenco/belenco_exclusive/9933.jpg",
            main:"images/belenco/belenco_exclusive/9933lg.jpg",
            code:"9933",
            name:"Fancy Cherry"
         }
      ]
   },
   {
      group:"Fresh Fashion",
      photos:[
         {
            prev:"images/belenco/fresh_fashion/2552.jpg",
            main:"images/belenco/fresh_fashion/2552lg.jpg",
            code:"2552",
            name:"Kristella Grey"
         },
         
         {
            prev:"images/belenco/fresh_fashion/4199.jpg",
            main:"images/belenco/fresh_fashion/4199lg.jpg",
            code:"4199",
            name:"Krispino White"
         },
         
         {
            prev:"images/belenco/fresh_fashion/4262.jpg",
            main:"images/belenco/fresh_fashion/4262lg.jpg",
            code:"4262",
            name:"Kristella White"
         },
         
         {
            prev:"images/belenco/fresh_fashion/5151.jpg",
            main:"images/belenco/fresh_fashion/5151lg.jpg",
            code:"5151",
            name:"Kristalius Beige"
         },
         
         {
            prev:"images/belenco/fresh_fashion/5751.jpg",
            main:"images/belenco/fresh_fashion/5751lg.jpg",
            code:"5751",
            name:"Gala Black"
         }
      ]
   },
   {
      group:"Haute Couture",
      photos:[
         {
            prev:"images/belenco/haute_couture/4227.jpg",
            main:"images/belenco/haute_couture/4227lg.jpg",
            code:"4227",
            name:""
         },
         
         {
            prev:"images/belenco/haute_couture/4233.jpg",
            main:"images/belenco/haute_couture/4233lg.jpg",
            code:"4233",
            name:"Antique White"
         },
         
         {
            prev:"images/belenco/haute_couture/4444.jpg",
            main:"images/belenco/haute_couture/4444lg.jpg",
            code:"4444",
            name:"Sahara Beige"
         },
         
         {
            prev:"images/belenco/haute_couture/5329.jpg",
            main:"images/belenco/haute_couture/5329lg.jpg",
            code:"5329",
            name:"Mocca Mouse"
         },
         
         {
            prev:"images/belenco/haute_couture/7323.jpg",
            main:"images/belenco/haute_couture/7323lg.jpg",
            code:"7323",
            name:"Chestnut Cream"
         },
         
         {
            prev:"images/belenco/haute_couture/7329.jpg",
            main:"images/belenco/haute_couture/7329lg.jpg",
            code:"7329",
            name:"Venere White"
         },
         
         {
            prev:"images/belenco/haute_couture/7537.jpg",
            main:"images/belenco/haute_couture/7537lg.jpg",
            code:"7537",
            name:"Metropol Grey"
         },
         
         {
            prev:"images/belenco/haute_couture/8727.jpg",
            main:"images/belenco/haute_couture/8727lg.jpg",
            code:"8727",
            name:"Spa Black"
         }
      ]
   },
   {
      group:"Pret-A-Porter",
      photos:[
         {
            prev:"images/belenco/pret_a_porter/1150.jpg",
            main:"images/belenco/pret_a_porter/1150lg.jpg",
            code:"1150",
            name:"Dorato Gold "
         },
         
         {
            prev:"images/belenco/pret_a_porter/2110.jpg",
            main:"images/belenco/pret_a_porter/2110lg.jpg",
            code:"2110",
            name:"Angel White"
         },
         
         {
            prev:"images/belenco/pret_a_porter/2649.jpg",
            main:"images/belenco/pret_a_porter/2649lg.jpg",
            code:"2649",
            name:"Safari Brown "
         },
         
         {
            prev:"images/belenco/pret_a_porter/3630.jpg",
            main:"images/belenco/pret_a_porter/3630lg.jpg",
            code:"3630",
            name:"Praline"
         },
         
         {
            prev:"images/belenco/pret_a_porter/4640.jpg",
            main:"images/belenco/pret_a_porter/4640lg.jpg",
            code:"4640",
            name:"Gaia Brown"
         },
         
         {
            prev:"images/belenco/pret_a_porter/5139.jpg",
            main:"images/belenco/pret_a_porter/5139lg.jpg",
            code:"5139",
            name:"Juliet White"
         },
         
         {
            prev:"images/belenco/pret_a_porter/5250.jpg",
            main:"images/belenco/pret_a_porter/5250lg.jpg",
            code:"5250",
            name:"Elixir White"
         },
         
         {
            prev:"images/belenco/pret_a_porter/5539.jpg",
            main:"images/belenco/pret_a_porter/5539lg.jpg",
            code:"5539",
            name:"Pepper Mix"
         },
         
         {
            prev:"images/belenco/pret_a_porter/6547.jpg",
            main:"images/belenco/pret_a_porter/6547lg.jpg",
            code:"6547",
            name:"Cosmopol Grey"
         },
         
         {
            prev:"images/belenco/pret_a_porter/8720.jpg",
            main:"images/belenco/pret_a_porter/8720lg.jpg",
            code:"8720",
            name:"Royal Black"
         },
         
         {
            prev:"images/belenco/pret_a_porter/8850.jpg",
            main:"images/belenco/pret_a_porter/8850lg.jpg",
            code:"8850",
            name:"Orbit Black"
         }
         
      ]
   }
];


var silestone = [
   {
      group:"Cielo Series",
      photos:[
         {
            prev:"images/silestone/cielo_series/amarillo_sand.jpg",
            main:"images/silestone/cielo_series/amarillo_sandmain.jpg",
            title:"Amarillo Sand",
            hand: true
         },
         
         {
            prev:"images/silestone/cielo_series/orange_fuego.jpg",
            main:"images/silestone/cielo_series/orange_fuegomain.jpg",
            title:"Orange Fuego",
            hand: true
         },
         
         {
            prev:"images/silestone/cielo_series/silver_nube.jpg",
            main:"images/silestone/cielo_series/silver_nubemain.jpg",
            title:"Silver Nube",
            hand: true
         },
         
         {
            prev:"images/silestone/cielo_series/white_dune.jpg",
            main:"images/silestone/cielo_series/white_dunemain.jpg",
            title:"White Dune",
            hand: true
         }
      ]
   },
   {
      group:"Life Series",
      photos:[
         {
            prev:"images/silestone/life_series/blue_enjoy.jpg",
            main:"images/silestone/life_series/blue_enjoymain.jpg",
            title:"Blue Enjoy"
         },
         
         {
            prev:"images/silestone/life_series/green_fun.jpg",
            main:"images/silestone/life_series/green_funmain.jpg",
            title:"Green Fun"
         },
         
         {
            prev:"images/silestone/life_series/magenta_energy.jpg",
            main:"images/silestone/life_series/magenta_energymain.jpg",
            title:"Magenta Energy"
         },
         
         {
            prev:"images/silestone/life_series/orange_cool.jpg",
            main:"images/silestone/life_series/orange_coolmain.jpg",
            title:"Orange Cool",
            hand: true
         },
         
         {
            prev:"images/silestone/life_series/red_vital.jpg",
            main:"images/silestone/life_series/red_vitalmain.jpg",
            title:"Red Vital"
         },
         
         {
            prev:"images/silestone/life_series/yellow_dream.jpg",
            main:"images/silestone/life_series/yellow_dreammain.jpg",
            title:"Yellow Dream"
         }
      ]
   },
   {
      group:"Love To You Series",
      photos:[
         {
            prev:"images/silestone/lovetoyouseries/lavender_you.jpg",
            main:"images/silestone/lovetoyouseries/lavender_youmain.jpg",
            title:"Lavender You"
         },
         
         {
            prev:"images/silestone/lovetoyouseries/pink_love.jpg",
            main:"images/silestone/lovetoyouseries/pink_lovemain.jpg",
            title:"Pink Love"
         }
      ]
   },
   {
      group:"Mesopotamia Series",
      photos:[
         {
            prev:"images/silestone/mesopotamia_series/amarillo_palmira.jpg",
            main:"images/silestone/mesopotamia_series/amarillo_palmiramain.jpg",
            title:"Amarillo Palmira",
            hand: true
         },
         
         {
            prev:"images/silestone/mesopotamia_series/blue_sahara.jpg",
            main:"images/silestone/mesopotamia_series/blue_saharamain.jpg",
            title:"Blue Sahara",
            hand: true
         },
         
         {
            prev:"images/silestone/mesopotamia_series/kona_beige.jpg",
            main:"images/silestone/mesopotamia_series/kona_beigemain.jpg",
            title:"Kona Beige",
            hand: true
         },
         
         {
            prev:"images/silestone/mesopotamia_series/tea_leaf.jpg",
            main:"images/silestone/mesopotamia_series/tea_leafmain.jpg",
            title:"Tea Leaf",
            hand: true
         }
      ]
   },
   {
      group:"Mithology Series",
      photos:[
         {
            prev:"images/silestone/mithology_series/beige_olimpo.jpg",
            main:"images/silestone/mithology_series/beige_olimpomain.jpg",
            title:"Beige Olimpo",
            hand: true
         },
         
         {
            prev:"images/silestone/mithology_series/black_anubis.jpg",
            main:"images/silestone/mithology_series/black_anubismain.jpg",
            title:"Black Anubis",
            hand: true
         },
         
         {
            prev:"images/silestone/mithology_series/coral_troya.jpg",
            main:"images/silestone/mithology_series/coral_troyamain.jpg",
            title:"Coral Troya",
            hand: true
         },
         
         {
            prev:"images/silestone/mithology_series/grey_expo.jpg",
            main:"images/silestone/mithology_series/grey_expomain.jpg",
            title:"Grey Expo",
            hand: true,
            bubbles: true
        
         },
         
         {
            prev:"images/silestone/mithology_series/minerva_cream.jpg",
            main:"images/silestone/mithology_series/minerva_creammain.jpg",
            title:"Minerva Cream"
         },
         
         {
            prev:"images/silestone/mithology_series/red_eros.jpg",
            main:"images/silestone/mithology_series/red_erosmain.jpg",
            title:"Red Eros"
         },
         
         {
            prev:"images/silestone/mithology_series/tebas_black.jpg",
            main:"images/silestone/mithology_series/tebas_blackmain.jpg",
            title:"Tebas Black",
            hand: true
         },
         
         {
            prev:"images/silestone/mithology_series/white_north.jpg",
            main:"images/silestone/mithology_series/white_northmain.jpg",
            title:"White North",
            hand: true
         }
      ]
   },
   {
      group:"Mountain Series",
      photos:[
         {
            prev:"images/silestone/mountain_series/alpina_white.jpg",
            main:"images/silestone/mountain_series/alpina_whitemain.jpg",
            title:"Alpina White"
         },
         
         {
            prev:"images/silestone/mountain_series/black_canyon.jpg",
            main:"images/silestone/mountain_series/black_canyonmain.jpg",
            title:"Black Canyon"
         },
         
         {
            prev:"images/silestone/mountain_series/giallo_qarry.jpg",
            main:"images/silestone/mountain_series/giallo_qarrymain.jpg",
            title:"Giallo Qarry"
         },
         
         {
            prev:"images/silestone/mountain_series/mountain_mist.jpg",
            main:"images/silestone/mountain_series/mountain_mistmain.jpg",
            title:"Mountain Mist"
         },
         
         {
            prev:"images/silestone/mountain_series/sienna_ridge.jpg",
            main:"images/silestone/mountain_series/sienna_ridgemain.jpg",
            title:"Sienna Ridge"
         },
         
         {
            prev:"images/silestone/mountain_series/sierra_madre.jpg",
            main:"images/silestone/mountain_series/sierra_madremain.jpg",
            title:"Sierra Madre"
         }
      ]
   },
   {
      group:"Platinum Series",
      photos:[
         {
            prev:"images/silestone/platinum_series/carbono.jpg",
            main:"images/silestone/platinum_series/carbonomain.jpg",
            title:"Carbono",
            hand: true
        
         },
         
         {
            prev:"images/silestone/platinum_series/chrome.jpg",
            main:"images/silestone/platinum_series/chromemain.jpg",
            title:"Chrome",
            hand: true
         },
         
         {
            prev:"images/silestone/platinum_series/steel.jpg",
            main:"images/silestone/platinum_series/steelmain.jpg",
            title:"Steel",
            hand: true
         },
         
         {
            prev:"images/silestone/platinum_series/white_platinum.jpg",
            main:"images/silestone/platinum_series/white_platinummain.jpg",
            title:"White Platinum"
         },
         
         {
            prev:"images/silestone/platinum_series/zirconium.jpg",
            main:"images/silestone/platinum_series/zirconiummain.jpg",
            title:"Zirconium",
            hand: true
         }
      ]
   },
   {
      group:"River Series",
      photos:[
         {
            prev:"images/silestone/river_series/blanco_river.jpg",
            main:"images/silestone/river_series/blanco_rivermain.jpg",
            title:"Blanco River"
         },
         
         {
            prev:"images/silestone/river_series/caramel_rhine.jpg",
            main:"images/silestone/river_series/caramel_rhinemain.jpg",
            title:"Caramel Rhine",
            hand: true
         },
         
         {
            prev:"images/silestone/river_series/grey_amazon.jpg",
            main:"images/silestone/river_series/grey_amazonmain.jpg",
            title:"Grey Amazon",
            hand: true
         },
         
         {
            prev:"images/silestone/river_series/santa_fe_brown.jpg",
            main:"images/silestone/river_series/santa_fe_brownmain.jpg",
            title:"Santa Fe Brown",
            hand: true
         },
         
         {
            prev:"images/silestone/river_series/sonora_gold.jpg",
            main:"images/silestone/river_series/sonora_goldmain.jpg",
            title:"Sonora Gold",
            hand: true
         },
         
         {
            prev:"images/silestone/river_series/tigris_sand.jpg",
            main:"images/silestone/river_series/tigris_sandmain.jpg",
            title:"Tigris Sand",
            hand: true
         },
         
         {
            prev:"images/silestone/river_series/yellow_nile.jpg",
            main:"images/silestone/river_series/yellow_nilemain.jpg",
            title:"Yellow Nile",
            hand: true
         },
         
         {
            prev:"images/silestone/river_series/yukon_blanco.jpg",
            main:"images/silestone/river_series/yukon_blancomain.jpg",
            title:"Yukon Blanco",
            hand: true
         }
      ]
   },
   {
      group:"Stellar Series",
      photos:[
         {
            prev:"images/silestone/stellar_series/stellar_fire.jpg",
            main:"images/silestone/stellar_series/stellar_firemain.jpg",
            title:"Stellar Fire"
         },
         
         {
            prev:"images/silestone/stellar_series/stellar_marine.jpg",
            main:"images/silestone/stellar_series/stellar_marinemain.jpg",
            title:"Stellar Marine",
            hand: true
         },
         
         {
            prev:"images/silestone/stellar_series/stellar_night.jpg",
            main:"images/silestone/stellar_series/stellar_nightmain.jpg",
            title:"Stellar Night"
         },
         
         {
            prev:"images/silestone/stellar_series/stellar_rose.jpg",
            main:"images/silestone/stellar_series/stellar_rosemain.jpg",
            title:"Stellar Rose",
            hand: true
         },
         
         {
            prev:"images/silestone/stellar_series/stellar_snow.jpg",
            main:"images/silestone/stellar_series/stellar_snowmain.jpg",
            title:"Stellar Snow",
            hand: true
         },
         
         {
            prev:"images/silestone/stellar_series/stellar_sun.jpg",
            main:"images/silestone/stellar_series/stellar_sunmain.jpg",
            title:"Stellar Sun",
            hand: true
         }
      ]
   },
   {
      group:"Stone Series",
      photos:[
         {
            prev:"images/silestone/stone_series/absolute_green.jpg",
            main:"images/silestone/stone_series/absolute_greenmain.jpg",
            title:"Absolute Green",
            hand: true
         },
         
         {
            prev:"images/silestone/stone_series/blanco_city.jpg",
            main:"images/silestone/stone_series/blanco_citymain.jpg",
            title:"Blanco City"
         },
         
         {
            prev:"images/silestone/stone_series/blanco_maple.jpg",
            main:"images/silestone/stone_series/blanco_maplemain.jpg",
            title:"Blanco Maple",
            hand: true
         },
         
         {
            prev:"images/silestone/stone_series/capri_limestone.jpg",
            main:"images/silestone/stone_series/capri_limestonemain.jpg",
            title:"Capri Limestone"
         },
         
         {
            prev:"images/silestone/stone_series/coffe_brown.jpg",
            main:"images/silestone/stone_series/coffe_brownmain.jpg",
            title:"Coffe Brown",
            hand: true
         },
         
         {
            prev:"images/silestone/stone_series/diana_pearl.jpg",
            main:"images/silestone/stone_series/diana_pearlmain.jpg",
            title:"Diana Pearl",
            hand: true
         },
         
         {
            prev:"images/silestone/stone_series/kalahari.jpg",
            main:"images/silestone/stone_series/kalaharimain.jpg",
            title:"Kalahari",
            hand: true
         },
         
         {
            prev:"images/silestone/stone_series/mont_blanc.jpg",
            main:"images/silestone/stone_series/mont_blancmain.jpg",
            title:"Mont Blanc",
            hand: true
         },
         
         {
            prev:"images/silestone/stone_series/rosa_grey.jpg",
            main:"images/silestone/stone_series/rosa_greymain.jpg",
            title:"Rosa Grey",
            hand: true
         },
         
         {
            prev:"images/silestone/stone_series/urban_cream.jpg",
            main:"images/silestone/stone_series/urban_creammain.jpg",
            title:"Urban Cream"
         }
      ]
   },
   {
      group:"Tropical Forest Series",
      photos:[
         {
            prev:"images/silestone/tropical_forest_series/african_red.jpg",
            main:"images/silestone/tropical_forest_series/african_redmain.jpg",
            title:"African Red"
         },
         
         {
            prev:"images/silestone/tropical_forest_series/bamboo.jpg",
            main:"images/silestone/tropical_forest_series/bamboomain.jpg",
            title:"Bamboo"
         },
         
         {
            prev:"images/silestone/tropical_forest_series/brazilian_brown.jpg",
            main:"images/silestone/tropical_forest_series/brazilian_brownmain.jpg",
            title:"Brazilian Brown",
            hand: true
         },
         
         {
            prev:"images/silestone/tropical_forest_series/ebony_pearl.jpg",
            main:"images/silestone/tropical_forest_series/ebony_pearlmain.jpg",
            title:"Ebony Pearl",
            hand: true
         },
         
         {
            prev:"images/silestone/tropical_forest_series/ivory_coast.jpg",
            main:"images/silestone/tropical_forest_series/ivory_coastmain.jpg",
            title:"Ivory Coast",
            hand: true
         },
         
         {
            prev:"images/silestone/tropical_forest_series/mahogany.jpg",
            main:"images/silestone/tropical_forest_series/mahoganymain.jpg",
            title:"Mahogany",
            hand: true
         },
         
         {
            prev:"images/silestone/tropical_forest_series/rainforest.jpg",
            main:"images/silestone/tropical_forest_series/rainforestmain.jpg",
            title:"Rainforest",
            hand: true
         }
      ]
   },
   {
      group:"Volcano Series",
      photos:[
         {
            prev:"images/silestone/volcano_series/grey_expo.jpg",
            main:"images/silestone/volcano_series/grey_expomain.jpg",
            title:"Grey Expo",
            hand: true,
            bubbles: true
        

         },
         
         {
            prev:"images/silestone/volcano_series/haiku.jpg",
            main:"images/silestone/volcano_series/haikumain.jpg",
            title:"Haiku",
            hand: true,
            bubbles: true
        
         },
         
         {
            prev:"images/silestone/volcano_series/kensho.jpg",
            main:"images/silestone/volcano_series/kenshomain.jpg",
            title:"Kensho",
            hand: true,
            bubbles: true
        
         },
         
         {
            prev:"images/silestone/volcano_series/nult_bleue.jpg",
            main:"images/silestone/volcano_series/nult_bleuemain.jpg",
            title:"Nult Bleue",
            hand: true,
            bubbles: true
        
         },
         
         {
            prev:"images/silestone/volcano_series/white_zeus.jpg",
            main:"images/silestone/volcano_series/white_zeusmain.jpg",
            title:"White Zeus",
            hand: true,
            bubbles: true
        
         }
      ]
   },
   {
      group:"Zen Series",
      photos:[
         {
            prev:"images/silestone/zen_series/gedatsu.jpg",
            main:"images/silestone/zen_series/gedatsumain.jpg",
            title:"Gedatsu"
         },
         
         {
            prev:"images/silestone/zen_series/haiku.jpg",
            main:"images/silestone/zen_series/haikumain.jpg",
            title:"Haiku",
            hand: true,
            bubbles: true
        
         },
         
         {
            prev:"images/silestone/zen_series/kensho.jpg",
            main:"images/silestone/zen_series/kenshomain.jpg",
            title:"Kensho",
            hand: true,
            bubbles: true
        
         },
         
         {
            prev:"images/silestone/zen_series/koan.jpg",
            main:"images/silestone/zen_series/koanmain.jpg",
            title:"Koan"
         },
         
         {
            prev:"images/silestone/zen_series/satori.jpg",
            main:"images/silestone/zen_series/satorimain.jpg",
            title:"Satori"
         },
         
         {
            prev:"images/silestone/zen_series/tao.jpg",
            main:"images/silestone/zen_series/taomain.jpg",
            title:"Tao"
         },
         
         {
            prev:"images/silestone/zen_series/unsui.jpg",
            main:"images/silestone/zen_series/unsuimain.jpg",
            title:"Unsui"
         },
         
         {
            prev:"images/silestone/zen_series/white_zeus.jpg",
            main:"images/silestone/zen_series/white_zeusmain.jpg",
            title:"White Zeus",
            hand: true,
            bubbles: true
        
         }
      ]
   }
];
     var testimonials = [{
             image: "./images/testimonials/1.jpg",
             customer: "John Gross",
             feedback: "I absolutely LOVE my countertops. I will definitely refer others!"
         }, {
             image: "./images/testimonials/2.jpg",
             customer: "Peter Tan",
             feedback: "I would like to thank Vlat and his team for a quick turnaround from granite selection to final installation. Their installers did a remarkable job! They were very helpful and gave valuable advice about my kitchen countertop/cabinets. My kitchen cabinets are imbalanced, and instead of just doing the job, they were very concerned with this.  I am really impressed with the outcome. The kitchen looks beautiful!  "
         }, {
             image: "./images/testimonials/3.jpg",
             customer: "Robert & Elaine Bell",
             feedback: "We are very pleased with the installation of our new counter tops.  They look great.  You run a nice family business and you treated us fairly, good prices and good workmanship, you also made us feel like family.  A nice all around experieince. "
         }, {
             image: "./images/testimonials/4.jpg",
             customer: "Bobby Verma",
             feedback: "I just moved to a new home and wanted to replace the builder supplied counter with granite and marble ones for the Kitchen and the two washroom. I came across Toronto Granite and was every impressed initially with the professionalism, friendliness, and pricing. Upon approval of the quaote, the installation was done to my complete satisfaction. We had one minor issue, but the resolved it to my satisfaction, and it provided me with further insight into their professionalism and customer responsiveness. I would highly recommend on all three fronts: Price, Installation, and Service"
         }, {
             image: "./images/testimonials/5.jpg",
             customer: "N. Thomas",
             feedback: "Fantastic communications, great people to deal with outstanding pirce, clean professional  installation.I would highly recommend Bob and his team and without a doubt will use the company's services in the future."
         }, {
             image: "./images/testimonials/6.jpg",
             customer: "Mike & Pam Luck",
             feedback: "I have attached some photos of our kitchen and it looks great. Everyone who visits comments on the countertops. We enjoy them tremendously. They are easy to use and stand up to any abuse. They really are the focal point of the kitchen. Thanks for all your help."
         }, {
             image: "./images/testimonials/7.jpg",
             customer: "Branislav Petrovic",
             feedback: "Great job guys...Love our kitchen counters. What a difference...Thank you!!!"
         }, {
             image: "./images/testimonials/8.jpg",
             customer: "Ruth and Tom",
             feedback: "These guys are the real deal. It seemed too good to be true, but it wasn't. They delivered exactly what we agreed upon with friendly, helpful service. They took pride in thier product and thier work. We have already recommended them to many friends who love our kitchen as much as we do."
         }, {
             image: "./images/testimonials/9.jpg",
             customer: "Melita and Amir",
             feedback: "Too good to be true but this company is for real. Incredible service and top notch quality. Granite was installed in three day after placing order. Much better than the three months it took to get our cabinets. Thank you TorontoGranite.com for completing our dream kitchen."
         }, {
             image: "./images/testimonials/10.jpg",
             customer: "Jeff and Betty",
             feedback: "We recently had a small condo kitchen countertop installed by Toronto Granite.  We were impressed by the pricing at first, but were extremely impressed by the installation of this small job.  The installers were professional, clean and extremely dedicated to the details of installation including clean-up. We would recommended them to anyone for price and installation."
         }, {
             image: "./images/testimonials/11.jpg",
             customer: "Zlatko and Lisa Cetinic",
             feedback: "Professional, polite and precise. We were over the top about the level of service. They did what they said they were going to do without any financial surprises at the end of the job. They were extremely nice people that knew exactly what they were doing."
         }, {
             image: "./images/testimonials/12.jpg",
             customer: "Hayden Watkins",
             feedback: "You guys were great. The kitchen looks very nice now."
         }, {
             image: "./images/testimonials/13.jpg",
             customer: "Damir Maric",
             feedback: "Without reservation, I will be recommending to all, the professional, dedicated and reliable team of Toronto Granite. From their qualified informative sales team , who unmistakably know, at a meare glance, what would suit your needs, to their unbelievably professional and expeditive installers..I cannot express in words the gradification i feel as a client. To the team of Toronto Granite, a big Thank you! Peace of mind guaranteed should be your hallmark."
         }, {
             image: "./images/testimonials/14.jpg",
             customer: "Ilija & Jovanka Marinkovski",
             feedback: "We love our kitchen!  Toronto Granite was friendly, reliable, efficient with a vast inventory of granite, sinks and faucets.  Most importantly the workmanship was like no other.  They have done a wonderful job for us, thank you for everything Toronto Granite!!!!"
         }, {
             image: "./images/testimonials/15.jpg",
             customer: "Matilda",
             feedback: "My granite countertops look fabulous...I absolutely love them...great job! Nice friendly people...many thanks to the whole team!  :)"
         }, {
             image: "./images/testimonials/16.jpg",
             customer: "Anne Winterburn",
             feedback: "We looked around quite a bit but ended up going back to Toronto Granite who were our first choice.  Everyone was so helpful.  We chose a granite which we loved and it was measured and installed in a short time.  They certainly know their stuff.  Thanks guys.  Looks great.   The pictures don't do it justice."
         }, {
             image: "./images/testimonials/17.jpg",
             customer: "Lisa & George Leff",
             feedback: "Brad and Dan have literally just left after installing granite in our kitchen. We felt impelled to write immediately. We have almost finished a main floor reno and have come into contact with many specialists in their areas along the way; but none compete with the professionalism, knowledge and customer service of Brad and Dan. They are true stars of the company and our granite is more than we ever expected it to be. Thank you TorontoGranite.com but thank you most to Brad and Dan, we will certainly be recommending you to friends and family! Keep up the good work, there's too few like you."
         }    



     ];     
     var suppliers = [

         {
             image: "./images/suppliers/1.png",
             href: "http://www.silestoneusa.com/"
         }, {
             image: "./images/suppliers/2.png",
             href: "http://TorenFonder.com"
         }, {
             image: "./images/suppliers/3.png",
             href: "http://artisanstyles.com/"
         }, {
             image: "./images/suppliers/4.png",
             href: "http://www.stonesmds.com/"
         }, {
             image: "./images/suppliers/5.png",
             href: "http://www.richelieu.com/"
         }, {
             image: "./images/suppliers/6.png",
             href: "http://www.caesarstone.ca/"
         }
     ];
     var commercial = [
        {
            image:"./images/commercial/11prev.jpg",
            href:"./images/commercial/11.jpg"
        },
        {
            image:"./images/commercial/22_antolini_onice_biancoprev.jpg",
            href:"./images/commercial/22_antolini_onice_bianco.jpg"
        },
        {
            image:"./images/commercial/cntower_bars_003prev.jpg",
            href:"./images/commercial/cntower_bars_003.jpg"
        },
        {
            image:"./images/commercial/cntower_bars_011prev.jpg",
            href:"./images/commercial/cntower_bars_011.jpg"
        },
        {
            image:"./images/commercial/cntower_bars_037prev.jpg",
            href:"./images/commercial/cntower_bars_037.jpg"
        },
        {
            image:"./images/commercial/house_018prev.jpg",
            href:"./images/commercial/house_018.jpg"
        },
        {
            image:"./images/commercial/house_176prev.jpg",
            href:"./images/commercial/house_176.jpg"
        },
        {
            image:"./images/commercial/img_8737_revisedprev.jpg",
            href:"./images/commercial/img_8737_revised.jpg"
        },
        {
            image:"./images/commercial/img_8783prev.jpg",
            href:"./images/commercial/img_8783.jpg"
        },
        {
            image:"./images/commercial/neptunus-011prev.jpg",
            href:"./images/commercial/neptunus-011.jpg"
        },
        {
            image:"./images/commercial/neptunus-025prev.jpg",
            href:"./images/commercial/neptunus-025.jpg"
        },
        {
            image:"./images/commercial/shoppingmallinlayprev.jpg",
            href:"./images/commercial/shoppingmallinlay.jpg"
        },
        {
            image:"./images/commercial/toronto_granite_olly_frescos_0015prev.jpg",
            href:"./images/commercial/toronto_granite_olly_frescos_0015.jpg"
        },
        {
            image:"./images/commercial/toronto_granite_olly_frescos_0031prev.jpg",
            href:"./images/commercial/toronto_granite_olly_frescos_0031.jpg"
        },
        {
            image:"./images/commercial/toronto_granite_olly_frescos_0056prev.jpg",
            href:"./images/commercial/toronto_granite_olly_frescos_0056.jpg"
        },
        {
            image:"./images/commercial/torontogranite_031prev.jpg",
            href:"./images/commercial/torontogranite_031.jpg"
        },
        {
            image:"./images/commercial/torontogranite_052prev.jpg",
            href:"./images/commercial/torontogranite_052.jpg"
        },
        {
            image:"./images/commercial/torontogranite_069prev.jpg",
            href:"./images/commercial/torontogranite_069.jpg"
        },
        {
            image:"./images/commercial/ubatubachurchprev.jpg",
            href:"./images/commercial/ubatubachurch.jpg"
        }                                                                                                                                             
    ];
 var residental = [
        {
            image:"./images/residental/013prev.jpg",
            href:"./images/residental/013.jpg"
        },
        {
            image:"./images/residental/2009_newstart_homes___cayman___2350_latte_005__1_.jpgprev.jpg",
            href:"./images/residental/2009_newstart_homes___cayman___2350_latte_005__1_.jpg.jpg"
        },
        {
            image:"./images/residental/964023952_lavabo-riviera1prev.jpg",
            href:"./images/residental/964023952_lavabo-riviera1.jpg"
        },
        {
            image:"./images/residental/artofkitchens_cremorne_001_3141_osprey.jpgprev.jpg",
            href:"./images/residental/artofkitchens_cremorne_001_3141_osprey.jpg.jpg"
        },
        {
            image:"./images/residental/ashton3prev.jpg",
            href:"./images/residental/ashton3.jpg"
        },
        {
            image:"./images/residental/biancoprev.jpg",
            href:"./images/residental/bianco.jpg"
        },
        {
            image:"./images/residental/concetto_white-quartz-06prev.jpg",
            href:"./images/residental/concetto_white-quartz-06.jpg"
        },
        {
            image:"./images/residental/cosmic black2prev.jpg",
            href:"./images/residental/cosmic black2.jpg"
        },
        {
            image:"./images/residental/dlattach (4)prev.jpg",
            href:"./images/residental/dlattach (4).jpg"
        },
        {
            image:"./images/residental/dsc02250-2prev.jpg",
            href:"./images/residental/dsc02250-2.jpg"
        },
        {
            image:"./images/residental/house_038prev.jpg",
            href:"./images/residental/house_038.jpg"
        },
        {
            image:"./images/residental/house_048prev.jpg",
            href:"./images/residental/house_048.jpg"
        },
        {
            image:"./images/residental/house_126prev.jpg",
            href:"./images/residental/house_126.jpg"
        },
        {
            image:"./images/residental/house_188prev.jpg",
            href:"./images/residental/house_188.jpg"
        },
        {
            image:"./images/residental/house_225prev.jpg",
            href:"./images/residental/house_225.jpg"
        },
        {
            image:"./images/residental/house_233prev.jpg",
            href:"./images/residental/house_233.jpg"
        },
        {
            image:"./images/residental/img_8451_1prev.jpg",
            href:"./images/residental/img_8451_1.jpg"
        },
        {
            image:"./images/residental/img_8503_1prev.jpg",
            href:"./images/residental/img_8503_1.jpg"
        },
        {
            image:"./images/residental/img_8529_1prev.jpg",
            href:"./images/residental/img_8529_1.jpg"
        },
        {
            image:"./images/residental/img_8621_1prev.jpg",
            href:"./images/residental/img_8621_1.jpg"
        },
        {
            image:"./images/residental/iron red 3prev.jpg",
            href:"./images/residental/iron red 3.jpg"
        },
        {
            image:"./images/residental/islandw_eggshellprev.jpg",
            href:"./images/residental/islandw_eggshell.jpg"
        },
        {
            image:"./images/residental/kitchen_3_copyright_polytec_2011.jpgprev.jpg",
            href:"./images/residental/kitchen_3_copyright_polytec_2011.jpg.jpg"
        },
        {
            image:"./images/residental/newhaven_metricon01__9141.jpgprev.jpg",
            href:"./images/residental/newhaven_metricon01__9141.jpg.jpg"
        },
        {
            image:"./images/residental/platoprev.jpg",
            href:"./images/residental/plato.jpg"
        },
        {
            image:"./images/residental/southeast_stone_caesarstone_osprey.jpgprev.jpg",
            href:"./images/residental/southeast_stone_caesarstone_osprey.jpg.jpg"
        },
        {
            image:"./images/residental/toronto granite_010prev.jpg",
            href:"./images/residental/toronto granite_010.jpg"
        },
        {
            image:"./images/residental/toronto granite_014prev.jpg",
            href:"./images/residental/toronto granite_014.jpg"
        },
        {
            image:"./images/residental/toronto granite_16_pinehurst_cr_0028 (2)prev.jpg",
            href:"./images/residental/toronto granite_16_pinehurst_cr_0028 (2).jpg"
        },
        {
            image:"./images/residental/toronto granite_017prev.jpg",
            href:"./images/residental/toronto granite_017.jpg"
        },                                                                                                                            
        {
            image:"./images/residental/toronto granite_026prev.jpg",
            href:"./images/residental/toronto granite_026.jpg"
        },
        {
            image:"./images/residental/toronto granite_028prev.jpg",
            href:"./images/residental/toronto granite_028.jpg"
        },
        {
            image:"./images/residental/toronto granite_036prev.jpg",
            href:"./images/residental/toronto granite_036.jpg"
        },
        {
            image:"./images/residental/toronto granite_050prev.jpg",
            href:"./images/residental/toronto granite_050.jpg"
        },
        {
            image:"./images/residental/toronto granite_089prev.jpg",
            href:"./images/residental/toronto granite_089.jpg"
        },
        {
            image:"./images/residental/toronto granite_514_cullen_ave_0031 (2)prev.jpg",
            href:"./images/residental/toronto granite_514_cullen_ave_0031 (2).jpg"
        },
        {
            image:"./images/residental/toronto granite_514_cullen_ave_0058prev.jpg",
            href:"./images/residental/toronto granite_514_cullen_ave_0058.jpg"
        },
        {
            image:"./images/residental/toronto_granite_171prev.jpg",
            href:"./images/residental/toronto_granite_171.jpg"
        },
        {
            image:"./images/residental/toronto_granite_177prev.jpg",
            href:"./images/residental/toronto_granite_177.jpg"
        },
        {
            image:"./images/residental/toronto_granite_198prev.jpg",
            href:"./images/residental/toronto_granite_198.jpg"
        },
        {
            image:"./images/residental/whitesnowstorm_06prev.jpg",
            href:"./images/residental/whitesnowstorm_06.jpg"
        }


                                                                                                                                          
    ];    
     var slab = [{
             image: "./images/slabinventory/prevalaskawhite.jpg",
             title: "Alaska White"

         }, {
             image: "./images/slabinventory/prevandromedawhite.jpg",
             title: "Andromeda White"

         }, {
             image: "./images/slabinventory/prevantiquebrown.jpg",
             title: "Antique Brown"

         }, {
             image: "./images/slabinventory/prevantiquepersa.jpg",
             title: "Antique Persa"

         }, {
             image: "./images/slabinventory/prevaquarella.jpg",
             title: "Aquarella"

         }, {
             image: "./images/slabinventory/prevarena.jpg",
             title: " Arena"

         }, {
             image: "./images/slabinventory/prevastrix.jpg",
             title: "Astrix"

         }, {
             image: "./images/slabinventory/prevaustralcoffee.jpg",
             title: "Austral Coffe"

         }, {
             image: "./images/slabinventory/prevbarricatto.jpg",
             title: "Baricatto"

         }, {
             image: "./images/slabinventory/prevbiancoantico.jpg",
             title: "Bianco Antico"

         }, {
             image: "./images/slabinventory/prevbiancocalacatta.jpg",
             title: "Bianco Calacatta"

         }, {
             image: "./images/slabinventory/prevbiancoquartzite.jpg",
             title: "Bianco Quartzite"

         }, {
             image: "./images/slabinventory/prevblueinthenight.jpg",
             title: "Blue In The Night"

         }, {
             image: "./images/slabinventory/prevblueturtle.jpg",
             title: "Blue Turtle"

         }, {
             image: "./images/slabinventory/prevbrecciaimperial.jpg",
             title: "Breccia Imperial"

         }, {
             image: "./images/slabinventory/prevbronozzo.jpg",
             title: "Bronozzo"

         }, {
             image: "./images/slabinventory/prevbrownchocolate.jpg",
             title: "Brown Chocolate"

         }, {
             image: "./images/slabinventory/prevbrunello.jpg",
             title: "Brunello"

         }, {
             image: "./images/slabinventory/prevcohibabordeaux.jpg",
             title: "Cohida Bordeaux"

         }, {
             image: "./images/slabinventory/prevcolonialcream.jpg",
             title: "Colonial Cream"

         }, {
             image: "./images/slabinventory/prevcolosseum.jpg",
             title: "Colosseum"

         }, {
             image: "./images/slabinventory/prevcoppercanyon.jpg",
             title: "Cooper Canyon"

         }, {
             image: "./images/slabinventory/prevcosmicblack.jpg",
             title: "Cosmic Black"

         }, {
             image: "./images/slabinventory/prevcosmuz.jpg",
             title: "Cosmuz"

         }, {
             image: "./images/slabinventory/prevcrazyhorse.jpg",
             title: "Crazy House"

         }, {
             image: "./images/slabinventory/prevcremabordeaux.jpg",
             title: "Crema Bordeaux"

         }, {
             image: "./images/slabinventory/prevcuritiba.jpg",
             title: "Curitiba"

         }, {
             image: "./images/slabinventory/prevdelicatus.jpg",
             title: "Delicatus"

         }, {
             image: "./images/slabinventory/prevelegantbrown.jpg",
             title: "Elegant Brown"

         }, {
             image: "./images/slabinventory/prevfirebordeaux.jpg",
             title: "Fire Bordeaux"

         }, {
             image: "./images/slabinventory/prevfusion.jpg",
             title: "Fusion"

         }, {
             image: "./images/slabinventory/prevgiallomacaubas.jpg",
             title: "Gialloma Caubas"

         }, {
             image: "./images/slabinventory/prevgoldencrystal.jpg",
             title: "Golden Crystal"

         }, {
             image: "./images/slabinventory/prevgoldendubai.jpg",
             title: "Golden Dubai"

         }, {
             image: "./images/slabinventory/prevgoldensun.jpg",
             title: "Golden Sun"

         }, {
             image: "./images/slabinventory/prevgreenlentin.jpg",
             title: "Green Lentin"

         }, {
             image: "./images/slabinventory/previcebrown.jpg",
             title: "Ice Brown"

         }, {
             image: "./images/slabinventory/previcewhite.jpg",
             title: "Ice White"

         }, {
             image: "./images/slabinventory/previronred.jpg",
             title: "Ironred"

         }, {
             image: "./images/slabinventory/prevjuparanabordeaux.jpg",
             title: "Juparana Bordeaux"

         }, {
             image: "./images/slabinventory/prevjuparanapersa.jpg",
             title: "Juparana Persa"

         }, {
             image: "./images/slabinventory/prevlabradorantique.jpg",
             title: "Labrador Antique"

         }, {
             image: "./images/slabinventory/prevlapidus.jpg",
             title: "Lapidus"

         }, {
             image: "./images/slabinventory/prevlatino.jpg",
             title: "Latino"

         }, {
             image: "./images/slabinventory/prevlincenity.jpg",
             title: "Lincenity"

         }, {
             image: "./images/slabinventory/prevlumex.jpg",
             title: "Lumex"

         }, {
             image: "./images/slabinventory/prevmaduragold.jpg",
             title: "Madura Gold"

         }, {
             image: "./images/slabinventory/prevmajesticbrown.jpg",
             title: "Majestic Brown"

         }, {
             image: "./images/slabinventory/prevmascalzone.jpg",
             title: "Masca Alzone"

         }, {
             image: "./images/slabinventory/prevmascarello.jpg",
             title: "Mascarello"

         }, {
             image: "./images/slabinventory/prevmatrix.jpg",
             title: "Matrix"

         }, {
             image: "./images/slabinventory/prevmetallica.jpg",
             title: "Metallica"

         }, {
             image: "./images/slabinventory/prevmetallicus.jpg",
             title: "Metallicus"

         }, {
             image: "./images/slabinventory/prevmombasa.jpg",
             title: "Mombasa"

         }, {
             image: "./images/slabinventory/prevmontebello.jpg",
             title: "Montebello"

         }, {
             image: "./images/slabinventory/prevnacarado.jpg",
             title: "Nacarado"

         }, {
             image: "./images/slabinventory/prevneptunobordeaux.jpg",
             title: "Neptun Bordeaux"

         }, {
             image: "./images/slabinventory/prevparthenon.jpg",
             title: "Partheon"

         }, {
             image: "./images/slabinventory/prevperlinobianco.jpg",
             title: "Perlino Bianco"

         }, {
             image: "./images/slabinventory/prevpersacaravelas.jpg",
             title: "Persa Caravelas"

         }, {
             image: "./images/slabinventory/prevpersapearl.jpg",
             title: "Persa Pearl"

         }, {
             image: "./images/slabinventory/prevpersascuri.jpg",
             title: "Persa Scuri"

         }, {
             image: "./images/slabinventory/prevpurpledunes.jpg",
             title: "Purple Dunes"

         }, {
             image: "./images/slabinventory/prevrainforestbrown.jpg",
             title: "Rainforest Brown"

         }, {
             image: "./images/slabinventory/prevrainforestgreen.jpg",
             title: "Rainforest Green"

         }, {
             image: "./images/slabinventory/prevredhollywood.jpg",
             title: "Red Hollywood"

         }, {
             image: "./images/slabinventory/prevriverbordeaux.jpg",
             title: "River Bordeaux"

         }, {
             image: "./images/slabinventory/prevromaimperial.jpg",
             title: "Roma Imperial"

         }, {
             image: "./images/slabinventory/prevsiennabeige.jpg",
             title: "Sienna Beige"

         }, {
             image: "./images/slabinventory/prevsiennabordeaux.jpg",
             title: "Sienna Bordeaux"

         }, {
             image: "./images/slabinventory/prevsilvergalaxy.jpg",
             title: "Silver Galaxy"

         }, {
             image: "./images/slabinventory/prevsilverwave.jpg",
             title: "Silver Wave"

         }, {
             image: "./images/slabinventory/prevsoapstone.jpg",
             title: "Soapstone"

         }, {
             image: "./images/slabinventory/prevspectrus.jpg",
             title: "Spectrus"

         }, {
             image: "./images/slabinventory/prevspringwhite.jpg",
             title: "Spring White"

         }, {
             image: "./images/slabinventory/prevstonewood.jpg",
             title: "Stone Wood"

         }, {
             image: "./images/slabinventory/prevstonewood2.jpg",
             title: "Stone Wood 2"

         }, {
             image: "./images/slabinventory/prevsunflower.jpg",
             title: "Sun Flower"

         }, {
             image: "./images/slabinventory/prevsuperwhite.jpg",
             title: "Super White"

         }, {
             image: "./images/slabinventory/prevsymphony.jpg",
             title: "Sumphony"

         }, {
             image: "./images/slabinventory/prevtiguan.jpg",
             title: "Tiguan"

         }, {
             image: "./images/slabinventory/prevtoupegold.jpg",
             title: "Topegold"

         }, {
             image: "./images/slabinventory/prevturquoise.jpg",
             title: "Turquoise"

         }, {
             image: "./images/slabinventory/prevtyphoonbordeaux.jpg",
             title: "Typhoon Bordeaux"

         }, {
             image: "./images/slabinventory/prevtyphoongreen.jpg",
             title: "Typhoon Green"

         }, {
             image: "./images/slabinventory/prevtyphoonpurple.jpg",
             title: "Typhoon Purple"

         }, {
             image: "./images/slabinventory/prevverdebamboo.jpg",
             title: "Verdebamdoo"

         }, {
             image: "./images/slabinventory/prevverdefucco.jpg",
             title: "Verde Fucco"

         }, {
             image: "./images/slabinventory/prevvialactea.jpg",
             title: "Vialactea"

         }, {
             image: "./images/slabinventory/prevvintage.jpg",
             title: "Vintage"

         }, {
             image: "./images/slabinventory/prevwhitegalaxy.jpg",
             title: "White Galaxy"

         }


     ];

     this.getSuppliers = function() {
         //          console.log("in func ",suppliers)
         return suppliers;
     }

     this.testimonials = function() {
         //          console.log("in func ",suppliers)
         return testimonials;
     }     
     this.getSlab = function() {
         //          console.log("in func ",suppliers)
         return slab;
     }
     this.getCommercial = function() {
         //          console.log("in func ",suppliers)
         return commercial;
     }
     this.getResidental = function() {
         //          console.log("in func ",suppliers)
         return residental;
     }
     this.getCaesarstone = function() {
        return caesarstone;
     }        
     this.getDesert = function() {

        return desert;
     }
     this.getSilestone = function() {

        return silestone;
     }
     this.getBelenco = function() {

        return belenco;
     }
     this.getDiamastone = function () {
        return diamastone;
     }                         

     this.getSliders = function(type) {
         var targetSliders = [];
         angular.forEach(sliders, function(sliders) {
             if (sliders.type == type) targetSliders.push(sliders);
         });
         return targetSliders;
     }

 })