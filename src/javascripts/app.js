document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const fieldItem = document.getElementById('item');
  const basket = document.getElementById('basket-list');
  const basketItemTemplate =  'ITEM <a href="#!" class="secondary-content"><i class="material-icons">close</i></a>';
  const saveLocal = new SaveLocal();
  const storage = saveLocal.getItem('basket') || { values: [] };

  form.addEventListener('submit', (submitEvent) => {
    submitEvent.preventDefault();

    const fieldValue = fieldItem.value;

    if (fieldValue.length === 0) return;

    const newItem = appendItem(fieldValue, 'afterbegin');
    basket.append(newItem);

    saveLocal.setItemArray('basket', fieldValue);
    fieldItem.value = '';
  });

  storage.values.forEach((item) => {
    const newItem = appendItem(item, 'afterbegin');
    basket.append(newItem);
  });

  function appendItem(value, position) {
    const newItem = document.createElement('li');
    newItem.classList.add('collection-item');
    newItem.insertAdjacentHTML(position, basketItemTemplate.replace(/ITEM/g, value));

    newItem.querySelector('a').addEventListener('click', (event) => {
      event.preventDefault();

      let textValue = event.currentTarget.parentElement.textContent;
      textValue = textValue.replace(/ close/g, '');
      saveLocal.removeItem('basket', textValue);

      event.currentTarget.parentElement.remove();
    });

    return newItem;
  }
});
