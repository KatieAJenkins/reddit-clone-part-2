(function() {
  'use strict';

  angular
    .module("post.component" , ['angularMoment', 'ui.router'])

    .component('post', {
      controller: Controller,
      templateUrl: '/posts/post.template.html',
      styleUrls: '/css/post.css'
    });

    Controller.$inject = ["$http"];

    function Controller ($http) {
      const vm = this;

      vm.$onInit = onInit;
      vm.showPostTemplate = showPostTemplate;
      vm.showPostFormDiv = false;
      vm.submitNewPost = submitNewPost;
      vm.posts = [];
      // vm.createComment = createComment;
      // vm.showCommentForm = showCommentForm;
      // vm.setPropertyName = setPropertyName;
      // vm.increaseVote = increaseVote;
      // vm.decreaseVote = decreaseVote;

      // vm.newComment = {};

      function onInit () {
        // vm.sort = '-votes';
        // vm.propertyName = 'Votes';

        $http.get('/api/posts')
          .then(results => {
            vm.posts = results.data;
        });
      }

      function submitNewPost (title, body, author, image_url) {

        var created_at = new Date();
        var post = {title: title, body: body, author: author, image_url: image_url, created_at: created_at};

        console.log("new post ", post);

        vm.newPostForm.$setPristine();
        vm.newPostForm.$setUntouched();

        $http.post('/api/posts', post)
          .then(response => {
            console.log(response.data);
            vm.posts.push(post);
            delete vm.post;
        });
      }

      function showPostTemplate () {
        vm.showPostFormDiv = !vm.showPostFormDiv
      }

      // function createComment (post) {
      //   post.comments.push(vm.newComment.body)
      //   delete vm.newComment
      // }
      //
      // function showCommentForm (thisPost) {
      //   thisPost.showComment = !thisPost.showComment
      // }

      // function setPropertyName(property) {
      //   vm.sort = property
      //   if(property == '-votes') {
      //     vm.propertyName = 'Votes'
      //   }
      //   else {
      //     vm.propertyName = property.substring(0,1).toUpperCase() + property.substring(1).toLowerCase();
      //   }
      // }
      //
      // function increaseVote (thisPost) {
      //   thisPost.votes += 1;
      // }
      //
      // function decreaseVote (thisPost) {
      //   thisPost.votes -= 1
      // }
    } //end of controller
}());//end of IIFE
