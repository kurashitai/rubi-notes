// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "r1ZAB",
  "type": "Hunt",
  "title": null,
  "vocation": "knight",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMjcvVVBXYVN2dWgtb2xkLWZvcnRyZXNzLnBuZyJ9",
  "minLevel": 130,
  "maxLevel": 250,
  "minProfitH": 0,
  "maxProfitH": 20000,
  "minXpH": 400000,
  "maxXpH": 650000,
  "upvoteCount": 12,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": "en-us",
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
  "videoId": "NyI4iZI0pQ4",
  "videoStartAt": null,
  "centerCoordinates": "33224,31651,7",
  "instructions": "<p>Great place for knights level 140+, mainly for experience but also for loot if you are lucky.</p>\n<p></p>\n<p>🛡️ <strong>Equipment</strong></p>\n<p>Bring weapon rings (axe/club/sword) or, if you prefer regeneration, soft boots + ring of healing.</p>\n<p></p>\n<p>⚔️ <strong>Strategy</strong></p>\n<p>Lure creatures and kill them with area spells (exori, exori min, exori gran, etc).</p>\n<p></p>\n<p>On floor -2, rotate clockwise, enter in each room and clear it.</p>\n<p></p>\n<p>If the spawn is taken or you are in a team, you can go to floor -3. Just rotate clockwise on the outside rooms.</p>\n<p></p>\n<p>💰 <strong>Loot</strong></p>\n<p>The profit will depend on your lucky (0~20k/h), but the creatures here drop crown set parts, knight legs, warrior helmets and more valuable items.</p>\n<p></p>\n<p>Looting two-handed swords, hammers and halberds is good to have some extra profit.</p>",
  "createdAt": "2021-11-09T21:59:20.192Z",
  "updatedAt": "2024-03-17T23:17:33.097Z",
  "dungeon": {
    "id": 278,
    "type": "Dungeon",
    "title": "Old Fortress",
    "accountStatus": "premium",
    "entranceCoordinates": "33224,31651,7",
    "entranceDirections": "{\"blocks\":[{\"key\":\"bivr\",\"text\":\"Old Fortress is located north of Edron, [map c=\\\"33224,31651,7\\\" map]here[/map]. To get there:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":13,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"7vh9g\",\"text\":\"Cross the mountain, [map c=\\\"33241,31767,7\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"dgske\",\"text\":\"Walk to the north and go down the ladder, [map c=\\\"33224,31651,7\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": false,
      "quest": true,
      "raid": false,
      "worldChange": false
    },
    "city": {
      "id": 9,
      "type": "City",
      "name": "Edron"
    }
  },
  "requirements": [],
  "sections": [
    {
      "id": 1165,
      "type": "DungeonSection",
      "name": "Entrance",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 217,
          "type": "Creature",
          "title": "Wyvern",
          "formerNames": null,
          "healthPoints": 795,
          "xpPoints": 515,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9XeXZlcm4uZ2lmIn0="
        }
      ]
    },
    {
      "id": 1166,
      "type": "DungeonSection",
      "name": "Floor -1",
      "position": 2,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 949,
          "type": "Creature",
          "title": "Vicious Squire",
          "formerNames": null,
          "healthPoints": 1000,
          "xpPoints": 900,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9WaWNpb3VzX1NxdWlyZS5naWYifQ=="
        },
        {
          "id": 79,
          "type": "Creature",
          "title": "Bonebeast",
          "formerNames": null,
          "healthPoints": 515,
          "xpPoints": 580,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Cb25lYmVhc3QuZ2lmIn0="
        },
        {
          "id": 24,
          "type": "Creature",
          "title": "Necromancer",
          "formerNames": null,
          "healthPoints": 580,
          "xpPoints": 580,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9OZWNyb21hbmNlci5naWYifQ=="
        }
      ]
    },
    {
      "id": 1167,
      "type": "DungeonSection",
      "name": "Floor -2",
      "position": 3,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 951,
          "type": "Creature",
          "title": "Vile Grandmaster",
          "formerNames": null,
          "healthPoints": 1700,
          "xpPoints": 1500,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9WaWxlX0dyYW5kbWFzdGVyLmdpZiJ9"
        },
        {
          "id": 2,
          "type": "Creature",
          "title": "Hero",
          "formerNames": null,
          "healthPoints": 1400,
          "xpPoints": 1200,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9IZXJvLmdpZiJ9"
        },
        {
          "id": 950,
          "type": "Creature",
          "title": "Renegade Knight",
          "formerNames": null,
          "healthPoints": 1450,
          "xpPoints": 1200,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9SZW5lZ2FkZV9LbmlnaHQuZ2lmIn0="
        },
        {
          "id": 949,
          "type": "Creature",
          "title": "Vicious Squire",
          "formerNames": null,
          "healthPoints": 1000,
          "xpPoints": 900,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9WaWNpb3VzX1NxdWlyZS5naWYifQ=="
        },
        {
          "id": 802,
          "type": "Creature",
          "title": "Blood Priest",
          "formerNames": null,
          "healthPoints": 820,
          "xpPoints": 900,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9CbG9vZF9Qcmllc3QuZ2lmIn0="
        },
        {
          "id": 83,
          "type": "Creature",
          "title": "Lich",
          "formerNames": null,
          "healthPoints": 880,
          "xpPoints": 900,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9MaWNoLmdpZiJ9"
        },
        {
          "id": 24,
          "type": "Creature",
          "title": "Necromancer",
          "formerNames": null,
          "healthPoints": 580,
          "xpPoints": 580,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9OZWNyb21hbmNlci5naWYifQ=="
        }
      ]
    },
    {
      "id": 1168,
      "type": "DungeonSection",
      "name": "Floor -3",
      "position": 4,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 951,
          "type": "Creature",
          "title": "Vile Grandmaster",
          "formerNames": null,
          "healthPoints": 1700,
          "xpPoints": 1500,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9WaWxlX0dyYW5kbWFzdGVyLmdpZiJ9"
        },
        {
          "id": 2,
          "type": "Creature",
          "title": "Hero",
          "formerNames": null,
          "healthPoints": 1400,
          "xpPoints": 1200,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9IZXJvLmdpZiJ9"
        },
        {
          "id": 950,
          "type": "Creature",
          "title": "Renegade Knight",
          "formerNames": null,
          "healthPoints": 1450,
          "xpPoints": 1200,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9SZW5lZ2FkZV9LbmlnaHQuZ2lmIn0="
        },
        {
          "id": 83,
          "type": "Creature",
          "title": "Lich",
          "formerNames": null,
          "healthPoints": 880,
          "xpPoints": 900,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9MaWNoLmdpZiJ9"
        },
        {
          "id": 802,
          "type": "Creature",
          "title": "Blood Priest",
          "formerNames": null,
          "healthPoints": 820,
          "xpPoints": 900,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9CbG9vZF9Qcmllc3QuZ2lmIn0="
        },
        {
          "id": 949,
          "type": "Creature",
          "title": "Vicious Squire",
          "formerNames": null,
          "healthPoints": 1000,
          "xpPoints": 900,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9WaWNpb3VzX1NxdWlyZS5naWYifQ=="
        },
        {
          "id": 408,
          "type": "Creature",
          "title": "Undead Gladiator",
          "formerNames": null,
          "healthPoints": 1000,
          "xpPoints": 800,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9VbmRlYWRfR2xhZGlhdG9yLmdpZiJ9"
        },
        {
          "id": 79,
          "type": "Creature",
          "title": "Bonebeast",
          "formerNames": null,
          "healthPoints": 515,
          "xpPoints": 580,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Cb25lYmVhc3QuZ2lmIn0="
        },
        {
          "id": 24,
          "type": "Creature",
          "title": "Necromancer",
          "formerNames": null,
          "healthPoints": 580,
          "xpPoints": 580,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9OZWNyb21hbmNlci5naWYifQ=="
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 837,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 400000,
      "percentage": 0.05,
      "isInestimable": false,
      "item": {
        "id": 1936,
        "type": "Item",
        "title": "Maxilla Maximus",
        "pluralizedTitle": "Maxilla Maximus",
        "formerNames": null,
        "minValue": 400000,
        "maxValue": 1100000,
        "npcBuyValue": null,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL01heGlsbGFfTWF4aW11cy5naWYifQ=="
      }
    },
    {
      "id": 273,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 30000,
      "percentage": 0.2,
      "isInestimable": false,
      "item": {
        "id": 1,
        "type": "Item",
        "title": "Boots of Haste",
        "pluralizedTitle": "Boots of Hastes",
        "formerNames": null,
        "minValue": 30000,
        "maxValue": null,
        "npcBuyValue": 30000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0Jvb3RzX29mX0hhc3RlLmdpZiJ9"
      }
    },
    {
      "id": 6512,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 13000,
      "percentage": 0.3,
      "isInestimable": false,
      "item": {
        "id": 1123,
        "type": "Item",
        "title": "Spellbook of Mind Control",
        "pluralizedTitle": "Spellbook of Mind Controls",
        "formerNames": null,
        "minValue": 13000,
        "maxValue": 30000,
        "npcBuyValue": 13000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1NwZWxsYm9va19vZl9NaW5kX0NvbnRyb2wuZ2lmIn0="
      }
    }
  ],
  "huntRequiredItems": [],
  "huntRequirements": [],
  "huntSupplies": [
    {
      "id": 80,
      "type": "HuntSupply",
      "quantity": 1100,
      "vocation": "knight",
      "supply": {
        "id": 7,
        "type": "Supply",
        "item": {
          "id": 977,
          "type": "Item",
          "title": "Mana Potion",
          "pluralizedTitle": "Mana Potions",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL01hbmFfUG90aW9uLmdpZiJ9"
        }
      }
    },
    {
      "id": 81,
      "type": "HuntSupply",
      "quantity": 50,
      "vocation": "knight",
      "supply": {
        "id": 5,
        "type": "Supply",
        "item": {
          "id": 1062,
          "type": "Item",
          "title": "Ultimate Health Potion",
          "pluralizedTitle": "Ultimate Health Potions",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1VsdGltYXRlX0hlYWx0aF9Qb3Rpb24uZ2lmIn0="
        }
      }
    },
    {
      "id": 82,
      "type": "HuntSupply",
      "quantity": 4,
      "vocation": "knight",
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
      "id": 83,
      "type": "HuntSupply",
      "quantity": 1,
      "vocation": "knight",
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
    }
  ],
  "lootUpdatedAt": "2021-11-15T00:45:48.608Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-11-09T21:59:20.192Z",
  "youtubeChannel": {
    "id": 13,
    "type": "YoutubeChannel",
    "name": "Triznok",
    "youtubeId": "UCrymBQ4YGeLwPTQ2i9vVqaA",
    "verifiedAt": null,
    "user": null
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
