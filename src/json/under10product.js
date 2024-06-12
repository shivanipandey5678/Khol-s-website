const underTenProducts = [
    {
        id: "063",
        price: "$9.99 Sale",
        smalldescription: "Men's Apt. 9® Premier Flex Crewneck Tee",
        sellnumber: "2112",
        category: "under $10",
        img: "https://media.kohlsimg.com/is/image/kohls/6530242_ALT3?wid=240&hei=240&op_sharpen=1",
        tags: ["Blue Navy", "Lion Cove", "Aspen Olive", "Black", "Oatmeal", "Gray Inlay", "Prima Sage", "Plush Mauve", "Winetasting", "Fog Heather", "Modern White", "Dark Slate Heather"]
    },
    {
        id: "064",
        price: "$9.99 Reg.",
        smalldescription: "Women's Sonoma Goods For Life® Everyday Short Sleeve V-Neck Tee",
        sellnumber: "1119",
        category: "under $10",
        img: "https://media.kohlsimg.com/is/image/kohls/3584124_ALT?wid=240&hei=240&op_sharpen=1",
        tags: ["Beige Gray Floral", "Tosa Brown", "Joyful Orange Stripe", "Vibrant Pink Stripe", "Medium Blue Dye", "Vida Blue Stripe", "Oat Heather", "Navy Inky Geo", "Manolo Olive", "Olive Slate Heart", "Seattle Sky", "Fresh Blue Stripe", "Tanned Blue Floral", "Teagan Blue", "Vital White", "White Black Stripe", "Soul Yellow", "Navy Tundra", "Spicy Pink Stripe", "Fresh Blue Tropical", "Pink Theme", "La Salle Green", "Pitch Black", "Destiny", "Charcoal"]
    },
    {
        id: "065",
        price: "$9.79 Clearance",
        smalldescription: "Women's Croft & Barrow® Essential Long Sleeve V-Neck Tee",
        sellnumber: "2755",
        category: "under $10",
        img: "https://media.kohlsimg.com/is/image/kohls/6824213_ALT?wid=240&hei=240&op_sharpen=1",
        tags: ["Red", "White", "Black Cream Stripe", "Red Whimsy Floral"]
    },
    {
        id: "066",
        price: "$9.99 Reg.",
        smalldescription: "Women's Sonoma Goods For Life® Short-Sleeve Crew Tee",
        sellnumber: "724",
        category: "under $10",
        img: "https://media.kohlsimg.com/is/image/kohls/7082746_Pink_Burnout?wid=240&hei=240&op_sharpen=1",
        tags: ["Chipper Coral Stripe", "Vibrant Green Stripe", "Cream Tan Stripe", "White Inky Geo", "Dominican Shore", "Vital White", "Spirited Stars", "Olive Night", "Coral Ocean", "Valen River", "Indigo Tie Dye Stripe", "Orchid Landscape", "Pink Heirloom", "Sky Blue Floral", "Desire Yellow", "Navy Beige Stripe", "Light Gray Heather", "Zesty Yellow Stripe", "Patina Pink", "Joy Blue White Stripe", "Pitch Black", "Baron River", "Charcoal"]
    },
    {
        id: "067",
        price: "$9.99 Reg.",
        smalldescription: "Women's Sonoma Goods For Life® Wide-Waistband Capri Leggings",
        sellnumber: "4824",
        category: "under $10",
        img: "https://media.kohlsimg.com/is/image/kohls/6301350_ALT?wid=240&hei=240&op_sharpen=1",
        tags: ["Navy", "Heathered Gray", "Pitch Black"]
    },
    {
        id: "068",
        price: "$9.99 Reg.",
        smalldescription: "Women's Nine West Easy V-Neck Tank Top",
        sellnumber: "803",
        category: "under $10",
        img: "https://media.kohlsimg.com/is/image/kohls/6939631?wid=240&hei=240&op_sharpen=1",
        tags: ["Pearberry", "White Knight", "Resolute Blue", "Gage Blue", "Gerbera Fuchsia", "Teal Town", "Black", "Red Poppy", "Hawaiian Coral", "Fuchsia Petal", "Cosmic Lava", "Baby Orchid", "Black Zigzag Zebra", "Coal Heather", "Black Palm"]
    },
    {
        id: "069",
        price: "$7.99 Clearance",
        smalldescription: "Men's Sonoma Goods For Life® Thermal Crewneck Tee",
        sellnumber: "236",
        category: "under $10",
        img: "https://media.kohlsimg.com/is/image/kohls/5207798?wid=240&hei=240&op_sharpen=1",
        tags: ["Gray", "Navy Per Sample", "Swiss Brown", "Silver Spirit", "Midnight Black"]
    },
    {
        id: "070",
        price: "$8.50 Clearance",
        smalldescription: "Women's Tek Gear® Core Raglan Tee",
        sellnumber: "",
        category: "under $10",
        img: "https://media.kohlsimg.com/is/image/kohls/3932637_Modern_White?wid=240&hei=240&op_sharpen=1",
        tags: ["Lime Burnout", "Pink Burnout", "Cora Pink", "Luminous Pink"]
    },
    {
        id: "071",
        price: "$7.19 Clearance",
        smalldescription: "Women's Sonoma Goods For Life® Everyday Crewneck Long Sleeve Tee",
        sellnumber: "2260",
        category: "under $10",
        img: "https://media.kohlsimg.com/is/image/kohls/3910467_Forest_Night?wid=240&hei=240&op_sharpen=1",
        tags: ["Pitch Black", "Vital White", "Wine Fusion"]
    },
    {
        id: "072",
        price: "$7.19 Clearance",
        smalldescription: "Women's Sonoma Goods For Life® Everyday V-Neck Long Sleeve Tee",
        sellnumber: "6340",
        category: "under $10",
        img: "https://media.kohlsimg.com/is/image/kohls/6939633?wid=240&hei=240&op_sharpen=1",
        tags: ["Pitch Black", "Vital White"]
    },
    {
        id: "073",
        price: "$7.99 Sale",
        smalldescription: "Men's Americana Flag Short Sleeve Graphic Tee",
        sellnumber: "3",
        category: "under $10",
        img: "https://media.kohlsimg.com/is/image/kohls/3880563_ALT?wid=240&hei=240&op_sharpen=1",
        tags: []
    },
    {
        id: "074",
        price: "$9.99 Sale",
        smalldescription: "Men's Sonoma Goods For Life® Pique Polo",
        sellnumber: "1462",
        category: "under $10",
        img: "",
        tags: ["Medium Mineral", "Teal Texture", "Burnt Cherry", "Valentine Garden", "Scott Blue", "Beige Texture", "Gold Txr", "Midnight Black", "Carolina Peach", "Carbon Copy", "Sailor Water", "Lake Getaway", "Lemon Mst", "Modern White", "Majestic Blue", "Favian Olive", "Rosie Posie", "Lilac Embroidery", "Paxton Stream", "Tijuana Teal"]
    },
    {
        id: "075",
        price: "$9.99 Reg.",
        smalldescription: "MYTAGALONGS Pencil Case",
        sellnumber: "",
        category: "under $10",
        img: "https://media.kohlsimg.com/is/image/kohls/6792836_Blue?wid=240&hei=240&op_sharpen=1",
        tags: ["Pink", "Blue", "Biege"]
    },
    {
        id: "076",
        price: "$9.99 Sale",
        smalldescription: "Men's AC/DC Logo Tee",
        sellnumber: "31",
        category: "under $10",
        img: "https://media.kohlsimg.com/is/image/kohls/5207798?wid=240&hei=240&op_sharpen=1",
        tags: []
    },
    {
        id: "077",
        price: "$4.99 Reg.",
        smalldescription: "The Big One® Solid 6-pack Washcloths",
        sellnumber: "24501",
        category: "under $10",
        img: "https://media.kohlsimg.com/is/image/kohls/1713604_Gray?wid=240&hei=240&op_sharpen=1",
        tags: ["Gray", "White", "Blue", "Linen"]
    },
    {
        id: "078",
        price: "$9.80 Sale",
        smalldescription: "Nine West Wavy Flat Hoop Earrings",
        sellnumber: "365",
        category: "under $10",
        img: "https://media.kohlsimg.com/is/image/kohls/3928533_Gold_Tone?wid=240&hei=240&op_sharpen=1",
        tags: ["Silver Tone", "Gold Tone"]
    },
    {
        id: "079",
        price: "$9.59 Sale",
        smalldescription: "Celebrate Together™ Summer Pastel Food Tents 3 pc Set",
        sellnumber: "3",
        category: "under $10",
        img: "https://media.kohlsimg.com/is/image/kohls/6605929?wid=240&hei=240&op_sharpen=1",
        tags: []
    },
    {
        id: "080",
        price: "$9.99 Sale",
        smalldescription: "Men's Star Wars Vintage Logo Tee",
        sellnumber: "428",
        category: "under $10",
        img: "https://media.kohlsimg.com/is/image/kohls/3906265?wid=240&hei=240&op_sharpen=1",
        tags: []
    },
    {
        id: "081",
        price: "$8.00 Clearance",
        smalldescription: "Men's Tek Gear® Dry Tek Tee",
        sellnumber: "2260",
        category: "under $10",
        img: "https://media.kohlsimg.com/is/image/kohls/3932637_Modern_White?wid=240&hei=240&op_sharpen=1",
        tags: []
    },
    {
        id: "082",
        price: "$9.99 Reg.",
        smalldescription: "Men's Sonoma Goods For Life® Supersoft Crewneck Tee",
        sellnumber: "4507",
        category: "under $10",
        img: "https://media.kohlsimg.com/is/image/kohls/3910467_Forest_Night?wid=240&hei=240&op_sharpen=1",
        tags: ["New White", "Burnt Cherry", "Rose", "Mineral Navy", "Dark Brown", "Mauve Ruffle", "Beige", "Forest Night", "Elgin Beige", "Albany Blue", "New Black", "Mystic Lagoon", "Grey", "Dark Sky"]
    },
    {
        id: "083",
        price: "$9.99 Reg.",
        smalldescription: "Nine West Essential Easy High-Neck Tank Top",
        sellnumber: "1315",
        category: "under $10",
        img: "https://media.kohlsimg.com/is/image/kohls/5214280_ALT?wid=240&hei=240&op_sharpen=1",
        tags: ["Gray Fox Heather", "White Waving Lines", "Spring Mist", "Black Lil Lines", "Resolute Blue", "Gerbera Fuchsia", "Black", "Pansy Parrot", "Hawaiian Coral", "Aurora Olive", "Nikita Purple", "White", "Cosmic Lava", "Maddie Plum", "Gold Shadows", "Blue Mid Floral"]
    },
    {
        id: "084",
        price: "$7.99 Sale",
        smalldescription: "Men's Americana Flag Short Sleeve Graphic Tee",
        sellnumber: "1",
        category: "under $10",
        img: "https://media.kohlsimg.com/is/image/kohls/6939633?wid=240&hei=240&op_sharpen=1",
        tags: []
    },
    {
        id: "085",
        price: "$5.99 Reg.",
        smalldescription: "Sonoma Goods For Life® Canvas Storage Tote",
        sellnumber: "510",
        category: "under $10",
        img: "https://media.kohlsimg.com/is/image/kohls/3535302_Linen?wid=240&hei=240&op_sharpen=1",
        tags: ["Stripe", "Linen", "Black White Tweed"]
    },
    {
        id: "086",
        price: "$6.39 Sale",
        smalldescription: "Progressive Wedge & Pop Apple Slicer",
        sellnumber: "14",
        category: "under $10",
        img: "https://media.kohlsimg.com/is/image/kohls/4573410_ALT?wid=240&hei=240&op_sharpen=1",
        tags: []
    },
    {
        id: "087",
        price: "$7.99 Clearance",
        smalldescription: "Women's Croft & Barrow® Essential Long-Sleeve Mockneck Top",
        sellnumber: "2728",
        category: "under $10",
        img: "https://media.kohlsimg.com/is/image/kohls/3880563_ALT?wid=240&hei=240&op_sharpen=1",
        tags: ["Olive Ditsy Leaves", "Black Floral", "Black Mini Stripe", "Holiday Cardinal", "Delicious Cherry", "Black"]
    },
    {
        id: "088",
        price: "$9.99 Reg.",
        smalldescription: "Sonoma Goods For Life® Ultimate Bath Rug",
        sellnumber: "6072",
        category: "under $10",
        img: "https://media.kohlsimg.com/is/image/kohls/2784916_Ivory?wid=240&hei=240&op_sharpen=1",
        tags: ["Petal Pink", "Aqua", "Blue", "Stone Blue", "Burnt Orange", "Chocolate", "Black", "Red", "Sunset", "Taupe", "Silver", "White", "Ivory", "Purple", "Dark Aqua", "Linen", "Jade", "Green"]
    },
    {
        id: "089",
        price: "$9.99 Sale",
        smalldescription: "Food Network™ Carve Dishcloth 4 pk",
        sellnumber: "432",
        category: "under $10",
        img: "https://media.kohlsimg.com/is/image/kohls/4588326_Multi?wid=240&hei=240&op_sharpen=1",
        tags: ["Gray", "Aqua", "Khaki", "White", "Greige", "Cool", "Multi"]
    },
    {
        id: "090",
        price: "$9.99 Orig.",
        smalldescription: "MYTAGALONGS Lanyard",
        sellnumber: "",
        category: "under $10",
        img: "https://media.kohlsimg.com/is/image/kohls/6792826_Navy?wid=240&hei=240&op_sharpen=1",
        tags: ["Navy", "Blue", "Hot Pink"]
    },
    {
        id: "091",
        price: "$9.99 Sale",
        smalldescription: "Men's John Deere Graphic Tee",
        sellnumber: "1",
        category: "under $10",
        img: "https://media.kohlsimg.com/is/image/kohls/6807255_Black?wid=240&hei=240&op_sharpen=1",
        tags: ["Heather Gray", "Black", "Green"]
    },
    {
        id: "092",
        price: "$8.99 Reg.",
        smalldescription: "IMUSA 11 in Round Carbon Steel Comal with Bakelite Handles / IMUSA Comal Redondo de Acero al Carbón con Mangos de Baquelita, 28 cm",
        sellnumber: "27",
        category: "under $10",
        img: "https://media.kohlsimg.com/is/image/kohls/5763790_ALT?wid=240&hei=240&op_sharpen=1",
        tags: ["BEST SELLER"]
    }
];