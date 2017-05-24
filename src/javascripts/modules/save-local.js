function SaveLocal() {
  this.getItem = key => JSON.parse(localStorage.getItem(key));

  this.setItem = (key, value) => localStorage.setItem(key, value);

  this.removeItem = (key, value) => {
    const item = this.getItem(key);

    if (item) item.values.splice(item.values.indexOf(value), 1);

    this.setItem(key, JSON.stringify(item));
  };

  this.setItemArray = function(key, value) {
    const item = this.getItem(key);
    const list = item || { values: [] };

    list.values.push(value);

    this.setItem(key, JSON.stringify(list));
  };
}
