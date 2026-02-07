# PROGRESSO PESQUISA DE DADOS - Rubi-Notes

## Arquivos Criados (2026-02-05)

### 1. Creatures Avançadas
**Arquivo:** `/rubi-notes/src/data/creatures-advanced.ts`
- **15 criaturas** de nível 150+ (Hydra, Dragon Lord, Behemoth, Undead Dragon, Frost Dragon, Ghastly Dragon, Wyvern, Dragon, Elder Wyrm, Crystal Spider, Giant Spider, Tarantula, Stone Golem, Gargoyle, Scorpion)
- Cada criatura com: HP, EXP, armor, speed, bestiaryClass, bestiaryKills, location, weakness, immunities, abilities, loot, difficulty, dangerLevel, recommendedLevel, recommendedVocations, tips
- Helper functions para filtrar por level, dificuldade, vocação, fraqueza, profit, XP

### 2. Bosses Extendidos
**Arquivo:** `/rubi-notes/src/data/bosses-extended.ts`
- **8 bosses** (Ferumbras, Mazadora, Apocalypse, Ghazbaran, Orshabaal, Morgaroth, Gaz'haragoth, The Nightmare)
- Cada boss com: HP, EXP, armor, speed, cooldown, respawnTime, location, mechanics, weakness, immunities, loot, soloable, recommendedLevel, recommendedVocations, tips, notes
- Helper functions para filtrar por tier, level, categoria, cooldown

### 3. Hunts Extendidas
**Arquivo:** `/rubi-notes/src/data/hunts-extended-v3.ts`
- **13 hunts** (low: Rotworms, Trolls, Goblins; mid: Cyclops, Orcs, Dragons; high: Waspoids, Stonerefiller, Giant Spiders, Hydras; very high: Demon Trio, Undead Dragon; solo: Crypt Shamblers)
- Cada hunt com: levelRange, location, monsters (com stats detalhados), stats (profit/hora, XP/hora, ajustado por loot rate 2.5x), recommendedVocations, equipment, supplies, rewards, tips, tags
- Helper functions para filtrar por level, vocação, tags, profit, XP

### 4. Spells
**Arquivo:** `/rubi-notes/src/data/spells.ts`
- **60+ magias** (Knight: Exori, Berserk, Front Sweep, Whirlwind Throw, etc.; Sorcerer: Great Energy Beam, Great Fireball, etc.; Druid: Groundshaker, Ice Wave, Stalagmite, etc.; Paladin: Divine Missile, Divine Caliber, Divine Caldera, etc.; Monk: Fist of Fury, Iron Palm, etc.; Runes: Fireball, Avalanche, Sudden Death, etc.)
- Cada magia com: name, words, vocation, type, cooldown, requirement, damage/healing formulas, buff, description, PVP notes
- Helper functions para filtrar por vocação, tipo, level, magic level, damage/healing/buff

### 5. Outfits
**Arquivo:** `/rubi-notes/src/data/outfits.ts`
- **18 outfits** (Citizen, Nobleman, Hunter, Mage, Warrior, Barbarian, Druid, Wizard, Pirate, Assassin, Beggar, Shaman, Norseman, Nightmare, Ferumbras' Hat, Summer, Circus, Golden)
- Cada outfit com: vocation, gender, premium, store price, unlock methods (addons), requirements, costs, rarity, description, image
- Helper functions para filtrar por vocação, gender, premium, store, rarity

### 6. Mounts
**Arquivo:** `/rubi-notes/src/data/mounts.ts`
- **30 montarias** (Riding Boat, Blazebringer, Magma Crawler, Glooth Glider, Rift Walker, Undead Cavebear, Flying Disk, Inferniote, Snowpelt, Doombringer, Steel-beam, Panda, Capybara, Halloween Hare, Christmas Horse, Shadow Ferret, Emerald Tortoise, Golden Dragon, Tiger, Dragon, Wolf, Horse, Pony, Black Sheep, Netherwing, Fenrir, Hippogryph, Phoenix, Crystal Wolf, Unicorn, Mammoth)
- Cada montaria com: speed, premium, store price, unlock method, requirements, cost, rarity, description, image
- Helper functions para filtrar por speed, premium, store, unlock method, rarity

### 7. NPCs
**Arquivo:** `/rubi-notes/src/data/npcs.ts`
- **20 NPCs** (Clement, Amber, The King, Haroun, Captain Bluebeard, Captain Gull, Asha, Frimbrik, Captain Seagull, Captain Seastorm, Captain Bluebird, Captain Fearless, Captain Seahorse, Captain Seahawk, Norf, Alesar, Elane, Kasmir, Sister Celina, Azerus, Eliott)
- Cada NPC com: location, position, town, services (buy, sell, quest, travel, deposit, heal, blessing), items, description, notes
- Helper functions para filtrar por town, service type (travel, depot, heal, blessing, quest, buy, sell)

### 8. Towns
**Arquivo:** `/rubi-notes/src/data/towns.ts`
- **16 cidades** (Thais, Carlin, Venore, Kazordoon, Edron, Darashia, Ankrahmun, Port Hope, Yalahar, Liberty Bay, Ab'Dendriel, Svargrond, Rathleton, Roshamuul, Gray Island, Cormaya)
- Cada cidade com: position, continent, type, premium, hasTemple/Depot/Boat, levelRequired, recommendedLevel, huntingGrounds, travelRoutes, description, notes
- Helper functions para filtrar por continent, type, premium, level, hunting ground

### 9. Keys
**Arquivo:** `/rubi-notes/src/data/keys.ts`
- **25 chaves** (Temple Key, Cyclopolis Key, Deep Dragon Key, Hydra Cave Key, Pits of Insectoid Key, Demon Helmet Key, Magic Plate Armor Key, Fire Axe Key, Stone Skin Amulet Key, Giant Sword Key, Shadow Sword Key, Bright Sword Key, Thunder Hammer Key, War Hammer Key, Dragon Lance Key, Knight Armor Key, Crown Armor Key, Golden Armor Key, Mysterious Key, Depot Key, House Key, Guildhall Key, The Annihilator Key, The Pits of Inferno Key, The Wrath of the Emperor Key, The Demon Oak Key)
- Cada chave com: number, name, quest, location, position, use, description, notes
- Helper functions para filtrar por number, quest, location, rare keys, quest reward keys

## Próximos Passos

### Integração no Site
1. Criar página `/creatures` com lista de todas as criaturas
2. Criar página `/bosses-extended` com detalhes completos de bosses
3. Criar página `/hunts-extended` com profit/XP calculados
4. Criar página `/spells` com magias por vocação
5. Criar página `/outfits` com outfits e raridades
6. Criar página `/mounts` com montarias
7. Criar página `/npcs` com NPCs e serviços
8. Criar página `/towns` com cidades e rotas de viagem
9. Criar página `/keys` com chaves de quests

### Links na Navegação
- Adicionar links para todas as novas páginas no Navbar
- Organizar em seções (Jogo, Social, Itens)

---

*Atualizado: 2026-02-05*
