// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "UHYSV",
  "type": "Hunt",
  "title": "Surface + Assassin Stars",
  "vocation": "paladin",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMTcwL1FZbzdUWklDLTIucG5nIn0=",
  "minLevel": 50,
  "maxLevel": 120,
  "minProfitH": 5000,
  "maxProfitH": 60000,
  "minXpH": 120000,
  "maxXpH": 320000,
  "upvoteCount": 13,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": "en-us",
  "videoLevel": null,
  "status": "published",
  "user": {
    "id": 1574,
    "type": "User",
    "username": "Sublime",
    "avatar": "skeleton",
    "role": "user",
    "membershipLevel": null
  },
  "videoId": "BgJUku__jgE",
  "videoStartAt": null,
  "centerCoordinates": "33250,31231,7",
  "instructions": "<p>Use a pair of soft boots and RoH to attack and, if you want to kill faster, use Divine Missile or Ethereal Spear spell at the same time. If you use them, just take care to fill up your mana.</p>\n<p></p>\n<p>🏹 You can change Assassin Stars to Bolts or Arrows but the waste will definitely increase, in that case, double the number of potions. If your level &lt; 80, use spears and your patience :).</p>\n<p></p>\n<p>Always attack the creature that has the highest chance of dealing damage to you:&nbsp;</p>\n<ul>\n  <li><strong>Buy the Assassin Stars on market, especially if your world is more populated, good chances of getting it for a value up to 90% less than NPCs;</strong></li>\n  <li>If there's a High Guard and a Leggionaire, attack the Leggionaire and avoid the High Guard's attacks;</li>\n  <li>Whenever possible, attack the Priests first, you can use area spells/runes or cancel their invisibility;</li>\n  <li>When there are several High Guards together, walk in circles to avoid luring more and use Fire Wall runes to isolate them;</li>\n</ul>\n<p>💰 Obsidian Knife can increase the profit, allows you to pick up between 10 and 20 leather per hour.</p>",
  "createdAt": "2022-01-13T03:00:59.024Z",
  "updatedAt": "2024-03-17T23:19:37.053Z",
  "dungeon": {
    "id": 157,
    "type": "Dungeon",
    "title": "Muggy Plains",
    "accountStatus": "premium",
    "entranceCoordinates": "33250,31231,7",
    "entranceDirections": "{\"blocks\":[{\"key\":\"1nvb7\",\"text\":\"Muggy Plains is located north of Zao. After completing the mission \\\"Messengers of Peace\\\" of The New Frontier Quest you can access the area:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":12,\"style\":\"BOLD\"}],\"entityRanges\":[{\"offset\":59,\"length\":29,\"key\":0}],\"data\":{}},{\"key\":\"6qv61\",\"text\":\"Go from Farmine to Zao.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"idr1\",\"text\":\"Walk to the mountain ([map c=\\\"33198,31349,7\\\" map]here[/map]) and pass through the teleport.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"4et26\",\"text\":\"Go to the north-east.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{\"0\":{\"type\":\"LINK\",\"mutability\":\"MUTABLE\",\"data\":{\"url\":\"https://tibia.fandom.com/wiki/The_New_Frontier_Quest/Spoiler#Mission_07:_Messengers_Of_Peace\"}}}}",
    "extra": {
      "hotd": false,
      "mailbox": true,
      "npc": true,
      "quest": true,
      "raid": true,
      "worldChange": false
    },
    "city": {
      "id": 10,
      "type": "City",
      "name": "Farmine"
    }
  },
  "requirements": [
    {
      "id": 186,
      "type": "DungeonRequirement",
      "dungeonId": 157,
      "description": "Mission \"Messengers Of Peace\" done of The New Frontier Quest",
      "link": "https://tibia.fandom.com/wiki/The_New_Frontier_Quest#Mission_07:_Messengers_Of_Peace"
    }
  ],
  "sections": [
    {
      "id": 1134,
      "type": "DungeonSection",
      "name": "All spawn",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 501,
          "type": "Creature",
          "title": "Lizard Zaogun",
          "formerNames": null,
          "healthPoints": 2955,
          "xpPoints": 1700,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9MaXphcmRfWmFvZ3VuLmdpZiJ9"
        },
        {
          "id": 502,
          "type": "Creature",
          "title": "Lizard High Guard",
          "formerNames": null,
          "healthPoints": 1800,
          "xpPoints": 1450,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9MaXphcmRfSGlnaF9HdWFyZC5naWYifQ=="
        },
        {
          "id": 500,
          "type": "Creature",
          "title": "Lizard Dragon Priest",
          "formerNames": null,
          "healthPoints": 1450,
          "xpPoints": 1320,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9MaXphcmRfRHJhZ29uX1ByaWVzdC5naWYifQ=="
        },
        {
          "id": 503,
          "type": "Creature",
          "title": "Lizard Legionnaire",
          "formerNames": null,
          "healthPoints": 1400,
          "xpPoints": 1100,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9MaXphcmRfTGVnaW9ubmFpcmUuZ2lmIn0="
        },
        {
          "id": 512,
          "type": "Creature",
          "title": "Killer Caiman",
          "formerNames": null,
          "healthPoints": 1500,
          "xpPoints": 900,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9LaWxsZXJfQ2FpbWFuLmdpZiJ9"
        },
        {
          "id": 405,
          "type": "Creature",
          "title": "Mutated Tiger",
          "formerNames": null,
          "healthPoints": 1100,
          "xpPoints": 750,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9NdXRhdGVkX1RpZ2VyLmdpZiJ9"
        },
        {
          "id": 36,
          "type": "Creature",
          "title": "Dragon",
          "formerNames": null,
          "healthPoints": 1000,
          "xpPoints": 700,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9EcmFnb24uZ2lmIn0="
        },
        {
          "id": 392,
          "type": "Creature",
          "title": "Mutated Bat",
          "formerNames": null,
          "healthPoints": 900,
          "xpPoints": 615,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9NdXRhdGVkX0JhdC5naWYifQ=="
        },
        {
          "id": 416,
          "type": "Creature",
          "title": "Death Blob",
          "formerNames": null,
          "healthPoints": 320,
          "xpPoints": 300,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9EZWF0aF9CbG9iLmdpZiJ9"
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 4428,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 40000,
      "percentage": 0.01,
      "isInestimable": false,
      "item": {
        "id": 1692,
        "type": "Item",
        "title": "Lizard Trophy",
        "pluralizedTitle": "Lizard Trophies",
        "formerNames": null,
        "minValue": 40000,
        "maxValue": 80000,
        "npcBuyValue": 8000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0xpemFyZF9Ucm9waHkuZ2lmIn0="
      }
    },
    {
      "id": 4398,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 14000,
      "percentage": 0.53,
      "isInestimable": false,
      "item": {
        "id": 1586,
        "type": "Item",
        "title": "Zaoan Armor",
        "pluralizedTitle": "Zaoan Armors",
        "formerNames": null,
        "minValue": 14000,
        "maxValue": 20000,
        "npcBuyValue": 14000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1phb2FuX0FybW9yLmdpZiJ9"
      }
    },
    {
      "id": 4397,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 14000,
      "percentage": 0.93,
      "isInestimable": false,
      "item": {
        "id": 1676,
        "type": "Item",
        "title": "Zaoan Legs",
        "pluralizedTitle": "Zaoan Legs",
        "formerNames": null,
        "minValue": 14000,
        "maxValue": 20000,
        "npcBuyValue": 14000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1phb2FuX0xlZ3MuZ2lmIn0="
      }
    }
  ],
  "huntRequiredItems": [
    {
      "id": 135,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 92,
        "type": "DungeonRequiredItem",
        "dungeonId": 157,
        "requiredItem": {
          "id": 8,
          "type": "RequiredItem",
          "item": {
            "id": 696,
            "type": "Item",
            "title": "Obsidian Knife",
            "pluralizedTitle": "Obsidian Knives",
            "formerNames": null,
            "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL09ic2lkaWFuX0tuaWZlLmdpZiJ9"
          }
        }
      },
      "huntId": 170
    }
  ],
  "huntRequirements": [
    {
      "id": 118,
      "type": "HuntRequirement",
      "huntId": 170,
      "dungeonRequirement": {
        "id": 186,
        "type": "DungeonRequirement",
        "dungeonId": 157,
        "description": "Mission \"Messengers Of Peace\" done of The New Frontier Quest",
        "link": "https://tibia.fandom.com/wiki/The_New_Frontier_Quest#Mission_07:_Messengers_Of_Peace"
      }
    }
  ],
  "huntSupplies": [
    {
      "id": 682,
      "type": "HuntSupply",
      "quantity": 30,
      "vocation": "paladin",
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
    },
    {
      "id": 683,
      "type": "HuntSupply",
      "quantity": 40,
      "vocation": "paladin",
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
      "id": 684,
      "type": "HuntSupply",
      "quantity": 300,
      "vocation": "paladin",
      "supply": {
        "id": 147,
        "type": "Supply",
        "item": {
          "id": 871,
          "type": "Item",
          "title": "Assassin Star",
          "pluralizedTitle": "Assassin Stars",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0Fzc2Fzc2luX1N0YXIuZ2lmIn0="
        }
      }
    },
    {
      "id": 685,
      "type": "HuntSupply",
      "quantity": 1,
      "vocation": "paladin",
      "supply": {
        "id": 142,
        "type": "Supply",
        "item": {
          "id": 155,
          "type": "Item",
          "title": "Pair of Soft Boots",
          "pluralizedTitle": "Pair of Soft Boots",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1BhaXJfb2ZfU29mdF9Cb290cy5naWYifQ=="
        }
      }
    },
    {
      "id": 686,
      "type": "HuntSupply",
      "quantity": 5,
      "vocation": "paladin",
      "supply": {
        "id": 112,
        "type": "Supply",
        "item": {
          "id": 103,
          "type": "Item",
          "title": "Ring of Healing",
          "pluralizedTitle": "Ring of Healings",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1Jpbmdfb2ZfSGVhbGluZy5naWYifQ=="
        }
      }
    },
    {
      "id": 687,
      "type": "HuntSupply",
      "quantity": 20,
      "vocation": "paladin",
      "supply": {
        "id": 41,
        "type": "Supply",
        "item": {
          "id": 1058,
          "type": "Item",
          "title": "Fire Wall Rune",
          "pluralizedTitle": "Fire Wall Runes",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0ZpcmVfV2FsbF9SdW5lLmdpZiJ9"
        }
      }
    }
  ],
  "lootUpdatedAt": "2022-01-24T23:02:44.047Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2022-01-24T23:02:44.020Z",
  "youtubeChannel": {
    "id": 2,
    "type": "YoutubeChannel",
    "name": "Eric / Psykik",
    "youtubeId": "UCl3CvJSRKWrZ-Nvj6tBqz-g",
    "verifiedAt": null,
    "user": null
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
