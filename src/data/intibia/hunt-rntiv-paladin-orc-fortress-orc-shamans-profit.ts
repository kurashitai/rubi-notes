// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "rntiv",
  "type": "Hunt",
  "title": "Orc Shamans + Profit",
  "vocation": "paladin",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMTUzL3VYdnpBc1FwLTgtT3JjX0ZvcnRyZXNzLW1pbi5wbmcifQ==",
  "minLevel": 50,
  "maxLevel": 80,
  "minProfitH": 50000,
  "maxProfitH": 70000,
  "minXpH": 60000,
  "maxXpH": 90000,
  "upvoteCount": 12,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": "pt-br",
  "videoLevel": null,
  "status": "published",
  "user": {
    "id": 1275,
    "type": "User",
    "username": "Thiago",
    "avatar": "skeleton",
    "role": "user",
    "membershipLevel": null
  },
  "videoId": "gW-zprQwz1c",
  "videoStartAt": 11,
  "centerCoordinates": "32858,31758,7",
  "instructions": "<p>Good hunt to do a moderate amount of experience and a profit that can vary between 50k and 70k (or even more, depending on the level); this profit is due to Broken Shamanic Staff (4-6k), which is dropped by the Orc Shaman and is used to make Imbuements.</p>\n<p></p>\n<p>You can get 10 to 15 staffs in one hour, depending on your luck and level.</p>\n<p></p>\n<p>💰 This hunt was done spending as little as possible, that's why, with the exception of Enchanted Spear, only ammunition that is sold in the free area was used, thus enabling even Free Account players to equip themselves to hunt in that location.</p>",
  "createdAt": "2022-01-05T16:07:07.708Z",
  "updatedAt": "2024-03-17T23:13:40.406Z",
  "dungeon": {
    "id": 12,
    "type": "Dungeon",
    "title": "Orc Fortress",
    "accountStatus": "free",
    "entranceCoordinates": "32936,31766,7",
    "entranceDirections": "{\"blocks\":[{\"key\":\"fm0l\",\"text\":\"Ulderek's Rock (aka Orc Fortress) is located north-west of Venore and south-east of Ab'dendriel. To get there:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":14,\"style\":\"BOLD\"},{\"offset\":20,\"length\":12,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"95hod\",\"text\":\"Walk from Venore to the Amazon Camp ([map c=\\\"32816,31917,7\\\" map]here[/map]), and cross the bridge.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"bujkg\",\"text\":\"Walk to the fortress entrance ([map c=\\\"32873,31772,7\\\" map]here[/map]).\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "extra": {
      "hotd": false,
      "mailbox": true,
      "npc": true,
      "quest": true,
      "raid": true,
      "worldChange": false
    },
    "city": {
      "id": 2,
      "type": "City",
      "name": "Venore"
    }
  },
  "requirements": [],
  "sections": [
    {
      "id": 1400,
      "type": "DungeonSection",
      "name": "Surface",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 63,
          "type": "Creature",
          "title": "Orc Warlord",
          "formerNames": null,
          "healthPoints": 950,
          "xpPoints": 670,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9PcmNfV2FybG9yZC5naWYifQ=="
        },
        {
          "id": 58,
          "type": "Creature",
          "title": "Orc Leader",
          "formerNames": null,
          "healthPoints": 450,
          "xpPoints": 270,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9PcmNfTGVhZGVyLmdpZiJ9"
        },
        {
          "id": 61,
          "type": "Creature",
          "title": "Orc Berserker",
          "formerNames": null,
          "healthPoints": 210,
          "xpPoints": 195,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9PcmNfQmVyc2Vya2VyLmdpZiJ9"
        },
        {
          "id": 31,
          "type": "Creature",
          "title": "Cyclops",
          "formerNames": null,
          "healthPoints": 260,
          "xpPoints": 150,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9DeWNsb3BzLmdpZiJ9"
        },
        {
          "id": 59,
          "type": "Creature",
          "title": "Orc Rider",
          "formerNames": null,
          "healthPoints": 180,
          "xpPoints": 110,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9PcmNfUmlkZXIuZ2lmIn0="
        },
        {
          "id": 60,
          "type": "Creature",
          "title": "Orc Shaman",
          "formerNames": null,
          "healthPoints": 115,
          "xpPoints": 110,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9PcmNfU2hhbWFuLmdpZiJ9"
        },
        {
          "id": 806,
          "type": "Creature",
          "title": "Rorc",
          "formerNames": null,
          "healthPoints": 260,
          "xpPoints": 105,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Sb3JjLmdpZiJ9"
        },
        {
          "id": 77,
          "type": "Creature",
          "title": "War Wolf",
          "formerNames": null,
          "healthPoints": 140,
          "xpPoints": 55,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9XYXJfV29sZi5naWYifQ=="
        },
        {
          "id": 64,
          "type": "Creature",
          "title": "Orc Warrior",
          "formerNames": null,
          "healthPoints": 125,
          "xpPoints": 50,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9PcmNfV2Fycmlvci5naWYifQ=="
        },
        {
          "id": 41,
          "type": "Creature",
          "title": "Elf",
          "formerNames": null,
          "healthPoints": 100,
          "xpPoints": 42,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9FbGYuZ2lmIn0="
        },
        {
          "id": 62,
          "type": "Creature",
          "title": "Orc Spearman",
          "formerNames": null,
          "healthPoints": 105,
          "xpPoints": 38,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9PcmNfU3BlYXJtYW4uZ2lmIn0="
        },
        {
          "id": 13,
          "type": "Creature",
          "title": "Orc",
          "formerNames": null,
          "healthPoints": 70,
          "xpPoints": 25,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9PcmMuZ2lmIn0="
        },
        {
          "id": 70,
          "type": "Creature",
          "title": "Bear",
          "formerNames": null,
          "healthPoints": 80,
          "xpPoints": 23,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9CZWFyLmdpZiJ9"
        },
        {
          "id": 32,
          "type": "Creature",
          "title": "Wolf",
          "formerNames": null,
          "healthPoints": 25,
          "xpPoints": 18,
          "charmPoints": 5,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Xb2xmLmdpZiJ9"
        },
        {
          "id": 139,
          "type": "Creature",
          "title": "Chicken",
          "formerNames": null,
          "healthPoints": 15,
          "xpPoints": 0,
          "charmPoints": 5,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9DaGlja2VuLmdpZiJ9"
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 698,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 6000,
      "percentage": 0.31,
      "isInestimable": false,
      "item": {
        "id": 143,
        "type": "Item",
        "title": "Crusader Helmet",
        "pluralizedTitle": "Crusader Helmets",
        "formerNames": null,
        "minValue": 6000,
        "maxValue": 8000,
        "npcBuyValue": 6000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0NydXNhZGVyX0hlbG1ldC5naWYifQ=="
      }
    },
    {
      "id": 640,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 5000,
      "percentage": 0.11,
      "isInestimable": false,
      "item": {
        "id": 142,
        "type": "Item",
        "title": "Warrior Helmet",
        "pluralizedTitle": "Warrior Helmets",
        "formerNames": null,
        "minValue": 5000,
        "maxValue": 8000,
        "npcBuyValue": 5000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1dhcnJpb3JfSGVsbWV0LmdpZiJ9"
      }
    },
    {
      "id": 772,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 3000,
      "percentage": 0.05,
      "isInestimable": false,
      "item": {
        "id": 817,
        "type": "Item",
        "title": "Wolf Trophy",
        "pluralizedTitle": "Wolf Trophies",
        "formerNames": null,
        "minValue": 3000,
        "maxValue": null,
        "npcBuyValue": 3000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1dvbGZfVHJvcGh5LmdpZiJ9"
      }
    }
  ],
  "huntRequiredItems": [],
  "huntRequirements": [],
  "huntSupplies": [
    {
      "id": 588,
      "type": "HuntSupply",
      "quantity": 10,
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
      "id": 589,
      "type": "HuntSupply",
      "quantity": 15,
      "vocation": "paladin",
      "supply": {
        "id": 145,
        "type": "Supply",
        "item": {
          "id": 874,
          "type": "Item",
          "title": "Enchanted Spear",
          "pluralizedTitle": "Enchanted Spears",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0VuY2hhbnRlZF9TcGVhci5naWYifQ=="
        }
      }
    },
    {
      "id": 590,
      "type": "HuntSupply",
      "quantity": 1200,
      "vocation": "paladin",
      "supply": {
        "id": 134,
        "type": "Supply",
        "item": {
          "id": 65,
          "type": "Item",
          "title": "Bolt",
          "pluralizedTitle": "Bolts",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0JvbHQuZ2lmIn0="
        }
      }
    },
    {
      "id": 591,
      "type": "HuntSupply",
      "quantity": 1200,
      "vocation": "paladin",
      "supply": {
        "id": 120,
        "type": "Supply",
        "item": {
          "id": 59,
          "type": "Item",
          "title": "Arrow",
          "pluralizedTitle": "Arrows",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0Fycm93LmdpZiJ9"
        }
      }
    }
  ],
  "lootUpdatedAt": "2022-01-09T02:33:01.716Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2022-01-09T02:33:01.680Z",
  "youtubeChannel": {
    "id": 56,
    "type": "YoutubeChannel",
    "name": "Canal do Tibiano",
    "youtubeId": "UCPBwSf6azJ95ihbKUpZPVZQ",
    "verifiedAt": "Thu Jan 06 2022 01:15:30 GMT-0300 (Horário Padrão de Brasília)",
    "user": {
      "id": 1275,
      "type": "User",
      "username": "Thiago",
      "avatar": "skeleton",
      "role": "user",
      "membershipLevel": null
    }
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
