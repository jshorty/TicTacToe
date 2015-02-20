var Hanoi = function(){
  this.stacks = [[3,2,1],[],[]];
  this.tower1 = this.stacks[0];
  this.tower2 = this.stacks[1];
  this.tower3 = this.stacks[2];
};

Hanoi.prototype.isWon = function() {
  if (this.stacks[0].length === 0 &&
    (this.stacks[1].length === 0 || this.stacks[2].length === 0)) {
    return true;
  }
  return false;
};

Hanoi.prototype.isValidMove = function(startTowerIdx, endTowerIdx) {
  var start = this.stacks[startTowerIdx];
  var end = this.stacks[endTowerIdx];

  if (start.length === 0) {
    return false;
  }

  if (end.length === 0) {
    return true;
  }
  else if (end[end.length - 1] < start[start.length - 1]) {
    return true;
  }
  else {
    return false;
  }
};
