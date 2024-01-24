const settings = {
  "name": "albion-ridge-designs",
  "state": {
    "frontity": {
      "url": "https://wordpress.albionridgedesigns.com/",
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
          "api": "https://wordpress.albionridgedesigns.com/wp-json",
          "params": {
            acf_format: "standard",
          },
          "url": "https://wordpress.albionridgedesigns.com/",
          "postsPage": "/blog",
          "homepage": "/homepage",
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
    {
      "name": "@frontity/google-analytics",
      "state": {
        "googleAnalytics": {
          "trackingId": "G-YMFEHF3YP3",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
