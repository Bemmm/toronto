angular.module('myapp', ["ngRoute",
                          "ui.bootstrap",
                          "storageMod",
                          "faq",
                          "imageLoader"
                                ])
.controller('TabsDemoCtrl', function ($scope, $window) {

})

.controller('ModalDemoCtrl', function ($scope, $modal, $log) {

  $scope.items = ['item1', 'item2', 'item3'];

  $scope.animationsEnabled = true;

  $scope.open = function (size) {

    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: '/page/testimonial-form.html'
  
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

    $scope.belencoOpen = function (item, group) {
    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: '/page/belenco-tmpl.html',
      controller: 'ModalInstanceCtrl',
      size: '300',
      resolve: {
        items: function () {
          return item;
        },
        group: function(){
          return group;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

})

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

.controller('ModalInstanceCtrl', function ($scope, $modalInstance, items, group) {
  $scope.group = group;
  console.log( 'asdasd'+ $scope.group);
  $scope.items = items;
  console.log($scope.items);
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
})

.controller('AccordionDemoCtrl', function ($scope) {
  $scope.oneAtATime = true;

  

      $scope.class = "your class"

      $scope.changeClass = function(){
          
          $scope.class = "new class";
        
      }
    




  $scope.granite = [
    {
      title: 'What is granite?',
      content: 'Granite is defined as a visibly granular, igneous rock generally ranging in colour from pink to light or dark gray and consisting mostly of quartz and feldspars accompanied by one or more dark minerals. The texture is typically homogenous but may be gneissic or prophetic.'
    },
    {
      title: 'Where does granite come from and how is it quarried?',
      content: 'Granite, is quarried at different locations throughout the world. Hundreds of colors and patterns are available from such countries as Brasil, Italy, Spain, Norway, India, and Canada, Typically, blocks are extracted from the granite quarry located high in the mountains on the outskirts of a major city. These blocks, averaging 9 feet by 5 feet by 5 feet deep in size are transported down the mountain to the fabrication plant in the city. Once at the plant, these blocks are either cut into tiles or slabs. Slabs sizes usually vary depending on overall block size. Average slab sizes are usually 9 feet by 5 feet and are typically 3/4" (2 cm) or 1 1/4. (3 cm) in thickness. After the slabs are cut, they are sent through a large multi-head polishing machine, which puts a natural shine on the face of the stone using abrasive compound bricks or diamond polishing discs. Several other finishes can be applied to the slabs at this time such as a honed finish or, on some granite, a flamed finish. By far, the most popular finish tends to be the high polish.'
    },
    {
      title: 'What colours are granites available in?',
      content: 'Granites are available in a wide range of colours and veining. There are beige colours, Emerald green tones, Reds, Blacks, Violets, Mauves and a host of others. The colour of the stone is dependent upon what region of the world the stone comes from. Some colours have been in use for hundreds of years; others are fairly new to the market. The size of the quarry, its location, accessibility and demand for the material will affect pricing. Labour costs in various countries also affects material costs. Technology is not the same in all countries, so beware of stones manufactured with inferior and outdated technology. These materials are usually not difficult to spot.'
    },
    {
      title: 'What should I know about colour variation & veining?',
      content: 'When granite is purchased within the same lot or bundle, variations in colour and veining should be expected and considered. In this situation, each slab when viewed overall will look like it belongs with the remainder of the lot. In most cases, bundles of slabs are cut consecutively from the same block so as to keep colour and veining consistent. When granite is purchased at different times or from different lots and bundles, extreme variation in colour and veining can occur. As quarrying continues, materials from different sections of the quarry or from different depths of the quarry can vary greatly. In certain cases, quarries have run out of certain shades or the veining has changed so drastically that current lots no longer match previous lots. For these reasons, it is important to purchase sufficient quantities at the same time or verify that additional material of the same lot is indeed available for a later purchase. Being a natural stone, variations from shipment to shipment or lot to lot cannot be controlled or predicted.'
    },
    {
      title: 'What can granite be used for?',
      content: 'Due to its high density, acid resistance, low absorption rate, and scratch resistance, granite can be used for a wide range of applications including floors, fireplaces, furniture and kitchen counter tops. One of the leading uses of granite is for kitchen counter tops. Hundreds of colours and patterns are available as well as numerous edge details to allow granite to fit in with any kitchen design scheme.'
    },
    {
      title: 'Will there be seams in my kitchen counter tops?',
      content: 'Granite is a stone and because of this, seams cannot be "melted" together. There will of course have to be seams in a typical granite project but if a quality fabricator and installer is used, these seams will be minimized. The location and quantity of seams depends on the project design and slab sizes. It helps to have some idea of typical slab sizes during the design stages of a kitchen. Seams are normally filled with a colour matched polyester adhesive to blend as close as possible. If seams are cut and filled properly, they will not stand out and be an eye sore.'
    },
    {
      title: 'Are the seams very noticeable?',
      content: 'First of all, we try to give you the least number of seams possible. This varies depending on the size of the slabs and your particular counter top or island design. Seams are approximately 1/16" in width. They are done with epoxy and mixed with stone dust along with a color pigment to match your stone.'
    },
    {
      title: 'Is the shine and surface appearance of all granite alike?',
      content: 'Not all granites are alike. Different minerals polish out differently. Some minerals will not shine as much as the quartz and feldspar found in granite. When shopping for granite, take a close look at the shine and surface texture. Some granites have minute fissures in between the various granules which is normal and will not trap liquids or food particles. If this is a concern, please direct questions to the stone salesperson or your fabricator/installer prior to fabrication and installation.'
    },
    {
      title: 'How should I maintain my granite counter tops?',
      content: 'The first and most important step is to make sure your granite counter tops are sealed using a good grade, silicone-based, impregnating sealer. A good coat of sealer will help prevent staining from liquids that are spilled on the surface. A good stone soap or stone polish should be used for on going maintenance. Do not use abrasive cleansers or harsh ammonia based cleaners. If you do not have access to stone maintenance products, a mild soap such as dishwashing soap and water will suffice.'
    },
    {
      title: 'What are the advantages of having granite?',
      content: 'Granite can withstand heat up to 1800 degrees. Granite can be used as a cutting board (although we dont recommend this as it will dull your knives). For those who love to bake, granite is the perfect prep surface for all your pastries. With your granite counter top your kitchen will look as beautiful as the day it was installed for many, many years to come. Unlike plastic counter top materials natural stone has been used throughout the centuries and has maintained "timeless beauty"'
    },   
    {
      title: 'Isnt granite porous? What about sealers?',
      content: 'Granite is the next hardest material to a diamond. There are some granites that are more porous than others however, all of our granite countertops are sealed during the fabrication process and again upon installation. The rule of thumb is that when the water no longer beads up, its time to re-seal. For some folks thats 6 months, for some its 2 years. It depends upon usage.'
    },
    {
      title: 'Ive heard that granite breeds bacteria, is that true?',
      content: 'We think that rumor was started by the "solid surface" manufacturers. Granite does not generate or "breed" any more or any less bacteria than your average countertop surface.'
    },
    {
      title: 'How do I clean my granite countertops?',
      content: 'Regular maintenance of your tops is easy, just use mild soap and water. When properly maintained, your granite tops will last a lifetime.'
    },
    {
      title: 'Doesnt granite scratch easily?',
      content: 'No. Granite is a very durable work surface and has proven itself over the centuries. The only things that can scratch granite are carbide, diamond or another piece of granite.'
    },                               
    {
      title: 'How long a process is it to get granite installed?',
      content: 'A deposit is required to order your slab material. Installation is approximately 7-10 business days from time of deposit/template/final measurement. If you are having new cabinetry installed, all of the new cabinets must be in place in order for us to template.'
    }
  ];

$scope.caesarstone = [
    {
      title: 'How do I maintain CaesarStones natural beauty?',
      content: 'Simply wipe with warm water and soap, using a damp cloth or paper towel. There is no need to worry about grease, grime, hairspray, or messy makeup spills - Simply wipe it off! CaesarStone is easy to care for and naturally maintains its luster for many years to come.'
    },
    {
      title: 'How should I remove stubborn or dried spills? ',
      content: 'Use a damp, soft cloth with warm water and soap. If needed, apply common, non-abrasive, household cleaners such as Soft Scrub Liquid Gel with Bleach, Comet Gel, and Mr. Clean Magic Eraser. To avoid dulling the surfaces shine, make sure to use a non-abrasive cleaner. To remove adhered material such as food, gum, nail polish or even dried paint, first scrape away the excess material with a plastic putty knife and then clean the surface with a damp cloth to remove any marks left behind and any residual dirt.'
    },
    {
      title: 'How durable is CaesarStone? ',
      content: 'CaesarStone is resistant to cracks, chips, scratches and stains. However, like most materials, excessive force and/or pressure from objects can damage the surface. CaesarStone is resistant to most stains caused by fruit juices, liquid food coloring, coffee, tea, wine, grapes and soft drinks. CaesarStoneÕs non-porous nature provides maximum resistance to staining and fully eliminates the need for any sealing. The non-porous quality of the surface also greatly reduces the potential for bacterial growth.'
    },
    {
      title: 'Do I need to apply a sealer to CaesarStone? ',
      content: 'No. CaesarStone is a non-porous surface, so you will never have to apply sealer to any CaesarStone surface.'
    },
    {
      title: 'Can I cut on my CaesarStone countertop?',
      content: 'CaesarStone is composed 93% natural quartz, providing it with superior strength and beauty. Although your fine cutlery will not harm CaesarStone, using a cutting board is recommended to prevent dulling the surface.'
    },
    {
      title: 'How do I maintain the polish on my CaesarStone countertop? ',
      content: 'Polished: Due to its high density and non-porous qualities, normal cleaning with a damp cloth will keep your CaesarStone surface looking like the first day it was installed. To avoid dulling the surfaces shine, make sure to use a non-abrasive cleaner. Honed: Please understand that HONED finishes will require more daily maintenance than our polished finishes. Since there is more exposed surface area with honed finishes, metal marks, finger prints and other signs of daily living will show on honed material. Most of these marks can be easily removed with little effort and cleaning products such as Soft Scrub Liquid Gel. For tough stains, work the area with a blue Scotch Brite pad.'
    },
    {
      title: 'How does CaesarStone withstand heat? ',
      content: 'CaesarStone is structurally more heat resistant in comparison to other stones, including granite. However, any stone material can potentially be damaged by sudden and rapid temperature changes, especially near the edges. Therefore, using inexpensive and readily available hot pads or trivets is always recommended, especially when using cooking units such as electric frying pans, crock pots, or roaster ovens. As CaesarStone is not affected by heat below 300¡F, it is advised that hot pans not be placed directly on the material.'
    },
    {
      title: 'Are there any chemicals or cleaners to avoid using? ',
      content: 'Avoid exposing CaesarStone to chemicals with high alkaline or PH level, such as oven grill cleaners, floor strippers, toilet bowl cleaners, oil soaps, tarnish removers, furniture cleaners and drain products.'
    },
    {
      title: 'Is caring for my CaesarStone surface really this easy? ',
      content: 'CaesarStoneÕs care-free maintenance and everlasting benefits and performance allows more time for the things that matter most to you. Whether you selected CaesarStone to be your surface of choice?for food preparation or to simply beautify your home, you can enjoy the peace of mind knowing that CaesarStone is completely worry and care-free.'
    },
    {
      title: 'Can CaesarStone be used outdoors? ',
      content: 'While some customers have opted to install CaesarStone in outdoor applications - this use is not covered by our Limited 10 Year Warranty. CaesarStone has not been tested in prolonged UV ray exposure settings.'
    }
   
  ];


$scope.silestone = [
    {
      title: 'What is Silestone?',
      content:'Silestone® is naturally beautiful, durable quartz. Silestone is the worlds leading natural quartz surface - a superior stone for myriad interior surfacing applications because of its ideal combination of beauty and practicality.Silestone features a range of more than 65 unique colours to match your taste or style.'
    },
    {
      title: 'What is natural quartz?',
      content:'Quartz is one of the hardest, most abundant minerals found in nature - only diamond, sapphire and topaz are harder. Besides beauty, the quartz in Silestone gives it extreme strength, making Silestone highly scratch-resistant.'  
    },
    {
      title: 'What are the advantages of Silestone?',
      content:'Silestone is a dense, non-porous stone that delivers unsurpassed reliability and performance - scratch-resistance and stain-resistance with no sealing required in a large variety of naturally beautiful colors.'  
    },
    {
      title: 'Why should I choose Silestone?',
      content:'Silestone is the smartest choice for homeowners as it delivers both unique beauty and extreme durability. The unsurpassed professionalism of Silestones team is backed by more than 70 years experience in the natural stone industry, and a mature distribution network makes the product readily available throughout North America.'  
    },
    {
      title: 'How does Silestone compare to solid surfaces, like Corian?',
      content:'The quartz in Silestone is 100% natural; a hard mineral that gives Silestone both beauty and strength. Solid surfaces are plastic polymers that lack the brilliance and reflectivity of natural stone, and are softer - making them more susceptible to scorches and scratches.'  
    },
    {
      title: 'How does Silestone compare to other natural quartz surfaces?',
      content:'Silestone provides unmatched delivery capacity, worldwide availability, more color variety, the only program of certified installation professionals and a successful track record of more than 15 years in natural quartz and 70 years in the stone industry. In 2005, Silestone is the first and only countertop to introduce built-in bacteriostatic product protection.'  
    },
    {
      title: 'Can I use Silestone in my kitchen?',
      content:'Yes. Silestone is ideal for use in kitchen countertops, island tops, backsplashes, and more. You may even purchase knobs, switch plates and handles made of Silestone natural quartz to match your kitchen surfaces.'  
    },
    {
      title: 'Can I use Silestone in my bathroom?',
      content:'Yes. Add beauty and practicality to any bathroom with Silestone vanities, backsplashes, shower walls and tub surrounds.'  
    },
    {
      title: 'Can I use Silestone for flooring?',
      content:'Yes. Silestone makes striking flooring throughout the home or office. You may pick from standard-size tiles or have Silestone custom-cut to fit your style.'  
    },
    {
      title: 'What makes Silestone "A Cleaner, Safer Countertop"?',
      content:'Silestones non-porous surface protects your countertops from staining and prevents liquids from penetrating the surface. Silestone is also the only countertop with bacteriostatic protection included in every slab. Bacteriostatic product protection is built-in during manufacturing to provide continuous bacteriostatic product protection. While bacteriostatic product protection does not protect users from food-borne illness and is not a substitute for normal cleaning practices, it does result in countertops that are easier to clean and stay clean.'  
    },
    {
      title: 'Does Silestone include a warranty?',
      content:'Silestone backs all installed countertop projects with a(n industry-leading) 15-Year Limited Warranty. Silestones warranty covers structural manufacturing defects.'  
    }   
  ];

})

.controller('MainCtrl', function ($scope, storage) {
        $scope.slides = storage.getSliders("slides");
        $scope.commercial = storage.getCommercial();
        $scope.residental = storage.getResidental();        
        $scope.carousel = storage.getSliders("carousel");
        $scope.suppliers = storage.getSuppliers();
        $scope.slab = storage.getSlab();
        $scope.testimonials = storage.testimonials();
        $scope.caesarstone = storage.getCaesarstone();
        $scope.silestone = storage.getSilestone();
        $scope.belenco = storage.getBelenco();
        $scope.diamastone = storage.getDiamastone();        
        console.log($scope.silestone);                                                                                                                                                                           
        $scope.init_menu = function () {
            angular.forEach(this.main_menu, function (value, key) {
                value.active = false;
            });
        }
        $scope.main_menu = [
            {
                name: "Home",
                href: "#/",
                active: false,
                bot_menu: true,
            },
            {
                name: "Products",
                active: false,
                bot_menu: true,
                href: '#/slab-inventory'
                submenu: [
                    {
                        name: "Slab Inventory",
                        href: "#/slab-inventory",
                        active: false
                             },
                    {
                        name: "Glass Countertops",
                        href: "#/glass-countertops",
                        active: false
                             },
                    {
                        name: "Caesarstone Countertops",
                        href: "#/caesarstone",
                        active: false
                             },
                    {
                        name: "Silestone Quartz Countertops",
                        href: "#/silestone",
                        active: false
                             },
                    {
                        name: "Diamstone Quartz Countertops",
                        href: "#/diamastone",
                        active: false
                             },
                    {
                        name: "Belenco Quartz",
                        href: "#/belenco",
                        active: false
                             },
                   {
                        name: "Tables",
                        href: "#/tables",
                        active: false
                             }                    
                         ]
            },
            {
                name: "Project Gallery",
                href: "#/residental",
                bot_menu: true,
                active: false,
                submenu: [
                    {
                        name: "Commercial",
                        href: "#/commercial",
                        active: false
                             },
                    {
                        name: "Residental",
                        href: "#/residental",
                        active: false
                             }
                         ]
            },
            {
                name: "Design Tools",
                href: "#/3dshowroom",
                bot_menu: true,
                active: false,
                submenu: [
                    {
                        name: "3DShowroom",
                        href: "#/3dshowroom",
                        active: false
                             },
                    {
                        name: "3DEdges",
                        href: "#/3dedges",
                        active: false
                             }
                         ]
            },
            {
                name: "Company",
                href: "#/info",
                active: false,
                submenu: [
                    {
                        name: "FAQ",
                        href: "#/faq",
                        active: false,
                        bot_menu: true
                             },
                    {
                        name: "Customer Testimonials",
                        href: "#/testimonials",
                        active: false
                             },
                    {
                        name: "Media",
                        href: "#/media",
                        active: false
                             }
                         ]
            },
            {
                name: "Contact Us",
                href: "#/contact-us",
                active: false,
                bot_menu: true
            }
        ];

        $scope.slablimit = 24;
        $scope.residentalLimit = 16;
        $scope.testimonialsLimit = 5; 
        
    })
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/page/home.html'
            })
            .when('/home', {
                templateUrl: '/page/home.html'
            })
            .when('/waterjet-cutting', {
                templateUrl: '/page/waterjet.html'
            })
            .when('/testimonials', {
                templateUrl: '/page/testimonials.html'
            })
            .when('/commercial', {
                templateUrl: '/page/commercial.html'
            })
            .when('/residental', {
                templateUrl: '/page/residental.html'
            })
            .when('/tables', {
                templateUrl: '/page/tables.html'
            })
            .when('/media', {
                templateUrl: '/page/media.html'
            })
            .when('/diamastone', {
                templateUrl: '/page/diamastone.html'
            })
            .when('/contact-us', {
                templateUrl: '/page/contact.html'
            })
            .when('/3dshowroom', {
                templateUrl: '/page/3dshowroom.html'
            })
            .when('/slab-inventory', {
                templateUrl: '/page/slab-inventory.html'
            })            
            .when('/3dedges', {
                templateUrl: '/page/3dedges.html'
            })
            .when('/glass-countertops', {
                templateUrl: '/page/glass-countertops.html'
            })
            .when('/digital', {
                templateUrl: '/page/digital.html'
            })
            .when('/caesarstone', {
                templateUrl: '/page/caesarstone.html'
            })
            .when('/selection', {
                templateUrl: '/page/selection.html'
            })
            .when('/care', {
                templateUrl: '/page/care.html'
            })
            .when('/faq', {
                templateUrl: '/page/faq.html'
            })
            .when('/silestone', {
                templateUrl: '/page/silestone.html'
            })
            .when('/belenco', {
                templateUrl: '/page/belenco.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    })



