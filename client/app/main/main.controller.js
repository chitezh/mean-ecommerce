'use strict';

(function() {

  class MainController {

    constructor($http, $scope, $timeout, socket, Catalog, Product) {

      this.featuredBannerA = [{
        'img': 'assets/img/banner/banner-21.jpg',
        'link': '#'
      }, {
        'img': 'assets/img/banner/banner-22.jpg',
        'link': '#'
      }];

      this.featuredBannerB = {
        'img': 'assets/img/banner/banner-24.jpg',
        'link': '/category/fashion'
      };

      this.sliderAreaBanner = {
        'img': 'assets/img/banner/banner-28.jpg',
        'link': '/category/home'
      };

      this.limitedTimeFeatured = false;

      var featuredCategoriesA = [{
        'slug': 'computers-and-accessories',
        'banner': {
          'img': 'assets/img/banner/banner-31.jpg',
          'link': '/category/computers-and-accessories'
        }
      }, {
        'slug': 'fashion',
        'banner': {
          'img': 'assets/img/banner/banner-32.jpg',
          'link': '/category/fashion'
        }
      }];

      var featuredCategoriesB = [{
          'slug': 'home-and-kitchen',
          'banner': {
            'img': 'assets/img/banner/banner-33.jpg',
            'link': '/category/home-and-kitchen'
          }
        }, {
          'slug': 'art-works',
          'banner': {
            'img': 'assets/img/banner/banner-34.jpg',
            'link': '/category/art-works'
          }
        }
        /*, {
                'slug': 'laptops',
                'banner': {
                  'img': 'assets/img/banner/banner-35.jpg',
                  'link': '/category/laptops'
                }
              }*/
      ];

      this.$http = $http;
      this.awesomeThings = [];
      self = this;

      $http.get('/api/things').then(response => {
        this.awesomeThings = response.data;
        socket.syncUpdates('thing', this.awesomeThings);
      });

      let featuredCategoriesDetailsA = [];
      _.each(featuredCategoriesA, function(o) {
        Catalog.get({ id: o.slug }, function(parentCat) {
          let a = {
            title: parentCat.name,
            slug: parentCat.slug,
            banner: o.banner,
            firstChildren: []
          };
          if (parentCat.children.length > 0) {
            _.each(parentCat.children, function(c) {
              Product.catalog({ id: c.slug, limit: 10 }, function(prod) {
                prod = _.map(prod, rP => _.extend(rP, { averageRating: getAverageRating(rP) }));
                let p = {
                  title: c.name,
                  slug: c.slug,
                  products: prod
                };
                a.firstChildren.push(p);
              });
            })
          } else {
            Product.catalog({ id: o.slug, limit: 10 }, function(prod) {
              prod = _.map(prod, rP => _.extend(rP, { averageRating: getAverageRating(rP) }));
              let p = {
                title: o.name,
                slug: o.slug,
                products: prod
              };
              a.firstChildren.push(p);
            });
          }
          featuredCategoriesDetailsA.push(a);
          self.featuredCategoriesDetailsA = featuredCategoriesDetailsA;
        });
      });

      let featuredCategoriesDetailsB = [];
      _.each(featuredCategoriesB, function(o) {
        Catalog.get({ id: o.slug }, function(parentCat) {
          let a = {
            title: parentCat.name,
            slug: parentCat.slug,
            banner: o.banner,
            firstChildren: []
          };
          if (parentCat.children.length > 0) {
            _.each(parentCat.children, function(c) {
              Product.catalog({ id: c.slug, limit: 10 }, function(prod) {
                prod = _.map(prod, rP => _.extend(rP, { averageRating: getAverageRating(rP) }));
                let p = {
                  title: c.name,
                  slug: c.slug,
                  products: prod
                };
                a.firstChildren.push(p);
              });
            })
          } else {
            Product.catalog({ id: o.slug, limit: 10 }, function(prod) {
              prod = _.map(prod, rP => _.extend(rP, { averageRating: getAverageRating(rP) }));
              let p = {
                title: o.name,
                slug: o.slug,
                products: prod
              };
              a.firstChildren.push(p);
            });
          }
          featuredCategoriesDetailsB.push(a);
          self.featuredCategoriesDetailsB = featuredCategoriesDetailsB;
        });
      });


      _.each(featuredCategoriesA, function(slug) {
        self.featuredCategoriesDetailsA = Catalog.get({ id: slug });
      })
    }
  }

  angular.module('bhcmartApp')
    .controller('MainController', MainController);

})();

let getAverageRating = p => Math.ceil(_.reduce(p.reviews, (a, b) => a + b.rating, 0) / p.reviews.length);
