function PaginationHelper(collection, itemsPerPage){
  this.items = collection;
  this.perPage = itemsPerPage;
}

PaginationHelper.prototype.itemCount = function() {
  return this.items.length;
}

PaginationHelper.prototype.pageCount = function() {
  return Math.ceil(this.itemCount() / this.perPage);
}

PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  const total = this.itemCount();
  const pages = this.pageCount();

  if (pageIndex >= pages || pageIndex < 0) {
    return -1;
  }
  return this.items.slice(pageIndex * this.perPage, total).slice(0, this.perPage).length;
}

PaginationHelper.prototype.pageIndex = function(itemIndex) {
  if (itemIndex < 0 || itemIndex >= this.itemCount()) {
      return -1;
  }
  return Math.floor(itemIndex / this.perPage);
}