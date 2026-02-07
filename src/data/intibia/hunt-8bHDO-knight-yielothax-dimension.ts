// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "8bHDO",
  "type": "Hunt",
  "title": null,
  "vocation": "knight",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMjQvNXRHRzliY2ktMDE5LWtuaWdodC15aWVsb3RoYXgtZGltZW5zaW9uLnBuZyJ9",
  "minLevel": 90,
  "maxLevel": 130,
  "minProfitH": 50000,
  "maxProfitH": 150000,
  "minXpH": 500000,
  "maxXpH": 800000,
  "upvoteCount": 34,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": "pt-br",
  "videoLevel": null,
  "status": "published",
  "user": {
    "id": 1,
    "type": "User",
    "username": "warturtle",
    "avatar": "gamemaster",
    "role": "admin",
    "membershipLevel": "counselor"
  },
  "videoId": "NjpvAaf_eQM",
  "videoStartAt": null,
  "centerCoordinates": "32946,31616,8",
  "instructions": "<p>Great spawn for knights from level 90 to 130 for experience and profit. The recommended skills are 85/75+.</p>\n<p></p>\n<p>⚔️ <strong>Strategy</strong></p>\n<p>Try to lure no more than 3 Yielothax and avoid being in front of all of them at the same time, because their wave deal a high damage and can send you back to temple.</p>\n<p></p>\n<p>Do a big loop counterclockwise, luring and killing the mobs around you with area attack spells (exori, exori min, exori gran).</p>\n<p></p>\n<p>💯 <strong>Experience</strong></p>\n<p>You can make between 500k/h and 800k/h, and up to 1.2kk/h on green stamina.</p>\n<p></p>\n<p>💰 <strong>Loot</strong></p>\n<p>You can make 50~150k of profit per hour depending on your skill, level and imbuiments.</p>\n<p>The main loot here is Might Ring, that drops a lot and can be sold for 5k.</p>\n<p></p>\n<p>🛡️<strong> Equipment</strong></p>\n<p>Yielothax's abilities are melee and poison, so it's recommended to use a physical damage protection set.</p>\n<p></p>\n<p>⚗️<strong> Imbuiments</strong></p>\n<ul>\n  <li>Basic Critical in weapon</li>\n  <li>Basic Mana Leech in weapon and helmet</li>\n  <li>Intricate Life Leech in armor and weapon</li>\n</ul>\n<p>🦄 <strong>Boss</strong></p>\n<p>If you have killed 250 Yielothax and your server has killed 2000 in total, you will be able to kill the Raging Mage boss. He appears after killing the Energized Raging Mage in the tower to access Yielothax Dimension.</p>\n<p></p>\n<p>Raging Mage very rarely drops Elemental Spikes which can be sold for 30kk~120kk.</p>",
  "createdAt": "2021-11-03T03:45:08.457Z",
  "updatedAt": "2024-03-17T21:34:39.343Z",
  "dungeon": {
    "id": 209,
    "type": "Dungeon",
    "title": "Yielothax Dimension",
    "accountStatus": "premium",
    "entranceCoordinates": "32947,31616,8",
    "entranceDirections": "{\"blocks\":[{\"key\":\"8tba\",\"text\":\"Yielothax Dimension is located in Zao. After starting The New Frontier Quest you can access the location:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":19,\"style\":\"BOLD\"}],\"entityRanges\":[{\"offset\":54,\"length\":22,\"key\":0}],\"data\":{}},{\"key\":\"c5vk7\",\"text\":\"Go from Farmine to Zao.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"f61la\",\"text\":\"Walk to the Mage's Tower ([map c=\\\"33135,31510,7\\\" map]here[/map]) and go up until the last floor.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"3440r\",\"text\":\"Step on the dimensional portal to be teleported to Yielothax Dimension.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{\"0\":{\"type\":\"LINK\",\"mutability\":\"MUTABLE\",\"data\":{\"url\":\"https://tibia.fandom.com/wiki/The_New_Frontier_Quest/Spoiler\"}}}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": false,
      "quest": true,
      "raid": false,
      "worldChange": true
    },
    "city": {
      "id": 10,
      "type": "City",
      "name": "Farmine"
    }
  },
  "requirements": [
    {
      "id": 264,
      "type": "DungeonRequirement",
      "dungeonId": 209,
      "description": "World Change \"The Mage's Tower\" must be active",
      "link": "https://tibia.fandom.com/wiki/The_Mage%27s_Tower_World_Change"
    },
    {
      "id": 265,
      "type": "DungeonRequirement",
      "dungeonId": 209,
      "description": "Mission \"Messengers of Peace\" done of The New Frontier Quest",
      "link": "https://tibia.fandom.com/wiki/The_New_Frontier_Quest/Spoiler#Mission_07:_Messengers_Of_Peace"
    }
  ],
  "sections": [
    {
      "id": 1475,
      "type": "DungeonSection",
      "name": "Floor -2",
      "position": 2,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 593,
          "type": "Creature",
          "title": "Yielothax",
          "formerNames": null,
          "healthPoints": 1500,
          "xpPoints": 1250,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9ZaWVsb3RoYXguZ2lmIn0="
        }
      ]
    },
    {
      "id": 1474,
      "type": "DungeonSection",
      "name": "Floor -1",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 593,
          "type": "Creature",
          "title": "Yielothax",
          "formerNames": null,
          "healthPoints": 1500,
          "xpPoints": 1250,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9ZaWVsb3RoYXguZ2lmIn0="
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 4893,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 11000,
      "percentage": 0.49,
      "isInestimable": false,
      "item": {
        "id": 959,
        "type": "Item",
        "title": "Lightning Legs",
        "pluralizedTitle": "Lightning Legs",
        "formerNames": null,
        "minValue": 11000,
        "maxValue": 40000,
        "npcBuyValue": 11000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0xpZ2h0bmluZ19MZWdzLmdpZiJ9"
      }
    },
    {
      "id": 4891,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 8000,
      "percentage": 0.51,
      "isInestimable": false,
      "item": {
        "id": 737,
        "type": "Item",
        "title": "Epee",
        "pluralizedTitle": "Epees",
        "formerNames": null,
        "minValue": 8000,
        "maxValue": null,
        "npcBuyValue": 8000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0VwZWUuZ2lmIn0="
      }
    },
    {
      "id": 4895,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 4000,
      "percentage": 0.29,
      "isInestimable": false,
      "item": {
        "id": 2093,
        "type": "Item",
        "title": "Broken Ring of Ending",
        "pluralizedTitle": "Broken Ring of Endings",
        "formerNames": null,
        "minValue": 4000,
        "maxValue": null,
        "npcBuyValue": 4000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0Jyb2tlbl9SaW5nX29mX0VuZGluZy5naWYifQ=="
      }
    }
  ],
  "huntRequiredItems": [],
  "huntRequirements": [
    {
      "id": 179,
      "type": "HuntRequirement",
      "huntId": 24,
      "dungeonRequirement": {
        "id": 264,
        "type": "DungeonRequirement",
        "dungeonId": 209,
        "description": "World Change \"The Mage's Tower\" must be active",
        "link": "https://tibia.fandom.com/wiki/The_Mage%27s_Tower_World_Change"
      }
    },
    {
      "id": 181,
      "type": "HuntRequirement",
      "huntId": 24,
      "dungeonRequirement": {
        "id": 265,
        "type": "DungeonRequirement",
        "dungeonId": 209,
        "description": "Mission \"Messengers of Peace\" done of The New Frontier Quest",
        "link": "https://tibia.fandom.com/wiki/The_New_Frontier_Quest/Spoiler#Mission_07:_Messengers_Of_Peace"
      }
    }
  ],
  "huntSupplies": [
    {
      "id": 72,
      "type": "HuntSupply",
      "quantity": 600,
      "vocation": "knight",
      "supply": {
        "id": 8,
        "type": "Supply",
        "item": {
          "id": 970,
          "type": "Item",
          "title": "Strong Mana Potion",
          "pluralizedTitle": "Strong Mana Potions",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1N0cm9uZ19NYW5hX1BvdGlvbi5naWYifQ=="
        }
      }
    },
    {
      "id": 73,
      "type": "HuntSupply",
      "quantity": 30,
      "vocation": "knight",
      "supply": {
        "id": 4,
        "type": "Supply",
        "item": {
          "id": 973,
          "type": "Item",
          "title": "Great Health Potion",
          "pluralizedTitle": "Great Health Potions",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0dyZWF0X0hlYWx0aF9Qb3Rpb24uZ2lmIn0="
        }
      }
    },
    {
      "id": 74,
      "type": "HuntSupply",
      "quantity": 60,
      "vocation": "knight",
      "supply": {
        "id": 3,
        "type": "Supply",
        "item": {
          "id": 972,
          "type": "Item",
          "title": "Strong Health Potion",
          "pluralizedTitle": "Strong Health Potions",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1N0cm9uZ19IZWFsdGhfUG90aW9uLmdpZiJ9"
        }
      }
    }
  ],
  "lootUpdatedAt": "2021-11-15T00:45:48.580Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-11-03T03:45:08.457Z",
  "youtubeChannel": {
    "id": 17,
    "type": "YoutubeChannel",
    "name": "Alvaroksin",
    "youtubeId": "UCYa9ePn1-9pZEgdbdSmnPKQ",
    "verifiedAt": null,
    "user": null
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
