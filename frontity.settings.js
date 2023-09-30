const settings = {
  "name": "albion-ridge-designs",
  "state": {
    "frontity": {
      "url": "https://wptemplates.albionridgedesigns.com/",
      "title": "Albion Ridge Designs -- Basic Template",
      "description": "Starter theme for projects"
    }
  },
  "packages": [
    {
      "name": "albion-ridge-designs",
      "state": {
        "theme": {
          "featured": {
            "showOnList": true,
            "showOnPost": true
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://wptemplates.albionridgedesigns.com/wp-json",
          "params": {
            acf_format: "standard",
          },
          "url": "https://wptemplates.albionridgedesigns.com/",
          "postsPage": "/blog",
          "homepage": "/homepage", // seems like this fixed it
          "postTypes": [
            {
              type: "menu",
              endpoint: "menu",
              archive: "/menu_category"
            },
            {
              type: "review",
              endpoint: "review",
              archive: "/review_category"
            },
            {
              type: "offering",
              endpoint: "offering",
              archive: "/offering_category"
            },
            {
              type: "timeline",
              endpoint: "timeline",
              archive: "/timeline_category"
            },
          ],
        }
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
