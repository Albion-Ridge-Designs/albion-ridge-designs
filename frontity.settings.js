const settings = {
  "name": "basic-template",
  "state": {
    "frontity": {
      "url": "https://gph.fxx.mybluehost.me/",
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
          "api": "http://gph.fxx.mybluehost.me/.website_64054993/wp-json",
          "params": {
            acf_format: "standard",
          },
          "url": "http://gph.fxx.mybluehost.me/.website_64054993",
          "postsPage": "/blog",
          "homepage": "/homepage", // seems like this fixed it
          // "postTypes": [
          //   {
          //     type: "gallery",
          //     endpoint: "gallery",
          //     archive: "/gallery_category"
          //   },
          // ],
        }
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
