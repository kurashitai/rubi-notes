// Auto-generated from Intibia API. Do not edit manually.
// Includes derived field: teamTag (Solo | Duo | Time x4).

export type IntibiaApiHunt = typeof hunt;

export const hunt = {
  "id": "q1GJc",
  "type": "Hunt",
  "title": null,
  "vocation": "knight",
  "teamSize": "solo",
  "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2h1bnQvaW1hZ2UvOS9jUm5BU3NVVi0wMDQta25pZ2h0LWZvcmVzdC1mdXJ5LWNhbXAucG5nIn0=",
  "minLevel": 25,
  "maxLevel": 80,
  "minProfitH": 15000,
  "maxProfitH": 50000,
  "minXpH": 65000,
  "maxXpH": 90000,
  "upvoteCount": 23,
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
  "videoId": "V8E1CC58RIY",
  "videoStartAt": null,
  "centerCoordinates": "32443,31717,7",
  "instructions": "<p>It's a very good hunt for profiting on low level, free acount knights. The experience per hour is average.</p>\n<p></p>\n<p>You can come here from level 25+, altought it's recommended level 35+ to have a nice profit. It's because the forest furies are slow to kill <em>if you don't do a good damage.</em> The longer you take to kill'em, more stealth rings will be used and less profit will be made.</p>\n<p></p>\n<p>💰<strong> Loot</strong></p>\n<p>Normally 15~50k of profit per hour, which is really good at a low level. It will vary depending on how fast you kill the creatures and how many stealth rings you spend.</p>\n<p></p>\n<p>From level 60+ you don't need stealth rings and you will profit much more.</p>\n<p></p>\n<p>💯 <strong>Experience</strong></p>\n<p>From 65k to 90k per hour and up to 150k/h with green stamina. Not the best place for xp but the focus here is profit.</p>\n<p></p>\n<p>📈<strong> Strategy</strong></p>\n<p>Activate your stealth ring, go up the first floor ([map c=\"32454,31706,7\" map]here[/map]) and walk in circle killing the creatures. There will be towers in each corner. Go up each tower, clean it, then go back to the main floor and continue until the next tower.</p>\n<p></p>\n<p>If you have low level/skills, focus on killing only the Forest Furies. They are a bit weak to fire (5%+), so a fire weapon 🔥 will help you here.</p>",
  "createdAt": "2021-10-27T17:39:35.002Z",
  "updatedAt": "2024-06-19T15:43:11.625Z",
  "dungeon": {
    "id": 244,
    "type": "Dungeon",
    "title": "Forest Fury Camp",
    "accountStatus": "free",
    "entranceCoordinates": "32443,31717,7",
    "entranceDirections": "{\"blocks\":[{\"key\":\"95usc\",\"text\":\"Forest Fury Camp is located to the north-east of Carlin and is easily reachable by land.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":17,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "extra": {
      "hotd": false,
      "mailbox": false,
      "npc": true,
      "quest": false,
      "raid": false,
      "worldChange": true
    },
    "city": {
      "id": 5,
      "type": "City",
      "name": "Carlin"
    }
  },
  "requirements": [],
  "sections": [
    {
      "id": 807,
      "type": "DungeonSection",
      "name": "Surface",
      "position": 1,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 301,
          "type": "Creature",
          "title": "Poacher",
          "formerNames": null,
          "healthPoints": 90,
          "xpPoints": 70,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Qb2FjaGVyLmdpZiJ9"
        },
        {
          "id": 804,
          "type": "Creature",
          "title": "Leaf Golem",
          "formerNames": null,
          "healthPoints": 90,
          "xpPoints": 45,
          "charmPoints": 15,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9MZWFmX0dvbGVtLmdpZiJ9"
        },
        {
          "id": 46,
          "type": "Creature",
          "title": "Goblin",
          "formerNames": null,
          "healthPoints": 50,
          "xpPoints": 25,
          "charmPoints": 5,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Hb2JsaW4uZ2lmIn0="
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
          "id": 33,
          "type": "Creature",
          "title": "Rabbit",
          "formerNames": null,
          "healthPoints": 15,
          "xpPoints": 0,
          "charmPoints": 5,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9SYWJiaXQuZ2lmIn0="
        }
      ]
    },
    {
      "id": 809,
      "type": "DungeonSection",
      "name": "Floor +1",
      "position": 3,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 803,
          "type": "Creature",
          "title": "Forest Fury",
          "formerNames": null,
          "healthPoints": 480,
          "xpPoints": 235,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Gb3Jlc3RfRnVyeS5naWYifQ=="
        },
        {
          "id": 805,
          "type": "Creature",
          "title": "Wilting Leaf Golem",
          "formerNames": null,
          "healthPoints": 380,
          "xpPoints": 145,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9XaWx0aW5nX0xlYWZfR29sZW0uZ2lmIn0="
        }
      ]
    },
    {
      "id": 810,
      "type": "DungeonSection",
      "name": "Floor +2",
      "position": 4,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 803,
          "type": "Creature",
          "title": "Forest Fury",
          "formerNames": null,
          "healthPoints": 480,
          "xpPoints": 235,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Gb3Jlc3RfRnVyeS5naWYifQ=="
        },
        {
          "id": 805,
          "type": "Creature",
          "title": "Wilting Leaf Golem",
          "formerNames": null,
          "healthPoints": 380,
          "xpPoints": 145,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9XaWx0aW5nX0xlYWZfR29sZW0uZ2lmIn0="
        }
      ]
    },
    {
      "id": 811,
      "type": "DungeonSection",
      "name": "Floor +3",
      "position": 5,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 803,
          "type": "Creature",
          "title": "Forest Fury",
          "formerNames": null,
          "healthPoints": 480,
          "xpPoints": 235,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Gb3Jlc3RfRnVyeS5naWYifQ=="
        },
        {
          "id": 805,
          "type": "Creature",
          "title": "Wilting Leaf Golem",
          "formerNames": null,
          "healthPoints": 380,
          "xpPoints": 145,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9XaWx0aW5nX0xlYWZfR29sZW0uZ2lmIn0="
        }
      ]
    },
    {
      "id": 812,
      "type": "DungeonSection",
      "name": "Floor +4",
      "position": 6,
      "groupName": null,
      "groupPosition": null,
      "creatures": [
        {
          "id": 803,
          "type": "Creature",
          "title": "Forest Fury",
          "formerNames": null,
          "healthPoints": 480,
          "xpPoints": 235,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9Gb3Jlc3RfRnVyeS5naWYifQ=="
        },
        {
          "id": 805,
          "type": "Creature",
          "title": "Wilting Leaf Golem",
          "formerNames": null,
          "healthPoints": 380,
          "xpPoints": 145,
          "charmPoints": 25,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2NyZWF0dXJlcy9XaWx0aW5nX0xlYWZfR29sZW0uZ2lmIn0="
        }
      ]
    }
  ],
  "notableLoots": [
    {
      "id": 6525,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 2000,
      "percentage": 0.08,
      "isInestimable": false,
      "item": {
        "id": 1120,
        "type": "Item",
        "title": "Elvish Bow",
        "pluralizedTitle": "Elvish Bows",
        "formerNames": null,
        "minValue": 2000,
        "maxValue": 6500,
        "npcBuyValue": 2000,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL0VsdmlzaF9Cb3cuZ2lmIn0="
      }
    },
    {
      "id": 6531,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 250,
      "percentage": 0.95,
      "isInestimable": false,
      "item": {
        "id": 35,
        "type": "Item",
        "title": "Small Emerald",
        "pluralizedTitle": "Small Emeralds",
        "formerNames": null,
        "minValue": 250,
        "maxValue": null,
        "npcBuyValue": 250,
        "npcSellValue": 500,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1NtYWxsX0VtZXJhbGQuZ2lmIn0="
      }
    },
    {
      "id": 6524,
      "type": "Loot",
      "min": 1,
      "max": 1,
      "value": 200,
      "percentage": 0.48,
      "isInestimable": false,
      "item": {
        "id": 1313,
        "type": "Item",
        "title": "Small Topaz",
        "pluralizedTitle": "Small Topazs",
        "formerNames": null,
        "minValue": 200,
        "maxValue": null,
        "npcBuyValue": 200,
        "npcSellValue": null,
        "isInestimable": false,
        "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1NtYWxsX1RvcGF6LmdpZiJ9"
      }
    }
  ],
  "huntRequiredItems": [],
  "huntRequirements": [],
  "huntSupplies": [
    {
      "id": 17,
      "type": "HuntSupply",
      "quantity": 5,
      "vocation": "knight",
      "supply": {
        "id": 117,
        "type": "Supply",
        "item": {
          "id": 107,
          "type": "Item",
          "title": "Stealth Ring",
          "pluralizedTitle": "Stealth Rings",
          "formerNames": null,
          "image": "https://d13da7bn5qvpko.cloudfront.net/eyJidWNrZXQiOiJpbnRpYmlhLXByb2R1Y3Rpb24iLCJrZXkiOiJ1cGxvYWRzL2l0ZW1zL1N0ZWFsdGhfUmluZy5naWYifQ=="
        }
      }
    }
  ],
  "lootUpdatedAt": "2021-11-15T00:45:47.794Z",
  "lootPendedUpdateAt": null,
  "publishedAt": "2021-10-27T17:39:35.002Z",
  "youtubeChannel": {
    "id": 7,
    "type": "YoutubeChannel",
    "name": "Prrp Grey",
    "youtubeId": "UCxOrBJvGmmKLJ2a8CwFj04g",
    "verifiedAt": null,
    "user": null
  },
  "rejectText": null,
  "teamTag": "Solo"
} as const;

export default hunt;
