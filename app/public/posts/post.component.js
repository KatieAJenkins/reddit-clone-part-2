(function() {
  'use strict';

  angular
    // .module("post.component" , ['angularMoment', 'ui.router'])
    .module ("app")

    .component('post', {
      controller: Controller,
      templateUrl: '/posts/post.template.html',
      styleUrls: '/css/post.css'
    });

    Controller.$inject = ["$http"];

    function Controller ($http) {
      const vm = this;
      vm.$onInit = onInit;

      vm.$onInit = onInit;
      vm.showPostTemplate = showPostTemplate;
      vm.showPostFormDiv = false;
      vm.submitNewPost = submitNewPost;
      vm.posts = [];
      vm.showCommentForm = showCommentForm;
      vm.createComment = createComment;
      vm.newComment = {};
      vm.setPropertyName = setPropertyName;
      vm.increaseVote = increaseVote;
      vm.decreaseVote = decreaseVote;


      function onInit () {
        // console.log("post component loading");
        vm.sort = '-votes';
        vm.propertyName = 'Votes';

        $http.get('/api/posts')
          .then(results => {
            vm.posts = results.data;
        });
      }

      function submitNewPost (title, body, author, image_url) {

        var created_at = new Date();
        var post = {title: title,  author: author, body: body, image_url: image_url, created_at: created_at};

        console.log("new post ", post);

        vm.newPostForm.$setPristine();
        vm.newPostForm.$setUntouched();

        $http.post('/api/posts', post)
          .then(response => {
            response.data.comments = [];
            vm.posts.push(response.data);
            delete vm.post;
            vm.showPostFormDiv = !vm.showPostFormDiv
        });
      }

      function showPostTemplate () {
        vm.showPostFormDiv = !vm.showPostFormDiv;
      }

      function showCommentForm (thisPost) {
        thisPost.showComment = !thisPost.showComment;
      }

      function createComment (post) {
        console.log(post);
        post.comments.push(vm.newComment.body);
        console.log(vm.newComment.body);
        console.log(vm.newComment);
        delete vm.newComment;
        post.showComment = !post.showComment;
      }


      function setPropertyName(property) {
        vm.sort = property
        if(property == '-votes') {
          vm.propertyName = 'Votes'
        }
        else {
          vm.propertyName = property.substring(0,1).toUpperCase() + property.substring(1).toLowerCase();
        }
      }

      function increaseVote (thisPost) {
        thisPost.votes += 1;
      }

      function decreaseVote (thisPost) {
        thisPost.votes -= 1
      }
    } //end of controller
}());//end of IIFE
