const goods = [{
    
        id: 'boxing',
        name: 'Рукавички боксерські Yokkao Fight',
        imgSrc: '../png.img/box.jpg',
        price: '200',
}]
const kategories = [
    
    {
        id: 1,
        name: 'Gym', 
        imgSrc: "../svg.img/weightlifter.png" ,
        key: 'gym',
        class: 'gym',
    }
        , {
            id: 2,
            name: 'Outside',
            imgSrc:"../svg.img/jump-rope.png",
            key: 'outside',
            class: 'outside'
        },{
            id: 3,
            name: 'Home',
             imgSrc:"../svg.img/yoga.png",
             key: 'home',
             class: 'home',
            },{
                id: 4,
            name: 'Balls',
            imgSrc:"../svg.img/ball-sports.png",
            key: 'balls',
            class: 'balls',
          },{
            id: 5,
            name: 'Boxing',
            imgSrc: '../svg.img/boxing-gloves.png',
            key: 'boxing',
            class: 'boxing',
           }, {
            id: 6,
            name: 'Camping',
            imgSrc:"../svg.img/campfire.png",
            key: 'camping',
            class: 'camping',
            }, {
                id: 7,
                name: 'Swimming',
                 imgSrc:"../svg.img/swimming.png",
                 key: 'swimming',
                 class: 'swimming',
                 background: 'https://wallpaperaccess.com/full/1108071.jpg'
             }
            ];

 const arraySections = [
            {
              sectionname: 'meeting',    
              pText: 'Hello, everyone. We are glad to meet you. Here you will find many useful products in the truest sense of the word. After all, we specialize in products that will affect the most important component of your life, namely your health.',
              imgSrc: "../svg.img/бігун.png",
             },{
              sectionname: 'reviews',       
              pText:'We are famous for our diverse and rich assortment of sportswear. Balls, boxing gloves, goggles, goggles, barbells, suspension bars,leggings, helmets, bicycles. And this is only a small part of the items we have.',
              imgSrc: "../svg.img/startup.png",
            },{
              sectionname: 'transporting',            
              pText: 'Another achievement of our store is that we ship to more than 120 countries.  Every day we make shipments to America,Asia, Africa, and even Australia. We personally guarantee speed and safety. If you are not satisfied with something, we are always ready to return your money.',
              imgSrc: "../svg.img/journey.png",
            },{
              sectionname: 'quality',   
              pText: 'We receive positive feedback from our customers on a regular basis. We used to remind them to leave us feedback, but now everything happens automatically and undoubtedly indicates progress in terms of the quality of our products. So we encourage you to try our products.',
              imgSrc: "../svg.img/reviews.png",
            }
            
            ]
            const podCategory = [
                {
                  name: 'Football',
                  key: 'balls',
                  imgSrc: '../png.img/football.png', 
                },{
                  name: 'Valleyball',
                  key: 'balls',
                  imgSrc: '../png.img/ball.png',
                },
                {
                  name: 'Basketball',
                  key: 'balls',
                  imgSrc: '../png.img/basketball.png',
                },{
                  name: 'Ping-Pong',
                  key: 'balls',
                  imgSrc: '../png.img/tennis-ball.png',
                },{
                  name: 'Table tennis',
                  key: 'balls',
                  imgSrc: '../png.img/ping-pong.png'
                },{
                  name: 'Baseball',
                  key: 'balls',
                  imgSrc: '../png.img/ball (1).png',
                },{
                  name: '',
                  key: '',
                  imgSrc: '',
                },
{
  name: 'Груші',
  key: 'boxing',
  imgSrc: "https://img.icons8.com/color/48/punching-bag.png",
},
{
  name: 'Рукавиці',
  key: 'boxing',
  imgSrc: "https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/external-boxing-gloves-martial-arts-icongeek26-linear-colour-icongeek26.png",
},
{
  name: 'Шлеми',
  key: 'boxing',
  imgSrc: "https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/external-boxing-mask-sports-those-icons-lineal-color-those-icons.png",
},
{
  name: 'Боксерки',
  key: 'boxing',
  imgSrc: "https://img.icons8.com/external-others-inmotus-design/67/external-Boxing-Shoe-boxing-others-inmotus-design.png",
},
{
  name: 'Лапи',
  key: 'boxing',
  imgSrc: 'https://png.pngtree.com/png-vector/20220606/ourmid/pngtree-boxing-paws-athlete-bag-bandages-png-image_4878243.png',
},
{
  name: 'Скакалки',
  key: 'outside',
  imgSrc: "https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-jump-rope-fitness-at-home-flaticons-flat-flat-icons.png",
},
{
  name: 'Велосипеди',
  key: 'outside',
  imgSrc: "https://img.icons8.com/3d-fluency/94/bicycle.png",
},
{
  name: 'Самокати',
  key: 'outside',
  imgSrc: "https://img.icons8.com/color/48/kick-scooter.png",
},
{
  name: 'Йога',
  key: 'home',
  imgSrc: "https://img.icons8.com/3d-fluency/94/sleeping-mat.png",
},
{
  name: 'Резинки',
  key: 'home',
  imgSrc: '',
},
{
  name: 'Колеса на прес',
  key: 'home',
  imgSrc: '',
},
{
  name: 'Бігова доріжка',
  key: 'home',
  imgSrc: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-treadmill-fitness-at-home-flaticons-lineal-color-flat-icons-2.png",
},
{
  name: 'Штанги',
  key: 'gym',
  imgSrc: "https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-barbell-fitness-and-healthy-living-flaticons-flat-flat-icons.png"
},
{
  name: 'Гантелі',
  key: 'gym',
  imgSrc: "https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-dumbbells-lifestyles-flaticons-flat-flat-icons.png",
},
{
  name: 'Лавки',
  key: 'gym',
  imgSrc: "https://img.icons8.com/external-konkapp-flat-konkapp/64/external-barbell-gym-konkapp-flat-konkapp.png",
},
{
  name: 'Турніки',
  key: 'gym',
  imgSrc: "https://img.icons8.com/color/48/pullups-skin-type-2.png",
},
{
  name: 'Велотренажери',
  key: 'gym',
  imgSrc: "https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/external-treadmill-fitness-kiranshastry-lineal-color-kiranshastry.png",
},
{
  name: 'Намети',
  key: 'camping',
  imgSrc: "https://img.icons8.com/pieces/64/tent.png",
},
{
  name: 'Спальні мішки',
  key: 'camping',
  imgSrc: '../png.img/sleeping-bag-1-32.png',
},
{
  name: 'Контейнери',
  key: 'camping',
  imgSrc: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-food-container-recycling-center-flaticons-lineal-color-flat-icons-3.png",
},
{
  name: 'Окуляри',
  key: 'swimming',
  imgSrc: "https://img.icons8.com/pieces/64/goggles.png",
},
{
  name: 'Ласти',
  key: 'swimming',
  imgSrc: "https://img.icons8.com/officel/80/flippers.png",
},
{
  name: 'Шапки',
  key: 'swimming',
  imgSrc: "https://img.icons8.com/cute-clipart/64/swimming-cap.png",
},
{
  name: 'Маски',
  key: 'swimming',
  imgSrc: "https://img.icons8.com/emoji/48/diving-mask.png" ,
},
            ]


            const towar = [
              {
                name: 'Everlast Pro',
                key: 'Рукавиці',
                price: 1500 ,
                imgSrc: 'https://th.bing.com/th/id/OIP.m2jGfgbc7dXdMBt5L8HFvgHaHa?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7',
              },
{
  name: 'Power Play',
  key: 'Рукавиці',
  price: 1200 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.qaG1Xfjeb7OH7XehaTpYtgHaHa?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'UFC Pro',
  key: 'Рукавиці',
  price: 1800 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.TRIcTcRjsOTq_inEEwROTAHaHa?w=195&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Fighting S2',
  key: 'Рукавиці',
  price: 1000 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.x2T6akXCthHEmxoeEQYmHAHaHa?w=197&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Fairtex',
  key: 'Рукавиці',
  price: 900 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.imWXVwi5YEYvjRKap6VCEwHaHZ?w=211&h=210&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Pro Box',
  key: 'Груші',
  price: 2000 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.f0k6WaHuHgqIG1EP-Tl9VgAAAA?w=150&h=150&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Ever Cart',
  key: 'Груші',
  price: 2100 ,
  imgSrc: 'https://th.bing.com/th/id/OIP._PIql4k0wzTsWE6pXpsfcQAAAA?w=162&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Trample',
  key: 'Груші',
  price: 2020 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.Yk079dwe6eLgwrlb3ISZdQAAAA?w=160&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Koalinux',
  key: 'Груші',
  price: 2100 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.Ep1BPGVCkoWghlwVV2NvpAAAAA?w=160&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Reaload',
  key: 'Груші',
  price:  2000,
  imgSrc: 'https://th.bing.com/th/id/OIP.t7jMJjRym6Jv74AACcUOqwAAAA?w=180&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Krokupotu',
  key: 'Лапи',
  price:  900,
  imgSrc: 'https://th.bing.com/th/id/OIP.XkseBF2RcrQDyWJG4OquhAHaE7?w=294&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Ananimus',
  key: 'Лапи',
  price: 800 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.DF8-0eETv9ch-TSIn_P2JwHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'JOfels',
  key: 'Лапи',
  price: 700 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.sIhxLE5spxj4Qy-MbgmarAHaFo?w=266&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'LOreal',
  key: 'Лапи',
  price:  600,
  imgSrc: 'https://th.bing.com/th/id/OIP.zwoDlc9acuAWJdbfwykpmwHaGW?w=234&h=201&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Fenix',
  key: 'Лапи',
  price: 500 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.g-x9PT7Igvx9GsUOUNjbRgHaHa?w=201&h=201&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Aloha',
  key: 'Боксерки',
  price: 400 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.EIwqTVM0hesrv9HvPbGiJQHaEK?w=322&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Frik X',
  key: 'Боксерки',
  price: 140 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.NT9P-1lSqBai2-k1zAOYxQHaHa?w=181&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Koala',
  key: 'Боксерки',
  price: 480 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.1JcszX9NGKvHKx5FK6DKpgHaHg?w=176&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Predator',
  key: 'Боксерки',
  price: 650 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.GB_awiNhVW1z-vf9-weHlAHaJ3?w=182&h=243&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Aqua R',
  key: 'Боксерки',
  price: 500 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.AeAx4d2q-GzC2JOxaLYjTAHaJ3?w=182&h=243&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Super Fenix',
  key: 'Шлеми',
  price: 1900 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.3zjN0Mvs64RmWggO-R3t8gHaGD?w=247&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Aruonder',
  key: 'Шлеми',
  price: 2000 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.WJjYQCHbQl0GSCxv85pnOwHaHa?w=207&h=207&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Chalange',
  key: 'Шлеми',
  price:1340  ,
  imgSrc: 'https://th.bing.com/th/id/OIP.zrTooUoL8pXKX7AIkfmVTAHaHa?w=207&h=207&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Foxtroter',
  key: 'Шлеми',
  price:  1900,
  imgSrc: 'https://th.bing.com/th/id/OIP.XfjfKX0DZAXVdWVGEC2BKwHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Propan',
  key: 'Шлеми',
  price: 1200 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.y8z2yV7Y-clIBoXUM8Z3QgHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Flexible',
  key: 'Скакалки',
  price: 400 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.RFkuAPkLroaAkOydphQiYwHaHa?w=162&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'New kort',
  key: 'Скакалки',
  price: 350 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.pT6CcbO5S5Yjy3QBlCca8gHaHa?w=162&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Friday',
  key: 'Скакалки',
  price:  260,
  imgSrc: 'https://th.bing.com/th/id/OIP.gQWpcsphQz0DS59eij92wQHaHa?w=182&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Klaqarium',
  key: 'Скакалки',
  price: 240 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.N38n1FWrn97R3bkvU9gKXAHaHa?w=172&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'SoftSpace',
  key: 'Скакалки',
  price: 200 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.2H_LChl6lqu-6z4gVzpbuwHaHa?w=191&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'fast dark',
  key: 'Велосипеди',
  price:15300 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.mD-hkBvGNUyg5p7M6zBx-AHaE7?w=255&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Dark dyi',
  key: 'Велосипеди',
  price: 12900 ,
  imgSrc: 'https://th.bing.com/th/id/OIP._McsYoe6Qh9epHFPkvNfUwEyDM?w=267&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Mountaining X',
  key: 'Велосипеди',
  price: 16500 ,
  imgSrc: 'https://th.bing.com/th/id/OIP._IV5KCk4knBcXaxWd5elNAHaE8?w=253&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Eveua',
  key: 'Велосипеди',
  price: 12000 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.IX2TwIooHb5Q5dQiSbFk9wHaHa?w=193&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Float',
  key: 'Велосипеди',
  price: 20000 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.LAvpS3s-hdo2OLEm5_gchQHaEf?w=314&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Soaper',
  key: 'Самокати',
  price:  2010,
  imgSrc: 'https://th.bing.com/th/id/OIP.YqQVotf7GJq485DUjdO5OgHaG-?w=228&h=215&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Kratos',
  key: 'Самокати',
  price: 1670 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.7p5YNdrHPdToBKrlaKVkPQHaKE?w=158&h=215&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Kreatyn',
  key: 'Самокати',
  price: 1200 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.Kh-9oxwawWjTfgUCwS1UfwHaHa?w=216&h=215&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Olakle',
  key: 'Самокати',
  price: 1430 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.nH2_hoEU2aMswOdHq_9HZgHaHa?w=177&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Samoster',
  key: 'Самокати',
  price: 1403 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.tC1SdoOLTMTXkBR6yX3ragHaHV?w=218&h=215&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Black',
  key: 'Йога',
  price: 210  ,
  imgSrc: 'https://th.bing.com/th/id/OIP.A1NqGUlfS15NGomtG3ZQdwHaFL?w=236&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Shortible',
  key: 'Йога',
  price: 180 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.BDojXI6rkQyV7sHS0vZqewHaFr?w=269&h=206&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Flexible',
  key: 'Йога',
  price: 140 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.Blg5OaEz8PhdwTrAlb9xqQHaHa?w=174&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Esinse',
  key: 'Йога',
  price: 200 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.QtvswFwU2qsxa1Ns6sdKOwHaEo?w=299&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Longive',
  key: 'Йога',
  price:  300,
  imgSrc: 'https://th.bing.com/th/id/OIP.7kVQrQ3ycixTY4tl3aaTEAAAAA?w=179&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Kloaka',
  key: 'Резинки',
  price: 500 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.xdJzTqRJGtwQiXDPWWFKLgHaDz?w=327&h=179&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Rehuber',
  key: 'Резинки',
  price:505 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.txDHwqBtl7ccbBQDbpgMEgHaHa?w=191&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Softsink',
  key: 'Резинки',
  price: 610 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.b-MspNmwh0rbCcGeUYOuwAHaHa?w=191&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Ultra S',
  key: 'Резинки',
  price: 700 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.DVIqmhRmLs_GaugyvrmiJwHaHa?w=190&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Oracle',
  key: 'Резинки',
  price: 910 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.fAZvmAiAELkiKo0RFCD2zAHaEH?w=303&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Roading',
  key: 'Колеса на прес',
  price: 800 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.xHln6VDafyKJ-7kKdNX6UAHaHa?w=174&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Frame',
  key: 'Колеса на прес',
  price: 980 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.iFtltObCD6UuQWkNL467dgHaHa?w=174&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Rideflex',
  key: 'Колеса на прес',
  price:  760,
  imgSrc: 'https://th.bing.com/th/id/OIP.iFtltObCD6UuQWkNL467dgHaHa?w=174&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Whiter',
  key: 'Колеса на прес',
  price: 230 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.fw1IWAI1HeGrvJlhGnndGwHaHa?w=173&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Elgant',
  key: 'Колеса на прес',
  price: 540 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.eg_pGNrZBuhFCor9nIfDawHaHa?w=188&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'MoreSpeed',
  key: 'Бігова доріжка',
  price:  19000,
  imgSrc: 'https://th.bing.com/th/id/OIP.2_-2aavks9DJw6vY7-8vEAHaGz?w=214&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Krosus Z',
  key: 'Бігова доріжка',
  price:  16000,
  imgSrc: 'https://th.bing.com/th/id/OIP.EA3RABJtN7EA_vnlrkJSWQHaHa?w=197&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'MostAdorable',
  key: 'Бігова доріжка',
  price:  12000,
  imgSrc: 'https://th.bing.com/th/id/OIP.Lu9xIMveelYbNHqakQf64wHaGS?w=232&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'SuperPuper',
  key: 'Бігова доріжка',
  price: 13000 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.4bJTW-RcFD7QUIick_upkwHaGe?w=231&h=201&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'VeryFaster',
  key: 'Бігова доріжка',
  price: 14000 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.PGZml7QCg6r1JoU7nEYdIAHaGC?w=247&h=201&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Footerfight',
  key: 'Штанги',
  price: 4100 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.UJORBROMN7AUmDrCjB9UegAAAA?w=178&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Craetor X',
  key: 'Штанги',
  price:  3200,
  imgSrc: 'https://th.bing.com/th/id/OIP.CMa5GroMA5nusaJzyegUgQHaHa?w=178&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Soapmaker',
  key: 'Штанги',
  price: 2300 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.SbLXihLMGguN2HexGZScdwHaEs?w=281&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Predator',
  key: 'Штанги',
  price: 1800 ,
  imgSrc:'https://th.bing.com/th/id/OIP.0d16b_rxsRBs24MUeMrC-gHaFj?w=215&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Elefan',
  key: 'Штанги',
  price: 1200 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.rf4PtbUB8vVcoIQ9kmBZvAHaE8?w=262&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Croakus',
  key: 'Гантелі',
  price: 780 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.eD_-gB-6-sXT9lBhv6hDPQHaHt?w=192&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Examplechild',
  key: 'Гантелі',
  price: 850 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.7TghKo_3Wll4o8qYKCleTgHaH6?w=187&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'HarWork',
  key: 'Гантелі',
  price: 410 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.ppadLGDYBc6r5kzRMBlSoQHaE8?w=299&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'MetalMonster',
  key: 'Гантелі',
  price: 520 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.al1-yZt5ff3LTcHkBHCOygHaHa?w=163&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Criptocall',
  key: 'Гантелі',
  price: 200 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.I6mnY2NCgwlZSuVAIj3CVwHaEG?w=297&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Storm',
  key: 'Лавки',
  price: 20100 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.REGNkegrs8LvQa0v_87vJQHaGl?w=210&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Predator Pro',
  key: 'Лавки',
  price:  19300,
  imgSrc: 'https://th.bing.com/th/id/OIP.EkLrbu0iuEwsj5ZxxnM8fAHaGk?w=210&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Elapomix',
  key: 'Лавки',
  price: 12300 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.fpHxEWEGddbupSrrgCCXTAHaFj?w=245&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Expert lab',
  key: 'Лавки',
  price: 18700 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.R2Hmy4iBQ7gyp-vMyRd20wHaJQ?w=146&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Cerotan',
  key: 'Лавки',
  price: 13400 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.7vF1554BAuG6tGtjzPpJGAHaHa?w=215&h=204&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Forma C',
  key: 'Турніки',
  price: 680 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.Ffm1kL5yeOIyeKgNXa-ymAHaFD?w=245&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Keratyn',
  key: 'Турніки',
  price: 510 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.W66GNmAwUfZliLXbWYjMNAHaE7?w=251&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Erasma',
  key: 'Турніки',
  price: 450 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.ELHnt5AB7tu5P8nDv-3LXgHaFT?w=242&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'HightWall',
  key: 'Турніки',
  price: 300 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.chPx0bZo9PezWMetMdfCmwAAAA?w=198&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Omega',
  key: 'Турніки',
  price: 340 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.aEdrcgqdrtkkCLQHVk5WKgHaE0?w=257&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Sferano',
  key: 'Велотренажери',
  price: 16500 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.sBgb_y7iQA66VtQB2fcF6gAAAA?w=210&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Loading X',
  key: 'Велотренажери',
  price:  15000,
  imgSrc: 'https://th.bing.com/th/id/OIP.gNBrmT0n3TWe9i9dmVBzyAHaHa?w=193&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Cripto',
  key: 'Велотренажери',
  price: 13500 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.cYhBgN8T_rinsbl2squ9sgHaLC?w=129&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Hot way',
  key: 'Велотренажери',
  price: 11200 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.M-ExzDSzaIRqr6MyF_-5UAHaHa?w=194&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Space X',
  key: 'Велотренажери',
  price: 12300 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.WvJILyyfNDUc78uq2EvG6gHaHa?w=194&h=193&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'ASrounWorld',
  key: 'Намети',
  price: 800 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.c4GMXVlBVxrBVtHnqBtJ0wHaE6?w=252&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Werying',
  key: 'Намети',
  price: 980 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.n5jDdY4-N2fXv38qj9oYrgHaHa?w=167&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'MountinSAfe',
  key: 'Намети',
  price: 1020 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.pC0kQI5yG7tlszgWBAjCuQHaFL?w=257&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Enablable',
  key: 'Намети',
  price:1200   ,
  imgSrc: 'https://th.bing.com/th/id/OIP.u-vmYoQ4opvlDC6mbZr3AAHaHa?w=180&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Lopareh',
  key: 'Намети',
  price: 870 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.LR0gYzNbA6yeOaf_CtjYfAHaDq?w=331&h=173&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'ForTrip',
  key: 'Спальні мішки',
  price: 900 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.aoeLlsutiRwva-kMICN_AwHaHa?w=210&h=210&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Safe ',
  key: 'Спальні мішки',
  price:  650,
  imgSrc: 'https://th.bing.com/th/id/OIP.iV_pMMJRAL9aMoCcYhW_2wHaHa?w=185&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Komfort',
  key: 'Спальні мішки',
  price: 860 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.hI_G3vBcCT2ilOQ63w3uhgAAAA?w=118&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Adoptable',
  key: 'Спальні мішки',
  price: 870 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.PYc3Oj4S9nEmYHrpo202igHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Postima',
  key: 'Спальні мішки',
  price: 800 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.qoRt4zC9LRkpurZxemdsfQHaE8?w=286&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Nelab',
  key: 'Контейнери',
  price: 200 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.4QDqxJ81-9JSYz8EtnodkQHaIK?w=179&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Moama',
  key: 'Контейнери',
  price: 300 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.VIjz6ftq731YaBnup2DnagHaHa?w=197&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Diffi',
  key: 'Контейнери',
  price: 260 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.Qr7LF9fwyauexHKO6H9sEgHaHa?w=194&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Upper',
  key: 'Контейнери',
  price:  410,
  imgSrc: 'https://th.bing.com/th/id/OIP.boDduEncxiM4ZDlm5oXt0AHaHa?w=188&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Relaxon',
  key: 'Контейнери',
  price: 340 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.LD7yx3Xq0ioJkoLJjOQNIwHaFj?w=253&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Lorana',
  key: 'Окуляри',
  price: 540 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.mUNoHZD9Es2Te3Sd3UUOUwHaHa?w=217&h=217&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Craetero',
  key: 'Окуляри',
  price: 870  ,
  imgSrc: 'https://th.bing.com/th/id/OIP.PY-XM_k8RSJDBTygaJygwgHaHa?w=217&h=217&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'RunSpace',
  key: 'Окуляри',
  price: 560 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.CjSvhFbajc7wgY7f2sgyCgHaFj?w=267&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Clon',
  key: 'Окуляри',
  price: 405 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.Vfa0Pgm3m5DGUphKfQSWHwHaHa?w=171&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Hiper',
  key: 'Окуляри',
  price: 690 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.Qz3W2E6HMWvvUgGSL8HO9gHaHa?w=196&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Flipper',
  key: 'Ласти',
  price: 515 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.XrzGmEbIjbVlabngDvBQ5AHaHa?w=217&h=218&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Basehope',
  key: 'Ласти',
  price: 499 ,
  imgSrc: 'https://th.bing.com/th/id/OIP._wXuUmQWD1oJRjao7KX8AAHaHa?w=216&h=218&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Roapmaop',
  key: 'Ласти',
  price: 480 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.ftPEbo5e__GTU3e4wU536QHaHa?w=203&h=203&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Kewlar',
  key: 'Ласти',
  price: 350 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.jwoL10cHupvhzfO-spFXxgAAAA?w=211&h=210&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Quohi',
  key: 'Ласти',
  price: 540 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.np60RyndnEzhCFrft-rKEAHaGi?w=238&h=210&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Liding',
  key: 'Шапки',
  price: 230 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.Lwv-Y3hZABD0c0RNOCmmPAHaI4?w=165&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Cloap',
  key: 'Шапки',
  price: 320  ,
  imgSrc: 'https://th.bing.com/th/id/OIP.7KGhaUMx6-SANWzSrxXhcAHaHt?w=188&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Lianabus',
  key: 'Шапки',
  price:  340,
  imgSrc: 'https://th.bing.com/th/id/OIP.daS5REf_h3BgA_J-TNgK6gHaHa?w=200&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Betom',
  key: 'Шапки',
  price: 250 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.A1fzE1cB0mNZ8B_U26eV5wHaHa?w=183&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Amiled',
  key: 'Шапки',
  price: 430 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.XtEqaf2__Ww-3-kkZ_Q8mgHaGm?w=224&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Minermoa',
  key: 'Маски',
  price: 890 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.w2a6J8-m2bjneVlnY_2UHQHaHa?w=206&h=206&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Powerfull',
  key: 'Маски',
  price: 990 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.bPbn_pcpib9DlVkrMR2zlgHaGC?w=236&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Shtorm',
  key: 'Маски',
  price: 900 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.bvlCcTgffhmWuQqLL32J4QHaHa?w=158&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},
{
  name: 'Weakly',
  key: 'Маски',
  price: 540 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.DvZRMwNf7vSgHZH_FcMiqAHaHa?w=173&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
},{
  name: 'Nestler',
  key: 'Маски',
  price: 870 ,
  imgSrc: 'https://th.bing.com/th/id/OIP.BiuKnSbiP0-zSAVOg15b1gHaHa?w=158&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
}
            ]

