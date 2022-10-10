// length 164

const Currencies = [
  { name: "Afghan Afghani", code: "AFA", symbol: "؋", id: 1 },
  { name: "Albanian Lek", code: "ALL", symbol: "Lek", id: 2 },
  { name: "Algerian Dinar", code: "DZD", symbol: "دج", id: 3, fav: true },
  { name: "Angolan Kwanza", code: "AOA", symbol: "Kz", id: 4 },
  { name: "Argentine Peso", code: "ARS", symbol: "$", id: 5 },
  { name: "Armenian Dram", code: "AMD", symbol: "֏", id: 6 },
  { name: "Aruban Florin", code: "AWG", symbol: "ƒ", id: 7 },
  { name: "Australian Dollar", code: "AUD", symbol: "$", id: 8 },
  { name: "Azerbaijani Manat", code: "AZN", symbol: "m", id: 9 },
  { name: "Bahamian Dollar", code: "BSD", symbol: "B$", id: 10 },
  { name: "Bahraini Dinar", code: "BHD", symbol: ".د.ب", id: 11 },
  { name: "Bangladeshi Taka", code: "BDT", symbol: "৳", id: 12 },
  { name: "Barbadian Dollar", code: "BBD", symbol: "Bds$", id: 13 },
  { name: "Belarusian Ruble", code: "BYR", symbol: "Br", id: 14 },
  { name: "Belgian Franc", code: "BEF", symbol: "fr", id: 15 },
  { name: "Belize Dollar", code: "BZD", symbol: "$", id: 16 },
  { name: "Bermudan Dollar", code: "BMD", symbol: "$", id: 17 },
  { name: "Bhutanese Ngultrum", code: "BTN", symbol: "Nu.", id: 18 },
  { name: "Bitcoin", code: "BTC", symbol: "฿", id: 19 },
  { name: "Bolivian Boliviano", code: "BOB", symbol: "Bs.", id: 20 },
  {
    name: "Bosnia-Herzegovina Convertible Mark",
    code: "BAM",
    symbol: "KM",
    id: 21,
  },
  { name: "Botswanan Pula", code: "BWP", symbol: "P", id: 22 },
  { name: "Brazilian Real", code: "BRL", symbol: "R$", id: 23 },
  {
    name: "British Pound Sterling",
    code: "GBP",
    symbol: "£",
    id: 24,
    fav: true,
  },
  { name: "Brunei Dollar", code: "BND", symbol: "B$", id: 25 },
  { name: "Bulgarian Lev", code: "BGN", symbol: "Лв.", id: 26 },
  { name: "Burundian Franc", code: "BIF", symbol: "FBu", id: 27 },
  { name: "Cambodian Riel", code: "KHR", symbol: "KHR", id: 28 },
  { name: "Canadian Dollar", code: "CAD", symbol: "$", id: 29 },
  { name: "Cape Verdean Escudo", code: "CVE", symbol: "$", id: 30 },
  { name: "Cayman Islands Dollar", code: "KYD", symbol: "$", id: 31 },
  { name: "CFA Franc BCEAO", code: "XOF", symbol: "CFA", id: 32 },
  { name: "CFA Franc BEAC", code: "XAF", symbol: "FCFA", id: 33 },
  { name: "CFP Franc", code: "XPF", symbol: "₣", id: 34 },
  { name: "Chilean Peso", code: "CLP", symbol: "$", id: 35 },
  { name: "Chinese Yuan", code: "CNY", symbol: "¥", id: 36, fav: true },
  { name: "Colombian Peso", code: "COP", symbol: "$", id: 37 },
  { name: "Comorian Franc", code: "KMF", symbol: "CF", id: 38 },
  { name: "Congolese Franc", code: "CDF", symbol: "FC", id: 39 },
  { name: "Costa Rican ColÃ³n", code: "CRC", symbol: "₡", id: 40 },
  { name: "Croatian Kuna", code: "HRK", symbol: "kn", id: 41 },
  { name: "Cuban Convertible Peso", code: "CUC", symbol: "$, CUC", id: 42 },
  { name: "Czech Republic Koruna", code: "CZK", symbol: "Kč", id: 43 },
  { name: "Danish Krone", code: "DKK", symbol: "Kr.", id: 44 },
  { name: "Djiboutian Franc", code: "DJF", symbol: "Fdj", id: 45 },
  { name: "Dominican Peso", code: "DOP", symbol: "$", id: 46 },
  { name: "East Caribbean Dollar", code: "XCD", symbol: "$", id: 47 },
  { name: "Egyptian Pound", code: "EGP", symbol: "ج.م", id: 48 },
  { name: "Eritrean Nakfa", code: "ERN", symbol: "Nfk", id: 49 },
  { name: "Estonian Kroon", code: "EEK", symbol: "kr", id: 50 },
  { name: "Ethiopian Birr", code: "ETB", symbol: "Nkf", id: 51 },
  { name: "Euro", code: "EUR", symbol: "€", id: 52 },
  { name: "Falkland Islands Pound", code: "FKP", symbol: "£", id: 53 },
  { name: "Fijian Dollar", code: "FJD", symbol: "FJ$", id: 54 },
  { name: "Gambian Dalasi", code: "GMD", symbol: "D", id: 55 },
  { name: "Georgian Lari", code: "GEL", symbol: "ლ", id: 56 },
  { name: "German Mark", code: "DEM", symbol: "DM", id: 57 },
  { name: "Ghanaian Cedi", code: "GHS", symbol: "GH₵", id: 58 },
  { name: "Gibraltar Pound", code: "GIP", symbol: "£", id: 59 },
  { name: "Greek Drachma", code: "GRD", symbol: "₯, Δρχ, Δρ", id: 60 },
  { name: "Guatemalan Quetzal", code: "GTQ", symbol: "Q", id: 61 },
  { name: "Guinean Franc", code: "GNF", symbol: "FG", id: 62 },
  { name: "Guyanaese Dollar", code: "GYD", symbol: "$", id: 63 },
  { name: "Haitian Gourde", code: "HTG", symbol: "G", id: 64 },
  { name: "Honduran Lempira", code: "HNL", symbol: "L", id: 65 },
  { name: "Hong Kong Dollar", code: "HKD", symbol: "$", id: 66 },
  { name: "Hungarian Forint", code: "HUF", symbol: "Ft", id: 67 },
  { name: "Icelandic KrÃ³na", code: "ISK", symbol: "kr", id: 68 },
  { name: "Indian Rupee", code: "INR", symbol: "₹", id: 69 },
  { name: "Indonesian Rupiah", code: "IDR", symbol: "Rp", id: 70 },
  { name: "Iranian Rial", code: "IRR", symbol: "﷼", id: 71 },
  { name: "Iraqi Dinar", code: "IQD", symbol: "د.ع", id: 72 },
  { name: "Israeli New Sheqel", code: "ILS", symbol: "₪", id: 73 },
  { name: "Italian Lira", code: "ITL", symbol: "L,£", id: 74 },
  { name: "Jamaican Dollar", code: "JMD", symbol: "J$", id: 75 },
  { name: "Japanese Yen", code: "JPY", symbol: "¥", id: 76, fav: true },
  { name: "Jordanian Dinar", code: "JOD", symbol: "ا.د", id: 77 },
  { name: "Kazakhstani Tenge", code: "KZT", symbol: "лв", id: 78 },
  { name: "Kenyan Shilling", code: "KES", symbol: "KSh", id: 79 },
  { name: "Kuwaiti Dinar", code: "KWD", symbol: "ك.د", id: 80 },
  { name: "Kyrgystani Som", code: "KGS", symbol: "лв", id: 81 },
  { name: "Laotian Kip", code: "LAK", symbol: "₭", id: 82 },
  { name: "Latvian Lats", code: "LVL", symbol: "Ls", id: 83 },
  { name: "Lebanese Pound", code: "LBP", symbol: "£", id: 84 },
  { name: "Lesotho Loti", code: "LSL", symbol: "L", id: 85 },
  { name: "Liberian Dollar", code: "LRD", symbol: "$", id: 86 },
  { name: "Libyan Dinar", code: "LYD", symbol: "د.ل", id: 87 },
  { name: "Lithuanian Litas", code: "LTL", symbol: "Lt", id: 88 },
  { name: "Macanese Pataca", code: "MOP", symbol: "$", id: 89 },
  { name: "Macedonian Denar", code: "MKD", symbol: "ден", id: 90 },
  { name: "Malagasy Ariary", code: "MGA", symbol: "Ar", id: 91 },
  { name: "Malawian Kwacha", code: "MWK", symbol: "MK", id: 92 },
  { name: "Malaysian Ringgit", code: "MYR", symbol: "RM", id: 93 },
  { name: "Maldivian Rufiyaa", code: "MVR", symbol: "Rf", id: 94 },
  { name: "Mauritanian Ouguiya", code: "MRO", symbol: "MRU", id: 95 },
  { name: "Mauritian Rupee", code: "MUR", symbol: "₨", id: 96 },
  { name: "Mexican Peso", code: "MXN", symbol: "$", id: 97 },
  { name: "Moldovan Leu", code: "MDL", symbol: "L", id: 98 },
  { name: "Mongolian Tugrik", code: "MNT", symbol: "₮", id: 99 },
  { name: "Moroccan Dirham", code: "MAD", symbol: "MAD", id: 100 },
  { name: "Mozambican Metical", code: "MZM", symbol: "MT", id: 101 },
  { name: "Myanmar Kyat", code: "MMK", symbol: "K", id: 102 },
  { name: "Namibian Dollar", code: "NAD", symbol: "$", id: 103 },
  { name: "Nepalese Rupee", code: "NPR", symbol: "₨", id: 104 },
  { name: "Netherlands Antillean Guilder", code: "ANG", symbol: "ƒ", id: 105 },
  { name: "New Taiwan Dollar", code: "TWD", symbol: "$", id: 106 },
  { name: "New Zealand Dollar", code: "NZD", symbol: "$", id: 107 },
  { name: "Nicaraguan CÃ³rdoba", code: "NIO", symbol: "C$", id: 108 },
  { name: "Nigerian Naira", code: "NGN", symbol: "₦", id: 109 },
  { name: "North Korean Won", code: "KPW", symbol: "₩", id: 110 },
  { name: "Norwegian Krone", code: "NOK", symbol: "kr", id: 111 },
  { name: "Omani Rial", code: "OMR", symbol: ".ع.ر", id: 112 },
  { name: "Pakistani Rupee", code: "PKR", symbol: "₨", id: 113 },
  { name: "Panamanian Balboa", code: "PAB", symbol: "B/.", id: 114 },
  { name: "Papua New Guinean Kina", code: "PGK", symbol: "K", id: 115 },
  { name: "Paraguayan Guarani", code: "PYG", symbol: "₲", id: 116 },
  { name: "Peruvian Nuevo Sol", code: "PEN", symbol: "S/.", id: 117 },
  { name: "Philippine Peso", code: "PHP", symbol: "₱", id: 118 },
  { name: "Polish Zloty", code: "PLN", symbol: "zł", id: 119 },
  { name: "Qatari Rial", code: "QAR", symbol: "ق.ر", id: 120 },
  { name: "Romanian Leu", code: "RON", symbol: "lei", id: 121 },
  { name: "Russian Ruble", code: "RUB", symbol: "₽", id: 122, fav: true },
  { name: "Rwandan Franc", code: "RWF", symbol: "FRw", id: 123 },
  { name: "Salvadoran ColÃ³n", code: "SVC", symbol: "₡", id: 124 },
  { name: "Samoan Tala", code: "WST", symbol: "SAT", id: 125 },
  { name: "Saudi Riyal", code: "SAR", symbol: "﷼", id: 126 },
  { name: "Serbian Dinar", code: "RSD", symbol: "din", id: 127 },
  { name: "Seychellois Rupee", code: "SCR", symbol: "SRe", id: 128 },
  { name: "Sierra Leonean Leone", code: "SLL", symbol: "Le", id: 129 },
  { name: "Singapore Dollar", code: "SGD", symbol: "$", id: 130 },
  { name: "Slovak Koruna", code: "SKK", symbol: "Sk", id: 131 },
  { name: "Solomon Islands Dollar", code: "SBD", symbol: "Si$", id: 132 },
  { name: "Somali Shilling", code: "SOS", symbol: "Sh.so.", id: 133 },
  { name: "South African Rand", code: "ZAR", symbol: "R", id: 134 },
  { name: "South Korean Won", code: "KRW", symbol: "₩", id: 135 },
  { name: "Special Drawing Rights", code: "XDR", symbol: "SDR", id: 136 },
  { name: "Sri Lankan Rupee", code: "LKR", symbol: "Rs", id: 137 },
  { name: "St. Helena Pound", code: "SHP", symbol: "£", id: 138 },
  { name: "Sudanese Pound", code: "SDG", symbol: ".س.ج", id: 139 },
  { name: "Surinamese Dollar", code: "SRD", symbol: "$", id: 140 },
  { name: "Swazi Lilangeni", code: "SZL", symbol: "E", id: 141 },
  { name: "Swedish Krona", code: "SEK", symbol: "kr", id: 142 },
  { name: "Swiss Franc", code: "CHF", symbol: "CHf", id: 143 },
  { name: "Syrian Pound", code: "SYP", symbol: "LS", id: 144 },
  { name: "São Tomé and Príncipe Dobra", code: "STD", symbol: "Db", id: 145 },
  { name: "Tajikistani Somoni", code: "TJS", symbol: "SM", id: 146 },
  { name: "Tanzanian Shilling", code: "TZS", symbol: "TSh", id: 147 },
  { name: "Thai Baht", code: "THB", symbol: "฿", id: 148 },
  { name: "Tongan Pa'anga", code: "TOP", symbol: "$", id: 149 },
  { name: "Trinidad & Tobago Dollar", code: "TTD", symbol: "$", id: 150 },
  { name: "Tunisian Dinar", code: "TND", symbol: "ت.د", id: 151 },
  { name: "Turkish Lira", code: "TRY", symbol: "₺", id: 152, fav: true },
  { name: "Turkmenistani Manat", code: "TMT", symbol: "T", id: 153 },
  { name: "Ugandan Shilling", code: "UGX", symbol: "USh", id: 154 },
  { name: "Ukrainian Hryvnia", code: "UAH", symbol: "₴", id: 155 },
  {
    name: "United Arab Emirates Dirham",
    code: "AED",
    symbol: "إ.د",
    id: 156,
    fav: true,
  },
  { name: "Uruguayan Peso", code: "UYU", symbol: "$", id: 157 },
  { name: "US Dollar", code: "USD", symbol: "$", id: 158, fav: true },
  { name: "Uzbekistan Som", code: "UZS", symbol: "лв", id: 159 },
  { name: "Vanuatu Vatu", code: "VUV", symbol: "VT", id: 160 },
  { name: "Venezuelan BolÃvar", code: "VEF", symbol: "Bs", id: 161 },
  { name: "Vietnamese Dong", code: "VND", symbol: "₫", id: 162 },
  { name: "Yemeni Rial", code: "YER", symbol: "﷼", id: 163 },
  { name: "Zambian Kwacha", code: "ZMK", symbol: "ZK", id: 164 },
];
export { Currencies };
