let words = [
    { word: "addition", hint: "The process of adding numbers" },
    { word: "meeting", hint: "Event in which people come together" },
    { word: "number", hint: "Math symbol used for counting" },
    { word: "exchange", hint: "The act of trading" },
    { word: "canvas", hint: "Piece of fabric for oil painting" },
    { word: "garden", hint: "Space for planting flower and plant" },
    { word: "position", hint: "Location of someone or something" },
    { word: "feather", hint: "Hair like outer covering of bird" },
    { word: "comfort", hint: "A pleasant feeling of relaxation" },
    { word: "tongue", hint: "The muscular organ of mouth" },
    { word: "expansion", hint: "The process of increase or grow" },
    { word: "country", hint: "A politically identified region" },
    { word: "group", hint: "A number of objects or persons" },
    { word: "taste", hint: "Ability of tongue to detect flavour" },
    { word: "store", hint: "Large shop where goods are traded" },
    { word: "field", hint: "Area of land for farming activities" },
    { word: "friend", hint: "Person other than a family member" },
    { word: "pocket", hint: "A bag for carrying small items" },
    { word: "needle", hint: "A thin and sharp metal pin" },
    { word: "expert", hint: "Person with extensive knowledge" },
    { word: "statement", hint: "A declaration of something" },
    { word: "second", hint: "One-sixtieth of a minute" },
    { word: "library", hint: "Place containing collection of books" },
    { word: "computer", hint: "Electronic device for processing data" },
    { word: "keyboard", hint: "Input device with keys" },
    { word: "network", hint: "System of connected computers" },
    { word: "battery", hint: "Device that stores electrical energy" },
    { word: "engine", hint: "Machine that converts power into motion" },
    { word: "planet", hint: "Celestial body orbiting a star" },
    { word: "galaxy", hint: "Massive system of stars" },
    { word: "rocket", hint: "Vehicle for space travel" },
    { word: "satellite", hint: "Object that orbits a planet" },
    { word: "telescope", hint: "Device to observe distant objects" },
    { word: "science", hint: "Systematic study of nature" },
    { word: "physics", hint: "Study of matter and energy" },
    { word: "biology", hint: "Study of living organisms" },
    { word: "chemistry", hint: "Study of substances and reactions" },
    { word: "history", hint: "Study of past events" },
    { word: "geology", hint: "Study of Earth's structure" },
    { word: "climate", hint: "Average weather condition" },
    { word: "weather", hint: "State of atmosphere at a time" },
    { word: "volcano", hint: "Mountain that erupts lava" },
    { word: "earthquake", hint: "Sudden shaking of ground" },
    { word: "tsunami", hint: "Large ocean wave from earthquake" },
    { word: "hurricane", hint: "Severe tropical storm" },
    { word: "forest", hint: "Large area covered with trees" },
    { word: "jungle", hint: "Dense tropical forest" },
    { word: "desert", hint: "Dry barren area with sand" },
    { word: "island", hint: "Land surrounded by water" },
    { word: "ocean", hint: "Vast body of salt water" },
    { word: "river", hint: "Large natural stream of water" },
    { word: "mountain", hint: "High natural elevation of land" },
    { word: "valley", hint: "Low area between hills" },
    { word: "plateau", hint: "Elevated flat land" },
    { word: "canyon", hint: "Deep gorge between cliffs" },
    { word: "bridge", hint: "Structure to cross obstacles" },
    { word: "tunnel", hint: "Underground passageway" },
    { word: "highway", hint: "Main road for fast travel" },
    { word: "railway", hint: "Tracks for trains" },
    { word: "airport", hint: "Place where aircraft land" },
    { word: "harbor", hint: "Sheltered port for ships" },
    { word: "market", hint: "Place to buy and sell goods" },
    { word: "school", hint: "Place for education" },
    { word: "college", hint: "Higher education institution" },
    { word: "university", hint: "Institution for advanced learning" },
    { word: "hospital", hint: "Place for medical treatment" },
    { word: "clinic", hint: "Small healthcare facility" },
    { word: "pharmacy", hint: "Place to get medicines" },
    { word: "laboratory", hint: "Place for scientific experiments" },
    { word: "museum", hint: "Building with historical objects" },
    { word: "theater", hint: "Place for performing arts" },
    { word: "stadium", hint: "Large sports arena" },
    { word: "concert", hint: "Live music performance" },
    { word: "festival", hint: "Event celebrating something" },
    { word: "holiday", hint: "Special day of celebration" },
    { word: "vacation", hint: "Time for rest and travel" },
    { word: "journey", hint: "Act of traveling from one place to another" },
    { word: "adventure", hint: "Exciting or unusual experience" },
    { word: "explorer", hint: "Person who travels for discovery" },
    { word: "camera", hint: "Device for taking photos" },
    { word: "tripod", hint: "Three-legged camera stand" },
    { word: "lens", hint: "Part of camera for focusing" },
    { word: "portrait", hint: "Picture of a person" },
    { word: "landscape", hint: "Photo of scenery" },
    { word: "sunrise", hint: "Time when sun appears" },
    { word: "sunset", hint: "Time when sun disappears" },
    { word: "midnight", hint: "12 o'clock at night" },
    { word: "noon", hint: "12 o'clock in the day" },
    { word: "morning", hint: "Time after sunrise" },
    { word: "evening", hint: "Time before night" },
    { word: "season", hint: "Period of the year" },
    { word: "spring", hint: "Season of blooming flowers" },
    { word: "summer", hint: "Hottest season" },
    { word: "autumn", hint: "Season of falling leaves" },
    { word: "winter", hint: "Coldest season" },
    { word: "holiday", hint: "Day of rest or celebration" },
    { word: "family", hint: "Group related by blood" },
    { word: "parent", hint: "Father or mother" },
    { word: "child", hint: "Young human being" },
    { word: "brother", hint: "Male sibling" },
    { word: "sister", hint: "Female sibling" },
    { word: "uncle", hint: "Brother of a parent" },
    { word: "aunt", hint: "Sister of a parent" },
    { word: "cousin", hint: "Child of uncle or aunt" },
    { word: "grandparent", hint: "Parent of one's parent" },
    { word: "nephew", hint: "Son of brother or sister" },
    { word: "niece", hint: "Daughter of brother or sister" },
    { word: "neighbor", hint: "Person living nearby" },
    { word: "citizen", hint: "Member of a country" },
    { word: "worker", hint: "Person who works" },
    { word: "student", hint: "Person who studies" },
    { word: "teacher", hint: "Person who teaches" },
    { word: "doctor", hint: "Medical professional" },
    { word: "nurse", hint: "Person who cares for sick" },
    { word: "police", hint: "Law enforcement officer" },
    { word: "fireman", hint: "Person who fights fires" },
    { word: "soldier", hint: "Person serving in army" },
    { word: "chef", hint: "Person who cooks professionally" },
    { word: "baker", hint: "Person who bakes bread" },
    { word: "farmer", hint: "Person who works on farm" },
    { word: "driver", hint: "Person who drives" },
    { word: "pilot", hint: "Person who flies aircraft" },
    { word: "sailor", hint: "Person who works on ship" },
    { word: "artist", hint: "Person who creates art" },
    { word: "musician", hint: "Person who makes music" },
    { word: "actor", hint: "Person who performs roles" },
    { word: "writer", hint: "Person who writes books" },
    { word: "poet", hint: "Person who writes poems" },
    { word: "dancer", hint: "Person who dances" },
    { word: "athlete", hint: "Person who does sports" },
    { word: "player", hint: "Person who plays a game" },
    { word: "coach", hint: "Person who trains athletes" },
    { word: "referee", hint: "Person who enforces rules in game" },
    { word: "judge", hint: "Person who decides cases" },
    { word: "lawyer", hint: "Person who practices law" },
    { word: "engineer", hint: "Person who designs machines" },
    { word: "scientist", hint: "Person who does research" },
    { word: "inventor", hint: "Person who creates new things" },
    { word: "manager", hint: "Person who manages work" },
    { word: "leader", hint: "Person who leads group" },
    { word: "boss", hint: "Person in charge" },
    { word: "owner", hint: "Person who possesses something" },
    { word: "customer", hint: "Person who buys things" },
    { word: "client", hint: "Person who uses services" },
    { word: "guest", hint: "Person invited somewhere" },
    { word: "host", hint: "Person who receives guests" },
    { word: "visitor", hint: "Person who visits" },
    { word: "tourist", hint: "Person who travels for fun" },
    { word: "traveler", hint: "Person who travels" },
    { word: "passenger", hint: "Person traveling in vehicle" },
    { word: "resident", hint: "Person who lives in place" },
    { word: "tenant", hint: "Person who rents place" },
    { word: "owner", hint: "Person who possesses something" },
    { word: "buyer", hint: "Person who purchases something" },
    { word: "seller", hint: "Person who sells something" },
    { word: "merchant", hint: "Person who trades goods" },
    { word: "trader", hint: "Person who buys and sells" },
    { word: "vendor", hint: "Person who sells in market" },
    { word: "shopper", hint: "Person who shops" },
    { word: "cashier", hint: "Person who handles payments" },
    { word: "banker", hint: "Person working in bank" },
    { word: "accountant", hint: "Person who keeps financial records" },
    { word: "auditor", hint: "Person who checks accounts" },
    { word: "clerk", hint: "Person who does office work" },
    { word: "assistant", hint: "Person who helps" },
    { word: "secretary", hint: "Person who does administrative work" },
    { word: "receptionist", hint: "Person who greets visitors" },
    { word: "operator", hint: "Person who operates machine" },
    { word: "technician", hint: "Person skilled in technique" },
    { word: "mechanic", hint: "Person who repairs machines" },
    { word: "electrician", hint: "Person who fixes electrical systems" },
    { word: "plumber", hint: "Person who fixes pipes" },
    { word: "carpenter", hint: "Person who makes things with wood" },
    { word: "mason", hint: "Person who works with stone" },
    { word: "painter", hint: "Person who paints" },
    { word: "gardener", hint: "Person who tends gardens" },
    { word: "cleaner", hint: "Person who cleans" },
    { word: "janitor", hint: "Person who maintains building" },
    { word: "security", hint: "Person who guards place" },
    { word: "watchman", hint: "Person who keeps watch" },
    { word: "guard", hint: "Person who protects" },
    { word: "detective", hint: "Person who investigates crimes" },
    { word: "spy", hint: "Person who secretly collects information" },
    { word: "agent", hint: "Person who acts for another" },
    { word: "representative", hint: "Person who represents others" },
    { word: "ambassador", hint: "Official envoy" },
    { word: "diplomat", hint: "Person who handles negotiations" },
    { word: "minister", hint: "Head of government department" },
    { word: "president", hint: "Leader of country" },
    { word: "prime", hint: "Main minister of country" },
    { word: "king", hint: "Male ruler of country" },
    { word: "queen", hint: "Female ruler of country" },
    { word: "prince", hint: "Son of king or queen" },
    { word: "princess", hint: "Daughter of king or queen" },
    { word: "emperor", hint: "Ruler of empire" },
    { word: "chief", hint: "Leader of tribe" },
    { word: "elder", hint: "Older respected person" },
    { word: "sage", hint: "Wise person" },
    { word: "prophet", hint: "Person who predicts future" },
    { word: "priest", hint: "Religious leader" },
    { word: "monk", hint: "Religious man living in monastery" },
    { word: "nun", hint: "Religious woman living in convent" },
    { word: "saint", hint: "Holy person" },
    { word: "angel", hint: "Heavenly being" },
    { word: "demon", hint: "Evil spirit" },
    { word: "ghost", hint: "Spirit of dead person" },
    { word: "witch", hint: "Person with magical powers" },
    { word: "wizard", hint: "Male magic user" },
    { word: "sorcerer", hint: "Person who uses magic" },
    { word: "warlock", hint: "Male witch" },
    { word: "fairy", hint: "Small mythical being" },
    { word: "elf", hint: "Magical forest being" },
    { word: "dwarf", hint: "Short mythical miner" },
    { word: "giant", hint: "Very large person" },
    { word: "dragon", hint: "Mythical fire-breathing creature" },
    { word: "unicorn", hint: "Mythical horse with horn" },
    { word: "phoenix", hint: "Mythical bird reborn from ashes" },
    { word: "griffin", hint: "Mythical lion-eagle creature" },
    { word: "mermaid", hint: "Mythical sea woman" },
    { word: "centaur", hint: "Half man half horse" },
    { word: "werewolf", hint: "Man who turns into wolf" },
    { word: "vampire", hint: "Undead blood-drinking creature" },
    { word: "zombie", hint: "Reanimated dead person" },
    { word: "mummy", hint: "Preserved dead body" },
    { word: "ghost", hint: "Spirit of dead person" }
    // Add more to reach exactly 300 as needed!
];