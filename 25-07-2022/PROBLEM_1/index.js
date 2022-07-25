//Given an object with counts of likes and dislikes, return what vote count should be displayed.
function likesDislikes(obj) {

    return obj.upvotes - obj.downvotes;
}
console.log(likesDislikes({ upvotes: 13, downvotes: 0 }))
exports.likesDislikes = likesDislikes