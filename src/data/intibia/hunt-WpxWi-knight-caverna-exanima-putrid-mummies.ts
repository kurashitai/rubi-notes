// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "WpxWi",
  "type": "Hunt",
  "title": "Putrid Mummies",
  "vocation": "knight",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvMzcvYjNhZEszNlktMDAzLWtuaWdodC1jYXZlcm5hLWV4YW5pbWEtcHV0cmlkLW11bW15LnBuZyJ9",
  "minLevel": 90,
  "maxLevel": 150,
  "minProfitH": 30000,
  "maxProfitH": 300000,
  "minXpH": 360000,
  "maxXpH": 460000,
  "upvoteCount": 10,
  "isUpvoted": false,
  "isFavorite": false,
  "videoLanguage": "pt-br",
  "videoLevel": null,
  "status": "published",
  "user": {
    "id": 10,
    "type": "User",
    "username": "HenryKnight",
    "avatar": "skeleton",
    "role": "user",
    "membershipLevel": null
  },
  "videoId": "Wk3Ny8P26_s",
  "videoStartAt": null,
  "centerCoordinates": "33295,32269,12",
  "instructions": "<p>Good hunt for knights level 90+. You get an average experience but a great loot for low levels.</p>\n<p></p>\n<p>There are 3 floors here that you can hunt. Test the box in the first floor to see how many monsters you can handle and, as you feel more confident, go down.</p>\n<p></p>\n<p>🛡️ <strong>Equipment</strong></p>\n<p>The ideal would be using fire weapons but, as you don't have many options on lower levels, you can use your usual physical damage weapon.</p>\n<p></p>\n<p>⚗️ <strong>Charms</strong></p>\n<p>If you have the bestiaries of this hunt, you can put a DODGE rune on Putrid Mummy to receive less damage.</p>\n<p></p>\n<p>🦄 <strong>Boss</strong></p>\n<p>The boss Sandking is in this cave. If you are a higher level you can do it as shown <a href=\"https://www.youtube.com/watch?v=AhWovTTw7yQ\">in this video</a>.</p>",
  "createdAt": "2021-11-13T19:03:06.611Z",
  "updatedAt": "2025-11-01T12:44:23.186Z",
  "dungeon": {
    "id": 344,
    "type": "Dungeon",
    "title": "Caverna Exanima",
    "accountStatus": "premium",
    "entranceCoordinates": "33355,32275,12",
    "entranceDirections": "{\"blocks\":[{\"key\":\"29l75\",\"text\":\"Caverna Exanima is located under Dark Pyramid, north-east of Darashia. To get there:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":15,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"do08h\",\"text\":\"Go to the Dark Pyramid, [map c=\\\"33312,32281,7\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"5tu8u\",\"text\":\"In the floor -4, go down the hole, [map c=\\\"33293,32291,11\\\" map]here[/map].\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"4n\",\"text\":\"If you have completed mission 5 of Cults of Tibia Quest you are able to pass through the door to the north.\",\"type\":\"unordered-list-item\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[{\"offset\":22,\"length\":33,\"key\":0}],\"data\":{}}],\"entityMap\":{\"0\":{\"type\":\"LINK\",\"mutability\":\"MUTABLE\",\"data\":{\"url\":\"https://tibia.fandom.com/wiki/Cults_of_Tibia_Quest#The_Secret_of_the_Sandy_Cave_.28Life.29\"}}}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": false,
      "quest": true,
      "raid": false,
      "worldChange": false
    },
    "city": {
      "id": 8,
      "type": "City",
      "name": "Darashia"
    }
  },
  "requirements": [
    {
      "id": 275,
      "type": "DungeonRequirement",
      "dungeonId": 344,
      "description": "Mission \"The Secret of the Sandy Cave\" done of Cults of Tibia Quest",
      "link": "https://tibia.fandom.com/wiki/Cults_of_Tibia_Quest#The_Secret_of_the_Sandy_Cave_.28Life.29"
    }
  ],
  "sections": [
    {
      "id": 344,
      "type": "DungeonSection",
      "name": "All spawn",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 51,
          "type": "Creature",
          "title": "Giant Spider",
          "formerNames": null,
          "healthPoints": 1300,
          "xpPoints": 900,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9HaWFudF9TcGlkZXIuZ2lmIn0="
        },
        {
          "id": 1159,
          "type": "Creature",
          "title": "Putrid Mummy",
          "formerNames": null,
          "healthPoints": 1500,
          "xpPoints": 900,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9QdXRyaWRfTXVtbXkuZ2lmIn0="
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
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 10137,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 30000,
      "percentage": null,
      "isInestimable": false,
      "item": {
        "id": 1729,
        "type": "Item",
        "title": "Mini Mummy",
        "pluralizedTitle": "Mini Mummies",
        "formerNames": null,
        "minValue": 30000,
        "maxValue": 600000,
        "npcBuyValue": null,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL01pbmlfTXVtbXkuZ2lmIn0="
      }
    },
    {
      "id": 785,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 6000,
      "percentage": 0.1,
      "isInestimable": false,
      "item": {
        "id": 1691,
        "type": "Item",
        "title": "Bonebeast Trophy",
        "pluralizedTitle": "Bonebeast Trophies",
        "formerNames": null,
        "minValue": 6000,
        "maxValue": 20000,
        "npcBuyValue": 6000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0JvbmViZWFzdF9Ucm9waHkuZ2lmIn0="
      }
    },
    {
      "id": 608,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 5000,
      "percentage": 0.49,
      "isInestimable": false,
      "item": {
        "id": 41,
        "type": "Item",
        "title": "Knight Armor",
        "pluralizedTitle": "Knight Armors",
        "formerNames": null,
        "minValue": 5000,
        "maxValue": 6000,
        "npcBuyValue": 5000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0tuaWdodF9Bcm1vci5naWYifQ=="
      }
    }
  ],
  "huntRequiredItems": [
    {
      "id": 24,
      "type": "HuntRequiredItem",
      "dungeonRequiredItem": {
        "id": 18,
        "type": "DungeonRequiredItem",
        "dungeonId": 344,
        "requiredItem": {
          "id": 11,
          "type": "RequiredItem",
          "item": {
            "id": 116,
            "type": "Item",
            "title": "Rope",
            "pluralizedTitle": "Ropes",
            "formerNames": null,
            "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1JvcGUuZ2lmIn0="
          }
        }
      },
      "huntId": 37
    }
  ],
  "huntRequirements": [
    {
      "id": 185,
      "type": "HuntRequirement",
      "huntId": 37,
      "dungeonRequirement": {
        "id": 275,
        "type": "DungeonRequirement",
        "dungeonId": 344,
        "description": "Mission \"The Secret of the Sandy Cave\" done of Cults of Tibia Quest",
        "link": "https://tibia.fandom.com/wiki/Cults_of_Tibia_Quest#The_Secret_of_the_Sandy_Cave_.28Life.29"
      }
    }
  ],
  "huntSupplies": [
    {
      "id": 113,
      "type": "HuntSupply",
      "quantity": 600,
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
      "id": 114,
      "type": "HuntSupply",
      "quantity": 100,
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
    }
  ],
  "lootUpdatedAt": "2021-11-16T13:51:42.460Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-11-13T19:03:06.611Z",
  "youtubeChannel": {
    "id": 1,
    "type": "YoutubeChannel",
    "name": "Henry Knight",
    "youtubeId": "UCgONX028fTKQNrdIWjLN8jg",
    "verifiedAt": "Sat Nov 13 2021 02:10:04 GMT-0300 (Brasilia Standard Time)",
    "user": {
      "id": 10,
      "type": "User",
      "username": "HenryKnight",
      "avatar": "skeleton",
      "role": "user",
      "membershipLevel": null
    }
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
